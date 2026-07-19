---
id: wagri-japan-agricultural-data-platform
title: WAGRI — Japan's Agricultural Data Collaboration Platform (NARO operating body, MAFF oversight)
sector-position: (cross-cutting — data infrastructure serving on-farm through consumption)
ai-technique-class: predictive-ml, decision-support-systems, generative-ai-llms
purpose: supply-chain-efficiency, governance, climate-adaptation, food-security-sovereignty
claim-type: example (deployment) + framework (state-anchored data-collaboration architecture)
activity-status: deployed
critical-voice: food-sovereignty (state-stewarded data layer — Japan's only DPI-grade agricultural data platform)
capital-intensity: (cross-cutting — state-funded public infrastructure serving industrial + smallholder users)
language-literacy-profile: (cross-cutting — APIs are served to ICT vendors, who then expose them via farmer-facing applications)
policy-instrument: regulatory (WAGRI is operated under MAFF oversight and NARO as the operating body; the *Act on the Promotion of Smart Agricultural Technology Utilization to Improve Agricultural Productivity*, effective October 2024, provides the broader policy frame)
region: East-Asia (Japan; national platform with multi-prefecture data coverage)
actor: WAGRI, operated by NARO (National Agriculture and Food Research Organization), under MAFF (Ministry of Agriculture, Forestry and Fisheries) oversight. Operational since April 2019.
actor-type: state-agency (with NARO as operating body)
data-governance: state-stewarded (WAGRI is described in the MAFF official explainer as "the agricultural data platform combining 'WA (which means circle in Japanese)' that links various data and services and 'WA (which means harmony in Japanese)' that promotes further harmonization of various communities")
data-rights-framework: state-stewarded
maturity-scale: S2 (operational at national scale since April 2019; specific ICT-vendor customer count unverified publicly)
maturity-verification: V1 (peer-reviewed architecture documentation: Kawamura 2022, *Smart Agricultural Technology*, cited 16, describing WAGRI's ICT-vendor API architecture; official MAFF platform explainer PDF documents the data categories and API providers)
maturity-longevity: L3 (operational since April 2019; multi-year with continuous operation through 2026; NARO maintenance logs visible at the live operator site through 2026)
maturity-translation: T3 (institutional pathway: NARO operating body + MAFF oversight + ICT vendor / agricultural machinery manufacturer service-development layer + farmer-facing application layer)
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

# WAGRI — Japan's Agricultural Data Collaboration Platform

## Content

**WAGRI** is Japan's agricultural-data collaboration platform, operated by **NARO** (the National Agriculture and Food Research Organization) under **MAFF** (the Ministry of Agriculture, Forestry and Fisheries) oversight, **operational since April 2019**. It is the canonical state-anchored agricultural-data platform in the corpus for the East-Asia (Japan) region.

The platform name is a *coined word*: "WA (which means circle in Japanese)" that links various data and services, and "WA (which means harmony in Japanese)" that promotes harmonization of various communities — i.e., the data platform that links circle-of-data + harmony-of-communities.

**Public-data APIs (nine categories):**

| Category | Description | API provider |
|---|---|---|
| 気象 (weather) | Hourly forecast up to 3 days; daily forecast up to 26 days; broad-range forecast | Halex / Life & Business Weather / Japan Meteorological Agency |
| 農地 (farmland) | Parcel polygon data, integrated farmland + soil maps | MAFF / NARO / National Chamber of Agriculture |
| 生育予測 (growth prediction) | Rice / wheat / soybean growth prediction; protected-horticulture (tomato, paprika, cucumber) growth & yield prediction | Vision Tech Inc. / NARO |
| 市況 (market conditions) | Wholesale fruits + vegetables; Central Meat Wholesale Market (pigs, cattle) | MAFF |
| 農薬・肥料 (pesticides/fertilizers) | 7,400 registered agricultural chemicals; registered fertilizers | Food Agricultural Materials Inspection Center (FAMIC) / MAFF |
| 病虫害診断 (pest diagnosis) | Pest-disease forecast | (per WAGRI site) |
| 農機 (farm machinery) | Farm machinery APIs | (per WAGRI site) |
| 農業経営 (agribusiness) | Agribusiness APIs | (per WAGRI site) |
| 地図 (map) | Map + aerial imagery; digital soil maps | NTT InfraNet / NARO |

The platform serves **ICT vendors and agricultural-machinery manufacturers**, who use WAGRI APIs to develop services for farmers — including smartphone applications, growth-prediction tools, and pinpoint pesticide-spraying or variable-rate-fertilization systems. The **NARO growth-prediction API for protected horticulture (tomatoes, paprika, cucumbers)** is the most concrete ML-flavoured surface — a research-grade machine-learning model exposed as a public API.

The platform is described in the official MAFF explainer PDF as the data substrate for Japan's "Smart Food Chain" — a concept that integrates production + processing + distribution + retail + consumption data flows under the Society 5.0 framework (the Japanese government's framing of "super-smart society").

**MAFF policy context.** The *Act on the Promotion of Smart Agricultural Technology Utilization to Improve Agricultural Productivity* took effect in October 2024 — providing the broader statutory frame within which WAGRI operates. (The Act is itself a policy-instrument unit context; not drafted this cycle.)

**Peer-reviewed architectural documentation.** Kawamura et al. 2022 in *Smart Agricultural Technology* (cited 16) describe WAGRI's architecture for ICT-vendor service development — the academic floor under the platform's V1 verification grade.

## What this unit is doing in the taxonomy

**Sector position.** `cross-cutting — data infrastructure serving on-farm through consumption`. WAGRI is not a single-sector deployment; it is the data-substrate layer for multiple sectors (on-farm inputs, farmland + soil, weather, market conditions, processing inputs via MAFF wholesale market data).

**AI technique class.** `predictive-ml` (NARO growth prediction is the named ML surface). `decision-support-systems` (the platform's purpose is to enable vendor-built decision-support tools). `generative-ai-llms` is future-class — the WAGRI platform architecture can be queried by LLMs via MCP-style integration; no production MCP server found at retrieval date.

**Purpose.** Multi-purpose. `supply-chain-efficiency` (market-condition APIs), `governance` (state-stewarded data layer for traceability), `climate-adaptation` (weather forecast APIs), `food-security-sovereignty` (state-stewarded data sovereignty as policy instrument).

**Region tag.** `East-Asia (Japan; national platform with multi-prefecture data coverage)` — compound because WAGRI is nationally deployed but data categories are regional in application.

**Capital intensity.** `cross-cutting` — the platform serves both industrial ICT-vendor service developers (capital-intensive downstream use) and smallholder farmers (via vendor-built smartphone applications).

**Data governance / rights.** `state-stewarded` for both. The platform is explicitly designed as a state-stewarded data-commons layer — closer in concept to **India's AgriStack** (the corpus's prior DPI substrate) than to NA's proprietary vendor-owned agronomic data platforms. This is a structural observation the meta-pattern unit surfaces.

## Why it matters for talks

WAGRI is the **Japan-side state DPI substrate for agricultural AI** in the same conceptual category as:

- India's AgriStack / Digital Agriculture Mission (`units/india-digital-agriculture-mission-agristack.md`)
- The Netherlands' JoinData (`units/joindata-netherlands.md`) — but with the *state-stewarded* posture that JoinData explicitly does *not* have (JoinData is a farmer-cooperative governed common).

The Japanese approach is more state-driven than the Dutch cooperative model; more national-fragmentation-tolerant than India's federal-state cascade. WAGRI is also one of the corpus's few **operational** DPI-grade platforms — India's AgriStack launched in September 2024; WAGRI has been operational since April 2019.

Two presentations:

1. **DPI architecture comparison.** Surface WAGRI alongside AgriStack (IN) and JoinData (NL) in any talk about state-stewarded agricultural-data platforms. Distinguish: Japan's WAGRI is national but allows vendor service development; India's AgriStack is federated across state-agriculture-departments; NL's JoinData is cooperative-governed common.
2. **The "society 5.0 framing" angle.** Japan's state-stewarded AI deployment sits inside the Society 5.0 super-smart society framing — a policy frame that distinguishes Japanese state-anchored AI deployments from Chinese state-vendor hybrids (which have less cooperative-framing language).

## Critical context

- **WAGRI active-API-customer count is unverified publicly.** The platform's `wagri.naro.go.jp/` site lists API categories and providers; specific ICT-vendor / machinery-manufacturer customers consuming WAGRI APIs at scale are gated behind membership. Encoded as G-073.
- **V0 scale figures.** No independent audit of WAGRI's user numbers, API call volume, or farmer reach. The platform is *operational* at V1 (architecture peer-reviewed) but the *scale figure* is V0.
- **The 7,400 agricultural-chemicals-registered figure is real** — the FAMIC public registry; WAGRI is the API layer exposing it.
- **The Society 5.0 narrative** is a Japanese state narrative, not an analytical claim. Cite as vendor / state framing, not as independent assessment.
- **Cross-border data flow.** Per the China-deepening scan's reference to "Japan, Europe (TLS-protected)" — WAGRI is a Japan-domestic data collaboration platform; cross-border data flow is limited.

## Links

**Related units:**

- `units/india-digital-agriculture-mission-agristack.md` — India-side state-DPI analogue (later launch; federation across state-agriculture-departments)
- `units/joindata-netherlands.md` — NL cooperative-governed DPI analogue (different data-rights posture)
- `units/india-agrifood-ai-pattern.md` — meta-pattern precedent
- `units/japan-korea-agrifood-ai-pattern.md` — meta-pattern observation for the new cycle
- `units/spread-techno-farm-vertical-lettuce-japan.md` — Japan-side industrial-automation counterpart
- `units/yamaha-fazer-agricopter-drone-japan.md` — Japan-side equipment-vendor counterpart

**Gaps (G-NNN) referenced:**

- G-073 — Independent identification of WAGRI API customer bases

**Contested claims (C-NNN):** None directly anchored to this unit.

## Freshness

- Primary sources cited: <https://www.maff.go.jp/e/policies/tech_res/smaagri/attach/pdf/WAGRI.pdf> (official MAFF platform explainer), <https://wagri.naro.go.jp/> (live operator site, June 2026 maintenance log confirms operating through 2026), <https://www.sciencedirect.com/org/science/article/pii/S1947319222000016> (Kawamura 2022 WAGRI architecture, peer-reviewed)
- Cross-reference: <https://ap.fftc.org.tw/article/1634> (FFTC policy brief on WAGRI system structure), <https://stli.iii.org.tw/en/article-detail.aspx?no=105&tp=2&i=170&d=8695> (STLI WAGRI expansion), <https://www.oecd.org/en/publications/2025/10/agricultural-policy-monitoring-and-evaluation-2025_354e7040/full-report/japan_d94ab3f7.html> (OECD 2025 Japan agricultural policy context — Act on Promotion of Smart Agriculture Utilization)
- Last verified: 2026-07
