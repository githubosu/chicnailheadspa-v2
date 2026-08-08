import './react-global.js';      // window.React / window.ReactDOM
import './vendor/ds-bundle.js';  // window.ChicNailHeadSpaDesignSystem_843afb (EvoHeader needs it)
import { CNHS_MENU } from './menu-data.js';
import '../EvolvedHome.jsx';     // defines window.EvoHeader / window.EvoFooter (shared chrome)
import React from 'react';
import BookPage from './BookPage.jsx';

window.CNHS_MENU = CNHS_MENU; // ensure our menu wins over the bundle's demo

const rootEl = document.getElementById('root');
// Prerendered pages hydrate (reuses server DOM, no image re-fetch); empty dev shells mount fresh.
const app = React.createElement(BookPage);
if (rootEl.hasChildNodes()) window.ReactDOM.hydrateRoot(rootEl, app);
else window.ReactDOM.createRoot(rootEl).render(app);

