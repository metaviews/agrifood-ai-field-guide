# Agrifood AI Field Guide

A knowledge base and presentation framework for public education on the role of artificial intelligence across the agrifood sector.

## What this is

A maintainable, openly licensed knowledge base from which presentations on AI in agrifood can be assembled and re-assembled for different audiences.

The agrifood sector spans the full food value and supply chain: agricultural inputs, on-farm production, post-harvest handling and storage, processing, distribution and retail, consumption, and waste recovery. This guide covers AI's role across that whole chain, not just on-farm technology.

The audience for talks built from this guide varies. The presenter is a sector insider with a strong knowledge-translation practice; talks can be aimed at farmer co-operatives, students, policymakers, mixed public, or academic audiences. The KB is the substrate; the presenter does the translation. The shared aim across audiences is **literacy, accessibility, and explanation** — empowerment through literacy, not persuasion in any direction.

The stance is **curious, critical, and collaborative**. Not anti-AI. Not boosterish. Critical in the sense of asking who benefits, who bears the cost, what is and isn't being measured, and where the activity actually is and isn't.

## What this is not

Not a news feed. Not an academic literature review. Not a vendor catalogue. Not a single slide deck that happens to live in a repo.

## Why a field guide

A field guide is a *cumulative reference* — it implies the work is ongoing, the knowledge accumulates, and readers can come back to it. That matches the operating model better than words like "scan," "watch," or "overview," which imply snapshots of current state.

## Standing on existing work

The agrifood-AI space is already well-covered by established work. The guide does not duplicate it; it curates, contextualises, and translates it. Foundational references include:

- **European Parliament EPRS study (2023)** — *Artificial intelligence in the agri-food sector* — comprehensive policy-oriented scan. Strong formal-organisation reference.
- **Pennells et al. (2025)** — *Mapping the AI Landscape in Food Science and Engineering* (PMC12494660) — taxonomy-style scan of AI in food science.
- **Wu (2025)** — *Artificial intelligence in sustainable agriculture: Towards a socio-ethical analysis* (sciencedirect S2772375525008093) — critical analysis including algorithmic bias and farmer data sovereignty.
- **FAO knowledge-base report (cc6724en)** — examines AI *applied to* FAO's own knowledge assets. Adjacent rather than central.
- **IPES-Food, AI Now Institute, AgFunder** — well-established voices in critical agrifood-tech discourse. Cited where relevant rather than rebuilt.
- **IFPRI AI For Food Systems Research** — research programme on generative AI for agricultural extension. Reference, not parallel work.

GitHub-side, existing projects are tool- or paper-focused (`AgML`, `ai_agriculture_news`, `awesome-agriculture`). Nothing exists that does *public-education KB + presentation framework* on AI in agrifood with a literacy-as-empowerment stance. The gap this guide fills is real and defensible.

## Operating principles

### Freshness

"Up to date" means *active in the last year*, not breaking-news speed.

To make that rule actionable, every claim in the guide is tagged by **claim type**, and freshness rules differ per type:

| Claim type   | Example                                      | Refresh signal             |
|--------------|----------------------------------------------|----------------------------|
| `fact`       | a regulatory date, a market size             | re-verify annually         |
| `statistic`  | an adoption rate, a yield figure             | re-verify annually         |
| `claim`      | an asserted causal or comparative claim      | re-verify annually         |
| `framework`  | a taxonomy, a definition, a conceptual model | re-verify every 2 years    |
| `example`    | a named project, product, deployment         | confirm still live annually|

Every entry carries: `last_verified` date, source(s), claim type, and (where applicable) link to the original. Entries past their refresh window are flagged in `scans/` rather than deleted — staleness is signal, not failure.

### Three-axis taxonomy

Activity in AI-and-agrifood is mapped along three axes. The taxonomy is built iteratively and lives in `taxonomy/`. The current working version is `taxonomy/v4.md`; `taxonomy/v1.md`, `v2.md`, and `v3.md` are retained as change-history anchors. The corpus's distinct research methods (environmental scans, region-deepening, follow-on, substrate, two-phase, ecosystem mapping, cluster-pattern analysis, comparative scans, vendor-report hygiene, critical-voice surfacing, quote fishing, contested-claim tracking, negative-finding tolerance, gap + lead surfacing) are documented in `METHODS.md`.

1. **Sector position** — where in the value chain
   - inputs
   - on-farm production
   - post-harvest handling and storage
   - processing
   - distribution and retail
   - consumption
   - waste recovery
2. **AI technique class**
   - predictive ML
   - computer vision
   - robotics and autonomy
   - generative AI / LLMs
   - decision-support systems
   - sensor and IoT + ML
3. **Purpose / claim**
   - yield optimisation
   - input reduction (water, fertilizer, pesticide)
   - disease and pest detection
   - supply chain efficiency
   - consumer-facing (labeling, personalisation, safety)
   - research and discovery
   - extension and advisory
   - governance and policy

Activity maps and gap maps hang off the intersections of these three axes. A gap is a cell where activity *should* plausibly exist (given the problem) but evidence is thin — gaps are first-class objects, not absences.

### Sovereignty and data

AI in agrifood raises recurring questions about farmer data sovereignty, vendor lock-in, and who captures the value of aggregated operational data. The guide treats these as primary subject matter, not edge cases. The guide itself is built so that its intelligence stays with the people building it — sources and reasoning are visible in-repo; the knowledge does not get extracted to outside audiences by the act of organising it.

## Layers

The project develops in four layers, in order:

1. **Content library** — modular, source-attributed knowledge units, organised by the three-axis taxonomy. This is the substrate.
2. **Methodology and templates** — repeatable ways to assemble the library into talks for different audiences, durations, and depth levels.
3. **Web generation** — a public-facing website that renders the knowledge base for browsing, search, and reading. Built on Cloudflare Pages, hooked to the GitHub repo. The website surfaces units, scans, archetypes, cluster-pattern observations, and the cover image as the project's public face.
4. **Deck generation** — slide-deck tooling that takes the methodology layer's assembled talks and produces presentation decks. Built last, because automating a deck requires the deck's shape to already be known.

Each layer is built only when the layer below it is solid enough to support it. The web layer (3) and the deck layer (4) are distinct: the web is *browsing and reading*, optimised for navigation and search; the deck is *presenting*, optimised for slide-format rendering. Building the web first makes sense because the corpus already has a natural unit-by-unit reading structure; building the deck requires the methodology layer to settle into repeatable assembly patterns first.

## Status

Late July 2026. **Layer 1 (content library) is mature:** 202 units across the three-axis taxonomy (latest unit `open-source-ai-agrifood-quantitative-panel.md` closes G-356 substantively), 33 scans, 35 quotes, 4 scouts, taxonomy v5 (with the four-dimension maturity-assessment cross-cutting tags added in July 2026). Twelve regional / domain deepening cycles are in the corpus (LAC deepening; Brazil beef + Chile-Canada; Argentine beef + Brazilian seed; MENA + Lebanon; Spain + North Africa; Spanish cooperatives; Canada academic-research substrate; Canada funder-convenor + value-chain + regional substrate; Canada Indigenous Data Sovereignty + AI in agrifood; Sub-Saharan Africa multilateral + open-source; AI plant breeding global). Seven region-context scans layer the corpus (initial; regional; regional-LAC; regional-industry NA-EU; data-cycle; open-source-cycle; hyperscaler-substrate; EU institutional funder + regulatory substrate; plant breeding global). Notable cycle-wave outcomes: the Canada deepening + IDSov cycles produced 28 new units and 7 substantive findings (RAII/UBF binding-constraint + Indigenous-led deployment + framework-deployment-funder gap); the SSA multilateral + open-source + Mozilla State of Open Source AI 2026 cycle produced the load-bearing evidence for archetype 07.

**Layer 2 (methodology and templates) is now substantial:** seven archetypes (vendor-sweep / data-sovereignty / adoption-diagnosis / cooperative-alternative / critical-lens-Indigenous / regional-cluster-comparison / open-source + smallholder + multilateral); canonical cluster-pattern vocabulary in `talks/cluster-pattern-taxonomy.md` (cluster patterns are layered-mix / cluster-with-three-structures is cross-region / cluster-with-state-substrate is substantive); seven-spine methodology in `talks/README.md` with the user's confirmed principle "as many archetypes as our research encounters"; corpus-build methods register in `METHODS.md` (15 named methods across scan-shape, ecosystem mapping, cluster-pattern analysis, vendor-report hygiene, critical-voice surfacing, contested-claim tracking, gap + lead surfacing, methodology #15 Pass-2 sanity check added after the July 2026 actor-map fabrication hazard); corpus registries in `GAPS.md` (315+ G-NNN IDs indexed across 16 substantive gap-buckets) and `LEADS.md` (32 leads surfaced during cycle work, with realized/open status). Two dated cycle-talk consolidations (`talks/canada-deepening-cycle-2026-07.md` and `talks/canada-ids-cycle-2026-07.md`) anchor the Canada-corpus work.

**Layer 3 (web generation) is now live.** Astro 5.18+ static-site build, deployed via Cloudflare Workers Static Assets to `agrifood.metaviews.ca` (custom domain). Five content collections (`units`, `scans`, `quotes`, `talks`, `archetypes`) share the same `.md` source as GitHub-rendered raw markdown — single source of truth. Search via Pagefind (no server; builds at deploy time). Content collection layer uses Astro v5 content-layer API with `loader.base` paths pointing at repo-root directories. The build pipeline strips corpus-internal H2 sections (Freshness / Links / Cycle status / Audit notes / G-NNN / C-NNN cross-refs / etc.) via a `remarkStripMeta` plugin so the website shows only visitor-facing prose; source files unchanged. Build verification before each commit that touches `scans/` / `units/` / `quotes/` / `talks/`.

**Layer 4 (deck generation) has not started.** Slide-deck tooling that takes the methodology layer's assembled talks and produces presentation decks. Built last, because automating a deck requires the deck's shape to already be known. The seven archetypes are the worked-example set that will inform the deck layer's automation patterns.

## Honesty disciplines maintained

- **Cluster-pattern fabrication hazard** (actor-map rows, July 2026): two fabricated names (`Vincent Klingora`, `Lucia Stirling`) were self-corrected in substrate v2 §13. Pass-2 sanity check is now METHODS.md method #15. Backward audit of all 33 scans and 34 individuals named in actor-maps found zero additional fabrications.
- **YAML frontmatter discipline**: parenthesised scalars with embedded colons break js-yaml — wrap in single quotes. Apostrophes inside frontmatter title strings must use double-quote escaping (`Who''s your data`) rather than possessives in single-quote strings.
- **Pre-deploy discipline**: `cd web && npm run build` runs before every commit touching `scans/` / `units/` / `quotes/` / `talks/`. Pre-existing build breaks are filtered; only newly-introduced errors surface.
- **Mozilla regional AI regulator citation hygiene**: when citing Mozilla State of Open Source AI 2026 figures, do not propagate them to agrifood specifics — they are AI-ecosystem-wide; agrifood-specific equivalents (G-356..G-371) are separately gap-registered.
- **Dated-talk snapshot discipline**: dated cycle-talk files (`*-cycle-2026-07.md`) are snapshot-consolidations and are not overwritten when new scans land. The `talks/index.md` "Last archetype-level update" block makes this explicit.

## Licensing

- **Content** (this guide, scans, taxonomy, talk materials): Creative Commons Attribution 4.0 International (CC BY 4.0). See `LICENSE`.
- **Code** (any tooling, scripts, automation): MIT. See `NOTICE`.

The split is deliberate. Knowledge is for translation and reuse; code is for modification and embedding.