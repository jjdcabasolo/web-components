import { LitElement, html } from "lit-element";

function generateBookTemplate(book) {
  return html`
    <li>${book.author}: ${book.title}</li>
  `;
}

export class RepeatedTemplates extends LitElement {
  static get properties() {
    return {
      books: { type: Array }
    };
  }

  constructor() {
    super();

    this.books = [
      { author: "G.R.R. Martin", title: "A Game of Thrones" },
      { author: "Tolkien", title: "Lord of the Rings" }
    ];
  }

  render() {
    return html`
      <section-header header="08-repeated-templates">
        <!--
          To repeat a template, you can simply use a map function of arrays.
          In this case, it maps the array of messages to an array of templates.
          Lit-html will read the array and render the templates inside it.
        -->
        Books:
        <ul>
          ${this.books.map(
            book => html`
              <li>${book.author}: ${book.title}</li>
            `
          )}
        </ul>

        <!--
          If a template gets too large, you can also split it in a separate function
        -->
        Books:
        <ul>
          ${this.books.map(generateBookTemplate)}
        </ul>
      </section-header>
    `;
  }
}

// 08-repeated-templates: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/HJeKgSrF5bTk8rp3j4XS
customElements.define('repeated-templates', RepeatedTemplates);
