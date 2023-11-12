import {
  TemplateResult,
  LitElement,
  html,
  css,
  PropertyValueMap,
  svg,
  CSSResultGroup,
  PropertyValues
} from 'lit';
import {
  customElement,
  property,
  state
} from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import {
  mdiWindowOpenVariant,
  mdiSunThermometer,
  mdiDotsVertical,
  mdiCalendarSync,
  mdiAutorenew,
  mdiFire,
  mdiSnowflake,
  mdiPower,
  mdiFan,
  mdiWaterPercent,
  mdiLeaf,
  mdiThermometer,
  mdiHeatWave,
  mdiWifiStrengthOffOutline,
  mdiMinus,
  mdiPlus,
  mdiAirConditioner,
  mdiWeatherWindy,
  mdiSunSnowflakeVariant,
  mdiHomeAccount,
  mdiMotionSensor,
  mdiThermometerAlert,
  mdiWindowShutterAuto,
  mdiFlashAlert,
  mdiSofa,
  mdiRocketLaunch,
  mdiHandWave,
  mdiHomeLightningBolt,
  mdiFlash,
  mdiMeterElectric,
  mdiThermometerAuto,
  mdiPipeValve,
  mdiClose
} from "@mdi/js";

import {
  CARD_VERSION
} from './const';
import {
  localize
} from './localize/localize';
import {
  clamp,
  ClimateEntity,
  debounce,
  fireEvent,
  formatNumber,
  HomeAssistant,
  LovelaceCard,
  LovelaceCardEditor,
} from "./ha";

import { ClimateCardConfig } from './climate-card-config';
import './ha/ha-control-circular-slider';

const UNAVAILABLE = "unavailable";
const UNKNOWN = "unknown";
const modeIcons: {
  [mode in any]: string
} = {
  auto: mdiCalendarSync,
  heat_cool: mdiAutorenew,
  heat: mdiFire,
  cool: mdiSnowflake,
  off: mdiPower,
  fan_only: mdiFan,
  dry: mdiWaterPercent,
  window_open: mdiWindowOpenVariant,
  windowBypass: mdiWindowShutterAuto,
  presence: mdiHomeAccount,
  motion: mdiMotionSensor,
  eco: mdiLeaf,
  comfort: mdiSofa,
  boost: mdiRocketLaunch,
  activity: mdiMotionSensor,
  power: mdiHomeLightningBolt,
  flashAlert: mdiFlashAlert,
  temperature:  mdiThermometer,
  humidity: mdiWaterPercent,
  ok: mdiAirConditioner,
  thermometerAlert: mdiThermometerAlert,
  none: mdiHandWave,
  auto_regulation_mode: mdiMeterElectric,
  power_percent: mdiMeterElectric,
  mean_power_cycle: mdiFlash,
  valve_open_percent: mdiPipeValve,
  regulated_target_temperature: mdiThermometerAuto
};
type Target = "value" | "low" | "high";

interface RegisterCardParams {
  type: string;
  name: string;
  description: string;
}
export function registerCustomCard(params: RegisterCardParams) {
  const windowWithCards = window as unknown as Window & {
      customCards: unknown[];
  };
  windowWithCards.customCards = windowWithCards.customCards || [];
  windowWithCards.customCards.push({
      ...params,
      preview: true,
  });
}

/* eslint no-console: 0 */
console.info(
  `%c  VersatileThermostatUI-CARD \n%c  version: ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

registerCustomCard({
  type: "versatile-thermostat-ui-card",
  name: "Versatile Thermostat Climate Card",
  description: "Card for climate entity",
});

function dateDifferenceInMinutes(date) {
  const maintenant = new Date().getTime();
  const differenceEnMilliseconds = maintenant - date.getTime();
  return Math.floor(differenceEnMilliseconds / (1000 * 60));
}

function roundNumber(nb, precision) {
  const coefficientMultiplicateur = 10 ** precision;
  const nombreArrondi = Math.round(nb * precision) / precision;
  return parseFloat(nombreArrondi.toFixed(precision));
}

@customElement('versatile-thermostat-ui-card')
export class VersatileThermostatUi extends LitElement implements LovelaceCard {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./versatile-thermostat-ui-card-editor");
    return document.createElement("versatile-thermostat-ui-card-editor") as LovelaceCardEditor;
  }

  public static async getStubConfig(hass: HomeAssistant): Promise<any> {
      const entities = Object.keys(hass.states);
      const climates = entities.filter((e) => ["climate"].includes(e.split(".")[0]));
      const vt_climate:any = climates.filter((e) => hass.states[e].attributes?.call_for_heat);
      return {
          type: "custom:versatile-thermostat-ui-card",
          entity: vt_climate[0] || climates[0]
      };
  }

  @property({
      attribute: false
  }) public hass! : HomeAssistant;

  @property({ type: Number }) public value: Partial<Record<Target, number>> = {};
  @state() private _selectTargetTemperature: Target = "low";
  @property({ type: Number }) public current: number = 0;
  @property({ type: Number }) public humidity: number = 0;
  @property({ type: Number }) public min = 7;
  @property({ type: Number }) public max = 35;
  @property({ type: Number }) public step = 0.5;
  @property({ type: Boolean }) public window: boolean = false;
  @property({ type: Boolean }) public windowByPass: boolean = false;
  @property({ type: Boolean }) public presence: boolean = false;
  @property({ type: Boolean }) public motion: boolean = false;
  @property({ type: Boolean }) public overpowering: boolean = false;
  @property({ type: Boolean }) public is_device_active: boolean = false;
  @property({ type: String }) public status: string = "loading";
  @property({ type: String }) public mode: string = "off";
  @property({ type: String }) public preset: string = "manual";
  @property({ type: Boolean, reflect: true }) public dragging = false;
  @property({ type: String}) public name: string = "";

  @state()
  private changingHigh?: number;

  private target: any = "value";

  private _highChanged(ev) {
    const value = (ev.detail as any).value;
    if (isNaN(value)) return;
    const target = ev.type.replace("-changed", "");
    this.value = {
      ...this.value,
      [target]: value,
    };
    this._selectTargetTemperature = target as Target;
    this._callService(target);
  }

  private _highChanging(ev) {
    const value = (ev.detail as any).value;
    if (isNaN(value)) return;
    const target = ev.type.replace("-changing", "");
    this.value = {
      ...this.value,
      [target]: value,
    };
    this._selectTargetTemperature = target as Target;
    this._updateDisplay();
    this._vibrate(20);
  }

  private _debouncedCallService = debounce(
    (target: Target) => this._callService(target),
    1000
  );

  private _callService(type: string) {
    if (type === "high" || type === "low") {
      this.hass.callService("climate", "set_temperature", {
        entity_id: this.stateObj!.entity_id,
        target_temp_low: this.value.low,
        target_temp_high: this.value.high,
      });
      return;
    }
    this.hass.callService("climate", "set_temperature", {
      entity_id: this.stateObj!.entity_id,
      temperature: this.value.value,
    });
  }

  private _handleButton(ev) {
    const target = ev.currentTarget.target as Target;
    const step = ev.currentTarget.step as number;

    const defaultValue = target === "high" ? this.max : this.min;

    let temp = this.value[target] ?? defaultValue;
    temp += step;
    temp = clamp(temp, this.min, this.max);
    if (target === "high" && this.value.low != null) {
      temp = clamp(temp, this.value.low, this.max);
    }
    if (target === "low" && this.value.high != null) {
      temp = clamp(temp, this.min, this.value.high);
    }

    this.value = {
      ...this.value,
      [target]: temp,
    };
    this._updateDisplay();
    this._vibrate(40);
    this._debouncedCallService(target);
  }

  private _handleSelectTemp(ev) {
    const target = ev.currentTarget.target as Target;
    this._selectTargetTemperature = target;
    this._updateDisplay();
    this._vibrate(40);
  }

  private _init: Boolean = true;
  private _firstRender: Boolean = true;
  private _ignore: Boolean = false;
  private _hasWindow: Boolean = false;
  private _hasWindowByPass: Boolean = false;
  private _hasPresence: Boolean = false;
  private _hasMotion: Boolean = false;
  private _hasOverpowering: Boolean = false;
  private _timeout: any;
  private _oldValueMin: number = 0;
  private _oldValueMax: number = 0;
  private stateObj: any | undefined;
  private _display_bottom: number = 0;
  private _display_top: number = 0;
  private modes: any = [];
  private presets: any = [];
  private security_state: any = {};
  private power_infos: any = {};
  private error: any = [];

  @state() private _config?: ClimateCardConfig;

  setConfig(config: ClimateCardConfig): void {
    this._config = {
        tap_action: {
            action: "toggle",
        },
        hold_action: {
            action: "more-info",
        },
        ...config,
    };
  }

  getCardSize(): number | Promise<number> {
    return 1;
  }

  public static styles: CSSResultGroup = css `
      :host {
          display: block;
          box-sizing: border-box;
          position: relative;
          container: vt-card / inline-size;
      }

      ha-card {
        overflow: hidden;
        height: 100%;
        width: 100%;
        vertical-align: middle;
        justify-content: center;
        justify-items: center;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 1.5em;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
      }

      vt-ha-outlined-icon-button {
        border: 1px solid var(--secondary-text-color);
        border-radius: 100%;
        padding: 0.5em;
        cursor: pointer;
      }

      .content.security_msg, vt-ha-control-circular-slider.security_msg {
        opacity: 0.5;
        filter: blur(5px);
        pointer-events: none;
      }
      

      .security, .error {
        position: absolute;
        display: flex;
        flex-flow: column;
        align-items: center;
        place-content: center;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        left: 0px;
        top: 0px;
        background: rgba(200, 200, 200, 0.16);
        border-radius: var(--ha-card-border-radius,12px);
        border-width: var(--ha-card-border-width,1px);
        border-style: solid;
        border-color: var(--ha-card-border-color,var(--divider-color,#e0e0e0));
        pointer-events: all;
        font-size: 22px;
        text-align: center;
        line-height: 40px;
        padding: 1em;
        --mdc-icon-size: 40px;

      }

      .unavailable {
          opacity: 0.3;
      }

      .unavailable #bar, .unavailable .main-value, .unavailable #value,.unavailable #current, .unavailable .current-info,
      .unknown #bar, .unknown .main-value, .unknown #value,.unknown #current, .unknown .current-info {
        display: none;
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0px;
        right: 0px;
        inset-inline-end: 0px;
        inset-inline-start: initial;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 1;
        direction: var(--direction);
    }
      .container {
          position: relative;
          width: 100%;
          height: 100%;
      }
      vt-ha-control-circular-slider {
        --primary-color: var(--mode-color);
      }

      .content {
        position: absolute;
        width: calc(70% - 40px);
        height: calc(70% - 100px);
        box-sizing: border-box;
        border-radius: 100%;
        left: 50%;
        top: calc(50% - 40px);
        text-align: center;
        overflow-wrap: break-word;
        pointer-events: none;
        display: flex;
        align-items: center;
        place-content: center;
        flex-flow: wrap;
        z-index: 0;
        transform: translate(-50%,-50%);
        max-width: 155px;
      }

      #main {
        transform: scale(2.3);
      }

      .name {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 20px;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
      svg {
        height: auto;
        margin: auto;
        display: block;
        width: 100%;
        -webkit-backface-visibility: hidden;
        max-width: 233px;
      }
      
      path {
        stroke-linecap: round;
        stroke-width: 1;
      }

      text {
        fill: var(--primary-text-color);
      }
      .eco {
        --mode-color: var(--energy-non-fossil-color);
      }

      .overpowering {
        --mode-color: var(--label-badge-yellow)
      }

      .window_open {
        --mode-color: #80a7c4
      }

      .auto,
      .heat_cool {
        --mode-color: var(--state-climate-auto-color);
      }
      .cool {
        --mode-color: var(--label-badge-blue);
      }
      .heat, .heat_cool {
        --mode-color: var(--label-badge-red);
      }
      .manual {
        --mode-color: var(--state-climate-manual-color);
      }
      .off {
        --mode-color: var(--slider-track-color);
      }
      .fan_only {
        --mode-color: var(--state-climate-fan_only-color);
      }
      .dry {
        --mode-color: var(--state-climate-dry-color);
      }
      .idle {
        --mode-color: var(--state-climate-idle-color);
      }
      .unknown-mode {
        --mode-color: var(--state-unknown-color);
      }

      #modes {
        z-index: 3;
        position: relative;
        display: flex;
        width: auto;
        justify-content: center;
        margin-top: -3em;
        margin-bottom: 1em;
      }

      #presets {
        z-index: 3;
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: -1em;
        margin-bottom: 1em;
      }

      #presets > * {
        color: var(--disabled-text-color);
      }
      #presets .selected-icon {
        color: var(--label-badge-yellow);
      }

      .preset-label {
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 5px;
        padding-right: 5px;
        outline: 0px;
        height: 48px;
        color: var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));
        margin-left: 5px;
        margin-right: 5px;
      }

      #power-infos {
        z-index: 3;
        position: absolute;
        display: block;
        width: auto;
        justify-content: center;
        padding-bottom: 0.2em;
        left: 0%;
        top: 30%;
      }

      #power-infos > * {
        color: var(--enabled-text-color);
      }

      .power-info-label {
        -webkit-tap-highlight-color: transparent;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        padding: 0px 0px;
        height: 30px;
      }

      #vt-control-buttons {
        z-index: 3;
        position: absolute;
        display: block;
        width: auto;
        justify-content: center;
        padding-bottom: 0.2em;
        left: 90%;
        top: 35%;
      }

      #vt-control-buttons .button {
        z-index: 3;
        position: relative;
        display: flex;
        width: auto;
        justify-content: center;
        margin-bottom: 15px;
        margin-left: -5px;
      }

      #modes > * {
        color: var(--disabled-text-color);
        cursor: pointer;
        display: inline-block;
      }
      #modes .selected-icon {
        color: var(--mode-color);
      }

      #shadowpath {
        stroke: #e7e7e8;
      }

      #value {
        fill: var(--mode-color);
        r: 5;
        z-index: 9999 !important;
        transition: r 0.3s ease-in-out, fill 0.6s ease-in-out;
      }

      #value,#current {
        filter: drop-shadow(0px 0px 1px #000);
      }

      #value:hover, #value:active, #value:focus, #value.active {
        r: 8 !important;
      }

      #current {
        pointer-events: none;
        fill: var(--label-badge-grey);
      }
      
      .status {
        transition: fill 0.6s ease-in-out, filter 0.6s ease-in-out;
        filter: none;
      }
      .status.active {
        fill: var(--error-color);
        filter: drop-shadow(0px 0px 6px var(--error-color));
      }

      .status.cooler.active {
        fill: #03A9F4;
        filter: drop-shadow(0px 0px 6px #03A9F4);
      }

      #bar {
        stroke: var(--mode-color);
        stroke-dasharray: 176;
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 5.1s ease-in-out 0s, stroke 0.6s ease-in-out;
      }

      #bar.drag {
        transition: none !important;
      }
      #c-minus,#c-plus {
        cursor: pointer;
      }
      .control {
        cursor: pointer;
        pointer-events: none;
      }
      ha-icon-button {
        transition: color 0.6s ease-in-out;
      }
      .eco ha-icon-button[title="heat"], .window_open ha-icon-button[title="heat"], .overpowering ha-icon-button[title="heat"] {
        --mode-color: var(--disabled-text-color);
      }
      .window {
        transition: fill 0.3s ease;
        fill: var(--warning-color);
      }
      .overpowering {
        transition: fill 0.3s ease;
        fill: var(--error-color);
      }
      .presence {
        transition: fill 0.3s ease;
        fill: var(--success-color);
      }
      .motion {
        transition: fill 0.3s ease;
        fill: var(--info-color);
      }

      .windowByPass {
        transition: fill 0.3s ease;
        fill: var(--accent-color);
      }

      line {
        stroke: var(--disabled-text-color);
      }

      ha-icon-button[title="eco"] {
        --mode-color: var(--energy-non-fossil-color) !important;
      }
      @container vt-card (max-width: 280px) {
        .content {
          top: calc(50% - 10px);
        }
      }
      @container vt-card (max-width: 255px) {
        #modes {
          margin-top: -2em;
        }
        #presets {
          margin-top: -1em;
        }
        ha-card {
          padding-top: 2em;
        }
      }
  `;

  private _vibrate(delay:number) {
    try {
      navigator.vibrate(delay);
    } catch(e){}
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this._init = false;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has("_config") !== undefined) {
      if(changedProps.get("_config") !== undefined) {
        this._hasOverpowering = false;
        this._hasWindow = false;
        this._hasWindowByPass = false;
        this._hasMotion = false;
        this._hasPresence = false;
        this.humidity = 0;
      }
    }
    if (changedProps.get("hass") !== undefined) {
      this._init = false;
    }
    return true;
  }

  protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    this._firstRender = false;

    this?.shadowRoot?.querySelector('.security')?.addEventListener('click', () => {
      this?.shadowRoot?.querySelector('.security')?.remove();
      this?.shadowRoot?.querySelector('.content')?.classList.remove('security_msg');
      this._vibrate(2);
    });
  }

  public willUpdate(changedProps: PropertyValues) {
      if (!this.hass || !this._config || (!changedProps.has("hass") && !changedProps.has("_config"))) {
          return;
      }

      const entity_id:any = this._config.entity;

      const stateObj = this.hass.states[entity_id] as ClimateEntity;
      if (!stateObj) {
          return;
      }
      const oldHass = changedProps.get("hass") as HomeAssistant | undefined;

      if (!oldHass || oldHass.states[entity_id] !== stateObj) {
        if (!this._config || !this.hass || !this._config.entity) return;
  
        this.stateObj = stateObj;
        const attributes = this.stateObj.attributes;
        const stateMode = this.stateObj.state;

        this.name = "";
        if (!this._config.disable_name) {
          this.name = this._config.name ? this._config.name : attributes.friendly_name;
        }
  
        this.mode = stateMode || "off";

        if (attributes.hvac_modes) {
          this.modes = Object.values(attributes.hvac_modes);
        }

        if (attributes.preset_modes) {
          this.presets = Object.values(attributes.preset_modes.filter((preset: string) => { return preset != "none";  }));
        }

        this.preset = attributes.preset_mode;
  
        this.value = {
          value: attributes?.temperature || 0,
          low: attributes?.target_temp_low || null,
          high: attributes?.target_temp_high || null,
        };
        
        if (attributes.target_temperature_step) {
          this.step = attributes.target_temperature_step;
        }
        if (attributes.min_temp) {
          this.min = attributes.min_temp;
        }
        if (attributes.max_temp) {
          this.max = attributes.max_temp;
        }
        if (attributes.current_temperature) {
          this.current = attributes.current_temperature;
        }
        if (attributes?.humidity !== undefined) {
          this.humidity = parseFloat(attributes.humidity);
        }
        if (attributes?.window_state === 'on' || attributes?.window_auto_state === 'on') {
          this._hasWindow = true;
          this.window = true;
        }
        else {
          this._hasWindow = false;
          this.window = false;
        }
        if (attributes?.overpowering_state) {
          this._hasOverpowering = true;
          this.overpowering = attributes.overpowering_state;
        }
        else {
          this._hasOverpowering = false;
          this.overpowering = false;
        }

        if (attributes?.presence_state === 'on') {
          this._hasPresence = true;
          this.presence = attributes.presence_state;
        }
        else {
          this._hasPresence = false;
          this.presence = false;
        }

        if (attributes?.motion_state === 'on') {
          this._hasMotion = true;
          this.motion = attributes.motion_state;
        }
        else {
          this._hasMotion = false;
          this.motion = false;
        }

        if (attributes?.window_bypass_state) {
          this._hasWindowByPass = true;
          this.windowByPass = attributes.window_bypass_state;
        }
        else {
          this._hasWindowByPass = false;
          this.windowByPass = false;
        }

        // Build Security state
        if (attributes?.security_state && !this?._config?.disable_security_warning) {
          this.security_state = [];
          if (attributes.last_temperature_datetime) {
            let dif = dateDifferenceInMinutes(new Date(attributes.last_temperature_datetime));
            if (dif > 0) {
              this.security_state.push(
              {
                name: 'Internal temp.',
                security_msg:  dif+" min"
              });
            }
          }
          if (attributes.last_ext_emperature_datetime) {
            let dif = dateDifferenceInMinutes(new Date(attributes.last_ext_temperature_datetime));
            if (dif > 0) {
              this.security_state.push(
              {
                name: 'External temp.',
                security_msg:  dif+" min"
              });
            }
          }
        } else {
          this.security_state = null;
        }

        // handle is_device_active
        this.is_device_active = (attributes?.is_device_active === true)

        // Build Errors
        if (attributes?.errors !== undefined) {
          const errors = JSON.parse(attributes.errors);
          if (errors.length > 0) {
            this.error = errors[0];
          } else {
            this.error = [];
          }
        } else {
          this.error = [];
        }

        // Build Power Infos 
        this.power_infos = [];
        if (!this?._config?.disable_power_infos && attributes?.is_on) {
          if (attributes?.is_over_switch) {
            if (attributes?.mean_cycle_power) {
              this.power_infos.push({
                name: "mean_power_cycle",
                value: roundNumber(attributes?.mean_cycle_power, 1),
                unit: attributes?.mean_cycle_power < 20 ? "kW" : "W",
                class: "vt-power-color"
              });
            }
            this.power_infos.push({
              name: "power_percent",
              value: attributes?.power_percent,
              unit: "%",
              class: "vt-power-color"
            });
          }

          if (attributes?.is_over_valve) {
            this.power_infos.push({
              name: "valve_open_percent",
              value: attributes?.valve_open_percent,
              unit: "%",
              class: "vt-power-color"
            });
          }

          if (attributes?.is_over_climate) {
            if (attributes?.device_power) {
              this.power_infos.push({
                name: "mean_power_cycle",
                value: attributes?.device_power,
                unit:  attributes?.device_power < 20 ? "kW" : "W",
                class: "vt-power-color"
              });
            }
            if (attributes?.is_regulated) {
              this.power_infos.push({
                name: "regulated_target_temperature",
                value: attributes?.regulated_target_temperature,
                unit: attributes?.temperature_unit,
                class: "vt-temp-color"
              });
              this.power_infos.push({
                name: "auto_regulation_mode",
                value: localize({ hass: this.hass, string: `extra_states.${attributes?.auto_regulation_mode}` }),
                unit: "",
                class: "vt-label-color"
              });
            }
          }
        }

        this._updateDisplay();
      }
  }

  private _updateDisplay() {
    if(this?._config?.set_current_as_main) {
      this._display_bottom = this._getCurrentSetpoint();
      this._display_top = this.current;
    } else {
      this._display_bottom = this.current;
      this._display_top = this._getCurrentSetpoint();
    }
  }

  private _handleAction(e: MouseEvent): void {
    this.hass!.callService("climate", "set_hvac_mode", {
      entity_id: this._config!.entity,
      hvac_mode: (e.currentTarget as any).mode,
    });
  }

  private _handlePreset(e: MouseEvent): void {
    this.hass!.callService("climate", "set_preset_mode", {
      entity_id: this._config!.entity,
      preset_mode: (e.currentTarget as any).preset,
    });
  }

  private _handleClickInfo(e: MouseEvent): void {
    // TODO removes this or complete thie
    this.hass!.callService("versatile_thermostat", "set_device_power", {
      entity_id: this._config!.entity,
      preset_mode: (e.currentTarget as any).preset,
    });
  }

  private _setTemperature(): void {
      this.hass!.callService("climate", "set_temperature", {
          entity_id: this._config!.entity,
          temperature: this.value,
      });
  }

  private _getCurrentSetpoint(): number {
    if(this?.value?.high !== null && this?.value?.low !== null) {
      if ((this?.value?.low || 0) >= this.current) return this?.value?.low || 0;
      else if ((this?.value?.high || 0) <= this.current) return this?.value?.high || 0;
      else return this?.value?.low || 0;
    }
    return this?.value?.value || 0;
  }

  private _renderHVACAction(): TemplateResult {
    if (this.stateObj.attributes.hvac_action === 'heating' ||
        this.stateObj.attributes.hvac_mode == "heat" ||
        this.stateObj.attributes.hvac_mode == "heat_cool") {
      return svg`<path class="status ${(this.is_device_active) ? 'active': ''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiHeatWave}" />`;
    }
    else if (this.stateObj.attributes.hvac_action === 'cooling' ||
        this.stateObj.attributes.hvac_mode == "cool") {
      return svg`<path class="status cooler ${(this.is_device_active) ? 'active': ''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiAirConditioner}" />`;
    }
    else return svg`<path class="status" transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiClose}" />`;

    // if (full) {
      // if (this?.value?.low === null && this?.value?.high === null) {
        // return svg`<path class="status ${(this.stateObj.attributes.hvac_action === 'heating' && this.mode !== 'off') ? 'active': ''}"  transform="translate(-3,-3.5) scale(0.25)" fill="#9d9d9d"  d="${mdiHeatWave}" />`;
      // }
      // if ((this?.value?.low || 0) >= this.current) return svg`<path class="status ${(this.stateObj.attributes.hvac_action === 'heating' && this.mode !== 'off') ? 'active': ''}"  transform="translate(-3,-3.5) scale(0.25)" fill="#9d9d9d"  d="${mdiHeatWave}" />`;
      // else if ((this?.value?.high || 0) <= this.current) return svg`<path class="status cooler ${(this.stateObj.attributes.hvac_action === 'cooling' && this.mode !== 'off') ? 'active': ''}"  transform="translate(-3,-3.5) scale(0.25)" fill="#9d9d9d"  d="${mdiWeatherWindy}" />`;
      // else return svg`<path class="status ${(this.stateObj.attributes.hvac_action === 'heating' && this.mode !== 'off') ? 'active': ''}"  transform="translate(-3,-3.5) scale(0.25)" fill="#9d9d9d"  d="${mdiHeatWave}" />`;
    // } else {
      // if (this?.value?.low === null && this?.value?.high === null) {
        // return svg`<path class="status ${(this.stateObj.attributes.hvac_action === 'heating' && this.mode !== 'off') ? 'active': ''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiHeatWave}" />`;
      // }
      // if ((this?.value?.low || 0) >= this.current) return svg`<path class="status ${(this.stateObj.attributes.hvac_action === 'heating' && this.mode !== 'off') ? 'active': ''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiHeatWave}" />`;
      // else if ((this?.value?.high || 0) <= this.current) return svg`<path class="status cooler ${(this.stateObj.attributes.hvac_action === 'cooling' && this.mode !== 'off') ? 'active': ''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiWeatherWindy}" />`;
      // else return svg`<path class="status ${(this.stateObj.attributes.hvac_action === 'heating' && this.mode !== 'off') ? 'active': ''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiHeatWave}" />`;
    // }
  }

  private _renderIcon(mode: string, currentMode: string): TemplateResult {
    if (!modeIcons[mode]) {
        return html ``;
    }
    const localizeMode = this.hass!.localize(`component.climate.state._.${mode}`) || localize({ hass: this.hass, string: `extra_states.${mode}` });
    return html `
      <ha-icon-button
        title="${currentMode === mode ? mode : ''}"
        class=${classMap({ "selected-icon": currentMode === mode })}
        .mode=${mode}
        @click=${this._handleAction}
        tabindex="0"
        .path=${modeIcons[mode]}
        .label=${localizeMode}
      >
      </ha-icon-button>
    `;
  }

  private _renderPreset(preset: string, currentPreset: string): TemplateResult {
    const localizePreset = this.hass!.localize(`component.climate.state._.${preset}`) || localize({ hass: this.hass, string: `extra_states.${preset}` });
    return html `
      <div class="preset-label">
          <ha-icon-button
            title="${currentPreset === preset ? preset : ''}"
            class=${classMap({ "selected-icon": currentPreset === preset })}
            .preset=${preset}
            @click=${this._handlePreset}
            tabindex="0"
            .path=${modeIcons[preset]}
            .label=${localizePreset}
          >
        </ha-icon-button>
      </div>
    `;
  }

  private _renderPowerInfo(info: any): TemplateResult {
    const localizeInfo = this.hass!.localize(`component.climate.state._.${info.name}`) || localize({ hass: this.hass, string: `extra_states.${info.name}` });
    return html `
      <div class="power-info-label">
        <span>
          <ha-icon-button
            title="${localizeInfo}"
            class=${info.class} 
            .name=${info.name}
            @click=${this._handleClickInfo}
            tabindex="0"
            .path=${modeIcons[info.name]}
            .label=${localizeInfo}
          >
        </ha-icon-button>
        </span>
        <span>${info.value} ${info.unit}</span>
      </div>
    `;
  }

  private _handleMoreInfo() {
    fireEvent(this, "hass-more-info", {
        entityId: this._config!.entity,
    });
  }

  public render: () => TemplateResult = (): TemplateResult => {
    return html `
    <ha-card class=${classMap({
      [this.mode]: true,
    })}
    >
    ${this._config?.disable_menu ? `` : html`
      <ha-icon-button
        class="more-info"
        .label=${this.hass!.localize(
          "ui.panel.lovelace.cards.show_more_info"
        )}
        .path=${mdiDotsVertical}
        @click=${this._handleMoreInfo}
        tabindex="0"
      ></ha-icon-button>
      `}

      ${this.name.length > 0 ? html`
        <div class="name">${this.name}</div>
        ` : ``}

      ${this.security_state !== null ? html`
        <div class="security">
          <ha-icon-button class="alert" .path=${mdiThermometerAlert}>
          </ha-icon-button>
          ${html`
            ${this.security_state.map((sec_msg) => {
              return html`<span>${sec_msg.name}: ${sec_msg.security_msg}</span>`;
            })}
           `}
        </div>
      ` : ``}
      ${this.error.length > 0 ? html`
        <div class="error">
          <ha-icon-button class="alert" .path=${mdiWifiStrengthOffOutline}>
          </ha-icon-button>
          <span>${this.error}</span>
        </div>
      ` : ``}

      ${
        (this.value.low != null &&
        this.value.high != null &&
        this.stateObj.state !== UNAVAILABLE) ? html`
        <vt-ha-control-circular-slider
          class="${(this?.stateObj?.attributes?.saved_temperature && this?.stateObj?.attributes?.saved_temperature !== null) ? 'eco' : ''} ${this.security_state !== null || this.error.length > 0 ? 'security_msg': ''} ${this.window ? 'window_open': ''}  ${this.overpowering ? 'overpowering': ''} ${this.presence ? 'presence': ''} ${this.motion ? 'motion': ''}  ${this.windowByPass ? 'windowByPass': ''} "
          .inactive=${this.window}
          dual
          .low=${this.value.low}
          .high=${this.value.high}
          .min=${this.min}
          .max=${this.max}
          .step=${this.step}
          .current=${this.current}
          @low-changed=${this._highChanged}
          @low-changing=${this._highChanging}
          @high-changed=${this._highChanged}
          @high-changing=${this._highChanging}
        >
        ` : html`
        <vt-ha-control-circular-slider
          class="${(this?.stateObj?.attributes?.saved_temperature && this?.stateObj?.attributes?.saved_temperature !== null) ? 'eco' : ''} ${this.security_state !== null || this.error.length > 0 ? 'security_msg': ''} ${this.window ? 'window_open': ''}  ${this.overpowering ? 'overpowering': ''} ${this.presence ? 'presence': ''} ${this.motion ? 'motion': ''}  ${this.windowByPass ? 'windowByPass': ''} "
          .inactive=${this.window}
          .mode="start"
          @value-changed=${this._highChanged}
          @value-changing=${this._highChanging}
          .value=${this.value.value}
          .current=${this.current}
          step=${this.step}
          min=${this.min}
          max=${this.max}
        >
        `
      }
      <div class="content ${this.name.length == 0 ? 'noname':''} ${this.security_state !== null || this.error.length > 0 ? 'security_msg': ''} ${this.window ? 'window_open': ''}  ${(this?.stateObj?.attributes?.saved_temperature && this?.stateObj?.attributes?.saved_temperature !== null) ? 'eco' : ''} ${this.overpowering ? 'overpowering': ''} ${this.presence ? 'presence': ''} ${this.motion ? 'motion': ''}  ${this.windowByPass ? 'windowByPass': ''} " >
        <svg id="main" viewbox="0 0 125 100">
          <g transform="translate(57.5,37) scale(0.35)">
            ${(this._hasWindow && !this._config?.disable_window) ? svg`
              <path title="${localize({ hass: this.hass, string: `extra_states.window_open` })}" class="window ${this.window ? 'active': ''}" fill="none" transform="${(this._hasWindow && !this._config?.disable_window) ? 'translate(-50.25,0)' :''}" id="window" d=${mdiWindowOpenVariant} />
            `: ``}
            ${(this._hasOverpowering && !this._config?.disable_overpowering) ? svg`
              <path class="overpowering ${this.overpowering ? 'active': ''}" fill="none" transform="${(this._hasOverpowering && !this._config?.disable_overpowering) ? 'translate(-25.25,0)' :''}" id="overpowering" d=${mdiFlashAlert} />
            `: ``}
            ${(this._hasPresence) ? svg`
              <path class="presence ${this.presence ? 'active': ''}" fill="none" transform="${(this._hasPresence) ? 'translate(0.25,0)' :''}" id="overpowering" d=${mdiHomeAccount} />
            `: ``}
            ${(this._hasWindowByPass) ? svg`
              <path class="windowByPass ${this.windowByPass ? 'active': ''}" fill="none" transform="${(this._hasWindowByPass) ? 'translate(25.25,0)' :''}" id="window-by-pass" d=${mdiWindowShutterAuto} />
            `: ``}
            ${(this._hasMotion) ? svg`
              <path class="motion ${this.motion ? 'active': ''}" fill="none" transform="${(this._hasMotion) ? 'translate(50.25,0)' :''}" id="motion" d=${mdiMotionSensor} />
            `: ``}
          </g>

          <text class="main-value" x="62.5" y="60%" dominant-baseline="middle" text-anchor="middle" style="font-size:15px;">
            ${svg`${formatNumber(
              this._display_top,
              this.hass.locale,
              { minimumFractionDigits: 1, maximumFractionDigits: 1 }
            )}`}
            <tspan dx="-2" dy="-5.5" style="font-size: 5px;">
              ${svg`
                ${this.hass.config.unit_system.temperature}
              `}
            </tspan>
          </text>
          ${(this?.stateObj?.state === UNAVAILABLE || this?.stateObj?.state === UNKNOWN) ? svg`
          <text x="62.5" y="63%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">${this.hass!.localize(
            "state.default.unavailable"
          )}</text>
          ` : ''}
          <line x1="35" y1="72" x2="90" y2="72" stroke="#e7e7e8" stroke-width="0.5" />
          <g class="current-info" transform="translate(62.5,80)">
            ${(this.humidity === 0) ? svg`
                <text x="-5%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
                ${svg`${formatNumber(
                  this._display_bottom,
                  this.hass.locale,
                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                )}`}
                <tspan dx="-1" dy="-2" style="font-size: 3px;">
                  ${svg`
                    ${this.hass.config.unit_system.temperature}
                  `}
                </tspan>
              </text>
              ${this._renderHVACAction()}
            `: svg `
              <text x="-12.25%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
                ${svg`${formatNumber(
                  this._display_bottom,
                  this.hass.locale,
                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                )}`}
                <tspan dx="-0.3" dy="-2" style="font-size: 3px;">
                  ${svg`
                    ${this.hass.config.unit_system.temperature}
                  `}
                </tspan>
              </text>
              <text x="12.25%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
                ${svg`${formatNumber(
                  this.humidity,
                  this.hass.locale,
                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                )}`}
                <tspan dx="-0.3" dy="-2" style="font-size: 3px;">
                %
                </tspan>
              </text>
              ${this._renderHVACAction()}
            `}
          </g>
        </svg>
        </div>
      </vt-ha-control-circular-slider>
      <div id="modes">
        ${svg`
          ${this.modes.map((mode) => {
            if(this._config?.disable_heat && (mode === "heat" || mode === "heat_cool")) return html ``;
            if(this._config?.disable_eco && mode === "cool") return html ``;
            if(this._config?.disable_cool && mode === "eco") return html ``;
            if(this._config?.disable_off && mode === "off") return html ``;
            return this._renderIcon(mode, this.mode);
          })}
        `}
      </div>
      ${this?._config?.disable_buttons ? html`` : html`
        <div id="vt-control-buttons">
            <div class="button">
              <vt-ha-outlined-icon-button 
                .target=${this.target}
                .step=${this.step}
                @click=${this._handleButton}
              >
                <ha-svg-icon .path=${mdiPlus}></ha-svg-icon>
              </vt-ha-outlined-icon-button>
            </div>
            <div class="button">
              <vt-ha-outlined-icon-button
                .target=${this.target}
                .step=${-this.step}
                @click=${this._handleButton}
              >
                <ha-svg-icon .path=${mdiMinus}></ha-svg-icon>
              </vt-ha-outlined-icon-button>
            </div>
        </div>
      `}
      
      <div id="presets">
        ${svg`
          ${this.presets.map((preset) => {
            return this._renderPreset(preset, this.preset);
          })}
        `}
      </div>

      <div id="power-infos">
      ${svg`
        ${this.power_infos.map((infos) => {
          return this._renderPowerInfo(infos);
        })}
      `}
    </div>
      

    </ha-card>
  `;
  };
}