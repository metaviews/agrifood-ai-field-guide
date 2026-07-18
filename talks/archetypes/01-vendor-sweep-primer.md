# Archetype 01 — What's actually deployed

**A vendor-sweep primer for non-specialist audiences.**

## Header

| Field | Value |
|---|---|
| **Spine** | vendor-sweep |
| **Audience** | mixed public, students (no agritech background) |
| **Duration** | 45 min (35 min talk + 10 min Q&A) |
| **Depth** | literate (avoid taxonomy jargon; introduce 2-3 terms in context) |
| **Region emphasis** | Global, with a Canadian anchor at the close |
| **Stance** | curious, critical, collaborative |

## What this talk is for

The audience knows AI is in the news but doesn't have a working picture of *what's actually deployed* in food and farming. They're not hostile, not enthusiastic — they want a map. This talk gives them one and seeds the literacy-as-empowerment stance by ending on the *who benefits* question.

## Run-of-show

### 1. Opening — what "agrifood AI" actually covers (5 min)

**Frame.** Agrifood AI is not just robots in fields. It's the whole value chain — from seeds and inputs through on-farm production, processing, distribution, retail, and waste recovery. Give the audience the seven-cell chain (simplified from v4 taxonomy to a five-cell version for a non-specialist talk: *inputs, growing, processing, retail, waste*).

**Anchor.** The European Parliament EPRS study (2023) — `scans/2026-07-initial.md` — covers this whole chain. Mention as the comprehensive reference, not on screen.

### 2. Segment one — on-farm production (10 min)

**The five biggest names globally.** Use as concrete anchors:

| Vendor | What they do | Region | Scale |
|---|---|---|---|
| **John Deere See & Spray** | computer vision, precision spraying | NA-US origin, global | See & Spray rolled out 2024+ |
| **Climate FieldView (Bayer)** | digital farming platform | multi-continent | 200M+ acres globally (per unit) |
| **DJI Agriculture** | agricultural drones | China origin | 400,000 drones, 980M acres, 100+ countries |
| **XAG** | agricultural drones / services | China | 10M+ farmers (per unit) |
| **Lely Astronaut** | robotic milking | EU-Netherlands | 50,000 units across 50 countries |

**Units used:** `units/john-deere-see-and-spray.md`, `units/bayer-climate-fieldview.md`, `units/dji-agriculture-global-export.md`, `units/xag-china-drone-leader.md`, `units/lely-astronaut.md`.

**Critical move (do not skip).** Name what each one *claims* and what each one *measures*. Bayer / John Deere claim input reduction (less herbicide, less fertilizer); DJI / XAG claim productivity at scale; Lely claims labour conditions (succession, fatigue, lifestyle). These are different claims, not interchangeable.

### 3. Segment two — post-farm: processing, retail, waste (8 min)

**Move down the value chain.** The audience often assumes "agrifood AI" means on-farm; show that it's now pervasive downstream.

| Deployment | Value chain cell | Anchor |
|---|---|---|
| **Apeel Sciences / RipeTrack** | post-harvest | `units/apeel-ripetrack.md` — plant-based coating + computer vision for shelf-life prediction |
| **Loblaw × Blue Yonder** | retail | `units/loblaw-blue-yonder-forecasting.md` — ML demand forecasting for Canada's largest grocer |
| **Loblaw × PC Express in ChatGPT** | retail (consumer-facing) | `units/loblaw-pcxpress-chatgpt.md` — first-of-its-kind grocery shopping inside ChatGPT (2025) |
| **Canadian food-waste AI landscape** | waste recovery | `units/canadian-food-waste-ai-landscape.md` — US context dominant, Canadian activity emerging |
| **SoraLINK × Saputo/Olymel/Agropur** | processing | `units/soralink-export-food-processing.md` — predictive maintenance for export-oriented dairy/meat processing |

**Anchor quote (optional).** If audience is sympathetic to producer voices, drop in Jeff Torrie: *"If we didn't invest in new technology, there wasn't going to be succession. That's what it came down to."* (`quotes/producers/torrie-jeff-lely-succession.md`). This is the family-farm-succession motivation, distinct from vendor efficiency framing. *Note: 2018 source, flagged historical.*

### 4. Segment three — the data underneath (8 min)

**The pivot.** Up to now the talk has been about AI. Now: AI runs on data. *Whose data, what kind, who controls it?*

**Three data postures** (simplified from v4 taxonomy):
- **Open / public** — SoilGrids, Copernicus Sentinel, USDA Ag Data Commons. Anyone can use them.
- **Proprietary / vendor** — Climate FieldView, John Deere Operations Center, AGCO PTx. Vendor controls access.
- **Cooperative / commons** — JoinData (Netherlands), NAPDC (US federally-funded cooperative-development), Indigenous-led frameworks.

**Anchor units:** `units/open-data-ecosystem.md`, `units/proprietary-farm-data.md`, `units/joindata-netherlands.md`.

**Critical move.** Name the dark-data problem — *data that is collected but never surfaced for broader use.* `units/dark-data-agrifood.md`. This is the inequality problem in agrifood AI: small farmers and cooperatives generate data; vendors aggregate it; the value flows back to the vendor. The audience should leave knowing this is a structural question, not an abstract one.

### 5. Segment four — Canada specifically (5 min)

**The Canadian anchor.** Even for a global talk, the close should land close to home.

- **1.8% vs 12.2%** — Canadian agricultural AI adoption (Q2 2025) vs other Canadian industries. Source: Statistics Canada, contextualised by FCC/Deloitte (July 2026). Unit: `units/fcc-canada-ai-adoption.md`.
- **Haven Greens** — Canada's first fully automated AI-powered greenhouse, King City Ontario. Unit: `units/haven-greens.md`.
- **FCC ecosystem-not-technology framing** — Canada's gap is diagnosed by FCC as *systemic* (fragmented infrastructure, talent, capital, governance) not technological. Unit: `units/fcc-ecosystem-not-technology.md`.

**Anchor quote (optional).** If audience responds to producer voices: Jay Willmot (Haven Greens founder) on local demand. `quotes/industry-executives/willmot-jay-haven-greens-local-demand.md`.

### 6. Close — the literacy question (4 min)

**The frame.** The point of the talk is not "AI is good" or "AI is bad." The point is that AI in agrifood is *real, deployed, and structured by who owns the data*. Literacy about that structure is the first step toward any informed position.

**Three questions to leave the audience with.**
1. When you hear "AI in agriculture," do you know *what part of the value chain* is being talked about?
2. Do you know *whose data* trained the model?
3. Do you know *who captures the value* from the data once it's aggregated?

These are not rhetorical. They are the working questions for the rest of the field guide.

## Q&A handles

Common audience questions and the units they map to:

- *"What about ChatGPT for farmers?"* → `units/root-ai.md` (FCC's free generative AI extension assistant for Canadian farmers, July 2026). Worth naming that this is the *first* deployment of a foundation model as a farmer-facing extension tool in Canada.
- *"Is China ahead?"* → `scans/2026-07-china-deepening.md` for the export / policy / import signal layers; `units/dji-agriculture-global-export.md`, `units/xag-china-drone-leader.md`, `units/pinduoduo-smart-agriculture-competition.md` for vendor detail.
- *"What about right to repair?"* → vendor lock-in is the bridge; mention as a structural concern. Not the spine of this talk but worth naming if asked.

## Freshness check

Before delivering this talk, re-verify the freshness of these anchor units (each carries `last-verified: 2026-07`):
- `units/fcc-canada-ai-adoption.md` — annual refresh; re-check Statistics Canada for newer Q2 2026 figures.
- `units/loblaw-pcxpress-chatgpt.md` — confirm ChatGPT integration still live.
- `units/dji-agriculture-global-export.md` — confirm deployment figures.
- `units/lely-astronaut.md` — confirm unit count (was 50,000 across 50 countries).

## Substitutions

- **If audience is policy / leadership**, swap segments 2 and 3 (lead with data sovereignty, then on-farm deployment). This is roughly archetype 03.
- **If audience is academic**, deepen segment 3 with `units/dark-data-agrifood.md`, `units/farm-data-ownership-critical.md`, and the open-source framework unit (`units/open-source-in-agrifood-framework.md`).
- **If audience is farmer co-op**, swap to archetype 02 wholesale.

## What this archetype is doing in the methodology

This is the *entry-point talk* — the one a presenter gives when they need to introduce the field. Its job is to give the audience a working vocabulary and a literate posture. It deliberately does *not* commit to a strong analytical spine (vendor-sweep is the most neutral). Once the audience has the vocabulary, subsequent talks can land harder.