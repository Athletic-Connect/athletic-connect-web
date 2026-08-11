// @ts-check
import { defineConfig } from 'astro/config';

// Static marketing site. No SSR needed — Netlify just serves the built dist/.
// Set `site` to your production domain so canonical URLs and og:image resolve absolutely.
export default defineConfig({
  site: 'https://www.athleticconnectapp.com',
  build: {
    // Emit clean directory-style URLs (/features/ not /features.html)
    format: 'directory',
  },
});
