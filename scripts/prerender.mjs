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

async function inject(file, html, head = '') {
  const p = resolve(dist, file);
  let src = await readFile(p, 'utf8');
  if (!src.includes('<div id="root"')) {
    console.warn(`prerender: root not found in ${file}`);
    return;
  }
  // Insert body markup inside the (possibly attributed) #root div.
  src = src.replace(/(<div id="root"[^>]*>)<\/div>/, `$1${html}</div>`);
  if (src.includes('</head>')) src = src.replace('</head>', `${LD}${head}\n</head>`);
  await writeFile(p, src);
  console.log(`prerendered ${file}`);
}

const crumb = (trail) => renderBreadcrumb(trail);
const home = { name: 'Home', url: BASE };
const services = { name: 'Services', url: BASE + 'services-accordion.html' };
const LABELS = { pedi: 'Pedicure', mani: 'Manicure', acrylic: 'Acrylic', gelx: 'Gel-X', dip: 'Dip Powder', headspa: 'Head Spa', wax: 'Waxing', kids: 'Kids', extras: 'Extras' };

await inject('index.html', renderHome());
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
