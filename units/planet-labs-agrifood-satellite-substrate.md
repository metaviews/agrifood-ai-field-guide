---
id: planet-labs-agrifood-satellite-substrate
title: Planet Labs PBC — 200+ CubeSat constellation providing daily satellite imagery substrate for US agrifood AI (Corteva, Bayer, Organic Valley)
sector-position: (cross-cutting — satellite substrate serving on-farm through consumption; input-vendor and cooperative consumer-facing deployment)
ai-technique-class: computer-vision (satellite imagery), predictive-ml (analytical feeds and planetary variables), decision-support-systems (crop health monitoring, yield estimation)
purpose: yield-optimisation (crop selection, seeding, harvest planning), input-reduction (precision application), climate-adaptation (drought monitoring), supply-chain-efficiency (commodity trader and cooperative inventory)
claim-type: example (deployed substrate) + framework (satellite-imagery-as-input architecture)
activity-status: deployed (commercial scale; multi-continent)
critical-voice: (none directly — vendor framing)
capital-intensity: industrial (Public Benefit Corporation; ~200 CubeSats; multi-billion-dollar public company)
language-literacy-profile: standard-smartphone (Planet Insights Platform cloud access)
policy-instrument: (none directly — though Planet data is used in USDA NASS Cropland Data Layer and other US federal agricultural data products)
region: NA-US (San Francisco HQ; global deployment — 65 countries); specifically named US customers include Corteva, Bayer, Organic Valley (farmer-owned cooperative)
actor: Planet Labs PBC (San Francisco CA); co-founders Will Marshall and Robbie Schingler (former NASA scientists, 2010)
actor-type: vendor (Public Benefit Corporation; data infrastructure)
data-governance: proprietary (Planet Imagery); federated customer integrations (Planet Insights Platform; partner analytics)
data-rights-framework: Planet-owned (imagery archive); customer-by-customer integration agreements (e.g., Organic Valley pasture-mapping tool)
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

Planet Labs PBC is a US-headquartered (San Francisco) Public Benefit Corporation operating the **world's largest commercial Earth-imaging satellite constellation** — approximately 200 CubeSats (compact, bread-loaf-sized nanosatellites) flying in sun-synchronous orbit. Planet captures approximately **4 million images daily**, providing daily coverage of every point on Earth's landmass at sub-10-metre resolution.

The company was co-founded in 2010 by Will Marshall and Robbie Schingler, former NASA scientists, initially developing low-cost compact satellites in a Californian garage. Per Planet's own positioning, the Public Benefit Corporation structure is designed to *"accelerate humanity to a more sustainable, secure, and prosperous world by illuminating environmental and social change."*

### Constellation and product tiers

- **PlanetScope** (SuperDove): near-daily global coverage, 3.7m resolution, 8 spectral bands. The workhorse imagery product for agricultural applications.
- **SkySat**: 50cm resolution, sub-daily revisit tasking. High-resolution for specific fields, individual farm features.
- **Pelican** (next-generation, in deployment per Planet 2026 product pages): 30cm resolution target; rapid, responsive, resilient tasking.
- **Tanager**: hyperspectral + methane emissions monitoring.
- **Owl**: next-generation monitoring constellation (Planet 2026 product page).
- **Planet Insights Platform**: cloud-based platform for analytics-ready data.
- **Planetary Variables**: derived time-series products (soil water content, crop biomass, land surface temperature).
- **Planet Mosaics**: analysis-ready global mosaics.
- **Forest Carbon**: aboveground biomass estimates.
- **Planet Analytic Feeds**: pre-computed analytical outputs.

### Scale and customer base

- **34,000+ users** in **65 countries** (per evokeAG. interview, November 2022).
- **10+ billion square kilometres** of imagery in Planet Archive; on average **1,800 images for every point on Earth** since 2016.
- **Corteva and Bayer** are named commercial customers (per evokeAG. interview): use Planet data to evaluate crop yields, assess irrigation needs, and build predictive production models.
- **Organic Valley** (US farmer-owned organic dairy cooperative): partnership using Planet data to develop a pasture-mapping tool.

### Organic Valley case study (the cooperative anchor)

The Organic Valley case study is the **most concrete US agricultural customer case** for Planet:

- **Context**: Organic Valley is one of the world's largest organic dairy brands. Planet Labs and Organic Valley partnered to develop a pasture-mapping tool for the cooperative's dairy farmers.
- **Outcome**: *"helped dairy farmers achieve a 20 per cent increase in pasture utilisation"* (per evokeAG. interview, citing Organic Valley data).
- **Structural significance**: This is a **farmer-owned cooperative structure** leveraging US commercial satellite imagery — structurally distinct from the input-vendor pattern (Bayer, Corteva) where data flows from farm to input vendor. The cooperative structure has different ownership and benefit flows.

The case study validates two structural observations:
1. **Satellite substrate can serve cooperative structures** — the data substrate doesn't dictate the governance structure.
2. **The cooperative angle is a counterpoint to the IPES-Food data-flow critique** — when the data substrate serves a cooperative, the data-flow path differs structurally from when it serves an input vendor.

### Corteva and Bayer use cases (the input-vendor substrate)

Per evokeAG. interview: Corteva and Bayer use Planet data to evaluate crop yields, assess irrigation needs, and make predictive production models. This positions Planet as the **upstream satellite data layer** for input-vendor digital platforms (Climate FieldView, Granular Insights). Structural implication: the same satellite imagery feeds different downstream platforms, with different governance models.

### US public-sector use

Planet data is used in USDA NASS Cropland Data Layer and other US federal agricultural data products. The Public Benefit Corporation positioning intersects with US federal agricultural statistics — Planet data is not just commercial substrate but also inputs to public agricultural statistics.

### Frequency of imagery as the competitive differentiator

Per Planet Labs (evokeAG.): *"Traditionally, satellite data available to farmers has been from the European Space Agency's Sentinel or NASA's Landsat – big public datasets with upwards of 60 metre resolution... Such coarse imagery doesn't allow for paddock level decision-making."*

Planet's competitive position: daily coverage at 3.7m resolution (PlanetScope), 50cm tasking (SkySat), 30cm next-gen (Pelican). Sentinel-2 (European) provides 5-day revisit at 10m resolution for free; Landsat (US NASA / USGS) provides 16-day revisit at 30m for free. Planet's commercial differentiator is frequency and resolution, not the imagery itself (which is a public-good alternative for lower-resolution use cases).

### Comparison with Taranis (the aerial-imagery vendor)

Per `units/taranis-aerial-imagery.md` (Israel-origin, multi-continent drone-captured leaf-level imagery):
- **Planet**: satellite constellation, daily coverage, 3.7m–50cm resolution, US-headquartered.
- **Taranis**: drone-captured leaf-level imagery, 10–20MB per image, TensorFlow ML on Google Cloud, Israeli-origin, multi-continent.

The structural difference: Planet provides **continent-level coverage at high frequency**; Taranis provides **field-level detail at lower frequency**. Different scales, different deployment models. Both are commercial vendors; both are vendor-framed without consolidated critical-voice literature.

## What this unit is doing in the taxonomy

Anchors the **satellite-imagery substrate × cross-cutting agrifood AI** cell of the matrix. Distinct from:
- Taranis (`units/taranis-aerial-imagery.md`) — aerial drone imagery; Israel-origin; multi-continent.
- DJI Agriculture (`units/dji-agriculture-global-export.md`) — drone hardware vendor; China-origin.
- Sentinel-2 / Landsat — public-good alternative at lower resolution and frequency.

Planet Labs is the **US-headquartered commercial satellite substrate** for agricultural AI. Positioned as upstream infrastructure for input-vendor digital platforms (Bayer, Corteva) and as direct-enablement substrate for cooperatives (Organic Valley) and public-sector statistics (USDA NASS).

## Why it matters for talks

- **The US-headquartered alternative to Taranis** for commercial satellite-based agricultural intelligence. Worth mentioning in any talk about satellite-substrate agritech.
- **The Organic Valley cooperative case study is a counterpoint to the input-vendor pattern** — useful for any talk about data-governance alternatives within US agritech.
- **The Public Benefit Corporation structure is a specific governance choice** — Planet positions itself as serving environmental and social benefit alongside commercial returns. Worth flagging as a corporate-structure observation.
- **The competitive positioning vs. public-good Sentinel / Landsat** is the field-vs-public-good tension in agricultural satellite data. Useful for any talk about agritech data infrastructure.
- **The downstream customer diversity (input vendor + cooperative + public sector)** is structurally meaningful — the same satellite substrate serves different governance models.

## Critical context

- **Customer deployments (34,000+ users, 65 countries) is vendor-reported.** Specific acreage or per-customer deployment scale not disclosed at the same granularity as Deere See & Spray.
- **The 20% pasture utilisation increase for Organic Valley** is from Organic Valley/Planet joint case study — vendor-reported jointly; independent verification not surfaced.
- **Planet's Public Benefit Corporation status is a governance posture, not a substantive departure from commercial operations.** The PBC structure does not require specific distribution of profit or specific operational commitments beyond the public-benefit mission.
- **The hyperscaler substrate** (Planet data flows through AWS, Google Cloud, Microsoft Azure for customer integration) is a separate infrastructure layer (per `scans/2026-07-us-industry-ai.md` G-167). Planet is not itself a hyperscaler; it sits one layer down.
- **Geopolitical considerations on commercial satellite imagery** — Planet data has been used in Ukraine/Russia context for agricultural monitoring; not directly relevant to US agritech but worth noting for any global scan.
- **The Pelican 30cm constellation deployment** is ongoing; commercial availability per Planet 2026 product page.

## Links

- gaps: G-167 (hyperscaler substrate — Planet data flows through hyperscaler cloud infrastructure for customer integration), G-173 (US grain/seed processing AI — Cargill/ADM/Bunge grain-handling AI; some likely use Planet data as upstream substrate)
- contested-claims: C-111 (Microsoft FarmBeats / ADMA reaches producer adoption — Planet data is the comparable upstream substrate)
- related-units: taranis-aerial-imagery.md (the aerial-imagery counterpoint; Israel-origin), dji-agriculture-global-export.md (drone hardware vendor; China-origin; structural contrast), bayer-climate-fieldview.md (downstream input-vendor customer), corteva-granular-carl-one-seed.md (downstream input-vendor customer), oada-open-ag-data-alliance.md (open-data context — Sentinel/Landsat public-good alternative)
- related-quotes: (none — Planet Labs leadership voices not yet in quotes/ folder; surface opportunity)
- related-scans: scans/2026-07-us-industry-ai.md (this unit is the US satellite substrate anchor for that scan), scans/2026-07-regional-industry-na-eu.md (cross-region industry activity context), scans/2026-07-brazil-beef-seed-ai.md (Brazilian agriculture uses Planet satellite data for deforestation monitoring — different application cell)
- sovereignty-flags: implicit — Planet data flows to US-headquartered commercial entity; downstream governance varies by customer (input vendor / cooperative / public sector); the cooperative case (Organic Valley) is a substantively different data-flow path than the input-vendor case (Bayer, Corteva)

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - Planet Labs. *Precision Agriculture Imaging with Planet Satellite Solutions*. https://www.planet.com/industries/agriculture/
  - Planet Labs. *Constellations Overview*. https://www.planet.com/constellations/
  - Planet Labs. *Planetary Variables*. https://www.planet.com/products/planetary-variables/
  - Dunn, Casey. *How space tech scaleup Planet Labs is driving agricultural productivity*. evokeAG., November 23, 2022. https://www.evokeag.com/how-space-tech-planet-labs-driving-agricultural-productivity/
  - Planet Labs Pulse. *Satellites and cows: Planet and Organic Valley complete pilot and expand collaboration across cooperative*. https://www.planet.com/pulse/satellites-and-cows-planet-and-organic-valley-complete-pilot-and-expand-collaboration-across-cooperative/
  - Planet Labs Pulse. *Seeing signal through the noise: Using satellite data time series for agriculture*. https://www.planet.com/pulse/seeing-signal-through-the-noise-using-satellite-data-time-series-for-agriculture/
