import './react-global.js';  // window.React / window.ReactDOM (shared instance)
import './menu-data.js';     // window.CNHS_MENU
import React from 'react';
import ServicesAccordion from './ServicesAccordion.jsx';

window.ReactDOM
  .createRoot(document.getElementById('root'))
  .render(React.createElement(ServicesAccordion));
