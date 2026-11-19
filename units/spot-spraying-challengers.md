---
id: spot-spraying-challengers
title: "Spot-spraying challengers — Greeneye, WEED-IT, ONE SMART SPRAY and the sensing-modality split beyond Deere See & Spray"
sector-position: on-farm-production-open-field
ai-technique-class: computer-vision, sensors-and-iot-ml
purpose: input-reduction
claim-type: example
unit-kind: deployment
activity-status: deployed (Greeneye, WEED-IT, ONE SMART SPRAY commercial; Solinftec Solix commercial at small-robot scale)
critical-voice: vendor-figure-verification
capital-intensity: industrial; small-robot (Solinftec, Aigen)
language-literacy-profile: standard-smartphone
policy-instrument: (none)
region: NA-US, NA-Canada, EU (Netherlands origin — WEED-IT/Rometron), IL (Greeneye origin)
actor: Greeneye Technology; Rometron / WEED-IT; Bosch + BASF (ONE SMART SPRAY); Solinftec; Aigen
actor-type: vendor
data-governance: proprietary
data-rights-framework: vendor-owned
last-verified: 2026-11
last-regionally-scanned: 2026-11
---

## Content

John Deere's See & Spray (`units/john-deere-see-and-spray.md`) is the canonical camera-based spot-spraying deployment — but it is not the only one, and since the corpus's July 2026 scans it is no longer even the only one at disclosed commercial scale. This unit maps the challenger layer and, more importantly, the sensing-modality split that the "spot spraying" label conceals.

**Greeneye Technology — camera-based retrofit, second player at disclosed scale.** Israeli-origin, North American HQ established in Salina, Kansas (announced 13 October 2026) after what the company calls a record 2026 season: more than 500,000 acres sprayed across 12 US states (vendor-reported; vs Deere's 5M in 2025), 81% average non-residual herbicide savings, ~6 million gallons saved, >98% weed-detection accuracy (all vendor-reported — the trade coverage in Strip Till Farmer, Farm Progress and Precision Farming Dealer derives from the same company release). Architecture: a retrofit dual-tank/dual-line system that fits any brand of commercial sprayer, no per-acre fee — the opposite of Deere's equipment-locked, per-acre-guarantee model. Supports 8 crops (corn, soy, cotton, edible beans, wheat, barley, triticale, sorghum) with 4 more planned for 2027 (oats, sugar beets, peanuts, canola). Channel expansion: Intellifarms Northern Division dealer partnership (11 August 2026; SD/ND/IA/KS).

**WEED-IT (Rometron) — fluorescence sensing, a different modality.** The Dutch incumbent formally entered the US market with its Wellington, Colorado HQ operational and first dealers signed (announced 12 November 2026: Odessa Trading Company and Morrow County Grain Growers in the Pacific Northwest; AgriTech America for Montana plus nationwide orchard/vineyard). Technology: fluorescence/chlorophyll optical detection — green-on-brown sensing with no cameras, working day and night at up to 25 km/h, retrofit onto any sprayer brand, no per-acre fee. Vendor-claimed herbicide reduction 60–95% depending on weed density; vendor-claimed >100 million hectares sprayed worldwide since 1999; several hundred units operating in Australia (trade-reported via sprayers101). Structurally notable: this is a 25-year-old sensing technology entering the US row-crop market just as camera-based AI spot spraying consolidates — fluorescence sensing detects plant stress, not weed species, which is a different (and in some respects more conservative) targeting philosophy.

**ONE SMART SPRAY (Bosch + BASF) — the OEM-integration route.** Announced May 2023 (pre-dating the corpus's scan window); its structural importance is the integration path: the CNH–BASF partnership carries green-on-green spot spraying into Case IH and New Holland sprayers, led by the Raven team. No new deployment figures surfaced in the 2026-11 pass — the disclosure gap vs Deere and Greeneye persists.

**Solinftec Solix — the per-plant small-robot route.** The clearest small-robot scale datapoint in US row crops, disclosed at Farm Progress Show (1 September 2026): through July 2026, >100 Solix robots in 13 US states plus Puerto Rico, 55,427 acres (15× the acreage of three years ago), >95 million plants monitored individually, 83–89% chemical-use reduction with an 85% average (all vendor-reported), and >1,700 autonomous refills transferring >45,000 gallons in the first full commercial season of the autonomous Refill Station. Four-model family announced (solar X1, battery XT, gas/diesel XR, hybrid XC; 50–1,200 gal); the Solix XR diesel prototype (200 gal, 5–8 mph, broadcast + spot) runs with 6 key customers in 2027; ~200 robots + 80 refill stations targeted for 2027. Unit economics differ fundamentally from boom-sprayer spot spraying: per-plant monitoring on a scout-then-treat model rather than treatment-on-the-go at 15 mph.

**Aigen Element — solar mechanical weeding, niche.** Element Gen 2 X4 launched 16 September 2026: four independently operating arms, mechanical root removal in-row and between-row, solar-powered, no herbicide, no diesel. Vendor-reported cumulative: >100 robots built, >15,000 autonomous hours across CA, MN, ND in soybean, tomato, sugarbeet, lettuce, cotton; an "Alchemy" simulation/world-model suite trains the robot on a new crop in under a week, mostly on synthetic data. Fleets sold for the 2027 season; ~200 acres/season per 5-robot crew (trade-reported). Niche scale, but the herbicide-free mechanical alternative is a category the camera-based systems cannot offer.

## What this unit is doing in the taxonomy

Extends `units/john-deere-see-and-spray.md` across the challenger layer and names the sensing-modality split: **camera-based green-on-green** (Deere, Greeneye, ONE SMART SPRAY — species-level detection, ML classifiers), **fluorescence sensing** (WEED-IT — plant-stress detection, no camera, 25-year heritage), and **per-plant small robotics** (Solinftec, Aigen — scout-and-treat or mechanical, different unit economics). The retrofit/no-per-acre-fee pattern (Greeneye, WEED-IT) is the direct commercial counter to Deere's equipment-locked guarantee model; where See & Spray monetises per acre, the challengers monetise per machine.

## Why it matters for talks

The scale comparison is the honest frame: Deere 5M acres (2025) vs Greeneye 0.5M (2026) vs Solinftec 55K (2026, per-plant) — a 10× and a 90× gap, all vendor-reported. Any claim that "spot spraying is proven at scale" rests on one vendor's figures; any claim that "challengers can't scale" is now contradicted by Greeneye's disclosed season. The modality split (camera vs fluorescence vs mechanical) is a genuinely under-reported dimension — most coverage treats "See & Spray-like" as one category.

## Critical context

- Every quantitative figure in this unit is vendor-reported (G-483). The Greeneye trade coverage is single-release-derived; the Solinftec figures come from the company's Farm Progress Show disclosures; WEED-IT's 100M-hectare cumulative claim spans 25 years of global horticulture/orchard use, not US row crops.
- The Arkansas See & Spray trial's seed-bank finding (`units/john-deere-see-and-spray.md` critical context; C-362) applies a fortiori to the challengers: higher claimed savings percentages (81%, 85%, 60–95%) imply more aggressive skip behaviour, and none of the challengers has published any multi-year weed-seed-bank outcome data.
- Solinftec's 85% average chemical reduction is not directly comparable to Deere's ~50%: different application model (per-plant vs on-the-go), different crops mix, and no common measurement protocol. Comparing them as if equivalent would be a category error.
- Aigen's ">15,000 autonomous hours" is a machine-hours figure, not an acreage figure; conversion via "~200 acres/season per 5-robot crew" is trade-reported arithmetic, not a disclosed total.

## Links

- gaps: G-483 (independent verification of spot-spraying challenger figures), G-484 (multi-year multi-state outcomes for low-sensitivity spot spraying), G-020 (independent verification of vendor-reported input figures)
- contested-claims: C-362 (spot-spraying ~50% herbicide reduction — challenger claims are more aggressive and less verified), C-016 (the standing precision-input-reduction claim this layer extends)
- related-units: john-deere-see-and-spray.md, retrofit-autonomy-economics.md, row-crop-ai-independent-adoption-evidence.md, cnh-raven-autonomous-portfolio.md (ONE SMART SPRAY integration route)
- scan: scans/2026-11-row-crop-grain-deep-dive.md (§2.1 items 2–3)
- sovereignty-flags: retrofit architecture (Greeneye, WEED-IT) keeps the data layer on the farmer's existing sprayer platform rather than the OEM's — the most concrete data-sovereignty-relevant design difference in the row-crop spraying layer

## Freshness

- last-verified: 2026-11
- last-regionally-scanned: 2026-11
- sources:
  - Strip Till Farmer (2026). *Greeneye Technology Establishes North American Headquarters in Salina, Kansas Following Record Year*. October 13, 2026. https://www.striptillfarmer.com/articles/6928-greeneye-technology-establishes-north-american-headquarters-in-salina-kansas-following-record-year
  - Future Farming (2026). *Solinftec expands Solix fleet after 85% average chemical reduction*. September 2026. https://www.futurefarming.com/crop-solutions/weed-pest-control/solinftec-expands-solix-fleet-after-85-average-chemical-reduction
  - AgriMarketing (2026). *WEED-IT USA fully operational, first dealers signed*. November 12, 2026. https://www.agrimarketing.com/s/158623
  - Aigen (2026). *Element Gen 2 X4 announcement*. September 16, 2026. https://www.aigen.io/news/element-gen2-x4
  - CNH Industrial media (2026). EMEA newsroom — ONE SMART SPRAY integration context (null check for new deployment figures). https://media.cnh.com/EMEA
