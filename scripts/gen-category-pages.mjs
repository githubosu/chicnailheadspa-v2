/* Generates the per-category SEO pages (<slug>.html) at the repo root from
   src/categories.js. Run: node scripts/gen-category-pages.mjs
   Kept at root so the shared header/footer's relative paths resolve. */
import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORIES } from '../src/categories.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BASE = 'https://githubosu.github.io/chicnailheadspa-v2/';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function page(c) {
  const title = `${c.seoTitle} — Chic Nail & Head Spa`;
  const url = `${BASE}${c.slug}.html`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(c.seoDesc)}">
<link rel="canonical" href="${url}">
<link rel="icon" href="./assets/favicon.png">
<link rel="apple-touch-icon" href="./assets/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(c.seoTitle)} — Chic Nail & Head Spa">
<meta property="og:description" content="${esc(c.seoDesc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${BASE}assets/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./styles.css">
<link rel="stylesheet" href="./assets/phosphor/phosphor-subset.css">
<style>
  html, body { margin: 0; background: var(--surface-page); }
  #root { min-height: 100vh; }
  @keyframes evoFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes evoBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }
</style>
</head>
<body>
<div id="root" data-cat="${c.cat}"></div>
<script type="module" src="/src/category.jsx"></script>
</body>
</html>
`;
}

for (const c of CATEGORIES) {
  await writeFile(resolve(ROOT, `${c.slug}.html`), page(c));
  console.log(`wrote ${c.slug}.html`);
}
console.log(`\n${CATEGORIES.length} category pages generated.`);
