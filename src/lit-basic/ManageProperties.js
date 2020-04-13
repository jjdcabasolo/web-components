import { LitElement, html } from 'lit-element';
import { sectionStyles } from '../styles/global-styles.js';

export class ManageProperties extends LitElement {
  static get styles() {
    return sectionStyles;
  }

  // Properties are defined through a static getter. When defined, LitElement will decode any
  // html attributes set on this component as properties which can be used from javascript.

  // Keys should be the property name, value the property type.
  // The type is used to deserialize html attribute string into a javascript property.
  // The supported types are String, Number, Boolean, Array Object.
  static get properties() {
    return {
      message: { type: String },
    };
  }

  render() {
    return html`
      <div class="section">
        <h6>02-manage-properties</h6>
        <!--
          Dynamic parts of your template are set through template string expressions.
          It's plain javascript, so you can use any valid javascript expression. lit-html handles
          updating the dom efficiently.
        -->

        <!-- Render a string or number directly -->
        <div>
          The message is: ${this.message}, count is: ${this.message.length}
        </div>

        <!-- Call a function and render the return value -->
        <div>
          The reversed message is: ${ManageProperties.reverseMessage(this.message)}
        </div>
      </div>
    `;
  }

  static reverseMessage(message) {
    return message
      .split('')
      .reverse()
      .join('');
  }
}

// 02-manage-properties: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/c4Lm2o2EeQs4INPXH2pr
customElements.define('manage-properties', ManageProperties);
