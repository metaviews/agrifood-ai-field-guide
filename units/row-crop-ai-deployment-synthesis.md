---
id: row-crop-ai-deployment-synthesis
title: AI in row-crop farming — a two-speed deployment pattern, and what the independent evidence actually shows
summary: "Row-crop AI is a two-speed structure — real retrofit/sensing deployment vs announcement-dominated headline cells; the independent evidence shows thin adoption, a management-sensitive savings dial, and region-bound foundation models."
sector-position: on-farm-production-open-field
ai-technique-class: mixed
purpose: decision-support
claim-type: pattern
unit-kind: meta-pattern
activity-status: deployed
critical-voice: right-to-repair
capital-intensity: industrial
language-literacy-profile: standard-smartphone
policy-instrument: (none)
region: NA-US (with Canada and global comparators)
actor: US row-crop AI ecosystem (Deere, CNH, AGCO, Greeneye, Solinftec, Sabanto, FBN, IBM/NASA)
actor-type: mixed
data-governance: proprietary
data-rights-framework: vendor-owned
maturity-scale: S3
maturity-verification: V2
maturity-longevity: L2
maturity-translation: T3
last-verified: 2026-11
last-regionally-scanned: 2026-11
---

## Central claim

AI in row-crop farming is deploying in a **two-speed structure**: real, narrow,
unglamorous deployment in the retrofit and sensing cells that farmers actually bought,
alongside announcement-dominated headline cells — full-field autonomy, swarm robots,
foundation-model robotics — where capital and narrative outrun disclosed deployment. The
independent evidence, now peer-reviewed and primary-verified, punctures the hype in three
specific ways: farm-level adoption is thin (and the federal decline is partly a
survey-methodology artifact, not clean disadoption); the headline herbicide-savings figure
is a management-sensitive dial with a seed-bank cost at maximum savings; and geospatial
foundation models are confidently wrong outside their training phenology. The honest
reading is neither hype nor dismissal — deployment is real but narrow, the savings are
conditional, and the foundation-model promise needs region-specific alignment and
uncertainty quantification before production use.

This unit synthesizes the 2026-11 row-crop/grain deep-dive cycle and its three follow-on
passes (G-485, G-484, G-488). It introduces no new claims; every figure is carried from the
underlying units and scans with its verification tier.

## 1. The two-speed structure

**Deployment is real in three unglamorous cells:**

- **Spot spraying.** Deere See & Spray remains the largest single disclosed deployment
  (5M+ acres in 2025, ~50% non-residual herbicide reduction — vendor-reported), now
  independently corroborated in direction and magnitude by peer-reviewed university trials
  (see §2b). Greeneye reports >500,000 acres across 12 US states (vendor-reported,
  unaudited); WEED-IT entered the US with a distinct fluorescence sensing modality;
  Solinftec's Solix reports >100 robots / 55,427 acres (vendor-reported).
- **Retrofit autonomy.** This is where farmers actually bought in 2025: PTx OutRun (grain
  cart + tillage, running on Deere 8R as well as Fendt — the mixed-fleet counter to Deere
  lock-in), Sabanto (trade-reported 200–300 kits), AGCO/Fendt's opened autonomy package.
  The purchases skew to grain carts and tillage retrofits, not autonomous tractors.
- **Harvest-quality sensing.** Quietly at OEM-standard scale: Deere HarvestLab 3000 grain
  sensing standard on MY2025+ combines; CropScanAg NIR integrated into CNH monitors;
  Ground Truth Ag benchtop ML grading in Canada. No acreage counts published (G-486).

These cells share traits: **retrofit onto existing machines, mixed-fleet, low-horsepower,
no per-acre fee** — the opposite of the integrated-platform subscription pattern.

**Announcement dominates the headline cells:**

- **Full-field autonomy.** Deere has never published an acreage or unit count for its
  Autonomy 2.0 kit; third-party datapoints (~50K paid-pilot acres at CES 2025; a dealer
  group's 7 tractors / 13,000 acres) sit three orders of magnitude below See & Spray's 5M.
  The largest announced US autonomous-tractor deployment (U.S. Sugar, 255,000 acres) runs
  on third-party ASI autonomy, not Deere's kit (G-482). CNH disclosed nothing post-July.
- **Foundation-model robotics.** FieldAI raised $405M at a $2B valuation for
  embodiment-agnostic "Field Foundation Models" with agriculture a target vertical and zero
  named agricultural deployments — the purest current case of capital exceeding deployment
  (G-490).

The corpus's prior finding — "announcements exceed deployments at every player except Deere
See & Spray" — survives independent testing and is sharper than stated: it is worse than
"exceed" (the federal adoption aggregate fell while vendor announcements accelerated), the
See & Spray exception holds under replicated trial but is management-sensitive, and the
exception understates the deployed base (harvest-quality sensing is quietly at OEM scale).
See & Spray is no longer the *only* deployed row-crop AI cell, but it remains the largest
single disclosed one (C-365, refined not retracted).

## 2. What the independent evidence shows

### 2a. Adoption is thin — and the federal decline is partly a measurement artifact

The independent surveys carry the adoption-thinness finding: Bushel's 2026 State of the
Farm (n=1,400+) — 14% of farms use AI tools, and among those, half use it for
business/financial analysis vs only a quarter for yield prediction or agronomy (AI starts
in the office, not the field); the Simpson Centre's 587 prairie producers — only 16% high
adopters, 88–89% distrust digital-tech providers with their data, adoption sharply
bifurcated by farm size; the Purdue/CropLife dealer survey — farm income is the top
adoption barrier.

The USDA NASS precision-agriculture series fell 27% (2023) → 22% (2025), its first decline.
**The G-485 follow-on resolved the driver: a survey-methodology change, not clean
disadoption.** In 2025 NASS moved the technology-use questions from the June Area Survey
(area frame; 54.0% response rate) to the Agricultural Land Values and Technology Use
Survey (list frame; 35.8% response rate) — vehicle, frame, and response rate all changed in
the decline year, with the question wording unchanged. Small-farm exit is ruled out (farm
counts ~stable; low-adopting small farms exiting would raise the share, not lower it). The
decline must be cited with this methodology caveat; it is not a clean disadoption signal
(C-363 refined; the artifact-vs-disadoption split awaits a NASS frame-comparison study,
G-494).

### 2b. The ~50% savings figure is a management-sensitive dial

The G-484 follow-on located the primaries and strengthened C-362. The figure now rests on
three independent university sources: the ISU commercial-machine demonstration (Houser et
al. 2024; 43.9–90.6% per field, average 76%, driven by initial weed pressure and residual
performance); a multi-state AR+Mississippi two-year replicated trial (Avent et al. 2024,
*Weed Technology* 38:e74; 28.4–62.4% savings, control within ≤1% of broadcast); and the
Arkansas three-year trial (Avent et al. 2026, *Weed Technology* 40:e9; 43–59%). **The
savings dial and the weed-control dial are the same dial:** at low sensitivity the Arkansas
trial recorded a 280%/yr Palmer amaranth increase — escapes set seed, building the soil
seed bank and accelerating resistance, eroding savings over years. The "~50%" is real but
is an average over a management-sensitive distribution, not a machine property. The
multi-year seed-bank consequence is peer-reviewed but single-location (Keiser AR, prototype
machine); whether commercial machines at grower settings reproduce it is G-495.

### 2c. Foundation models are confidently wrong outside their training phenology

The G-488 follow-on explained the Prithvi-EO-2.0 out-of-region accuracy drop (Corn Belt F1
0.84/0.78 vs 18-global-region median overall accuracy 0.58). Kolluru et al. 2026
(arXiv:2610.08810, three continents) measured mean overall accuracy 0.65 (US) → 0.40
(Europe) and found the dominant mechanism is **phenological misalignment, not purely
spatial training bias** — accuracy collapsed when the observation window missed local
growing seasons while deterministic confidence stayed high (12–51% of affected scenes
confidently mislabeled at near-zero precision). It is partly recoverable without retraining
(class consolidation +8.4 points; observation-window alignment to a 45–90-day plateau) and
detectable via Monte Carlo dropout entropy. C-366 ("geospatial foundation models are ready
for production crop identification globally") is false out-of-the-box but not a fundamental
flaw — a calibration/alignment problem with known mitigations. Production use needs
region-specific window alignment, class-scheme adaptation, and uncertainty quantification;
generalization beyond Prithvi and production-pipeline validation are G-496. Unlike the
proprietary precision-ag stack, Prithvi is openly released — the limit is a scientific
caveat on a public good, not a lock-in concern.

### 2d. gen-AI lands in reasoning-and-commerce, not in-field agronomy

Every substantive gen-AI deployment found is in marketing, finance, or advice — FBN's
Context Engine (executable agents that sell grain or hedge; announcement-stage, G-487),
GrainFox's Sinoa, Ever.Ag's Everett, OneSoil's AI Agronomist, Cropwise. This inverts the
vendor pitch and matches Bushel's office-not-field finding. Sentera's absorption into the
Deere Operations Center shows aerial imagery being pulled into the See & Spray loop.

### 2e. Sovereignty and distrust are quantified

88–89% of prairie producers distrust digital-tech providers with their data. The FTC–Deere
right-to-repair settlement (10 years oversight) coexists with a ~$99M private class
settlement (~$0.79/acre) — and repair access itself requires a paid Deere software
subscription granting Deere a lifetime licence to farmer machine data. The corpus's
data-sovereignty frame now has a farm-level adoption-side counterpart.

## 3. The honest ceiling — what the evidence does not establish

- **Vendor deployment figures are unaudited.** See & Spray's 5M acres, Greeneye's 500K,
  Solinftec's 55K are vendor-reported; the challengers' savings figures (81%, 85%) have no
  independent audit (G-483). The two-speed structure rests on disclosed scale, not verified
  scale.
- **The autonomy economic case is unresolved and data-free where it matters.** Purdue
  economists: at $30/hr labour, autonomy never beats hired labour; Sabanto's own cost case
  excludes labour; its founder reports farmers keep workers and farm more acres. No data
  exists on how subscription fees affect adoption across farm-size strata (G-491). The
  observed story is acreage expansion and unglamorous-task automation, not labour
  substitution (C-364).
- **Disclosure absences persist.** Deere autonomy scale (G-482), harvest-sensing scale
  (G-486), FBN agent deployment and data-handling (G-487), TerraBlaster's single-source
  claims (G-489), FieldAI's capital-vs-deployment (G-490). These need vendor numbers that do
  not yet exist; a literature pass cannot close them.
- **The verified findings have scoped residuals.** The NASS artifact-vs-disadoption split
  is unquantified (G-494); the seed-bank consequence is single-location (G-495); the GeoFM
  mitigations are Prithvi-specific and retrospective (G-496).
- **No farmer-side adoption-depth data.** The critical voice is sharp, but how deeply
  farmers use these tools — and whether the savings survive real-world settings over years
  — is not measured at scale.

## 4. Falsifiers — what would change this reading

- Deere disclosing autonomy deployment at See & Spray granularity would test the lock-in
  pattern (and could collapse the two-speed distinction).
- An independent audit of challenger savings figures would confirm or refute the
  second-player scale (G-483).
- A multi-state, commercial-machine, grower-setting seed-bank replication would generalize
  (or bound) the management-sensitive catch (G-495).
- A NASS frame-comparison study would separate measurement artifact from real disadoption
  (G-494).
- GeoFM production-pipeline validation with window alignment and uncertainty quantification
  would test whether the transferability mitigations hold operationally (G-496).
- Subscription-economics data by farm size would resolve the autonomy economic case
  (G-491).

## 5. Why this reading matters

This is the corpus's clearest, independently tested case of "announcements exceed
deployments" — and the testing made it sharper, not softer. The two-speed structure
explains why farmer purchasing and vendor narrative diverge: farmers buy retrofit,
mixed-fleet, no-per-acre-fee tools that fit existing operations, while the headline cells
sell integrated-platform subscriptions whose deployment is undisclosed. The three verified
punctures (thin adoption with a methodology caveat, conditional savings with a seed-bank
cost, region-bound foundation models) keep the reading honest in both directions — neither
the vendor hype nor a blanket dismissal survives contact with the independent evidence. The
open residuals are named, not hidden, and most are disclosure absences rather than
research questions: the next move is vendor disclosure or independent audit, not more
literature.

## Links

- units: john-deere-see-and-spray, spot-spraying-challengers, retrofit-autonomy-economics, grain-marketing-agentic-ai, grain-harvest-quality-sensing, row-crop-ai-independent-adoption-evidence, geospatial-foundation-models-crop-classification, cnh-raven-autonomous-portfolio, agco-ptx, prairie-grain-ai-cluster
- gaps: G-017 (US row-crop autonomy scale beyond Deere), G-482..G-491 (deep-dive cycle), G-494 (NASS frame-comparison), G-495 (multi-state seed-bank replication), G-496 (GeoFM mitigation generalization)
- contested-claims: C-362 (savings dial, strengthened), C-363 (adoption thinness, NASS caveat), C-364 (autonomy labour/economics), C-365 (See & Spray no longer the only deployed cell), C-366 (GeoFM global-readiness)
- scan: scans/2026-11-row-crop-grain-deep-dive.md; scans/2026-11-row-crop-nass-decline-followup.md; scans/2026-11-row-crop-spot-spray-trials-followup.md; scans/2026-11-row-crop-geospatial-foundation-model-followup.md

## Freshness and sources

- last-verified: 2026-11 (synthesis created 2026-11-19 from the deep-dive cycle + three follow-on passes; introduces no new claims)
- last-regionally-scanned: 2026-11
- sources: carried from the underlying units and scans (each figure retains its verification tier there). Load-bearing primaries: USDA NASS Technology Use report + Methodology and Quality Measures (August 2025); Avent et al. 2024 (Weed Technology 38:e74, DOI 10.1017/wet.2024.70) and Avent et al. 2026 (Weed Technology 40:e9, DOI 10.1017/wet.2025.10056); Houser et al. 2024 (ISU Extension); Kolluru et al. 2026 (arXiv:2610.08810); Prithvi-EO-2.0 technical report (arXiv:2412.02732); Bushel State of the Farm 2026; Simpson Centre/UCalgary prairie survey; Purdue/CropLife 2025 dealer survey.