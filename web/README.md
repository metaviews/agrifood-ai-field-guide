# Web (Layer 3)

Astro-built static website for the Agrifood AI Field Guide knowledge base. Deployed via Cloudflare Pages to `agrifood.metaviews.ca`.

## Architecture

- **SSG**: [Astro](https://astro.build/) (static output, `output: 'static'`)
- **Content collections**: five — `units`, `scans`, `quotes`, `talks`, `archetypes`. Each collection's `loader.base` points at the corresponding directory in the repo root, so the same `.md` files render as both raw markdown on GitHub and styled pages on the website. Single source of truth.
- **Search**: [Pagefind](https://pagefind.app/) — static-friendly, builds index at deploy time, no server required.
- **Hosting**: Cloudflare Pages, custom domain `agrifood.metaviews.ca`.
- **JS posture**: no-JS baseline + selective enhancement. The site is fully navigable without JavaScript; only the search page requires JS.
- **No wrangler.** Pages auto-deploys from the build output directory. Wrangler CLI is for Workers (or Direct Upload to Pages); not needed when Pages' GitHub integration is doing the build/deploy.

## Setup (one-time, manual)

The Cloudflare Workers + Pages unified UI has a known trap: a project can be silently classified as a Worker instead of a Page, which hides the **Build output directory** field and shows only the Workers Builds fields (build/deploy/version/root). When that happens, the auto-generated API token lacks Pages permissions and deploys fail with auth errors.

**Step 1 — Create the project as Pages (not Worker):**

1. Cloudflare dashboard → **Workers & Pages** → **Create application**
2. Select **Pages** (NOT "Workers") → **Connect to Git**
3. Select `metaviews/agrifood-ai-field-guide`
4. Configure:
   - Project name: `agrifood-ai-field-guide`
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: **`web/dist`** ← Pages-specific field, only visible if project is correctly classified as Pages
   - Root directory: leave blank (the top-level `package.json` runs `cd web && npm install && npm run build`)
   - Environment variables: none required
5. Save and Deploy

**Step 1b — If the project is already created but classified as Worker:**

1. Open the project → **Settings** page
2. Scroll to the bottom — there is a small link: **"Shift to Pages"**
3. Click it. Cloudflare reclassifies the deployment as Pages and the Pages-specific fields appear.
4. Then set the Build output directory to `web/dist` and deploy again.

**Step 2 — Custom domain:**

1. Project → **Custom domains** → **Add domain**
2. Add `agrifood.metaviews.ca`
3. If `metaviews.ca` is already on Cloudflare DNS, the CNAME is provisioned automatically. Otherwise add a CNAME record at the registrar pointing to the Pages project hostname.

**Step 3 — Verify:**

After the next push to `main` triggers a build, the build log should show:

```
> cd web && npm install && npm run build
...
> astro build && pagefind --site dist
...
[build] 201 page(s) built
...
Success: Build completed
```

(NO "Executing user deploy command" line — Pages auto-deploys from the build output directory. The deploy/version command fields don't appear in the Pages UI.)

Visit `agrifood.metaviews.ca` — should serve the actual site, not "hello world".

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
├── public/                  # static assets (cover.png)
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
- No wrangler dependency. Pages' GitHub integration handles build + deploy; wrangler is only needed for Direct Upload (manual `wrangler pages deploy` from a local machine).

## Troubleshooting

### "Hello world" instead of the site

Your project is classified as a Worker. Go to Settings → scroll to bottom → click "Shift to Pages". See Step 1b above.

### `wrangler pages deploy` fails with `Authentication error [code: 10000]`

Don't use wrangler. The Pages GitHub integration does the deploy. If you do need wrangler (e.g., for Direct Upload), create a user API token with `Cloudflare Pages: Edit` permission at https://dash.cloudflare.com/profile/api-tokens and set `CLOUDFLARE_API_TOKEN` to its value.

### Build succeeds but Pages doesn't update

- Check the project is Pages, not Worker (Step 1b)
- Confirm Build output directory is `web/dist` (not `dist`)
- Confirm the build actually wrote files to `web/dist/` — look at the build log for `[build] directory: .../web/dist/`