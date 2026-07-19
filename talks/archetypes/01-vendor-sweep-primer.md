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
| **Yamaha FAZER / RMAX** | unmanned helicopter aerial-spraying | Japan (rice) | 2.4M acres / >35% Japan rice-field coverage (V0 vendor-reported) |
| **Spread Co. Techno Farm** | automated vertical-lettuce farm | Japan | 30,000 heads/day at 99% operating rate (Keihanna site) |
| **Agrosmart** | SaaS climate-smart farming platform | Brazil origin | 100,000+ farmers in 9 countries; 48M+ hectares monitored (vendor-reported, AQ Jan 2026 primary) |
| **Kilimo × Microsoft Chile Maipo** | irrigation-decision AI | Argentina origin | 450 ha; 13% water reduction; 1.5M m³ saved over 3 years (Microsoft × Kilimo April 2025) |
| **Auravant** | SaaS agronomy platform | Argentina origin | 20M+ ha; 123,000+ users; 156 countries (vendor-reported, homepage counter) |
| **Taranis** | crop intelligence AI | Israel origin; global deployment | AI-powered crop intelligence, leaf-level aerial scouting; Taranis Yield Impact™; Israeli agritech ecosystem 750+ companies / 150+ startups (2025) |
| **Ekonoke** | indoor hydroponic hops | Spain origin; deployment focus Spain | Indoor vertical hydroponic cultivation; multi-colour LED + AI climate control; 95% water-savings vs. open-field hops (per Reuters 2023 + Sifted 2025) |

**Units used:** `units/john-deere-see-and-spray.md`, `units/bayer-climate-fieldview.md`, `units/dji-agriculture-global-export.md`, `units/xag-china-drone-leader.md`, `units/lely-astronaut.md`, `units/yamaha-fazer-agricopter-drone-japan.md`, `units/spread-techno-farm-vertical-lettuce-japan.md`.

**Critical move (do not skip).** Name what each one *claims* and what each one *measures*. Bayer / John Deere claim input reduction (less herbicide, less fertilizer); DJI / XAG claim productivity at scale; Lely claims labour conditions (succession, fatigue, lifestyle); Yamaha claims Japanese-rice precision aerial spraying; Spread claims indoor CEA labour-substitution at scale. These are different claims, not interchangeable.

**East-Asia layer — say this if audience will absorb it (otherwise skip).** Japan anchors an *equipment-vendor industrial automation* pattern — Yamaha's unmanned helicopters and Spread's vertical farms are mature products from industrial-machinery majors applying their competence to agriculture under an ageing-farmer-labour-shortage imperative. China anchors a *state-vendor hybrid* with provincial autonomy (DJI, XAG, Alibaba ET Agricultural Brain). Korea anchors a *state-anchored cluster programme* with vendor participation (Smart Farm Innovation Valley; ioCrops deploying *into* Japan). The unit `units/japan-korea-agrifood-ai-pattern.md` is the corpus's anchor for this East-Asia cluster taxonomy.

### 3. Segment two — post-farm: processing, retail, waste (8 min)

**Move down the value chain.** The audience often assumes "agrifood AI" means on-farm; show that it's now pervasive downstream.

| Deployment | Value chain cell | Anchor |
|---|---|---|
| **Apeel Sciences / RipeTrack** | post-harvest | `units/apeel-ripetrack.md` — plant-based coating + computer vision for shelf-life prediction |
| **Loblaw × Blue Yonder** | retail | `units/loblaw-blue-yonder-forecasting.md` — ML demand forecasting for Canada's largest grocer |
| **Loblaw × PC Express in ChatGPT** | retail (consumer-facing) | `units/loblaw-pcxpress-chatgpt.md` — first-of-its-kind grocery shopping inside ChatGPT (2025) |
| **Canadian food-waste AI landscape** | waste recovery | `units/canadian-food-waste-ai-landscape.md` — US context dominant, Canadian activity emerging |
| **SoraLINK × Saputo/Olymel/Agropur** | processing | `units/soralink-export-food-processing.md` — predictive maintenance for export-oriented dairy/meat processing |
| **Grupo Bimbo global bakery AI** | processing | `units/grupo-bimbo-global-bakery-ai.md` — DRL + IR thermal + humidity at baking control (peer-reviewed Food Chem X 2026 with Bimbo Bakeries India authors); Oracle Fusion Data Intelligence enterprise AI layer; multi-vector at $20B global-conglomerate scale |
| **Marfrig × Agrorobótica** | animal production | `units/marfrig-agrorobotica-brazil-cattle-carbon.md` — AGLIBS LIBS laser spectroscopy for cattle-supplier farm soil carbon monitoring (Mato Grosso pilot) |
| **PineSORT + AinnovaTech** | on-farm | `units/pinesort-ainnovatech-costa-rica-pineapple-ai.md` — Costa Rica pineapple plant-counting AI cluster (50 ha/day drone vs 2.5 ha/day manual — 20× productivity gain) |
| **Falabella × Google Cloud TARS** | distribution / retail | `units/falabella-google-cloud-tars-lac.md` — Internal-operations generative AI on Google Cloud Conversational Agents + Gemini (LAC retail conglomerate; 22,000+ tickets; 33% reduction in human-agent tickets) |
| **Minerva Foods** | animal production | `units/minerva-foods-brazil-cattle-traceability.md` — Brazilian beef cattle traceability AI (blockchain + satellites + AI pattern-recognition; 200,000-animal leather SBCert trace milestone; GS1 Brazil 29% sectoral advance) |
| **JBS blockchain** | animal production | `units/jbs-blockchain-indirect-supplier-monitoring.md` — Brazilian beef processor's 100%-indirect-supplier monitoring target by 2025 + $9M COP-28 Pará traceability investment; *cluster-critique unit* `units/brazil-beef-supply-chain-deforestation.md` |
| **PUCV × LEM System** | inputs (seed industry) | `units/chile-pucv-seed-quality-ai.md` — Chilean counter-season seed-hybridisation labour-side computer vision (FONDEF IT funded); 38,000-ton seed export context; cross-border pattern with Canada: `units/chile-canada-seed-ai-cross-border.md` |
| **Argentine SENASA mandate** | animal production | `units/argentine-beef-electronic-traceability-senasa.md` — *State-driven* mandatory electronic cattle traceability (53.5M head, July 2026 full mandatory compliance, World Bank financing); distinct driver / IT substrate / funding / scope dimension from Brazilian big-three corporate programmes |
| **Brazilian seed AI** | inputs (seed industry) | `units/brazilian-seed-ai-academic-research-led.md` — *Academic-research-led + multinational-corporate-pipelined*; cluster-with-three-structures (Sangjan 2025 cited 24 + Tedeschi 2025 PMC cited 20; substantially empty at Brazilian-origin-corporate-vendor tier — negative-finding-as-substance) |
| **UAE date palm AI platform** | inputs (genetic-resource preservation) | `units/uae-date-palm-ai-genetic-diversity.md` — UAE digital platform (April 2026; 130+ varieties; Zayed For Good × Khalifa International Award × ADAFSA; cultural-stewardship-driven) |
| **Lebanon Berytech Agrytech + AgriSmart** | on-farm + farmer-facing mobile | `units/lebanon-agrytech-accelerator-agrismart.md` — Lebanese startup-ecosystem partial-focus unit (Berytech Agrytech accelerator Batch 7 Phase 2 active Oct 2025; AgriSmart Arabic-language WhatsApp chatbot; Ground Vertical Farming 90% water savings) |
| **Spain Ekonoke** | on-farm (controlled-environment) | `units/ekonoke-spanish-indoor-hop-hydroponics-ai.md` — Spanish indoor hydroponic hops; 95% water-savings vs. open-field (per Reuters 2023 + Sifted 2025); corpus's most extreme water-savings figure to date |
| **Morocco Al Moutmir (OCP)** | on-farm (fertilizer-crop-management) | `units/morocco-al-moutmir-ocp-agritech.md` — OCP-led multi-service agritech programme since 2018 (Integrated Crop Program framework); AI-assisted fertilizer recommendation + smart irrigation; OCP world's-largest-phosphate + state-affiliated substrate; Green Generation 2020-2030 state strategy |
| **Tunisia RoboCare** | on-farm (precision-ag multi-source) | `units/tunisia-robocare-precision-agriculture.md` — Sfax-founded precision-ag startup; 216 Capital six-figure investment June 2026; African + Middle Eastern expansion scope |

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

### 5b. Optional cluster-pattern detour (3-4 min, skip if time pressure)

If the audience is engaged enough for a third-tier observation, the vendor-sweep can pivot to *why are vendor deployments organized the way they are?*. The canonical answer lives in `talks/cluster-pattern-taxonomy.md`: six regional cycles have surfaced thirteen named cluster-patterns and three cross-region observations, including:
- *Cluster patterns are layered-mix* (observed in LAC, MENA, EU-cluster-pattern)
- *Cluster-with-three-structures is cross-region pattern* (Brazilian seed AI vs. Spanish cooperative AI)
- *Cluster-with-state-substrate as substantive pattern* (Argentine beef AI SENASA + SIGSA + World Bank financing)

Worth surfacing only if the audience is asking the meta-question. Not a default for the 45-min version.

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
- *"What about MENA?"* → `scans/2026-07-mena-scan.md` for the cluster scan; four anchor units (`units/taranis-israel-crop-intelligence.md` Israeli venture-funded; `units/uae-adafsa-ai-management-certification.md` UAE state-as-standards-setter — world's first ISO 42001:2023 AI management certification in agriculture; `units/uae-date-palm-ai-genetic-diversity.md` UAE state-as-deployment-of-record + cultural-stewardship; `units/lebanon-agrytech-accelerator-agrismart.md` Lebanese startup-ecosystem partial-focus); plus Morocco Al Moutmir (OCP Group) and Tunisia RoboCare from cycle-5. MENA cluster is now corpus-distinct as a five-cluster-pattern observation refined from cycle-4's three-sub-pattern.
- *"What about Spanish cooperatives?"* → `scans/2026-07-spanish-cooperatives-ai.md` for the cluster scan; three anchor units (`units/spain-cooperative-agrifood-ai-cluster-pattern.md` cluster-pattern-with-three-structures observation; `units/spain-cooperative-covap-ai-deployment.md` first Spanish cooperative-led AI deployment-of-record with 5 named AI tracks; `units/mondragon-corporation-cooperative-federation.md` Mondragón institutional-federation-anchor substrate since 1956, €11.213B 2024 revenue, 70,000+ workers). Spanish cooperative AI cluster-with-three-structures observation parallels Brazilian seed AI cluster-with-three-structures with structurally-distinct Tier-2 substrates (Mondragón federation-institutional vs. Bayer/Syngenta/BASF/Corteva multinational-corporate-pipelined).
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