import { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";

interface SensorEntityAttributes extends HassEntityAttributeBase {
    value: number;
    unit: string;
    friendly_name: string;
}

export interface SensorEntity extends HassEntityBase {
    attributes: SensorEntityAttributes;
}