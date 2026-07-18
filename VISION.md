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

Activity in AI-and-agrifood is mapped along three axes. The taxonomy is built iteratively and lives in `taxonomy/`.

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

The project develops in three layers, in order:

1. **Content library** — modular, source-attributed knowledge units, organised by the three-axis taxonomy. This is the substrate.
2. **Methodology and templates** — repeatable ways to assemble the library into talks for different audiences, durations, and depth levels.
3. **Generation tooling** — when the methodology is settled, tooling that helps assemble decks from the library. Built last, because automating a deck requires the deck's shape to already be known.

Each layer is built only when the layer below it is solid enough to support it.

## Status

Early. The repository is scaffolded with the structural decisions recorded here. The first concrete task is the **initial environmental scan** under `scans/`, which feeds the first draft of the taxonomy under `taxonomy/`. From there, content units follow.

## Licensing

- **Content** (this guide, scans, taxonomy, talk materials): Creative Commons Attribution 4.0 International (CC BY 4.0). See `LICENSE`.
- **Code** (any tooling, scripts, automation): MIT. See `NOTICE`.

The split is deliberate. Knowledge is for translation and reuse; code is for modification and embedding.