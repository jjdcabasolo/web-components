import { LitElement, html } from 'lit-element';

export class FireEventsChild extends LitElement {
  render() {
    return html`
      <button @click=${this._handleClick}>
        A CHILD BUTTON: GET VALUE FROM CHILD VIA DISPATCH EVENT
      </button>
    `;
  }

  _handleClick() {
    this.dispatchEvent(
      new CustomEvent('event-fired', {
        detail: {
          main: 1,
          hello: 'top spot title',
        },
      }),
    );
  }
}

customElements.define('fire-events-child', FireEventsChild);
