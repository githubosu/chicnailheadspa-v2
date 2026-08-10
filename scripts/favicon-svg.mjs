/* Vectorize the monogram into an SVG favicon.
   Run: npm run icons:svg

   The mark only exists as raster art (185x210 PNG), so this traces the real
   contours with potrace rather than redrawing them — a hand-drawn imitation
   would be an approximation of the logo, which is not the same thing.

   The source is upscaled before tracing. potrace follows the pixel boundary,
   so tracing a 210px original bakes its staircase into the path; interpolating
   up first gives the tracer smooth edges to follow, and the extra detail is
   discarded again by curve fitting.

   Output carries a dark-scheme rule. An SVG favicon is the only icon format
   browsers re-evaluate against prefers-color-scheme, so the cream ground can
   drop away and the mark lift to honey on a dark toolbar instead of sitting in
   a bright cream tile. */
import sharp from 'sharp';
import potrace from 'potrace';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = resolve(__dirname, '../public/assets');

const CREAM = { r: 254, g: 247, b: 237, alpha: 1 };
const MARK_LIGHT = '#521826';  // sampled from the artwork
const MARK_DARK = '#D9BD8A';   // honey-300, the site's accent on dark grounds
const UPSCALE = 4;

const meta = await sharp(resolve(ASSETS, 'apple-touch-icon.png')).metadata();
const side = Math.max(meta.width, meta.height);

// Square first (pad, never crop — cropping clips the arch), then upscale.
const master = await sharp(resolve(ASSETS, 'apple-touch-icon.png'))
  .extend({
    top: Math.floor((side - meta.height) / 2), bottom: Math.ceil((side - meta.height) / 2),
    left: Math.floor((side - meta.width) / 2), right: Math.ceil((side - meta.width) / 2),
    background: CREAM,
  })
  .resize(side * UPSCALE, side * UPSCALE, { kernel: 'lanczos3' })
  .greyscale()
  .normalise()
  .png()
  .toBuffer();

const traced = await new Promise((ok, fail) => {
  potrace.trace(master, {
    threshold: 170,        // mark is far darker than the cream ground
    turdSize: 12,          // drop speckles the upscale may have introduced
    optCurve: true,
    optTolerance: 0.4,
    alphaMax: 1,
  }, (err, svg) => (err ? fail(err) : ok(svg)));
});

// potrace emits a fixed-size <svg> with black fills. Rebuild the wrapper so the
// icon is a clean square viewBox with themable fills.
const pathData = [...traced.matchAll(/<path[^>]*\bd="([^"]+)"/g)].map((m) => m[1]);
if (!pathData.length) throw new Error('trace produced no paths');
const box = side * UPSCALE;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${box} ${box}" role="img" aria-label="Chic Nail &amp; Head Spa">
  <style>
    .ground { fill: ${CREAM ? '#FEF7ED' : 'none'}; }
    .mark   { fill: ${MARK_LIGHT}; }
    @media (prefers-color-scheme: dark) {
      /* Let the dark toolbar show through and lift the mark to honey, rather
         than punching a bright cream tile into it. */
      .ground { fill: none; }
      .mark   { fill: ${MARK_DARK}; }
    }
  </style>
  <rect class="ground" width="${box}" height="${box}" rx="${Math.round(box * 0.12)}"/>
  <g class="mark">
${pathData.map((d) => `    <path fill-rule="evenodd" d="${d}"/>`).join('\n')}
  </g>
</svg>
`;

const out = resolve(ASSETS, 'favicon.svg');
await writeFile(out, svg);

// Rasterize the result back and compare against the original at icon sizes —
// a trace that silently loses the star or fills the counters would still be
// "valid SVG", so check the pixels, not just that a file was produced.
const check = [];
for (const px of [32, 180]) {
  const buf = await sharp(Buffer.from(svg)).resize(px, px).png().toBuffer();
  await writeFile(resolve(tmpdir(), `cnhs-trace-check-${px}.png`), buf);
  const stats = await sharp(buf).stats();
  check.push({ size: px, channels: stats.channels.length, meanLuma: +stats.channels[0].mean.toFixed(1) });
}
console.log(`paths: ${pathData.length}   svg: ${(svg.length / 1024).toFixed(1)} KB`);
console.table(check);
