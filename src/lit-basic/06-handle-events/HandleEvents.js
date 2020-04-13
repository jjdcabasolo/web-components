import { LitElement, html } from "lit-element";
import { sectionStyles } from '../../styles/global-styles.js';

export class HandleEvents extends LitElement {
  static get styles() {
    return sectionStyles;
  }

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
      <div class="section">
        <h6>06-handle-events</h6>
        Current count: [${this.count}]
        <!-- Use @[eventname] syntax to declaratively register inline event handlers -->
        <button @click=${this._handleAdd}>+</button>

        <!--
          You can also pass a function reference directly. Lit-html will automatically use the element
          as the function scope ('this' will reference the element)
        -->
        <button @click=${this._handleDeduct}>-</button>
      </div>
    `;
  }

  _handleAdd() {
    this.count += 1;
  }

  _handleDeduct() {
    this.count -= 1;
  }
}

customElements.define('handle-events', HandleEvents);
