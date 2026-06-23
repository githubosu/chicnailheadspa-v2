import './react-global.js';      // window.React / window.ReactDOM
import './vendor/ds-bundle.js';  // window.ChicNailHeadSpaDesignSystem_843afb (EvoHeader needs it)
import { CNHS_MENU } from './menu-data.js';
import '../EvolvedHome.jsx';     // defines window.EvoHeader / window.EvoFooter (shared chrome)
import React from 'react';
import ServicesAccordion from './ServicesAccordion.jsx';

window.CNHS_MENU = CNHS_MENU; // ensure our menu wins over the bundle's demo

window.ReactDOM
  .createRoot(document.getElementById('root'))
  .render(React.createElement(ServicesAccordion));
