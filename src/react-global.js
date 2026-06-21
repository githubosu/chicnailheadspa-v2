// Expose the bundled (production) React as globals so the prebuilt design-system
// bundle (_ds_bundle.js, which calls React.createElement) shares this exact
// instance. JSX in our components also compiles to React.createElement.
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

window.React = React;
window.ReactDOM = ReactDOMClient;
