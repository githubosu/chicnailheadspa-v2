# Chic Nail & Head Spa — v2 website

A static marketing site for **Chic Nail & Head Spa** (Plain City, OH), built on the
[Chic Nail & Head Spa design system](https://github.com/githubosu/chic-nail-head-spa-design-system).

Quiet-luxury brand: warm cream canvas, mocha & honey "latte" accents, an arch "NC"
monogram, and a high-contrast serif voice.

## Pages
- **`index.html`** — Home: hero, the two crafts (nail care + head spa), guest favourites, booking CTA.
- **`services.html`** — Full service menu with category tabs, rendered from `menu-data.js`.

## Stack
Plain static HTML/CSS/JS — **no build step**. Open `index.html` in a browser, or serve
the folder with any static server. Hosted via GitHub Pages.

```
styles.css        design-system entry point (@imports tokens/*)
tokens/           color, type, spacing, effects, base, fonts
assets/           logo lockups, monograms, favicon
site.css          site-level layout (header, hero, menu, footer)
site.js           mobile nav + scroll reveal
menu-data.js      service menu — single source of truth (real prices)
menu-render.js    renders the Services page from menu-data.js
```

## Editing the menu
All services and prices live in `menu-data.js` (`window.CNHS_MENU`). Edit there; the
Services page re-renders automatically.

## Credits
Brand, tokens and assets from the Chic Nail & Head Spa design system.
Icons: [Phosphor](https://phosphoricons.com) (light weight). Type: Cormorant Garamond + Jost.
