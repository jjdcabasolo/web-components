// LitElement and html are the basic required imports
import { LitElement, html } from 'lit-element';

// Create a class definition for your component and extend the LitElement base class
export class BasicSetup extends LitElement {
  // The render callback renders your element's template. This should be a pure function,
  // it should always return the same template given the same properties. It should not perform
  // any side effects such as setting properties or manipulating the DOM. See the updated
  // or first-updated examples if you need side effects.
  render() {
    // Return the template using the html template tag. lit-html will parse the template and
    // create the DOM elements
    return html`
      <h1>Hello world!</h1>
    `;
  }
}

// 01-basic-setup: https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a/p0QzvD0iyAsOxt4Iug7U
