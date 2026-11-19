---
id: geospatial-foundation-models-crop-classification
title: Geospatial foundation models for crop classification — Prithvi-EO-2.0 and the transferability limit
sector-position: on-farm-production-open-field
ai-technique-class: computer-vision
purpose: monitoring
claim-type: deployment
unit-kind: deployment
activity-status: deployed
critical-voice: algorithmic-accountability
capital-intensity: low
language-literacy-profile: technical-ml
policy-instrument: (none)
region: NA-US (with global transferability evaluation)
actor: IBM + NASA (Prithvi-EO-2.0 consortium)
actor-type: research-consortium
data-governance: open
data-rights-framework: open-licence
maturity-scale: S2
maturity-verification: V2
maturity-longevity: L2
maturity-translation: T3
last-verified: 2026-11
last-regionally-scanned: 2026-11
---

## Content

Geospatial foundation models (GeoFMs) are transformer models pretrained on large satellite
archives and fine-tuned for downstream tasks such as crop-type classification. The most
widely adopted open example is **Prithvi-EO-2.0**, developed by IBM and NASA (42
contributors across 12 institutions) and openly released via Hugging Face, GitHub
(NASA-IMPACT/Prithvi-EO-2.0) and the TerraTorch fine-tuning library.

**Model specifications (technical report, arXiv 2412.02732 / NASA NTRS 20240015391):**
- 300M and 600M parameter variants; pretrained on ~4.2M global time-series samples from
  NASA's Harmonized Landsat–Sentinel-2 (HLS) archive at 30 m resolution, with temporal and
  geolocation embeddings.
- On the GEO-Bench benchmark the 600M variant averages ~75.6%, ~8% over Prithvi-EO-1.0,
  and outperforms six other geospatial foundation models across domains and resolutions.
- For **US multi-temporal crop segmentation** (13 classes including Corn, Soybeans, Winter
  Wheat, Alfalfa, Cotton, Sorghum), the 600M variant reaches mean IoU 50.7% and mean
  accuracy 68.8%, beating a U-Net baseline. The crop fine-tuning/evaluation dataset is US
  row-crop-centric (Corn Belt concentration).

The deep-dive scan (§2.2) records the operational caution figure as Corn Belt F1 0.84
(corn) / 0.78 (soy) versus median overall accuracy 0.58 across 18 global test regions, and
found no commercial row-crop deployment of Prithvi. The promise is real — a single
pretrained model reduces the labelled data and compute needed for crop mapping, and the
open release lowers the barrier to entry — but the limit is transferability.

## The transferability limit (independent evaluation, primary source)

**Kolluru et al. (2026), "Transferability and operational reliability of a Prithvi crop
classification foundation model under phenological and geographic shift across three
continents," arXiv:2610.08810 (20 Sep 2026), CC BY 4.0** — a NASA-adjacent team evaluating
the released model out-of-distribution across **37 events in 12 countries on three
continents**, validated against regional reference products:

- **Accuracy drops sharply out-of-region:** mean overall accuracy fell **0.65 (United
  States) → 0.40 (Europe)** — a ~25-percentage-point decline. This independently corroborates the
  row-crop scan's caution figure (Corn Belt F1 0.84/0.78 vs 18-global-region median OA
  0.58; G-488) with a primary-verified out-of-distribution measurement.
- **The dominant mechanism is phenological misalignment, not purely spatial training
  bias.** Accuracy collapsed when the observation window did not match local crop
  phenology, **while the model's deterministic confidence stayed high**. Expected
  calibration error rose for 7 of 8 paired events; **12–51% of each affected scene was
  confidently mislabeled at near-zero precision**. Monte Carlo dropout entropy detected the
  shift in all 8 — "much of the apparent cross-continent decline reflected phenological
  misalignment rather than spatial transfer."
- **Two adjustments recovered accuracy without retraining:** consolidating 13 classes into
  10 (by dominant confusions) raised mean accuracy **8.4 percentage points**; aligning the
  observation window to local growing seasons preserved accuracy across a **45–90-day
  plateau** (peak ~75 days), while windows tighter than 30 days fell ~0.11 below it.
- **Operational conclusion:** "Fine-tuned crop GeoFMs therefore transfer usefully only
  where observation windows match local growing seasons."

**Independent fine-tuning evidence** (Fraunhofer, Telangana smallholder farms): full
fine-tuning of Prithvi-EO-2.0 reached crop-type F1 0.79 and beat frozen-encoder and
from-scratch baselines, especially in low-data regimes — but class imbalance (Paddy and
Cotton >60% of samples; minority crops <5%) introduced overfitting risk. Local adaptation
works, but needs careful handling.

## Critical context

- **Not ready for out-of-the-box global production crop identification.** The contested
  claim C-366 ("geospatial foundation models are ready for production crop identification
  globally") is false as stated: out-of-distribution accuracy drops ~25 points and the
  model is **confidently wrong**. But "distrust the approach entirely" is too strong — the
  decline is largely recoverable via observation-window alignment and class consolidation,
  and detectable via uncertainty quantification. The honest reading is a
  **calibration/alignment problem with known mitigations and a real confidence-calibration
  failure mode**, not a fundamental flaw.
- **The operational risk is silent failure.** Because deterministic confidence stays high
  while precision collapses, a naive production pipeline would trust wrong labels.
  Reliable deployment requires uncertainty quantification (e.g. MC dropout entropy),
  region-specific observation-window alignment, and class-scheme adaptation — not the
  released model applied globally as-is.
- **Scope of the evidence.** The transferability findings are Prithvi-EO-2.0-specific and
  retrospective (not a production-pipeline validation). Whether the mitigations generalize
  to other GeoFMs (Clay, Satlas — named in the row-crop scan §2.6) and hold in operational
  pipelines is not established (G-496). The scan's F1 0.84/0.78 and 18-region median OA 0.58
  figures (§2.2) are carried as scan-reported; Kolluru et al. provide the independent
  primary measurement.
- **Open release is a genuine public good.** Unlike proprietary precision-ag stacks,
  Prithvi's model, weights, fine-tuning workflows and training data are openly released —
  the transferability limit is a scientific/engineering caveat on an open tool, not a
  vendor lock-in concern.

## Why it matters for talks

This is the cleanest available puncture of the "geospatial AI will map every crop on Earth"
narrative: a rigorous three-continent evaluation of the flagship open GeoFM shows it is
confidently wrong outside its training phenology, and that the fix is alignment and
uncertainty quantification, not more scale. It pairs with the row-crop adoption-evidence
unit (the NASS decline is a methodology artifact; the independent surveys carry the
adoption-thinness finding) to keep the AI-in-agriculture story honest in both directions —
neither hype nor dismissal.

## Links

- gaps: G-488 (Prithvi out-of-region accuracy drop — RESOLVED 2026-11-19: phenological misalignment, partly fixable, confidently-wrong caveat; see follow-on scan), G-496 (generalization + production validation of GeoFM transferability mitigations — new)
- contested-claims: C-366 (minted 2026-11-19: "geospatial foundation models are ready for production crop identification globally" — false out-of-the-box; a calibration/alignment problem with known mitigations, not a fundamental flaw)
- scan: scans/2026-11-row-crop-grain-deep-dive.md (§2.6 geospatial foundation models); scans/2026-11-row-crop-geospatial-foundation-model-followup.md (G-488 resolution, G-496)
- related-units: row-crop-ai-independent-adoption-evidence (the adoption-thinness companion), john-deere-see-and-spray (the proprietary precision-ag counterpart)

## Freshness and sources

- last-verified: 2026-11 (created 2026-11-19 from the G-488 follow-on pass; Prithvi previously lived only in the deep-dive scan §2.6)
- last-regionally-scanned: 2026-11
- sources:
  - Kolluru V, Shinde R, Marouane A, Helbling C, Shah D, Drew O, Kolluru S, Gurung I, Maskey M, Ramachandran R (2026). *Transferability and operational reliability of a Prithvi crop classification foundation model under phenological and geographic shift across three continents*. arXiv:2610.08810 (20 Sep 2026), CC BY 4.0. https://arxiv.org/abs/2610.08810
  - Prithvi-EO-2.0 technical report (2024). *Prithvi-EO-2.0: A Versatile Multi-Temporal Foundation Model for Earth Observation Applications*. arXiv:2412.02732; NASA NTRS 20240015391. https://arxiv.org/abs/2412.02732 ; https://ntrs.nasa.gov/citations/20240015391
  - IBM Research (2024). *IBM and NASA release a new version of Prithvi*. https://research.ibm.com/blog/prithvi2-geospatial
  - NASA-IMPACT. *Prithvi-EO-2.0* repository (TerraTorch fine-tuning; US crop segmentation + Europe Sen4Map tasks). https://github.com/NASA-IMPACT/Prithvi-EO-2.0
  - Fraunhofer (2025/2026). *Fine-Tuning the Prithvi Foundation Model for Crop-Type Classification and Crop Health Monitoring* (Telangana smallholder farms; full fine-tuning F1 0.79). https://publica-rest.fraunhofer.de/server/api/core/bitstreams/94562d9d-1445-4bea-a174-dbb92ac4f4cb/content