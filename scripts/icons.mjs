/* Generate the square favicon / app-icon set from the monogram artwork.
   Run: npm run icons

   The source apple-touch-icon.png ships 185x210 — not square. iOS and Android
   both expect square art and will letterbox or stretch anything else, so it is
   padded out to a square on the brand cream (#FEF7ED, sampled from the file's
   own corner) rather than cropped, which would clip the arch.

   Note the source is only 210px on its long edge, so the 512 icon is an
   upscale and will be a little soft. It is correct and usable, but if the
   original vector art is available, exporting 512 from that is better. */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = resolve(__dirname, '../public/assets');
const SRC = resolve(ASSETS, 'apple-touch-icon.png');
const CREAM = { r: 254, g: 247, b: 237, alpha: 1 };

const TARGETS = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon-180.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

const meta = await sharp(SRC).metadata();
const side = Math.max(meta.width, meta.height);

// Pad to square first, then resize once from the squared master, so every
// output shares identical framing.
const square = await sharp(SRC)
  .extend({
    top: Math.floor((side - meta.height) / 2),
    bottom: Math.ceil((side - meta.height) / 2),
    left: Math.floor((side - meta.width) / 2),
    right: Math.ceil((side - meta.width) / 2),
    background: CREAM,
  })
  .png()
  .toBuffer();

const rows = [];
for (const t of TARGETS) {
  const buf = await sharp(square)
    .resize(t.size, t.size, { kernel: 'lanczos3', fit: 'fill' })
    .png({ compressionLevel: 9, palette: t.size <= 48 })
    .toBuffer();
  await writeFile(resolve(ASSETS, t.name), buf);
  const m = await sharp(buf).metadata();
  rows.push({ file: t.name, dims: `${m.width}x${m.height}`, kb: +(buf.length / 1024).toFixed(1) });
}

console.table(rows);
const bad = rows.filter((r) => r.dims.split('x')[0] !== r.dims.split('x')[1]);
console.log(bad.length ? `PROBLEM: non-square ${JSON.stringify(bad)}` : `all ${rows.length} icons square (source master ${side}x${side})`);
