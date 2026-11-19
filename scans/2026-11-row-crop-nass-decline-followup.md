---
title: "Row-crop follow-on: the NASS precision-ag decline is a survey-methodology change (G-485 resolved)"
date: 2026-11
---

# Row-crop follow-on: the NASS precision-ag decline is a survey-methodology change

**Status.** Bounded follow-on pass on G-485 (the driver of the NASS precision-agriculture
decline, 27%→22%, 2023→2025), surfaced by `scans/2026-11-row-crop-grain-deep-dive.md`.
One named gap, fixed query budget (~5 searches + primary-source reads), single writer.
Written 2026-11-19. Resolves G-485; refines C-363; surfaces G-494. Refreshes
`units/row-crop-ai-independent-adoption-evidence.md` in place.

**Method.** Primary-source verification at NASS: the August 2025 *Methodology and Quality
Measures* publication (fcuoqm25.pdf, read in full), the August 2025 *Technology Use*
report (fmpc0825, full text), the methodology index page (report-form lineage 2013–2025),
the June Area Survey guide, and the 2025 Land Values report. Trade and academic commentary
(Farm Progress, Purdue/CropLife dealer survey, GAO-24-105962, USDA ARS) read as
interpretation, not measurement.

---

## 1. The question

G-485 asked whether the first-ever decline in the NASS precision-agriculture series
(25% in 2021 → 27% in 2023 → 22% in 2025) is **disadoption**, **small-farm exit**, or a
**survey-methodology change**. The deep-dive scan recorded it as unestablished by any
located source. It is the load-bearing independent anchor for the scan's headline finding
("the whole precision-ag stack declining while vendor announcements accelerate") and for
contested claim C-363.

## 2. The finding — a documented survey-vehicle change in the exact year of the decline

**Verified at NASS primary level.** In 2025 NASS moved the technology-use questions to a
new survey vehicle:

- **Report-form lineage** (methodology index page): the 2025 report form is
  `AgLandValTechUse2025.pdf` (the Agricultural Land Values and Technology Use
  questionnaire); 2023, 2021, 2019, 2017, 2015 and 2013 all used "June Area"
  questionnaires. **2025 is the first year of the new vehicle.**
- The methodology doc states it explicitly: *"Survey Methodology for Technology Use Prior
  to 2025: Prior to 2025, technology use data were collected biennially by NASS as part of
  the June Area Survey."*
- **The 2025 vehicle:** the Agricultural Land Values and Technology Use Survey — a
  stratified random sample from the NASS **List Frame** (state × county-group strata;
  county groups sized by 2022 Census county average land value per acre), target
  population all US farms with ≥1 acre and ≥$1,000 in actual or potential sales, reference
  date April 1, mail/phone collection April–July. The June Area Survey is an **area-frame**
  survey (segments designed to account for every acre). Different frame, different
  coverage of small and marginal operations.
- **The precision-ag question wording is unchanged since 2021** ("In the last 12 months,
  did this farm or ranch use precision agriculture practices to manage crops or
  livestock?..."). So this is **not a definition change** — it is a vehicle/frame change.

**The quality-metrics table is the smoking gun** (fcuoqm25.pdf, "Agricultural Land Values
and Technology Use Survey Sample Size and Response Rates"):

| United States | 2023 | 2025 |
|---|---|---|
| Sample size | 30,537 | 28,475 |
| Response rate | 54.0% | 35.8% |

Footnote 1: *"2023 sample size and response rate are from the June Area survey."* The
response rate fell **18.2 percentage points** and the sampling frame changed (area →
list) in the same year as the 5-point precision-ag decline.

**NASS does not flag the trend break.** The methodology doc documents the prior vehicle
and the new one, and the quality table footnotes the 2023 source, but neither the report
highlights nor the methodology doc carries an explicit "2023 and 2025 are not comparable"
warning. The report presents 27%→22% as a trend. The comparability problem is documented
in the methodology but not surfaced as a caution to readers of the headline figure.

## 3. Small-farm exit cannot explain the decline (derived)

The report's own farm-count table (from *Farms, Land in Farms*, February 2025): US farms
1,892,850 (2022) → 1,887,150 (2023) → 1,872,300 (2024) — a ~1.1% decline over two years.
The states with the largest precision-ag drops had minimal farm-count change:

| State | Farms 2022→2024 | Precision-ag 2023→2025 |
|---|---|---|
| Iowa | 86,900 → 86,700 | 54% → 42% |
| Nebraska | 44,500 → 44,300 | 55% → 41% |
| Kansas | 55,700 → 55,500 | 49% → 34% |
| Illinois | 71,100 → 70,000 | 51% → 42% |

Two analytical points (derived):

- Farm exit on this scale (~1% nationally, near-zero in the high-drop Corn Belt states)
  cannot mechanically produce a 5-point national adoption-share decline, nor 12–14-point
  state drops.
- **Direction of the composition effect:** small farms are low adopters (USDA ARS;
  McFadden & Lim 2024: 68% of large farms vs 13% of small farms use precision tools). If
  low-adopting small farms exit, the adoption share among survivors should **rise**, not
  fall. Consolidation therefore works *against* the observed decline, not for it.

Small-farm exit is ruled out as the primary driver. The methodology change is the
dominant confound.

## 4. What survives, and what does not

- The **state pattern** (Corn Belt drops; increases in Florida 12→17, Georgia 13→18,
  Minnesota 32→36, Oklahoma 18→22, South Carolina 14→17, Texas 13→14, Virginia 11→14) is
  consistent with a frame/vehicle change that differentially covers large row-crop
  operations, *and* with real demand-side softness. The two are not separable from the
  published data.
- **Independent demand-side evidence stands**, unaffected by the NASS vehicle change:
  the Purdue/CropLife dealer survey (farm income the top barrier at 55%; dealer
  precision-service offerings declining; "as technologies reach market maturity, the
  gains in adoption would level off"); GAO-24-105962's seven systemic barriers; Bushel's
  14% farm-AI use and office-not-field inversion; the Simpson Centre's 16% high adopters
  and 88–89% data distrust. These support genuine adoption thinness and income pressure —
  but they do not validate the NASS national decline as a clean disadoption signal.
- The deep-dive scan's headline ("the whole precision-ag stack declining while vendor
  announcements accelerate") must be **qualified**: the federal aggregate fell, but the
  fall is confounded by a measurement change and is not a clean disadoption trend.

## 5. Resolution

- **G-485 — resolved (refined).** The driver is a documented survey-methodology change
  (vehicle June Area → Agricultural Land Values and Technology Use; area frame → list
  frame; response rate 54.0% → 35.8%), coincident with the decline; the question wording
  is unchanged. Small-farm exit is ruled out (farm counts ~stable; the composition effect
  would raise the share). The decline is not cleanly interpretable as disadoption.
  Residual: separating measurement artifact from any real disadoption requires a
  frame-comparison study NASS has not published → G-494.
- **C-363 — refined.** The NASS decline is weakened as contesting evidence (it is partly
  artifactual). The broader "farm-level AI adoption is thin" reading stands on the
  independent surveys (Bushel, Simpson, Purdue), which are unaffected by the NASS vehicle
  change. The contested claim's provisional reading should cite those surveys as the
  load-bearing contesting evidence, with the NASS decline carrying the methodology caveat.
- **G-494 (new)** — NASS technology-use frame-comparison / comparability study: no
  published analysis separates the 2025 vehicle/frame/response-rate change from real
  adoption change in the precision-ag series; until one exists, the 2023→2025 trend (and
  any future cross-vehicle trend) should be cited with the methodology caveat.

## 6. Verification posture

Load-bearing claims verified at NASS primary level (methodology doc read in full; report
full text; methodology index report-form lineage; June Area guide). The farm-count
composition argument is **derived** (labelled). Trade/academic commentary is
interpretation (V1). The methodology-change claim is V2-equivalent (primary federal
documentation). The honest residual is that NASS has not published a comparability
analysis, so the artifact-vs-disadoption split is not quantified.

## 7. Sources

Retrieved 2026-11-19:

- USDA NASS (2025). *Technology Use — Methodology and Quality Measures* (August 29, 2025).
  https://www.nass.usda.gov/sites/default/files/Publications/Methodology_and_Data_Quality/Computer_Usage/08_2025/fcuoqm25.pdf (read in full)
- USDA NASS (2025). *Technology Use (Farm Computer Usage and Ownership)*, August 2025.
  https://esmis.nal.usda.gov/sites/default/release-files/h128nd689/bv73dz25x/n8711q81s/fmpc0825.pdf (full text via fmpc0825.txt)
- USDA NASS. *Technology Use — Methodology and Quality Measures* index (report-form
  lineage 2013–2025). https://www.nass.usda.gov/publications/methodology-and-data-quality/computer-usage
- USDA NASS. *Guide to NASS Surveys — June Area*.
  https://sb.nass.usda.gov/Surveys/Guide_to_NASS_Surveys/June_Area/index.php
- USDA NASS (2025). *Land Values* 2025 summary (August 2025).
  https://www.nass.usda.gov/Publications/Todays_Reports/reports/land0825.pdf
- USDA NASS (2025). *Agricultural Land Values and Technology Use* report form.
  https://www.nass.usda.gov/sites/default/files/Publications/Methodology_and_Data_Quality/Computer_Usage/08_2025/AgLandValTechUse2025.pdf
- Farm Progress (2025). "Southern farms' internet use grows, precision ag falls."
  https://www.farmprogress.com/technology/more-southern-farms-using-internet-for-marketing-buying-inputs
- Purdue University / CropLife (2025). *25th annual Precision Ag Dealership Survey*
  (Erickson & Lowenberg-DeBoer). https://ag.purdue.edu/idaas/_docs/croplife-purdue-precision-dealer-full-report-2025.pdf
- US GAO (2024). *Precision Agriculture: Benefits and Challenges for Technology Adoption
  and Use*. GAO-24-105962. https://www.gao.gov/products/gao-24-105962
- USDA ARS. "Benefits and Evolution of Precision Agriculture."
  https://www.ars.usda.gov/oc/utm/benefits-and-evolution-of-precision-agriculture/

## 8. New gaps surfaced

- **G-494 (new):** NASS technology-use frame-comparison / comparability study — no published analysis separates the 2025 survey-vehicle/frame/response-rate change (June Area → Agricultural Land Values and Technology Use; response rate 54.0% → 35.8%) from real adoption change in the precision-agriculture series; the 2023→2025 decline (27%→22%) is confounded and should be cited with a methodology caveat until such a study exists.