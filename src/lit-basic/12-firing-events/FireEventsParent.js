import { LitElement, html } from 'lit-element';

export class FireEventsParent extends LitElement {
  static get properties() {
    return {
      main: { type: Number },
      hello: { type: String },
    };
  }

  constructor() {
    super();

    this.main = 0;
    this.hello = '';
  }

  render() {
    const noData = 'No data yet.';
    return html`
      <section-header header="12-firing-events">
        <fire-events-child @event-fired=${this._someCallback}></fire-events-child>
        <div>Main: ${this.main !== 0 ? this.main : noData}</div>
        <div>Hello: ${this.hello !== '' ? this.hello : noData}</div>
      </section-header>
    `;
  }

  _someCallback({ detail }) {
    const { main, hello } = detail;
    this.main = main;
    this.hello = hello;
  }
}

// 12-firing-events: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/wSRqSHx2s2WEFL8t8vxI
customElements.define('fire-events-parent', FireEventsParent);
