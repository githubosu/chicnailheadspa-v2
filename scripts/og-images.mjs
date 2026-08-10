/* Build a per-page Open Graph card (1200x630 JPEG) for every route.
   Run: npm run og:images

   Output is committed, so neither the build nor the runtime depends on this
   script — same arrangement as optimize-images.mjs.

   JPEG on purpose. The site's own photography is WebP, but several link
   scrapers still handle WebP poorly or not at all, and a card that fails to
   render is worse than a slightly larger file.

   The two typefaces are vendored under scripts/fonts rather than pulled from
   Google, so a regenerate works offline and can't silently fall back to a
   different face — text is rasterised here, so a fallback would be baked into
   the image permanently instead of just looking wrong for one paint. */
import sharp from 'sharp';
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = resolve(__dirname, '../public/assets');
const OUT = resolve(ASSETS, 'og');

const W = 1200, H = 630;

/* Brand tokens, mirrored from public/tokens/colors.css. */
const CREAM = '#FEF7ED', HONEY = '#D9BD8A', GILT = '#B98E4F', ESPRESSO = '42,29,21';

/* eyebrow / title / accent are the three lines on the card. `accent` is set in
   italic honey, the same emphasis the site uses in its headings. */
const CARDS = [
  { out: 'home',        img: 'hero-poster.webp',  eyebrow: 'Plain City, Ohio',   title: 'Chic Nail &',      accent: 'Head Spa' },
  { out: 'services',    img: 'services-hero.webp', eyebrow: 'The Menu',          title: 'Services &',       accent: 'pricing' },
  { out: 'book',        img: 'img/salon-1.webp',  eyebrow: 'Reserve your time',  title: 'Book',             accent: 'online' },
  { out: 'pedicure',    img: 'img/nail-1.webp',   eyebrow: 'Feet',               title: '',                 accent: 'Pedicure' },
  { out: 'manicure',    img: 'img/nail-2.webp',   eyebrow: 'Hands',              title: '',                 accent: 'Manicure' },
  { out: 'acrylic',     img: 'img/nail-3.webp',   eyebrow: 'Extensions',         title: '',                 accent: 'Acrylic' },
  { out: 'gel-x',       img: 'img/nail-4.webp',   eyebrow: 'Extensions',         title: '',                 accent: 'Gel-X' },
  { out: 'dip-powder',  img: 'img/nail-5.webp',   eyebrow: 'Color',             title: '',                 accent: 'Dip Powder' },
  { out: 'head-spa',    img: 'img/salon-2.webp',  eyebrow: 'Coming soon',        title: '',                 accent: 'Head Spa' },
  { out: 'waxing',      img: 'img/salon-3.webp',  eyebrow: 'Smooth',             title: '',                 accent: 'Waxing' },
  { out: 'kids',        img: 'img/nail-6.webp',   eyebrow: 'Ages 10 & under',    title: '',                 accent: 'Kids' },
  { out: 'extras',      img: 'img/nail-7.webp',   eyebrow: 'Add to any service', title: '',                 accent: 'Extras' },
  { out: 'nail-art',    img: 'img/nail-8.webp',   eyebrow: 'Add to any service', title: '',                 accent: 'Nail Art' },
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Cormorant is a narrow old-style face; ~0.46em average advance is close
   enough to keep long words like "Dip Powder" inside the safe area. */
function titleSize(text) {
  const len = text.length;
  if (len <= 12) return 104;
  if (len <= 18) return 88;
  if (len <= 24) return 72;
  return 60;
}

function overlay({ eyebrow, title, accent }) {
  const line = title ? `${title} ${accent}` : accent;
  const fs = titleSize(line);
  const baseline = title ? H - 132 : H - 140;

  // Two <tspan>s on one <text> so the accent sits on the same baseline and the
  // rasteriser handles the advance, rather than guessing an x offset.
  // The gap between the two words is an explicit dx, not whitespace. The
  // rasteriser collapses a trailing space inside a tspan and swallows &#160;
  // as well, which runs the words together; dx is measured, not parsed.
  const titleMarkup = title
    ? `<tspan fill="${CREAM}">${esc(title)}</tspan><tspan fill="${HONEY}" font-style="italic" dx="0.3em">${esc(accent)}</tspan>`
    : `<tspan fill="${HONEY}" font-style="italic">${esc(accent)}</tspan>`;

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="scrim" x1="0" y1="1" x2="0.55" y2="0">
      <stop offset="0%"   stop-color="rgba(${ESPRESSO},0.94)"/>
      <stop offset="46%"  stop-color="rgba(${ESPRESSO},0.70)"/>
      <stop offset="100%" stop-color="rgba(${ESPRESSO},0.24)"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#scrim)"/>
  <rect x="72" y="${baseline - fs - 46}" width="54" height="2" fill="${GILT}"/>
  <text x="72" y="${baseline - fs - 18}" font-family="Jost" font-size="21" font-weight="500"
        letter-spacing="4.6" fill="${HONEY}">${esc(String(eyebrow).toUpperCase())}</text>
  <text x="72" y="${baseline}" font-family="Cormorant Garamond" font-size="${fs}" font-weight="500">${titleMarkup}</text>
  <text x="72" y="${H - 58}" font-family="Jost" font-size="20" font-weight="500"
        letter-spacing="1.1" fill="rgba(254,247,237,0.74)">chicnailheadspa.com &#183; Plain City, OH</text>
</svg>`);
}

await mkdir(OUT, { recursive: true });
const results = [];

for (const card of CARDS) {
  const src = resolve(ASSETS, card.img);
  if (!existsSync(src)) { console.warn(`og: missing source ${card.img} — skipped`); continue; }

  const buf = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'attention' })   // keep the subject, not the geometric centre
    .composite([{ input: overlay(card), top: 0, left: 0 }])
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toBuffer();

  const file = resolve(OUT, `${card.out}.jpg`);
  await writeFile(file, buf);
  const meta = await sharp(buf).metadata();
  results.push({ file: `${card.out}.jpg`, dims: `${meta.width}x${meta.height}`, kb: +(buf.length / 1024).toFixed(1) });
}

console.table(results);
const bad = results.filter((r) => r.dims !== `${W}x${H}` || r.kb > 300);
console.log(bad.length ? `PROBLEM: ${JSON.stringify(bad)}` : `all ${results.length} cards ${W}x${H}, under 300 KB`);
