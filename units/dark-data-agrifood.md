---
id: dark-data-agrifood
title: Dark data in agrifood — collected but not surfaced
sector-position: (cross-cutting)
ai-technique-class: (cross-cutting — data infrastructure)
purpose: (cross-cutting)
claim-type: framework
activity-status: deployed
critical-voice: (none directly — structural observation; IPES-Food and Civil Eats critical voices adjacent)
capital-intensity: (not applicable)
language-literacy-profile: (not applicable)
policy-instrument: (none)
region: Global
actor: (multi-type — IoT vendors, equipment makers, government agencies, vendors, aggregators)
actor-type: (multi-type)
data-governance: dark
data-rights-framework: vendor-owned
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

Dark data in agrifood is data that is *collected but not surfaced for broader use*. This is the *inequality* problem in agrifood AI: data exists, is captured, is sometimes aggregated, but the benefits flow to vendors and aggregators, not to the farmers whose operations generated it.

### Categories of dark data in agrifood

1. **IoT sensor data** — soil moisture probes, barn environment sensors, climate sensors in greenhouses. Collected by individual farms or vendors but aggregated only at the vendor level (and not surfaced publicly).
2. **Machine telemetry** — combine yield sensors, planter population sensors, sprayer volume sensors. Captured by equipment makers (Deere, AGCO, CNH) but aggregated and operationalised within vendor platforms.
3. **Government-classified satellite data** — high-resolution satellite imagery held by governments for national-security purposes, not released for agricultural use. Some countries (India, China, Russia) have meaningful classified satellite capacity that could theoretically benefit agricultural monitoring but is not released.
4. **Aggregator-pooled data** — vendors aggregate farm data into pooled datasets (anonymised, supposedly) but do not surface the pooled data for farmer benefit. The aggregate value flows to the vendor and to the model's training, not back to the contributing farmers.

### The structural problem with dark data

The farmers whose data trains the model receive the model's recommendations back, but the *aggregated insight* (regional patterns, market signals, supply-chain trends) is held by the vendor. This is the value capture concern that the FCC ecosystem-not-technology framework names as "data governance" as one of the four systemic constraints.

The dark-data problem is structurally different from the proprietary-data problem:
- **Proprietary data** is *known to exist* but governed by restrictive terms.
- **Dark data** is *collected without the farmer's full awareness* of how it is used in aggregated form.

### The structural asymmetry

The vendor / aggregator captures:
- The aggregated value (regional pattern insights, ML training data improvements)
- The supply-chain optimisation opportunities (predictive logistics)
- The market positioning (knowing farmer-level input demand across a region)

The contributing farmer receives:
- The model's recommendation back
- Possibly a better-than-baseline prediction
- Not the aggregated insight or the supply-chain value

This asymmetry is the structural inequality that the FCC's "data governance" framework constraint names, and that Civil Eats captures in the practitioner reality quote.

### Related concepts worth distinguishing

- **Data minimization** (a privacy principle) — collect only what is needed for the stated purpose. Distinct from the dark-data problem (where data is collected regardless of minimization).
- **Data sovereignty** — control over data by communities / states / Indigenous peoples. The CARE Principles articulate this. Dark data is *without* sovereignty.
- **Data altruism / data cooperatives** — farmers pooling data for mutual benefit. Worth naming as a *response* to the dark-data problem. Worth tracking for the field guide.

### What the dark-data problem means for talks

- Most agrifood AI training data is captured without explicit farmer consent to the *aggregated* use.
- Vendor-aggregated value (regional patterns, supply-chain optimisation) does not flow back to contributing farmers.
- Government-classified satellite data (where it exists) is a structural missed opportunity.
- The data cooperative / data altruism response is a substantive alternative worth naming.

## What this unit is doing in the taxonomy

Anchors the *data-substrate × dark* cell as a `framework` claim-type. First unit in the field guide that explicitly captures the dark-data problem.

Distinct from:
- **Open data ecosystem unit** (`open-data-ecosystem.md`) — open / state / civil society cell.
- **Proprietary farm data unit** (`proprietary-farm-data.md`) — proprietary / industry cell.
- **Farm-data ownership critical voice unit** (`farm-data-ownership-critical.md`) — critical lens.

## Why it matters for talks

- Dark data is the *inequality* problem in agrifood AI. Worth naming in any talk that engages seriously with the data substrate.
- The structural asymmetry between vendor-aggregated value and farmer-received recommendation is concrete and worth naming.
- The data cooperative / data altruism response is a substantive alternative worth surfacing.
- The government-classified satellite angle is a structural missed opportunity worth knowing.

## Critical context

- The dark-data problem is structurally distinct from proprietary data (different problem) but adjacent (often same vendors).
- Data altruism / data cooperatives are an active alternative but under-deployed in our scan.
- The structural asymmetry between vendor-aggregated value and farmer-received recommendation is the substantive concern.
- The FCC's "data governance" framework constraint names this problem in the Canadian context.

## Links

- gaps: G-037 (data cooperatives / data altruism in agrifood — under-deployed in our scan)
- contested-claims: C-027 (new — "AI model recommendations give farmers value from their data" — counter: aggregated value flows to vendors, not farmers)
- related-units: open-data-ecosystem.md, proprietary-farm-data.md, farm-data-ownership-critical.md, fcc-ecosystem-not-technology.md (data governance as one of four constraints)
- sovereignty-flags: implicit — data captured without explicit consent to aggregated use; IDSov context adjacent

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - Civil Eats (2026). *A Hidden Crop for Corporate Tech: Farm Data*. March 23, 2026. https://civileats.com/2026/03/23/a-hidden-crop-for-corporate-tech-farm-data/
  - Dagne, T.W. *Access to and Control Over User Data in Agriculture*. Vanderbilt JETLaw. https://www.vanderbilt.edu/jetlaw/wp-content/uploads/sites/356/2022/06/2.-Dagne.pdf
  - FCC framework (FCC ecosystem-not-technology unit).