/* Optimize images to WebP. Run: npm run optimize:images
   1) Generic set: download the studio's CDN photos once -> public/assets/img/
   2) Seasonal sets: convert any nail-1..9.(jpg|jpeg|png) you've dropped into
      public/assets/gallery/<theme>/ -> nail-1..9.webp (what the gallery loads).
   Output is committed so the build/runtime never depends on the external CDN. */
import sharp from 'sharp';
import { mkdir, writeFile, readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_OUT = resolve(__dirname, '../public/assets/img');
const GALLERY = resolve(__dirname, '../public/assets/gallery');
const CDN = 'https://chicnailheadspa.com/assets/images/';

/* ── 1) Generic set from the CDN ─────────────────────────────────────────── */
const JOBS = [];
for (let n = 1; n <= 9; n++) JOBS.push({ out: `nail-${n}.webp`, src: `${CDN}gallery/nail-${n}.png`, w: 700, h: 700 });
for (let n = 1; n <= 4; n++) JOBS.push({ out: `salon-${n}.webp`, src: `${CDN}gallery/salon-${n}.png`, w: 1600, h: 1100 });

async function genericSet() {
  await mkdir(IMG_OUT, { recursive: true });
  let total = 0, count = 0;
  for (const job of JOBS) {
    let res;
    try { res = await fetch(job.src); } catch { console.warn(`skip ${job.out}: fetch failed`); continue; }
    if (!res.ok) { console.warn(`skip ${job.out}: ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const webp = await sharp(buf).resize(job.w, job.h, { fit: 'cover' }).webp({ quality: 78 }).toBuffer();
    await writeFile(resolve(IMG_OUT, job.out), webp);
    total += webp.length; count++;
    console.log(`  img/${job.out.padEnd(13)} ${(webp.length / 1024).toFixed(0)} KB`);
  }
  console.log(`Generic: ${count} images, ${(total / 1024).toFixed(0)} KB\n`);
}

/* ── 2) Seasonal sets you've dropped into public/assets/gallery/<theme>/ ──── */
const SRC_RE = /^nail-([1-9])\.(jpe?g|png)$/i;

async function seasonalSets() {
  let themes;
  try { themes = await readdir(GALLERY, { withFileTypes: true }); } catch { return; }
  let totalThemes = 0, totalImgs = 0;
  for (const d of themes) {
    if (!d.isDirectory()) continue;
    const dir = join(GALLERY, d.name);
    const files = (await readdir(dir)).filter((f) => SRC_RE.test(f));
    if (!files.length) continue;
    for (const f of files) {
      const n = f.match(SRC_RE)[1];
      const buf = await readFile(join(dir, f));
      const webp = await sharp(buf).resize(700, 700, { fit: 'cover' }).webp({ quality: 78 }).toBuffer();
      await writeFile(join(dir, `nail-${n}.webp`), webp);
      totalImgs++;
    }
    totalThemes++;
    console.log(`  gallery/${d.name}: ${files.length} → webp`);
  }
  if (totalThemes) console.log(`Seasonal: ${totalImgs} images across ${totalThemes} theme(s)\n`);
  else console.log('Seasonal: no source photos found yet (drop nail-1..9.jpg into a theme folder)\n');
}

async function run() {
  await genericSet();
  await seasonalSets();
  console.log('Done.');
}
run().catch((e) => { console.error(e); process.exit(1); });
