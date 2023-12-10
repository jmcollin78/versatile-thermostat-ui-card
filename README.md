[![GitHub Release][releases-shield]][releases]
[![GitHub Activity][commits-shield]][commits]
[![License][license-shield]](LICENSE)
[![hacs][hacs_badge]][hacs]
[![BuyMeCoffee][buymecoffeebadge]][buymecoffee]

![Tip](https://github.com/jmcollin78/versatile_thermostat/blob/main/images/icon.png?raw=true)

# UI Card for versatile Thermostat

> ![Tip](https://github.com/jmcollin78/versatile_thermostat/blob/main/images/tips.png?raw=true) This card is dedicated to the Versatile Thermostat integration which is available in HACS also and [here](https://github.com/jmcollin78/versatile_thermostat).
> 
> This card is based on the beautiful (Better Thermostat UI Card)[https://github.com/KartoffelToby/better-thermostat-ui-card]. It adds some feature so that you can use Versatile Thermostat directly from the card. A big thanks to @KartoffelToby for this Better Thermostat UI Card.

When presence is detected:

![Versatile Thermostat UI Card with presence](/assets/1.png)

When security is detected:

![Versatile Thermostat UI Card with security](/assets/2.png)

When activity is detected:

![Versatile Thermostat UI Card with activity](/assets/3.png)

When overpowering is detected:

![Versatile Thermostat UI Card with overpowering](/assets/4.png)

When window open is detected:

![Versatile Thermostat UI Card with window open](/assets/5.png)

When window bypass is activated:

![Versatile Thermostat UI Card with window bypass](/assets/6.png)

With all status icons:

![Versatile Thermostat UI Card with all status icons](/assets/7.png)

The card configuration:

![Versatile Thermostat UI Card configuration](/assets/8.png)
 
## Goals

- [X] Add versatile_thermostat support for showing the extra status
- [X] Improve the UI for Touch devices

# Installation

For installation you should have [HACS](https://hacs.xyz/docs/setup/download/) installed. Then add this repository https://github.com/jmcollin78/versatile-thermostat-ui-card in HACS and install the card. You have to reload you browser after installation.

Then you can add the new card into your dashboard.

## Options

Note: those options should be improved with official release
| Name                 | Type    | Default      | Description                                                                                            |
| -------------------- | ------- | ------------ | ------------------------------------------------------------------------------------------------------ |
| type                 | string  | **Required** | `custom:versatile-thermostat-ui-card`                                                                     |
| entity               | string  | **Required** | The entity id of climate entity (must be a versatile_thermostat entity). Example: `climate.hvac`          |
| disable_window       | boolean  | **optional** | turn off the window open indicator                                                                     |
| disable_overpowering | boolean  | **optional** | turn off the overpowering indicator                                                                |
| disable_heat        | boolean  | **optional** | turn off the on/heat button                                                                          |
| disable_cool        | boolean  | **optional** | turn off the on/cool button                                                                          |
| disable_heat_cool   | boolean  | **optional** | turn off the on/heat_cool button                                                                     |
| disable_auto        | boolean  | **optional** | turn off the on/auto button                                                                          |
| disable_dry         | boolean  | **optional** | turn off the on/dry button                                                                           |
| disable_fan_only    | boolean  | **optional** | turn off the on/fan_only button                                                                      |
| disable_off         | boolean  | **optional** | turn off the off button                                                                         |
| disable_buttons     | boolean  | **optional** | turn off the plus/minus buttons                                                                        |
| disable_security_warning     | boolean  | **optional** | turn off the security warning (when a temperature sensor is out)                              |
| disable_power_infos | boolean  | **optional** | turn off the power informations                                                                        |
| disable_auto_fan_infos | boolean  | **optional** | turn off the auto-fan informations                                                                  |
| name                | string/boolean  | **optional** | override the default entity name |
| set_current_as_main | boolean | **optional** | Exchange target temperature and room temperature |


Example:
```
type: custom:versatile-thermostat-ui-card
entity: climate.thermostat_switch_1
disable_window: false
disable_overpowering: false
disable_heat: false
disable_cool: false
disable_heat_cool: false
disable_auto: false
disable_dry: false
disable_fan_only: false
disable_menu: false
disable_off: false
disable_security_warning: false
set_current_as_main: true
disable_buttons: false
disable_power_infos: false
disable_auto_fan_infos: false
name: Chambre
```

# Actions
Some actions are available directly on the card.

__Note:__ all actions done on the card and resetted if the VTherm integration restarts. If you want persistant change, you must edit the configuration of the VTherm itself on the Versatile Thermostat integration.

## Change the preset temperature
Preset temperature cann be changed directly from the card with the following actions:
1. select the preset, you want to change,
2. select the temperature you want to set with the selector or the +/- buttons,
3. double click on the preset you want to change. When this action occurs, the preset rapidly change to the previous value and then to the new value to indicate that it is stored.

You can do this operations for all displayed presets but not on the `Activity` preset because this preset uses the temperature values of the others preset. See documentation of [versatile_thermostat README](https://github.com/jmcollin78/versatile_thermostat/blob/main/README.md#configure-the-activity-mode-or-motion-detection).

Of course you should have displayed the presets to be able to do so.

## Disable the auto-fan mode
For `over_climate` you have the possibility to configure the `auto-fan` mode feature. See [versatile_thermostat README](https://github.com/jmcollin78/versatile_thermostat/blob/main/README.md#auto-fan-mode).

If the `auto-fan` mode is configured, you can toggle between the configured `auto_fan_mode` configured for the VTherm and the None mode (which disable the auto-fan mode).

To toggle the auto-fan mode you must:
1. click on the `Auto-fan` icon at the left of the Thermostat.

## Help wanted!

It would be awsome if you help me to translate this card to other languages.

Create a PR, the Translation is done in json files checkout the en translation [here](https://github.com/KartoffelToby/versatile-thermostat-ui-card/blob/master/src/localize/languages/en.json)

Please add your language to this list as well while you are making your PR. Put it in alphabetical order and according to [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

## Translations

[INLANG Editor](https://inlang.com/editor/github.com/KartoffelToby/versatile-thermostat-ui-card)

What we have so far:
- en - Reference 
- bg
- ca
- cn
- cs
- da
- de
- el
- es
- fi
- fr
- hu
- it
- nl
- no
- pl
- pt
- ro
- ru
- sv
- sl
- sk
- tr
- uk

## Support me
<a href="https://www.buymeacoffee.com/jmcollin78"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jmcollin78&button_colour=0ac982&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

***

[versatile_thermostat]: https://github.com/jmcollin78/versatile_thermostat
[buymecoffee]: https://www.buymeacoffee.com/jmcollin78
[buymecoffeebadge]: https://img.shields.io/badge/Buy%20me%20a%20beer-%245-orange?style=for-the-badge&logo=buy-me-a-beer
[commits-shield]: https://img.shields.io/github/commit-activity/y/jmcollin78/versatile-thermostat-ui-card.svg?style=for-the-badge
[commits]: https://github.com/jmcollin78/versatile-thermostat-ui-card/commits/master
[hacs]: https://github.com/custom-components/hacs
[hacs_badge]: https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/
[license-shield]: https://img.shields.io/github/license/jmcollin78/versatile-thermostat-ui-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-Joakim%20Sørensen%20%40ludeeus-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/jmcollin78/versatile-thermostat-ui-card.svg?style=for-the-badge
[releases]: https://github.com/jmcollin78/versatile-thermostat-ui-card/releases
