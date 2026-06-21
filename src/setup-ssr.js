// Minimal browser-global shims so the (browser-oriented) components + design-system
// bundle can be rendered to a string in Node at build time. renderToString needs no
// real DOM; effects don't run. matchMedia is intentionally absent so useMobile()
// returns false → we prerender the desktop markup (good baseline for crawlers).
import React from 'react';

if (typeof globalThis.window === 'undefined') globalThis.window = globalThis;
if (typeof globalThis.localStorage === 'undefined') {
  const store = {};
  globalThis.localStorage = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
  };
}
window.React = React;
