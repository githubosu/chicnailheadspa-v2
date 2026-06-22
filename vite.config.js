import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';

// Every root-level .html is a build entry (index, services, + the category pages).
const htmlInputs = Object.fromEntries(
  readdirSync(__dirname)
    .filter((f) => f.endsWith('.html'))
    .map((f) => [f.replace(/\.html$/, ''), resolve(__dirname, f)]),
);

// GitHub Pages serves this project at /chicnailheadspa-v2/.
export default defineConfig({
  base: '/chicnailheadspa-v2/',
  // JSX compiled to React.createElement; React is provided as a global (window.React)
  // by src/react-global.js so the prebuilt _ds_bundle.js shares the same instance.
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: htmlInputs,
    },
  },
});
