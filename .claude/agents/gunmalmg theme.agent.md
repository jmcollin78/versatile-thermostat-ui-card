---
name: gunmalmg theme
description: Développement du thème Gunmalmg
tools: [read, grep, glob, bash, execute, search, web, agent, todo] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

# Objectifs généraux

On va travailler sur le **thème nommé Gunmalmg**.

Ce thème est un thème minimal qui permet un affichage condensé des informations principales du thermostat.
Les informations principales affichées sont :

-   la température actuelle (current_temperature),
-   la température cible (target_temperature),
-   le mode de fonctionnement (hvac_mode),
-   l'état d'action (hvac_action),
-   l'état du verrou (lock_state),
-   le preset sélectionné (preset_mode),
-   le timer de preset (timed_preset).

Les actions possibles depuis cette carte sont :

1. activer / éteindre le thermostat (hvac_mode)
2. changer le preset (preset_mode),
3. changer l'état du lock,
4. activer / desactiver le timer de preset (timed_preset).
5. afficher la page détaillée dans une popup (en cliquant sur une des températures).

Le thème doit être conçu pour être facilement lisible et compréhensible, même à distance.

Les autres thèmes existants sont plus détaillés et affichent plus d'informations, **ils doivent tels qu'ils sont actuellement** sans changement (pour compatibilité ascendante).
La popup du thème Gunmalmg doit être conçue pour afficher les mêmes informations que le thème Classic (le thème le plus complet). Le plus possible le code sera mis en commun de sorte qu'une modification dans le thème Classic se répercute automatiquement dans la popup du thème Gunmalmg, sans changement du thème Gunmalmg. Ce point est important pour la maintenabilité du code à long terme.

## Règle de gestion des presets

La liste des présets est affichée sous la forme de boutons sur une seule ligne. Comme le nombre de présets peut être important, il faut que la ligne soit scrollable horizontalement. Le preset sélectionné est mis en avant par un style différent (ex: fond coloré). Les autres presets sont affichés avec un style plus neutre (ex: fond grisé).
La fenêtre scrollable qui affiche les presets est scrollée automatiquement sur le preset actif lors de l'affichge de la page.

## Règle d'affichage de la popup

La popup doit afficher les mêmes informations que le thème Classic. Elle doit réutiliser le code du thème Classic sans avoir à le dupliquer que ce soit pour le code ou pour les styles. Le thème Gunmalmg doit juste faire un include du code du thème Classic pour la popup, et ne pas dupliquer le code du thème Classic dans la popup.

La popup doit être centrée sur l'écran.

Elle doit être de la même taille que la carte du thème Classic, et doit être conçue pour être facilement lisible et compréhensible, même à distance et même sur un écran de mobile. Elle pourra prendre toute la page sur mobile, et être plus petite sur desktop, mais elle doit toujours être facilement lisible.

La popup est équipée d'un bouton de fermeture en haut à gauche comme les popup classiques de Home Assistant. En cliquant sur ce bouton, la popup doit se fermer et revenir à l'affichage du thème Gunmalmg.

## Les options de configuration

La carte a beaucoup d'options et elles méritent un sérieux nettoyage.

### Options obsolètes

Certaines options sont obsolètes puisque forcées par le thème courant :

1. disable_circle,
2. disable_background_color,

### Options inutiles

Certaines options sont inutiles et doivent être supprimées :

1. eco_temperature

### Options non applicables au thème Gunmalmg

Certaines option ne s'appliquent pas au thème Gunmalmg. Il s'agit de :

3. disable_window,
4. disable_autoStartStop,
5. disable_overpowering,
6. disable_heat, disable_cool, disable_auto, disable_off, disable_dry, disable_fan_only, disable_menu, disable_power_infos, disable_auto_fan_infos, disable_target_icon, disable_buttons, disable_presets
7. disable_buttons

### Options communes à tous les thèmes

Donc seules les options suivantes sont applicables aussi au thème Gunmalmg :

1. disable_name,
2. disable_safety_warning,
3. set_current_as_main
4. allow_lock_toggle,
5. lock_relock_delay,
6. disable_timed_preset,
7. use_manual_duration_input

Les options de configuration doivent être organisées pour que l'utilisateur comprenne ce qui est applicable au thème :

1. Une section "Pour tous les thèmes" doit regrouper les options communes. Cette liste correspond à la liste ci-dessus "applicables aussi au thème Gunmalmg".
2. Une section "Pour thème Classique, VTherm et Non coloré" doit regrouper les options non applicables au thème Gunmalmg. Cette liste correspond à la liste ci-dessus "ne s'appliquent pas au thème Gunmalmg".
