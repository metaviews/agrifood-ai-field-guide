---
id: open-data-ecosystem
title: Open data ecosystem in agrifood — GODAN, CGIAR FAIR, USDA Ag Data Commons, Copernicus, SoilGrids
sector-position: (cross-cutting)
ai-technique-class: (cross-cutting — data infrastructure)
purpose: (cross-cutting)
claim-type: framework
activity-status: deployed
critical-voice: (none directly — institutional / state framing; IDSov context distinct)
capital-intensity: (not applicable)
language-literacy-profile: (not applicable)
policy-instrument: regulatory (FAIR / CARE Principles); strategy (USDA public access mandate)
region: Global (international coordination via GODAN; regional state data layers)
actor: GODAN, CGIAR Platform for Big Data in Agriculture, USDA National Agricultural Library, ISRIC, Copernicus (ESA), FAO, GBIF, OpenAQ
actor-type: (multi-type: civil-society for GODAN; multilateral-body for CGIAR, FAO; state-agency for USDA, ESA, GBIF)
data-governance: open
data-rights-framework: state-stewarded
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

The open data ecosystem in agrifood is structurally important because it is the *counter-institutional layer* to proprietary data capture. The layer is multi-actor, multi-jurisdictional, and built around the **FAIR** principles (Findable, Accessible, Interoperable, Re-usable) and increasingly the **CARE** principles for Indigenous Data Governance (Collective benefit, Authority to control, Responsibility, Ethics).

### The named open-data institutions

**GODAN — Global Open Data for Agriculture and Nutrition.** Founded 2013 (G8-initiated with US, UK). International coordination body for open data in agriculture and nutrition. Current framing: GODAN 2.0 — "advances a holistic framework for transforming food systems through open data, youth-led innovation, and inclusive digital infrastructure." The 2016 *Global Data Ecosystem for Agriculture and Food* paper (commissioned by Syngenta with GODAN assistance) articulated the "Five stars of open data" and FAIR principles for the agrifood context.

**CGIAR Platform for Big Data in Agriculture.** Multilateral research-for-development infrastructure explicitly committed to FAIR data principles. Responsible Data Guidelines for agricultural research for development. Open-access mandate among the strongest of any institution working on agricultural data globally.

**USDA Ag Data Commons.** Public access research data catalog operated by the National Agricultural Library. FAIR-compliant repository. Replatformed to Figshare-powered institutional portal in January 2024. USDA-funded research data is required (since 2023 federal policy on public access) to deposit in FAIR-compliant repositories.

**ISRIC SoilGrids.** Global soil property maps at 250m resolution. 14 soil properties. 6 standard depth intervals. ML-based predictions. Africa soil property maps at 250m resolution. The substantive open-data anchor for *soil* in the field guide.

**Copernicus Sentinel.** EU's Earth observation programme. Sentinel-2 for land monitoring (vegetation, soil, water). Open data access via Copernicus Data Space Ecosystem. Substantively used for crop monitoring at continental and global scales.

**Other open data of note:**
- **FAOSTAT** — FAO's global food and agriculture statistics (the standard reference).
- **GBIF** — Global Biodiversity Information Facility (pollinators, soil biodiversity).
- **OpenAQ** — Open air quality monitoring.
- **Open Climate Fix** — open climate/weather data for agriculture.
- **HarvestChoice** — CGIAR-supported agronomic data.
- **Open Soil Atlas** — open soil data.

### What the open data ecosystem is structurally good at

1. **Soil, environmental, and satellite-derived crop data** are dominant at the open state level. SoilGrids, Copernicus Sentinel, USDA NASS Cropland Data Layer, FAOSTAT — all state / multilateral open infrastructure.

2. **FAIR principles provide a shared standard.** Findable, Accessible, Interoperable, Re-usable. Adopted by CGIAR, USDA Ag Data Commons, and increasingly by national agricultural research systems globally.

3. **Open access is increasingly a *policy mandate*.** US public investment in agricultural research requires FAIR-compliant deposit; EU and multilateral research funders follow similar trajectories.

### What the open data ecosystem is structurally bad at

1. **Real-time farm-level data.** Open data is *aggregated*, not real-time. Vendor proprietary platforms (Climate FieldView, John Deere) own the real-time farm-level data.

2. **Farmer-level decision support.** Open data supports research and policy analysis; not individual farmer decision-making in real time.

3. **Capturing the small-farm / developing-country farm context.** Most open data is anchored to formal agricultural research institutions, which are stronger in formal research domains than in smallholder / informal contexts.

4. **Indigenous Data Governance.** FAIR principles address technical interoperability; CARE Principles address Indigenous data sovereignty. The two are complementary but not equivalent.

## What this unit is doing in the taxonomy

Anchors the *data-substrate × open* cell as a `framework` claim-type — a structured analysis of the open data ecosystem. First unit in the field guide that explicitly captures the open data substrate.

Distinct from:
- **Proprietary farm data unit** (`proprietary-farm-data.md`) — proprietary / industry cell.
- **Dark data unit** (`dark-data-agrifood.md`) — dark / collected-but-not-surfaced cell.
- **Farm-data ownership critical voice unit** (`farm-data-ownership-critical.md`) — the critical-voice layer.

## Why it matters for talks

- The open data ecosystem is the *counter-institutional layer* to proprietary capture. Worth knowing because vendor-only framings of AI in agrifood miss this layer entirely.
- The FAIR principles are a shared standard. Worth knowing because they connect to discussions of interoperability and value capture.
- The state-led open data (USDA, Copernicus, FAO) is substantive and substantial — not just a marginal alternative.
- The CARE Principles (Indigenous Data Governance) are the explicit articulation of Indigenous data sovereignty in agrifood. Distinct from FAIR but complementary.

## Critical context

- Open data ecosystem is *aggregated*, not real-time farm-level. Real-time farm-level data is in proprietary platforms.
- Open data supports research and policy, not individual farmer decisions.
- Smallholder / informal-context data is under-represented in open data infrastructure.
- Indigenous data sovereignty is articulated by CARE Principles, complementary to FAIR.

## Links

- gaps: G-035 (Indigenous data sovereignty operationalisation in agrifood; CARE Principles / IEEE 2890)
- contested-claims: C-025 (new — "Open data resolves proprietary capture concerns" — counter: aggregation ≠ real-time; small-farm / Indigenous context under-represented)
- related-units: proprietary-farm-data.md, dark-data-agrifood.md, farm-data-ownership-critical.md, mila-quebec-ai-institute.md (DISA uses open satellite data), fcc-ecosystem-not-technology.md (data governance as one of four constraints)
- sovereignty-flags: explicit — FAIR Principles address technical interoperability; CARE Principles address Indigenous data sovereignty; field guide carries both

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - GODAN. https://www.godan.info/
  - CGIAR Big Data Platform. *Responsible Data Guidelines*. https://bigdata.cgiar.org/responsible-data-guidelines/
  - CGIAR Big Data Platform. *FAIR Data Principles*. https://bigdata.cgiar.org/gardian-tool/fair-data-principles/
  - USDA National Agricultural Library. *Ag Data Commons*. https://www.nal.usda.gov/services/agdatacommons
  - ISRIC. *SoilGrids*. https://isric.org/explore/soilgrids
  - Copernicus Data Space Ecosystem. https://dataspace.copernicus.eu/
  - GODAN via CGIAR (2016). *A Global Data Ecosystem for Agriculture and Food*. https://cgspace.cgiar.org/items/7db049dd-989b-4df7-b13c-b5d765b17fbe