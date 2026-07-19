# Units

Units are the substrate from which talks are built. Each unit documents a single concrete AI deployment (or, in some cases, a *pattern claim* over multiple deployments) at a known actor with named-source evidence.

## Layout

- `cargill-carve-meat-processing.md`, `tyson-aws-poultry-vision.md`, `jbs-usa-volur-carcass-sorting.md`, `smithfield-pork-vision-robotics.md`, `maple-leaf-foods-ai-canada.md` — NA meat-processing AI quartet + Canadian counterpart
- `tomra-na-food-sorting.md`, `key-technology-na-food-sorting.md`, `kpm-siftai-beef-fm-detection.md`, `headwall-laitram-hyperspectral-seafood.md` — NA food-processing optical sorting + hyperspectral AI
- `sysco-ai360-foodservice.md`, `usfoods-wheres-my-truck-menu-iq.md`, `ahold-delhaize-usa-retailer-ai.md` — NA foodservice distribution + grocery wholesale AI
- `albertsons-afresh-fresh-suite.md`, `leanpath-food-waste-tracker.md`, `winnow-na-foodservice.md` — US commercial-kitchen / fresh-grocery / food-waste AI
- `walmart-sparky-ai-shopping-assistant.md`, `instacart-cart-assistant.md`, `instacart-ask-instacart-search.md`, `kroger-gemini-shopping-assistant.md` — US grocery-retail consumer-facing AI
- `mcdonalds-ibm-ai-drive-thru-discontinued.md`, `mcdonalds-ibm-aot-discontinued.md`, `doordash-ai-voice-ordering-discontinued.md`, `kroger-ocado-cfc-closures-discontinued.md` — discontinued pilots (sector honesty)
- `taco-bell-omilia-drive-thru-voice-ai.md`, `wendys-freshai-google.md`, `dominos-dom-voice-assistant.md`, `sweetgreen-infinite-kitchen.md` — US QSR/restaurant voice-AI + kitchen robotics
- `hungryroot-ai-meal-recommendation.md`, `uber-eats-ai-cart-assistant.md`, `myfitnesspal-cal-ai-coach.md`, `zoe-us-ai-personalised-nutrition.md` — NA consumer-nutrition / delivery AI
- `north-america-consumption-ai-pattern.md` — meta frame on NA consumption-layer AI landscape (mid-2026)
- (other units in the directory cover on-farm production, EU/China industry, academic institute clusters, frameworks, critical voices — see directory listing)

## Cycle status — food-side deepening (July 2026)

**Trigger.** User observed that "agrifood" had been treated as "agri + food" in name but the knowledge base was heavy on the agri side. Audit confirmed: pre-cycle food-side (post-harvest → waste-and-recovery) was 13 unique units vs 23 on-farm — ratio 0.43.

**Cycle outcome (broad scope):** +30 new units across three waves.

| Sector | Pre-cycle | Post-cycle | Δ |
|---|---|---|---|
| inputs | 1 | 1 | 0 |
| on-farm-production-open-field | 20 | 20 | 0 |
| on-farm-production-protected | 6 | 6 | 0 |
| animal-production | 7 | 7 | 0 |
| post-harvest-handling-and-storage | 1 | 1 | 0 |
| **processing** | **2** | **11** | **+9** |
| **distribution-and-retail** | **10** | **19** | **+9** |
| **consumption** | **6** | **19** | **+13** |
| **waste-and-recovery** | **1** | **3** | **+2** |
| Food-side unique units | 13 | 42 | +29 |
| **Food-side / on-farm ratio** | **0.43** | **1.83** | **+1.40** |

**Substantive findings the cycle surfaced (worth surfacing in talks):**

1. **NA meat-packing AI quartet is now complete** — Cargill (beef line CV) + Tyson (poultry line CV) + JBS (beef cut-plan AI) + Smithfield (pork robotics + vision). The four largest US protein packers by volume all have publicly-documented AI in production. Talk-stage structural observation.

2. **Discontinued is a populated category.** Three consumer-facing AI discontinuations (McDonald's × IBM drive-thru AOT in two framings + DoorDash voice-ordering) and one grocer fulfilment walk-back (Kroger × Ocado CFC closures with candid "bet on robotics went too far") in 18 months. Vendor narratives emphasise what's deployed; this cycle records what's been walked back.

3. **Two discontinued-on-the-same-tech-axis pairs** — McDonald's × IBM AOT (IBM-mediated, accent/dialect failure) vs Taco Bell × Omilia (890+ drive-thrus, 38 states) on the same QSR-voice-AI axis. McDonald's × Kroger Ocado (fulfilment robotics) vs Walmart Sam's Club AI exit tech (120+ clubs, line-side CV) on the in-store retail-tech axis. Both pairs are useful industry case studies.

4. **Big-Three-US-grocer × foundation-model matrix** — Walmart ↔ OpenAI, Kroger ↔ Google (Gemini Enterprise Jan 2026), Loblaw ↔ OpenAI (Canada). Three retailers, three vendors. OpenAI Instant Checkout is the convergent layer but foundation-model choice is still open.

5. **TOMRA NA / Key Technology NA pair fills G-019** explicitly named in the regional NA/EU industry scan. Together they cover produce, berries, leafy greens, tree nuts, pasta, wine across 19+ named NA customers.

6. **NA dairy processing AI is genuinely empty** as a verifiable pattern (Saputo internal only; Agropur = MES not vision AI; Hilmar/Leprino/DFA = no public deployment). Recorded as a structural gap.

7. **Foodservice distribution AI pattern** — Sysco AI360 (90% GenAI sales-consultant adoption) + US Foods (Where's My Truck fleet-wide AI ETA + Menu IQ). Two of the largest NA foodservice distributors now both publicly-documented AI. The next two (PFG, GFS) are thinner and worth tracking.

8. **All 30 cycle units are vendor actor-type** — consistent with project priority (memory: user has signalled "don't expect a lot of non-vendor actor types"). Future cycles looking to rebalance actor-type should pick a different sub-sector.

## Cross-reference debt — RESOLVED

A pre-cycle audit reported **62 unresolved cross-references**, but a long-prefix sweep showed those were predominantly an artifact of the cross-reference scanner matching sub-tokens inside longer filenames (e.g. `illinois-institute.md` matched as a sub-token of `aifarms-illinois-institute.md`). Re-running with longest-prefix matching reduced the count to **8 real broken refs**, all in **4 files**, all addressed here:

- `units/agrosmart-brazil.md` — dropped `kilimo-argentina.md` (no such unit; not invented)
- `units/cornell-atkinson-idsov-cluster.md` — fixed `care-principles-mission.md` and `ieee-2890-mission.md` to `../quotes/institutional-mission-statements/...` (cross-directory ref to existing quote file)
- `units/open-source-in-agrifood-framework.md` — fixed four pillaud/nelson/leake refs to `../quotes/...` paths
- `units/sollum-sun-as-a-service.md` — dropped `hoogendoorn-quebec-greenhouse.md` (no such unit; not invented)

Post-cleanup: **0 broken cross-references** in the knowledge base.


## Freshness

- last-verified: 2026-07 (food-side deepening cycle)
- last-regionally-scanned: 2026-07
