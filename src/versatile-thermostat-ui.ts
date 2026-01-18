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
  // mdiWifiStrengthOffOutline,
  mdiMinus,
  mdiPlus,
  mdiAirConditioner,
  mdiWeatherWindy,
  mdiSunSnowflakeVariant,
  mdiHomeAccount,
  mdiMotionSensor,
  mdiThermometerAlert,
  mdiWindowShutterAlert,
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
  mdiBullseyeArrow,
  mdiSleep,
  mdiInformationBoxOutline,
  mdiAlertBoxOutline,
  mdiUpdate,
  mdiLock,
  mdiLockOpen,
  mdiBackspaceOutline
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
import { map } from 'superstruct';

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
  windowBypass: mdiWindowShutterAlert,
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
  power_sleep: mdiPowerSleep,
  sleep: mdiSleep
};
type Target = "value" | "low" | "high";

const preset_manual="none",
  preset_frost="frost",
  hvac_mode_OFF="off",
  hvac_mode_COOL="cool",
  hvac_mode_HEAT="heat",
  hvac_mode_AUTO="auto",
  hvac_mode_sleep="sleep",
  auto_fan_none="auto_fan_none",
  hvacAction_idle="idle",
  hvacAction_cooling="cooling",
  hvacAction_heating="heating";

const autoFanModeMapping={
  "auto_fan_none": "None",
  "auto_fan_low": "Low",
  "auto_fan_medium": "Medium",
  "auto_fan_high": "High",
  "auto_fan_turbo": "Turbo"
};

const hvacOffReasonAutoStartStop="hvac_off_auto_start_stop";
const autoStartStopLevels=["auto_start_stop_slow", "auto_start_stop_medium", "auto_start_stop_fast"];

const minPowerWatt=7;

const THEMES = {
  CLASSIC: 'classic',
  VTHERM: 'vtherm',
  UNCOLORED: 'uncolored',
  GUNMALMG: 'gunmalmg'
};

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
  @property({
      attribute: false
  }) public hass! : HomeAssistant;

  @property({ type: Number }) public value: Partial<Record<Target, number>> = {};
  @state() private _selectTargetTemperature: Target = "low";
  @property({ type: Number }) public current: number = 0;
  @property({ type: Number }) public humidity: number = 0;
  @property({ type: Number }) public temperature: number = 0;
  @property({ type: Number }) public min = 7;
  @property({ type: Number }) public max = 35;
  @property({ type: Number }) public step = 0.5;
  @property({ type: Number }) public powerPercent = 0;
  @property({ type: Number }) public meanCyclePower = 0;
  @property({ type: Number }) public valveOpenPercent = 0;
  @property({ type: Number }) public devicePower = 0;
  @property({ type: Number }) public regulatedTargetTemperature: number | null = null;
  @property({ type: Boolean }) public isOn: boolean = false;
  @property({ type: Boolean }) public window: boolean = false;
  @property({ type: Boolean }) public windowByPass: boolean = false;
  @property({ type: Boolean }) public presence: boolean = false;
  @property({ type: Boolean }) public motion: boolean = false;
  @property({ type: Boolean }) public overpowering: boolean = false;
  @property({ type: Boolean }) public isDeviceActive: boolean = false;
  @property({ type: Boolean }) public isSleeping: boolean = false;
  @property({ type: Boolean }) public isRegulated: boolean = false;
  @property({ type: Boolean }) public isRecalculateScheduled: boolean = false;
  @property({ type: String }) public windowState: string = "off";
  @property({ type: String }) public windowAutoState: string = "off";
  @property({ type: String }) public overpoweringState: string = "off";
  @property({ type: String }) public presenceState: string = "off";
  @property({ type: String }) public motionState: string = "off";
  @property({ type: String }) public safetyState: string = "off";
  @property({ type: String }) public status: string = "loading";
  @property({ type: String }) public hvacMode: string = hvac_mode_OFF;
  @property({ type: String }) public hvacAction: string = hvacAction_idle;
  @property({ type: String }) public preset: string = preset_manual;
  @property({ type: String }) public autoRegulationMode: string = "";
  @property({ type: String }) public currentAutoFanMode: string = auto_fan_none;
  @property({ type: String }) public autoFanMode: string = auto_fan_none;
  @property({ type: String }) public fanMode: string = "";
  @property({ type: String }) public hvacOffReason: string = "";
  @property({ type: Boolean, reflect: true }) public dragging = false;
  @property({ type: String}) public name: string = "";

  @state()
  private changingHigh?: number;

  private target: any = "value";

  private _highChanged(ev) {
    if (this.isUserLocked) {
      return;
    }
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
    if (this.isUserLocked) {
      return;
    }
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
    if (this.isUserLocked) {
      return;
    }
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
    if (this.isUserLocked) {
      return;
    }
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
    if (this.isUserLocked) {
      return;
    }
    const target = ev.currentTarget.target as Target;
    this._selectTargetTemperature = target;
    this._updateDisplay();
    this._vibrate(40);
  }

  private _init: boolean = true;
  private _firstRender: boolean = true;
  private _ignore: boolean = false;
  private _hasWindow: boolean = false;
  private _hasWindowByPass: boolean = false;
  private _hasPresence: boolean = false;
  private _hasMotion: boolean = false;
  private _hasOverpowering: boolean = false;
  private _hasAutoStartStop: boolean = false;
  private _isAutoStartStopEnabled: boolean = false;
  private _isAutoStartStopConfigured: boolean = false;
  private _isLockConfigured: boolean = false;
  private _isLocked: boolean = false;
  private _hasLockCode: boolean = false;
  private _relockTimeout: ReturnType<typeof setTimeout> | null = null;
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
  private autoFanInfos: any = [];
  private messages: any = [];
  private displayMessages: boolean = false;
  @state() private _hasError: boolean = false;


  @state() private _config?: ClimateCardConfig;
  @property({ type: String }) public theme: string = "";
  @state() private isLocked: boolean = false;
  @state() private isUserLocked: boolean = false;
  @state() private isAutomationLocked: boolean = false;
  @state() private showDigicodeModal: boolean = false;
  @state() private enteredCode: string = "";
  @state() private codeError: boolean = false;
  @state() private isLocking: boolean = false;
  @state() private timedPresetDuration: number | null = null;
  @state() private timedPresetActive: boolean = false;
  @state() private timedPresetRemainingTime: number | null = null;
  @state() private timedPresetPreset: string | null = null;

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
    // apply theme attribute on host for CSS selection
    const themeFromConfig = (this._config && this._config.theme) ? this._config.theme : "";
    this.theme = themeFromConfig;
    if (this.theme) {
      this.setAttribute('theme', this.theme);
    } else {
      // derive default theme from effective flags (use getters for compatibility)
      if (!this.effectiveDisableCircle) {
        this.setAttribute('theme', 'classic');
      } else if (this.effectiveDisableCircle && !this.effectiveDisableBackgroundColor) {
        this.setAttribute('theme', 'vtherm');
      } else if (this.effectiveDisableCircle && this.effectiveDisableBackgroundColor) {
        this.setAttribute('theme', 'uncolored');
      }
    }
  }

  private get effectiveDisableCircle(): boolean {
    const theme = (this._config && this._config.theme) ? this._config.theme : undefined;
    if (theme === THEMES.CLASSIC) return false;
    if (theme === THEMES.VTHERM) return true;
    if (theme === THEMES.UNCOLORED) return true;
    if (theme === THEMES.GUNMALMG) return true;
    // fallback to legacy flag
    return !!this._config?.disable_circle;
  }

  private get effectiveDisableBackgroundColor(): boolean {
    const theme = (this._config && this._config.theme) ? this._config.theme : undefined;
    if (theme === THEMES.CLASSIC) return false;
    if (theme === THEMES.VTHERM) return false;
    if (theme === THEMES.UNCOLORED) return true;
    if (theme === THEMES.GUNMALMG) return true;
    // fallback to legacy flag
    return !!this._config?.disable_background_color;
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

      ha-card.locked #modes ha-icon-button,
      ha-card.locked #vt-control-buttons vt-ha-outlined-icon-button,
      ha-card.locked #vt-control-buttons ha-svg-icon,
      ha-card.locked #presets ha-icon-button,
      ha-card.locked #presets .preset-label,
      ha-card.locked vt-ha-control-circular-slider,
      ha-card.locked .left-info-label .auto-start-stop-enable,
      ha-card.locked .left-info-label ha-icon-button {
        opacity: 0.6;
        pointer-events: none;
      }
      
      ha-card.locked #presets .preset-label {
        cursor: default !important;
      }

      .disabled-circle-container{
          height: 145px;
          width: 100%;
          background: radial-gradient(var(--hvac-mode-color), transparent 50%);
      }

      .disabled-circle-container.no-background-color{
          background: none;
      }

      vt-ha-outlined-icon-button {
        border: 1px solid var(--secondary-text-color);
        border-radius: 100%;
        padding: 0.5em;
        cursor: pointer;
      }

      .content.security_msg, vt-ha-control-circular-slider.security_msg, #modes.security_msg, #presets.security_msg, #vt-control-buttons.security_msg {
        opacity: 0.5;
        filter: blur(5px);
        pointer-events: none;
      }
      

      .security, .messages {
        position: absolute;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
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
        z-index: 2;
      }

      .messages-button.error {
        color: var(--error-color) !important;
        animation: pulse 2s infinite;
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
        z-index: 3;
        direction: var(--direction);
    }
      .container {
          position: relative;
          width: 100%;
          height: 100%;
      }
      vt-ha-control-circular-slider {
        --primary-color: var(--hvac-mode-color);
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
        transform: translate(-50%,-50%);
        max-width: 155px;
      }
      .content.no-presets {
        top: calc(60% - 30px);
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
      
      .auto,
      .heat_cool {
        --hvac-mode-color: var(--state-climate-auto-color);
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
      .sleep {
        --mode-color: #2641a3ff !important;
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

      .heat_idle, .heat_off {
        --hvac-mode-color: var(--label-badge-yellow);
      }

      .cool_cooling {
        --hvac-mode-color: var(--label-badge-blue);
      }

      .cool_idle {
        --hvac-mode-color:rgb(125, 194, 225);
      }

      .off_off, .off_idle {
        --hvac-mode-color: var(--slider-track-color);
      }

      .off_heating {
        --hvac-mode-color: #c7b598ff;
      }

      .off_cooling {
        --hvac-mode-color: #90acb8ff;
      }


      .sleep_off, .sleep_idle {
        --hvac-mode-color: #2641a3ff;
      }

      #modes {
        z-index: 0;
        position: relative;
        display: flex;
        width: auto;
        justify-content: center;
        margin-top: -3em;
        margin-bottom: 1em;
      }

      #presets {
        z-index: 0;
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: -1em;
        margin-bottom: 1em;
      }

      #presets > * {
        color: var(--disabled-text-color);
      }
      #presets .selected-icon {
        color: var(--label-badge-yellow);
      }

      .timed-preset-container {
        display: flex;
        align-items: center;
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid var(--divider-color, #e0e0e0);
      }

      .timed-preset-input {
        width: 30px;
        height: 32px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        padding: 0 8px;
        font-size: 14px;
        text-align: center;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        outline: none;
        transition: border-color 0.2s ease;
      }

      .timed-preset-input:focus {
        border-color: var(--primary-color);
      }

      .timed-preset-input::-webkit-outer-spin-button,
      .timed-preset-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      .timed-preset-input[type=number] {
        -moz-appearance: textfield;
      }

      .timed-preset-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-left: 4px;
      }

      .timed-preset-input.active {
        border-color: var(--primary-color);
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }

      .timed-preset-select {
        height: 32px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        padding: 0 4px;
        font-size: 14px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        outline: none;
        cursor: pointer;
        transition: border-color 0.2s ease;
      }

      .timed-preset-select:focus {
        border-color: var(--primary-color);
      }

      .timed-preset-select.active {
        border-color: var(--primary-color);
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }

      .timed-preset-remaining {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-color);
        min-width: 30px;
        text-align: center;
      }

      .timed-preset-cancel {
        --mdc-icon-size: 20px;
        color: var(--error-color);
        margin-left: 4px;
        cursor: pointer;
      }

      .timed-preset-cancel:hover {
        color: var(--primary-color);
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
        #left-infos.no-presets {
          top: 30%;
        }

      #right-lock {
        z-index: 0;
        position: absolute;
        right: 0;
        top: 15%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0.2em;
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
        z-index: 0;
        position: absolute;
        display: block;
        width: auto;
        justify-content: center;
        padding-bottom: 0.2em;
        left: 90%;
        top: 35%;
      }

      #vt-control-buttons .button {
        z-index: 0;
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
        z-index: 4 !important;
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

      .icon-group {
        cursor: pointer;
        pointer-events: auto;
      }

      .window {
        transition: fill 0.3s ease;
        fill: var(--warning-color);
        cursor: pointer;
        pointer-events: all;
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

      .lock-icon {
        --mdc-icon-size: 24px;
      }

      .lock-icon.locked {
        color: var(--error-color);
      }

      .lock-icon.unlocked {
        color: var(--success-color);
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
      /* Dialog Customization */
      ha-dialog.digicode-dialog {
          --mdc-dialog-min-width: 400px;
          --mdc-dialog-max-width: 450px;
          --mdc-theme-primary: var(--primary-color);
          --mdc-theme-surface: var(--card-background-color);
      }

        /* Theme variations ------------------------------------------------- */
        :host([theme="classic"]) vt-ha-control-circular-slider { display: block; }
          :host([theme="classic"]) .disabled-circle-container { display: none !important; }

        :host([theme="vtherm"]) vt-ha-control-circular-slider { display: none !important; }
          :host([theme="vtherm"]) .disabled-circle-container { display: block !important; background: radial-gradient(var(--hvac-mode-color), transparent 50%); }

        :host([theme="uncolored"]) vt-ha-control-circular-slider { display: none; }
          :host([theme="uncolored"]) .disabled-circle-container { display: block !important; background: none !important; }

        :host([theme="gunmalmg"]) vt-ha-control-circular-slider { display: none; }
          :host([theme="gunmalmg"]) vt-ha-control-circular-slider { display: none !important; }
        :host([theme="gunmalmg"]) .disabled-circle-container { display: block; background: none; }


      .dialog-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
      }

      .dialog-title {
        margin-top: 0;
        margin-bottom: 40px;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
      }

      .error-message {
        color: var(--error-color);
        font-size: 14px;
        height: 20px;
        margin-top: 4px;
        margin-bottom: 20px;
        text-align: center;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .error-message.visible {
        opacity: 1;
      }

      .code-display {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        padding: 20px 0;
        border-bottom: 1px solid var(--secondary-text-color);
      }

      .digit {
        width: 12px;
        height: 12px;
        margin: 0 5px;
        border-radius: 50%;
        background-color: var(--secondary-text-color);
        opacity: 0.3;
        transition: all 0.2s ease;
      }

      .digit.filled {
        opacity: 1;
        background-color: var(--primary-text-color);
        transform: scale(1.2);
      }

      .code-display.error {
        animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        color: var(--error-color);
      }

      .keypad {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 320px;
      }

      .keypad-row {
        display: flex;
        justify-content: space-around;
        gap: 16px;
      }

      .keypad-btn {
        flex: 1;
        --mdc-shape-small: 4px;
        --mdc-typography-button-font-size: 24px;
        --mdc-typography-button-font-weight: 400;
        height: 64px;
        --mdc-theme-primary: var(--primary-text-color);
        --mdc-button-outline-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .keypad-btn.spacer {
          visibility: hidden;
          pointer-events: none;
      }
      
      @keyframes shake {
        10%, 90% { transform: translate3d(-1px, 0, 0); }
        20%, 80% { transform: translate3d(2px, 0, 0); }
        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
        40%, 60% { transform: translate3d(4px, 0, 0); }
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

    if (changedProperties.has("showDigicodeModal")) {
      if (this.showDigicodeModal) {
        window.addEventListener("keydown", this._handleKeyDown);
      } else {
        window.removeEventListener("keydown", this._handleKeyDown);
      }
    }

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
      // const stateObj = this.hass.states[entity_id] as ClimateEntity;
      // if (!stateObj) {
      //     if (DEBUG) console.log(`No state`);
      //     return;
      // }
        if (DEBUG) console.log(`Something may have change`);
        this.stateObj = stateObj;
        const attributes = this.stateObj.attributes;
        const stateMode = this.stateObj.state;

        // Map all needed attributes
        this._isLockConfigured = (attributes?.is_lock_configured === true);

        if (attributes?.lock_manager)
          // if lock_manager attribute exist, use it to have the global lock state
          this._isLocked = attributes?.lock_manager?.is_locked || false;
          // else keep the current value to have a local lock state

        this.isUserLocked = this._isLocked && (!this._isLockConfigured || attributes?.lock_manager?.lock_users || false);
        this.isAutomationLocked = this._isLocked && (attributes?.lock_manager?.lock_automations || false);
        this._hasLockCode = (attributes?.lock_manager?.lock_code === true);


        // isLocked is the global lock state. isUserLocked is used for UI blocking.
        if (DEBUG) console.log(`Lock states. isConfigured:${this._isLockConfigured} isLocked=${this._isLocked} isUserLocked=${this.isUserLocked} isAutomationLocked=${this.isAutomationLocked} hasLockCode=${this._hasLockCode}`);

        this.name = "";
        this.hvacMode = stateMode || hvac_mode_OFF;
        this.hvacAction = attributes?.hvac_action;
        this.preset = attributes?.preset_mode;
        this.modes = attributes?.hvac_modes ? Object.values(attributes.hvac_modes) : [];
        this.presets = attributes.preset_modes ? Object.values(attributes.preset_modes) : [];
        this.isSleeping = (attributes?.specific_states?.is_sleeping === true);
        this.powerPercent = attributes?.vtherm_over_switch?.power_percent || attributes?.vtherm_over_climate?.valve_regulation?.power_percent || 0;
        if (attributes?.specific_states?.is_device_active === undefined) {
           // for non Vtherm is_device_active will be undefined and then only hvac action will handle the hvac_action display
          this.isDeviceActive = (this.hvacAction == hvacAction_heating || this.hvacAction == hvacAction_cooling);
          if (DEBUG) console.log(`is_device_active not found value=${this.isDeviceActive}`);
        } else {
          this.isDeviceActive = (attributes?.specific_states?.is_device_active === true);
          if (DEBUG) console.log(`is_device_active found value=${this.isDeviceActive}`);
        }
        this.temperature = attributes?.temperature;
        this.step = attributes?.configuration?.target_temperature_step || 0.5;
        this.min = attributes?.min_temp || 7;
        this.max = attributes?.max_temp || 35;
        this.current = attributes?.current_temperature || 0;
        this.windowState = attributes?.window_manager?.window_state
        this.windowAutoState = attributes?.window_manager?.window_auto_state
        this.humidity = attributes?.humidity ? parseFloat(attributes.humidity) : 0;
        this.overpoweringState = attributes?.power_manager?.overpowering_state || "off";
        this.presenceState = attributes?.presence_manager?.presence_state || "off";
        this.motionState = attributes?.motion_manager?.motion_state || "off";
        this._hasWindowByPass = (attributes?.window_manager?.is_window_bypass === true);
        this.safetyState = attributes?.safety_manager?.safety_state || "off";
        this.meanCyclePower = attributes?.power_manager?.mean_cycle_power || 0;
        this.valveOpenPercent = attributes?.vtherm_over_valve?.valve_open_percent || attributes?.vtherm_over_climate_valve?.valve_regulation?.valve_open_percent || 0;
        this.devicePower = attributes?.power_manager?.device_power || 0;
        this.isRegulated = (attributes?.vtherm_over_climate?.is_regulated === true);
        this.regulatedTargetTemperature = attributes?.vtherm_over_climate?.regulation?.regulated_target_temperature || null;
        this.autoRegulationMode = attributes?.vtherm_over_climate?.regulation?.auto_regulation_mode || null;
        this.currentAutoFanMode = attributes?.vtherm_over_climate?.current_auto_fan_mode || null;
        this.autoFanMode = attributes?.vtherm_over_climate?.auto_fan_mode || null;
        this.fanMode = attributes?.fan_mode || null;
        this.hvacOffReason = attributes?.specific_states?.hvac_off_reason || null;
        this.isRecalculateScheduled = attributes?.specific_states?.is_recalculate_scheduled || null;
        this.isOn = attributes?.specific_states?.is_on === true;
        
        // Timed preset manager state
        this.timedPresetActive = attributes?.timed_preset_manager?.is_active === true;
        this.timedPresetRemainingTime = attributes?.timed_preset_manager?.remaining_time_min || null;
        this.timedPresetPreset = attributes?.timed_preset_manager?.preset || null;
        
        const requestedHvacMode = attributes?.requested_state?.hvac_mode || null;
        let msgs = attributes?.specific_states?.messages || [];
        if (msgs && !Array.isArray(msgs)) {
            msgs = [msgs];
        }
        const hasValveRegulation = (attributes?.vtherm_over_climate_valve?.have_valve_regulation == true);

        if (!this._config?.disable_name) {
          this.name = this._config!.name ? this._config!.name : attributes.friendly_name;
        }
  
        if (this.hvacMode == hvac_mode_OFF && this.isSleeping === true) {
          this.hvacMode = hvac_mode_sleep;
        }
        if (DEBUG) console.log(`Mode is ${this.hvacMode}`);

        // hvac action
        // Patch hvacAction if power_percent is > 0. This avoid the circle color to change at each switch for over switch vtherm
        if (attributes?.is_over_switch === true && this.powerPercent > 0) {
          this.hvacAction = requestedHvacMode == hvac_mode_HEAT ? hvacAction_heating : hvacAction_cooling
          if (DEBUG) console.log(`After hvac_action patch ${this.hvacAction}`);
        }


        // Sort modes to have "off" at the end
        if (DEBUG) console.log(`Modes are ${this.modes}`);
        if (this.modes.length > 1 && this.modes.includes(hvac_mode_OFF)) {
          this.modes.sort((a, b) => {
            if (a === "off") return 1; // Place "off" après tout le reste
            if (b === "off") return -1; // Place tout le reste avant "off"
            // keep the alphabetical order for other modes
            return a.localeCompare(b);
          });
        }
        if (DEBUG) console.log(`After sort modes are ${this.modes}`);

        // Remove some preset modes: remove manual and frost in cool mode
        if (this.presets.length > 0) {
          this.presets = this.presets.filter((preset: string) => {
            return preset != preset_manual && (stateMode != hvac_mode_COOL || preset != preset_frost);
          });
        }

        // The temperature values
        this.value = {
          value: attributes?.temperature || 0,
          low: attributes?.target_temp_low || null,
          high: attributes?.target_temp_high || null,
        };
        
        if (this.windowState === 'on' || this.windowAutoState === 'on') {
          this._hasWindow = true;
        }
        else {
          this._hasWindow = false;
        }
        
        if (this.overpoweringState === 'on') {
          this._hasOverpowering = true;
          this.overpowering = true;
        }
        else {
          this._hasOverpowering = false;
          this.overpowering = false;
        }

        if (this.presenceState === 'on') {
          this._hasPresence = true;
          this.presence = true;
        }
        else {
          this._hasPresence = false;
          this.presence = false;
        }

        if (this.motionState === 'on') {
          this._hasMotion = true;
          this.motion = true;
        }
        else {
          this._hasMotion = false;
          this.motion = false;
        }

        // Build Security state
        if (this.safetyState === 'on' && !this?._config?.disable_safety_warning) {
          this.safety_state = [];
          this.safety_state.push(
            {
              name: localize({ hass: this.hass, string: `extra_states.safety_warning` }),
              security_msg:  localize({ hass: this.hass, string: `extra_states.safety_warning_msg` })
            });
          if (attributes.specific_states?.last_temperature_datetime) {
            let dif = dateDifferenceInMinutes(new Date(attributes.specific_states?.last_temperature_datetime));
            if (dif > 0) {
              this.safety_state.push(
              {
                name: localize({ hass: this.hass, string: `extra_states.room_temp` }),
                security_msg:  dif+" "+localize({ hass: this.hass, string: `extra_states.minutes` })
              });
            }
          }
          if (attributes.specific_states?.last_ext_temperature_datetime) {
            let dif = dateDifferenceInMinutes(new Date(attributes.specific_states?.last_ext_temperature_datetime));
            if (dif > 0) {
              this.safety_state.push(
              {
                name: localize({ hass: this.hass, string: `extra_states.outdoor_temp` }),
                security_msg:  dif+" "+localize({ hass: this.hass, string: `extra_states.minutes` })
              });
            }
          }
        } else {
          this.safety_state = null;
        }

        // Build Messages
        if (DEBUG) console.log(`Brut messages=${msgs}`);
        this.messages = [];
        this._hasError = false;

        // Add safety messages
        if (this.safety_state) {
             for (const safety of this.safety_state) {
                this.messages.push(`${safety.name}: ${safety.security_msg}`);
                this._hasError = true;
            }
        }

        // Add existing messages from the attribute
        for (const msg of msgs) {
          this.messages.push(localize({ hass: this.hass, string: `extra_states.${msg}` }));
        }

        const failureManager = attributes?.heating_failure_detection_manager;
        const isHeatingFailure = failureManager?.heating_failure_state === 'on';
        const isCoolingFailure = failureManager?.cooling_failure_state === 'on';

        if (isHeatingFailure) {
            this.messages.push(localize({ hass: this.hass, string: `extra_states.heating_failure` }));
            this._hasError = true;
        }
        if (isCoolingFailure) {
            this.messages.push(localize({ hass: this.hass, string: `extra_states.cooling_failure` }));
            this._hasError = true;
        }

        if (DEBUG) console.log(`Messages=${JSON.stringify(this.messages)}`);

        // Build Power Infos
        this!.powerInfos = [];
        if (DEBUG) console.log(`MeanCyclePower=${this.meanCyclePower} PowerPercent=${this.powerPercent} ValveOpenPercent=${this.valveOpenPercent} DevicePower=${this.devicePower}`);

        if (!this!._config?.disable_power_infos && (this.isOn || hasValveRegulation)) {
          if (attributes?.is_over_switch) {
            if (this.meanCyclePower && !this._config?.powerEntity) {
              this!.powerInfos!.push({
                name: "mean_power_cycle",
                value: roundNumber(this.meanCyclePower, 1),
                unit: this.meanCyclePower < minPowerWatt ? "kW" : "W",
                class: "vt-power-color"
              });
            }
            this.powerInfos.push({
              name: "power_percent",
              value: this.powerPercent,
              unit: "%",
              class: "vt-power-color"
            });
          }

          if (attributes?.is_over_valve || hasValveRegulation) {
            if (this.meanCyclePower && !this._config?.powerEntity) {
              this!.powerInfos!.push({
                name: "mean_power_cycle",
                value: roundNumber(this.meanCyclePower, 1),
                unit: this.meanCyclePower < minPowerWatt ? "kW" : "W",
                class: "vt-power-color"
              });
            }

            this.powerInfos.push({
              name: "valve_open_percent",
              value: this.valveOpenPercent,
              unit: "%",
              class: "vt-power-color"
            });
          }

          if (attributes?.is_over_climate && !hasValveRegulation) {
            if (this.devicePower && !this._config?.powerEntity) {
              this.powerInfos.push({
                name: "mean_power_cycle",
                value: this.devicePower,
                unit:  this.devicePower < minPowerWatt ? "kW" : "W",
                class: "vt-power-color"
              });
            }
            if (this.isRegulated) {
              this.powerInfos.push({
                name: "regulated_target_temperature",
                value: this.regulatedTargetTemperature,
                unit: attributes?.configuration?.temperature_unit,
                class: "vt-temp-color"
              });
              this.powerInfos.push({
                name: "auto_regulation_mode",
                value: localize({ hass: this.hass, string: `extra_states.${this.autoRegulationMode}` }),
                unit: "",
                class: "vt-label-color"
              });
            }
          }
        }
        else if (DEBUG) console.log(`No power to disply is_on=${this.isOn} or disabled`);

        // Build auto-fan infos
        this.autoFanInfos = [];
        if (!this?._config?.disable_auto_fan_infos && attributes?.is_over_climate && !hasValveRegulation) {
          const name=this.currentAutoFanMode != auto_fan_none ? "auto_fan_mode" : "auto_fan_mode_off";
          if (DEBUG) console.log(`VersatileThermostat UI : auto_fan icon name ${name}`);
          
          this.autoFanInfos.push({
            name: name,
            value: localize({ hass: this.hass, string: `extra_states.${this.currentAutoFanMode}` }),
            unit: "",
            class: "vt-label-color"
          });

          if (this.fanMode) {
            this.autoFanInfos.push({
              name: "fan_mode",
              value: localize({ hass: this.hass, string: `extra_states.fan_${this.fanMode}` }), 
              unit: "",
              class: "vt-label-color"
            })
          }

        }

        // Build autoStartStop infos
        this._hasAutoStartStop = ( this.hvacOffReason=== hvacOffReasonAutoStartStop);
        // this._hasAutoStartStopEnable = autoStartStopLevels.includes(attributes?.auto_start_stop_level);
        this._isAutoStartStopConfigured = (attributes?.is_auto_start_stop_configured === true);
        this._isAutoStartStopEnabled = (attributes?.auto_start_stop_manager?.auto_start_stop_enable === true);
        if (DEBUG) console.log(`_isAutoStartStopConfigured=${this._isAutoStartStopConfigured} _isAutoStartStopEnabled=${this._isAutoStartStopEnabled} hvac_off_reason=${this.hvacOffReason}`);

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
    if (this.isUserLocked) {
      return;
    }
    if ((e.currentTarget as any).mode === hvac_mode_sleep) {
      this.hass!.callService("versatile_thermostat", "set_hvac_mode_sleep", {
        entity_id: this._config!.entity,
      });
    }
    else {
      this.hass!.callService("climate", "set_hvac_mode", {
        entity_id: this._config!.entity,
        hvac_mode: (e.currentTarget as any).mode,
      });
    }
  }

  private _handleDisplayMessages(/* e: MouseEvent */): void {
    this.displayMessages = !this.displayMessages;
    this.requestUpdate();
    this._vibrate(40);
  }

  private last_target_temperature;

  private _handlePreset(e: MouseEvent): void {
    if (this.isUserLocked) {
      return;
    }
    this.last_target_temperature = this.temperature;
    const presetMode = (e.currentTarget as any).preset;
    
    if (this.timedPresetDuration && this.timedPresetDuration > 0) {
      // Use timed preset service
      this.hass!.callService("versatile_thermostat", "set_timed_preset", {
        entity_id: this._config!.entity,
        preset: presetMode,
        duration_minutes: this.timedPresetDuration,
      });
      // Reset the duration after use
      this.timedPresetDuration = null;
    } else {
      // Use standard preset service
      this.hass!.callService("climate", "set_preset_mode", {
        entity_id: this._config!.entity,
        preset_mode: presetMode,
      });
    }
  }

  private _formatRemainingTime(minutes: number | null): string {
    if (minutes === null || minutes <= 0) return "0";
    if (minutes < 60) {
      return `${minutes}`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
      return `${hours}h`;
    }
    return `${hours}h${remainingMinutes}`;
  }

  private _handleTimedPresetDurationChange(e: Event): void {
    const input = e.target as HTMLInputElement;
    const value = input.value ? parseInt(input.value, 10) : null;
    this.timedPresetDuration = (value && value > 0) ? value : null;
  }

  private _handleTimedPresetSelectChange(e: Event): void {
    const select = e.target as HTMLSelectElement;
    const value = select.value ? parseInt(select.value, 10) : null;
    this.timedPresetDuration = (value && value > 0) ? value : null;
  }

  private _handleCancelTimedPreset(): void {
    if (this.isUserLocked) {
      return;
    }
    console.info(`VersatileThermostatUI-CARD canceling timed preset`);
    this.hass!.callService("versatile_thermostat", "cancel_timed_preset", {
      entity_id: this._config!.entity,
    });
  }

  private _handleClickAutoFanInfo(/*e: MouseEvent*/): void {
    if (this.isUserLocked) {
      return;
    }
    // Activate or deactivate the auto-fan mode
    let newMode=auto_fan_none;
    if (this.currentAutoFanMode == auto_fan_none) {
      newMode = this.autoFanMode;
    }
    const mappedNewMode=autoFanModeMapping[newMode];

    if (DEBUG)console.info(
      `VersatileThermostatUI-CARD changing auto_fan_mode to ${newMode} (mapped=$${mappedNewMode}`
    );
    
    if (! mappedNewMode) {
      console.warn(
        `VersatileThermostatUI-CARD: auto_fan_mode ${newMode} has no mapping, aborting change.`
      );
      return;
    }
    this.hass!.callService("versatile_thermostat", "set_auto_fan_mode", {
      entity_id: this._config!.entity,
      auto_fan_mode: mappedNewMode,
    });
  }

  private _handleClickAutoStartStopEnable(/*e: MouseEvent*/): void {
    if (this.isUserLocked) {
      return;
    }
    // Activate or deactivate the auto-start-stop enable
    let newMode = !this._isAutoStartStopEnabled;
    console.info(
      `VersatileThermostatUI-CARD changing auto_start_stop_enable to ${newMode}`
    );
    
    this.hass!.callService("switch", "toggle", {
      entity_id: this._config!.autoStartStopEnableEntity,
    });
  }

  private _handleToggleWindowByPass(/*e: MouseEvent*/): void {
    // Activate or deactivate the window bypass
	if (this.isUserLocked) {
	        return;
	}
    if (DEBUG) console.log(`_handleToggleWindowByPass called. Current windowByPass is ${this._hasWindowByPass}`);
    let newMode= ! this._hasWindowByPass;

    console.info(
      `VersatileThermostatUI-CARD changing windowByPass to ${newMode}`
    );
    
    this.hass!.callService("versatile_thermostat", "set_window_bypass", {
      entity_id: this._config!.entity,
      window_bypass: newMode,
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
    if (this.hvacAction === 'heating' ||
        this.hvacMode == "heat" ||
        this.hvacMode == "heat_cool") {
      return svg`<path class="status ${this.isDeviceActive ? 'active':''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiHeatWave}" />`;
    }
    else if (this.hvacAction === 'cooling' ||
        this.hvacMode == "cool") {
      return svg`<path class="status cooler ${this.isDeviceActive ? 'active':''}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiAirConditioner}" />`;
    }
    else return svg`<path class="status" transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${mdiClose}" />`;
  }

  private _renderIcon(mode: string, currentMode: string): TemplateResult {
    if (!modeIcons[mode]) {
        return html ``;
    }
    const localizeMode = this.hass!.localize(`component.climate.state._.${mode}`) || localize({ hass: this.hass, string: `extra_states.${mode}` });
    // if (DEBUG) console.log(`mode=${mode} currentMode=${currentMode} localizeMode=${localizeMode}`);
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

  private _renderMessagesButton(): TemplateResult {
    const localizeMessages = localize({ hass: this.hass, string: `extra_states.messages-button` });
    // if (DEBUG) console.log(`localizeMessages=${localizeMessages}`);
    return html `
      <ha-icon-button
        title="${localizeMessages}"
        class="messages-button ${this._hasError ? 'error' : ''}"
        @click=${this._handleDisplayMessages}
        tabindex="0"
        .path=${this._hasError ? mdiAlertBoxOutline : mdiInformationBoxOutline}
        .label=${localizeMessages}
      >
      </ha-icon-button>
    `;
  }

  private _renderRecalculateScheduledButton(): TemplateResult {
    const localizeMessages = localize({ hass: this.hass, string: `extra_states.recalculation_scheduled` });
    // if (DEBUG) console.log(`localizeMessages=${localizeMessages}`);
    return html `
      <ha-icon-button
        title="${localizeMessages}"
        class="messages-button"
        tabindex="0"
        .path=${mdiUpdate}
        .label=${localizeMessages}
      >
      </ha-icon-button>
    `;
  }

  private _renderWindowByPassButton(): TemplateResult {
    const localizeMessages = localize({ hass: this.hass, string: `extra_states.window-bypass-button` });
    // if (DEBUG) console.log(`localizeMessages=${localizeMessages}`);
    return html `
      <ha-icon-button
        title="${localizeMessages}"
        class="window-bypass-button"
        @click=${this._handleToggleWindowByPass}
        tabindex="0"
        .path=${mdiWindowShutterAlert}
        .label=${localizeMessages}
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

  private _handleLockToggle(): void {
    if (!this._config?.allow_lock_toggle) {
      return;
    }
    if (!this._config?.entity || !this.hass || !this.stateObj) {
      return;
    }

    // Annuler tout timer de reverrouillage existant
    this._clearRelockTimeout();

    if (this._isLocked) {
      if (this._hasLockCode) {
        this.isLocking = false;
        this.showDigicodeModal = true;
        this.enteredCode = "";
        return;
      }
      if (this._isLockConfigured) {
        this.hass.callService("versatile_thermostat", "unlock", {
          entity_id: this._config.entity,
        });
        // Démarrer le timer de reverrouillage si configuré
        this._startRelockTimeout();
      }
      else {
        this._isLocked = this.isUserLocked = false;
        this.requestUpdate();
        // Démarrer le timer de reverrouillage si configuré
        this._startRelockTimeout();
      }
    } else {
      if (this._hasLockCode) {
        this.isLocking = true;
        this.showDigicodeModal = true;
        this.enteredCode = "";
        return;
      }
      if (this._isLockConfigured) {
        this.hass.callService("versatile_thermostat", "lock", {
          entity_id: this._config.entity,
        });
      }
      else {
        this._isLocked = this.isUserLocked = true;
        this.requestUpdate();
        // this._updateDisplay();
      }
    }
  }

  private _startRelockTimeout(): void {
    const delay = this._config?.lock_relock_delay;
    if (delay && delay > 0) {
      this._relockTimeout = setTimeout(() => {
        this._relockCard();
      }, delay * 1000);
    }
  }

  private _clearRelockTimeout(): void {
    if (this._relockTimeout) {
      clearTimeout(this._relockTimeout);
      this._relockTimeout = null;
    }
  }

  private _relockCard(): void {
    if (!this._config?.entity || !this.hass) {
      return;
    }
    
    if (this._isLockConfigured) {
      this.hass.callService("versatile_thermostat", "lock", {
        entity_id: this._config.entity,
      });
    } else {
      this._isLocked = this.isUserLocked = true;
      this.requestUpdate();
    }
  }

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (e.key >= '0' && e.key <= '9') {
      this._handleKeypadPress(e.key);
    } else if (e.key === 'Backspace') {
      this._handleKeypadClear();
    }
  };

  private _handleKeypadPress(key: string) {
    if (this.enteredCode.length < 4) {
      this.enteredCode += key;
      this.codeError = false;
      if (this.enteredCode.length === 4) {
        this._handleValidate();
      }
    }
  }

  private _handleKeypadClear() {
    this.enteredCode = this.enteredCode.slice(0, -1);
    this.codeError = false;
  }

  private _handleModalClose() {
    this.showDigicodeModal = false;
    this.enteredCode = "";
    this.codeError = false;
  }

  private async _handleValidate() {
    if (this.enteredCode.length === 4) {
      const service = this.isLocking ? "lock" : "unlock";
      try {
        await this.hass.callService("versatile_thermostat", service, {
          entity_id: this._config!.entity,
          code: this.enteredCode
        });
        // If successful, close the modal
        this._handleModalClose();
        // Si c'était un déverrouillage, démarrer le timer de reverrouillage
        if (!this.isLocking) {
          this._startRelockTimeout();
        }
      } catch (e) {
        // If error (wrong code), set error state and vibrate
        this.codeError = true;
        this.enteredCode = ""; // Clear code on error
        this._vibrate(200);
      }
    } else {
      this.codeError = true;
      this.enteredCode = ""; // Clear code on error
      this._vibrate(200);
    }
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
      ${isTarget && !this._config?.disable_target_icon && this.effectiveDisableCircle ? svg`
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
     [this.hvacMode]: true,
     locked: this.isUserLocked,
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

      ${this.safety_state?.length > 0 && !this.displayMessages ? html`
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
      ${this.messages.length > 0 && this.displayMessages ? html`
        <div class="messages">
          <ha-icon-button class="alert" .path=${this._hasError ? mdiAlertBoxOutline : mdiInformationBoxOutline}>
          </ha-icon-button>
          ${this.messages.map((message) => html`<span>${message}</span>`)}
        </div>
      ` : ``}

      <div title="${this.buildTitle()}" class="${this.effectiveDisableCircle ? 'disabled-circle-container' : ''} ${this.effectiveDisableBackgroundColor ? 'no-background-color' : ''}  ${this.hvacMode}_${this.hvacAction} ${this._hasWindow ? 'window_open' : ''}  ${this.overpowering ? 'overpowering' : ''}">
        ${
          this.effectiveDisableCircle ? html`
            <!-- No cicle configured -->
          `:
            (this.value.low != null &&
            this.value.high != null &&
            this.stateObj.state !== UNAVAILABLE) ? html`
            <vt-ha-control-circular-slider
              class="${this.safety_state !== null || this.displayMessages ? 'security_msg': ''} ${this._hasWindow ? 'window_open': ''}  ${this.overpowering ? 'overpowering': ''} ${this.presence ? 'presence': ''} ${this.motion ? 'motion': ''}  ${this._hasWindowByPass ? 'windowByPass': ''} "
              .inactive=${this._hasWindow}
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
              class="${this.safety_state !== null || this.displayMessages ? 'security_msg': ''} ${this._hasWindow ? 'window_open': ''}  ${this.overpowering ? 'overpowering': ''} ${this.presence ? 'presence': ''} ${this.motion ? 'motion': ''}  ${this._hasWindowByPass ? 'windowByPass': ''} "
              .inactive=${this._hasWindow}
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
          <div class="content${this._config?.disable_presets ? ' no-presets' : ''} ${this.name.length == 0 ? ' noname':''} ${this.safety_state !== null || this.displayMessages ? ' security_msg': ''} ${this._hasWindow ? ' window_open': ''}  ${this.overpowering ? ' overpowering': ''} ${this.presence ? ' presence': ''} ${this.motion ? ' motion': ''}  ${this._hasWindowByPass ? ' windowByPass': ''} " >
            <svg id="main" viewbox="0 0 125 100">
              <g transform="translate(57.5,37) scale(0.35)">
                ${(this._hasWindowByPass) ? svg`
                  <g transform="${(this._hasWindowByPass) ? 'translate(-50.25,0)' :''}" @click=${this._handleToggleWindowByPass} class="icon-group">
                    <rect width="24" height="24" fill="transparent" style="cursor: pointer;"/>
                    <path class="window window-by-pass ${this._hasWindowByPass ? 'active': ''}" id="window-by-pass" d=${mdiWindowShutterAlert}/>
                  </g>
                `: ``}
                ${(!this._hasWindowByPass && this._hasWindow && !this._config?.disable_window) ? svg`
                  <g transform="${(this._hasWindow && !this._config?.disable_window) ? 'translate(-50.25,0)' :''}" @click=${this._handleToggleWindowByPass} class="icon-group">
                    <rect width="24" height="24" fill="transparent" style="cursor: pointer;"/>
                    <path class="window ${this._hasWindow ? 'active': ''}" id="window" d=${mdiWindowOpenVariant}/>
                  </g>
                `: ``}
                ${(this._hasOverpowering && !this._config?.disable_overpowering) ? svg`
                  <path class="overpowering ${this.overpowering ? 'active': ''}" transform="${(this._hasOverpowering && !this._config?.disable_overpowering) ? 'translate(-25.25,0)' :''}" id="overpowering" d=${mdiFlashAlert} />
                `: ``}
                ${(this._hasPresence) ? svg`
                  <path class="presence ${this.presence ? 'active': ''}" transform="${(this._hasPresence) ? 'translate(0.25,0)' :''}" id="overpowering" d=${mdiHomeAccount} />
                `: ``}
                ${(this._hasAutoStartStop && !this._config?.disable_autoStartStop) ? svg`
                  <path class="auto-start-stop" transform="${(this._hasAutoStartStop && !this._config?.disable_autoStartStop) ? 'translate(25.25,0)' :''}" id="autoStartStop" d=${mdiPowerSleep}/>
                `: ``}
                ${(this._hasMotion) ? svg`
                  <path class="motion ${this.motion ? 'active': ''}" transform="${(this._hasMotion) ? 'translate(50.25,0)' :''}" id="motion" d=${mdiMotionSensor} />
                `: ``}
              </g>

              ${
                this.effectiveDisableCircle ? svg`
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
          </div>
          ${this._config?.disable_window ? html``: html`
          </vt-ha-control-circular-slider>`}
        </div>
      <div id="modes" class="${this.safety_state !== null || this.displayMessages ? 'security_msg': ''}">
        ${svg`
          ${this.modes.map((mode) => {
            if(this._config?.disable_heat && mode === "heat") return html ``;
            if(this._config?.disable_auto && mode === "auto") return html ``;
            if(this._config?.disable_cool && mode === "cool") return html ``;
            if(this._config?.disable_heat_cool && mode === "heat_cool") return html ``;
            if(this._config?.disable_dry && mode === "dry") return html ``;
            if(this._config?.disable_fan_only && mode === "fan_only") return html ``;
            if(this._config?.disable_off && mode === "off") return html ``;
            if(this._config?.disable_sleep && mode === "sleep") return html ``;
            return this._renderIcon(mode, this.hvacMode);
          })}
        `}
      </div>
      ${this?._config?.disable_buttons ? html`` : html`
        <div id="vt-control-buttons" class="${this.safety_state !== null || this.displayMessages ? 'security_msg': ''}">
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
      
      ${!this._config?.disable_presets ? html`
      <div id="presets" class="${this.safety_state !== null || this.displayMessages ? 'security_msg': ''}">
        ${svg`
          ${this.presets.map((preset) => {
            return this._renderPreset(preset, this.preset);
          })}
        `}
        ${!this._config?.disable_timed_preset ? html`
          <div class="timed-preset-container">
            ${this.timedPresetActive ? html`
              <span class="timed-preset-remaining" title="${localize({ hass: this.hass, string: 'extra_states.timed_preset_active' })}">
                ${this._formatRemainingTime(this.timedPresetRemainingTime)}
              </span>
              ${(this.timedPresetRemainingTime ?? 0) < 60 ? html`
                <span class="timed-preset-label">${localize({ hass: this.hass, string: 'extra_states.minutes' })}</span>
              ` : ''}
              <ha-icon-button
                class="timed-preset-cancel"
                @click=${this._handleCancelTimedPreset}
                title="${localize({ hass: this.hass, string: 'extra_states.cancel_timed_preset' })}"
                .path=${mdiClose}
              ></ha-icon-button>
            ` : this._config?.use_manual_duration_input ? html`
              <input
                type="number"
                class="timed-preset-input ${this.timedPresetDuration ? 'active' : ''}"
                .value=${this.timedPresetDuration ?? ''}
                @input=${this._handleTimedPresetDurationChange}
                placeholder="0"
                min="0"
                max="1440"
                title="${localize({ hass: this.hass, string: 'extra_states.timed_preset_title' })}"
              />
              <span class="timed-preset-label">${localize({ hass: this.hass, string: 'extra_states.minutes' })}</span>
            ` : html`
              <select
                class="timed-preset-select ${this.timedPresetDuration ? 'active' : ''}"
                @change=${this._handleTimedPresetSelectChange}
                title="${localize({ hass: this.hass, string: 'extra_states.timed_preset_title' })}"
              >
                <option value="" ?selected=${!this.timedPresetDuration}>--</option>
                <option value="15" ?selected=${this.timedPresetDuration === 15}>15 ${localize({ hass: this.hass, string: 'extra_states.minutes' })}</option>
                <option value="30" ?selected=${this.timedPresetDuration === 30}>30 ${localize({ hass: this.hass, string: 'extra_states.minutes' })}</option>
                <option value="60" ?selected=${this.timedPresetDuration === 60}>1 h</option>
                <option value="120" ?selected=${this.timedPresetDuration === 120}>2 h</option>
                <option value="240" ?selected=${this.timedPresetDuration === 240}>4 h</option>
                <option value="480" ?selected=${this.timedPresetDuration === 480}>8 h</option>
                <option value="1440" ?selected=${this.timedPresetDuration === 1440}>24 h</option>
              </select>
            `}
          </div>
        ` : ''}
      </div>
      ` : ''}

      <div id="left-infos" class="${this._config?.disable_presets ? 'no-presets' : ''}">
      ${ this.isRecalculateScheduled ? svg`
        ${this._renderRecalculateScheduledButton()}
        `:''}
      ${ this.messages.length > 0 ? svg`
        ${this._renderMessagesButton()}
        `:''}
      ${ this._config!.autoStartStopEnableEntity && this._isAutoStartStopConfigured ? svg`
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
        ${this.autoFanInfos.map((infos) => {
          return this._renderAutoFanInfo(infos);
        })}
      `}
    </div>

    <div id="right-lock">
      ${this._config?.allow_lock_toggle ? html`
              <ha-icon-button
                class="lock-icon ${this._isLocked ? 'locked' : 'unlocked'}"
                .path=${this._isLocked ? mdiLock : mdiLockOpen}
                @click=${this._handleLockToggle}
                tabindex="0"
              ></ha-icon-button>
            `
        : ''}
    </div>

    <ha-dialog
      .open=${this.showDigicodeModal}
      @closed=${this._handleModalClose}
      hideActions
      class="digicode-dialog"
    >
      <div class="dialog-content">
        <h2 class="dialog-title">
          ${this.isLocking 
            ? localize({ hass: this.hass, string: `extra_states.lock` }) 
            : localize({ hass: this.hass, string: `extra_states.unlock` })} ${this.name}
        </h2>
        <div class="code-display ${this.codeError ? 'error' : ''}">
          <span class="digit ${this.enteredCode.length > 0 ? 'filled' : ''}"></span>
          <span class="digit ${this.enteredCode.length > 1 ? 'filled' : ''}"></span>
          <span class="digit ${this.enteredCode.length > 2 ? 'filled' : ''}"></span>
          <span class="digit ${this.enteredCode.length > 3 ? 'filled' : ''}"></span>
        </div>
        <div class="error-message ${this.codeError ? 'visible' : ''}">
          ${localize({ hass: this.hass, string: `extra_states.code_error` })}
        </div>

        <div class="keypad">
          <div class="keypad-row">
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('1')}>1</mwc-button>
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('2')}>2</mwc-button>
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('3')}>3</mwc-button>
          </div>
          <div class="keypad-row">
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('4')}>4</mwc-button>
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('5')}>5</mwc-button>
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('6')}>6</mwc-button>
          </div>
          <div class="keypad-row">
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('7')}>7</mwc-button>
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('8')}>8</mwc-button>
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('9')}>9</mwc-button>
          </div>
          <div class="keypad-row">
            <mwc-button class="keypad-btn spacer" disabled></mwc-button>
            <mwc-button class="keypad-btn" @click=${() => this._handleKeypadPress('0')}>0</mwc-button>
            <mwc-button class="keypad-btn action-btn clear" @click=${this._handleKeypadClear}><ha-svg-icon .path=${mdiBackspaceOutline}></ha-svg-icon></mwc-button>
          </div>
        </div>
      </div>
    </ha-dialog>
    </ha-card>
  `;
  };

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this._handleKeyDown);
    this._clearRelockTimeout();
  }
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./versatile-thermostat-ui-card-editor");
    return document.createElement("versatile-thermostat-ui-card-editor") as LovelaceCardEditor;
  }

  public static async getStubConfig(hass: HomeAssistant): Promise<any> {
      const entities = Object.keys(hass.states);
      const climates = entities.filter((e) => ["climate"].includes(e.split(".")[0]));
      const vt_climate:any = climates.filter((e) => hass.states[e].attributes?.specific_states);
      return {
          type: "custom:versatile-thermostat-ui-card",
          entity: vt_climate[0] || climates[0]
      };
  }
}
