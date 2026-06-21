import './react-global.js';      // window.React / window.ReactDOM (shared instance)
import './vendor/ds-bundle.js';  // window.ChicNailHeadSpaDesignSystem_843afb (also ships demo CNHS_MENU)
import { CNHS_MENU } from './menu-data.js';
import '../EvolvedHome.jsx';     // defines window.EvoHome

// ds-bundle embeds an older demo menu; ensure our real menu wins (runs after all imports).
window.CNHS_MENU = CNHS_MENU;

window.ReactDOM
  .createRoot(document.getElementById('root'))
  .render(window.React.createElement(window.EvoHome));
