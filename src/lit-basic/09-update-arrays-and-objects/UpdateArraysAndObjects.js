import { LitElement, html } from 'lit-element';

export class UpdateArraysAndObjects extends LitElement {
  static get properties() {
    return {
      myArray: { type: Array },
      myObject: { type: Object },
    };
  }

  constructor() {
    super();
    this.myObject = { id: 1, text: 'foo' };
    this.myArray = [{ id: 1 }, { id: 2 }];
  }

  render() {
    return html`
      <section-header header="09-update-arrays-and-objects">
        <h3>Array items</h3>
        <button @click=${this._addArrayItem}>Add array item</button>
        <ul>
          ${this.myArray.map(
            item => html`
              <li>${item.id}</li>
            `,
          )}
        </ul>

        <h3>Object</h3>
        <button @click=${this._updateObjectId}>Add object item</button>
        <ul>
          ${Object.keys(this.myObject).map(
            item => html`
              <li>${this.myObject[item]}: ${item}</li>
            `,
          )}
        </ul>
      </section-header>
    `;
  }

  /**
   * If you mutate an array directly, LitElement will not detect
   * the change automatically.
   *
   * The recommended approach is to use immutable data patterns.
   * You can easily append an array item using array spread syntax:
   */
  _addArrayItem() {
    // const newId = Math.round(Math.random() * 100);
    // const newItem = { id: newId };
    // this.myArray = [...this.myArray, newItem];

    this.myArray = [...this.myArray, { id: Math.round(Math.random() * 100) }];

    /**
     * An alternative method is to mutate the array and then call
     * requestUpdate() to notify LitElement the property changed.
     */
    // this.myArray.push(newItem);
    // this.requestUpdate();
  }

  /**
   * If you mutate an object directly, LitElement will not detect
   * the change automatically.
   *
   * The recommended approach is to use immutable data patterns.
   * You can easily update an object's property using the object
   * spread syntax:
   */
  _updateObjectId() {
    const newId = Math.round(Math.random() * 100);

    this.myObject = {
      ...this.myObject,
      id: newId,
    };
    /**
     * An alternative method is to mutate the object and then call
     * requestUpdate() to notify LitElement the property changed.
     */
    // this.myObject.id = newId;
    // this.requestUpdate();
  }
}

// 09-update-arrays-and-objects: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/NTxVrdFBB3DB8wr5QnpZ
customElements.define('update-arrays-and-objects', UpdateArraysAndObjects);
