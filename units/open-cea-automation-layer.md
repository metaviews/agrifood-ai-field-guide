---
id: open-cea-automation-layer
title: 'Open layer in greenhouse / controlled-environment automation — Mycodo, WUR AGC datasets, Common Greenhouse Ontology, OpenAg, and the Priva interface-open reality'
sector-position: on-farm-production-protected
ai-technique-class: sensors-and-iot-ml, predictive-ml, decision-support-systems
purpose: yield-optimisation, input-reduction, governance
claim-type: claim
activity-status: mixed (active small-scale software; dormant flagship; research data; closed commercial)
critical-voice: digital-equity
capital-intensity: low-to-medium (open small-scale layer; contrast to industrial closed systems)
language-literacy-profile: maker-technical
policy-instrument: "(none — standards layer: Common Greenhouse Ontology; data layer: WUR DOI datasets)"
region: international (Netherlands, US, Canada, Bhutan)
actor: Mycodo (Kyle Gabriel); Wageningen University & Research (Silke Hemming et al.); TNO (Common Greenhouse Ontology); MIT OpenAg (Caleb Harper, defunct); Priva (Hans Peters, Dirk Prins)
actor-type: community-project, university, research-institute, defunct-initiative, vendor
data-governance: mixed — GPL local-data software; DOI open research data; Apache-2.0 ontology; proprietary vendor platform
data-rights-framework: mixed — GPL-3.0, DOI research data, Apache-2.0, vendor-owned
last-verified: 2026-08
last-regionally-scanned: 2026-08
---

## Content

The protected-cultivation cell of this field guide is populated almost entirely by closed-commercial or research-stage actors (Haven Greens, ioCrops, Sollum, Hoogendoorn, Vineland, Tencent×WUR). This unit records the **open layer** that exists beneath and across that cell, verified 2026-08-06 through the opensource-agrifood G-OSA-22 cycle (primary sources cited below; see Links).

**Headline:** the open CEA layer exists as three partial shapes — open control software at small/maker scale, open cultivation data, and an open but unadopted data standard — while the flagship "all-open" claim failed, and vendor "open" platforms are interface-open, licence-closed.

### Shape 1 — Open control software, small/maker scale (Mycodo)

Mycodo (GPL-3.0; `kizniche/Mycodo`; 3,267 stars; v8.17.0 released 2026-08-03) is an environmental monitoring and regulation system on commodity single-board computers — the closest thing to a general-purpose open "grow computer." Data stays local by default. Peer-reviewed deployment: Penjor et al. (2022), *Bhutan Journal of Agriculture*, DOI 10.55925/btagr.22.5108 — a Mycodo-based automation prototype ran 8+ months in real hydroponics structures (NFT, DWC, vertical tower) at ARDC-Wengkhar. Scale ceiling: no commercial-scale CEA deployment documented.

### Shape 2 — Open cultivation data (WUR Autonomous Greenhouse Challenge)

The field guide's "research-stage" note on the WUR/Tencent Autonomous Greenhouse Challenge upgrades with primary evidence: the challenge **does** release its data openly, across four editions (2018, 2019, 2021, 2024) under persistent DOIs. 4th edition "Dwarf Tomato Timeseries and Images" (DOI 10.4121/fa102772-32db-4b30-bace-12f2016722ce; made available 2025-06-23): 5-minute climate/control-state/weather data, yield measurements, and canopy RGBD imagery from six AI-controlled 96 m² compartments (Bleiswijk). Creators include **Silke Hemming** (WUR) — the corpus's first named WUR greenhouse-technology researcher. Open data, not open code or hardware.

### Shape 3 — Open data standard, unadopted (Common Greenhouse Ontology)

The Common Greenhouse Ontology (CGO; Apache-2.0; `vekadvies/common-greenhouse-ontology`, TNO-led) is an ontology of greenhouse components, properties, and measurements, positioned by TNO as the communication standard for greenhouse robotics integration. It is the constructive answer to the closed-data-format lock-in problem — but the reference repo has 0 stars, last pushed 2022-12-06, and no commercial climate-computer vendor is documented as implementing it.

### Shape 4 — The failed flagship (MIT OpenAg Food Computer)

The most ambitious "everything open" CEA claim. `OpenAgricultureFoundation/openag_brain` (GPL-3.0) archived 2018; `gro-hardware` carries **no verifiable licence** and was archived 2019; the project closed April 2020; Food Computers were never commercially available. The results record is publicly discredited (NYT 2019; Gizmodo "Theranos for plants"; IEEE Spectrum on refugee-touting of non-functional units; ProPublica). "Would have been open source" is aspiration, not an open layer.

### Shape 5 — Vendor "open" reality (Priva, Hoogendoorn, Signify)

Priva's "open platform" (primary source, priva.com): API + Priva Horticulture Developer Portal, gated by a Priva Gateway + Priva Connected subscription, with data shared through an approved **Priva Integration Partners** ecosystem (Blue Radix, Source.ag, IUNU). No open-source licence disclosed. CEO Hans Peters (GreenTech Amsterdam 2024): *"We want to become the App Store of horticulture."* Data-ownership claims ("all data remains yours") are vendor-stated, not licence-verified. Hoogendoorn (IIVO + LetsGrow.com; "open software platform" usage in a 2020 industry overview) and Signify (GrowWise) surfaced no open programme. **Verdict: interface-open, licence-closed** — open system ≠ open licence.

## What this unit is doing in the taxonomy

Anchors the *openness axis* of the on-farm-production-protected cell, which the field guide otherwise documents as vendor-closed. Distinguishes from:
- **Haven Greens** — closed-loop vendor deployment (lettuce, King City ON).
- **ioCrops** — closed FTVC™ greenhouse-automation stack (Korea).
- **Sollum** — closed sun-as-a-service lighting subscription (Montréal).
- **Hoogendoorn** — closed IIVO climate computer + LetsGrow.com data layer (Netherlands/Quebec).
- **Vineland** — pilot robotic greenhouse harvester, closed hardware.

## Why it matters for talks

- When a talk contrasts "open" vs "closed" agrifood AI, the greenhouse cell now has verified open-layer content: GPL control software exists but stops at small scale; open data exists (WUR AGC); open standards exist but are unadopted. The openness thesis holds for data and hobby control and fails at commercial deployment and data-format interoperability.
- The "App Store of horticulture" quote is the enclosure-by-integration counterpoint to open-standards arguments — worth pairing with the open-interface ≠ open-licence distinction.
- OpenAg is the cautionary case for open-agrifood credibility: open claims without delivery damage the field.
- The Bhutan ARDC deployment shows the open layer's Global South reach is research-led institutional use, not farmer-led licensed hardware — consistent with the G-OSA-15 finding.

## Critical context

- Mycodo deployment evidence is maker/research scale; no commercial-scale CEA deployment documented.
- WUR AGC datasets are open data, not open code/hardware; the algorithms and greenhouse hardware stay with teams/vendors.
- CGO is an open standard with zero verified vendor adoption.
- Priva's data-ownership claims are vendor-stated, not licence or contract verified (G-OSA-16-adjacent).
- The OpenAg results record is discredited; treat its "open ecosystem" framing as contested.

## Links

- gaps: (none new — surfaced via opensource-agrifood G-OSA-22; assign a field-guide G-NNN at the next scan that touches this cell)
- contested-claims: C-OSA-05 (OpenAg "would have been open source"), C-OSA-06 (vendor "open systems" — interface-open, licence-closed); field-guide C-001 (AI will help feed the world — the open layer is a partial counter to vendor-enclosure framings)
- related-units: haven-greens.md, iocrops-greenhouse-ai-korea.md, sollum-sun-as-a-service.md, ai4food-guelph.md (Dara's greenhouse-AI risk voice), chinese-hyperscaler-agritech-substrate.md (Tencent×WUR AGC — data openness now verified)
- sovereignty-flags: data-layer sovereignty — open data and GPL local-data control are farmer-sovereignty-positive; vendor API/subscription platforms (Priva) retain platform governance; CGO unadopted leaves the data-format layer vendor-controlled

## Freshness

- last-verified: 2026-08
- last-regionally-scanned: 2026-08
- sources (primary, checked 2026-08-06):
  - GitHub API: kizniche/Mycodo; OpenAgricultureFoundation/openag_brain, gro-hardware; vekadvies/common-greenhouse-ontology
  - Penjor et al. 2022, Bhutan Journal of Agriculture, DOI 10.55925/btagr.22.5108
  - WUR Research Portal, 4th AGC dataset, DOI 10.4121/fa102772-32db-4b30-bace-12f2016722ce
  - Priva: https://www.priva.com/horticulture/solutions/digital-services/integrate-greenhouse-data ; https://www.priva.com/blog/horticulture/api-must-add-value-the-market-is-not-looking-for-gadgets
  - Wikipedia "Open Agriculture Initiative" + NYT/IEEE Spectrum/ProPublica citations
  - TNO: https://www.tno.nl/en/digital/artificial-intelligence/safe-autonomous-systems/system-integration-robots-greenhouses/
  - Opensource-agrifood verification pass: research/2026-08-greenhouse-cea-open-automation-scan.md + research/2026-08-greenhouse-cea-vendor-open-programmes.md
- freshness tags: Mycodo fact (re-verify annually); WUR AGC fact (DOI stable); CGO gap/example (re-check annually); OpenAg gap (negative, closed)
