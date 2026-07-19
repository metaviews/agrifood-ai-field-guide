# Web (Layer 3)

Astro-built static website for the Agrifood AI Field Guide knowledge base. Deployed via Cloudflare Workers Static Assets to `agrifood.metaviews.ca`.

## Architecture

- **SSG**: [Astro](https://astro.build/) (static output, `output: 'static'`)
- **Content collections**: five — `units`, `scans`, `quotes`, `talks`, `archetypes`. Each collection's `loader.base` points at the corresponding directory in the repo root, so the same `.md` files render as both raw markdown on GitHub and styled pages on the website. Single source of truth.
- **Search**: [Pagefind](https://pagefind.app/) — static-friendly, builds index at deploy time, no server required.
- **Hosting**: Cloudflare Workers (Static Assets), custom domain `agrifood.metaviews.ca`.
- **JS posture**: no-JS baseline + selective enhancement. The site is fully navigable without JavaScript; only the search page requires JS.
- **No wrangler in CI.** The Cloudflare Workers Git integration handles build + deploy automatically; wrangler is only used locally for `wrangler dev` (not in this project).

## Why Workers (not Pages)

Cloudflare froze Pages for new features in April 2025. New static-site deployments now use **Cloudflare Workers Static Assets** — a Worker that serves the static build output. Existing Pages projects keep working but no new features land there. As of 2026, the unified "Workers & Pages" UI in the dashboard is the Workers UI with a `[assets]` block in `wrangler.toml` handling the static-file serving.

## Setup (one-time, manual)

**Step 1 — Connect the repo to Cloudflare:**

1. Cloudflare dashboard → **Workers & Pages** → **Create application**
2. Select **Import a repository** (or "Pages" if the legacy path is still visible)
3. Choose GitHub → select `metaviews/agrifood-ai-field-guide`
4. Configure:
   - Project name: `agrifood-ai-field-guide`
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: **`web/dist`** ← only visible if the project is recognised as Pages. On the unified Workers UI, this field may be hidden; if so, set it via `wrangler.toml` (see below) or pass `--assets web/dist` to wrangler.
   - Root directory: leave blank (the top-level `package.json` runs `cd web && npm install && npm run build`)
5. Save and Deploy

**Step 1b — If the dashboard doesn't show the build output directory field:**

The unified Workers UI uses `wrangler.toml` for some configuration. Make sure `web/wrangler.toml` contains:

```toml
name = "agrifood-ai-field-guide"
compatibility_date = "2026-07-19"
pages_build_output_dir = "dist"
```

(The `web/wrangler.toml` is already written with this configuration.)

**Step 2 — Custom domain:**

1. Project → **Custom domains** → **Add domain**
2. Add `agrifood.metaviews.ca`
3. If `metaviews.ca` is already on Cloudflare DNS, the CNAME is provisioned automatically. Otherwise add a CNAME record at the registrar pointing to the project hostname.

**Step 3 — Verify:**

After the next push to `main`, the build log should show:

```
> cd web && npm install && npm run build
> astro build && pagefind --site dist
...
[build] 201 page(s) built
[build] directory: .../web/dist/
...
Build completed successfully
```

Visit `agrifood.metaviews.ca` → should serve the actual site.

## Local development

```bash
cd web
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to web/dist/, runs Pagefind
npm run preview  # preview the built site
```

## File layout

```
web/
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── wrangler.toml              # Cloudflare Workers/Pages config
├── public/                    # static assets (cover.png)
├── src/
│   ├── content.config.ts      # Zod schemas for the five collections
│   ├── styles/global.css
│   ├── components/Nav.astro
│   ├── layouts/Base.astro
│   └── pages/                 # one directory per collection + index + search
└── README.md
```

## Relationship to the source repository

The web app reads directly from `units/`, `scans/`, `quotes/`, `talks/`, `talks/archetypes/`, and `assets/` at the repo root via Astro content-collections `loader.base` paths. Editing those `.md` files and pushing to `main` triggers a rebuild and redeploy automatically — no manual copy step.

## What's not here

- Source attribution is the corpus's responsibility, not the web layer's. Each unit already has a `## Sources` section; the website renders it as-is.
- The deck-generation tooling (Layer 4) is a separate downstream project; this web app does not produce slides.
- Analytics, comments, and other dynamic features are intentionally absent. The corpus speaks for itself.
- No wrangler in CI. The Cloudflare Workers Git integration handles build + deploy; wrangler is only needed for local development or manual Direct Upload (drag-and-drop of `web/dist/` to the dashboard).

## Troubleshooting

### "Hello world" instead of the site

The default Worker stub is being served. Likely causes:
1. **Wrong build output directory.** The build wrote to `web/dist/` but the project is configured to look elsewhere. Confirm the build output directory field (or `pages_build_output_dir` in `wrangler.toml`) matches `web/dist`.
2. **The Pages project was created as a Worker.** Some Cloudflare UI flows silently classify static-site projects as Workers and serve the default hello world stub. In the dashboard: project → Settings → check if there is a "Build output directory" field. If not, the project is a Worker; delete it and create again as Pages.
3. **DNS is pointing to the wrong resource.** Confirm the `agrifood.metaviews.ca` CNAME points at the Pages/Workers project hostname, not a different resource.

### Build succeeds but deploy fails with `Authentication error [code: 10000]`

The auto-injected `CLOUDFLARE_API_TOKEN` lacks permissions for the operation. Don't use wrangler in the deploy command — the Git integration handles deploy automatically without wrangler.

### `pages_build_output_dir` mismatch

If using the legacy Pages UI: set Build output directory to `web/dist` in the dashboard, or `pages_build_output_dir = "dist"` in `web/wrangler.toml` (since the wrangler.toml runs from `web/`).

If using the new Workers UI: configure the `[assets]` block in `wrangler.toml`:
```toml
[assets]
directory = "./dist"
binding = "ASSETS"
not_found_handling = "404-page"
```