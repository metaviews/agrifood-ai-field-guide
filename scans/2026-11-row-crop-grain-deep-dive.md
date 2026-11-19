---
title: "AI in grain and row-crop farming — deep-dive scan"
date: 2026-11
---

# AI in grain and row-crop farming — deep-dive scan

**Status.** Topic deep-dive (Phase 0 + bounded discovery pass), not a full unit cycle. Assesses what the corpus holds on AI in grain and row-crop farming, identifies thin cells, and runs one bounded discovery pass on emerging/novel tools and approaches. Written 12 November 2026. Three parallel research subagents (machinery layer; agronomy-decision and remote-sensing layer; independent-evidence and critical layer), fixed query budgets, reporting-only; single-writer consolidation.

**Method.** Corpus-side: filename and content greps across `units/`, `scans/`, `GAPS.md`, `LEADS.md` for row-crop, grain, machinery, and named-actor terms; registry gap extraction. Discovery-side: ~36 web searches across three subagents, every item returned with date, source URL, and announced-vs-documented status. Load-bearing claims spot-verified by the writer at primary-source level before recording: the University of Arkansas See & Spray trial (read at aaes.uada.edu — the subagent's $30.49/acre detail is NOT in the primary and is dropped), the USDA NASS precision-agriculture figure (primary located at nass.usda.gov Farm Computer Usage and Ownership report, August 2025), and the Bushel State of the Farm figures (vendor blog corroborated by Feed & Grain, AgInfo, CropLife trade coverage).

---

## 1. What the corpus already holds (Phase 0 inventory)

The machinery-incumbent layer is the corpus's strongest row-crop cell:

- `units/john-deere-see-and-spray.md` — the canonical deployment case: 5M+ acres across 2025 (Deere, vendor-reported), ~50% herbicide reduction (Deere, vendor-reported). The one row-crop AI product with deployment-scale disclosure.
- `units/cnh-raven-autonomous-portfolio.md` — Driver Assist Harvest, Driverless Tillage, Trident 5550 autonomous spreader; the acquired-IP trajectory.
- `units/agco-ptx.md` — brand-agnostic retrofit path (with Precision Planting).
- `units/taranis-israel-crop-intelligence.md` (~20M acres, vendor-reported) and `units/auravant-argentina-precision-agriculture.md` — the imagery/decision layer.
- `units/plant-breeding-ai-methodology.md` and the AI plant breeding global scan — genetics side of grain.
- Canada well served: `units/prairie-grain-ai-cluster.md`, `units/canadian-grain-grading-ai.md`, SoilOptix (in CAAIN and Canada value-chain scans).
- Global: `units/china-grain-storage-ai-jiyuan.md`, `units/china-ground-robotics-unmanned-farms.md` (state-delivery row-crop automation), Brazil soybean and Argentina irrigation units, `units/pivot-bio-proven-g3-biologicals-ml.md`.
- University row-crop institutes: AIFARMS (UIUC), AIIRA (Iowa State), AgAID (WSU), plus `units/usda-ars-iowa-state-aiira-us-land-grant.md`.

Named registry gaps already touching this topic: **G-017** (US row-crop autonomous machinery operational scale beyond Deere), **G-173** (US grain/seed processing AI — Cargill, ADM, Bunge), **G-469** (China's rice-transplanting automation exception).

**Thin cells (grep-verified absences).** The corpus holds zero mentions of: Solinftec Solix (one LAC scan mention only), Aigen, Sabanto, SwarmFarm, Monarch, Sentera, EarthOptics, FBN (Farmers Business Network), Autonodyne, Greeneye, Bosch-BASF ONE SMART SPRAY, Kubota row-crop autonomy, independent adoption surveys (USDA NASS, Purdue, Bushel), and any farmer-side critical voice on row-crop autonomy or data/subscription terms. The Sullivan ethnography covers specialty crops only. The corpus cannot currently say which spot-spraying challengers or small-robot alternatives exist at commercial scale, has no independent adoption evidence, and no autonomy-economics critique.

---

## 2. What the discovery pass found (July → November 2026)

### 2.1 Machinery layer

1. **Deere disclosed nothing new.** No acreage or unit count for the second-generation (Autonomy 2.0) kit has ever been published. Third-party datapoints only: a dealer's customer group ran 7 autonomous tractors over 13,000 acres (fall 2025); SAE/CES coverage reported ~50,000 autonomous acres with paid pilot customers at CES 2025 — three orders of magnitude below See & Spray's 5M. The kit remains tillage-only. Trade-reported pricing (~$40–45K + $10K/yr) is not vendor-published. The largest announced US autonomous-tractor deployment (U.S. Sugar, 255,000 acres, 5 tractors, May–June 2026) runs on third-party ASI autonomy, not Deere's kit.

2. **Spot spraying has a second player at disclosed scale.** Greeneye Technology (retrofit camera-based spot spraying, no per-acre fee) reported a record 2026 season: >500,000 acres across 12 US states, 81% average non-residual herbicide savings, ~6M gallons saved (all vendor-reported; Strip Till Farmer, Farm Progress and Precision Farming Dealer relayed the same release), plus a North American HQ in Salina, Kansas (13 Oct 2026) and an Intellifarms dealer partnership (11 Aug 2026). WEED-IT USA (Rometron) formally entered the US market with dealers named (12 Nov 2026) — fluorescence/chlorophyll sensing, no cameras, a distinct sensing modality from camera-based systems; vendor-claimed >100M hectares sprayed worldwide since 1999. ONE SMART SPRAY (Bosch-BASF) reaches CNH brands via the 2023 integration; no new deployment figures.

3. **Small/swarm robots have their first scale datapoint.** Solinftec disclosed through-July-2026 figures at Farm Progress Show (1 Sept 2026): >100 Solix robots in 13 US states + Puerto Rico, 55,427 acres (15× three years ago), >95M plants monitored individually, 83–89% chemical-use reduction (vendor-reported), >1,700 autonomous refills in the first commercial season of the Refill Station; four-model family announced, ~200 robots + 80 refill stations targeted for 2027. Aigen launched Element Gen 2 X4 (four-arm solar weeding, 16 Sept 2026; >100 robots built, >15,000 autonomous hours vendor-reported; simulation-trained on new crops in under a week). SwarmFarm: nothing found.

4. **Retrofit autonomy is where farmers actually bought.** AGCO/Fendt opened the Fendt autonomy basic package in USA, Canada and Australia (3 Sept 2026) and PTx OutRun now covers grain cart AND tillage (~$55K + $15K/yr, trade-reported) — running on Deere 8R as well as Fendt, the mixed-fleet counter to Deere lock-in; AGCO states a full-farm autonomy goal by 2030. Sabanto closed an oversubscribed Series B led by Leaps by Bayer (14 July 2026); trade-reported fleet 200–300 kits across US/Canada/Australia at $70K per kit; driverless planting support (Precision Planting Gen 3) coming spring 2027. Successful Farming documents 2025 as the first season farmers actually bought autonomy — and the purchases skew toward grain carts and tillage retrofits, not autonomous tractors. One Nebraska farm's 20–25% faster harvest with an OutRun grain cart is explicitly a company account.

5. **CNH disclosed nothing.** No post-July autonomy deployment or shipped-unit figures. The corpus's finding that CNH reports at lower granularity than Deere is unchanged. AGCO–Kubota collaboration: nothing found — treat as unconfirmed.

6. **Kubota's post-July news is Japan-first:** Agri Robo Tractor MR Series (6 Aug 2026, April 2027 launch) — claimed first domestically manufactured unmanned-autonomous-under-remote-monitoring tractors, eight work types in rice and dry-field farming. Context: ~700 Agri Robo machines shipped in Japan by 2024 (vendor-reported) — the largest shipped-count disclosure among major OEMs. Partnerships: Agtonomy expanded pilot (Oct 2026, specialty crops), Kilter AX-1 European distribution (Oct 2026).

### 2.2 Agronomy-decision and remote-sensing layer

7. **The action shifted from imagery to reasoning-and-commerce.** FBN partnered with Google AI Futures Fund (29 Sept 2026) to build an "AI Context Engine" powering agentic, *executable* farm decisions — agents that "run a yield prediction, connect it to a producer's marketing strategy and then... sell grain or hedge" — early versions fall 2026; Norm now serves 140,000+ members (vendor-reported; the Market Intelligence release said 120,000+ the same quarter). FBN Market Intelligence (23 July 2026) monetises ML corn/soybean price outlooks at $199/quarter. Syngenta launched Cropwise Explorer (6 Oct 2026), pushing satellite-AI anomaly detection to retailers; Cropwise AI is with a few hundred Golden Harvest sales reps with farmer rollout planned (vendor-reported); Cropwise Grower GenAI serves 2M+ farmers in India (vendor-reported). OneSoil's AI Agronomist (per-field chat grounded in satellite history, live 14 June 2026) shipped a 27 Oct Global Analytics update: 2.5m field-boundary resolution, crop ID expanded 12 → 31 types, ~140,000 users / ~70M ha (vendor-reported), break-even in 2025.

8. **Sentera is now visibly inside the Deere workflow.** First joint Deere–Sentera Farm Progress Show presence (12 Sept 2026) since the May 2025 acquisition: FieldAgent + SMARTSCRIPT Weeds generate targeted herbicide prescriptions deliverable to individual-nozzle sprayers via the Operations Center; PixelScouts drone hardware demonstrated. Aerial imagery is being absorbed into the See & Spray-Operations Center loop.

9. **Soil-mapping AI: EarthOptics consolidated, one new entrant.** EarthOptics claims 5M+ acres mapped (vendor-reported) on a $110M Series C (May 2026, pre-window); new AI-enabled consulting/data-licensing division already ~15% of 2026 revenue (CEO interview, 16 July 2026); Väderstad pilot turns ML compaction maps into variable-depth-tillage prescriptions. TerraBlaster ($12.5M seed, 25 Aug 2026) commercialises LIBS (laser-induced breakdown spectroscopy — the Mars-rover technique) real-time soil pH/NPK mapping at 0.15-acre resolution — but single-source coverage, no vendor primary located; treat with caution.

10. **Geospatial foundation models: institutional, not commercial.** Prithvi's headline milestones (in-orbit first, operational crop-classification validation) all landed pre-July 2026. The load-bearing caution figure: operational corn/soybean classification reaches F1 0.84/0.78 in the US Corn Belt, but median overall accuracy across 18 global test regions is 0.58. No commercial row-crop deployment of Prithvi found. NASA published a "5+1" foundation-model strategy (Sept 2026). VRA nitrogen: no new tools — Adapt-N's news is scientific validation (Brazilian maize, Agronomy Journal 2026), suggesting the N-management ML layer is mature rather than innovative. University extension LLMs (Illinois CropWizard; UW–Madison/Penn State Boots on the Ground v2 soybean validation across 8 states) were quiet post-July — honest negative.

### 2.3 Independent evidence and critical angles

11. **The adoption picture is flat-to-declining, not rising.** USDA NASS: 22% of US farms used precision agriculture practices in 2025, DOWN from 27% (2023) and 25% (2021) — the first decline in the series (Farm Computer Usage and Ownership, August 2025). Bushel's 2026 State of the Farm (n=1,400+, US/Canada): 14% use AI tools on the farm; among farms using AI, 50% use it for business/financial analysis and only 25% for yield prediction or agronomy — AI starts in the office, not the field; 56% use software for grain marketing. Purdue/CropLife 2025 dealer survey (25th annual): farm income is the top adoption barrier; dealers expect AI to improve agronomic recommendations but do NOT expect it to cut their labour needs. Purdue agribusiness survey: ~72% believe AI will improve productivity but only 5.5% report AI well or fully integrated. Canadian: Simpson Centre/UCalgary (587 prairie producers) — 68% use some digital-ag tech but only 16% are high adopters; 89% worry about data ownership, 88% don't trust digital-tech providers; adoption sharply bifurcated by farm size (81% of >5,000-acre operations vs 36% under 2,000 acres, FSC-CCF).

12. **The ~50% See & Spray figure holds — with a management-sensitive catch.** University of Arkansas three-year field trial (2022–2025, soybeans, prototype machine, read at primary source): 43–59% herbicide reduction vs broadcast, corroborating Deere's figure in direction and magnitude. But the savings dial and the weed-control dial are the same dial: at low sensitivity the trial recorded a **280% per year increase in Palmer amaranth populations** — escapes set seed, building the soil seed bank and accelerating resistance; Norsworthy: low sensitivity buys short-term savings that erode over years. Arkansas-scale modelling: 13–80% savings possible, but improper use could cost producers upwards of $60M/yr. ISU field-scale data (secondary source; locate ISU original before corpus citation): savings ranged 43.9–90.6% across five soybean fields, driven almost entirely by initial weed pressure. The "50%" is real but is an average over a management-sensitive distribution.

13. **The farmer-side critical voice the corpus lacks exists and is sharp.** The FTC–Deere right-to-repair settlement (sued Jan 2025, settled July 2026, 10 years FTC oversight) coexists with a private class settlement of ~$99M paying farmers ~$0.79/acre — and repair access itself requires a paid Deere software subscription granting Deere a lifetime licence to farmer machine data (named plaintiff: "it's pretty pernicious that I have to give up all of my data... in exchange for repairing my machine"). Wired's hands-on documents Pro Service at $195/machine/yr or $4,995–5,995/yr fleet — and farmers using cracked grey-market software instead. Purdue ag economists (Commodity Classic 2025): at $30/hr labour, "there's never a scenario where autonomy is better than having labor do the work"; no single precision technology was a silver bullet — gains came only from bundled technologies. Sabanto's own cost case ($18.88 vs $6.27/acre) counts investment but NOT labour, and its founder reports farmers keep their workers and use autonomy to farm more acres — labour substitution is not the observed deployment story.

14. **Two quiet deployment zones sit outside the corpus's row-crop frame.** (a) On-combine grain-quality sensing has reached OEM-standard scale: Deere HarvestLab 3000 grain sensing standard on MY2025+ X9/S7/T6 combines; CropScanAg 4000VT NIR analyser integrated into Case IH/New Holland dual monitors; Ground Truth Ag benchtop ML grading in Canada. This complicates the "only Deere See & Spray" exception. (b) Agentic AI arrived first in grain MARKETING: FBN + Google executable agents, GrainFox's Sinoa chatbot, Ever.Ag's Everett expanded to grain merchandising (July 2026) — exactly where Bushel says farmers actually use AI. (c) Grain-drying/elevator AI is deployed at the handling layer (SWARM Engineering agentic scheduling at elevators; aeration-fan scheduling; GEAPS coverage), not the farm bin — the first concrete examples for G-173's neighbourhood.

15. **Foundation-model robotics is funded far ahead of any ag deployment.** FieldAI raised $405M at a $2B valuation (Aug 2025; Bezos Expeditions, NVIDIA NVentures, Khosla; + Hyundai Feb 2026) for GPS-free, map-free, embodiment-agnostic "Field Foundation Models" — agriculture listed as a target vertical, named deployments in construction/energy/security, zero in agriculture. The purest current case of capital exceeding deployment, and a possible bypass of the equipment-vendor lock-in pattern — or a failure to land in ag at all.

---

## 3. Cross-cutting observations

**The headline finding survives independent testing and is sharper than the corpus stated.** "Announcements exceed deployments at every player except Deere See & Spray" holds, with three refinements: (1) it is worse than "exceed" — federal adoption data shows the whole precision-ag stack *declining* while vendor announcements accelerate; (2) the See & Spray exception holds up under replicated university trial but the figure is management-sensitive, not a machine property; (3) the exception understates the deployed base in one respect — harvest-quality sensing is quietly at OEM-standard scale.

**A two-speed structure is emerging.** Deployment is real in three unglamorous cells: spot spraying (Greeneye 500K acres, Solinftec 55K), grain-cart/tillage retrofit autonomy (Sabanto 200–300 kits, OutRun orderable), and harvest-quality sensing (OEM-standard). Announcement is dominant in the headline cells: full-field autonomy, small swarm robots beyond Solinftec, foundation-model robotics. The unglamorous cells share traits: retrofit onto existing machines, mixed-fleet, low-horsepower, no per-acre fee — the opposite of the integrated-platform subscription pattern.

**The reasoning-and-commerce layer is where gen-AI actually lands.** Every substantive gen-AI deployment found (FBN Norm/Context Engine, GrainFox Sinoa, Ever.Ag Everett, OneSoil AI Agronomist, Cropwise) is in marketing, finance, or advice — not in-field agronomy. This inverts the vendor pitch and matches the independent farmer data.

**Sovereignty/distrust is quantified for the first time.** 88–89% of prairie producers distrust digital-tech providers with their data; the Deere repair-for-data trade makes the distrust concrete. The corpus's data-sovereignty frame (H/S tiers, hyperscaler substrate) now has a farm-level adoption-side counterpart.

---

## 4. Contested claims

- **C-362 — "Computer-vision spot spraying cuts herbicide use by ~50%."**
  - *Asserting*: Deere (5M acres, ~50% reduction, vendor-reported); Greeneye (81% average savings, vendor-reported); Solinftec (85% average, vendor-reported).
  - *Contesting/complicating*: University of Arkansas three-year replicated trial — 43–59% reduction confirms direction and magnitude, but at low sensitivity Palmer amaranth populations rose 280% per year; ISU field-scale data shows 43.9–90.6% range driven by weed pressure (secondary source; ISU original not yet located).
  - *Provisional reading (2026-11-12)*: The figure holds as an average over a management-sensitive distribution; savings and weed-control are the same dial, and max-savings settings have seed-bank consequences that erode savings over years.
- **C-363 — "Farmers are rapidly adopting agricultural AI."**
  - *Asserting*: vendor adoption figures throughout the corpus (Taranis 20M acres, Cropwise 70M+ ha, OneSoil 140K users, FBN 140K members — all vendor-reported).
  - *Contesting*: USDA NASS 22% precision-ag use in 2025, down from 27% (2023) — first decline in the series; Bushel 2026: 14% AI use, majority office-side; Simpson Centre: 16% high adopters, 88–89% data distrust; Purdue dealer survey: farm income is the top barrier.
  - *Provisional reading (2026-11-12)*: Farm-level AI adoption is thin, concentrated in office/finance tasks and in the largest operations, and the precision-ag aggregate is declining while vendor deployment claims grow.
- **C-364 — "Autonomy substitutes for farm labour and pays for itself."**
  - *Asserting*: OEM autonomy narratives (CNH: "autonomy will become an integral part of farmers' operations everywhere"); OutRun Nebraska harvest-speed account (company).
  - *Contesting*: Purdue economists — at $30/hr labour autonomy never beats hired labour; Sabanto's own cost case excludes labour; Sabanto founder: farmers keep workers and farm more acres; dealer-side subscription economics ($40–45K + $10K/yr) with no published data on subscription effects on adoption by farm size (Atallah).
  - *Provisional reading (2026-11-12)*: The observed deployment story is acreage expansion and unglamorous-task automation, not labour substitution; the economic case is unresolved and data-free where it matters.
- **C-365 — "Deere See & Spray is the only row-crop AI at deployment scale" (the corpus's own prior framing).**
  - *Asserting*: the corpus's G-017-era structured finding.
  - *Contesting*: Greeneye >500K acres across 12 states (vendor-reported); harvest-quality sensing at OEM-standard scale (HarvestLab MY2025+, CropScanAg on CNH); grain-cart retrofits bought by farmers in 2025.
  - *Provisional reading (2026-11-12)*: See & Spray remains the largest single disclosed deployment, but it is no longer the only deployed row-crop AI cell; the finding needs refinement, not retraction.

---

## 5. New gaps surfaced

- **G-482 (n=1, src=this scan)** — Deere second-generation autonomy deployment scale: no unit count or acreage figure has ever been published for the Autonomy 2.0 kit; only third-party datapoints exist (7 tractors/13,000 acres dealer group; ~50K paid-pilot acres at CES 2025; U.S. Sugar's largest deployment runs on third-party ASI autonomy). Whether Deere will ever disclose autonomy deployment at See & Spray granularity is the test of the lock-in pattern.
- **G-483 (n=1, src=this scan)** — Independent verification of spot-spraying challenger figures: Greeneye (500K acres, 81% savings), Solinftec (55,427 acres, 85% reduction, 95M plants), WEED-IT (100M hectares since 1999, 60–95% reduction) are all vendor-reported with no audit; the trade coverage is single-release-derived.
- **G-484 (n=1, src=this scan)** — Multi-year, multi-state replicated outcomes for low-sensitivity spot spraying: the Arkansas 280%/yr Palmer amaranth seedbank finding is one state, one crop (soybean), one prototype machine generation; whether current commercial machines and grower settings reproduce the seed-bank consequence is unknown.
- **G-485 (n=1, src=this scan)** — Driver of the NASS precision-ag decline (27%→22%, 2023→2025): whether the first-ever decline in the series is disadoption, small-farm exit, or survey-methodology change is not established by any located source.
- **G-486 (n=1, src=this scan)** — Harvest-quality sensing deployment scale: HarvestLab 3000 is standard on MY2025+ X9/S7/T6 combines and CropScanAg ships on CNH monitors, but no published acreage/animal unit counts exist; the corpus has no unit for this quietly-deployed cell.
- **G-487 (n=1, src=this scan)** — FBN "AI Context Engine" executable-agent claims (buy inputs, sell grain, hedge): no deployment evidence yet beyond announcement; also unverified whether farmer-identifiable data truly never reaches Google. Consistency of FBN member counts (140K vs 120K in same-quarter releases) is itself a verification item.
- **G-488 (n=1, src=this scan)** — Operational accuracy of geospatial foundation models outside the Corn Belt: Prithvi-based crop classification reaches F1 0.84/0.78 (corn/soy) in the Corn Belt but median 0.58 across 18 global regions; the barrier to global row-crop mapping claims is unexplained in deployment narratives.
- **G-489 (n=1, src=this scan)** — TerraBlaster LIBS soil-nutrient mapping: single-source coverage (WinSSolutions), no vendor primary located; $12.5M seed, 0.15-acre-resolution pH/NPK claims need direct verification before any corpus use.
- **G-490 (n=1, src=this scan)** — Foundation-model robotics capital vs agricultural deployment: FieldAI ($405M, $2B valuation, zero named ag deployments) — whether general-purpose robot foundation models land in row crops, bypass equipment-vendor lock-in, or never arrive in ag is unresolved.
- **G-491 (n=1, src=this scan)** — Autonomy subscription economics by farm size: no data exists on how subscription fees ($10–15K/yr tier) affect adoption across farm-size strata (named by economist Atallah); the deployed pricing figures are trade-reported, not vendor-published.

---

## 6. Future units surfaced — all five realized November 2026

- **row-crop-ai-independent-adoption-evidence.md** — NASS decline, Purdue dealer/agribusiness surveys, Bushel farmer data, Simpson Centre prairie data, FSC-CCF farm-size bifurcation. The corpus's row-crop cell currently has no independent adoption evidence at all; this is the highest-value unit. Closes the evidence side of G-017 and anchors C-363.
- **spot-spraying-challengers.md** — Greeneye, WEED-IT, ONE SMART SPRAY, Solinftec Solix, Aigen; the sensing-modality contrast (camera vs fluorescence vs per-plant mechanical). Extends `john-deere-see-and-spray.md` rather than competing with it.
- **retrofit-autonomy-economics.md** — PTx OutRun, Sabanto, Deere kit pricing, the subscription-forever structure, Purdue's $30/hr model, Sabanto's labour-excluding cost case, the FTC settlement's repair-for-data trade. The critical-economics counterpart to the incumbent units.
- **grain-marketing-agentic-ai.md** — FBN Context Engine, GrainFox Sinoa, Ever.Ag Everett, Bushel's office-not-field finding. The gen-AI deployment story the vendor pitch misses; also the first concrete material toward G-173.
- **grain-harvest-quality-sensing.md** — HarvestLab 3000, CropScanAg, Ground Truth Ag; the quiet OEM-standard deployment zone that complicates C-365.

Also flagged for adjacent units rather than new files: the Arkansas seed-bank finding belongs in `john-deere-see-and-spray.md` (it is the independent test of that unit's central figure); Sentera's absorption into the Deere Operations Center belongs there too; Kubota Agri Robo MR Series belongs in `japan-korea-agrifood-ai-pattern.md`.

---

## 7. Negative findings (honest absences)

- Nothing new from CNH/Case IH post-July 2026 (deployment or shipped units).
- No AGCO–Kubota collaboration found — treat prior mentions as unconfirmed.
- SwarmFarm: nothing found in this pass.
- No new post-July extension-LLM launches for row crops; CropWizard and Boots on the Ground v2 remain the documented pilots.
- No commercial row-crop deployment built on Prithvi as of 12 Nov 2026.
- No new VRA-nitrogen tools; the layer reads as mature/consolidated.
- No new Taranis announcements or acreage updates post-July.
- Airbus/Planet agri products received only a null-result check, not a dedicated pass — coverage gap, not a confirmed absence.

---

## 8. Verification posture

The pass is vendor-reported-heavy: nearly every quantitative deployment figure above is vendor-sourced and labelled. Independent anchors verified at primary level by the writer: the Arkansas trial (aaes.uada.edu), NASS Farm Computer Usage and Ownership (nass.usda.gov), the FTC settlement terms (multiple independent outlets, corroborating). Bushel figures are vendor-published survey data (industry-neutral surveyor, n=1,400+) corroborated by three trade outlets. ISU spot-spray savings data is secondary-sourced and flagged pending the ISU original. TerraBlaster is single-source and should not be cited in any unit until a vendor primary is located. V-tier: most items V0–V1; the Arkansas trial and NASS data are the pass's strongest evidence (V2-equivalent for their claims).

## 9. Sources

Discovery pass (retrieved 12 Nov 2026): striptillfarmer.com (Greeneye Salina HQ + record season); futurefarming.com (Solinftec Solix fleet expansion); fendt.com PDF (autonomy basic package NA/AUS); kubota.com (Agri Robo MR Series); agrimarketing.com (WEED-IT USA HQ + dealers); bayer.com media release (Sabanto Series B); globalbrandsmagazine.com + sae.org + agriculture.com + myjournalcourier.com (Deere autonomy status, pricing, dealer economics); media.cnh.com (null check); syngenta-us.com (Cropwise Explorer); fbn.com (Google AI Futures Fund; Market Intelligence); taranis.com (Yield Impact, pre-July); basf.com (xarvio CONNECT 2.0); onesoil.ai + tech.eu (Global Analytics, AI Agronomist profile); precisionfarmingdealer.com (Sentera at Farm Progress Show); nasa.gov + NTRS (Prithvi status, 5+1 strategy); earthoptics.com + S2G interview (EarthOptics); winssolutions.org (TerraBlaster — single source); sciencesocieties.org + Agronomy Journal (Adapt-N); aaes.uada.edu (Arkansas See & Spray trial — primary, read); case-studies.ai (ISU field data — secondary); farmonaut.com + nass.usda.gov fmpc0825.pdf (NASS 22%); ag.purdue.edu (dealer survey PDF; Commodity Classic economics; agribusiness survey); san.com + wired.com + 404media.co (FTC settlement, repair-for-data); deere.com (HarvestLab MY2025+); grainswest.com (Ground Truth Ag, grain sensing); producer.com + grainfox + geaps.com (grain marketing agents, elevator AI); fieldai.com (FieldAI raise); researchmoneyinc.com + fsc-ccf.ca (Canadian adoption data); bushelpowered.com + feedandgrain.com + croplife.com (Bushel State of the Farm).
