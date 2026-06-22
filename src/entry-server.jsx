// SSR entry used at build time to prerender each page's body to static HTML.
import './setup-ssr.js';          // window/localStorage/React shims (must be first)
import './vendor/ds-bundle.js';   // window.ChicNailHeadSpaDesignSystem_843afb
import { CNHS_MENU } from './menu-data.js';
import '../EvolvedHome.jsx';      // defines window.EvoHome
import ServicesAccordion from './ServicesAccordion.jsx';
import CategoryPage from './CategoryPage.jsx';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { jsonLdScript, breadcrumbScript, BASE } from './seo.js';
import { CATEGORIES } from './categories.js';

window.CNHS_MENU = CNHS_MENU; // ensure our menu wins over the bundle's demo

export { CATEGORIES };

export function renderHome() {
  return renderToString(React.createElement(window.EvoHome));
}
export function renderServices() {
  return renderToString(React.createElement(ServicesAccordion));
}
export function renderCategory(cat) {
  return renderToString(React.createElement(CategoryPage, { cat }));
}
export function renderJsonLd() {
  return jsonLdScript(CNHS_MENU);
}
// Breadcrumb <script> for a page; trail is [{name,url}, ...].
export function renderBreadcrumb(trail) {
  return breadcrumbScript(trail);
}
export { BASE };
