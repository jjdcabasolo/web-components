import { LitElement, html } from "lit-element";

// You also implement conditional logic in separate functions
function getMessage(message, showMessage) {
  if (!showMessage) {
    return "";
  }

  if (!message) {
    return "No message set.";
  }

  return `Message from function: ${message}`;
}

export class ConditionalRendering extends LitElement {
  static get properties() {
    return {
      showMessage: { type: Boolean },
      message: { type: String },
      disabled: { type: Boolean }
    };
  }

  render() {
    // you can use regular if statements
    if (this.disabled) {
      return html`
        <section-header header="07-conditional-rendering">
          Nothing to see here.
        </section-header>
      `;
    }

    return html`
      <section-header header="07-conditional-rendering">
        <button @click=${this._handleShowMessage}>
          <!-- You can use ternary expressions for quick conditional rendering -->
          Click to ${this.showMessage ? "hide" : "show"} message
        </button>

        <!-- Or to conditionally show/hide a template -->
        <div>
          ${this.showMessage
            ? html`
                The message is: ${this.message}
              `
            : ""}
        </div>

        <!-- You can also call a function and handle the conditional rendering in there -->
        <div>
          ${getMessage(this.message, this.showMessage)}
        </div>
      </section-header>
    `;
  }

  _handleShowMessage() {
    this.showMessage = !this.showMessage;
  }
}

// 07-conditional-rendering: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/QIoIigpr7Gb3Mbnw5fkY
customElements.define("conditional-rendering", ConditionalRendering);
