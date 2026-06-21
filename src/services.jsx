import './react-global.js';  // window.React / window.ReactDOM (shared instance)
import { CNHS_MENU } from './menu-data.js';
import React from 'react';
import ServicesAccordion from './ServicesAccordion.jsx';

window.CNHS_MENU = CNHS_MENU;

window.ReactDOM
  .createRoot(document.getElementById('root'))
  .render(React.createElement(ServicesAccordion));
