// Inject prerendered body HTML into the built pages so crawlers (and first paint)
// get real content. Runs after `vite build` + the SSR build. The client still
// mounts and takes over on load.
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderHome, renderServices, renderJsonLd } from '../dist-ssr/entry-server.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, '../dist');
const LD = renderJsonLd();

async function inject(file, html) {
  const p = resolve(dist, file);
  let src = await readFile(p, 'utf8');
  if (!src.includes('<div id="root"></div>')) {
    console.warn(`prerender: root placeholder not found in ${file}`);
    return;
  }
  src = src.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  // Inject (or refresh) the LocalBusiness structured data into <head>.
  if (src.includes('</head>')) src = src.replace('</head>', `${LD}\n</head>`);
  await writeFile(p, src);
  console.log(`prerendered ${file} (${html.length.toLocaleString()} chars body + JSON-LD)`);
}

await inject('index.html', renderHome());
await inject('services-accordion.html', renderServices());
