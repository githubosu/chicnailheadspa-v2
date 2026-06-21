import { defineConfig } from 'vite';
import { resolve } from 'node:path';

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
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services-accordion.html'),
      },
    },
  },
});
