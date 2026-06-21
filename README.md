# Chic Nail & Head Spa — v2 website

Marketing site for **Chic Nail & Head Spa** (Plain City, OH), built on the
[Chic Nail & Head Spa design system](https://github.com/githubosu/chic-nail-head-spa-design-system).

Live: https://githubosu.github.io/chicnailheadspa-v2/

## Stack
- **Vite** build (no in-browser Babel) shipping **production React** — ~88 KB gzipped JS.
- React provided as a shared global (`src/react-global.js`) so the prebuilt
  design-system bundle (`src/vendor/ds-bundle.js`) uses the same instance.
- `menu-data.js` is the single source of truth for services/pricing.
- Images are self-hosted, resized **WebP** (`npm run optimize:images`).
- SEO: per-page meta/OG, `LocalBusiness` JSON-LD, `sitemap.xml`, `robots.txt`.

## Pages
- **`index.html`** → `src/home.jsx` → `EvolvedHome.jsx` (video hero, services
  tabs, reserve band, seasonal gallery, testimonials, visit/map).
- **`services-accordion.html`** → `src/services.jsx` → `src/ServicesAccordion.jsx`
  (full menu accordion, categories/prices derived from `menu-data.js`).

## Develop
```bash
npm install
npm run dev        # local dev server (HMR)
npm run build      # production build -> dist/
npm run preview    # serve the built dist/
npm run optimize:images   # refresh public/assets/img/ WebP from source photos
```

## Layout
```
index.html, services-accordion.html   Vite entry HTML (head/meta/JSON-LD)
src/
  react-global.js     exposes window.React/ReactDOM (shared instance)
  home.jsx            home entry
  services.jsx        services entry
  ServicesAccordion.jsx
  shared/useMobile.js single viewport hook
  menu-data.js        service menu (window.CNHS_MENU) — single source of truth
  vendor/ds-bundle.js prebuilt design-system components
EvolvedHome.jsx       home component (EvoHeader/EvoFooter live here)
public/               styles.css, tokens/, assets/ (incl. assets/img WebP), sitemap, robots
scripts/optimize-images.mjs
.github/workflows/deploy.yml   builds + deploys dist/ to Pages
```

## Deploy
Pushing to `master` triggers `.github/workflows/deploy.yml` (Vite build →
GitHub Pages). Pages source must be set to **GitHub Actions**.

## To finish later
- Compress the hero video (currently ~19 MB from the studio CDN) and self-host it.
- Add seasonal gallery photos under `public/assets/gallery/<theme>/` (see that folder's README).
- Wire a real online-booking URL (booking actions currently use the phone number).
