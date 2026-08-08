import './react-global.js';      // window.React / window.ReactDOM (shared instance)
import './vendor/ds-bundle.js';  // window.ChicNailHeadSpaDesignSystem_843afb (also ships demo CNHS_MENU)
import { CNHS_MENU } from './menu-data.js';
import '../EvolvedHome.jsx';     // defines window.EvoHome

// ds-bundle embeds an older demo menu; ensure our real menu wins (runs after all imports).
window.CNHS_MENU = CNHS_MENU;

const rootEl = document.getElementById('root');
// Prerendered pages hydrate (reuses server DOM, no image re-fetch); empty dev shells mount fresh.
const app = window.React.createElement(window.EvoHome);
if (rootEl.hasChildNodes()) window.ReactDOM.hydrateRoot(rootEl, app);
else window.ReactDOM.createRoot(rootEl).render(app);

