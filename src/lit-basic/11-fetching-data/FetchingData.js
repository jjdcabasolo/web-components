import { LitElement, html, css } from 'lit-element';

export class FetchingData extends LitElement {
  static get styles() {
    return css`
      div.note {
        color: #424242;
        font-size: 12px;
        margin-bottom: 8px;
      }
    `;
  }

  static get properties() {
    return {
      response: { type: Array },
    };
  }

  constructor() {
    super();
    this.response = [];
  }

  firstUpdated() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(r => {
        this.response = [...this.response, ...r];
      })
      .catch(r => {
        this.response = `${r}`;
      });
  }

  render() {
    return html`
      <section-header header="11-fetching-data">
        <div class="note">
          Fake API call from
          <a href="https://jsonplaceholder.typicode.com">this</a>
          link.
        </div>
        <div>Users</div>
        ${this._renderResponse()}
      </section-header>
    `;
  }

  _renderResponse() {
    const { response } = this;

    if (!response || response.length < 0) {
      return html`
        <p>Fetching contents...</p>
      `;
    }

    if (typeof response === 'string') {
      if (response.toLowerCase().includes('error')) {
        return html`
          <p>Data fetching failed.</p>
        `;
      }
    }

    return html`
      <ul>
        ${response.map(
          item => html`
            <li>${item.name} (${item.email})</li>
          `,
        )}
      </ul>
    `;
  }
}

// 11-fetching-data: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/nJNnHZjHdwole3DrvQEV
customElements.define('fetching-data', FetchingData);
