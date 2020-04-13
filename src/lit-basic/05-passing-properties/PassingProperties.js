import { LitElement, html } from "lit-element";
import { sectionStyles } from '../../styles/global-styles.js';

export class PassingProperties extends LitElement {
  static get styles() {
    return sectionStyles;
  }

  static get properties() {
    return {
      author: { type: Object },
      books: { type: Array }
    };
  }

  constructor() {
    super();
    this.author = { name: "G.R.R. Martin", age: 70 };
    this.books = [
      { title: "Game of Thrones", pages: 697 },
      { title: "The Ice Dragon", pages: 521 }
    ];
  }

  /**
   * In lit-html, you can use template expressions (${}) to set properties and attributes
   * on elements with a similar syntax.
   */
  render() {
    return html`
      <div class="section">
        <h6>05-passing-properties</h6>
        <author-profile .author=${this.author} .books=${this.books}>
        </author-profile>
      </div>
    `;
  }
}

customElements.define("passing-properties", PassingProperties);
