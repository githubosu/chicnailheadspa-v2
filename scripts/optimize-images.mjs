/* Download the studio's CDN photos once, resize + convert to WebP, and self-host
   them under public/assets/img/. Run: npm run optimize:images
   Re-run any time to refresh. Output is committed so the build/runtime never
   depends on the external CDN. */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../public/assets/img');
const CDN = 'https://chicnailheadspa.com/assets/images/';

// name -> { src, size } ; gallery tiles are square, salon shots are wide.
const JOBS = [];
for (let n = 1; n <= 9; n++) JOBS.push({ out: `nail-${n}.webp`, src: `${CDN}gallery/nail-${n}.png`, w: 700, h: 700, fit: 'cover' });
for (let n = 1; n <= 4; n++) JOBS.push({ out: `salon-${n}.webp`, src: `${CDN}gallery/salon-${n}.png`, w: 1600, h: 1100, fit: 'cover' });

async function run() {
  await mkdir(OUT, { recursive: true });
  let total = 0;
  for (const job of JOBS) {
    const res = await fetch(job.src);
    if (!res.ok) { console.warn(`skip ${job.out}: ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const webp = await sharp(buf).resize(job.w, job.h, { fit: job.fit }).webp({ quality: 78 }).toBuffer();
    await writeFile(resolve(OUT, job.out), webp);
    total += webp.length;
    console.log(`${job.out.padEnd(14)} ${(webp.length / 1024).toFixed(0)} KB`);
  }
  console.log(`\nDone — ${JOBS.length} images, ${(total / 1024).toFixed(0)} KB total in public/assets/img/`);
}
run().catch((e) => { console.error(e); process.exit(1); });
