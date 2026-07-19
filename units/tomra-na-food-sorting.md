---
id: tomra-na-food-sorting
title: TOMRA Food — optical sorting + ML at NA customer sites (Sacramento HQ; named California, Michigan deployments)
sector-position: processing
ai-technique-class: computer-vision
purpose: input-reduction, supply-chain-efficiency
claim-type: example
activity-status: deployed
critical-voice: (none directly — vendor framing)
capital-intensity: industrial
language-literacy-profile: (not applicable)
policy-instrument: (none)
region: NA-US (Sacramento CA HQ; named customers in CA, MI); multi-continent (TOMRA parent Norway; >12,800 global installations)
actor: TOMRA Food (Norway HQ, Sacramento CA US HQ; machine-vision sorter vendor); customers include Pacific Coast Producers (CA canned fruit, 51 sorters across 4 plants), Sackett Ranch (MI potato-chip supplier, 8,200 acres), The Almond Company (Harris Family, Madera CA), Snow Valley Food (NA potato processor)
actor-type: vendor
data-governance: proprietary
data-rights-framework: vendor-owned
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

TOMRA Food's NA operations are anchored in Sacramento, California. The product line — TOMRA 3A, 5A, 5B, 5C, 5S — combines cameras, lasers, BSI sensors with machine learning / deep learning models for defect and foreign-material removal on food-processing lines. TOMRA Insight is the cloud analytics layer downstream of the sorters.

**Named NA customer deployments (vendor case studies):**
- Pacific Coast Producers (Woodland, Dalles, Lodi, Oroville CA; 51 TOMRA 5A/5B sorters across 4 plants) — canned fruit
- Sackett Ranch (Michigan; 8,200 acres supplying top US potato-chip brands) — TOMRA 3A + 5A
- The Almond Company / Harris Family Enterprises (Madera CA) — TOMRA 5C, explicitly framed as "machine learning and big-data analysis"
- Snow Valley Food — TOMRA Eco Steam Peeling + 5A/5B on wet and frozen French-fry lines
- TOMRA also names >12,800 global installations; Sacramento HQ explicit per Fresno State nut-processing lab documentation

**What the AI does specifically:**
- Foreign-material detection on the line (plastic, wood, bone, paper etc.)
- Colour and shape classification for defect removal
- Size grading via the 5C's ML-driven "most accurate foreign material removal possible" framing
- TOMRA Insight cloud platform for downstream analytics

**Why this is the load-bearing EU-parent / NA-deployed food-processing AI unit.** G-019 in the regional NA/EU industry scan explicitly named TOMRA (and Key Technology, Ellab) as the un-surfaced EU/US food-processing AI cluster. This unit fills that gap.

## What this unit is doing in the taxonomy

Anchors the **processing × computer vision × foreign-material-and-defect-detection** cell with an EU-parent / NA-deployer pattern. Sister units:
- **Key Technology** (`key-technology-na-food-sorting.md`) — US-HQ-in-Walla-Walla comparator with 15+ NA customers
- **Apeel × RipeTrack** (`apeel-ripetrack.md`) — post-harvest, not processing line
- **Cargill CarVe** (`cargill-carve-meat-processing.md`) — meat, not produce; computer vision but on carcass yield

## Why it matters for talks

- *The EU-parent / NA-deployed pattern is structurally distinct from US-HQ vendors like Key Technology and Cargill.* Data sovereignty considerations differ; the ML model is centrally trained and pushed to installed sorters.
- *TOMRA Insight (cloud analytics downstream of the sorters) is the implicit AI data layer.* Whether Tomra retains aggregate sort data, shares data with customers, or trains on cross-customer aggregates — none of this is publicly documented.
- *Pacific Coast Producers' 51-sorter footprint across 4 plants is the kind of multi-plant deployment that signals corporate-level commitment.* Worth surfacing because it is one of the most concrete multi-plant NA food-processing AI installations in the public corpus.
- *Conflict of interest at the line.* TOMRA's ML is trained on what counts as "defect" or "foreign material" — vendor definitions shape what gets removed from the food supply. The vendor's claim of "the most accurate foreign material removal possible" is technical, but the question of how accuracy is defined (against what reference distribution) is not independently audited.

## Critical context

- All deployments are TOMRA case-study reported; no independent third-party verification of yield/defect-removal figures surfaced.
- Customer lists ("and others") are not exhaustive — TOMRA has more NA customers than the four named here, but only named case studies get cited.
- Data sovereignty: TOMRA Insight is cloud-mediated; what cross-customer data is retained, used for ML training, shared with the parent (NO) — not publicly disclosed.
- TOMRA's wider 12,800+ global installations figure is corporate-reported; site-by-site audit not feasible.
- The Almond Company framing ("machine learning + big-data analysis") is TOMRA marketing language — independent verification of the ML component is the case-study itself.

## Links

- gaps: G-019 (post-harvest / food processing beyond Apeel — this unit partially fills the produce side of the gap)
- contested-claims: C-017 (vendor-platform benefit); C-048 (new: vendor-defined "accuracy" of foreign-material detection in food-sorting ML — auditing standards not surfaced)
- related-units: key-technology-na-food-sorting.md (US-HQ comparator; 15+ NA customers), cargill-carve-meat-processing.md (beef CV sister), apeel-ripetrack.md (post-harvest, produce, not processing line), soralink-export-food-processing.md (Canadian processing AI, predictive maintenance not vision), john-deere-see-and-spray.md (on-farm CV, completely different setting)
- sovereignty-flags: implicit — TOMRA Insight routes data to vendor cloud; cross-customer aggregation not documented publicly

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - TOMRA Food (2025). *Pacific Coast Products spotlights TOMRA 5A and TOMRA 5B performance*. https://www.tomra.com/food/media-center/news/2025/pacific-coast-products-spotlights-tomra-5a-and-tomra-5b-performance-on-under-the-lid-series
  - TOMRA Food. *Sackett Ranch customer story*. https://www.tomra.com/food/media-center/customer-stories/sackett-ranch
  - Potato News Today (2024). *Sackett Ranch utilizes TOMRA sorters*. https://www.potatonewstoday.com/2024/03/14/behind-the-scenes-of-crunch-sackett-ranch-utilizes-tomra-sorters-to-achieve-premium-potato-chip-production/
  - Snack and Bakery. *TOMRA 5C case study — The Almond Company*. https://www.snackandbakery.com/articles/97088-case-study-tomra-5c-delivers-on-promise-of-added-value-and-efficiency-for-the-almond-company
  - Potatopro. *Snow Valley Food benefits efficient collaboration with TOMRA Food*. https://www.potatopro.com/news/2022/potato-processor-snow-valley-food-benefits-efficient-collaboration-tomra-food
  - Fresno State JCAST. *Western Tree Nut Association Processing Lab — TOMRA Sacramento HQ reference*. https://jcast.fresnostate.edu/indtech/about-us/facilities/nut-processing-lab.html
  - TOMRA corporate. *About TOMRA — ~12,800 global installations*. https://www.tomra.com/about-tomra
