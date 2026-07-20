---
id: canadian-dairy-ai
title: Canadian dairy AI — production, processing, and logistics across the full dairy value chain
sector-position: animal-production (dairy); processing; distribution-and-retail (logistics)
ai-technique-class: predictive-ml, computer-vision, sensors-and-iot-ml, generative-ai-and-llms
purpose: animal-health, processing-efficiency, supply-chain-efficiency, fertility-management
claim-type: example
activity-status: deployed
critical-voice: (none directly — vendor / institutional framing)
capital-intensity: industrial
language-literacy-profile: (not applicable)
policy-instrument: ISED Strategic Innovation Fund + AAFC Clean Technology Programme (via CAAIN)
region: NA-Canada (Ontario, Nova Scotia, Alberta; with cross-cutting Quebec via SoraLINK)
actor: CATTLEytics (Hamilton ON), SomaDetect (Tillsonburg ON), Milk Moovement (Halifax NS), Lakeland College (Vermilion AB), SoraLINK × Saputo/Olymel/Agropur (Québec — existing Quebec cycle scan)
actor-type: vendor (CATTLEytics, SomaDetect, Milk Moovement); academic (Lakeland College)
data-governance: mixed (CATTLEytics equipment-agnostic ingestion; SomaDetect on-farm sensors; Milk Moovement processor-mediated; SoraLINK vendor-mediated)
data-rights-framework: vendor-owned (project-by-project)
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

The Canadian dairy value chain has **substantive AI deployment across production, processing, and logistics** as of mid-2026, anchored by four CAAIN-funded projects plus the existing SoraLINK × Saputo/Olymel/Agropur processing-side deployment (existing Quebec cycle scan).

**CAAIN-funded dairy projects (verified):**

| Project | Lead | Location | CAAIN $ | Total $ | Status |
|---|---|---|---|---|---|
| Creation of a Dairy Management, Modelling, and Collaborative Framework System | CATTLEytics Inc. | Hamilton, ON | $800,000 | $2,439,824 | Active |
| AI-Driven Dairy Cattle Health & Milk Assessment (SomaElevate) | SomaDetect | Tillsonburg, ON | $145,033 | $427,992 | Active |
| Moove: AI-Powered Scheduling Automation for Dairy Logistics Optimization | Milk Moovement | Halifax, NS | $301,644 | $1,164,375 | Active |
| Precision Ranching for Improved Reproductive and Grazing Efficiencies | Lakeland College | Vermilion, AB (spans AB + MB + BC ranches) | $143,237 | $1,295,508 | Completed Dec 2024 |

**Plus SoraLINK × Saputo/Olymel/Agropur** (existing Quebec cycle scan) — predictive maintenance AI deployed across Quebec's largest food processors. Saputo (dairy, international operations in US, Australia, Argentina, UK); Olymel (largest Canadian pork and poultry processor); Agropur (largest Canadian dairy cooperative).

**Total verified Canadian dairy AI deployment:** $5.33M+ in CAAIN-funded project value across 4 projects, plus SoraLINK's processing-side deployment. **Spans 5 provinces (ON, NS, AB, MB, BC, QC).**

### CATTLEytics (Hamilton, ON)

CATTLEytics Inc. is a 2014 spin-off of Feedlot Health Management Services (FHMS), which was acquired by TELUS Agriculture. CEO Dr. Shari Van de Pol (DVM, McMaster Computer Engineering + Fine Arts minor, IBM, Ontario Veterinary College). The system is a fully integrated dairy operation dashboard with mastitis/metritis treatment recommendations, photographs, dosage details, dosing bridge gun (designed by Van de Pol's brother), staff scheduling, protocol compliance tracking.

**Distinctive feature: equipment-agnostic ingestion.** CATTLEytics can ingest and derive insights from data collected by virtually any other dairy-sector technology. Distinct from vendor-locked systems.

**The AI chat interface** allows farmers to access critical business insights through a friendly conversation with an AI that bases its answers on their own farm data and trusted publications. CATTLEytics has not sought outside investors. John Clark (co-developer) died Sept 2024.

### SomaDetect (Tillsonburg, ON)

Light-scattering + ML for cow-specific real-time milk analysis. Targets TRL 8+. Detects subclinical ketosis + Energy-Corrected Milk (ECM). Partner: Walker Dairy. Competing systems (robotic-farm in-line analyzers) consume costly reagents. **SomaDetect's solution is "scalable, AI-powered" and "agnostic to milking system"** — the same equipment-agnostic framing as CATTLEytics. Phase 3 of SomaElevate quantifies ROI using actual results from a large commercial dairy in Canada.

### Milk Moovement (Halifax, NS)

Cloud-based dairy supply-chain software company. $20M USD Series A round (2022) led by VMG Catalyst. AI tool "Moove" uses ML and optimization algorithms to autonomously generate optimal routing schedules that match real-time milk supply with processor demand. Targets processor-throughput improvement and hauling-cost reduction for dairy cooperatives. **The price processors pay for dairy products depends not only on volume but on components** (protein, butterfat, bacteria). Currently the standard practice is copying supply amounts from the previous week — Moove replaces that.

### Lakeland College Precision Ranching (Vermilion, AB — spans AB + MB + BC)

CAAIN $143K / total $1.30M. Spans Alberta, Manitoba, and British Columbia ranches. Uses rumen bolus (temperature + movement → estrus prediction), GPS ear tags (BC forest grazing — drone monitoring of "harsher terrain"), ultrasound for heifer reproductive-tract maturity, and LlamaZOO (BC-based software company) for digital twin dashboard.

**Industry partners pay for the technology being tested on their animals but recover 40% of costs through CAAIN funding.** Lakeland's Agricultural Technology degree programme is the workforce pipeline. Dr. Susan Markus (livestock research scientist): "We need to find a way to determine early on which heifers must be removed from the herd because they are unlikely to conceive."

### SoraLINK × Saputo/Olymel/Agropur (Québec — existing unit)

Predictive maintenance AI trained on food and bev production cycles, handles seasonal variability, deployed across Saputo, Olymel, Agropur. Claim: $250,000 saved in a single intervention. See `units/soralink-export-food-processing.md` (existing Quebec cycle scan).

## What this unit is doing in the taxonomy

This is the **animal production — dairy** cell unit, with substantive cross-cell coverage (production + processing + logistics). Anchors:
- The CAAIN portfolio unit (`units/caain-portfolio-canada.md`) — CATTLEytics, SomaDetect, Milk Moovement, Lakeland Precision Ranching are CAAIN projects.
- The existing SoraLINK unit (`units/soralink-export-food-processing.md`).
- The dairy AI pattern as the **first value chain where CAAIN projects + existing units cover the full chain** — production (CATTLEytics, SomaDetect, Lakeland), processing (SoraLINK), logistics (Milk Moovement).

## Why it matters for talks

1. **Canadian dairy AI covers the full chain** — production, processing, logistics. The only Canadian value chain with this depth of CAAIN project coverage.
2. **The equipment-agnostic framing** (CATTLEytics + SomaDetect) is structurally distinct from vendor-locked systems. Worth carrying into talks.
3. **The Milk Moovement $20M USD Series A (2022) + CAAIN funding (2026)** is the funding-stack pattern: venture capital + federal validation funding. Worth carrying.
4. **The Lakeland Precision Ranching project spanning AB + MB + BC** is the multi-province pattern. The CAAIN funding model enables this through the 40% cost recovery for industry partners.
5. **The processing cell of the dairy value chain (SoraLINK)** is the export-oriented angle — Saputo operates in 5+ countries.

## Critical context

- **CAAIN's full dairy portfolio is not fully surfaced on public project pages.** The 4 projects above are visible; additional dairy projects may exist.
- **CATTLEytics and SomaDetect both emphasize "equipment-agnostic" framing.** Whether this is genuinely interoperable or vendor-specific with broader ingestion is not independently verified.
- **Milk Moovement's "Moove" is venture-funded AND CAAIN-funded.** The funding-stack pattern (VC + federal validation) is structurally distinct from CAAIN's typical SME-only project leads.
- **Lakeland Precision Ranching uses rumen bolus technology originally developed for dairy** — adapted to beef cattle via CAAIN-funded algorithm development. The technology-transfer framing is substantive.
- **The processing-side SoraLINK vendor-reported $250K saved per intervention is single-deployment vendor framing.** Existing critical context.

## Links

- gaps: G-007 (Canadian inputs × all × all — partially addressed by dairy AI), G-321 (CAAIN operational scale not publicly disclosed)
- contested-claims: C-007 (Canada global leader — countered: 1.8% AI adoption per existing FCC unit; but dairy AI depth is real)
- related-units: `caain-portfolio-canada.md`, `soralink-export-food-processing.md` (existing), `fcc-canada-ai-adoption.md` (existing)
- sovereignty-flags: implicit — CATTLEytics and SomaDetect equipment-agnostic; data flow between on-farm sensors and vendors not publicly documented

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - CAAIN. *Creation of a Dairy Management, Modelling, and Collaborative Framework System*. https://caain.ca/projects/creation-of-a-dairy-management-modelling-and-collaborative-framework-system-to-facilitate-predictive-and-data-driven-decision-making-in-canada/
  - CAAIN. *Moove: AI-Powered Scheduling Automation for Dairy Logistics Optimization*. https://caain.ca/projects/5433/
  - CAAIN. *AI-Driven Dairy Cattle Health & Milk Assessment*. https://caain.ca/projects/soma-dairy/
  - CAAIN. *Precision Ranching for Improved Reproductive and Grazing Efficiencies*. https://caain.ca/projects/precision-ranching-for-improved-reproductive-and-grazing-efficiencies/
  - Milk Moovement. *Dairy Supply Chain Software*. https://www.milkmoovement.com/
  - Crunchbase News. *Exclusive: Milk Moovement Targets Dairy Supply Chain with $3.1M Seed*. https://news.crunchbase.com/agtech-foodtech/exclusive-milk-moovement-targets-dairy-supply-chain-with-3-1m-seed/
  - PR Newswire. *Milk Moovement Raises $20 Million USD To Transform the Dairy Industry's Supply Chain*. https://www.prnewswire.com/news-releases/milk-moovement-raises-20-million-usd-to-transform-the-dairy-industrys-supply-chain-301583386.html
  - Existing. `units/soralink-export-food-processing.md` (Quebec cycle scan)
  - Existing. `units/fcc-canada-ai-adoption.md`