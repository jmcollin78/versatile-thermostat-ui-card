import { css } from 'lit';
import { html } from 'lit';
import { mdiDotsVertical, mdiClose } from '@mdi/js';
import type { TemplateResult } from 'lit';

// Render function for the gunmalmg theme. Accepts the component instance
// so it can reuse helper render methods (icons, temperatures, presets).
export function renderGunmalmg(ctx: any): TemplateResult {
  // Layout: a grid with 3 columns: 1/6 | 2/6 | 3/6 (i.e. 1/6, 2/6, 1/2)
  return html`
    <ha-card class="gunmalmg-card ${ctx.hvacMode}">
      <ha-icon-button
        class="more-info"
        .label=${ctx.hass!.localize(
          "ui.panel.lovelace.cards.show_more_info"
        )}
        .path=${mdiDotsVertical}
        @click=${() => ctx._toggleThemeMenu()}
        tabindex="0"
      ></ha-icon-button>
      ${ctx._showThemeMenu ? html`
        <div class="menu-backdrop" @click=${() => ctx._closeThemeMenu()}></div>
        <div class="theme-menu">
          <div class="theme-menu-close" @click=${() => ctx._closeThemeMenu()}>
            <ha-icon-button .path=${mdiClose} .label="close"></ha-icon-button>
          </div>
          <div class="theme-menu-item" @click=${() => { ctx._handleMoreInfo(); ctx._closeThemeMenu(); }}>${ctx.hass ? ctx.hass.localize('editor.card.climate.menu_system') : ''}</div>
          <div class="theme-menu-item" style="border-top:1px solid var(--divider-color, #e0e0e0);"></div>
          ${ctx._config?.theme === ctx.THEMES?.GUNMALMG ? html`
            <div class="theme-menu-item" @click=${() => { ctx._menuLockToggle(); ctx._closeThemeMenu(); }}>
              ${ctx._isLocked ? (ctx.hass ? ctx.hass.localize('extra_states.unlock') : '') : (ctx.hass ? ctx.hass.localize('extra_states.lock') : '')}
            </div>
            ${ctx.timedPresetActive ? html`
              <div class="theme-menu-item" @click=${() => { ctx._menuCancelTimedPreset(); ctx._closeThemeMenu(); }}>
                ${ctx.hass ? ctx.hass.localize('extra_states.cancel_timed_preset') : ''}
              </div>
            ` : ``}
          ` : ``}
          <div class="theme-menu-item" @click=${() => ctx._applyTheme('classic')}>${ctx.hass ? ctx.hass.localize('editor.card.climate.theme_classic') : 'Classic'}</div>
        </div>
      ` : ''}

      <div class="gunmalmg-grid">
        <div class="gunmalmg-left">
          <div class="hvac-mode-tile">
            ${ctx._renderIcon(ctx.hvacMode, ctx.hvacMode)}
          </div>
        </div>
        <div class="gunmalmg-center">
          <div class="name">${ctx.name}</div>
          <div class="temps">
            ${(() => {
              const locale = ctx.hass?.locale || undefined;
              const fmt = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
              const top = ctx._display_top;
              const bottom = ctx._display_bottom;
              const unit = ctx.hass?.config?.unit_system?.temperature || '';
              const topLabel = (top === null || top === undefined) ? (ctx.hass ? ctx.hass.localize('extra_states.temp_unavailable') : '') : fmt.format(top);
              const bottomLabel = (bottom === null || bottom === undefined) ? null : fmt.format(bottom);
              return html`
                <div class="gunmalmg-temps-inline">
                  <span class="gunmalmg-temp-main">${topLabel}<span class="gunmalmg-uom"> ${unit}</span></span>
                  ${bottomLabel ? html`<span class="gunmalmg-temp-secondary">(${bottomLabel}<span class="gunmalmg-uom"> ${unit}</span>)</span>` : ``}
                </div>
              `;
            })()}
          </div>
        </div>
        <div class="gunmalmg-right">
          <div id="presets" class="gunmalmg-presets">
            ${!ctx._config?.disable_presets ? ctx.presets.map((p: any) => html`${ctx._renderPreset(p, ctx.preset)}`) : ''}
          </div>
        </div>
      </div>
    </ha-card>
  `;
}

export const gunmalmgStyles = css`
        :host([theme="gunmalmg"]) vt-ha-control-circular-slider { display: none; }
          :host([theme="gunmalmg"]) vt-ha-control-circular-slider { display: none !important; }
        :host([theme="gunmalmg"]) .disabled-circle-container { display: block; background: none; }

        /* Gunmalmg theme - minimalist compact list style */
        :host([theme="gunmalmg"]) ha-card {
          background: #121212;
          color: #e6e6e6;
          border-radius: 10px;
          padding: 0px 0px;
          box-shadow: none;
        }
        :host([theme="gunmalmg"]) .name { font-weight: 600; color: #ffffff; font-size: 15px;}
        :host([theme="gunmalmg"]) .content { display: flex; position: relative; width: 100%; height: auto; max-width: none; transform: none; left: 0; top: 0; padding: 0; align-items: center; justify-content: center; }
        :host([theme="gunmalmg"]) .current-info, :host([theme="gunmalmg"]) #left-infos, :host([theme="gunmalmg"]) #vt-control-buttons { display: none !important; }
        :host([theme="gunmalmg"]) .disabled-circle-container { height: 64px; background: transparent; }

        /* Presets as pill buttons */
        :host([theme="gunmalmg"]) #presets {
          display: grid;
          grid-template-columns: repeat(3, minmax(56px, 1fr));
          /* gap: 10px; */
          margin-top: 8px;
          justify-items: center;
          align-items: center;
        }
        :host([theme="gunmalmg"]) .preset-label {
            /* height: 44px; */
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0; padding: 0;
        }

        :host([theme="gunmalmg"]) .preset-label ha-icon-button {
          --mdc-icon-size: 22px; /* ~20% larger */
          /* width: 50px;
          height: 50px; */
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          color: #e6e6e6;
          /* color: var(--secondary-text-color); */
          border: 1px solid rgba(255,255,255,0.03);
        }
        :host([theme="gunmalmg"]) .preset-label .selected-icon {
          box-shadow: 0 2px 0 rgba(0,0,0,0.3) inset;
        }

        /* Presets base: icon grey, dark grey background */
        :host([theme="gunmalmg"]) .preset-label ha-icon-button {
          background: #2b2b2b; /* dark grey */
          /* color: #9e9e9e; */ /* icon grey */
          border: 1px solid rgba(255,255,255,0.03);
        }

        /* Only selected preset icon should be colored */
        :host([theme="gunmalmg"]) .preset-label ha-icon-button.selected-icon { background: #111111; color: #e6e6e6 !important;}

        /* Selected colors mapping */
        :host([theme="gunmalmg"]) .preset-frost ha-icon-button.selected-icon { background: #3a9ff2; } /* blue */
        :host([theme="gunmalmg"]) .preset-eco ha-icon-button.selected-icon { background: #5dd461; } /* green */
        :host([theme="gunmalmg"]) .preset-comfort ha-icon-button.selected-icon { background: #f9a21f; } /* orange */
        :host([theme="gunmalmg"]) .preset-boost ha-icon-button.selected-icon { background: #f75252; } /* red-ish */
        :host([theme="gunmalmg"]) .preset-activity ha-icon-button.selected-icon { background: #c455f7; } /* blue */
        /* Left-side compact hvac icon + action for gunmalmg */
        :host([theme="gunmalmg"]) #left-infos-gunmalmg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 4;
        }

        :host([theme="gunmalmg"]) .hvac-mode ha-icon-button {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          --mdc-icon-size: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.02);
          color: var(--secondary-text-color);
          border: none;
        }

        /* Colored states for hvac mode icon */
        :host([theme="gunmalmg"]) ha-card.heat .hvac-mode-tile ha-icon-button,
        :host([theme="gunmalmg"]) ha-card.heat_cool .hvac-mode-tile ha-icon-button {
          background: #3e2a00; /* dark orange */
          color: #ffb74d; /* orange icon */
        }
        :host([theme="gunmalmg"]) ha-card.cool .hvac-mode-tile ha-icon-button {
          background: #003147; /* dark blue */
          color: #90caf9; /* blue icon */
        }
        :host([theme="gunmalmg"]) ha-card.off .hvac-mode-tile ha-icon-button {
          background: #2b2b2b; /* dark grey */
          color: #bdbdbd; /* grey icon */
        }

        :host([theme="gunmalmg"]) .hvac-action svg {
          width: 20px;
          height: 20px;
          fill: #ffffff;
          opacity: 0.95;
        }

        /* Preset pills tweaks */
        :host([theme="gunmalmg"]) .preset-label {
          /* height: 36px; */
          /* padding: 0 12px; */
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        /* :host([theme="gunmalmg"]) .preset-label ha-icon-button.selected-icon {
          background: #ff9800;
          color: #ffffff !important;
          border-color: rgba(0,0,0,0.08);
        } */

        /* Temperatures look: main number larger, unit and secondary smaller */
        :host([theme="gunmalmg"]) .main-value { font-size: 16px; font-weight: 600; }
        :host([theme="gunmalmg"]) #current { font-size: 12px; }
        :host([theme="gunmalmg"]) .content .name + * { color: var(--secondary-text-color); font-size: 10px; }

        /* Inline temperature display */
        :host([theme="gunmalmg"]) .gunmalmg-temps-inline { display: flex; gap: 8px; align-items: baseline; justify-content: center; }
        :host([theme="gunmalmg"]) .gunmalmg-temp-main { font-size: 14px; font-weight: 600; color: #ffffff; }
        :host([theme="gunmalmg"]) .gunmalmg-temp-secondary { font-size: 12px; color: var(--secondary-text-color); }
        :host([theme="gunmalmg"]) .gunmalmg-uom { font-size: 11px; color: var(--secondary-text-color); }

        /* Hide lock icon and timed preset controls for Gunmalmg */
        :host([theme="gunmalmg"]) #right-lock { display: none !important; }
        :host([theme="gunmalmg"]) .timed-preset-container { display: none !important; }

        /* Grid layout: left 1/6, center 2/6, right 3/6 (i.e. 1/6, 2/6, 1/2) */
        :host([theme="gunmalmg"]) .gunmalmg-grid {
          display: grid;
          /* Use stricter 1/6 | 2/6 | 3/6 ratio but reduce center slightly to avoid overflow */
          grid-template-columns: 1fr 1.6fr 2.4fr; /* relative 1 : 1.6 : 2.4 */
          gap: 12px;
          align-items: center;
        }

        :host([theme="gunmalmg"]) .gunmalmg-left { background: transparent; padding: 0; display: flex; align-items: center; justify-content: center; }
        :host([theme="gunmalmg"]) .gunmalmg-center { text-align: center; max-width: 100%; }
        :host([theme="gunmalmg"]) .gunmalmg-right { padding-right: 30px; display: flex; justify-content: flex-end; }

        /* Temporary debug borders to visualize blocks (remove later) */
        :host([theme="gunmalmg"]) .gunmalmg-left { border: 1px dashed rgba(255,255,255,0.06); }
        :host([theme="gunmalmg"]) .gunmalmg-center { border: 1px dashed rgba(255,255,255,0.04); }
        :host([theme="gunmalmg"]) .gunmalmg-right { border: 1px dashed rgba(255,255,255,0.03); }


        :host([theme="gunmalmg"]) .hvac-mode-tile { display: flex; align-items: center; justify-content: center; padding: 0; background: transparent; }

        :host([theme="gunmalmg"]) .hvac-mode-tile ha-icon-button { overflow: hidden; box-shadow: none; border-radius: 30px; }

        :host([theme="gunmalmg"]) .gunmalmg-presets { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; justify-items: center; }

        /* Make the more-info icon more visible on dark background */
        :host([theme="gunmalmg"]) .more-info { color: #e6e6e6; z-index: 6; }
        :host([theme="gunmalmg"]) .theme-menu { background: #1b1b1b; color: #e6e6e6; border-color: rgba(255,255,255,0.06); }
        :host([theme="gunmalmg"]) .theme-menu-item { color: #e6e6e6; }
`;
