import { Infer, array, assign, boolean, object, optional, any, number, string } from "superstruct";
import { HvacMode, LovelaceCardConfig } from "./ha";

const lovelaceCardConfigStruct = object({
    index: optional(number()),
    view_index: optional(number()),
    view_layout: any(),
    type: string(),
});

const entitySharedConfigStruct = object({
    entity: optional(string()),
    name: optional(string()),
    icon: optional(string()),
    autoStartStopEnableEntity: optional(string()),
    powerEntity: optional(string())
});
type EntitySharedConfig = Infer<typeof entitySharedConfigStruct>;

export const HVAC_MODES: HvacMode[] = [
    "auto",
    "heat_cool",
    "heat",
    "cool",
    "dry",
    "fan_only",
    "off",
];

export type ClimateCardConfig = LovelaceCardConfig &
    EntitySharedConfig &
    {
        disable_name?: boolean;
        disable_circle?: boolean;
        disable_window?: boolean;
        disable_autoStartStop?: boolean;
        disable_overpowering?: boolean;
        disable_heat?: boolean;
        disable_cool?: boolean;
        disable_heat_cool?: boolean;
        disable_auto?: boolean;
        disable_dry?: boolean;
        disable_fan_only?: boolean;
        disable_off?: boolean;
        disable_menu?: boolean;
        disable_security_warning?: boolean;
        disable_power_infos?: boolean;
        disable_auto_fan_infos?: boolean;
        set_current_as_main?: boolean;
        eco_temperature?: number;
        disable_buttons?: boolean;
    };

export const climateCardConfigStruct = assign(
    lovelaceCardConfigStruct,
    entitySharedConfigStruct,
    object({
        disable_name: optional(boolean()),
        disable_circle: optional(boolean()),
        disable_window: optional(boolean()),
        disable_autoStartStop: optional(boolean()),
        disable_overpowering: optional(boolean()),
        disable_heat: optional(boolean()),
        disable_cool: optional(boolean()),
        disable_heat_cool: optional(boolean()),
        disable_auto: optional(boolean()),
        disable_dry: optional(boolean()),
        disable_fan_only: optional(boolean()),
        disable_off: optional(boolean()),
        disable_security_warning: optional(boolean()),
        disable_power_infos: optional(boolean()),
        disable_auto_fan_infos: optional(boolean()),
        set_current_as_main: optional(boolean()),
        eco_temperature: optional(number()),
        disable_menu: optional(boolean()),
        disable_buttons: optional(boolean())
    })
);