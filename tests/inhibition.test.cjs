/* Run from any directory: node --test tests/inhibition.test.cjs
 * No browser or new dependency: execute the actual TS methods in a VM.
 * Lit tags preserve template values (including event handlers), not a DOM.
 * These tests do not validate CSS, focus in a browser, or HA service delivery.
 */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const sourcePath = path.join(__dirname, '../src/versatile-thermostat-ui.ts');
const source = ts.createSourceFile(sourcePath, fs.readFileSync(sourcePath, 'utf8'),
    ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
assert.equal(source.parseDiagnostics.length, 0, 'Card source must parse');
const cardClass = source.statements.find(node => ts.isClassDeclaration(node)
    && node.name?.text === 'VersatileThermostatUi');
assert.ok(cardClass, 'Actual card class must exist');
const names = [
    '_canToggleInhibitionBypass', '_handleToggleInhibitionBypass',
    '_renderInhibitionIcon', 'willUpdate', '_renderClassicContent', 'render',
];
const members = names.map(name => {
    const member = cardClass.members.find(node => node.name?.getText(source) === name);
    assert.ok(member, `Actual card member ${name} must exist`);
    return member.getText(source);
});
// Reuse production constants as well; no business expressions are reimplemented.
const constants = source.statements.filter(ts.isVariableStatement)
    .map(node => node.getText(source)).join('\n');
const template = (strings, ...values) => ({ strings, values });
function text(value) {
    if (value == null || typeof value === 'function') return '';
    if (Array.isArray(value)) return value.map(text).join('');
    if (value.strings) return value.strings.reduce((result, part, index) =>
        result + part + (index < value.values.length ? text(value.values[index]) : ''), '');
    return String(value);
}
// Inspect a Lit binding without converting callbacks into strings or executing them.
function binding(result, name) {
    const index = result.strings.findIndex(part => part.trimEnd().endsWith(`${name}=`));
    assert.notEqual(index, -1, `Missing binding ${name}`);
    return result.values[index];
}
const context = {
    html: template, svg: template,
    localize: ({ string }) => string,
    classMap: values => Object.keys(values).filter(key => values[key]).join(' '),
    renderGunmalmg: () => template`<gunmalmg-mock></gunmalmg-mock>`,
    console: { log() { }, error() { } },
};
for (const node of source.statements) {
    if (ts.isImportDeclaration(node) && node.moduleSpecifier.text === '@mdi/js') {
        for (const element of node.importClause.namedBindings.elements) {
            context[element.name.text] = element.name.text;
        }
    }
}
const compiled = ts.transpileModule(`${constants}\nclass TestCard {\n${members.join('\n')}\n}\nglobalThis.TestCard = TestCard;`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None },
    reportDiagnostics: true,
});
assert.equal(compiled.diagnostics.length, 0, 'Extracted production members must transpile');
vm.runInNewContext(compiled.outputText, context, { filename: sourcePath, timeout: 1000 });
const TestCard = context.TestCard;
const CLIMATE = 'climate.regression';
const SWITCH = 'switch.custom_inhibition_bypass';
const INHIBITED = 'extra_states.hvac_off_inhibition';
const BYPASSED = 'extra_states.inhibition_bypass';

function fixture({ specific = {}, switchState = 'off', config = {}, attributes = {} } = {}) {
    const card = new TestCard();
    const calls = [];
    const climate = {
        state: 'heat',
        attributes: {
            friendly_name: 'Regression', hvac_action: 'idle', temperature: 20,
            current_temperature: 19, hvac_modes: ['heat', 'off'], preset_modes: [],
            specific_states: specific, ...attributes,
        },
    };
    Object.assign(card, {
        _config: {
            entity: CLIMATE, theme: 'classic', inhibitionBypassEntity: SWITCH,
            disable_buttons: true, disable_presets: true, disable_menu: true, ...config,
        },
        hass: {
            states: { [CLIMATE]: climate, [SWITCH]: { state: switchState } },
            callService: (...args) => { calls.push(args); return Promise.resolve(); },
        },
        _isLocked: false, isUserLocked: false,
        _isInhibited: false, _isInhibitionBypassed: false,
        effectiveDisableCircle: false, effectiveDisableBackgroundColor: false,
        _externalPowerInfos: [], enteredCode: '',
        _willUpdatePower() { }, _updateDisplay() { },
        buildTitle: () => '',
        _renderStatusText: () => '', _renderTemperature: () => '',
        _renderHVACAction: () => '', _renderIcon: () => '',
        _renderMessagesButton: () => template`<info-button-mock></info-button-mock>`,
        _renderHumidityInfo: () => '', _renderPresetModificationPanel: () => '',
        _renderRegulationChartPanel: () => '',
    });
    card.willUpdate(new Map([['hass', undefined]]));
    return { card, calls, climate };
}

function updateSwitch(card, state) {
    const oldHass = card.hass;
    card.hass = { ...oldHass, states: { ...oldHass.states } };
    const id = card._config.inhibitionBypassEntity;
    if (state === undefined) delete card.hass.states[id];
    else card.hass.states[id] = { state };
    card.willUpdate(new Map([['hass', oldHass]]));
    assert.equal(card.hass.states[CLIMATE], oldHass.states[CLIMATE], 'Climate identity unchanged');
}

test('inhibited comes strictly from the native boolean, independently of messages/reason', () => {
    for (const inhibited of [true, false, undefined, null, 'true', 1]) {
        for (const explanation of [
            {}, { hvac_mode_reason: 'hvac_off_inhibition' },
            { messages: ['hvac_off_inhibition'] },
            { hvac_mode_reason: 'unrelated', messages: ['inhibition_bypass'] },
        ]) {
            const { card } = fixture({ specific: { inhibition: { inhibited }, ...explanation } });
            assert.equal(card._isInhibited, inhibited === true, JSON.stringify({ inhibited, explanation }));
        }
    }
    for (const specific of [{}, { inhibition: null }]) {
        assert.equal(fixture({ specific }).card._isInhibited, false);
    }
});

test('bypass follows switch changes while the climate object stays identical', () => {
    const { card } = fixture({ specific: { inhibition: { inhibited: true, bypassed: true } } });
    assert.equal(card._isInhibitionBypassed, false, 'Do not infer bypass from climate attributes');
    for (const state of ['on', 'off', 'on', 'unknown', 'unavailable', undefined]) {
        updateSwitch(card, state);
        assert.equal(card._isInhibitionBypassed, state === 'on');
        assert.equal(card._isInhibited, true, 'Bypass must not optimistically clear inhibition');
        assert.equal(card.messages.includes(BYPASSED), state === 'on');
    }
});

test('changing/removing the configured switch recomputes bypass with unchanged hass/climate', () => {
    const { card, climate } = fixture();
    card.hass.states['switch.other'] = { state: 'on' };
    const hass = card.hass;
    for (const id of ['switch.other', SWITCH, 'switch.other', undefined]) {
        const oldConfig = card._config;
        card._config = { ...oldConfig, inhibitionBypassEntity: id };
        card.willUpdate(new Map([['_config', oldConfig]]));
        assert.equal(card._isInhibitionBypassed, id === 'switch.other');
        assert.equal(card.hass, hass);
        assert.equal(card.stateObj, climate);
    }
});

test('missing inhibition/bypass messages are added once without mutating backend messages', () => {
    for (const messages of [undefined, [], ['unrelated'], ['hvac_off_inhibition'],
        ['inhibition_bypass'], ['hvac_off_inhibition', 'inhibition_bypass'], 'hvac_off_inhibition']) {
        const before = JSON.stringify(messages);
        const { card } = fixture({ switchState: 'on', specific: { inhibition: { inhibited: true }, messages } });
        assert.equal(card.messages.filter(msg => msg === INHIBITED).length, 1);
        assert.equal(card.messages.filter(msg => msg === BYPASSED).length, 1);
        updateSwitch(card, 'on');
        assert.equal(card.messages.filter(msg => msg === INHIBITED).length, 1);
        assert.equal(card.messages.filter(msg => msg === BYPASSED).length, 1);
        assert.equal(JSON.stringify(messages), before);
        if (Array.isArray(messages) && messages.includes('unrelated')) {
            assert.ok(card.messages.includes('extra_states.unrelated'));
        }
    }
    const { card } = fixture();
    assert.ok(!card.messages.includes(INHIBITED));
    assert.ok(!card.messages.includes(BYPASSED));
});

test('toggle uses explicit turn_on/turn_off from the live switch, not cached bypass', () => {
    const { card, calls } = fixture({ specific: { inhibition: { inhibited: true } } });
    card._isInhibitionBypassed = true; // Deliberately stale presentation state.
    assert.equal(card._canToggleInhibitionBypass(), true);
    card._handleToggleInhibitionBypass();
    card._isInhibitionBypassed = false;
    card.hass.states[SWITCH] = { state: 'on' }; // No willUpdate before this click.
    card._handleToggleInhibitionBypass();
    assert.deepEqual(JSON.parse(JSON.stringify(calls)), [
        ['switch', 'turn_on', { entity_id: SWITCH }],
        ['switch', 'turn_off', { entity_id: SWITCH }],
    ]);
    assert.equal(card._isInhibited, true);
});

for (const scenario of ['user lock', 'no config', 'no switch config', 'missing switch',
    'unknown', 'unavailable', 'invalid state', 'wrong domain', 'no hass']) {
    test(`toggle is blocked: ${scenario}`, () => {
        const { card, calls } = fixture();
        if (scenario === 'user lock') card.isUserLocked = true;
        if (scenario === 'no config') card._config = undefined;
        if (scenario === 'no switch config') delete card._config.inhibitionBypassEntity;
        if (scenario === 'missing switch') delete card.hass.states[SWITCH];
        if (['unknown', 'unavailable', 'invalid state'].includes(scenario)) {
            card.hass.states[SWITCH] = { state: scenario };
        }
        if (scenario === 'wrong domain') {
            card._config.inhibitionBypassEntity = 'input_boolean.bypass';
            card.hass.states['input_boolean.bypass'] = { state: 'on' };
        }
        if (scenario === 'no hass') card.hass = undefined;
        assert.equal(card._canToggleInhibitionBypass(), false);
        card._handleToggleInhibitionBypass();
        assert.equal(calls.length, 0);
    });
}

test('automation-only lock does not block user bypass, user lock does', () => {
    for (const lockUsers of [false, true]) {
        const { card, calls } = fixture({
            attributes: {
                is_lock_configured: true,
                lock_manager: { is_locked: true, lock_users: lockUsers, lock_automations: true },
            }
        });
        assert.equal(card.isUserLocked, lockUsers);
        card._handleToggleInhibitionBypass();
        assert.equal(calls.length, lockUsers ? 0 : 1);
    }
});

for (const theme of ['classic', 'vtherm', 'uncolored']) {
    test(`${theme}: inhibition/bypass replaces secondary icons, preserving information`, () => {
        for (const [inhibited, bypass] of [[true, 'off'], [false, 'on'], [true, 'on'], [false, 'off']]) {
            const { card } = fixture({
                config: { theme }, switchState: bypass,
                specific: { inhibition: { inhibited } }
            });
            Object.assign(card, {
                _hasWindow: true, _hasOverpowering: true,
                _hasPresence: true, _hasAutoStartStop: true, _hasMotion: true
            });
            const output = text(card._renderClassicContent());
            const visible = inhibited || bypass === 'on';
            assert.equal(output.includes('inhibition-icon'), visible);
            for (const icon of ['mdiWindowOpenVariant', 'mdiFlashAlert', 'mdiHomeAccount', 'mdiPowerSleep', 'mdiMotionSensor']) {
                assert.equal(output.includes(icon), !visible, icon);
            }
            assert.equal(output.includes('info-button-mock'), visible);
            if (bypass === 'on') {
                assert.match(output, /inhibition-icon bypassed/);
                assert.match(output, /mdiDebugStepOver/);
            } else if (inhibited) assert.match(output, /mdiPauseCircleOutline/);
            assert.equal(card._renderingAsClassic, false);
        }
    });
}

test('Gunmalmg and its classic popup exclude inhibition icons and synthesized messages', () => {
    const { card } = fixture({
        config: { theme: 'gunmalmg' }, switchState: 'on',
        specific: { inhibition: { inhibited: true } }
    });
    assert.deepEqual(Array.from(card.messages), []);
    assert.match(text(card.render()), /gunmalmg-mock/);
    for (const popup of [false, true]) {
        card._hasMotion = true;
        const output = text(card._renderClassicContent(popup));
        assert.doesNotMatch(output, /inhibition-icon/);
        assert.match(output, /mdiMotionSensor/);
        assert.equal(output.includes('in-popup'), popup);
    }
    const backend = fixture({
        config: { theme: 'gunmalmg' },
        specific: { messages: ['hvac_off_inhibition'] }
    }).card;
    assert.deepEqual(Array.from(backend.messages), [INHIBITED], 'Keep existing backend messages');
});

test('interactive icon has accessible labels, button semantics, click and keyboard support', () => {
    for (const bypass of ['off', 'on']) {
        const { card, calls } = fixture({
            switchState: bypass,
            specific: { inhibition: { inhibited: bypass === 'off' } }
        });
        const icon = card._renderInhibitionIcon();
        const label = `${bypass === 'off' ? INHIBITED : BYPASSED}. extra_states.inhibition_bypass_${bypass === 'off' ? 'enable' : 'disable'}`;
        assert.equal(binding(icon, 'role'), 'button');
        assert.equal(binding(icon, 'tabindex'), '0');
        assert.equal(binding(icon, 'aria-disabled'), 'false');
        assert.equal(binding(icon, 'aria-label'), label);
        assert.ok(text(icon).includes(`<title>${label}</title>`));
        let clickStopped = false;
        binding(icon, '@click').call(card, { stopPropagation() { clickStopped = true; } });
        assert.equal(clickStopped, true);
        const keydown = binding(icon, '@keydown');
        for (const key of ['Enter', ' ', 'Escape', 'Tab']) {
            let prevented = false;
            let stopped = false;
            const before = calls.length;
            keydown({ key, preventDefault() { prevented = true; }, stopPropagation() { stopped = true; } });
            const activates = key === 'Enter' || key === ' ';
            assert.equal(prevented, activates, key);
            assert.equal(stopped, activates, key);
            assert.equal(calls.length - before, activates ? 1 : 0, key);
        }
        assert.equal(calls.length, 3);
        // A callback already rendered before locking must still respect the live lock.
        card.isUserLocked = true;
        binding(icon, '@click').call(card);
        keydown({ key: 'Enter', preventDefault() { }, stopPropagation() { } });
        assert.equal(calls.length, 3);
    }
});

test('non-interactive icon remains labelled, disabled and outside the tab order', () => {
    for (const state of ['off', 'unknown', 'unavailable', undefined]) {
        const { card, calls } = fixture({ specific: { inhibition: { inhibited: true } } });
        updateSwitch(card, state);
        if (state === 'off') card.isUserLocked = true;
        const icon = card._renderInhibitionIcon();
        assert.equal(binding(icon, 'role'), 'img');
        assert.equal(binding(icon, 'tabindex'), '-1');
        assert.equal(binding(icon, 'aria-disabled'), 'true');
        assert.equal(binding(icon, 'aria-label'), INHIBITED);
        assert.ok(text(icon).includes(`<title>${INHIBITED}</title>`));
        binding(icon, '@click').call(card);
        binding(icon, '@keydown')({ key: ' ', preventDefault() { }, stopPropagation() { } });
        assert.equal(calls.length, 0);
    }
});

test('bypass entity selector is in the shared entity grid for every theme', () => {
    const editorPath = path.join(__dirname, '../src/versatile-thermostat-ui-card-editor.ts');
    const editorSource = ts.createSourceFile(editorPath, fs.readFileSync(editorPath, 'utf8'),
        ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    assert.equal(editorSource.parseDiagnostics.length, 0, 'Editor source must parse');
    const schemaDeclaration = editorSource.statements.find(node => ts.isVariableStatement(node)
        && node.declarationList.declarations.some(declaration => declaration.name.getText(editorSource) === 'computeSchema'));
    assert.ok(schemaDeclaration, 'Actual editor schema factory must exist');
    const declaration = schemaDeclaration.declarationList.declarations.find(item => item.name.getText(editorSource) === 'computeSchema');
    const factory = declaration.initializer.arguments[0];
    const editorContext = {};
    const compiledFactory = ts.transpileModule(`globalThis.computeSchema = ${factory.getText(editorSource)};`, {
        compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None },
        reportDiagnostics: true,
    });
    assert.equal(compiledFactory.diagnostics.length, 0, 'Actual editor schema factory must transpile');
    vm.runInNewContext(compiledFactory.outputText, editorContext, { filename: editorPath, timeout: 1000 });

    for (const theme of ['classic', 'vtherm', 'uncolored', 'gunmalmg']) {
        const isGunmalmg = theme === 'gunmalmg';
        const schema = editorContext.computeSchema([], isGunmalmg);
        const entityGrid = schema.find(item => item.type === 'grid');
        assert.ok(entityGrid.schema.some(item => item.name === 'inhibitionBypassEntity'),
            `${theme}: bypass selector must appear with entity options`);
        const themeSpecificSection = schema.find(item => item.name === 'section_classic_only');
        assert.equal(themeSpecificSection?.schema.some(item => item.name === 'inhibitionBypassEntity') ?? false, false,
            `${theme}: bypass selector must not depend on the Classic/VTherm/Uncolored section`);
    }
});