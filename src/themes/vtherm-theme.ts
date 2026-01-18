import { css, html } from 'lit';
import type { TemplateResult } from 'lit';
import { mdiDotsVertical } from '@mdi/js';
import { localize } from '../localize/localize';

export function renderVtherm(ctx: any): TemplateResult {
  return html`
    <ha-card class="vtherm-card ${ctx.hvacMode}">
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
          <div class="theme-menu-header">
            <div class="theme-menu-title" @click=${() => { ctx._handleMoreInfo(); ctx._closeThemeMenu(); }}>${localize({ hass: ctx.hass, string: 'editor.card.climate.menu_system' })}</div>
          </div>
          <div class="theme-menu-item" style="border-top:1px solid var(--divider-color, #e0e0e0);"></div>
          <div class="theme-menu-item" @click=${() => ctx._applyTheme('classic')}>${localize({ hass: ctx.hass, string: 'editor.card.climate.theme_classic' })}</div>
          <div class="theme-menu-item" @click=${() => ctx._applyTheme('gunmalmg')}>${localize({ hass: ctx.hass, string: 'editor.card.climate.theme_gunmalmg' })}</div>
          <div class="theme-menu-item" @click=${() => ctx._applyTheme('uncolored')}>${localize({ hass: ctx.hass, string: 'editor.card.climate.theme_uncolored' })}</div>
        </div>
      ` : ''}

      <div class="vtherm-grid">
        <div class="vtherm-left">
          ${ctx._renderLeftInfos ? ctx._renderLeftInfos() : ''}
          ${ctx._renderIcon(ctx.hvacMode, ctx.hvacMode, false)}
        </div>
        <div class="vtherm-center">
          <div class="name">${ctx.name}</div>
          <div class="temps">${ctx._display_top ?? ''}${ctx._display_bottom ? html` / ${ctx._display_bottom}` : ''}</div>
        </div>
        <div class="vtherm-right">
          ${!ctx._config?.disable_presets ? ctx.presets.map((p: any) => html`${ctx._renderPreset(p, ctx.preset)}`) : ''}
        </div>
      </div>
    </ha-card>
  `;
}

export const vthermStyles = css`
  :host([theme="vtherm"]) ha-card { background: var(--card-background-color); color: var(--primary-text-color); }
  :host([theme="vtherm"]) .vtherm-grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 8px; align-items: center; }
  :host([theme="vtherm"]) .vtherm-left { display:flex; justify-content:center; }
  :host([theme="vtherm"]) .vtherm-center { text-align:center; }
  :host([theme="vtherm"]) .vtherm-right { display:flex; justify-content:flex-end; }
  :host([theme="vtherm"]) .more-info { z-index:6 }
  :host([theme="vtherm"]) .theme-menu { background: var(--card-background-color); }
`;
