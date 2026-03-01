import { css } from 'lit';
import { html } from 'lit';
import { mdiClose, mdiDotsVertical, mdiLock, mdiLockOpen } from '@mdi/js';
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
      ${!ctx._config?.disable_menu ? html`
        <ha-icon-button
          class="classic-popup-more-info"
          .label=${ctx.hass!.localize("ui.panel.lovelace.cards.show_more_info")}
          .path=${mdiDotsVertical}
          @click=${() => { ctx._closeClassicPopup(); ctx._handleMoreInfo(); }}
          tabindex="0"
        ></ha-icon-button>
      ` : ''}
      <div class="classic-popup-content">
        ${ctx._renderClassicContent(true)}
      </div>
    </div>
  `;
}

// Render the timed preset controls for gunmalmg theme
function renderGunmalmgTimedPreset(ctx: any): TemplateResult {
  if (ctx._config?.disable_timed_preset) return html``;
  return html`
    <div class="gunmalmg-timed-preset">
      ${ctx.timedPresetActive ? html`
        <span class="gunmalmg-timed-remaining" 
          title="${localize({ hass: ctx.hass, string: 'extra_states.cancel_timed_preset' })}"
          @click=${ctx._handleCancelTimedPreset}>
          ${ctx._formatRemainingTime(ctx.timedPresetRemainingTime)}
        </span>
        ${(ctx.timedPresetRemainingTime ?? 0) < 60 ? html`
          <span class="gunmalmg-timed-label">${localize({ hass: ctx.hass, string: 'extra_states.minutes' })}</span>
        ` : ''}
      ` : ctx._config?.use_manual_duration_input ? html`
        <input
          type="number"
          class="gunmalmg-timed-input ${ctx.timedPresetDuration ? 'active' : ''}"
          .value=${ctx.timedPresetDuration ?? ''}
          @input=${ctx._handleTimedPresetDurationChange}
          placeholder="0"
          min="0"
          max="1440"
          title="${localize({ hass: ctx.hass, string: 'extra_states.timed_preset_title' })}"
        />
        <span class="gunmalmg-timed-label">${localize({ hass: ctx.hass, string: 'extra_states.minutes' })}</span>
      ` : html`
        <select
          class="gunmalmg-timed-select ${ctx.timedPresetDuration ? 'active' : ''}"
          @change=${ctx._handleTimedPresetSelectChange}
          title="${localize({ hass: ctx.hass, string: 'extra_states.timed_preset_title' })}"
        >
          <option value="" ?selected=${!ctx.timedPresetDuration}>--</option>
          <option value="15" ?selected=${ctx.timedPresetDuration === 15}>15 ${localize({ hass: ctx.hass, string: 'extra_states.minutes' })}</option>
          <option value="30" ?selected=${ctx.timedPresetDuration === 30}>30 ${localize({ hass: ctx.hass, string: 'extra_states.minutes' })}</option>
          <option value="60" ?selected=${ctx.timedPresetDuration === 60}>1 h</option>
          <option value="120" ?selected=${ctx.timedPresetDuration === 120}>2 h</option>
          <option value="240" ?selected=${ctx.timedPresetDuration === 240}>4 h</option>
          <option value="480" ?selected=${ctx.timedPresetDuration === 480}>8 h</option>
          <option value="1440" ?selected=${ctx.timedPresetDuration === 1440}>24 h</option>
        </select>
      `}
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
          <div class="gunmalmg-presets-scroll">
            <div id="presets" class="gunmalmg-presets">
              ${!ctx._config?.disable_presets ? ctx.presets.map((p: any) => html`${ctx._renderPreset(p, ctx.preset)}`) : ''}
            </div>
          </div>
          <div class="gunmalmg-actions">
            ${ctx._config?.allow_lock_toggle ? html`
              <ha-icon-button
                class="gunmalmg-lock-btn ${ctx._isLocked ? 'locked' : 'unlocked'}"
                .path=${ctx._isLocked ? mdiLock : mdiLockOpen}
                @click=${ctx._handleLockToggle}
                tabindex="0"
              ></ha-icon-button>
            ` : ''}
            ${renderGunmalmgTimedPreset(ctx)}
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
        :host([theme="gunmalmg"]) .disabled-circle-container { height: 84px; background: transparent; }

        /* Presets as pill buttons - single horizontal row */
        :host([theme="gunmalmg"]) #presets {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          margin-top: 0;
          align-items: center;
          gap: 6px;
          margin-bottom: 0em;
          width: max-content;
        }
        :host([theme="gunmalmg"]) .preset-label {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0; padding: 0;
            flex-shrink: 0;
            height: 70px;
        }

        :host([theme="gunmalmg"]) .preset-label ha-icon-button {
          --mdc-icon-size: 50px;
          width: 70px;
          height: 70px;
          border-radius: 16px;
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

        /* Inline temperature display (left-aligned, no wrapping) */
        :host([theme="gunmalmg"]) .gunmalmg-temps-inline { display: flex; gap: 4px; align-items: baseline; justify-content: flex-start; flex-wrap: nowrap; white-space: nowrap; }
        :host([theme="gunmalmg"]) .gunmalmg-temp-main { font-size: 17px; font-weight: 700; color: var(--secondary-text-color); white-space: nowrap; }
        :host([theme="gunmalmg"]) .gunmalmg-temp-secondary { font-size: 13px; color: var(--secondary-text-color); margin-left: 4px; white-space: nowrap; }
        :host([theme="gunmalmg"]) .gunmalmg-uom { font-size: 11px; color: var(--secondary-text-color); margin-left: 1px; }

        /* Hide the classic timed-preset-container (we use our own gunmalmg-timed-preset) */
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
          margin: 0.5em;
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
        :host([theme="gunmalmg"]) .gunmalmg-right {
          padding: 0;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          min-width: 0;
        }

        /* Scrollable presets zone */
        :host([theme="gunmalmg"]) .gunmalmg-presets-scroll {
          flex: 1 1 0;
          overflow-x: auto;
          overflow-y: hidden;
          min-width: 0;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.15) transparent;
        }
        :host([theme="gunmalmg"]) .gunmalmg-presets-scroll::-webkit-scrollbar { height: 3px; }
        :host([theme="gunmalmg"]) .gunmalmg-presets-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
        :host([theme="gunmalmg"]) .gunmalmg-presets-scroll::-webkit-scrollbar-track { background: transparent; }

        /* Fixed actions zone (lock + timed preset) */
        :host([theme="gunmalmg"]) .gunmalmg-actions {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 4px 4px;
          gap: 4px;
          min-width: 48px;
        }

        :host([theme="gunmalmg"]) .hvac-mode-tile { display: flex; align-items: center; justify-content: center; padding: 0; background: transparent; }

        :host([theme="gunmalmg"]) .hvac-mode-tile ha-icon-button { overflow: hidden; box-shadow: none; border-radius: 30px; }

        /* Dim hvac mode and preset icons when locked */
        :host([theme="gunmalmg"]) ha-card.locked .hvac-mode-tile ha-icon-button,
        :host([theme="gunmalmg"]) ha-card.locked #presets ha-icon-button,
        :host([theme="gunmalmg"]) ha-card.locked #presets .preset-label,
        :host([theme="gunmalmg"]) ha-card.locked .gunmalmg-timed-preset {
          color: var(--disabled-text-color);
          pointer-events: none;
        }

        :host([theme="gunmalmg"]) .gunmalmg-presets {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 6px;
          align-items: center;
          justify-content: flex-start;
          padding: 4px 4px;
          min-height: 80px;
          width: max-content;
        }

        /* Make the more-info icon more visible on dark background */
        :host([theme="gunmalmg"]) .more-info { color: #e6e6e6; z-index: 6; }

        /* Lock button styles */
        :host([theme="gunmalmg"]) .gunmalmg-lock-btn {
          --mdc-icon-size: 24px;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 200ms ease, color 200ms ease;
        }
        :host([theme="gunmalmg"]) .gunmalmg-lock-btn.locked {
          background: rgba(244, 67, 54, 0.20);
          color: #f44336;
        }
        :host([theme="gunmalmg"]) .gunmalmg-lock-btn.unlocked {
          background: rgba(76, 175, 80, 0.20);
          color: #4CAF50;
        }

        /* Timed preset styles for gunmalmg */
        :host([theme="gunmalmg"]) .gunmalmg-timed-preset {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-remaining {
          font-size: 13px;
          font-weight: 600;
          color: #f9a21f;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          border-radius: 8px;
          padding: 2px 6px;
          transition: background-color 200ms ease;
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-remaining:hover {
          background: rgba(249, 162, 31, 0.15);
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-label {
          font-size: 9px;
          color: var(--secondary-text-color);
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-input {
          width: 35px;
          height: 25px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          background: #2b2b2b;
          color: #e6e6e6;
          font-size: 12px;
          text-align: center;
          outline: none;
          -moz-appearance: textfield;
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-input:focus {
          border-color: #f9a21f;
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-input.active {
          border-color: #f9a21f;
          color: #f9a21f;
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-input::-webkit-outer-spin-button,
        :host([theme="gunmalmg"]) .gunmalmg-timed-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-select {
          width: 40px;
          height: 30px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          background: #2b2b2b;
          color: #e6e6e6;
          font-size: 10px;
          text-align: center;
          outline: none;
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          padding: 0 4px;
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-select:focus {
          border-color: #f9a21f;
        }
        :host([theme="gunmalmg"]) .gunmalmg-timed-select.active {
          border-color: #f9a21f;
          color: #f9a21f;
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
          max-height: 90vh;
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
            max-height: 90vh;
          }
        }

        :host([theme="gunmalmg"]) .classic-popup-close {
          position: absolute;
          top: 8px;
          left: 8px;
          z-index: 1002;
          --mdc-icon-size: 24px;
          color: var(--primary-text-color);
        }

        :host([theme="gunmalmg"]) .classic-popup-more-info {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 1002;
          --mdc-icon-size: 24px;
          color: var(--secondary-text-color);
          cursor: pointer;
          border-radius: 100%;
        }

        /* ===== Popup content: reset ALL gunmalmg overrides to classic appearance ===== */
        :host([theme="gunmalmg"]) .classic-popup-content {
          position: relative;
          padding: 1em;
          padding-top: 1.5em;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* Name */
        :host([theme="gunmalmg"]) .classic-popup-content .name {
          display: block;
          width: 100%;
          text-align: center;
          font-size: 20px;
          word-break: keep-all;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: var(--primary-text-color);
          font-weight: normal;
        }

        /* Circular slider: force visible */
        :host([theme="gunmalmg"]) .classic-popup-content vt-ha-control-circular-slider {
          display: block !important;
        }

        /* Content overlay inside slider: reset to classic absolute positioning */
        :host([theme="gunmalmg"]) .classic-popup-content .content {
          position: absolute !important;
          width: calc(70% - 40px) !important;
          height: calc(70% - 100px) !important;
          box-sizing: border-box;
          border-radius: 100%;
          left: 50% !important;
          top: calc(50% - 40px) !important;
          text-align: center;
          overflow-wrap: break-word;
          pointer-events: none;
          display: flex !important;
          align-items: center;
          place-content: center;
          flex-flow: wrap;
          transform: translate(-50%,-50%) !important;
          max-width: 155px !important;
          padding: 0;
        }

        :host([theme="gunmalmg"]) .classic-popup-content .content.no-presets {
          top: calc(60% - 30px) !important;
        }

        /* SVG inside popup */
        :host([theme="gunmalmg"]) .classic-popup-content #main {
          transform: scale(2.3);
        }

        :host([theme="gunmalmg"]) .classic-popup-content svg {
          height: auto;
          margin: auto;
          display: block;
          width: 100%;
          -webkit-backface-visibility: hidden;
          max-width: 233px;
        }

        /* current-info: force visible */
        :host([theme="gunmalmg"]) .classic-popup-content .current-info {
          display: flex !important;
        }

        /* Reset font overrides to classic values */
        :host([theme="gunmalmg"]) .classic-popup-content .main-value {
          font-size: inherit !important;
          font-weight: normal !important;
        }
        :host([theme="gunmalmg"]) .classic-popup-content .main-value.temp-main {
          font-size: 15px !important;
        }
        :host([theme="gunmalmg"]) .classic-popup-content .main-value.temp-secondary {
          font-size: 6px !important;
        }

        /* Hide gunmalmg badges in popup (classic has its own hvac action icon) */
        :host([theme="gunmalmg"]) .classic-popup-content .hvac-badge {
          display: none !important;
        }

        /* Temperature styles: reset to classic */
        :host([theme="gunmalmg"]) .classic-popup-content .temp-main {
          font-size: 15px;
        }
        :host([theme="gunmalmg"]) .classic-popup-content .temp-main .uom {
          font-size: 5px;
        }
        :host([theme="gunmalmg"]) .classic-popup-content .temp-secondary {
          font-size: 6px;
        }
        :host([theme="gunmalmg"]) .classic-popup-content .temp-secondary .uom {
          font-size: 3px;
        }

        :host([theme="gunmalmg"]) .classic-popup-content line {
          stroke: #e7e7e8;
          stroke-width: 0.5;
        }

        /* Modes: reset to classic */
        :host([theme="gunmalmg"]) .classic-popup-content #modes {
          z-index: 0;
          position: relative;
          display: flex;
          width: auto;
          justify-content: center;
          margin-top: -3em;
          margin-bottom: 1em;
        }

        /* Control buttons +/-: reset to classic absolute positioning */
        :host([theme="gunmalmg"]) .classic-popup-content #vt-control-buttons {
          z-index: 0;
          position: absolute !important;
          display: block !important;
          width: auto;
          justify-content: center;
          padding-bottom: 0.2em;
          left: 90%;
          top: 35%;
        }

        /* Presets: reset to classic */
        :host([theme="gunmalmg"]) .classic-popup-content #presets {
          z-index: 0;
          position: relative;
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          margin-top: -1em;
          margin-bottom: 1em;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0;
        }

        /* Preset labels: reset to classic style */
        :host([theme="gunmalmg"]) .classic-popup-content .preset-label {
          cursor: pointer;
          user-select: none;
          display: flex;
          position: relative;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          padding: 0 5px;
          outline: 0px;
          height: 48px;
          margin: 0 5px;
          border-radius: 0;
          flex-shrink: initial;
        }

        /* Preset icon buttons: reset to classic (no gunmalmg pill background) */
        :host([theme="gunmalmg"]) .classic-popup-content .preset-label ha-icon-button {
          --mdc-icon-size: 24px;
          width: auto;
          height: auto;
          border-radius: 100%;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        /* Reset selected preset icon colors to classic */
        :host([theme="gunmalmg"]) .classic-popup-content .preset-label ha-icon-button.selected-icon {
          background: transparent !important;
          color: var(--label-badge-yellow) !important;
        }

        /* Timed preset container: force visible */
        :host([theme="gunmalmg"]) .classic-popup-content .timed-preset-container {
          display: flex !important;
        }

        /* Left infos: reset to classic absolute positioning */
        :host([theme="gunmalmg"]) .classic-popup-content #left-infos {
          z-index: 3;
          position: absolute !important;
          display: block !important;
          width: auto;
          justify-content: center;
          padding-bottom: 0.2em;
          left: 0%;
          top: 15%;
        }

        :host([theme="gunmalmg"]) .classic-popup-content #left-infos.no-presets {
          top: 30%;
        }

        /* Right lock: align center with +/- buttons */
        :host([theme="gunmalmg"]) .classic-popup-content #right-lock {
          z-index: 0;
          position: absolute;
          left: 86%;
          top: 15%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right: 0;
        }

        /* Disabled circle container fallback (when no slider) */
        :host([theme="gunmalmg"]) .classic-popup-content .disabled-circle-container {
          height: 145px !important;
          background: radial-gradient(var(--hvac-mode-color), transparent 50%) !important;
        }

        :host([theme="gunmalmg"]) .classic-popup-content .disabled-circle-container.no-background-color {
          background: none !important;
        }
`;
