const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const sourcePath = path.join(__dirname, "../src/regulation-chart.ts");
const source = ts.createSourceFile(
    sourcePath,
    fs.readFileSync(sourcePath, "utf8"),
    ts.ScriptTarget.Latest,
    true,
);
const chartClass = source.statements.find(
    (node) =>
        ts.isClassDeclaration(node) && node.name?.text === "VtRegulationChart",
);
const names = [
    "connectedCallback",
    "disconnectedCallback",
    "_initChart",
    "_destroyChart",
    "_resolveColor",
    "_updateChart",
    "_applyInitialView",
    "_zoomTo2h",
];
const members = names.map((name) => {
    const member = chartClass.members.find(
        (node) => node.name?.getText(source) === name,
    );
    assert.ok(member, `Missing production method ${name}`);
    return member.getText(source);
});
const compiled = ts.transpileModule(
    `class TestChart extends Base { ${members.join("\n")} } globalThis.TestChart = TestChart;`,
    {
        compilerOptions: {
            target: ts.ScriptTarget.ES2022,
            module: ts.ModuleKind.CommonJS,
        },
    },
);

function fixture({ slow = false, hasUpdated = true } = {}) {
    const instances = [];
    let release;
    class Chart {
        static register() {}
        constructor(canvas, config) {
            this.data = config.data;
            this.resizes = 0;
            this.zooms = 0;
            instances.push(this);
        }
        update() {}
        resize() {
            this.resizes++;
        }
        zoomScale() {
            this.zooms++;
        }
        destroy() {
            this.destroyed = true;
        }
    }
    const module = { Chart, registerables: [] };
    const chartModule = slow
        ? new Promise((resolve) => {
              release = () => resolve(module);
          })
        : module;
    const context = {
        Base: class {
            connectedCallback() {}
            disconnectedCallback() {}
        },
        require: (name) => (name === "chart.js" ? chartModule : {}),
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        localize: ({ string }) => string,
        console,
    };
    vm.runInNewContext(compiled.outputText, context, { filename: sourcePath });
    const chart = new context.TestChart();
    Object.assign(chart, {
        hasUpdated,
        visible: true,
        _chart: null,
        _chartReady: false,
        _destroyed: false,
        _chartGeneration: 0,
        _initialViewSet: false,
        _history: [{ timestamp: Date.now(), targetTemp: 20, roomTemp: 19 }],
        shadowRoot: { querySelector: () => ({}) },
    });
    return { chart, instances, release };
}

const flush = () => new Promise((resolve) => setImmediate(resolve));

test("reconnecting recreates the chart and restores its data and initial view", async () => {
    const { chart, instances } = fixture();
    await chart._initChart();
    chart._applyInitialView();
    chart.disconnectedCallback();
    assert.equal(instances[0].destroyed, true);
    chart.connectedCallback();
    await flush();
    assert.equal(instances.length, 2);
    assert.equal(chart._chartReady, true);
    assert.equal(instances[1].resizes, 1);
    assert.equal(instances[1].zooms, 1);
    assert.equal(instances[1].data.datasets[0].data.length, 1);
});

test("slow initial loading followed by reconnection creates only one chart", async () => {
    const { chart, instances, release } = fixture({ slow: true });
    const initial = chart._initChart();
    chart.disconnectedCallback();
    chart.connectedCallback();
    release();
    await initial;
    await flush();
    assert.equal(instances.length, 1);
    assert.equal(chart._chartReady, true);
    assert.equal(instances[0].resizes, 1);
});

test("pending initialization cannot create a chart while disconnected", async () => {
    const { chart, instances, release } = fixture({ slow: true });
    const initial = chart._initChart();
    chart.disconnectedCallback();
    release();
    await initial;
    assert.equal(instances.length, 0);
});

test("first connection leaves initialization to firstUpdated and existing charts are reused", async () => {
    const { chart, instances } = fixture({ hasUpdated: false });
    chart.connectedCallback();
    await flush();
    assert.equal(instances.length, 0);
    await chart._initChart();
    await chart._initChart();
    assert.equal(instances.length, 1);
});
