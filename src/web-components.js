import { WebComponents } from './WebComponents.js';

// https://webcomponents.dev/edit/collection/hzgpcWmPGvSJXSo4fs2a
import { BasicSetup } from './lit-basic/BasicSetup.js';
import { ManageProperties } from './lit-basic/ManageProperties.js';

customElements.define('web-components', WebComponents);
customElements.define('basic-setup', BasicSetup);
customElements.define('manage-properties', ManageProperties);
