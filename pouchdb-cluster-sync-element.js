import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `pouchdb-cluster-sync`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PouchDbClusterSyncElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'pouchdb-cluster-sync',
      },
    };
  }
}

window.customElements.define('pouchdb-cluster-sync', PouchDbClusterSyncElement);
