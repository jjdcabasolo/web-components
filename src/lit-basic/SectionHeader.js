import { LitElement, html } from "lit-element";
import { sectionStyles } from '../styles/global-styles.js';

export class SectionHeader extends LitElement {
  static get styles() {
    return sectionStyles;
  }

  static get properties() {
    return {
      header: { type: String },
    };
  }

  render() {
    return html`
      <div class="section">
        <h6>${this.header}</h6>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('section-header', SectionHeader);
