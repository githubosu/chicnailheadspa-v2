# Chic Nail & Head Spa — v2 website

The marketing & booking site for **Chic Nail & Head Spa** (Plain City, OH), built
directly from the [Chic Nail & Head Spa design system](https://github.com/githubosu/chic-nail-head-spa-design-system)
website UI kit.

## Pages
- **`index.html`** — the interactive site app (React + Babel, no build step):
  **Home → Services → Booking → Confirmation**, using the design-system component
  bundle. The header/footer "Services" links open the accordion menu page.
- **`services-accordion.html`** — standalone **Services & Pricing** page: a
  spa-minimal accordion of every category, rendered from `menu-data.js`.

## Stack
Plain static files — **no build step**. React, ReactDOM and Babel-standalone load
from CDN and transpile the `.jsx` in the browser. Hosted on GitHub Pages.

```
index.html              site app shell + router
chrome.jsx              shared Header / Footer / Photo
Home.jsx                home screen
Services.jsx            in-app services screen
Booking.jsx             booking flow
Confirmation.jsx        booking confirmation
services-accordion.html standalone accordion services page
_ds_bundle.js           design-system component bundle
styles.css + tokens/    design tokens (color, type, spacing, effects, base, fonts)
assets/                 logo lockups, monograms, favicon
menu-data.js            service menu — single source of truth (real prices)
```

## Notes
- Booking actions point to the studio phone — the design's `/booking` URL is not
  live yet. Swap in the real booking URL when available.
- Editing the menu: all services/prices live in `menu-data.js` (`window.CNHS_MENU`).

## Credits
Brand, tokens, components and assets from the Chic Nail & Head Spa design system.
Icons: [Phosphor](https://phosphoricons.com) · Type: Cormorant Garamond + Jost.
