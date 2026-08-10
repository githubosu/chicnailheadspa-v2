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
const OG_IMAGE = BASE + 'assets/og-image.jpg';
const OG_ALT = 'A manicured hand resting on warm linen at Chic Nail & Head Spa, Plain City, Ohio';

const SHARED_META = [
  '<meta property="og:site_name" content="Chic Nail &amp; Head Spa">',
  '<meta property="og:locale" content="en_US">',
  `<meta property="og:image:secure_url" content="${OG_IMAGE}">`,
  '<meta property="og:image:type" content="image/jpeg">',
  '<meta property="og:image:width" content="1200">',
  '<meta property="og:image:height" content="630">',
  `<meta property="og:image:alt" content="${OG_ALT}">`,
  // X falls back to og:title/description/image, so those aren't repeated —
  // but it reads twitter:image:alt specifically, which has no og fallback.
  `<meta name="twitter:image:alt" content="${OG_ALT}">`,
].join('\n');

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
const LABELS = { pedi: 'Pedicure', mani: 'Manicure', acrylic: 'Acrylic', gelx: 'Gel-X', dip: 'Dip Powder', headspa: 'Head Spa', wax: 'Waxing', kids: 'Kids', extras: 'Extras' };

await inject('index.html', renderHome(), BUSINESS_META);
await inject('services-accordion.html', renderServices(), crumb([home, services]));
await inject('book.html', renderBook(), crumb([home, { name: 'Book Online', url: BASE + 'book.html' }]));

for (const c of CATEGORIES) {
  await inject(`${c.slug}.html`, renderCategory(c.cat), crumb([
    home, services, { name: LABELS[c.cat] || c.slug, url: `${BASE}${c.slug}.html` },
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
