---
id: pinesort-ainnovatech-costa-rica-pineapple-ai
title: PineSORT + AinnovaTech — Costa Rica pineapple plant-counting AI cluster (drone-based CV)
sector-position: on-farm-production-open-field
ai-technique-class: computer-vision
purpose: yield-estimation, labour-efficiency
claim-type: pattern (two distinct deployments at single commodity × single region)
activity-status: deployed (PineSORT); piloting-to-deployed (AinnovaTech)
critical-voice: (none)
capital-intensity: smallholder-cluster
language-literacy-profile: (not applicable — drone + operator UI)
policy-instrument: academic-research-partnership
region: Central-America (Costa Rica canton Río Cuarto, Alajuela province; Pineapple Cámara Nacional)
actor: PineSORT (Fabián Fallas Moya — UCR + Costa Rica Institute of Technology TEC) + AinnovaTech (Rodrigo Herrera Garro, co-founder + CTO) — academic-research + commercial-CRC pairs at single commodity × single region
actor-type: academic (PineSORT); vendor (AinnovaTech)
data-governance: proprietary (per-project)
data-rights-framework: vendor-or-academic-owned (per-project)
last-verified: 2026-07-19
last-regionally-scanned: 2026-07
---

## Content

The Costa Rica pineapple AI cluster is the corpus's first *commodity-region cluster unit* — two distinct computer-vision deployments at the same crop (pineapple) and the same region (Costa Rica), surfacing both academic-research-led and commercial-CRC-led deployment pathways for the same agronomic question (counting plants at the flowering / early-growth stages).

**PineSORT (academic, drone-based):** Drone-based system for counting pineapple plants in open-field production, presented by Fabián Fallas Moya (Professor and researcher at UCR — Universidad de Costa Rica — and TEC — Costa Rica Institute of Technology) at the IICA Digital Agriculture Week 2025 AI Day (San José, Costa Rica, October 2025). Origin research: Andrés Castillo Leiton, Agrointeligencia Geoespacial, working with **La Cámara de Piñeros Unidos de Costa Rica** (Committee of United Pineapple Sowers of Costa Rica). The research project, named *"State-of-the-art Convolutional Neural Network applied in the automatic detection of pineapple plants from RPAS images"*, was conducted at one of the cooperative's properties in the **cantón de Río Cuarto, Alajuela province**, on young plants at least two weeks old.

**Documented scope (per SPH Engineering case study, August 2022):**
- Manual baseline: 2 to 2.5 hectares counted per day (1 person with mechanical counter, "María")
- Drone-equipped baseline: 50 hectares counted per day (DJI Phantom 4 Pro with 1" 20-megapixel sensor, flight height 45 m, ground sampling distance 1.6-2 cm/pixel, 85% horizontal and vertical overlap, UgCS flight planning)
- 20× productivity gain confirmed in research deployment
- Processing pipeline (SPH Engineering Consulting & Development): training image set preparation → object detection model training (CNN) → algorithm for field-boundary-separated result aggregation
- End-to-end processing cycle: 24 hours from image capture to final report

**AinnovaTech (commercial, vision-based flowering counting):** Computer-vision solution for automated counting during the **flowering stage** of pineapple growth, presented by **Rodrigo Herrera Garro, co-founder and CTO of AinnovaTech**, at the IICA DAW 2025 AI Day. The product is positioned for AI "to connect worlds: medicine, agriculture, engineering... Farmers are open to trying, they don't close the door, and that creates opportunities" (Herrera Garro quote, IICA Oct 2025).

**Why a cluster unit, not two separate units:**

PineSORT and AinnovaTech are structurally distinct:
- **Different actor-types** (academic-research-led cooperative project vs commercial-CRC startup)
- **Different growth-stage application** (young-plant counting vs flowering-stage counting)
- **Different deployment status** (academic pilot at named cooperative property vs commercial; specific named customer roster not surfaced in primary sources)
- **Different vantage-point decisions** (drone-equipped at scale vs flowering-stage-specific CV)

But they share:
- **Same crop** (pineapple)
- **Same region** (Costa Rica, with IICA convening role)
- **Same institutional-event platform** (DAW 2025 AI Day)
- **Same analytical problem** (plant counting / yield forecasting)

Treating them as two separate units would lose the cluster-pattern observation: Costa Rica has *co-incident academic and commercial pineapple-AI development* in 2025, with the IICA institutional convening role as the surfacing platform. The cluster unit preserves the observation without forcing it into a single vendor or a single deployment.

**Strategic significance for the corpus:**

1. **Pineapple is one of Costa Rica's signature crops.** Costa Rica is the world's largest pineapple exporter; the Corporación Bananera Nacional-era agricultural data infrastructure is concentrated on pineapple and banana production for export. AI deployment at this commodity touches the country's food-economy centre of gravity.
2. **The Cámara de Piñeros Unidos (Pineapple Producers Union of Costa Rica) is a farmer-led institutional anchor** — distinct from government-led or corporate-led AI deployment models. AI deployment at a farmer-cooperative property is a structurally-distinct pathway worth surfacing.
3. **IICA DAW 2025 as the institutional convening platform** — the unit's institutional context is the IICA-organised AI Day, not a vendor-led or government-led event. This is the corpus's first academic-research-deployment unit with a strong regional-institutional convening role documented.
4. **20× productivity gain is concrete and reproducible** — drone-equipped pineapple counting at 50 ha/day vs manual at 2.5 ha/day is the corpus's most concrete named-productivity-GAIN number for crop-counting AI in open-field production, with named deployment country, named cooperative property, named researcher.
5. **Object-detection CNN for pineapples specifically** — the corpus's *computer-vision* taxonomy cell for on-farm open-field AI now has a Costa Rica entry, complementing NA / EU / India entries.

## What this unit is doing in the taxonomy

Anchors the **commodity-region cluster pattern** for on-farm open-field AI, complementing:
- `bayer-climate-fieldview.md` (NA multi-continent, multi-crop)
- `agrosmart-brazil.md` (Brazil multi-crop smallholder venture-platform)
- `wagri-japan-agricultural-data-platform.md` (Japan state-DPI substrate, multi-crop)
- `india-digital-agriculture-mission-agristack.md` (India state DPI, multi-crop)
- `kilimo-argentina-irrigation.md` (Argentina irrigation AI, multi-crop)
- `auravant-argentina-precision-agriculture.md` (Argentine SaaS agronomy)

Structurally distinct from the *deployment model spectrum* (cloud-mediated / vertically integrated / cooperative-mediated / venture-funded-platform / state-affiliated-industrial). PineSORT sits closer to *cooperative-mediated + academic-anchored*. AinnovaTech sits closer to *commercial-CRC-anchored*. Both share the *commodity-region cluster* attribute.

## Why it matters for talks

- **The concrete 20× productivity number** (50 ha/day drone vs 2.5 ha/day manual) is the corpus's most quotable single-deployment statistic for crop-counting AI in open-field production; useful for talks that need hard productivity numbers.
- **The Cámara de Piñeros Unidos anchor** is the corpus's clearest LAC farmer-cooperative AI deployment with named property — useful for the *deployment-model spectrum* frame.
- **The DAW 2025 institutional convening role** demonstrates how IICA's convening-power surfaces cluster patterns that vendor-listing searches miss. Useful methodological lesson: institutional-event proceedings are *primary sources* for LAC deployments, distinct from the NA pattern where vendor customer-story pages are primary.
- **PineSORT's CNN architecture** (state-of-the-art Convolutional Neural Network) — substantive technical content; useful for talks that need to specify architecture type rather than vague "AI/ML".

## Critical context

- **AinnovaTech deployment scope is not surfaced in primary sources.** The IICA DAW 2025 announcement names the technology and the founders, but does not name a specific deployment customer or a deployment scale. G-086 candidate for follow-up verification.
- **PineSORT is academic-research scope, not commercial deployment.** The 20× productivity gain is from the named research project at the named cooperative property; commercial deployment at scale (e.g. multiple cooperative properties under commercial contract) is not surfaced. G-094 candidate.
- **DJI Phantom 4 Pro dependence.** PineSORT's drone component requires the DJI drone ecosystem — a dependency on Chinese-manufactured hardware in a small Costa Rican deployment context. The corpus's broader framing of DJI Agriculture as a multi-continent vendor (in `units/dji-agriculture-global-export.md`) makes this *not surprising*, but worth flagging for the regional cluster pattern: Costa Rica AI deployments rely partly on Chinese-manufactured drone hardware, analogous to how Japanese AI deployments rely on Yamaha drone hardware (see `yamaha-fazer-agricopter-drone-japan.md`).
- **Connectivity infrastructure** (a 13% LAC broadband access, rural-urban gap 25%) limits the data-upload side of drone-based CV deployment at smallholder-cooperative scale.
- **Farmer-led institutional anchor.** The Cámara de Piñeros Unidos is *farmer-led*, not state-led. The Indonesian / Vietnamese equivalent patterns likely share this farmer-cooperative deployment pathway. Worth tracking for an Indonesia / SEA cycle later.
- **AI Day framing caveat.** IICA DAW 2025 framed this as "Innovating Agriculture with AI: From Vision to Action" — explicitly noting that "AI is no longer the future; it is the tool of the present" with deployment-specific examples. The surfacing role of IICA is documented but the deployment scale is named only in the PineSORT case.
- **Fabián Fallas Moya dual institutional role** (UCR + TEC) reflects Costa Rica's inter-university research collaboration pattern. Distinct from NA NSF/USDA-NIFA multi-state Land-grant collaboration model.

## Links

- gaps: G-086 (AinnovaTech named customer roster), G-094 (PineSORT commercial deployment scope beyond research project)
- contested-claims: C-063 (academic-research project scale vs commercial-deployment scale), C-064 (Costa Rica pineapple AI cluster as institutional convening pattern vs vendor-driven deployment pattern)
- related-units: agrosmart-brazil.md (Brazil multi-crop, single-vendor smallholder), auravant-argentina-precision-agriculture.md (Argentina SaaS agronomy), kilimo-argentina-irrigation.md (Argentina irrigation AI), yamaha-fazer-agricopter-drone-japan.md (Japanese drone equipment-side analog), spread-techno-farm-vertical-lettuce-japan.md (Japanese vertical-farming automation analog), iica-digital-agriculture-week-2025.md (institutional convening anchor)
- sovereignty-flags: implicit — drone-captured aerial imagery flows into researcher-vendor / commercial-CRC systems; farmer-cooperative property data governance not surfaced

## Freshness

- last-verified: 2026-07-19
- last-regionally-scanned: 2026-07
- sources:
  - SPH Engineering (2022, August 2). *Costa Rica company automates pineapple plant counting from UAV-captured aerial images*. https://www.sphengineering.com/news/costa-rica-company-automates-pineapple-plant-counting-from-uav-captured-aerial-images
  - IICA (2025, October 2). *AI is a key ally for the digital transformation of agriculture in the Americas*. https://www.iica.int/en/press/news/ai-is-a-key-ally-for-the-digital-transformation-of-agriculture-in-the-americas-which-is-why-experts-are-calling-for-its-accelerated-adoption/
