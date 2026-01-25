import { LitElement } from 'lit';
import { html, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import memoizeOne from "memoize-one";
import { assert } from "superstruct";
import { fireEvent, LovelaceCardEditor, atLeastHaVersion, HomeAssistant } from "./ha";
import setupCustomlocalize from "./localize/localize";
import { ClimateCardConfig, climateCardConfigStruct } from "./climate-card-config";

const GENERIC_LABELS = [
    "icon_color",
    "layout",
    "fill_container",
    "primary_info",
    "secondary_info",
    "icon_type",
    "content_info",
    "use_entity_picture",
    "collapsible_controls",
    "icon_animation",
];

const loadHaComponents = (version: string) => {
    if (
        !customElements.get("ha-form") ||
        (!customElements.get("hui-action-editor") && !atLeastHaVersion(version, 2022, 11))
    ) {
        (customElements.get("hui-button-card") as any)?.getConfigElement();
    }
    if (!customElements.get("ha-entity-picker")) {
        (customElements.get("hui-entities-card") as any)?.getConfigElement();
    }
};

const CLIMATE_LABELS = [
    "theme",
    "autoStartStopEnableEntity",
    "powerEntity",
    "disable_name",
    "disable_window",
    "disable_autoStartStop",
    "disable_overpowering",
    "disable_heat",
    "disable_cool",
    "disable_heat_cool",
    "disable_auto",
    "disable_dry",
    "disable_fan_only",
    "disable_off",
    "disable_sleep",
    "disable_menu",
    "disable_safety_warning",
    "disable_buttons",
    "set_current_as_main",
    "disable_power_infos",
    "disable_auto_fan_infos",
    "disable_target_icon",
    "allow_lock_toggle",
    "lock_relock_delay",
    "disable_presets",
    "disable_timed_preset",
    "use_manual_duration_input",
] as string[];

const computeSchema = memoizeOne(
    (themeOptions: any): any[] => [
        { name: "entity", selector: { entity: { domain: ["climate"] } } },
        { name: "name", selector: { text: {} } },
        { name: "theme", selector: { select: { options: themeOptions } } },
        {
            type: "grid",
            name: "",
            schema: [
                { name: "autoStartStopEnableEntity", selector: { entity: { domain: ["switch"] } } },
                { name: "powerEntity", selector: { entity: { domain: ["sensor", "input_number"] } } },
            ]
        },
        {
            type: "grid",
            name: "",
            schema: [
                { name: "disable_name", selector: { boolean: {} } },
                { name: "disable_window", selector: { boolean: {} } },
                { name: "disable_autoStartStop", selector: { boolean: {} } },
                { name: "disable_overpowering", selector: { boolean: {} } },
                { name: "disable_heat", selector: { boolean: {} } },
                { name: "disable_cool", selector: { boolean: {} } },
                { name: "disable_heat_cool", selector: { boolean: {} } },
                { name: "disable_auto", selector: { boolean: {} } },
                { name: "disable_dry", selector: { boolean: {} } },
                { name: "disable_fan_only", selector: { boolean: {} } },
                { name: "disable_off", selector: { boolean: {} } },
                { name: "disable_sleep", selector: { boolean: {} } },
                { name: "disable_menu", selector: { boolean: {} } },
                { name: "disable_safety_warning", selector: { boolean: {} } },
                { name: "disable_buttons", selector: { boolean: {} } },
                { name: "set_current_as_main", selector: { boolean: {} } },
                { name: "disable_power_infos", selector: { boolean: {} } },
                { name: "disable_auto_fan_infos", selector: { boolean: {} } },
                { name: "disable_target_icon", selector: { boolean: {} } },
                { name: "allow_lock_toggle", selector: { boolean: {} } },
                { name: "lock_relock_delay", selector: { number: { min: 0, max: 3600, unit_of_measurement: "s", mode: "box" } } },
                { name: "disable_presets", selector: { boolean: {} } },
                { name: "disable_timed_preset", selector: { boolean: {} } },
                { name: "use_manual_duration_input", selector: { boolean: {} } },
            ],
        },
    ]
);

@customElement("versatile-thermostat-ui-card-editor")
export class ClimateCardEditor extends LitElement implements LovelaceCardEditor {
    @state() private _config?: ClimateCardConfig;
    @property({ attribute: false }) public hass!: HomeAssistant;

    connectedCallback() {
        super.connectedCallback();
        void loadHaComponents(this.hass.connection.haVersion);
    }

    public setConfig(config: ClimateCardConfig): void {
        assert(config, climateCardConfigStruct);
        this._config = config;
    }

    private _computeLabel = (schema: any) => {
        const customLocalize = setupCustomlocalize(this.hass!);

        if (GENERIC_LABELS.includes(schema.name)) {
            return customLocalize(`editor.card.generic.${schema.name}`);
        }
        if (CLIMATE_LABELS.includes(schema.name)) {
            return customLocalize(`editor.card.climate.${schema.name}`);
        }
        return this.hass!.localize(`ui.panel.lovelace.editor.card.generic.${schema.name}`);
    };

    protected render(): TemplateResult {
        if (!this.hass || !this._config) {
            return html``;
        }

        const customLocalize = setupCustomlocalize(this.hass!);
        const themeOptions = [
            { value: "classic", label: customLocalize("editor.card.climate.theme_classic") || "Classic" },
            { value: "vtherm", label: customLocalize("editor.card.climate.theme_vtherm") || "VTherm" },
            { value: "uncolored", label: customLocalize("editor.card.climate.theme_uncolored") || "Uncolored" },
            { value: "gunmalmg", label: customLocalize("editor.card.climate.theme_gunmalmg") || "Gunmalmg" },
        ];

        const schema = computeSchema(themeOptions);

        return html`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${schema}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `;
    }

    private _valueChanged(ev: CustomEvent): void {
        const cfg = ev.detail.value as ClimateCardConfig;
        // If theme not explicitly set, derive it from flags for a better UX
        if (!cfg.theme) {
            const disableCircle = !!cfg.disable_circle;
            const disableBg = !!cfg.disable_background_color;
            if (!disableCircle) cfg.theme = 'classic';
            else if (disableCircle && !disableBg) cfg.theme = 'vtherm';
            else if (disableCircle && disableBg) cfg.theme = 'uncolored';
        }

        fireEvent(this, "config-changed", { config: cfg });
        fireEvent(this, "hass", { config: cfg });
    }
}