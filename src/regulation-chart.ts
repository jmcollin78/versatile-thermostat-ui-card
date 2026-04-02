/**
 * Regulation Chart Component
 * Displays a dual-axis time chart for regulation data:
 *   - Left Y axis: temperatures (target_temp, room_temp, regulated_temp)
 *   - Right Y axis: percentage (power_percent)
 *   - X axis: time
 *
 * Features: zoom (wheel), pan (drag), 24h history fetch, dark mode support.
 */

import { LitElement, html, css, CSSResultGroup, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/** A single data point stored in the chart history */
export interface RegulationDataPoint {
  timestamp: number;           // Unix ms
  targetTemp: number | null;
  roomTemp: number | null;
  regulatedTemp: number | null;
  powerPercent: number | null;
}

@customElement('vt-regulation-chart')
export class VtRegulationChart extends LitElement {
  /** Maximum number of data points to keep in memory (live data) */
  static readonly MAX_POINTS = 1440;   // 24 h @ 1-min intervals

  /** Home Assistant instance — needed to fetch history */
  @property({ attribute: false }) public hass: any = null;
  /** Climate entity_id — used to fetch history */
  @property({ type: String }) public entityId: string = '';
  /** Whether the chart panel is visible — triggers resize when becoming true */
  @property({ type: Boolean }) public visible: boolean = false;

  @property({ type: Number }) public targetTemp: number | null = null;
  @property({ type: Number }) public roomTemp: number | null = null;
  @property({ type: Number }) public regulatedTemp: number | null = null;
  @property({ type: Number }) public powerPercent: number | null = null;

  @state() private _history: RegulationDataPoint[] = [];
  @state() private _loading = false;

  private _chart: any = null;
  private _canvas: HTMLCanvasElement | null = null;
  private _chartReady = false;
  private _destroyed = false;
  private _lastEntityId = '';

  // ─── Lifecycle ────────────────────────────────────────────────────────────

  connectedCallback() {
    super.connectedCallback();
    this._destroyed = false;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._destroyed = true;
    this._destroyChart();
  }

  protected async firstUpdated() {
    console.log('[VtRegulationChart] firstUpdated — entityId:', this.entityId, 'hasHass:', !!this.hass,
      'visible:', this.visible, 'targetTemp:', this.targetTemp, 'roomTemp:', this.roomTemp, 'powerPercent:', this.powerPercent);
    await this._initChart();
    // Inject current values immediately
    this._addLiveDataPoint();
    // Fetch history in the background
    if (this.entityId && this.hass) {
      this._lastEntityId = this.entityId;
      await this._fetchHistory();
    }
    // Resize+paint only if already visible, otherwise wait for visible=true
    if (this.visible && this._chartReady) {
      this._chart?.resize();
      this._updateChart();
    }
  }

  protected updated(changedProps: PropertyValues) {
    // When panel becomes visible: resize the canvas (was 0×0 while hidden) then repaint
    if (changedProps.has('visible') && this.visible && this._chartReady) {
      console.log('[VtRegulationChart] became visible — resizing chart, history size:', this._history.length);
      // Use rAF to ensure the DOM has been reflowed before measuring canvas size
      requestAnimationFrame(() => {
        this._chart?.resize();
        this._updateChart();
      });
      return;
    }

    // Reload history when entityId changes
    if (changedProps.has('entityId') && this.entityId && this.entityId !== this._lastEntityId) {
      this._lastEntityId = this.entityId;
      this._history = [];
      this._fetchHistory().then(() => {
        if (this._chartReady && this.visible) {
          this._chart?.resize();
          this._updateChart();
        }
      });
      return;
    }

    // Add live data when values change
    const dataKeys = ['targetTemp', 'roomTemp', 'regulatedTemp', 'powerPercent'];
    const hasDataChange = dataKeys.some(k => changedProps.has(k));
    if (hasDataChange && (this.targetTemp !== null || this.roomTemp !== null || this.powerPercent !== null)) {
      this._addLiveDataPoint();
      if (this._chartReady && this.visible) this._updateChart();
    }
  }

  // ─── Data management ──────────────────────────────────────────────────────

  /**
   * Fetches 24h of history from the HA history API.
   * Extracts target_temp, room_temp, regulated_temp, power_percent
   * from the climate entity's attribute history.
   */
  private async _fetchHistory() {
    if (!this.hass || !this.entityId) {
      console.warn('[VtRegulationChart] Cannot fetch history: hass or entityId missing', { entityId: this.entityId, hasHass: !!this.hass });
      return;
    }
    this._loading = true;
    const end = new Date();
    const start = new Date(end.getTime() - 24 * 60 * 60 * 1000);
    // significant_changes_only=false → get ALL changes, not just hvac_mode changes
    const path = `history/period/${start.toISOString()}?filter_entity_id=${this.entityId}&end_time=${end.toISOString()}&significant_changes_only=false&minimal_response=false`;
    try {
      console.log('[VtRegulationChart] Fetching history:', path);
      const result: any[][] = await this.hass.callApi('GET', path);
      if (!Array.isArray(result) || result.length === 0) {
        console.warn('[VtRegulationChart] Empty history result', result);
        return;
      }
      const entityHistory: any[] = result[0];
      console.log(`[VtRegulationChart] Got ${entityHistory.length} history entries`);
      // Log first entry attributes to check attribute paths
      if (entityHistory.length > 0) {
        console.log('[VtRegulationChart] First state sample:', JSON.stringify(entityHistory[0].attributes));
      }
      const mapped: RegulationDataPoint[] = entityHistory
        .filter(s => s.attributes && s.last_updated)
        .map(s => ({
          timestamp: new Date(s.last_updated).getTime(),
          targetTemp: s.attributes.temperature ?? null,
          roomTemp: s.attributes.current_temperature ?? null,
          regulatedTemp:
            s.attributes?.vtherm_over_climate?.regulation?.regulated_target_temperature ??
            s.attributes?.regulated_target_temperature ??
            null,
          powerPercent:
            s.attributes?.power_percent ??
            s.attributes?.specific_states?.power_percent ??
            s.attributes?.vtherm_over_switch?.power_percent ??
            s.attributes?.vtherm_over_climate?.valve_regulation?.power_percent ??
            null,
        }))
        .filter(p => p.targetTemp !== null || p.roomTemp !== null);
      console.log(`[VtRegulationChart] Mapped ${mapped.length} valid points (targetTemp/roomTemp non-null)`);
      // Merge history with any already-accumulated live points (keep live points at the end)
      const lastHistoryTs = mapped.length > 0 ? mapped[mapped.length - 1].timestamp : 0;
      const futurePoints = this._history.filter(p => p.timestamp > lastHistoryTs);
      this._history = [...mapped, ...futurePoints].slice(-VtRegulationChart.MAX_POINTS);
    } catch (err) {
      console.error('[VtRegulationChart] History fetch failed:', err);
    } finally {
      this._loading = false;
    }
  }

  /** Appends a live data point, replacing the last one if it is < 30s old. */
  private _addLiveDataPoint() {
    const now = Date.now();
    const last = this._history[this._history.length - 1];
    const point: RegulationDataPoint = {
      timestamp: now,
      targetTemp: this.targetTemp,
      roomTemp: this.roomTemp,
      regulatedTemp: this.regulatedTemp ?? null,
      powerPercent: this.powerPercent,
    };
    if (last && (now - last.timestamp) < 30_000) {
      // Update in place — avoid micro-noise points
      this._history = [...this._history.slice(0, -1), point];
    } else {
      this._history = [...this._history, point].slice(-VtRegulationChart.MAX_POINTS);
    }
  }

  // ─── Chart initialisation ─────────────────────────────────────────────────

  /**
   * Reads resolved HA CSS variables to get colours that work in both
   * light and dark mode. Chart.js does NOT evaluate CSS variables
   * natively, so we resolve them at init time via getComputedStyle.
   */
  private _resolveColor(variable: string, fallback: string): string {
    const val = getComputedStyle(this).getPropertyValue(variable).trim();
    return val || fallback;
  }

  private async _initChart() {
    if (this._destroyed) return;
    this._canvas = this.shadowRoot?.querySelector('canvas') ?? null;
    if (!this._canvas) return;

    try {
      const [
        { Chart, registerables },
        { default: zoomPlugin },
      ] = await Promise.all([
        import('chart.js'),
        import('chartjs-plugin-zoom'),
      ]);
      await import('chartjs-adapter-date-fns');

      if (this._destroyed) return;
      Chart.register(...registerables, zoomPlugin);

      // Resolve HA theme colours — works in both dark and light mode
      const textColor      = this._resolveColor('--primary-text-color',   '#e5e5e5');
      const secondaryColor = this._resolveColor('--secondary-text-color',  '#9e9e9e');
      const gridColor      = 'rgba(128,128,128,0.18)';

      this._chart = new Chart(this._canvas, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'Consigne',
              data: [],
              borderColor: '#f9a21f',
              backgroundColor: 'rgba(249,162,31,0.08)',
              borderWidth: 2,
              pointRadius: 2,
              pointHoverRadius: 5,
              tension: 0.3,
              yAxisID: 'yTemp',
            },
            {
              label: 'Pièce',
              data: [],
              borderColor: '#3a9ff2',
              backgroundColor: 'rgba(58,159,242,0.08)',
              borderWidth: 2,
              pointRadius: 2,
              pointHoverRadius: 5,
              tension: 0.3,
              yAxisID: 'yTemp',
            },
            {
              label: 'Régulée',
              data: [],
              borderColor: '#5dd461',
              backgroundColor: 'rgba(93,212,97,0.08)',
              borderWidth: 2,
              borderDash: [5, 4],
              pointRadius: 2,
              pointHoverRadius: 5,
              tension: 0.3,
              yAxisID: 'yTemp',
              hidden: true,   // shown only when data exists
            },
            {
              label: 'Puissance %',
              data: [],
              borderColor: '#f75252',
              backgroundColor: 'rgba(247,82,82,0.12)',
              borderWidth: 1.5,
              pointRadius: 1,
              pointHoverRadius: 4,
              tension: 0.3,
              fill: true,
              yAxisID: 'yPercent',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                boxWidth: 12,
                font: { size: 10 },
                color: textColor,   // resolved — not a CSS var string
                padding: 8,
              },
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: (ctx) => {
                  const val = ctx.parsed.y;
                  const unit = ctx.dataset.yAxisID === 'yPercent' ? '%' : '°';
                  return val !== null ? ` ${ctx.dataset.label}: ${val.toFixed(1)}${unit}` : '';
                },
              },
            },
            zoom: {
              pan:  { enabled: true, mode: 'x' },
              zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'x' },
              limits: { x: { minRange: 60_000 } },
            },
          },
          scales: {
            x: {
              type: 'time',
              time: {
                tooltipFormat: 'HH:mm:ss',
                displayFormats: {
                  millisecond: 'HH:mm:ss',
                  second: 'HH:mm:ss',
                  minute: 'HH:mm',
                  hour: 'HH:mm',
                  day: 'dd/MM',
                },
              },
              grid:  { color: gridColor },
              ticks: { maxTicksLimit: 8, color: secondaryColor, font: { size: 10 }, maxRotation: 0 },
            },
            yTemp: {
              type: 'linear',
              position: 'left',
              grid:  { color: gridColor },
              ticks: { color: secondaryColor, font: { size: 10 }, callback: (v) => `${v}°` },
            },
            yPercent: {
              type: 'linear',
              position: 'right',
              min: 0,
              max: 100,
              grid:  { drawOnChartArea: false },
              ticks: { color: '#f75252', font: { size: 10 }, callback: (v) => `${v}%`, stepSize: 25 },
            },
          },
        },
      });

      this._chartReady = true;
      this._updateChart();

    } catch (err) {
      console.error('[VtRegulationChart] Failed to initialise Chart.js:', err);
    }
  }

  // ─── Chart update ──────────────────────────────────────────────────────────

  private _updateChart() {
    if (!this._chart) return;

    const toXY = (pts: RegulationDataPoint[], key: keyof RegulationDataPoint) =>
      pts
        .filter(p => p[key] !== null && p[key] !== undefined)
        .map(p => ({ x: p.timestamp, y: p[key] as number }));

    const ds = this._chart.data.datasets;
    ds[0].data = toXY(this._history, 'targetTemp');
    ds[1].data = toXY(this._history, 'roomTemp');
    ds[2].data = toXY(this._history, 'regulatedTemp');
    ds[3].data = toXY(this._history, 'powerPercent');

    // Hide regulated temp dataset when there is no data at all
    ds[2].hidden = ds[2].data.length === 0;

    this._chart.update('none');
  }

  /** Reset zoom to show all data */
  public resetZoom() {
    this._chart?.resetZoom?.();
  }

  /** Clear history (e.g. on entity change) */
  public clearHistory() {
    this._history = [];
    this._updateChart();
  }

  private _destroyChart() {
    if (this._chart) {
      this._chart.destroy();
      this._chart = null;
      this._chartReady = false;
    }
  }

  // ─── Template ──────────────────────────────────────────────────────────────

  protected render() {
    return html`
      <div class="chart-wrapper">
        ${this._loading ? html`<div class="chart-loading"></div>` : ''}
        <canvas></canvas>
        <button class="reset-zoom-btn" @click=${() => this.resetZoom()} title="Réinitialiser le zoom">⌂</button>
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
        width: 100%;
        box-sizing: border-box;
      }

      .chart-wrapper {
        position: relative;
        width: 100%;
        height: 180px;
      }

      canvas {
        display: block;
        width: 100% !important;
        height: 100% !important;
      }

      .reset-zoom-btn {
        position: absolute;
        top: 4px;
        right: 4px;
        background: var(--secondary-background-color, rgba(0,0,0,0.08));
        border: 1px solid var(--divider-color, #ccc);
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        padding: 2px 6px;
        color: var(--secondary-text-color, #666);
        z-index: 10;
        line-height: 1.4;
        transition: background-color 150ms ease;
        opacity: 0.7;
      }

      .chart-loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        border: 3px solid var(--divider-color, rgba(128,128,128,0.3));
        border-top-color: var(--primary-color, #03a9f4);
        border-radius: 50%;
        animation: vt-spin 0.8s linear infinite;
        z-index: 5;
      }

      @keyframes vt-spin {
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vt-regulation-chart': VtRegulationChart;
  }
}
