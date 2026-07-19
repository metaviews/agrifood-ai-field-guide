// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Astro v5 content-layer API uses loader.base paths in src/content.config.ts
// to point collections at the repo-root content directories. This keeps a
// single source of truth: the same .md files render as raw markdown on
// GitHub and as styled pages on the website.
export default defineConfig({
  site: 'https://agrifood.metaviews.ca',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});