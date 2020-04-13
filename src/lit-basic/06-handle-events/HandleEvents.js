import { LitElement, html } from "lit-element";

export class HandleEvents extends LitElement {
  static get properties() {
    return {
      count: { type: Number }
    };
  }

  constructor() {
    super();

    this.count = 0;
  }

  render() {
    return html`
      <section-header header="06-handle-events">
        Current count: [${this.count}]
        <!-- Use @[eventname] syntax to declaratively register inline event handlers -->
        <button @click=${this._handleAdd}>+</button>

        <!--
          You can also pass a function reference directly. Lit-html will automatically use the element
          as the function scope ('this' will reference the element)
        -->
        <button @click=${this._handleDeduct}>-</button>
      </section-header>
    `;
  }

  _handleAdd() {
    this.count += 1;
  }

  _handleDeduct() {
    this.count -= 1;
  }
}

// 06-handle-events: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/M3OUIoHe9XAgfUa7hCkd
customElements.define('handle-events', HandleEvents);
