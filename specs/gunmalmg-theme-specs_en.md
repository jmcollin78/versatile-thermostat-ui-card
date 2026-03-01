# General Objectives

We will be working on the **Gunmalmg theme**. You are a specialized agent in front-end development, particularly in CSS, HTML, and JavaScript.

This theme is a minimal theme that allows condensed display of the main thermostat information.
The main information displayed are:

-   the current temperature (current_temperature),
-   the target temperature (target_temperature),
-   the operating mode (hvac_mode),
-   the action state (hvac_action),
-   the lock state (lock_state),
-   the selected preset (preset_mode),
-   the preset timer (timed_preset).

The possible actions from this card are:

1. turn on / off the thermostat (hvac_mode)
2. change the preset (preset_mode),
3. change the lock state,
4. activate / deactivate the preset timer (timed_preset).
5. display the detailed page in a popup (by clicking on one of the temperatures).

The theme should be designed to be easily readable and understandable, even from a distance.

The other existing themes are more detailed and display more information, **they should remain as they currently are** without any changes (for backward compatibility).
The Gunmalmg theme popup should be designed to display the same information as the Classic theme (the most complete theme). As much as possible the code will be shared so that a modification in the Classic theme is automatically reflected in the Gunmalmg theme popup, without any changes to the Gunmalmg theme. This point is important for long-term code maintainability.

## Preset Management Rules

The list of presets is displayed as buttons on a single row. Since the number of presets can be large, the row must be horizontally scrollable. The selected preset is highlighted with a different style (e.g., colored background). Other presets are displayed with a more neutral style (e.g., grayed background).
The scrollable window that displays the presets is automatically scrolled to the active preset when the page is displayed.

## Lock and Timed Preset Action Display Rules

The lock and timed preset actions are displayed as buttons, to the right of the preset buttons, in the reserved space.

The lock button is displayed on the right and at the top. It is vertically aligned with the preset buttons. If the lock is active, the lock button is highlighted with a red color. Otherwise it is displayed in green. An option allows you to completely hide the lock display, in which case the lock button is not displayed at all.

If the timed preset is active, the remaining time is displayed as well as the button to cancel it. If the timed preset is inactive, you can activate it by selecting the duration from the list of possible options or entering a duration manually if the manual option is selected. The operation is identical to that of other themes, only its position is different.

## Popup Display Rules

The popup should display the same information as the Classic theme. It should reuse the Classic theme code without having to duplicate it, whether for code or styles. The Gunmalmg theme should just include the Classic theme code for the popup, and not duplicate the Classic theme code in the popup.

The popup should be centered on the screen.

It should be the same size as the Classic theme card, and should be designed to be easily readable and understandable, even from a distance and even on a mobile screen. It can take up the entire page on mobile, and be smaller on desktop, but it should always be easily readable.

The popup is equipped with a close button at the top left like classic Home Assistant popups. By clicking this button, the popup should close and return to the Gunmalmg theme display.

## Warning Message Display Rules

If a warning type message (displayed with a red information icon) is present or if safety mode is present, then the main temperature is displayed in red. This will encourage the user to click on it and see the message in the popup. I would like the popup to open with the message displayed, as if the user had clicked on the red information icon of the popup.

## Configuration Options

The card has many options and they deserve a serious cleanup.

### Obsolete Options

Some options are obsolete because they are forced by the current theme:

1. disable_circle,
2. disable_background_color,

### Useless Options

Some options are useless and should be removed:

1. eco_temperature

### Options Not Applicable to the Gunmalmg Theme

Some options do not apply to the Gunmalmg theme. These are:

3. disable_window,
4. disable_autoStartStop,
5. disable_overpowering,
6. disable_heat, disable_cool, disable_auto, disable_off, disable_dry, disable_fan_only, disable_menu, disable_power_infos, disable_auto_fan_infos, disable_target_icon, disable_buttons, disable_presets
7. disable_buttons

### Options Common to All Themes

Therefore only the following options are also applicable to the Gunmalmg theme:

1. disable_name,
2. disable_safety_warning,
3. set_current_as_main
4. allow_lock_toggle,
5. lock_relock_delay,
6. disable_timed_preset,
7. use_manual_duration_input

Configuration options should be organized so that the user understands what is applicable to the theme:

1. A section "For all themes" should group common options. This list corresponds to the list above "also applicable to the Gunmalmg theme".
2. A section "For Classic, VTherm and Non-colored themes" should group options not applicable to the Gunmalmg theme. This list corresponds to the list above "do not apply to the Gunmalmg theme".
