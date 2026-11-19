---
id: john-deere-see-and-spray
title: John Deere See & Spray — computer-vision-driven precision spraying in US row crops
sector-position: on-farm-production-open-field
ai-technique-class: computer-vision
purpose: input-reduction
claim-type: example
unit-kind: deployment
activity-status: deployed
critical-voice: right-to-repair
capital-intensity: industrial
language-literacy-profile: standard-smartphone
policy-instrument: (none)
region: NA-US
actor: John Deere (Deere & Company)
actor-type: vendor
data-governance: proprietary
data-rights-framework: vendor-owned
maturity-scale: S3
maturity-verification: V1
maturity-longevity: L2
maturity-translation: T3
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

John Deere's *See & Spray* technology uses boom-mounted cameras and onboard processors to scan over 2,500 square feet per second at up to 15 mph, identifying weeds and triggering individual spray nozzles via Deere's ExactApply system. Herbicide is applied only where needed.

**Vendor-reported figures (John Deere / Precision Farming Dealer, November 2025):**
- Used across more than 5 million acres during the 2025 growing season (larger than the state of New Jersey).
- Average ~50% reduction in non-residual herbicide use.
- ~31 million gallons of herbicide mix saved.
- 2 bushel/acre average yield bump in seven-state trials (Mississippi, Nebraska, Arkansas, Indiana, North Carolina, Virginia, Tennessee), John Deere-commissioned research.
- Upper range: 4.8 bu/acre yield bump in some trials.

**Commercial design.** In 2025 John Deere introduced the *Application Savings Guarantee* — farmers and custom applicators pay for See & Spray via a per-acre fee only when the technology delivers measurable savings. Cost model: $1/fallow acre or $5/in-crop acre. New for 2026: Unlimited Annual License for high-use operations. The guarantee is structurally notable — vendor cost is aligned with measured customer benefit.

**Deployment model.** Equipment-integrated (factory installation or Precision Upgrade kit on MY18 and newer R-series and 400/600 series sprayers, plus Hagie sprayers). Locked to Deere equipment — does not work on competitor sprayers. See G-017.

**Independent verification (November 2026).** A University of Arkansas three-year field trial (2022–2025, soybeans, prototype single-tank machine) independently corroborates the headline figure: 43–59% herbicide reduction vs broadcast applications — confirming Deere's ~50% in direction and magnitude under replicated university conditions (Arkansas Agricultural Experiment Station, read at primary source). But the trial's central finding is management-sensitivity: the savings dial and the weed-control dial are the same dial. At low sensitivity settings the trial recorded a **280% per year increase in Palmer amaranth populations** — escaped weeds set seed, building the soil seed bank and accelerating resistance; weed scientist Jason Norsworthy: low sensitivity buys short-term savings that erode over years. Arkansas-scale modelling puts grower savings at 13–80% depending on settings, with improper use potentially costing Arkansas producers upwards of $60M/yr in additional applications. Iowa State field-scale demonstration data (secondary-sourced; locate the ISU original before citing) shows savings ranging 43.9–90.6% across five soybean fields, driven almost entirely by initial weed pressure. The ~50% figure is real but is an average over a management-sensitive distribution, not a machine property. See C-362 and G-484.

**Aerial extension (November 2026).** Sentera — acquired by Deere in May 2025 — made its first joint Farm Progress Show appearance with Deere (September 2026): FieldAgent drone imagery and SMARTSCRIPT Weeds now generate targeted herbicide prescriptions deliverable to individual-nozzle sprayers through the John Deere Operations Center; PixelScouts drone scouting hardware was demonstrated at fall 2026 field events. Aerial imagery is being absorbed into the same Operations Center workflow that See & Spray feeds — extending the equipment-locked data loop from ground to air (`units/spot-spraying-challengers.md` covers the non-Deere alternatives).

## What this unit is doing in the taxonomy

Anchors the *computer vision × input reduction × on-farm open field* cell with the most concretely quantified deployed example. The 5 million acres figure is the kind of headline number talks lean on; the unit carries the source attribution and the verification discipline.

## Why it matters for talks

- The most concrete deployed computer-vision-driven input-reduction example in row crops at meaningful scale.
- The Application Savings Guarantee is rare in agricultural AI — vendor cost aligned with measured benefit. Worth understanding why Deere adopted it.
- Locked to Deere equipment — gives a concrete anchor for the *right-to-repair* and *vendor lock-in* critical conversations.
- Compare with Bayer Climate FieldView (data layer, vendor-neutral interface) and AGCO PTx (brand-agnostic retrofit) to surface the three competing market structures.

## Critical context

- The 50% herbicide reduction figure is from John Deere-commissioned research. The seven-state trials are described as third-party researchers and universities but the commissioning relationship matters. **Independently corroborated in direction and magnitude** by the University of Arkansas three-year trial (43–59%), with the management-sensitivity caveat above — the 280%/yr Palmer amaranth seedbank consequence at low sensitivity is the critical context the vendor figure omits (G-484, C-362).
- The yield bump figure (2 bu/acre average) is real but context-dependent — depends on weed pressure, herbicide resistance profile, baseline management.
- See & Spray works only on Deere sprayers. This is structurally a *lock-in* strategy. Useful to name in the same breath as the FTC-Deere settlement — the technology and the right-to-repair conversation are not separable.
- The Application Savings Guarantee is a smart commercial response to farmer hesitation about AI adoption cost. Whether it actually delivers as advertised in bad years is a question worth tracking.

## Links

- gaps: G-017 (autonomous machinery beyond Deere), G-020 (independent verification of vendor-reported input figures), G-484 (multi-year multi-state outcomes for low-sensitivity spot spraying), G-483 (independent verification of spot-spraying challenger figures)
- contested-claims: C-016 (precision spraying reduces herbicide use by ~50% — vendor-reported, now independently corroborated with the management-sensitivity caveat), C-017 (digital platforms benefit farmers independent of vendor interest), C-362 (2026-11 re-assessment with the Arkansas and ISU evidence), C-365 (the "only See & Spray" framing this unit's harvest-sensing sister unit corrects)
- related-units: bayer-climate-fieldview.md, agco-ptx.md, canadian-retail-ai-pattern.md (right-to-repair framing), taranis-aerial-imagery.md, spot-spraying-challengers.md, retrofit-autonomy-economics.md, row-crop-ai-independent-adoption-evidence.md, grain-harvest-quality-sensing.md
- sovereignty-flags: implicit — equipment-locked data flow to John Deere; farmer data portability / right-to-repair questions explicit in FTC-Deere settlement context

## Freshness

- last-verified: 2026-11
- last-regionally-scanned: 2026-11
- sources:
  - Precision Farming Dealer (2025). *Farmers Use John Deere See & Spray Across 5 Million Acres in 2025*. November 11, 2025. https://www.precisionfarmingdealer.com/articles/6834-farmers-use-john-deere-see-and-spray-across-5-million-acres-in-2025
  - John Deere. *See & Spray*. https://www.deere.com/en/sprayers/see-spray/
  - US FTC (2026). *FTC, States Secure Settlement with Deere & Company*. (Right-to-repair reference.)
  - University of Arkansas System Division of Agriculture / Arkansas Agricultural Experiment Station (2025). *Precision Agriculture Research Measures Effectiveness of See & Spray Technology* (three-year field trial, 43–59% reduction, 280%/yr Palmer amaranth increase at low sensitivity). March 10, 2025. https://aaes.uada.edu/news/see-and-spray-research/
  - Precision Farming Dealer (2026). *Sentera showcases new drone tech at John Deere Farm Progress Show tent*. September 12, 2026. https://www.precisionfarmingdealer.com/articles/7278-video-sentera-showcases-new-drone-tech-at-john-deere-farm-progress-show-tent