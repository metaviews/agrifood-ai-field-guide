# Web (Layer 3)

Astro-built static website for the Agrifood AI Field Guide knowledge base. Deployed via Cloudflare Pages to `agrifood.metaviews.ca`.

## Architecture

- **SSG**: [Astro](https://astro.build/) (static output)
- **Content collections**: five — `units`, `scans`, `quotes`, `talks`, `archetypes`. Each collection's `loader.base` points at the corresponding directory in the repo root, so the same `.md` files render as both raw markdown on GitHub and styled pages on the website. Single source of truth.
- **Search**: [Pagefind](https://pagefind.app/) — static-friendly, builds index at deploy time, no server required.
- **Hosting**: Cloudflare Pages, custom domain `agrifood.metaviews.ca`.
- **JS posture**: no-JS baseline + selective enhancement. The site is fully navigable without JavaScript; only the search page requires JS.

## Setup (one-time, manual)

A top-level `package.json` at the repo root delegates to `web/` so the dashboard build command can stay simple.

1. Cloudflare dashboard → **Pages** → **Create application** → **Connect to Git**
2. Select `metaviews/agrifood-ai-field-guide`
3. Configure:
   - Project name: `agrifood-ai-field-guide`
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `web/dist`
   - Root directory: `/`
   - Deploy command: `true` *(no-op; Pages auto-deploys the build output once the GitHub integration is configured. Cloudflare requires a value in this field but doesn't actually use it when the GitHub app is connected.)*
   - Version command: `true` *(same reason)*
   - Environment variables: none required
4. **Custom domains** → add `agrifood.metaviews.ca`
5. DNS: if `metaviews.ca` is on Cloudflare, the CNAME is provisioned automatically; otherwise add a CNAME record at the registrar pointing to the Pages project hostname.

The top-level `package.json` runs `cd web && npm install && npm run build`, so the dashboard's `npm run build` does the right thing regardless of cwd.

After the one-time setup, every push to `main` builds and deploys automatically. Pull requests get preview deployments (configured via Cloudflare Pages' built-in PR previews).

## Local development

```bash
cd web
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/, runs Pagefind
npm run preview  # preview the built site
```

## File layout

```
web/
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── wrangler.toml
├── public/                  # static assets (cover.png, favicon)
├── src/
│   ├── content.config.ts    # Zod schemas for the five collections
│   ├── styles/global.css
│   ├── components/Nav.astro
│   ├── layouts/Base.astro
│   └── pages/               # one directory per collection + index + search
└── README.md
```

## Relationship to the source repository

The web app reads directly from `units/`, `scans/`, `quotes/`, `talks/`, `talks/archetypes/`, and `assets/` at the repo root via Astro content-collections `loader.base` paths. Editing those `.md` files and pushing to `main` triggers a rebuild and redeploy automatically — no manual copy step.

## What's not here

- Source attribution is the corpus's responsibility, not the web layer's. Each unit already has a `## Sources` section; the website renders it as-is.
- The deck-generation tooling (Layer 4) is a separate downstream project; this web app does not produce slides.
- Analytics, comments, and other dynamic features are intentionally absent. The corpus speaks for itself.