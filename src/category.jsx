import './react-global.js';      // window.React / window.ReactDOM
import './vendor/ds-bundle.js';  // window.ChicNailHeadSpaDesignSystem_843afb
import { CNHS_MENU } from './menu-data.js';
import '../EvolvedHome.jsx';     // defines window.EvoHeader / window.EvoFooter
import React from 'react';
import CategoryPage from './CategoryPage.jsx';

window.CNHS_MENU = CNHS_MENU; // ensure our menu wins over the bundle's demo

const root = document.getElementById('root');
const cat = root.dataset.cat;
window.ReactDOM.createRoot(root).render(React.createElement(CategoryPage, { cat }));
