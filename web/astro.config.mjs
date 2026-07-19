// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkStripMeta } from './src/remark-strip-meta.mjs';

// Astro v5 content-layer API uses loader.base paths in src/content.config.ts
// to point collections at the repo-root content directories. This keeps a
// single source of truth: the same .md files render as raw markdown on
// GitHub and as styled pages on the website.
//
// The remarkStripMeta plugin strips corpus-internal H2 sections (Freshness,
// Links, Cycle status, G-NNN/C-NNN cross-refs, etc.) so the website shows
// only visitor-facing prose. Source files are unchanged.
export default defineConfig({
  site: 'https://agrifood.metaviews.ca',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  markdown: {
    remarkPlugins: [remarkStripMeta],
  },
});