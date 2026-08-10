// Inject prerendered body HTML + structured data into the built pages so crawlers
// (and first paint) get real content. Runs after `vite build` + the SSR build.
import { readFile, writeFile, readdir, unlink } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  renderHome, renderServices, renderCategory, renderBook, renderJsonLd, renderBreadcrumb,
  CATEGORIES, BASE,
} from '../dist-ssr/entry-server.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, '../dist');
const LD = renderJsonLd(); // LocalBusiness (same on every page)

/* ── Open Graph / Twitter ──────────────────────────────────────────────────
   Each source page already carries the tags that differ per page — og:title,
   og:description, og:url. What follows is only the part that is identical
   everywhere, injected here for the same reason the JSON-LD is: one definition
   instead of thirteen copies that drift apart.

   og:image:width/height matter more than they look. Without them a crawler has
   to fetch and measure the image before it can lay the card out, so the first
   share of a URL often renders with no image at all; with them the card is
   composed immediately. The values must match the real file — 1200x630. */
const SHARED_META = [
  '<meta property="og:site_name" content="Chic Nail &amp; Head Spa">',
  '<meta property="og:locale" content="en_US">',

  /* Icons. The set is generated square by scripts/icons.mjs — the original
     apple-touch-icon shipped 185x210, which iOS letterboxes. Emitted here
     rather than in thirteen source files for the same reason as the OG tags.

     The SVG is listed first: browsers that support it prefer it and ignore the
     PNGs, and it is the only icon format re-evaluated against the colour
     scheme, so it carries the dark-mode variant. The PNGs stay for Safari and
     anything older. */
  '<link rel="icon" type="image/svg+xml" href="./assets/favicon.svg">',
  '<link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png">',
  '<link rel="icon" type="image/png" sizes="16x16" href="./assets/favicon-16x16.png">',
  '<link rel="icon" type="image/png" sizes="48x48" href="./assets/favicon-48x48.png">',
  '<link rel="apple-touch-icon" sizes="180x180" href="./assets/apple-touch-icon-180.png">',
  '<link rel="manifest" href="./site.webmanifest">',

  /* Brand cream, not a generic blue. Split by scheme so the mobile toolbar
     matches the page ground rather than fighting it. */
  '<meta name="theme-color" content="#FEF7ED" media="(prefers-color-scheme: light)">',
  '<meta name="theme-color" content="#2A1D15" media="(prefers-color-scheme: dark)">',

  /* twitter:site is deliberately absent — the studio has Facebook, Instagram
     and Google, but no X account. Inventing a handle would attribute the
     brand to somebody else's profile. Add it here if one is ever created. */
].join('\n');

/* Every page has its own card (scripts/og-images.mjs). The source HTML
   deliberately carries no og:image at all — two og:image tags would leave
   crawlers taking the first one, which is exactly the kind of failure that
   looks fine in the markup and wrong on the card. */
const OG_DIR = BASE + 'assets/og/';
const card = (slug, subject) => {
  const alt = `${subject} — Chic Nail &amp; Head Spa, Plain City, Ohio`;
  const url = `${OG_DIR}${slug}.jpg`;
  return [
    `<meta property="og:image" content="${url}">`,
    `<meta property="og:image:secure_url" content="${url}">`,
    '<meta property="og:image:type" content="image/jpeg">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    `<meta property="og:image:alt" content="${alt}">`,
    // X falls back to og:title/description/image, so those aren't repeated —
    // but it reads twitter:image:alt specifically, which has no og fallback.
    `<meta name="twitter:image:alt" content="${alt}">`,
  ].join('\n');
};

/* index.html declares og:type="business.business", which is only well-formed
   with contact and location properties attached. They're page-specific in the
   sense that only the homepage claims that type, so they're kept apart from
   SHARED_META rather than emitted on all thirteen pages. */
const BUSINESS_META = [
  '<meta property="business:contact_data:street_address" content="12076 Sycamore Trace">',
  '<meta property="business:contact_data:locality" content="Plain City">',
  '<meta property="business:contact_data:region" content="OH">',
  '<meta property="business:contact_data:postal_code" content="43064">',
  '<meta property="business:contact_data:country_name" content="United States">',
  '<meta property="business:contact_data:phone_number" content="+1-614-389-9999">',
  '<meta property="business:contact_data:website" content="https://chicnailheadspa.com">',
  '<meta property="place:location:latitude" content="40.1866634">',
  '<meta property="place:location:longitude" content="-83.2028395">',
].join('\n');

async function inject(file, html, head = '') {
  const p = resolve(dist, file);
  let src = await readFile(p, 'utf8');
  if (!src.includes('<div id="root"')) {
    console.warn(`prerender: root not found in ${file}`);
    return;
  }
  // Insert body markup inside the (possibly attributed) #root div.
  src = src.replace(/(<div id="root"[^>]*>)<\/div>/, `$1${html}</div>`);
  if (src.includes('</head>')) src = src.replace('</head>', `${LD}\n${SHARED_META}\n${head}\n</head>`);
  await writeFile(p, src);
  console.log(`prerendered ${file}`);
}

const crumb = (trail) => renderBreadcrumb(trail);
const home = { name: 'Home', url: BASE };
const services = { name: 'Services', url: BASE + 'services-accordion.html' };
// `art` was missing, so nail-art fell through to its raw slug — which was
// being published to Google as breadcrumb name "nail-art".
const LABELS = { pedi: 'Pedicure', mani: 'Manicure', acrylic: 'Acrylic', gelx: 'Gel-X', dip: 'Dip Powder', headspa: 'Head Spa', wax: 'Waxing', kids: 'Kids', extras: 'Extras', art: 'Nail Art' };

await inject('index.html', renderHome(), card('home', 'Luxury nail care and a restorative head spa') + '\n' + BUSINESS_META);
await inject('services-accordion.html', renderServices(), card('services', 'The full service menu and pricing') + '\n' + crumb([home, services]));
await inject('book.html', renderBook(), card('book', 'Book an appointment online') + '\n' + crumb([home, { name: 'Book Online', url: BASE + 'book.html' }]));

for (const c of CATEGORIES) {
  const label = LABELS[c.cat] || c.slug;
  await inject(`${c.slug}.html`, renderCategory(c.cat), card(c.slug, label) + '\n' + crumb([
    home, services, { name: label, url: `${BASE}${c.slug}.html` },
  ]));
}

// Gallery folders hold .jpg/.png sources the pages never load (only the .webp
// derivatives are requested) — drop them from the deploy artifact.
const galleryDir = resolve(dist, 'assets/gallery');
let dropped = 0;
for (const theme of await readdir(galleryDir, { withFileTypes: true })) {
  if (!theme.isDirectory()) continue;
  for (const f of await readdir(resolve(galleryDir, theme.name))) {
    if (/\.(jpe?g|png)$/i.test(f)) { await unlink(resolve(galleryDir, theme.name, f)); dropped++; }
  }
}
if (dropped) console.log(`dropped ${dropped} gallery source image(s) from dist`);
