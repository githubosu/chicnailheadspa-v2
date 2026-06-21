// SSR entry used at build time to prerender each page's body to static HTML.
import './setup-ssr.js';          // window/localStorage/React shims (must be first)
import './vendor/ds-bundle.js';   // window.ChicNailHeadSpaDesignSystem_843afb
import { CNHS_MENU } from './menu-data.js';
import '../EvolvedHome.jsx';      // defines window.EvoHome
import ServicesAccordion from './ServicesAccordion.jsx';
import React from 'react';
import { renderToString } from 'react-dom/server';

window.CNHS_MENU = CNHS_MENU; // ensure our menu wins over the bundle's demo

export function renderHome() {
  return renderToString(React.createElement(window.EvoHome));
}
export function renderServices() {
  return renderToString(React.createElement(ServicesAccordion));
}
