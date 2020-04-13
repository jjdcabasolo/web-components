import { LitElement, html, css } from "lit-element";

export class FancyMessage extends LitElement {
  static get styles() {
    return css`
      div {
        color: #9E9E9E;
        font-size: 12px;
      }
    `;
  }

  static get properties() {
    return {
      message: { type: String },
      messagePrefix: { type: String }
    };
  }

  render() {
    return html`
      <div>${this.messagePrefix} ${this.message}</div>
    `;
  }
}

customElements.define("fancy-message", FancyMessage);
