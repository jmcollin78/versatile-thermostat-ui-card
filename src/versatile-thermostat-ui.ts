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
  mdiClose,
  mdiSnowflakeThermometer,
  mdiFanAuto,
  mdiFanOff,
  mdiPowerSleep,
  mdiBullseyeArrow
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
import { SensorEntity } from './ha/data/sensor';

const UNAVAILABLE = "unavailable";
const DEBUG=false;
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
  frost: mdiSnowflakeThermometer,
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
  regulated_target_temperature: mdiThermometerAuto,
  auto_fan_mode: mdiFanAuto,
  auto_fan_mode_off: mdiFanOff,
  fan_mode: mdiFan,
  power_sleep: mdiPowerSleep
};
type Target = "value" | "low" | "high";

const preset_manual="none",
  preset_frost="frost",
  hvac_mode_OFF="off",
  hvac_mode_COOL="cool",
  hvac_mode_HEAT="heat",
  hvac_mode_AUTO="auto",
  auto_fan_none="auto_fan_none",
  hvac_action_idle="idle",
  hvac_action_cooling="cooling",
  hvac_action_heating="heating";

const autoFanModeMapping={
  "auto_fan_none": "None",
  "auto_fan_low": "Low",
  "auto_fan_mid": "Medium",
  "auto_fan_high": "High",
  "auto_fan_turbo": "Turbo"
};

const hvacOffReasonAutoStartStop="auto_start_stop";
const autoStartStopLevels=["auto_start_stop_slow", "auto_start_stop_medium", "auto_start_stop_fast"];

const minPowerWatt=7;

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
  @property({ type: String }) public mode: string = hvac_mode_OFF;
  @property({ type: String }) public hvac_action: string = hvac_action_idle;
  @property({ type: String }) public preset: string = preset_manual;
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
  private _hasAutoStartStop: Boolean = false;
  private _isAutoStartStopEnabled:Boolean = false;
  private _timeout: any;
  private _oldValueMin: number = 0;
  private _oldValueMax: number = 0;
  private stateObj: any | undefined;
  private _display_bottom: number = 0;
  private _display_top: number = 0;
  private modes: any = [];
  private presets: any = [];
  private safety_state: any = {};
  private powerInfos: any = [];
  private _externalPowerInfos: any = [];
  private auto_fan_infos: any = {};
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

      .disabled-circle-container{
          height: 145px;
          width: 100%;
          background: radial-gradient(var(--hvac-mode-color), transparent 50%);
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
        --mode-color: var(--state-climate-dry-color);
      }
      .unknown-mode {
        --mode-color: var(--state-unknown-color);
      }

      .window_open {
        --mode-color: #80a7c4 !important;
      }
        
      .overpowering {
        --mode-color: var(--error-color) !important;
      }

      .heat_heating {
        --hvac-mode-color: var(--label-badge-red);
      }

      .heat_idle {
        --hvac-mode-color: var(--label-badge-yellow);
      }

      .cool_cooling {
        --hvac-mode-color: var(--label-badge-blue);
      }

      .cool_idle {
        --hvac-mode-color:rgb(125, 194, 225);
      }

      .off_off {
        --hvac-mode-color: var(--slider-track-color);
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

      #left-infos {
        z-index: 3;
        position: absolute;
        display: block;
        width: auto;
        justify-content: center;
        padding-bottom: 0.2em;
        left: 0%;
        top: 15%;
      }

      #left-infos > * {
        color: var(--enabled-text-color);
      }

      .left-info-label {
        -webkit-tap-highlight-color: transparent;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        padding: 0px 0px;
        height: 30px;
      }

      .left-info-label input {
        width: 40px;
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

      .auto-start-stop {
        transition: fill 0.3s ease;
        fill: var(--state-icon-color);
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
        this._hasAutoStartStop = false;
        this._isAutoStartStopEnabled = false;
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

  private _willUpdatePower() {
    let powerEntity: SensorEntity | undefined;
    let power : number | undefined;
    let unit : string | undefined;

    this._externalPowerInfos=[];

    if (this!._config!.powerEntity) {
      if (DEBUG) console.log(`There is a powerEntity ${this._config!.powerEntity}`);
      powerEntity = this.hass.states[this._config!.powerEntity] as SensorEntity;
      power = Number(powerEntity.state);
      unit = powerEntity.attributes["unit_of_measurement"];
      if (DEBUG) console.log(`Power found ${power} ${unit} for ${name}`);
    }
    
    
    if (power) {
      if (DEBUG) console.log("J'ai pushé du power");
      this!._externalPowerInfos!.push({
        name: "mean_power_cycle",
        value: power,
        unit: unit,
        class: "vt-power-color"
      });
    }
  }

  public willUpdate(changedProps: PropertyValues) {
      if (!this.hass || !this._config || (!changedProps.has("hass") && !changedProps.has("_config"))) {
          return;
      }

      const entity_id:any = this._config!.entity;

      this._willUpdatePower();
      
      const stateObj = this.hass.states[entity_id] as ClimateEntity;
      if (!stateObj) {
          if (DEBUG) console.log(`No state`);
          return;
      }

      const oldHass = changedProps.get("hass") as HomeAssistant | undefined;

      if (!oldHass || oldHass.states[entity_id] !== stateObj) {
        if (!this._config || !this.hass || !this._config!.entity) {
          if (DEBUG) console.log(`No change return`);
          return;
        }
  
        console.log(`Something may have change`);
        this.stateObj = stateObj;
        const attributes = this.stateObj.attributes;
        const stateMode = this.stateObj.state;

        this.name = "";
        if (!this._config?.disable_name) {
          this.name = this._config!.name ? this._config!.name : attributes.friendly_name;
        }
  
        this.mode = stateMode || hvac_mode_OFF;

        // hvac action
        this.hvac_action = attributes?.hvac_action
        // Patch hvac_action if on_percent is > 0
        if (attributes?.power_percent > 0) {
          this.hvac_action = this.mode == hvac_mode_HEAT ? hvac_action_heating : hvac_action_cooling
        }

        // not-used anymore - handle is_device_active
        this.is_device_active = (attributes?.is_device_active === true);

        if (attributes.hvac_modes) {
          this.modes = Object.values(attributes.hvac_modes);
          this.modes.sort((a, b) => {
            if (a === "off") return 1; // Place "off" après tout le reste
            if (b === "off") return -1; // Place tout le reste avant "off"
            return 0; // Sinon, ne change pas l'ordre
          });
        }

        // Reads preset modes
        if (attributes.preset_modes) {
          this.presets = Object.values(attributes.preset_modes.filter((preset: string) => {
            return preset != preset_manual &&
                   (stateMode != hvac_mode_COOL || preset != preset_frost);
          }));
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
        if (attributes?.overpowering_state  === 'on') {
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

        if (attributes?.is_window_bypass) {
          this._hasWindowByPass = true;
          this.windowByPass = attributes.is_window_bypass;
        }
        else {
          this._hasWindowByPass = false;
          this.windowByPass = false;
        }

        // Build Security state
        if (attributes?.safety_state === 'on' && !this?._config?.disable_safety_warning) {
          this.safety_state = [];
          if (attributes.last_temperature_datetime) {
            let dif = dateDifferenceInMinutes(new Date(attributes.last_temperature_datetime));
            if (dif > 0) {
              this.safety_state.push(
              {
                name: 'Room temp.',
                security_msg:  dif+" min"
              });
            }
          }
          if (attributes.last_ext_temperature_datetime) {
            let dif = dateDifferenceInMinutes(new Date(attributes.last_ext_temperature_datetime));
            if (dif > 0) {
              this.safety_state.push(
              {
                name: 'External temp.',
                security_msg:  dif+" min"
              });
            }
          }
        } else {
          this.safety_state = null;
        }

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
        this!.powerInfos = [];
        if (!this!._config?.disable_power_infos && attributes?.is_on) {
          if (attributes?.is_over_switch) {
            if (attributes?.mean_cycle_power && !this._config?.powerEntity) {
              this!.powerInfos!.push({
                name: "mean_power_cycle",
                value: roundNumber(attributes?.mean_cycle_power, 1),
                unit: attributes?.mean_cycle_power < minPowerWatt ? "kW" : "W",
                class: "vt-power-color"
              });
            }
            this.powerInfos.push({
              name: "power_percent",
              value: attributes?.power_percent,
              unit: "%",
              class: "vt-power-color"
            });
          }

          if (attributes?.is_over_valve) {
            this.powerInfos.push({
              name: "valve_open_percent",
              value: attributes?.valve_open_percent,
              unit: "%",
              class: "vt-power-color"
            });
          }

          if (attributes?.is_over_climate) {
            if (attributes?.device_power && !this._config?.powerEntity) {
              this.powerInfos.push({
                name: "mean_power_cycle",
                value: attributes?.device_power,
                unit:  attributes?.device_power < minPowerWatt ? "kW" : "W",
                class: "vt-power-color"
              });
            }
            if (attributes?.is_regulated) {
              this.powerInfos.push({
                name: "regulated_target_temperature",
                value: attributes?.regulated_target_temperature,
                unit: attributes?.temperature_unit,
                class: "vt-temp-color"
              });
              this.powerInfos.push({
                name: "auto_regulation_mode",
                value: localize({ hass: this.hass, string: `extra_states.${attributes?.auto_regulation_mode}` }),
                unit: "",
                class: "vt-label-color"
              });
            }
          }
        }
        else if (DEBUG) console.log(`No power to disply is_on=${attributes?.is_on} or disabled`);

        // Build auto-fan infos
        this.auto_fan_infos = [];
        if (!this?._config?.disable_auto_fan_infos && attributes?.is_over_climate) {
          const name=attributes?.current_auto_fan_mode != auto_fan_none ? "auto_fan_mode" : "auto_fan_mode_off";
          if (DEBUG) console.log(`VersatileThermostat UI : auto_fan icon name ${name}`);
          
          this.auto_fan_infos.push({
            name: name,
            value: localize({ hass: this.hass, string: `extra_states.${attributes?.current_auto_fan_mode}` }),
            unit: "",
            class: "vt-label-color"
          });

          if (attributes?.fan_mode) {
            this.auto_fan_infos.push({
              name: "fan_mode",
              value: localize({ hass: this.hass, string: `extra_states.fan_${attributes?.fan_mode}` }), 
              unit: "",
              class: "vt-label-color"
            })
          }

        }

        // Build autoStartStop infos
        this._hasAutoStartStop = (attributes?.hvac_off_reason === hvacOffReasonAutoStartStop);
        // this._hasAutoStartStopEnable = autoStartStopLevels.includes(attributes?.auto_start_stop_level);
        this._isAutoStartStopEnabled = (attributes?.auto_start_stop_enable === true);
        if (DEBUG) console.log(`_isAutoStartStopEnabled=${this._isAutoStartStopEnabled} auto_start_stop_enable=${attributes?.auto_start_stop_enable}`);

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

  private last_target_temperature;

  private _handlePreset(e: MouseEvent): void {
    this.last_target_temperature = this.stateObj.attributes.temperature
    this.hass!.callService("climate", "set_preset_mode", {
      entity_id: this._config!.entity,
      preset_mode: (e.currentTarget as any).preset,
    });
  }

  private _recordPreset(e: MouseEvent): void {
    this.hass!.callService("versatile_thermostat", "set_preset_temperature", {
      entity_id: this._config!.entity,
      preset: (e.currentTarget as any).preset,
      temperature: this.last_target_temperature
    });
  }

  private _handleClickOrDoubleClick(e: MouseEvent): void {
    if (e.detail === 1) {
      this._handlePreset(e);
    } else if (e.detail === 2) {
      this._recordPreset(e);
    }
  }

  private _handleClickInfo(e: MouseEvent): void {
    // TODO removes this or complete thie
    this.hass!.callService("versatile_thermostat", "set_device_power", {
      entity_id: this._config!.entity,
      preset_mode: (e.currentTarget as any).preset,
    });
  }

  private _handleClickAutoFanInfo(/*e: MouseEvent*/): void {
    // Activate or deactivate the auto-fan mode
    let newMode=auto_fan_none;
    if (this.stateObj.attributes.current_auto_fan_mode == auto_fan_none) {
      newMode = this.stateObj.attributes.auto_fan_mode;
    }
    const mappedNewMode=autoFanModeMapping[newMode];

    console.info(
      `VersatileThermostatUI-CARD changing auto_fan_mode to ${newMode} (mapped=$${mappedNewMode}`
    );
    
    this.hass!.callService("versatile_thermostat", "set_auto_fan_mode", {
      entity_id: this._config!.entity,
      auto_fan_mode: mappedNewMode,
    });
  }

  private _handleClickAutoStartStopEnable(/*e: MouseEvent*/): void {
    // Activate or deactivate the auto-start-stop enable
    let newMode = !this._isAutoStartStopEnabled;
    console.info(
      `VersatileThermostatUI-CARD changing auto_start_stop_enable to ${newMode}`
    );
    
    this.hass!.callService("switch", "toggle", {
      entity_id: this._config!.autoStartStopEnableEntity,
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
    if (this.hvac_action === 'heating' ||
        this.stateObj?.attributes.hvac_mode == "heat" ||
        this.stateObj?.attributes.hvac_mode == "heat_cool") {
      return svg`<path class="status ${this.is_device_active ? 'active':''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiHeatWave}" />`;
    }
    else if (this.hvac_action === 'cooling' ||
        this.stateObj.attributes.hvac_mode == "cool") {
      return svg`<path class="status cooler ${this.is_device_active ? 'active':''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiAirConditioner}" />`;
    }
    else return svg`<path class="status" transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiClose}" />`;
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
    const localizePreset =
      ( this.hass!.localize(`component.climate.state._.${preset}`) ||
        localize({ hass: this.hass, string: `extra_states.${preset}` }))
      + "\n" + localize({ hass: this.hass, string: `extra_states.change_message` });

    // title="${currentPreset === preset ? preset : ''}"

    return html `
      <div class="preset-label">
          <ha-icon-button
            title="${currentPreset === preset ? preset : ''}"
            class=${classMap({ "selected-icon": currentPreset === preset })}
            .preset=${preset}
            @click=${this._handleClickOrDoubleClick}
            @dblclick=${this._handleClickOrDoubleClick}
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
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${localizeInfo}"
            class=${info.class} 
            .name=${info.name}
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

  private _renderAutoFanInfo(info: any): TemplateResult {
    const localizeInfo =
      (this.hass!.localize(`component.climate.state._.${info.name}`) ||
       localize({ hass: this.hass, string: `extra_states.${info.name}` }))
      + "\n" + localize({ hass: this.hass, string: `extra_states.toggle_message` });
      
    return html `
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${localizeInfo}"
            class=${info.class} 
            .name=${info.name}
            @click=${this._handleClickAutoFanInfo}
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

  private _renderAutoStartStopEnable(): TemplateResult {
    const localizeInfo =
      localize({ hass: this.hass, string: `extra_states.auto_start_stop_enable` }),
      localizeLabel = localize({ hass: this.hass, string: `extra_states.auto_start_stop_label` });

    const checked=this._isAutoStartStopEnabled ? "checked":"";

    if (DEBUG) console.log(`checked=${checked}`);

    return html`
      <div class="left-info-label" title="${localizeInfo}">
        <span>
          <input type="checkbox" .checked=${this._isAutoStartStopEnabled} class="auto-start-stop-enable" @click=${this._handleClickAutoStartStopEnable} .label="${localizeInfo}" name="auto-start-stop-enable">
        </span>
        <span>${localizeLabel}</span>
      </div>
    `;

  }

  private _handleMoreInfo() {
    fireEvent(this, "hass-more-info", {
        entityId: this._config!.entity,
    });
  }

  private buildTitle() {
    let ret="";
    if (this._hasWindow && !this._config?.disable_window) ret += localize({ hass: this.hass, string: `extra_states.window_open` }) + "\n";
    if (this._hasWindowByPass) ret += localize({ hass: this.hass, string: `extra_states.window_bypass` }) + "\n";
    if (this._hasOverpowering && !this._config?.disable_overpowering) ret += localize({ hass: this.hass, string: `extra_states.overpowering` }) + "\n";
    if (this._hasPresence) ret += localize({ hass: this.hass, string: `extra_states.presence` }) + "\n";
    if (this._hasAutoStartStop && !this._config?.disable_autoStartStop) ret += localize({ hass: this.hass, string: `extra_states.auto_start_stop` }) + "\n";
    if (this._hasMotion) ret += localize({ hass: this.hass, string: `extra_states.motion` }) + "\n";

    return ret;
  }

  private _renderTemperature(temperature, isMain: boolean, x: string, y: string, isTarget: boolean) {
    const fontSize= isMain ? 15:6;
    const dx = isMain ? -2:-1;
    const dy = isMain ? -5.5:-2;
    const uomSize = isMain ? 5:3;
    
    let targetPosX:number = 76, targetPosY: number = 57, targetScale=0.20;

    let value:string;

    if (!temperature) {
      value = this.hass!.localize("extra_states.temp_unavailable");
    }
    else {
      value = formatNumber(
        temperature,
        this.hass.locale,
        { minimumFractionDigits: 1, maximumFractionDigits: 1 }
      );
    }

    if (isTarget && isMain) {
        targetPosX = 30;
        targetPosY = 56;
        targetScale = 0.25
    }

    return svg`
      ${isTarget && !this._config?.disable_target_icon && this._config?.disable_circle ? svg`
        <path 
          class="main-value" 
          transform="translate(${targetPosX}, ${targetPosY}) scale(${targetScale})" 
          fill="#ffffff" 
          d="${mdiBullseyeArrow}" 
        />` : ''}
      <text class="main-value" x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" style="font-size:${fontSize}px;">
        ${svg`${value}`}
        <tspan dx="${dx}" dy="${dy}" style="font-size: ${uomSize}px;">
          ${svg`
            ${this.hass.config.unit_system.temperature}
          `}
        </tspan>
      </text>
    `
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

      ${this.safety_state?.length > 0 ? html`
        <div class="security">
          <ha-icon-button class="alert" .path=${mdiThermometerAlert}>
          </ha-icon-button>
          ${html`
            ${this.safety_state!.map((sec_msg) => {
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

      <div title="${this.buildTitle()}" class="${this._config?.disable_circle ? 'disabled-circle-container':''}  ${this.mode}_${this.hvac_action} ${this.window ? 'window_open': ''}  ${this.overpowering ? 'overpowering': ''}">
        ${
          this._config?.disable_circle ? html`
            <!-- No cicle configured -->
          `:
            (this.value.low != null &&
            this.value.high != null &&
            this.stateObj.state !== UNAVAILABLE) ? html`
            <vt-ha-control-circular-slider
              class="${(this?.stateObj?.attributes?.saved_temperature && this?.stateObj?.attributes?.saved_temperature !== null) ? 'eco' : ''} ${this.safety_state !== null || this.error.length > 0 ? 'security_msg': ''} ${this.window ? 'window_open': ''}  ${this.overpowering ? 'overpowering': ''} ${this.presence ? 'presence': ''} ${this.motion ? 'motion': ''}  ${this.windowByPass ? 'windowByPass': ''} "
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
              class="${(this?.stateObj?.attributes?.saved_temperature && this?.stateObj?.attributes?.saved_temperature !== null) ? 'eco' : ''} ${this.safety_state !== null || this.error.length > 0 ? 'security_msg': ''} ${this.window ? 'window_open': ''}  ${this.overpowering ? 'overpowering': ''} ${this.presence ? 'presence': ''} ${this.motion ? 'motion': ''}  ${this.windowByPass ? 'windowByPass': ''} "
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
          <div class="content ${this.name.length == 0 ? 'noname':''} ${this.safety_state !== null || this.error.length > 0 ? 'security_msg': ''} ${this.window ? 'window_open': ''}  ${(this?.stateObj?.attributes?.saved_temperature && this?.stateObj?.attributes?.saved_temperature !== null) ? 'eco' : ''} ${this.overpowering ? 'overpowering': ''} ${this.presence ? 'presence': ''} ${this.motion ? 'motion': ''}  ${this.windowByPass ? 'windowByPass': ''} " >
            <svg id="main" viewbox="0 0 125 100">
              <g transform="translate(57.5,37) scale(0.35)">
                ${(this._hasWindowByPass) ? svg`
                  <path class="windowByPass ${this.windowByPass ? 'active': ''}" fill="none" transform="${(this._hasWindowByPass) ? 'translate(-50.25,0)' :''}" id="window-by-pass" d=${mdiWindowShutterAuto} />
                `: ``}
                ${(!this._hasWindowByPass && this._hasWindow && !this._config?.disable_window) ? svg`
                  <path class="window ${this.window ? 'active': ''}" fill="none" transform="${(this._hasWindow && !this._config?.disable_window) ? 'translate(-50.25,0)' :''}" id="window" d=${mdiWindowOpenVariant} />
                `: ``}
                ${(this._hasOverpowering && !this._config?.disable_overpowering) ? svg`
                  <path class="overpowering ${this.overpowering ? 'active': ''}" fill="none" transform="${(this._hasOverpowering && !this._config?.disable_overpowering) ? 'translate(-25.25,0)' :''}" id="overpowering" d=${mdiFlashAlert} />
                `: ``}
                ${(this._hasPresence) ? svg`
                  <path class="presence ${this.presence ? 'active': ''}" fill="none" transform="${(this._hasPresence) ? 'translate(0.25,0)' :''}" id="overpowering" d=${mdiHomeAccount} />
                `: ``}
                ${(this._hasAutoStartStop && !this._config?.disable_autoStartStop) ? svg`
                  <path class="auto-start-stop" fill="none" transform="${(this._hasAutoStartStop && !this._config?.disable_autoStartStop) ? 'translate(25.25,0)' :''}" id="autoStartStop" d=${mdiPowerSleep}/>
                `: ``}
                ${(this._hasMotion) ? svg`
                  <path class="motion ${this.motion ? 'active': ''}" fill="none" transform="${(this._hasMotion) ? 'translate(50.25,0)' :''}" id="motion" d=${mdiMotionSensor} />
                `: ``}
              </g>

              ${
                this._config?.disable_circle ? svg`
                  ${this._renderTemperature(this._display_top, true, "55", "60%", ! this?._config?.set_current_as_main)}
                  ${this._renderTemperature(this._display_bottom, false, "90", "60%", this?._config?.set_current_as_main == true)}
                  <g class="current-info" transform="translate(100,65)">
                    ${this._renderHVACAction()}
                  </g>
                `: svg`
                  ${this._renderTemperature(this._display_top, true, "50%", "60%", ! this?._config?.set_current_as_main)}
                  <line x1="35" y1="72" x2="90" y2="72" stroke="#e7e7e8" stroke-width="0.5" />
                  <g class="current-info" transform="translate(62.5,80)">
                    ${this._renderTemperature(this._display_bottom, false, "-5%", "0%", this?._config?.set_current_as_main == true)}
                  ${this._renderHVACAction()}
                </g>
              `}              
          </svg>
        </svg>
            </svg>
          </div>
          ${this._config?.disable_window ? html``: html`
          </vt-ha-control-circular-slider>`}
        </div>
      <div id="modes">
        ${svg`
          ${this.modes.map((mode) => {
            if(this._config?.disable_heat && mode === "heat") return html ``;
            if(this._config?.disable_auto && mode === "auto") return html ``;
            if(this._config?.disable_cool && mode === "cool") return html ``;
            if(this._config?.disable_heat_cool && mode === "heat_cool") return html ``;
            if(this._config?.disable_dry && mode === "dry") return html ``;
            if(this._config?.disable_fan_only && mode === "fan_only") return html ``;
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

      <div id="left-infos">
      ${ this._config!.autoStartStopEnableEntity ? svg`
        ${ this._renderAutoStartStopEnable()}
        `:'' }
      ${svg`
        ${this._externalPowerInfos.map((infos) => {
          return this._renderPowerInfo(infos);
        })}
      `}
      ${svg`
        ${this.powerInfos.map((infos) => {
          return this._renderPowerInfo(infos);
        })}
      `}
      ${svg`
        ${this.auto_fan_infos.map((infos) => {
          return this._renderAutoFanInfo(infos);
        })}
      `}
    </div>
    </ha-card>
  `;
  };
}
