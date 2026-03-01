import { css } from 'lit';
import { html } from 'lit';
import { mdiClose, mdiLock, mdiLockOpen } from '@mdi/js';
import type { TemplateResult } from 'lit';
import { localize } from '../localize/localize';

// Render the classic theme popup for gunmalmg
export function renderClassicPopup(ctx: any): TemplateResult {
  return html`
    <div class="classic-popup-backdrop" @click=${() => ctx._closeClassicPopup()}></div>
    <div class="classic-popup-container">
      <ha-icon-button
        class="classic-popup-close"
        .path=${mdiClose}
        @click=${() => ctx._closeClassicPopup()}
        tabindex="0"
      ></ha-icon-button>
      <div class="classic-popup-content">
        ${ctx._renderClassicContent()}
      </div>
    </div>
  `;
}

// Render function for the gunmalmg theme. Accepts the component instance
// so it can reuse helper render methods (icons, temperatures, presets).
export function renderGunmalmg(ctx: any): TemplateResult {
  // Layout: a grid with 3 columns: 1/6 | 2/6 | 3/6 (i.e. 1/6, 2/6, 1/2)
  return html`
    <ha-card class="gunmalmg-card ${ctx.hvacMode} ${ctx._isLocked ? 'locked' : ''}">
      ${ctx._showClassicPopup ? renderClassicPopup(ctx) : ''}

      <div id="right-lock" style="margin-top: 4px; display: flex; justify-content: center;">
        ${ctx._config?.allow_lock_toggle ? html`
            <ha-icon-button
                class="lock-icon ${ctx._isLocked ? 'locked' : 'unlocked'}"
                .path=${ctx._isLocked ? mdiLock : mdiLockOpen}
                @click=${ctx._handleLockToggle}
                tabindex="0"
            ></ha-icon-button>
            `
        : ''}
      </div>

      <div class="gunmalmg-grid">
        <div class="gunmalmg-name name">${ctx.name}</div>
        <div class="gunmalmg-left">
          <div class="hvac-mode-tile">
            ${ctx._renderIcon(ctx.hvacMode, ctx.hvacMode, true)}
          </div>
        </div>
        <div class="gunmalmg-center" @click=${() => ctx._openClassicPopup()}>
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
        :host([theme="gunmalmg"]) .name { font-weight: 600; color: #ffffff; font-size: 17px; text-align: left;}
        :host([theme="gunmalmg"]) .content { display: flex; position: relative; width: 100%; height: auto; max-width: none; transform: none; left: 0; top: 0; padding: 0; align-items: center; justify-content: center; }
        :host([theme="gunmalmg"]) .current-info, :host([theme="gunmalmg"]) #left-infos, :host([theme="gunmalmg"]) #vt-control-buttons { display: none !important; }
        :host([theme="gunmalmg"]) .disabled-circle-container { height: 64px; background: transparent; }

        /* Presets as pill buttons */
        :host([theme="gunmalmg"]) #presets {
          display: grid;
          grid-template-columns: repeat(3, minmax(56px, 1fr));
          margin-top: 8px;
          justify-items: center;
          align-items: center;
        }
        :host([theme="gunmalmg"]) .preset-label {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0; padding: 0;
        }

        :host([theme="gunmalmg"]) .preset-label ha-icon-button {
          --mdc-icon-size: 22px; /* ~20% larger */
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          color: #e6e6e6;
          border: 1px solid rgba(255,255,255,0.03);
        }
        :host([theme="gunmalmg"]) .preset-label .selected-icon {
          box-shadow: 0 2px 0 rgba(0,0,0,0.3) inset;
        }

        /* Presets base: icon grey, dark grey background */
        :host([theme="gunmalmg"]) .preset-label ha-icon-button {
          background: #2b2b2b; /* dark grey */
          border: 1px solid rgba(255,255,255,0.03);
        }

        /* Only selected preset icon should be colored */
        :host([theme="gunmalmg"]) .preset-label ha-icon-button.selected-icon { background: #111111; color: #e6e6e6 !important; transition: background-color 180ms ease, color 180ms ease;}

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
          transition: background-color 220ms ease, color 220ms ease, transform 160ms ease;
        }

        /* Colored states for hvac mode icon */
        :host([theme="gunmalmg"]) ha-card.heat .hvac-mode-tile ha-icon-button,
        :host([theme="gunmalmg"]) ha-card.heat_cool .hvac-mode-tile ha-icon-button {
          background: #3e2a00; /* dark orange */
          color: #fb9600; /* orange icon */
        }
        :host([theme="gunmalmg"]) ha-card.cool .hvac-mode-tile ha-icon-button {
          background: #003147; /* dark blue */
          color: #038dfe; /* blue icon */
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

        /* Badge: top-right white icon on colored background */
        :host([theme="gunmalmg"]) .hvac-badge-container { position: relative; display: inline-block; }
        :host([theme="gunmalmg"]) .hvac-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          width: 20px;
          height: 20px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff; /* icon white */
        }
        :host([theme="gunmalmg"]) .hvac-badge.heating { background: #f44336; }
        :host([theme="gunmalmg"]) .hvac-badge.cooling { background: #03A9F4; }
        :host([theme="gunmalmg"]) .hvac-badge.warning { background: #ff9800; }
        :host([theme="gunmalmg"]) .hvac-badge svg { fill: #ffffff; width: 14px; height: 14px; }

        /* Preset pills tweaks */
        :host([theme="gunmalmg"]) .preset-label {
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        /* Temperatures look: main number larger, unit and secondary smaller */
        :host([theme="gunmalmg"]) .main-value { font-size: 16px; font-weight: 600; }
        :host([theme="gunmalmg"]) #current { font-size: 12px; }
        :host([theme="gunmalmg"]) .content .name + * { color: var(--secondary-text-color); font-size: 10px; }

        /* Inline temperature display (left-aligned) */
        :host([theme="gunmalmg"]) .gunmalmg-temps-inline { display: flex; gap: 8px; align-items: baseline; justify-content: flex-start; }
        :host([theme="gunmalmg"]) .gunmalmg-temp-main { font-size: 17px; font-weight: 700; color: var(--secondary-text-color); }
        :host([theme="gunmalmg"]) .gunmalmg-temp-secondary { font-size: 13px; color: var(--secondary-text-color); margin-left: 6px; }
        :host([theme="gunmalmg"]) .gunmalmg-uom { font-size: 16px; color: var(--secondary-text-color); margin-left: 2px; }

        /* Hide timed preset controls for Gunmalmg */
        :host([theme="gunmalmg"]) .timed-preset-container { display: none !important; }

        /* Grid layout: name spans columns 1-2 on first row; left/center/right on second row */
        :host([theme="gunmalmg"]) .gunmalmg-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.6fr 2.4fr;
          grid-template-areas:
            "name name right"
            "left center right";
          gap: 6px;
          align-items: center;
        }

        :host([theme="gunmalmg"]) .gunmalmg-name { 
          grid-area: name; 
          text-align: left; 
          padding-left: 8px; 
          display: -webkit-box; 
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical; 
          overflow: hidden; 
          text-overflow: ellipsis; 
          white-space: normal; 
          line-height: 1.2;
        }
        :host([theme="gunmalmg"]) .gunmalmg-left { grid-area: left; }
        :host([theme="gunmalmg"]) .gunmalmg-center { grid-area: center; }
        :host([theme="gunmalmg"]) .gunmalmg-right { grid-area: right; }

        @media (max-width: 480px) {
          :host([theme="gunmalmg"]) .gunmalmg-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "name right"
              "left center";
          }
          :host([theme="gunmalmg"]) .gunmalmg-right {
            margin-top: 8px;
            justify-content: center;
            padding-right: 0;
          }
        }

        :host([theme="gunmalmg"]) .gunmalmg-left { background: transparent; padding: 0; display: flex; align-items: center; justify-content: center; }
        :host([theme="gunmalmg"]) .gunmalmg-center { text-align: left; max-width: 100%; display:flex; flex-direction:column; justify-content:left; }
        :host([theme="gunmalmg"]) .gunmalmg-right { padding-right: 30px; display: flex; justify-content: flex-end; }

        :host([theme="gunmalmg"]) .hvac-mode-tile { display: flex; align-items: center; justify-content: center; padding: 0; background: transparent; }

        :host([theme="gunmalmg"]) .hvac-mode-tile ha-icon-button { overflow: hidden; box-shadow: none; border-radius: 30px; }

        /* Dim hvac mode and preset icons when locked */
        :host([theme="gunmalmg"]) ha-card.locked .hvac-mode-tile ha-icon-button,
        :host([theme="gunmalmg"]) ha-card.locked #presets ha-icon-button,
        :host([theme="gunmalmg"]) ha-card.locked #presets .preset-label {
          opacity: 0.5;
          color: var(--disabled-text-color);
          pointer-events: none;
        }

        :host([theme="gunmalmg"]) .gunmalmg-presets { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; justify-items: center; }

        /* Make the more-info icon more visible on dark background */
        :host([theme="gunmalmg"]) .more-info { color: #e6e6e6; z-index: 6; }
        :host([theme="gunmalmg"]) #right-lock {
          position: absolute;
          top: 60px; /* place under the menu button */
          right: 0px;
          z-index: 8; /* above some elements but below the menu overlay */
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
        }
        :host([theme="gunmalmg"]) .theme-menu { background: #1b1b1b; color: #e6e6e6; border-color: rgba(255,255,255,0.06); }
        :host([theme="gunmalmg"]) .theme-menu-item { color: #e6e6e6; }
        :host([theme="gunmalmg"]) .theme-menu-header { display:flex; align-items:center; justify-content:space-between; padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        :host([theme="gunmalmg"]) .theme-menu-title { font-weight:600; cursor:pointer; }

        /* Gunmalmg center clickable area */
        :host([theme="gunmalmg"]) .gunmalmg-center {
          cursor: pointer;
        }

        /* Classic popup styles */
        :host([theme="gunmalmg"]) .classic-popup-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1000;
        }

        :host([theme="gunmalmg"]) .classic-popup-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1001;
          background: var(--card-background-color, #fff);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          max-width: 95vw;
          max-height: 45vh;
          overflow: auto;
          min-width: 300px;
        }

        /* Mobile: full screen */
        @media (max-width: 600px) {
          :host([theme="gunmalmg"]) .classic-popup-container {
            width: 100vw;
            height: 100vh;
            max-width: 100vw;
            max-height: 100vh;
            border-radius: 0;
            top: 0;
            left: 0;
            transform: none;
          }
        }

        /* Desktop: similar to more-info dialog */
        @media (min-width: 601px) {
          :host([theme="gunmalmg"]) .classic-popup-container {
            width: 450px;
            max-height: 45vh;
          }
        }

        :host([theme="gunmalmg"]) .classic-popup-close {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 1002;
          --mdc-icon-size: 24px;
          color: var(--primary-text-color);
        }

        :host([theme="gunmalmg"]) .classic-popup-content {
          padding: 16px;
        }

        /* Classic content wrapper styles */
        :host([theme="gunmalmg"]) .classic-content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1em;
          gap: 8px;
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper .name {
          font-size: 18px;
          font-weight: 500;
          color: var(--primary-text-color);
          margin-bottom: 8px;
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper vt-ha-control-circular-slider {
          display: block !important;
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper .content {
          position: relative;
          width: calc(70% - 40px);
          height: auto;
          box-sizing: border-box;
          border-radius: 100%;
          text-align: center;
          overflow-wrap: break-word;
          pointer-events: none;
          display: flex;
          align-items: center;
          place-content: center;
          flex-flow: wrap;
          max-width: 155px;
          margin: 0 auto;
          top: -200px;
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper #main {
          transform: scale(2.3);
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper svg {
          height: auto;
          margin: auto;
          display: block;
          width: 100%;
          -webkit-backface-visibility: hidden;
          max-width: 233px;
        }

        /* Temperature styles for classic popup - use same as classic theme */
        :host([theme="gunmalmg"]) .classic-content-wrapper .temp-main {
          font-size: 15px;
        }
        :host([theme="gunmalmg"]) .classic-content-wrapper .temp-main .uom {
          font-size: 5px;
        }
        :host([theme="gunmalmg"]) .classic-content-wrapper .temp-secondary {
          font-size: 6px;
        }
        :host([theme="gunmalmg"]) .classic-content-wrapper .temp-secondary .uom {
          font-size: 3px;
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper line {
          stroke: #e7e7e8;
          stroke-width: 0.5;
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper #modes {
          position: relative;
          display: flex;
          width: auto;
          justify-content: center;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
          top: -165px;
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper #vt-control-buttons {
          position: relative;
          display: flex;
          width: auto;
          justify-content: center;
          gap: 16px;
          margin-top: 0.5em;
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper #presets {
          position: relative;
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
          top: -165px;
        }

        :host([theme="gunmalmg"]) .classic-content-wrapper #left-infos {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: flex-start;
          margin-top: 0.5em;
        }

        /* Reset styles for classic content inside popup
        :host([theme="gunmalmg"]) .classic-popup-content .content {
          position: relative !important;
          width: 100% !important;
          height: auto !important;
          max-width: none !important;
          transform: none !important;
          left: 0 !important;
          top: 0 !important;
        }
        */

        :host([theme="gunmalmg"]) .classic-popup-content .disabled-circle-container {
          display: none !important;
        }

        :host([theme="gunmalmg"]) .classic-popup-content #modes,
        :host([theme="gunmalmg"]) .classic-popup-content #presets,
        :host([theme="gunmalmg"]) .classic-popup-content #vt-control-buttons,
        :host([theme="gunmalmg"]) .classic-popup-content #left-infos,
        :host([theme="gunmalmg"]) .classic-popup-content .current-info {
          display: flex !important;
        }
`;
