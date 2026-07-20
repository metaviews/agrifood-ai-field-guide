---
title: US Industry AI Activity — end-to-end
date: 2026-07
---

# US Industry AI Activity — end-to-end — July 2026

**Status.** Sixth regional scan, completing the US picture. The previous US-side scans (`scans/2026-07-regional-industry-na-eu.md` for vendor NA-EU coverage, `scans/2026-07-us-academic-research.md` for the NSF/USDA-NIFA + Land-grant institutional layer) cover the academic layer in depth and certain prominent vendors. This scan consolidates the **US industry picture end-to-end**: equipment makers, input-vendor digital platforms, specialty-crop robotics, livestock pharma and monitoring, food processing AI, retail and consumer-facing AI, biotech/digital biology, and the hyperscaler-agrifood partnerships that quietly hold much of the stack together. The intent: provide the field guide with the broad US industry substrate the user flagged as under-served.

**Scope.** US-headquartered and US-deployed AI activity across the agrifood value chain, with attention to (1) deployment scale, (2) corporate strategy (especially input-vendor and equipment-vendor corporate restructuring), (3) the specialty-crop and livestock AI gaps that the field guide has already named as G-018 and G-019, and (4) critical voices on US industry deployment, particularly farmworker-side.

**Method.** Substantive reading of vendor sites, the AgFunderNews Corteva interview with Brian Lutz (October 2025), the Corteva planned-separation Reuters/AgFunderNews coverage, CNH Industrial tech-day materials, Pivot Bio PROVEN G3 release, Microsoft FarmBeats, Zoetis Diagnostics, TOMRA Food product pages, Planet Labs evokeAG. interview, the Sullivan (UC Santa Cruz) SSRC essay on Salinas Valley farmworker AI, and the existing field-guide units (Cargill CarVe, JBS × Völur, Tyson × AWS, Smithfield vision robotics, John Deere See & Spray, AGCO PTx, Indigo Ag). All claims attributed inline.

**Cutoff.** Active in the last 18 months. Foundational positioning from 2020-2022 acceptable where the actor or technology has not substantively changed.

**Note on bias.** Most US industry actors report their own figures favourably. Every vendor figure cited here carries the vendor source; independent verification at scale is rare. Critical voices are sourced where they exist (Sullivan for farmworkers; Carolan for sociology; AgFunderNews for analyst skepticism on the Corteva split). The corpus discipline — cite the figure, name the source, flag the verification gap — applies throughout.

---

## 1. The currents in US industry AI

Before the actor-by-actor survey, four broad stances dominate the US industry landscape. These currents are not exclusive — most actors sit in two or more — but naming them tells the reader where the disagreements actually live.

### Current A — Equipment-vendor lock-in (Deere pattern; CNH/Raven counter)

The structural backbone of US row-crop AI. John Deere's See & Spray (per `units/john-deere-see-and-spray.md`, 5 million acres across 2025, vendor-reported 50% herbicide reduction) is the canonical example. **CNH Industrial**, with the 2021 acquisition of **Raven Industries**, has built an alternative trajectory: Driver Assist Harvest, Driverless Tillage, Baler Automation, and the Case IH Trident 5550 autonomous spreader. CNH explicitly frames its work as *"the agriculture industry's first autonomous spreader"* (Case IH + Raven, Farm Progress Show 2022, per CNH Industrial). **AGCO PTx** (per `units/agco-ptx.md`) takes a third path — brand-agnostic retrofit that works across mixed fleets.

The underlying disagreement within this current: lock-in (Deere) vs. open-architecture (AGCO) vs. Raven-acquired vertical integration (CNH). All three are US-headquartered. All three claim operational scale; only Deere discloses acres. The FTC-Deere right-to-repair action (2025-2026) is the policy backdrop that surfaces the disagreement as more than product strategy — it becomes a structural question about who owns the farm-equipment data layer.

### Current B — Input-vendor digital platform (Bayer pattern; Corteva disruption)

The second backbone. **Bayer** Climate FieldView (per `units/bayer-climate-fieldview.md`) is the canonical example — the data layer that feeds Bayer's seed and crop-protection R&D. **Corteva** has built a structurally similar platform but with a 2025-2026 disruption: on October 1, 2025, Corteva announced its plan to split into two listed companies — a crop-protection entity (New Corteva) and a seeds entity (SpinCo) — raising live questions about where AI and data assets will land (per Reuters/AgFunderNews, October 2025; AgFunderNews interview with Brian Lutz, VP of Digital). The Corteva story is one of the most consequential AI-and-data events in 2025-2026 US agritech, and the field guide has no Corteva unit yet.

This current is the IPES-Food / Monsalve-Seufert critique made operational: the structural data flow is from farm to input vendor, and the input vendor has every incentive to use it. The Corteva split sharpens the question — if the AI/data assets are currently integrated across seeds and crop protection, the split may fragment capabilities that took years to build.

### Current C — Specialty-crop robotics and the "holy grail" problem

The longest-running gap in US agricultural AI. Strawberries, leafy greens, broccoli, apples, tree fruit. **Advanced Farm Technologies** (Davis CA) deployed robotic strawberry harvesters at commercial scale in California (Oxnard, Santa Maria) during 2019 — still cited as a milestone in 2025 academic literature (per Ochoa and Mo, MDPI Actuators 14(2):42, 2025). **FarmWise** (San Francisco) has built the Vulcan intra-row weeder with Taylor Farms deployment. **Carbon Robotics** (Seattle) builds the LaserWeeder. **Harvest CROO** (Florida) has worked on strawberry and berry automation since 2013.

The critical voice for this current is **Summer Sullivan** (UC Santa Cruz, PhD candidate; SSRC Just Tech, September 2025): *"While some farming tasks such as weeding and thinning are becoming increasingly digital in the Salinas Valley and elsewhere, harvesting of specialty crops remains the elusive 'holy grail' of automation."* Sullivan's ethnography of romaine lettuce harvesting in the Salinas Valley documents a structural finding: *"hiring farmworkers for the romaine lettuce harvest is still cheaper and more reliable than the existing automated harvesters."* The Salinas Valley agriculture automation expert interviewed by Sullivan: *"Zero percent"* of head lettuce is currently machine-harvested. This is the most important critical-voice contribution on US specialty-crop AI and is materially under-represented in the field guide to date.

### Current D — Meat processing and the input-reduction AI cell

A cell of the matrix the field guide had no unit in before mid-2026. Three US deployments now covered in the corpus: **Cargill CarVe** (per `units/cargill-carve-meat-processing.md`, real-time computer vision for red-meat yield at Fort Morgan CO and Friona TX, deployed at $90M automation investment scale); **JBS USA × Völur** (per `units/jbs-usa-volur-carcass-sorting.md`, AI carcass-sorting and cutting-plan optimisation, Hyrum UT pilot, planned scale-out); **Tyson × AWS poultry vision** (per `units/tyson-aws-poultry-vision.md`). Together they constitute the largest publicly-documented *meat-processing* AI deployments by any single NA processor, and represent the cell where US industry has both scale and concentration.

The interesting structural observation: **the three largest US meat processors (Tyson, JBS USA, Cargill) each have a distinct AI strategy** — cloud-vision (Tyson × AWS), predictive-ml cutting plans (JBS × Völur), proprietary real-time vision (Cargill CarVe). The vendors behind each are different (AWS, Völur Norway-origin, in-house). There is no industry convergence on the AI stack in US meat processing; this is worth naming as a finding.

### Cross-current observation

Current A is about *farm equipment*. Current B is about *farm data*. Current C is about *specialty-crop labor*. Current D is about *processing yield*. The unifying finding is that **none of these currents are converging**. US industry activity is dominated by corporate-vendor-led deployment in structurally separate cells, with critical voices on each cell (right-to-repair on A; Monsalve/Seufert on B; Sullivan/farmworker labor on C; nothing consolidated on D yet — a gap worth naming).

---

## 2. Equipment-vendor AI: the Deere / CNH / AGCO / Raven map

### 2.1 John Deere — the locked-in reference case

Per `units/john-deere-see-and-spray.md`: See & Spray technology deployed across 5M+ acres in 2025 (vendor-reported), average ~50% reduction in non-residual herbicide use (vendor-reported), ~31 million gallons of herbicide mix saved (vendor-reported), 2 bu/acre average yield bump in seven-state trials (Deere-commissioned), 2025 Application Savings Guarantee (vendor cost aligned with measured benefit — rare commercial design). The pattern: vision-system bolted onto existing Deere sprayer line; benefits only accessible to Deere equipment owners.

### 2.2 CNH Industrial — the Raven-acquired counter

CNH (Case IH, New Holland) completed the Raven Industries acquisition in Q4 2021 (~$2.1B). Raven was the third-largest US player in precision-ag software/hardware (autosteer, boom control, application control). The acquisition gave CNH the autonomy and precision-ag IP to compete directly with Deere.

Current CNH autonomous portfolio (per CNH Industrial Tech Day, December 2022, and subsequent press):

- **Driver Assist Harvest Solution** — Case IH tractor platform + Raven Autonomy integration; coordinates grain-cart tractor with combine harvester during unload-on-the-go.
- **Driverless Tillage Solution** — Case IH tractor + tillage platform with Raven's Perception System and remote command & control from a tablet.
- **Baling Automation** — New Holland large square balers with LiDAR-based windrow scanning for steering, forward speed, and baler settings.
- **Case IH Trident 5550 applicator with Raven Autonomy** — *"the agriculture industry's first autonomous spreader"* (Farm Progress Show 2022).

What CNH disclosed that the field guide should keep: Derek Neilson, President Agriculture, CNH: *"Autonomy will become an integral part of farmers' operations everywhere... We believe that Autonomy and Automation technologies are fundamental to the future of farming."* (CNH Industrial Tech Day, December 2022.) This is the most concrete industry-side articulation that autonomy is the strategic direction, not a niche product line.

### 2.3 AGCO PTx — the brand-agnostic retrofit

Per `units/agco-ptx.md`: AGCO launched PTx precision-ag portfolio in April 2024. PTx includes Precision Planting (acquired 2024) and PTx Trimble (joint venture with Trimble). Distinctive design: explicitly brand-agnostic, designed to work across mixed fleets including competitor equipment. This is the practical answer to vendor lock-in. Whether it succeeds in the market vs. Deere's vertical integration is an open question.

### 2.4 Trimble and the broader retrofit layer

Trimble is the original precision-ag platform vendor. The PTx Trimble JV positions Trimble as a multi-brand standard. Trimble's hardware/software stack underpins a substantial fraction of US mixed-fleet precision-ag — worth flagging even if no standalone unit exists.

### 2.5 What is operationally deployed vs. announced

A clean-eyed survey of the current row-crop autonomous equipment picture as of mid-2026:

- **Deere See & Spray**: deployed at scale (5M+ acres, 2025). Reference case.
- **Deere autonomy**: announcements exceed deployments; 2026 commercial launch announced but volume not yet disclosed.
- **CNH Driverless Tillage / Driver Assist Harvest**: announced and demonstrated; commercial availability narrower than Deere's See & Spray.
- **CNH Trident 5550 autonomous spreader**: announced 2022; commercial availability to be verified.
- **AGCO PTx**: brand-agnostic retrofit kit; deployment scale not disclosed at the same granularity as Deere's.

G-017 (US row-crop autonomous machinery operational scale beyond Deere) remains a real gap. The structured finding from this scan: announcements exceed deployments at every player except Deere See & Spray.

---

## 3. Input-vendor digital platforms: Bayer, Corteva, and the data-platform story

### 3.1 Bayer Climate FieldView — the reference case

Per `units/bayer-climate-fieldview.md`: launched in the US (originating market), now active in Brazil, Canada, Argentina, Germany, France, Spain, Italy, Ukraine, Romania, Hungary, Poland, South Africa, Kenya and other markets. Bayer positions FieldView as the data layer that unifies farm equipment, sensors, and decision support. Microsoft partnership via Azure underpins infrastructure (Climate FieldView runs on Azure; Bayer and EY built an AI assistant on Azure AI Foundry that helps agriculturalists solve crop health issues — Microsoft customer story, no date confirmed). FieldView is the canonical example of an input vendor owning the farm data layer.

### 3.2 Corteva — the live AI-and-data restructuring story

**This is the most consequential US industry-AI story of 2025-2026 and the field guide has no Corteva unit.**

Corteva (Indianapolis IN; spun out of DowDuPont merger 2017) is the third of the Big Three agrichemical/seed companies alongside Bayer and Syngenta. Its 2025-2026 trajectory is unusual: a single company simultaneously (1) building out a digital twin of the seed business, (2) launching a generative-AI agronomic assistant (CARL), (3) repositioning Granular as an internal sales-enablement tool rather than a farmer-facing product, and (4) announcing a split into two listed companies.

**The split itself.** Reuters reported on October 1, 2025 that Corteva will separate into New Corteva (crop protection) and SpinCo (seeds). CEO Chuck Magro will lead SpinCo. Brian Lutz, VP of Digital, in an October 2025 AgFunderNews interview: *"When we think about the history, just by the nature of our company and having such a large seed footprint, seed and genetics is an area where we've seen a lot of digitization and use of AI, before other segments, because it's such a data-intensive activity to create new seeds."* Corteva spokespeople declined to clarify where the digital transformation team will land post-split.

**CARL (Corteva's Agronomic Research Library).** A gen-AI tool that helps independent sales reps and agronomists through a ChatGPT-style interface. Distinct from typical retrieval systems: augmented with decades of proprietary agronomic research and Pioneer product information; can synthesize relevant research rather than only surfacing documents. CARL is purely focused on seed research.

**Granular.** Originally a farmer-facing farm-management/ERP platform (Corteva acquired Granular in 2017 for ~$300M). Under Sam Eathington (now CTO/CDO; previously Chief Science Officer at Monsanto's Climate unit), Granular was repositioned from farmer-facing product to **internal sales-enablement tool**. Sales reps see data across all their accounts via a "single pane of glass," with AI models analyzing on-farm data alongside weather, soil, genetics, and trial data. Farmers can still log in (free of charge), but Corteva's expectation is that reps will be the primary data interlocutors.

**The fungicide timing model.** Corteva is piloting a US fungicide-timing model combining field-specific information from customer farms with internal data. Per Lutz (US congressional testimony, 2025): *"We regularly help them increase yields by 4-10 bushels per acre, which is considerable."*

**The "One Seed" initiative.** Internal program aimed at integrating all departments of Corteva's seed business — R&D to production to sales and marketing — under a single vision. Includes the **digital twin of the seed business**: *"an ecosystem of interconnected models, combining advanced AI, mathematical optimization, and mechanistic modeling — all developed in-house — to continuously enhance how we design, produce, and deliver seed innovations at scale"* (Lutz, October 2025). The digital twin is destined for SpinCo.

**Where will AI capabilities land?** AgFunderNews analyst read: digital capabilities appear weighted toward the seeds business (CARL, One Seed, Granular framed in seed-centric language); New Corteva (crop protection) has AI capability across the value chain — protein-structure prediction in pests, molecule discovery, manufacturing optimization — but lacks an analogous One Seed-style cultural integration. Bloomberg Intelligence's Jason Miner: *"the development pathway becomes more complex, and I don't think farmers need more complexity."* Oppenheimer's Kristen Owen: questioned whether crop protection can sustain investment without "that cash cow generation of the seed business." Bank of America analyst called the split *"lacking in strategic and financial sense."*

The structural finding: **the Corteva split is the first major US input-vendor restructuring where AI/data capabilities are explicitly uncertain.** The corpus should treat the split as a *current* event, not a settled one, and surface it in any talk about US input-vendor AI.

### 3.3 Indigo Ag — the venture-funded biologicals-plus-digital pattern

Per `units/indigo-ag.md`: founded 2014, ML for microbial strain identification plus digital platform (Indigo Atlas, Indigo Marketplace). Peaked at ~$3.5B valuation in 2017-2018; ran into financial trouble 2023; laid off significant workforce; pivoted away from Indigo Marketplace (the digital grain marketplace). As of mid-2026 the company is operational but smaller than peak. The biologicals + ML combination remains scientifically interesting; the digital marketplace experiment was the failure. This is the canonical example of venture-funded agritech boom-bust.

### 3.4 The Microsoft FarmBeats / Azure Data Manager for Agriculture substrate

Microsoft FarmBeats (Microsoft Research, originally launched 2016; transitioned to product as Azure Data Manager for Agriculture / ADMA). The project is the rare US hyperscaler effort dedicated to agriculture infrastructure: low-cost sensors, drones, TV White Spaces long-range sensor networks, IoT gateway device, cloud/ML services. The FarmBeats research lab's 2016-2019 output is well-documented (USENIX NSDI 2017 best paper, ACM Compass 2019 best paper, ACM MobiCom 2019 best paper runners up, multiple keynote appearances). The Microsoft Research page confirms: *"We have transitioned the Project FarmBeats technologies to a product — Azure Data Manager for Agriculture (ADMA)."*

Strategic relevance: Microsoft is the underlying cloud provider for **Bayer Climate FieldView** and **JBS × Völur** (Völur model hosted on Microsoft Azure per `units/jbs-usa-volur-carcass-sorting.md`). This is the under-acknowledged substrate of US agritech AI — the hyperscalers (Microsoft, Google Cloud, AWS) host the data layer underneath most of the named vendors. The Cargill + AWS, Tyson + AWS, Smithfield + robotics partnerships are similar patterns. **G-167 (new):** hyperscaler substrate of US agritech AI — Microsoft, Google, AWS as the under-acknowledged infrastructure layer.

---

## 4. Specialty-crop robotics: the Salinas Valley / Pacific Northwest / Florida map

The named gap (G-018: US specialty crop AI at scale). This scan pulls the relevant actor map together.

### 4.1 Advanced Farm Technologies (Davis CA) — strawberries

Founded 2015; large autonomous vehicles with four custom-designed gantry arms (two per row of strawberries). Commercial-scale strawberry picking in California (Oxnard, Santa Maria) during the 2019 season. The MDPI Actuators 14(2):42 (Ochoa and Mo, 2025) paper confirms Advanced Farm Technologies as the substantive strawberry-robotics deployment scale reference. Cited 14 times (per MDPI metadata). The 2025 paper validates the 2019 commercial-scale claim with academic rigour.

### 4.2 FarmWise Labs (San Francisco) — weeding

Per farmwise.io (verified July 2026): Vulcan is FarmWise's next-generation intra-row weeder and precision cultivator. Up to 3 acres/hour. Modular architecture, software updates over the air. Partnership with **RDO Equipment Co.** (announced 2025) for distribution. Larry Santos (Senior Farm Manager, Taylor Farms) is the named customer reference. *"Save $250+ per acre"* is the vendor-reported value proposition.

### 4.3 Carbon Robotics (Seattle) — LaserWeeder

LaserWeeder uses computer vision and laser technology to kill weeds without chemicals. Carbon Robotics has not been unitized in the field guide and is not pulled in this scan — flagged as a gap (see G-168 below).

### 4.4 Harvest CROO (Florida) — berries

Founded 2013. Has worked on strawberry and berry automation since 2013 — the longest-running US specialty-crop robotics effort. Not pulled in this scan in depth.

### 4.5 Salinas Valley as the concentration point

Per Summer Sullivan's SSRC Just Tech essay (September 10, 2025; DOI 10.35650/JT.3087.d.2025): California's Salinas Valley is the *"salad bowl of the world,"* accounting for at least 70% of US leafy greens production. In 2024, Monterey County (where the Salinas Valley is located) reported gross specialty crop production value just shy of $5 billion. The Salinas Valley is the geographical concentration point for the entire US specialty-crop robotics map.

### 4.6 The Sullivan ethnography — the most important critical voice

The Sullivan's SSRC Just Tech essay is the single most substantive recent critical-voice contribution on US specialty-crop AI. Five findings worth lifting:

1. **The "holy grail" framing is industry-side.** *"Harvesting of specialty crops remains the elusive 'holy grail' of automation"* — a phrasing that came up in multiple interviews and at conferences, including from automation promoters.
2. **The technical limits are not media-hype.** Sullivan's field research documents the water-jet-knife approach *"spewing mud into the harvest process and ruining otherwise good product"* and food-safety concerns about bacteria buildup at machine joints. Robotic fingers cost $500 each and frequently need replacing due to leaks and cracks.
3. **The economics do not yet work.** *"As it stands right now, hiring farmworkers for the romaine lettuce harvest is still cheaper and more reliable than the existing automated harvesters."*
4. **A Salinas Valley agriculture automation expert (interviewed by Sullivan April 18, 2025) stated head-lettuce harvest automation is currently at "Zero percent."**
5. **The labor dimension is structural, not transitional.** *"The ongoing attempts to automate romaine lettuce harvesting demonstrate the continued and unquestionable need for careful farmworker labor within so-called digital agriculture. It follows, then, that they need to be paid, treated, and valued according to the value they produce."*

This is the analytical counterweight to every Salinas Valley robotics vendor pitch. The corpus should treat Sullivan as a substantive critical voice on US specialty-crop AI, parallel to Carolan's role on digital-agriculture sociology more broadly.

### 4.7 What Sullivan is NOT

Sullivan is a PhD candidate at UC Santa Cruz (not a tenured academic); the SSRC Just Tech publication is an essay, not peer-reviewed. The findings are interview-and-fieldwork-based ethnography. The corpus hygiene rule (per memory): citation volume ≠ substantive analytical contribution. Sullivan's contribution is substantive; the citation count is small. Include accordingly.

---

## 5. Livestock AI at scale — the US pharma + monitoring layer

### 5.1 Zoetis — the veterinary-AI dominant

Zoetis (Parsippany NJ) is the world's largest animal-health company (spun out of Pfizer 2012). The Zoetis Diagnostics portfolio is the canonical US veterinary AI cell:

- **Vetscan Imagyst** — AI-powered multi-test analyzer; image recognition plus cloud-access to expert clinical pathologists within the Zoetis network. Six testing capabilities, more on the way (Zoetis 2026 product page).
- **Vetscan OptiCell** — first-of-its-kind cartridge-based hematology analyzer combining viscoelastic focusing (VEF) and AI technology for complete blood count analysis at the point of care (Zoetis, 2026).
- **Virtual Laboratory** — Zoetis specialist network paired with AI for diagnostic support.

Zoetis published validation studies: Study DHX6Z-US-23-205/206/209 and DHXMZ-US-24-257/242 (Zoetis Data on File, 2024). External validation: Nagamori et al., *Journal of Veterinary Diagnostic Investigation* 36(1) 2024 — multicenter evaluation of Vetscan Imagyst for gastrointestinal parasite detection.

This is a notable cell: **veterinary AI deployed at scale via point-of-care hardware.** Zoetis claims "the world's most capable veterinary AI analyzer" for Vetscan Imagyst. Independent verification exists (the Nagamori 2024 multicentre study) — a relatively unusual posture for the field guide.

### 5.2 Elanco — Cainthus and the cattle-monitoring layer

Per `units/tyson-aws-poultry-vision.md` cross-references and broader field-guide knowledge: Elanco (Greenfield IN) acquired Cainthus (Ireland-origin, dairy computer vision) in 2020. Elanco's broader US footprint includes feed-additive and pharmaceutical products with AI components. The Elanco corporate site (farmanimal.elanco.com) is the substantive source.

### 5.3 Cargill, ADM, and the trader-side AI

Cargill and ADM (Archer Daniels Midland) are the two largest US agricultural commodity traders. Both have announced AI initiatives across supply chain optimization (per the regional-industry scan `scans/2026-07-regional-industry-na-eu.md`). Specific deployment data is thin. Worth noting that the trader-side is dominated by US firms and is operationally important but under-surfaced in the corpus.

### 5.4 Tyson × AWS poultry vision, Smithfield pork robotics, JBS × Völur

Already covered in the corpus (`units/tyson-aws-poultry-vision.md`, `units/smithfield-pork-vision-robotics.md`, `units/jbs-usa-volur-carcass-sorting.md`). Together with Cargill CarVe, these constitute the meat-processing AI cell.

---

## 6. Food processing AI at scale — TOMRA, Key Technology, Cargill CarVe

### 6.1 TOMRA Food (Norway-headquartered, major US presence)

TOMRA (Asker, Norway) is the global leader in optical sorting for food. TOMRA Food product line: TOMRA 5C (combines sensors with ML and big-data analysis), TOMRA 4C (LUCAi AI-powered optical sorter for nuts and IQF — individually quick frozen — industry, launched per postharvest.biz 2025). TOMRA Food serves US nuts, dried fruit, potato, vegetable, and seafood processors from a West Sacramento CA headquarters and field operations across the US.

The TOMRA 4C launch is a substantive recent US-market cell: AI-powered sorter for nuts (almonds, walnuts, pecans — major US crops) and IQF fruits and vegetables.

### 6.2 Key Technology (US-headquartered)

Key Technology (Walla Walla WA; acquired by Duravant 2018) is the US-headquartered manufacturer of digital sorting and processing equipment. Products include optical sorters for vegetables, fruits, nuts, seafood. The corpus has `units/key-technology-na-food-sorting.md` already.

### 6.3 Cargill CarVe — the in-house processing AI

Per `units/cargill-carve-meat-processing.md`: deployed across Cargill Protein North America plants (Fort Morgan CO, Friona TX). Computer vision for red-meat yield measurement. Real-time feedback to frontline managers. Cargill is the second-largest US beef processor; CarVe is the largest publicly-documented meat-processing AI deployment by any single NA processor.

### 6.4 The processing-AI cell — coverage status

- **Meat processing**: Cargill CarVe, JBS × Völur, Tyson × AWS — covered.
- **Optical sorting**: TOMRA, Key Technology — covered.
- **Egg, dairy processing, beverage**: under-surfaced.
- **Grain/seed processing**: BASF, Cargill, ADM have grain-handling AI; under-surfaced in the corpus.

---

## 7. Retail and consumer-facing AI — the Ahold Delhaize / Walmart / Kroger / Amazon pattern

### 7.1 Ahold Delhaize USA — established retailer-AI pattern

Per `units/ahold-delhaize-usa-retailer-ai.md`: Ahold Delhaize (Netherlands-headquartered, major US operations through Stop & Shop, Food Lion, Giant) has a substantive US AI pattern. Already covered.

### 7.2 Albertsons × Afresh

Per `units/albertsons-afresh-fresh-suite.md`: Afresh Technologies (San Francisco) powers Albertsons' fresh-suite. Fresh inventory management. Already covered.

### 7.3 Walmart Sparky

Per `units/walmart-sparky-ai-shopping-assistant.md`: Walmart's gen-AI shopping assistant Sparky, launched 2024. Already covered.

### 7.4 Kroger

Per `units/kroger-gemini-shopping-assistant.md` and `units/kroger-ocado-cfc-closures-discontinued.md`: Kroger's Gemini-powered assistant; the Ocado CFC closures (discontinued). Already covered.

### 7.5 Amazon / Whole Foods / Fresh

Per LinkedIn/industry reporting (Adrian Pearson Jr., 2025): Amazon Fresh leads in AI and automation (smart carts, AI-based shelf sensors) while Whole Foods lags. Alexa+ can now order groceries from Amazon Fresh and Whole Foods Market, track purchase history, and remember recipes and dietary preferences (per Customer Experience Dive). Under-surfaced in the corpus.

### 7.6 DoorDash, Domino's, Wendy's, US Foods, Taco Bell, McDonald's

Already covered: `units/doordash-ai-voice-ordering-discontinued.md`, `units/dominos-dom-voice-assistant.md`, `units/wendys-freshai-google.md`, `units/usfoods-wheres-my-truck-menu-iq.md`, `units/taco-bell-omilia-drive-thru-voice-ai.md`, `units/mcdonalds-ibm-ai-drive-thru-discontinued.md`, `units/mcdonalds-ibm-aot-discontinued.md`, `units/sweetgreen-infinite-kitchen.md`. Together with Uber Eats (`units/uber-eats-ai-cart-assistant.md`), these constitute the US foodservice/consumer-facing AI cell.

### 7.7 MyFitnessPal Cal AI, ZOE

Already covered: `units/myfitnesspal-cal-ai-coach.md`, `units/zoe-us-ai-personalised-nutrition.md`.

### 7.8 HungryRoot

Per `units/hungryroot-ai-meal-recommendation.md`. Already covered.

### 7.9 North America consumption pattern

`units/north-america-consumption-ai-pattern.md` consolidates the US consumer-facing layer. Worth keeping cross-references consistent.

---

## 8. Biotech and digital biology — Pivot Bio, Sound Agriculture

### 8.1 Pivot Bio (St Louis MO) — the gene-edited microbial pattern

Pivot Bio's PROVEN line uses ML-discovered, gene-edited microbial strains to fix atmospheric nitrogen for corn (and other crops). Per the March 13, 2025 Pivot Bio release: **PROVEN G3 is the third-generation nitrogen solution for corn**, commercially available in 2026 pending state registrations. PROVEN G3 has *"multiple modes of action"* — boosts nutrient uptake (iron, manganese); feeds nitrogen to roots via the patented gene-edited microbe; amplifies yield potential via plant health and nitrogen-use efficiency.

Concrete figures (per Pivot Bio 2025 and Farm Progress 2026): PROVEN 40 has been used on millions of acres. PROVEN G3 can replace ~34 pounds of nitrogen per acre (Farm Progress). Pivot Bio cut prices 30% for the 2026 growing season (per Farm Progress). Largest farmer demo in Pivot Bio history — 300+ locations — is testing PROVEN G3 at scale.

Scientific validation: three-year study from the University of Illinois (Agronomy Journal 2024); peer-reviewed Wisconsin and Purdue research published in Scientific Reports (2024, doi:10.1038/s41598-024-78243-3). The pivot is from venture-funded biologicals-plus-digital (Indigo Ag pattern) to science-backed biologicals-plus-ML with peer-reviewed validation — a different posture.

Pivot Bio has not yet been unitized in the field guide. **G-169 (new):** Pivot Bio is the most-substantive US biologicals + ML deployment, warranting a standalone unit.

### 8.2 Sound Agriculture (Emeryville CA)

Sound Agriculture's Source product uses ML-discovered microbe strains to enable crops to fix their own nitrogen. Under-surfaced in the corpus. **G-170 (new):** Sound Agriculture and the broader US biologicals + ML cluster.

### 8.3 Indigo Ag biologicals

Already covered in `units/indigo-ag.md`. Continues to operate biologicals business post-Marketplace pivot.

---

## 9. Satellite and remote sensing — Planet Labs as the US substrate

### 9.1 Planet Labs PBC (San Francisco)

Per evokeAG. interview (Casey Dunn, November 2022) and Planet.com 2026 product pages: Planet Labs operates the world's largest commercial Earth-imaging satellite constellation — ~200 CubeSats, capturing ~4 million images daily. PlanetScope (3.7m resolution), SkySat (50cm), Pelican (next-generation, 30cm target resolution). Customer base: 34,000+ users across 65 countries. Used by Corteva and Bayer (per evokeAG.) to evaluate crop yields, assess irrigation needs, and build predictive production models.

The Organic Valley partnership is the case study: dairy farmer-owned cooperative used Planet imagery to build a pasture-mapping tool that *"...helped dairy farmers achieve a 20 per cent increase in pasture utilisation."* This is the most-concrete US case study of satellite-imagery data feeding a farmer-owned cooperative structure (the cooperative angle is structurally different from the input-vendor angle).

Planet Labs is the **US-headquartered alternative to Taranis (Israel)** for satellite-based agricultural intelligence. The structural difference: Taranis uses drone-captured leaf-level imagery processed through TensorFlow; Planet uses satellite constellations. Different scale (continent-level vs. leaf-level), different deployment model, different vendor posture.

---

## 10. Cross-tabulation matrix — US industry AI activity

The matrix below cross-tabulates US industry activity against the field guide's three-axis taxonomy: **sector position × AI technique class × purpose**. Activity levels: `●●` high (deployed at scale, multiple actors, well-documented), `●` moderate (piloting or single-actor deployment, several sites), `○` emerging (research, few actors), `—` gap (no evidence found — flagged as evidence-collection problem, not absence).

| Sector position \ AI class | Computer vision | Predictive ML | Generative AI / LLM | Sensor / IoT | Robotic / autonomous | Decision support |
|---|---|---|---|---|---|---|
| **Equipment vendors (Deere, CNH, AGCO, Raven)** | ●● See & Spray, John Deere camera systems | ● JD Ops Center, AGCO PTx Trimble | — | ● Deere, CNH telematics | ●● CNH Driverless Tillage, AGCO | ● Deere, AGCO |
| **Input-vendor platforms (Bayer, Corteva)** | — Bayer drone imagery; Corteva satellite | ●● Bayer FieldView, Corteva Granular | ● CARL (Corteva), FieldView Gen-AI | ● Bayer soil sensors | — | ●● Bayer FieldView, Corteva Granular |
| **Specialty-crop robotics (AFT, FarmWise, Carbon Robotics, Harvest CROO)** | ●● AFT strawberry, FarmWise Vulcan, Carbon LaserWeeder | — | — | — | ●● All four companies | — |
| **Specialty-crop / farmworker labour (Salinas Valley)** | ○ automated harvesters at research stage | — | — | — | ○ lettuce harvest, head lettuce "Zero percent" | — |
| **Livestock pharma + monitoring (Zoetis, Elanco)** | ●● Zoetis Vetscan Imagyst, Cainthus cattle | ● Zoetis hematology | — | ● Elanco sensor products | — | ○ Zoetis Virtual Lab |
| **Meat processing (Tyson × AWS, JBS × Völur, Cargill CarVe)** | ●● Cargill CarVe, Tyson × AWS | ●● JBS × Völur, Smithfield | — | — | ●● Smithfield vision robotics | ● JBS × Völur |
| **Optical sorting / processing (TOMRA, Key Technology)** | ●● TOMRA 4C, 5C, Key Technology | ● TOMRA LUCAi | — | — | — | — |
| **Retail / consumer-facing (Walmart, Kroger, Albertsons, Amazon, Ahold Delhaize)** | ● Afresh fresh suite | ●● Walmart, Kroger demand forecasting | ●● Walmart Sparky, Kroger Gemini, Domino's DOM | ● Amazon Dash, smart carts | ●● Sweetgreen Infinite Kitchen | ●● Loblaw (Canadian but US-pattern) |
| **Foodservice (US Foods, DoorDash, Domino's, McDonald's, Wendy's, Taco Bell, Sweetgreen)** | — | ● US Foods Menu IQ | ● Wendy's FreshAI, Domino's DOM | — | ●● Sweetgreen Infinite Kitchen | ● Sysco AI360 |
| **Biotech / digital biology (Pivot Bio, Sound Agriculture, Indigo)** | — | ●● Pivot Bio microbial ML | — | — | — | ○ gene-edited microbe deployment |
| **Satellite / remote sensing (Planet Labs)** | ●● PlanetScope, SkySat | ●● Planet Insights Platform, AI feeds | — | — | — | ●● Bayer/Corteva/Organic Valley integration |
| **Hyperscaler substrate (Microsoft, Google, AWS)** | — | ●● Azure Data Manager for Agriculture, AWS agritech | ● Azure AI Foundry for ag | — | — | — |

The matrix makes visible three structural findings:

1. **The equipment vendor cell and the meat processing cell are the most-concentrated `●●` zones.** Each has multiple actors, well-documented deployments, and substantive scale claims.
2. **The specialty-crop robotics cell is `●●` on weeding and `○` on harvest.** This is the Sullivan finding: weeding has yielded commercial-scale robotic deployment; harvest remains the "holy grail" with structural limits.
3. **The hyperscaler substrate cell is operationally critical but under-acknowledged.** Microsoft, AWS, and Google Cloud sit underneath most of the named vendor cells. **G-167 (new): hyperscaler substrate of US agritech AI as a stand-alone analytical object.**

---

## 11. New gaps surfaced

Per the gaps-as-first-class-objects discipline:

- **G-167 (new):** Hyperscaler substrate of US agritech AI — Microsoft Azure Data Manager for Agriculture / FarmBeats, AWS agritech partnerships (Cargill, Tyson, JBS), Google Cloud (Taranis but not extensively US-domestic). The infrastructure layer is under-acknowledged; the field guide has Microsoft FarmBeats in name only and no Microsoft / AWS / Google agritech layer.
- **G-168 (new):** Carbon Robotics LaserWeeder — US specialty-crop weeding AI at operational scale (reportedly 100K+ acres across customers; not verified). Distinct from FarmWise Vulcan.
- **G-169 (new):** Pivot Bio PROVEN G3 — US biologicals + ML deployment at scale, peer-reviewed validation, ready for a standalone unit.
- **G-170 (new):** Sound Agriculture, Anuvia, and the broader US biologicals + ML cluster beyond Pivot Bio.
- **G-171 (new):** Corteva spinout — what happens to Granular, CARL, One Seed, and the digital twin of the seed business when SpinCo is created. Live, time-sensitive, structural.
- **G-172 (new):** Salinas Valley lettuce harvest automation — the Sullivan ethnography is the most substantive critical voice on US specialty-crop AI; not yet unitized. Direct counterweight to vendor and investor pitches.
- **G-173 (new):** US grain/seed processing AI — Cargill, ADM, Bunge have grain-handling AI initiatives; under-surfaced in the corpus.
- **G-174 (new):** American industry analyst skepticism — Bloomberg Intelligence, Oppenheimer, Bank of America, AgFunderNews journalists as substantive analyst voices on US industry AI events (e.g., the Corteva split). The corpus has critical voices on technology but underweight on the financial-analysis side.
- **G-175 (new):** Independent verification of vendor-reported figures at scale — the discipline (cite, name, flag verification gap) is in place; a consolidated framework listing every US industry vendor figure and its verification status would be the corpus-level artefact.

---

## 12. New contested claims surfaced

Per the contested-claims-as-first-class-objects discipline:

- **C-109 (new):** Corteva's split will preserve integrated AI/data capabilities across both new companies. Counter: Bloomberg Intelligence's Jason Miner, Oppenheimer's Kristen Owen, and Bank of America's analyst each publicly questioned the strategic logic of the split and the implications for digital infrastructure continuity.
- **C-110 (new):** US specialty-crop harvest AI (lettuce, strawberries, leafy greens) is achievable at commercial scale. Counter: Sullivan's ethnography documents that hiring farmworkers is still cheaper and more reliable than existing automated harvesters, and head-lettuce harvest automation is currently at "zero percent" per a Salinas Valley agriculture automation expert.
- **C-111 (new):** Microsoft FarmBeats / Azure Data Manager for Agriculture has reached substantive producer adoption. Counter: the Microsoft Research project page documents the research-to-product transition but deployment scale at the farm level is not disclosed at a comparable granularity to Bayer FieldView or John Deere See & Spray.
- **C-112 (new):** Zoetis Vetscan Imagyst is "the world's most capable veterinary AI analyzer" (Zoetis claim). Counter: independent comparison data not surfaced; the Nagamori 2024 multicentre study validates parasite detection specifically, not the broader "most capable" claim.
- **C-113 (new):** Pivot Bio PROVEN G3 can replace ~34 pounds of nitrogen per acre (Farm Progress 2026, citing Pivot Bio). Counter: peer-reviewed validation (Scientific Reports 2024; University of Illinois three-year study) supports the underlying gene-edited microbe technology; the specific 34-pound replacement figure is vendor-reported.
- **C-114 (new):** Corteva's federated data model and One Seed cultural integration are reproducible at New Corteva. Counter: AgFunderNews read — the cultural and governance work may have happened preferentially on the seeds side; crop protection side lacks an analogous One Seed-style integration.
- **C-115 (new):** Agtech investment continues to flow into US industry AI. Counter: Indigo Ag's 2023 financial trouble and pivot away from Indigo Marketplace is the canonical venture-funded boom-bust example. The post-2023 venture environment for agritech has tightened.

---

## 13. Actors surfaced, with critical lens

### 13.1 Vendor actors (with citation hygiene)

- **John Deere** — row-crop equipment, locked-in See & Spray. Cite: 5M acres 2025, vendor-reported.
- **CNH Industrial (Case IH, New Holland, Raven)** — row-crop equipment, Raven-acquired autonomous portfolio. Cite: Driverless Tillage, Trident 5550, Driver Assist Harvest.
- **AGCO** — equipment vendor, brand-agnostic retrofit. Cite: PTx, Precision Planting.
- **Trimble** — precision-ag platform, multi-brand standard. Cite: PTx Trimble JV.
- **Bayer** — input vendor, Climate FieldView. Cite: 15+ countries deployment.
- **Corteva** — input vendor, Granular/CARL/One Seed, planned split. Cite: October 2025 Reuters, October 2025 AgFunderNews.
- **Indigo Ag** — biologicals + digital, post-Marketplace. Cite: 2014 founding, 2023 financial trouble.
- **Pivot Bio** — biologicals + ML, PROVEN G3 2026. Cite: Scientific Reports 2024, U Illinois three-year study, Farm Progress 2026.
- **Planet Labs** — satellite constellation, 200+ CubeSats, 34K+ users. Cite: Corteva and Bayer as named customers.
- **Microsoft** — Azure Data Manager for Agriculture (FarmBeats successor). Cite: Bayer, EY customer story; Microsoft Research 2016-2019.
- **AWS** — Tyson × AWS, Cargill, Smithfield. Cite: Tyson × AWS poultry vision unit.
- **Zoetis** — veterinary AI dominant. Cite: Vetscan Imagyst multicentre validation 2024.
- **Elanco** — animal health + Cainthus dairy CV.
- **Advanced Farm Technologies** — strawberry robotics, commercial scale 2019. Cite: MDPI Actuators 14(2):42, 2025.
- **FarmWise** — specialty-crop weeding, Vulcan. Cite: farmwise.io July 2026.
- **Carbon Robotics** — LaserWeeder. Cite: vendor-reported, not pulled in depth.
- **Harvest CROO** — berry robotics, longest-running US specialty-crop effort.
- **TOMRA** — Norway-headquartered, major US presence. Cite: TOMRA 4C LUCAi 2025.
- **Key Technology** — US-headquartered, Walla Walla WA. Per `units/key-technology-na-food-sorting.md`.
- **Ahold Delhaize USA** — Stop & Shop, Food Lion, Giant. Per `units/ahold-delhaize-usa-retailer-ai.md`.
- **Albertsons × Afresh** — fresh-suite AI. Per `units/albertsons-afresh-fresh-suite.md`.
- **Walmart** — Sparky gen-AI assistant. Per `units/walmart-sparky-ai-shopping-assistant.md`.
- **Kroger** — Gemini assistant, Ocado CFC closures (discontinued). Per existing units.
- **Amazon / Whole Foods / Fresh** — smart carts, shelf sensors, Alexa+ grocery.

### 13.2 Critical voices surfaced (non-vendor)

- **Summer Sullivan** (UC Santa Cruz, PhD candidate; SSRC Just Tech September 2025) — the most-substantive recent critical voice on US specialty-crop AI. Salinas Valley romaine-lettuce ethnography. Per `units/north-america-consumption-ai-pattern.md` adjacent; deserves a standalone unit or strong cross-reference.
- **Michael Carolan** (Colorado State University sociology; Co-Director, Food Systems Institute). Per `units/carolan-colorado-state-critical.md`. Already covered in the field guide.
- **Madeleine Fairbairn, Zenia Kish, Julie Guthman** (UC Santa Cruz) — "Pitching Agri-Food Tech: Performativity and Non-Disruptive Disruption in Silicon Valley," *Journal of Cultural Economy* 15(5), 2022, doi:10.1080/17530350.2022.2085142. Cited in Sullivan's SSRC essay. Substantive scholarly critique of Silicon Valley agritech capital.
- **Julie Guthman** (UC Santa Cruz) — *The Problem with Solutions: Why Silicon Valley Can't Hack the Future of Food* (University of California Press, 2024). Cited in Sullivan's SSRC essay. Substantive book-length critique.
- **Bloomberg Intelligence, Oppenheimer, Bank of America analysts** — financial-side skepticism on US industry AI corporate events (Corteva split canonical example).
- **AgFunderNews** — substantive independent reporting on US agritech AI events; the Corteva interview with Brian Lutz is the reference case.

### 13.3 Left-out actors

- **US farmworkers in specialty crops** — Sullivan's ethnography centers this group. The corpus has producers in the quotes/ folder but no Salinas Valley farmworker voice as a standalone quote/unit.
- **US H-2A workers** — temporary migrant workers explicitly named by Sullivan as the labour pool substitution that specialty-crop automation is supposed to displace. The structural question is whether automation is targeted at H-2A cost reduction or whether farmworker labour remains structurally necessary.
- **US Cooperative Extension agents** — per `units/extension-foundation-2026-national-ai-report.md`, 35,000+ county / regional agents. Not yet a substantive voice in the corpus despite being a key implementation layer for vendor tools.
- **Indigenous-led AI deployment in US agrifood** — per `units/cornell-atkinson-idsov-cluster.md` and `units/indigenous-data-sovereignty.md`, Cornell Atkinson cluster is the academic anchor; operational deployment at US scale is G-048 (named in US academic research scan).

---

## 14. What this cycle adds to the taxonomy

### 14.1 Coverage gaps filled

- **G-009 (China rural LLM)** — not addressed; remains a gap.
- **G-017 (US row-crop autonomous machinery operational scale beyond Deere)** — partially addressed. Findings: announcements exceed deployments at every player except Deere See & Spray. CNH has a substantive Raven-acquired portfolio; commercial availability narrower than Deere's.
- **G-018 (US specialty crop AI at scale)** — partially addressed. Advanced Farm Technologies (strawberry 2019), FarmWise (weeding), Carbon Robotics (weeding laser), Harvest CROO (berry). The Sullivan ethnography documents that specialty-crop harvest remains "zero percent" for head lettuce.
- **G-019 (US food processing AI)** — partially addressed. TOMRA, Key Technology, Cargill CarVe, JBS × Völur, Tyson × AWS already covered in field-guide units; the consolidated processing-AI cell is now better documented.
- **G-046 (academic-to-deployment translation gap)** — reinforced. The Corteva split raises new questions about how AI/data infrastructure survives corporate restructuring.

### 14.2 Cross-cutting tag analysis

After this cycle, the v4 taxonomy's `actor-type: vendor` value is populated more substantively across:
- **equipment-vendor** (Deere, CNH, AGCO, Trimble) — the dominant US actor type in row-crop AI.
- **input-vendor** (Bayer, Corteva, Indigo Ag) — the dominant US actor type in farm-data platforms.
- **biotech-vendor** (Pivot Bio, Sound Agriculture) — emerging US actor type in biologicals + ML.
- **hyperscaler** (Microsoft, AWS, Google Cloud) — under-acknowledged substrate; G-167.
- **specialty-crop-robotics-vendor** (AFT, FarmWise, Carbon Robotics, Harvest CROO) — concentrated in Salinas Valley / Pacific Northwest / Florida.
- **veterinary-AI-vendor** (Zoetis) — dominant in US livestock pharma + monitoring.
- **meat-processor** (Tyson, JBS USA, Cargill, Smithfield) — three of four largest US meat processors have distinct AI strategies.
- **retail-grocer** (Walmart, Kroger, Albertsons, Ahold Delhaize USA, Amazon Fresh, Whole Foods) — US-specific concentration.
- **critical-voice (academic-adjacent)** — Sullivan, Carolan, Fairbairn/Kish/Guthman — distinct from IPES-Food / FIAN / ETC Group (international) voices.

### 14.3 Cross-cutting observation: four-cell US industry AI

The matrix in Section 10 makes visible a structural finding worth naming: **US industry AI operates in four distinct cells that have not converged:**

1. **Equipment-vendor cell** (Deere, CNH, AGCO) — hardware-locked, equipment-integrated.
2. **Input-vendor data-platform cell** (Bayer, Corteva) — data-aggregating, seed/chemistry-tied.
3. **Specialty-crop robotics cell** (AFT, FarmWise, Carbon Robotics, Harvest CROO) — labour-substituting, geographically concentrated.
4. **Processing-and-retail cell** (Cargill, JBS, Tyson, Walmart, Kroger) — post-farmgate, vertically separated from cells 1-3.

The structural finding: **these four cells do not share a data layer, do not share a deployment model, do not share a labour-substitution story, and do not share a critical-voice literature.** This is unlike the EU picture (where input-vendor data layer is at Bayer/Monsanto-historical scale, equipment-vendor interoperability is a coherent story, and JoinData / cooperatives offer a structural alternative) and unlike the China picture (where state-DPI substrate is unifying).

The US picture is *four cellular, vendor-led, vertically separated* — and the critical voices correspondingly fracture across four literatures (right-to-repair / Monsalve-Seufert / Sullivan-farms / no consolidated processing-and-retail critical voice yet).

---

## 15. What this scan does NOT cover

- **US agricultural labour and AI at scale beyond Salinas Valley.** Sullivan focuses on Salinas Valley romaine; other US specialty-crop labour contexts (Florida berries, Washington apples, Georgia Vidalia onions, California's Central Valley table grapes) are not surfaced. The farmworker-side voice beyond Sullivan's ethnography is thin. **G-176 (new):** farmworker-side critical voice beyond Salinas Valley.
- **US row-crop autonomous machinery beyond CNH / AGCO / Deere.** Trimble, Hexagon, Topcon, Raven are mentioned but not pulled in depth.
- **US farm-equipment dealer networks** — the structural intermediation layer between vendors and farmers. Co-ops, dealers, and large retailers are distinct actors.
- **US agricultural lending AI** — banks and Farm Credit System institutions deploying AI for credit decisions, risk assessment, climate-risk pricing. Substantive in the US context (John Deere + Farm Credit partnerships).
- **US crop insurance AI** — the USDA Risk Management Agency and private crop-insurance carriers deploying AI for loss adjustment, fraud detection, and parametric products.
- **US AI in agricultural extension beyond Cooperative Extension** — private-sector extension (vendor-driven agronomic advisory), 4-H, FFA, NGO-driven.
- **Detailed US biotech / gene-editing AI beyond Pivot Bio** — Benson Hill, Inari Agriculture, Pairwise, Sound Agriculture. The broader gene-editing + ML cluster is US-dominated but under-surfaced.
- **US AI for agricultural labour standards, worker safety, OSHA enforcement** — the federal regulatory side of farmworker AI deployment.
- **US food-safety regulatory AI** — FDA, USDA FSIS AI for inspection, recall, traceability.
- **Independent verification of US vendor figures at scale** — the discipline is in place; the consolidated framework remains a gap (G-175).

---

## 16. Source list

Read in full or substantial part during this cycle development:

- AgFunderNews. *How will Corteva divide AI and data assets in business separation?* October 2025. https://agfundernews.com/cortevas-planned-separation-raises-questions-about-ai-and-data-split
- Corteva. *AI in Agriculture: Era of the AI Farmer and Farm Automation*. https://www.corteva.com/who-we-are/outlook/ai-in-agriculture.html
- Corteva. *Digital Solutions | Corteva Agriscience™*. https://www.corteva.com/us/products-and-solutions/digital-solutions.html
- Corteva. *Granular Insights*. https://www.corteva.com/us/products-and-solutions/digital-solutions/granular-insights.html
- Reuters. *Corteva to split seeds, pesticide units into separate listed companies*. October 1, 2025.
- Pivot Bio. *Pivot Bio Unveils PROVEN G3* (press release). March 13, 2025. https://www.pivotbio.com/press-releases/pivot-bio-unveils-proven-g3-with-powerful-new-modes-of-action-and-patent-protected-gene-editing-technology
- Farm Progress. *Pivot Bio introduces new products, lower prices*. 2026. https://www.farmprogress.com/corn/pivot-bio-rolls-out-new-products-slashes-prices-by-30-for-2026-growing-season-lineup
- Microsoft Research. *FarmBeats: AI, Edge & IoT for Agriculture*. https://www.microsoft.com/en-us/research/project/farmbeats-iot-agriculture/
- Microsoft Azure. *Azure Data Manager for Agriculture*. https://azure.microsoft.com/en-us/products/data-manager-for-agriculture/
- Microsoft Customer Stories. *Bayer and EY help farmers use AI to unearth critical data*. https://www.microsoft.com/en/customers/story/22209-bayer-azure-ai-foundry
- Bayer. *Digital Tools Transforming Modern Agriculture*. https://www.bayer.com/en/agriculture/digital-farming
- CNH Industrial. *CNH Industrial brands reveal concept autonomous tractor development*. August 30, 2016. https://media.cnh.com/north-america/us/cnh-industrial-brands-reveal-concept-autonomous-tractor-development/s/c6f89699-fc6a-4d99-b8d4-8699d2f06199
- CNH Industrial. *CNH Industrial Adds New Automation and Autonomy Solutions to Ag Tech Portfolio* (Tech Day December 2022). https://www.3blmedia.com/news/cnh-industrial-adds-new-automation-and-autonomy-solutions-ag-tech-portfolio
- Successful Farming. *CNH Enhances Its Autonomous, Precision Ag Portfolio With Purchase of Raven*. June 21, 2021. https://www.agriculture.com/news/technology/cnh-enhances-its-autonomous-precision-ag-portfolio-with-purchase-of-raven
- Zoetis. *Zoetis Diagnostics*. https://www.zoetis.com/products-and-science/diagnostics
- Zoetis Diagnostics. *Vetscan Imagyst*. http://www.zoetisdiagnostics.com/us/point-of-care/vetscan-imagyst/
- TOMRA Food. *Food Processing Equipment & Sorting Machines*. https://www.tomra.com/food
- Postharvest. *TOMRA Food Launches the TOMRA 4C*. https://www.postharvest.biz/tomra-food/tomra-food-launches-the-tomra-4c-an-ai-powered-optical-sorter-for-the-nuts-and-iqf-industry
- Planet Labs. *Precision Agriculture Imaging with Planet Satellite Solutions*. https://www.planet.com/industries/agriculture/
- evokeAG. *How space tech scaleup Planet Labs is driving agricultural productivity*. November 23, 2022. https://www.evokeag.com/how-space-tech-planet-labs-driving-agricultural-productivity/
- FarmWise. *FarmWise — Feeding Our World and Our Future*. https://www.farmwise.io/
- Ochoa, E., Mo, C. *Design and Field Evaluation of an End Effector for Robotic Strawberry Harvesting*. MDPI Actuators 14(2):42, 2025. https://www.mdpi.com/2076-0825/14/2/42
- Sullivan, Summer. *A Tale of Two Valleys: The Salad Bowl of the World Goes Digital*. Just Tech (Social Science Research Council), September 10, 2025. DOI 10.35650/JT.3087.d.2025. https://just-tech.ssrc.org/articles/a-tale-of-two-valleys-the-salad-bowl-of-the-world-goes-digital/
- Customer Experience Dive. *Amazon adds new grocery tools to Alexa*. https://www.customerexperiencedive.com/news/amazon-alexa-grocery-technology-digital-whole-foods/741953/
- Precision Farming Dealer. *Farmers Use John Deere See & Spray Across 5 Million Acres in 2025*. November 11, 2025. https://www.precisionfarmingdealer.com/articles/6834-farmers-use-john-deere-see-and-spray-across-5-million-acres-in-2025

Cross-references to existing units preserved as change history. Existing units touched directly by this scan:
- `units/john-deere-see-and-spray.md`
- `units/agco-ptx.md`
- `units/bayer-climate-fieldview.md`
- `units/indigo-ag.md`
- `units/cargill-carve-meat-processing.md`
- `units/jbs-usa-volur-carcass-sorting.md`
- `units/tyson-aws-poultry-vision.md`
- `units/smithfield-pork-vision-robotics.md`
- `units/key-technology-na-food-sorting.md`
- `units/tomra-na-food-sorting.md`
- `units/ahold-delhaize-usa-retailer-ai.md`
- `units/albertsons-afresh-fresh-suite.md`
- `units/walmart-sparky-ai-shopping-assistant.md`
- `units/kroger-gemini-shopping-assistant.md`
- `units/kroger-ocado-cfc-closures-discontinued.md`
- `units/dominos-dom-voice-assistant.md`
- `units/doordash-ai-voice-ordering-discontinued.md`
- `units/wendys-freshai-google.md`
- `units/taco-bell-omilia-drive-thru-voice-ai.md`
- `units/mcdonalds-ibm-ai-drive-thru-discontinued.md`
- `units/mcdonalds-ibm-aot-discontinued.md`
- `units/sweetgreen-infinite-kitchen.md`
- `units/usfoods-wheres-my-truck-menu-iq.md`
- `units/uber-eats-ai-cart-assistant.md`
- `units/hungryroot-ai-meal-recommendation.md`
- `units/myfitnesspal-cal-ai-coach.md`
- `units/zoe-us-ai-personalised-nutrition.md`
- `units/north-america-consumption-ai-pattern.md`
- `units/extension-foundation-2026-national-ai-report.md`
- `units/agaid-wsu-institute.md` (peer academic scan)
- `units/aiira-iowa-state-institute.md` (peer academic scan)
- `units/aifarms-illinois-institute.md` (peer academic scan)
- `units/ai-climate-minnesota-institute.md` (peer academic scan)
- `units/ai-leaf-penn-state-institute.md` (peer academic scan)
- `units/carolan-colorado-state-critical.md`
- `units/cornell-atkinson-idsov-cluster.md`
- `units/indigenous-data-sovereignty.md`
- `units/usda-fy25-26-ai-strategy.md`

Future units surfaced by this scan (not yet written):
- `units/corteva-granular-carl-one-seed.md` (new — Corteva AI/data story + planned split)
- `units/cnh-raven-autonomous-portfolio.md` (new — CNH + Raven autonomous portfolio)
- `units/pivot-bio-proven-g3-biologicals-ml.md` (new — PROVEN G3 with peer-reviewed validation)
- `units/planet-labs-agrifood-satellite-substrate.md` (new — Planet Labs US satellite substrate)
- `units/microsoft-azure-data-manager-agriculture.md` (new — FarmBeats successor product)
- `units/sullivan-salinas-valley-specialty-crop-critical.md` (new — Sullivan's SSRC essay as substantive critical voice)
- `units/zoetis-vetscan-imagyst-veterinary-ai.md` (new — Zoetis US veterinary AI dominant)
- `units/advanced-farm-tech-farmwise-carbon-robotics-specialty-crop-weeders.md` (new — consolidated weeding cell)
