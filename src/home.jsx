import './react-global.js';      // window.React / window.ReactDOM (shared instance)
import './vendor/ds-bundle.js';  // window.ChicNailHeadSpaDesignSystem_843afb
import './menu-data.js';         // window.CNHS_MENU
import '../EvolvedHome.jsx';     // defines window.EvoHome (reads the globals above at load)

window.ReactDOM
  .createRoot(document.getElementById('root'))
  .render(window.React.createElement(window.EvoHome));
