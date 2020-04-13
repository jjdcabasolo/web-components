import { LitElement, html, css } from 'lit-element';

export class RenderStyles extends LitElement {
  /**
   * Styles should be added as a static getter. They are evaluated once, and then added
   * in the element's shadow dom.
   *
   * Shadow dom takes care of scoping the CSS of your element to only affect your
   * element's template, and not the element outside. For an in-depth explanation
   * of shadow dom, see: https://github.com/praveenpuglia/shadow-dom-in-depth
   */
  static get styles() {
    return css`
      :host {
        display: block;
      }

      .message {
        color: blue;
      }
    `;
  }

  render() {
    return html`
      <section-header header="10-render-styles">
        <div class="message">Hello world!</div>
      </section-header>
    `;
  }
}

// 10-render-styles: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/yXTfhyZLao89tVFiuxEI
customElements.define('render-styles', RenderStyles);
