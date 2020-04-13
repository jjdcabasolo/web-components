import { LitElement, html } from "lit-element";
import { sectionStyles } from '../styles/global-styles.js';

export class PropertyChanges extends LitElement {
  static get styles() {
    return sectionStyles;
  }

  // Any changes to properties defined in the static properties will trigger a re-render
  // of the component.
  static get properties() {
    return {
      count: { type: Number }
    };
  }

  constructor() {
    super();

    // We mock updating the count property every 1ms.
    setInterval(() => {
      this.count += 1;
    }, 1);
  }

  // The _render callback is called each time any of the defined properties change.
  // lit-html is optimized for handling frequent updates and updating the DOM efficiently
  render() {
    const [h, m, s] = this._calculateTime();
    return html`
      <div class="section">
        <h6>03-property-changes</h6>
        <div>
          Time spent: ${h} ${m} ${s}
        </div>
        <p>(time flies at 1ms)</p>
      </div>
    `;
  }

  _calculateTime() {
    const hour = Math.floor(this.count / 3600);
    const minute = Math.floor(this.count / 60) % 60;
    return [
      `${hour > 0 ? `${hour} hour${hour > 1 ? 's' : ''}` : ''}`, // h 
      `${minute > 0 ? `${minute} minute${minute > 1 ? 's' : ''}` : ''}`, // m 
      `${this.count % 60} second${this.count > 1 ? 's' : ''}`, // s
    ];
  }
}

// 03-property-changes: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/RbvMbT0ADah7NCH6KUWj
customElements.define('property-changes', PropertyChanges);
