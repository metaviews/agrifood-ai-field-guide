---
title: "Row-crop follow-on: Prithvi's out-of-region accuracy drop is phenological misalignment, partly fixable — but confidently wrong (G-488 resolved)"
date: 2026-11
---

# Row-crop follow-on: Prithvi's out-of-region accuracy drop

**Status.** Bounded follow-on pass on G-488 (whether Prithvi-EO-2.0's reported accuracy
drop outside the US Corn Belt is a documented training-data-bias limitation, a fixable
calibration issue, or a reason to distrust the foundation-model approach for crop
classification in diverse regions). One named gap, fixed query budget (~4 searches +
primary reads), single writer. Written 2026-11-19. Resolves G-488 (refined); mints
C-366; surfaces G-496; creates `units/geospatial-foundation-models-crop-classification.md`
as the durable home (Prithvi previously lived only in the deep-dive scan §2.6).

**Method.** Primary-source verification: the Prithvi-EO-2.0 technical report
(arXiv 2412.02732 / NASA NTRS 20240015391 / IBM Research) for model specifications and
crop-segmentation results; the three-continent transferability study (arXiv 2610.08810,
read at primary, CC BY 4.0) for the out-of-distribution finding.

---

## 1. The question

G-488 asked whether the deep-dive scan's caution figure — Prithvi-based crop
classification reaches F1 0.84/0.78 (corn/soy) in the US Corn Belt but median overall
accuracy 0.58 across 18 global test regions, with no commercial row-crop deployment found
— reflects a documented limitation, a fixable calibration issue, or grounds to distrust
geospatial foundation models (GeoFMs) for crop classification in diverse regions. The scan
flagged that "the barrier to global row-crop mapping claims is unexplained in deployment
narratives." This pass supplies the explanation and mints contested claim C-366
("geospatial foundation models are ready for production crop identification globally").

## 2. The model (technical report, verified)

**Prithvi-EO-2.0** (IBM + NASA; 42 contributors, 12 institutions): a transformer-based
geospatial foundation model, 300M and 600M parameter variants, pretrained on ~4.2M global
time-series samples from NASA's Harmonized Landsat–Sentinel-2 (HLS) archive at 30 m
resolution, with temporal and geolocation embeddings. Openly released (Hugging Face,
GitHub NASA-IMPACT/Prithvi-EO-2.0, TerraTorch). On GEO-Bench the 600M variant scores
~75.6% average, ~8% over Prithvi-EO-1.0.

For **US multi-temporal crop segmentation** (13 classes including Corn, Soybeans, Winter
Wheat, Alfalfa, Cotton, Sorghum), the 600M variant achieves mean IoU 50.7% and mean
accuracy 68.8%, outperforming a U-Net baseline. The deep-dive scan (§2.2) records the operational caution figure as F1 0.84 (corn) / 0.78
(soy) in the Corn Belt versus median overall accuracy 0.58 across 18 global test regions,
and notes no commercial row-crop deployment of Prithvi was found. Those scan figures are
carried as scan-reported; this pass adds an independent, primary-verified
out-of-distribution evaluation (below) that corroborates the decline and explains its
mechanism.

## 3. The out-of-region finding — the transferability study (primary)

**Kolluru V, Shinde R, Marouane A, Helbling C, Shah D, Drew O, Kolluru S, Gurung I,
Maskey M, Ramachandran R (2026). "Transferability and operational reliability of a Prithvi
crop classification foundation model under phenological and geographic shift across three
continents." arXiv:2610.08810 (submitted 20 Sep 2026), CC BY 4.0.** A NASA-adjacent team
evaluating the released model's out-of-distribution behaviour.

- **The drop is real and documented.** Out-of-distribution evaluation across **37 events
  in 12 countries on three continents**, validated against regional reference products:
  mean overall accuracy (OA) declined **0.65 in the United States → 0.40 in Europe** — a
  ~25-percentage-point drop. This is an independent measurement (mean OA, 37 events / 12
  countries) that corroborates the scan's 18-global-region median OA of 0.58: both show a
  sharp out-of-region decline, and Kolluru et al. add the mechanism and the mitigations.
- **The dominant mechanism is phenological misalignment, not purely spatial training
  bias.** Accuracy collapsed when the observation window misaligned with local crop
  phenology, **while deterministic confidence remained high**. Expected calibration error
  increased for 7 of 8 paired events; **12–51% of each affected scene was confidently
  mislabeled at near-zero precision**. Monte Carlo dropout entropy registered the shift in
  all 8 — "much of the apparent cross-continent decline reflected phenological
  misalignment rather than spatial transfer."
- **Two adjustments recovered accuracy WITHOUT retraining:**
  1. Consolidating 13 classes into 10 (based on the model's dominant confusions) raised
     mean OA by **8.4 percentage points**.
  2. Aligning the observation window to local growing seasons preserved accuracy across a
     **45–90-day plateau** (peaking near 75 days); windows tighter than 30 days fell ~0.11
     below the plateau.
- **Operational conclusion:** "Fine-tuned crop GeoFMs therefore transfer usefully only
  where observation windows match local growing seasons." The paper translates this into
  operational deployment guidance.

## 4. Resolution

- **G-488 — resolved (refined).** The accuracy drop is documented (~25 pp US→Europe). The
  dominant mechanism is **phenological misalignment plus class-scheme granularity**, not
  purely spatial training-data bias. It is **partly fixable without retraining**
  (observation-window alignment + class consolidation). BUT there is a serious
  operational-reliability caveat: the model is **confidently wrong** out-of-distribution
  (deterministic confidence stays high while precision collapses), so naive deployment
  without uncertainty quantification (e.g. MC dropout entropy) is unsafe. The honest
  reading is neither "ready globally out-of-the-box" nor "fundamentally broken outside the
  training region" — it is a **calibration/alignment problem with known mitigations and a
  real confidence-calibration failure mode**.
- **C-366 — minted: "Geospatial foundation models are ready for production crop
  identification globally."** *Asserting*: the GeoFM deployment narrative (global crop
  mapping from a single pretrained model; Prithvi's open release and GEO-Bench leadership).
  *Contesting*: the scan's 18-global-region median OA 0.58 (vs Corn Belt F1 0.84/0.78) and
  Kolluru et al. 2026's mean OA 0.65 (US) → 0.40 (Europe), with the model confidently wrong
  out-of-distribution. *Provisional reading (2026-11-19)*: **false as stated**
  out-of-the-box; but "distrust the approach entirely" is **too strong** — the decline is
  largely phenological misalignment plus class granularity, partly recoverable without
  retraining (window alignment + class consolidation) and detectable via uncertainty
  quantification. A calibration/alignment problem with known mitigations and a real
  confidence-calibration failure mode, not a fundamental flaw. Production use requires
  region-specific observation-window alignment, class-scheme adaptation, and uncertainty
  quantification.
- **G-496 (new)** — generalization and production validation of the GeoFM transferability
  mitigations: the window-alignment / class-consolidation / uncertainty-quantification
  findings are established for Prithvi-EO-2.0 in a retrospective three-continent
  evaluation; whether they generalize to other GeoFMs (Clay, Satlas) and hold in
  operational production pipelines (vs retrospective evaluation) is not established.

## 5. Verification posture

The transferability study was read at primary (arXiv abstract, CC BY 4.0; authors and
submission date confirmed). It is a rigorous out-of-distribution evaluation by a
NASA-adjacent team of the released model — V2-equivalent for its findings, with the honest
note that it is retrospective (not a production-pipeline validation) and Prithvi-specific.
The model specifications are from the technical report (arXiv/NTRS/IBM, V2). The scan's
F1 0.84/0.78 and 18-region median OA 0.58 figures (§2.2) are carried as scan-reported;
Kolluru et al. provide the independent primary-verified out-of-distribution measurement.
Clay and Satlas
are named as related open GeoFMs from the deep-dive scan §2.6; their transferability
characteristics are not established here (G-496).

## 6. Sources

Retrieved 2026-11-19:

- Kolluru V et al. (2026). "Transferability and operational reliability of a Prithvi crop
  classification foundation model under phenological and geographic shift across three
  continents." arXiv:2610.08810 (20 Sep 2026), CC BY 4.0.
  https://arxiv.org/abs/2610.08810 (read at primary)
- Prithvi-EO-2.0 technical report: "Prithvi-EO-2.0: A Versatile Multi-Temporal Foundation
  Model for Earth Observation Applications." arXiv:2412.02732; NASA NTRS 20240015391.
  https://arxiv.org/abs/2412.02732 ; https://ntrs.nasa.gov/citations/20240015391
- IBM Research. "Prithvi-EO: An Open-Access Geospatial Foundation Model…" and "IBM and
  NASA release a new version of Prithvi." https://research.ibm.com/blog/prithvi2-geospatial
- NASA-IMPACT. Prithvi-EO-2.0 repository (TerraTorch fine-tuning; US multi-temporal crop
  segmentation and Europe Sen4Map tasks).
  https://github.com/NASA-IMPACT/Prithvi-EO-2.0
- Fraunhofer (2025/2026). "Fine-Tuning the Prithvi Foundation Model for Crop-Type
  Classification and Crop Health Monitoring" (Telangana smallholder farms; full
  fine-tuning F1 0.79; class-imbalance/overfitting caveats) — independent fine-tuning
  evidence that local adaptation works but needs care.
  https://publica-rest.fraunhofer.de/server/api/core/bitstreams/94562d9d-1445-4bea-a174-dbb92ac4f4cb/content

## 7. New gaps surfaced

- **G-496 (new):** Generalization and production validation of GeoFM transferability mitigations — the observation-window-alignment, class-consolidation, and uncertainty-quantification findings are established for Prithvi-EO-2.0 in a retrospective three-continent evaluation (Kolluru et al. 2026); whether they generalize to other geospatial foundation models (Clay, Satlas) and hold in operational production pipelines is not established.