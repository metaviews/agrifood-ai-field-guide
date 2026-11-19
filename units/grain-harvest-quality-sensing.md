---
id: grain-harvest-quality-sensing
title: "Grain harvest-quality sensing — HarvestLab 3000, CropScanAg, Ground Truth Ag, and the quiet OEM-standard AI cell"
sector-position: on-farm-production-open-field (harvest layer)
ai-technique-class: sensors-and-iot-ml, predictive-ml
purpose: output-prediction, market-access
claim-type: example
unit-kind: deployment
activity-status: deployed (OEM-standard on MY2025+ Deere combines; integrated on CNH monitors)
critical-voice: none located (a coverage-gap finding — see critical context)
capital-intensity: industrial
language-literacy-profile: standard-smartphone
policy-instrument: (none)
region: NA-US, NA-Canada, EU (Deere/CNH global platforms)
actor: John Deere (HarvestLab 3000); CropScanAg; Ground Truth Ag
actor-type: vendor
data-governance: proprietary
data-rights-framework: vendor-owned
last-verified: 2026-11
last-regionally-scanned: 2026-11
---

## Content

While the corpus's row-crop attention went to autonomy and spraying, an AI-adjacent cell quietly reached OEM-standard deployment: on-combine grain-quality sensing. This unit records it — partly because it is real deployment, partly because its quietness is itself a finding about where agricultural AI actually lands.

**John Deere HarvestLab 3000 Grain Sensing.** Near-infrared sensing on the combine's clean-grain elevator measuring moisture, protein, starch and oil instantaneously during harvest; standard equipment on Model Year 2025 and later X9, S7 and T6 series combines (Deere, September 2025 announcement of automation and productivity enhancements). The protein and oil maps produced at harvest are the raw material for the grain-marketing layer (`units/grain-marketing-agentic-ai.md`): a protein map is a marketing document.

**CropScanAg 4000VT.** An aftermarket NIR in-line analyser (measurement every ~3 seconds, GPS-tagged) integrated into Case IH and New Holland dual-monitor workflows; claimed 0.2–0.3% accuracy on protein and moisture. The CNH integration matters structurally: it shows the aftermarket-sensor-to-OEM-monitor path running in parallel with Deere's factory-integrated route — the same retrofit-vs-integrated split the corpus documents in autonomy (`units/retrofit-autonomy-economics.md`) and spraying (`units/spot-spraying-challengers.md`).

**Ground Truth Ag (Canada).** Benchtop ML-based grain-grading units shipping from a Canadian company — the lab-side counterpart to on-combine sensing, and a natural relative of `units/canadian-grain-grading-ai.md` (which documents GeoAI wheat grading and the B2B grain sustainability platform challenging the 100-year-old official grading system).

**The Australian context.** HarvestLab 3000's original commercial traction was in the Australian dairy industry (paddock-to-cow fodder measurement); the grain-sensing application is the row-crop extension of a proven on-farm NIR lineage.

## What this unit is doing in the taxonomy

Fills the harvest-layer cell of the row-crop taxonomy and complicates the corpus's own finding: the claim that Deere See & Spray is "the only row-crop AI at deployment scale" (C-365) understates the deployed base — harvest-quality sensing is factory-standard on the flagship combine line of the world's largest ag equipment maker, with essentially no public attention and no published adoption figures (G-486). The cell also connects the field layer to the market layer: quality sensing at harvest is the data bridge between agronomy and grain marketing.

## Why it matters for talks

The quietness is the story: an AI capability became standard equipment on flagship combines with almost no press, no adoption controversy, and no farmer-side resistance discourse — a contrast to autonomy's hype-to-deployment gap that illustrates what unremarkable AI deployment looks like in agriculture. The protein-map-as-marketing-document point makes the field-to-market data chain concrete.

## Critical context

- No published scale figures: Deere does not disclose HarvestLab attachment rates, acreage covered, or unit counts (G-486). "Standard on MY2025+" is a platform decision, not an adoption measurement — a buyer can still order without it in some configurations; the corpus records the OEM-standard status, not penetration.
- Accuracy claims (CropScanAg 0.2–0.3% protein/moisture) are vendor-reported; NIR measurement at harmonious reference-lab agreement is an ongoing calibration question across grain types and conditions.
- The corpus found no independent or farmer-side critical voice on this cell at all — not because none exists, but because the cell has been under-covered everywhere. This absence is a coverage finding (METHOD #13), not an assessment that no issues exist; data-flow terms for quality maps (who owns the protein map, who can buy it) follow the vendor-owned default and are undocumented.
- GrainContracts linkage: quality maps feeding marketing AI is asserted by the reporting; no documented pipeline from HarvestLab data into FBN/GrainFox-type agents was found.

## Links

- gaps: G-486 (harvest-quality sensing deployment scale unpublished), G-173 (US grain/seed processing AI — the post-field continuation of this cell), G-487 (marketing-agent layer)
- contested-claims: C-365 (the "only See & Spray" framing this unit corrects), C-017 (platform benefit question, applied to quality data)
- related-units: canadian-grain-grading-ai.md, grain-marketing-agentic-ai.md, john-deere-see-and-spray.md, retrofit-autonomy-economics.md, china-grain-storage-ai-jiyuan.md (the post-farm-gate quality layer in China)
- scan: scans/2026-11-row-crop-grain-deep-dive.md (§2.3 item 14)
- sovereignty-flags: on-combine quality data flows into the OEM platform (Operations Center / CNH monitors) by default — same equipment-locked pattern as See & Spray, applied to a data type (protein, oil) with direct market value

## Freshness

- last-verified: 2026-11
- last-regionally-scanned: 2026-11
- sources:
  - John Deere (2025). *Automation and productivity enhancements for combines* (HarvestLab 3000 Grain Sensing standard on MY2025+ X9/S7/T6). September 2025. https://www.deere.com/en-us/john-deere-news/automation-and-productivity-enhancements-combines
  - GrainsWest (2025). *Data upgrade* (grain-quality sensing overview incl. Ground Truth Ag). September 2025. https://grainswest.com/2025/09/data-upgrade/
  - CropScanAg. *4000VT in-line NIR analyser* product documentation. https://www.cropscanag.com/ (vendor)
