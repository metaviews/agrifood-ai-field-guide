---
id: hyperscaler-data-sovereignty-agritech-2025-2026
title: Hyperscaler agritech data sovereignty + verification framework — Gartner 2025 sovereignty shift + tiered methodology for evaluating hyperscaler-reported agritech claims
sector-position: (cross-cutting — applies across all sector positions where hyperscaler substrate is in scope)
ai-technique-class: (cross-cutting — applies across all technique classes hosted on hyperscaler infrastructure)
purpose: governance (sovereignty + verification); research and discovery (research-to-deployment translation under vendor-reported bias)
claim-type: framework (verification methodology for hyperscaler-reported agritech figures; sovereignty dimension as 2025-2026 critical voice)
activity-status: (not applicable — methodology framework)
critical-voice: digital-equity (data sovereignty framing); food-sovereignty (farmer-data-as-commons framing); critical-civil-society (analytical work on hyperscaler concentration)
capital-intensity: (not applicable)
language-literacy-profile: (not applicable)
policy-instrument: regulatory (Gartner Magic Quadrant for Strategic Cloud Platform Services — August 2025; FTC-Deere 2025-2026 right-to-repair; EU GDPR; jurisdictional sovereignty rules)
region: Global (sovereignty dimension is jurisdictional; verification methodology is global)
actor: Gartner Magic Quadrant for Strategic Cloud Platform Services (August 2025); ComputerWeekly; Virtualization Review; the corpus's existing `ai-maturity-assessment-framework.md` (this unit extends that framework)
actor-type: (not applicable — methodology + critical-voice combination)
data-governance: (not applicable)
data-rights-framework: (not applicable)
maturity-scale: (n/a — framework)
maturity-verification: (n/a — analytical)
maturity-longevity: L1 (first iteration, July 2026)
maturity-translation: T2 (extends the existing ai-maturity-assessment-framework; applied to four hyperscalers in this document)
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

This unit extends the corpus's existing **AI maturity assessment framework** (`units/ai-maturity-assessment-framework.md`) with two hyperscaler-specific layers:

1. **The sovereignty dimension (2025-2026 critical voice)** — Gartner Magic Quadrant for Strategic Cloud Platform Services (August 2025) named "digital sovereignty, AI and cloud resilience" as primary hyperscaler-selection criteria for the first time. ComputerWeekly documented that AWS has yet to break out of US-delivery commitments while Google Cloud has found ways to deliver locally. The sovereignty dimension intersects with right-to-repair (FTC-Deere 2025-2026) and farmer-data-rights questions.

2. **A tiered hyperscaler-verification methodology** — the existing V0-V4 verification dimension (vendor-reported → replicated-by-independent-party) does not adequately address the hyperscaler-specific problem: the **three-party vendor-customer-hyperscaler claim chain**. When Bayer FieldView reports X acres and Climate FieldView data sits on AWS S3, who verifies the X-acres figure? The hyperscaler knows the storage; the customer knows the data; the hyperscaler-customer partnership creates a verification gap neither party alone can fill.

The unit also grades the four hyperscalers (AWS, Microsoft Azure, Google Cloud, Alphabet Mineral) on the combined sovereignty + verification discipline.

---

## Part 1 — The sovereignty dimension (2025-2026 critical voice)

### The Gartner shift (August 2025)

Per Gartner Magic Quadrant for Strategic Cloud Platform Services (August 2025, via Virtualization Review, summarised in `scans/2026-07-hyperscaler-substrate.md`):

> *"Digital sovereignty, AI and cloud resilience are among the new trends shaping how organizations select a public cloud provider in 2025."*

> *"Beginning in 2025, geopolitical instability has led IT leaders in both public and private sectors to assess dependencies on global public cloud hyperscalers. As alternatives are often disruptive, cloud sovereignty is gaining traction as a target for geopatriation."*

> *"For enterprises, that means the same vendors racing ahead with generative AI and platform services are also under pressure to prove they can guarantee local control of data, compliance with regional regulations, and resilience under shifting global conditions."*

Gartner changed the report name from "Cloud Infrastructure and Platform Services (CIPS)" to "Strategic Cloud Platform Services (SCPS)" to reflect the shift. AWS remains the leader for the 15th consecutive year; the market concentration has not changed materially. **The selection criteria have shifted.**

### The ComputerWeekly diagnostic (sovereign-cloud delivery posture)

Per ComputerWeekly (recent, summarised in the hyperscaler substrate scan):

> *"The landscape of hyperscaler offers for sovereign cloud is thus immature. Google has found a way to deliver locally, AWS is yet to break out of..."*

The four-hyperscaler sovereign-cloud delivery posture, in descending order of local-delivery commitment (per the ComputerWeekly and Gartner 2025 frames):

| Hyperscaler | Sovereign-cloud posture | Source |
|---|---|---|
| **Google Cloud** | Most proactive on sovereign-cloud local delivery | ComputerWeekly 2025 |
| **Microsoft Azure** | Microsoft Cloud for Sovereignty launched 2023; partnered with Deutsche Telekom / T-Systems in Germany; local data residency in EU regions | Microsoft 2023; AgFunderNews 2022 |
| **AWS** | AWS GovCloud, AWS European Sovereign Cloud announced; lags Google and Microsoft on local-delivery commitments | ComputerWeekly 2025 |
| **Alphabet Mineral** | Position unclear; Alphabet's sovereign-cloud posture is Google Cloud's, distinct from Mineral's product posture | (unclear) |

### Sovereignty implications for US agritech AI

For US-headquartered agritech customers using US-headquartered hyperscalers (Bayer FieldView on Azure, Tyson × AWS, Taranis on Google Cloud, JBS × Völur on Azure, etc.), the sovereignty critique is largely theoretical — data does not cross jurisdictional boundaries. The sovereignty critique becomes meaningful when:

- **EU agritech customers** (TINE Norway, Bayer Crop Science global operations, McDonald's global) use US hyperscalers — data sovereignty, GDPR compliance, and EU regulatory requirements apply.
- **China or Russia operations** — sanctions regimes and data-localization rules affect hyperscaler service availability.
- **Food safety regulatory data** (FDA, USDA FSIS) may have specific data-residency requirements that hyperscalers must meet.
- **Cross-border supply chain data** (LAC or APAC agritech customers using US hyperscalers) — sovereignty requirements may apply.

For Canadian and Mexican agritech AI customers using US hyperscalers, the picture is mixed: Canadian data sovereignty considerations are less stringent than EU; Mexican considerations are evolving. The hyperscaler-agritech substrate is structurally US-dominated, and the sovereignty critique affects the **non-US customer segments** most.

### The right-to-repair + data-sovereignty intersection

The broader US agritech right-to-repair conversation (FTC-Deere action 2025-2026) intersects with the hyperscaler sovereignty question in a substantive way. Farmers' data flows to hyperscaler infrastructure via vendor platforms; the data ownership and portability questions affect farmer data sovereignty regardless of which hyperscaler hosts the vendor platform. The data sovereignty critique and the farmer-data-rights critique are **two sides of the same structural question** — who controls the data layer underneath US agritech AI.

Per `units/farm-data-ownership-critical.md`: three distinct critical lenses (IPES-Food corporate concentration, Indigenous Data Sovereignty / CARE Principles, Civil Eats / farmer advocacy) all name the **control gap** as the substantive concern. Ag Data Transparent addresses transparency but not control. The hyperscaler sovereignty critique extends this analysis to the infrastructure layer — even Ag Data Transparent certifications do not address what hyperscalers do with the underlying data flow.

---

## Part 2 — The three-party vendor-customer-hyperscaler claim chain

### The structural problem

The standard verification dimension in the corpus (`units/ai-maturity-assessment-framework.md`) defines:

- **V0** — vendor-reported only.
- **V1** — academic / institutional peer-reviewed.
- **V2** — third-party case study.
- **V3** — independently audited.
- **V4** — replicated by independent party.

This is sufficient for single-vendor claims (Bayer FieldView, John Deere See & Spray, Lely Astronaut). But when the deployment sits on hyperscaler infrastructure, a three-party claim chain emerges:

```
[Farmer data] → [Vendor platform] → [Hyperscaler infrastructure]
                          ↓
              [Vendor claims X acres]
                          ↓
              [Hyperscaler confirms X storage? Y data flow?]
                          ↓
              [Customer (farmer) confirms X acres used?]
```

**The verification gap:** when vendor reports X acres, hyperscaler may have Y data flow, customer has Z actual usage. None of these match in detail. Standard verification asks: who audited X? The three-party chain asks: did anyone independently confirm X = Y = Z?

### Concrete examples of the three-party chain

| Vendor claim | Vendor | Customer data flow | Hyperscaler verification |
|---|---|---|---|
| "Bayer FieldView on 220M+ acres globally" | Bayer Crop Science | Climate FieldView data uploaded by farmers | ADMA storage figures not publicly disclosed |
| "Tyson × AWS computer vision across poultry plants" | Tyson Foods | Plant-floor image data on AWS infrastructure | AWS case study references customer story; does not enumerate plants |
| "Taranis on Google Cloud in 100+ countries" | Taranis | Leaf-level imagery uploaded to Google Cloud | Google Cloud customer case study; specific country-deployment figures not enumerated |
| "JBS × Völur on Azure for carcass cutting" | JBS USA + Völur | Cutting data flows to Azure | Azure customer story; deployment-scale not publicly disclosed |

In each case: the vendor reports a figure; the hyperscaler publishes a customer case study; neither party independently audits the figure across the chain.

### The hyperscaler-specific verification gap

Standard verification (V0-V4) does not address:
- Whether the hyperscaler has access to the underlying data flow that would enable independent verification.
- Whether the hyperscaler is willing to publish storage-volume or compute-volume figures that would confirm vendor claims.
- Whether the customer (e.g., the farmer, the food manufacturer) has any role in the verification chain.

The hyperscaler-specific verification gap is **not just an academic concern** — it is the practical reason that agritech AI figures circulate without independent verification. Bayer reports 220M acres; AWS holds Bayer's storage; nobody except Bayer knows whether 220M acres is the actual figure or the projected figure.

---

## Part 3 — Hyperscaler-specific verification tiers (H0-H4)

The corpus's existing V0-V4 verification dimension can be extended with hyperscaler-specific tiers. The H-tier captures the verification posture at the **hyperscaler-customer relationship level**, complementing the vendor-side V-tier.

| Tier | What it measures | Typical verification posture |
|---|---|---|
| **H0** | Vendor-reported hyperscaler partnership; no hyperscaler-published customer story | Hyperscaler does not publicly document the partnership; only the vendor's claim exists. |
| **H1** | Hyperscaler-published customer story exists; vendor figure cited in story | Hyperscaler publishes a blog post or case study naming the vendor; vendor figures may be re-stated but not independently verified. |
| **H2** | Hyperscaler customer story with named customer spokesperson and named services | Hyperscaler customer story names specific people, specific Google Cloud / AWS / Azure services, and specific deployment scope (e.g., Falabella TARS — 22,000 tickets, 33% reduction). The deployment scope is documented but typically not independently audited. |
| **H3** | Independent hyperscaler-customer joint publication; third-party audit | Both hyperscaler and customer publish jointly; third-party auditor (e.g., Development Gateway, Inrae, civil-society research) verifies specific figures. Rare for agritech. |
| **H4** | Replicated hyperscaler deployment across multiple independent parties | Multiple independent parties have deployed the same architecture on the hyperscaler; deployment is reproducible. Cloud-native deployments of open-source agritech AI (e.g., multi-tenant farm-data platform deployments) may reach this tier. |

### How H-tier relates to V-tier

A vendor claim can be V0 (vendor-reported only) but H3 (independent hyperscaler-customer joint publication) — the hyperscaler publication is the verification, even if the vendor did not publish a peer-reviewed paper. Conversely, a vendor can be V1 (peer-reviewed paper) but H0 (no hyperscaler customer story) if the deployment is on-premises or private-cloud rather than hyperscaler-hosted.

The H-tier is **complementary to V-tier**, not substitutive.

### Application: which existing hyperscaler claims reach which H-tier?

| Hyperscaler customer claim | Vendor | Hyperscaler | H-tier | V-tier | Combined posture |
|---|---|---|---|---|---|
| Microsoft FarmBeats → ADMA | Microsoft Research (academic + product) | Microsoft Azure | **H2** (Microsoft customer stories page; Bayer × Microsoft ADMA formal launch blog) | **V1** (USENIX NSDI 2017 best paper; ACM MobiCom 2019 best paper runners-up; peer-reviewed lineage) | **High on both** |
| Bayer Climate FieldView on ADMA | Bayer Crop Science | Microsoft Azure | **H2** (Microsoft customer story; AgFunderNews reporting) | **V1** (Climate FieldView peer-reviewed papers exist) | **High on both** |
| JBS × Völur on Azure | JBS USA + Völur | Microsoft Azure | **H1** (Azure customer story exists; specific deployment-scale not enumerated) | **V0** (no peer-reviewed paper on the Völur × JBS deployment) | **Mixed** |
| Tyson × AWS poultry vision | Tyson Foods | AWS | **H2** (AWS Industries Blog customer story; DeepLearning.ai / The Batch profile) | **V0** (vendor-reported scale; WSJ coverage but no peer-reviewed paper) | **Medium** |
| Tyson Foodservice conversational AI | Tyson Foods | AWS | **H2** (AWS Machine Learning Blog 2026) | **V0** (vendor-reported scope; no peer-reviewed paper) | **Medium** |
| Smithfield pork vision robotics | Smithfield | AWS | **H1** (AWS customer reference) | **V0** (no peer-reviewed paper; trade press coverage) | **Low-medium** |
| Cargill CarVe | Cargill | (proprietary; cloud-mediated but not explicitly AWS) | **H0-H1** (vendor-internal; AWS references possible but not publicly named) | **V0** (vendor-reported) | **Low** |
| Taranis on Google Cloud | Taranis | Google Cloud | **H1** (Google Cloud customer story; specific country-deployment figures not enumerated) | **V0** (no peer-reviewed paper; trade press coverage) | **Medium** |
| Falabella TARS on Google Cloud | Falabella | Google Cloud | **H2** (Google Cloud customer story with named spokespersons and named services; 22,000 tickets documented) | **V0** (vendor-reported; deployment-scale documented but not independently audited) | **Medium** |
| Cropin × Google Cloud OrbitAI (July 2026) | Cropin | Google Cloud | **H1** (Cropin press release; Google Cloud announcement) | **V0** (vendor-reported; one-week-old launch) | **Low-medium** |
| Alphabet Mineral | Alphabet | Alphabet subsidiary | **H1** (Alphabet X moonshot page; The Spoon; AgFunderNews reporting) | **V0** (10% farmland claim vendor-reported; no independent audit) | **Low** |

The combined posture is **rarely high on both H-tier and V-tier**. Microsoft FarmBeats → ADMA is the corpus's strongest combined-posture hyperscaler deployment. Cargill CarVe is the corpus's lowest combined-posture deployment (vendor-internal, cloud-mediated but not explicitly named).

### Why this matters

Per the corpus hygiene rule (*press citation volume ≠ substantive contribution*): the **combined H+V posture** is the substantive indicator of whether a hyperscaler claim should be cited as evidence of substantive deployment. H0+V0 (vendor-internal claim) is structurally weaker than H2+V1 (hyperscaler-customer joint publication + peer-reviewed paper). For talks and for the corpus's analytical work, citing H0+V0 figures without flagging the verification posture is the substantive problem the framework addresses.

---

## Part 4 — Sovereignty-tier grading (S0-S4)

The sovereignty dimension (Part 1 above) intersects with the hyperscaler-specific verification dimension (Part 3) to produce a **sovereignty tier** that the corpus can grade each hyperscaler-agritech deployment on:

| Tier | What it measures | Typical posture |
|---|---|---|
| **S0** | No sovereignty consideration | US-headquartered vendor + US-headquartered hyperscaler + US customer; data does not cross jurisdictional boundaries. The dominant case for US agritech AI. |
| **S1** | Sovereignty consideration present, not binding | US-headquartered vendor + US-headquartered hyperscaler + EU or APAC customer; data crosses jurisdictions but no regulatory enforcement. |
| **S2** | Sovereignty compliance documented | Hyperscaler has published sovereign-cloud commitments; customer has documented the data-residency posture; jurisdiction-specific data is held in jurisdiction. |
| **S3** | Sovereignty tier is operationally distinct | Hyperscaler offers local data-residency, local control plane, jurisdictional certification (EU Sovereign Cloud, Microsoft Cloud for Sovereignty, AWS European Sovereign Cloud). Customer deploys within the sovereign-tier infrastructure. |
| **S4** | Hyperscaler + customer + regulator jointly certified | A regulator (e.g., EU data protection authority, FDA, USDA) has certified the sovereignty posture. Rare for agritech. |

### Application: sovereignty tier for each hyperscaler-agritech deployment

| Hyperscaler customer claim | Sovereignty tier | Notes |
|---|---|---|
| Microsoft FarmBeats → ADMA | **S0** | US deployment; not a sovereignty concern. |
| Bayer Climate FieldView on ADMA | **S0** (US) / **S2** (EU Bayer operations) | US deployment is S0; EU Bayer Crop Science operations may be S2 if using EU Microsoft Cloud for Sovereignty. |
| JBS × Völur on Azure | **S0** | US-headquartered JBS USA + Microsoft Azure US. |
| Tyson × AWS poultry vision | **S0** | US-based; no sovereignty concern. |
| Tyson Foodservice conversational AI | **S0** | US-based; no sovereignty concern. |
| Smithfield pork vision robotics | **S0** | US-based; no sovereignty concern. |
| Cargill CarVe | **S0** (US) | US-based; no sovereignty concern. |
| Taranis on Google Cloud | **S1** (US/EU) / **S2** (Russia, parts of EU) | Multi-continent deployment; sovereignty considerations vary. |
| Falabella TARS on Google Cloud | **S1** (LAC) | Chile-headquartered Falabella + Google Cloud; LAC deployments may have sovereignty considerations. |
| Cropin × Google Cloud OrbitAI | **S2** (103 countries) | Multi-country; sovereignty considerations apply across deployments. |
| Alphabet Mineral | **S0** (US) / **S1-S2** (global customers) | US-headquartered; global customer base; sovereignty considerations apply for non-US customers. |

The dominant sovereignty posture across the corpus's named hyperscaler-agritech deployments is **S0 (US-only, no sovereignty concern)**. The hyperscaler substrate is structurally US-domestic, and the sovereignty critique is **the next-layer question** that becomes meaningful for non-US customers.

---

## Part 5 — What this means for talks and for corpus discipline

### For talks

- **The Microsoft FarmBeats → ADMA story is the corpus's strongest hyperscaler deployment** when combined-posture grading is applied: H2+V1+S0. The combination of Microsoft Research peer-reviewed lineage + Microsoft Azure customer story + US-deployment sovereignty clarity is rare. Worth naming.
- **The Cropin × Google Cloud OrbitAI story is the corpus's most-recent substantive hyperscaler deployment** at H1+V0+S2. The combination is medium on verification (no peer-reviewed paper yet, since launch is July 15, 2026) but high on sovereignty considerations (103 countries).
- **The Cargill CarVe story is the corpus's lowest combined-posture hyperscaler deployment** at H0-H1+V0+S0. Vendor-internal, cloud-mediated but not explicitly named. Worth flagging as the "even when you cite it, what is the verification chain?" example.
- **The sovereignty dimension is the 2025-2026 critical voice** that the corpus should integrate. Citing Gartner August 2025 and ComputerWeekly is sufficient; deeper analysis of agritech-specific sovereignty implications is the next-cycle work.

### For corpus discipline

- **The H-tier should be applied to all future hyperscaler units** as part of frontmatter or as a maturity-grade row. Existing units that touch hyperscaler (Bayer FieldView, Tyson × AWS, JBS × Völur on Azure, etc.) should have their H-tier grades confirmed.
- **The V-tier+H-tier combined posture is the substantive indicator** of whether a hyperscaler claim is citable as evidence. H0+V0 should be flagged; H2+V1 can be cited as substantive.
- **The sovereignty tier (S0-S4) should be added as a fifth dimension** to the corpus's existing maturity-grade table, or as a parallel axis. The hyperscaler substrate scan should be updated to include the sovereignty tier for each customer.
- **The framework itself is L1 (first iteration, July 2026)**. The H-tier and S-tier frameworks are corpus-internal; not yet validated against independent assessment. Future cycle work should validate against externally-published assessment (Gartner Magic Quadrant for agritech, IDC, etc.).

---

## Part 6 — What this unit is doing in the taxonomy

Anchors the **methodology × hyperscaler × verification** cell of the matrix. Extends:
- `units/ai-maturity-assessment-framework.md` (the existing four-dimension framework). This unit adds the **H-tier** (hyperscaler-specific verification) and **S-tier** (sovereignty) dimensions.
- `scans/2026-07-hyperscaler-substrate.md` (the hyperscaler substrate scan from this session). This unit operationalises the scan's G-185 gap into a structured framework.
- `units/farm-data-ownership-critical.md` (the three-critical-lenses unit). The data-sovereignty framing extends the IPES-Food / CARE Principles / Civil Eats framing to the hyperscaler infrastructure layer.
- `units/microsoft-azure-data-manager-agriculture.md` (the Microsoft ADMA unit). The combined-posture H2+V1+S0 grading applied here is the corpus's strongest combined-posture hyperscaler deployment.

## Why it matters for talks

- **The verification dimension is the substantive analytical contribution** — the corpus has been citing hyperscaler claims at the same verification tier as single-vendor claims, when the three-party vendor-customer-hyperscaler chain creates a distinct verification gap.
- **The sovereignty dimension is the 2025-2026 critical voice** — naming Gartner and ComputerWeekly as substantive analyst voices that have shifted the hyperscaler-selection criterion.
- **The Microsoft FarmBeats → ADMA combined-posture story is the corpus's substantive hyperscaler deployment** — the only deployment that reaches H2+V1 in the corpus, with US-deployment sovereignty clarity.
- **The Cargill CarVe low-posture example is the substantive counterweight** — when the vendor is internal and the cloud is not explicitly named, the verification chain is genuinely weak.
- **The sovereignty + verification intersection is the corpus's first explicit framework for evaluating hyperscaler claims** — distinguishing the substantive deployments from the marketing-grade claims.

---

## Critical context

- **The H-tier and S-tier are first-iteration corpus-internal frameworks** (L1, July 2026). Not yet validated against independent assessment (Gartner Magic Quadrant for agritech is not a published category; the closest is the general Magic Quadrant for Strategic Cloud Platform Services).
- **The combined-posture grades applied to specific deployments are corpus-internal assessment**, not third-party verified. Useful as analytical discipline; not authoritative.
- **The Microsoft Research peer-reviewed lineage** (FarmBeats NSDI 2017, MobiCom 2019, etc.) is the corpus's strongest V1 source for any hyperscaler deployment. The combination of research lineage + product transition (FarmBeats → ADMA) is unique.
- **The sovereignty dimension as critical voice is fresh** (Gartner August 2025, ComputerWeekly 2025-2026). The corpus should treat this as a moving target — re-verify at cycle time as Gartner and ComputerWeekly publish updated assessments.
- **The Cargill CarVe low-posture grade is substantive** — Cargill has not publicly named the cloud infrastructure for CarVe, and the deployment scale is vendor-reported. Worth flagging without flattening to "Cargill is wrong" — the platform genuinely does useful work; the verification chain is structurally weak.
- **The framework does not address sovereign-cloud pricing or commercial terms** — those are commercially confidential and outside the corpus's analytical scope.
- **The framework does not address GPU compute economics for agritech model training** — a separate structural question.

---

## Links

- gaps: G-185 (this unit is the anchor — verification framework for hyperscaler-reported agritech figures), G-167 (hyperscaler substrate — addressed by the hyperscaler substrate scan and operationalised by this unit), G-183 (agritech-specific sovereignty critique — partially addressed by this unit; broader analysis still warranted)
- contested-claims: C-120 (hyperscaler data sovereignty has become a primary selection criterion — Gartner August 2025 supports; agritech-specific selection behaviour not separately documented), C-122 (US-headquartered hyperscaler concentration as structural vs contingent — this unit supports the structural reading)
- related-units: ai-maturity-assessment-framework.md (the framework this unit extends), microsoft-azure-data-manager-agriculture.md (the corpus's strongest combined-posture hyperscaler deployment), bayer-climate-fieldview.md (H2+V1 deployment on Azure), tyson-aws-poultry-vision.md (H2+V0 deployment on AWS), jbs-usa-volur-carcass-sorting.md (H1+V0 deployment on Azure), taranis-aerial-imagery.md (H1+V0 deployment on Google Cloud), falabella-google-cloud-tars-lac.md (H2+V0 deployment on Google Cloud), cargill-carve-meat-processing.md (H0-H1+V0 deployment), farm-data-ownership-critical.md (three-critical-lenses analytical unit that the sovereignty dimension extends), proprietary-farm-data.md (vendor platforms and Ag Data Transparent certification)
- related-quotes: (none — Gartner / ComputerWeekly quotes not yet in quotes/ folder; surface opportunity)
- related-scans: scans/2026-07-hyperscaler-substrate.md (the hyperscaler substrate scan that surfaced G-185; this unit operationalises it), scans/2026-07-us-industry-ai.md (US industry scan that surfaced G-167), scans/2026-07-us-academic-research.md (academic substrate parallel; not hyperscaler-mediated)
- sovereignty-flags: implicit — the entire hyperscaler substrate is structurally US-headquartered and US-customer-dominated; non-US customers and non-US deployment contexts introduce sovereignty considerations; the framework operationalises the 2025-2026 critical voice on this question

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - Gartner Magic Quadrant for Strategic Cloud Platform Services (August 2025), via Virtualization Review. https://virtualizationreview.com/articles/2025/08/21/sovereignty-joins-ai-as-the-new-hyperscaler-battleground-in-2025.aspx
  - ComputerWeekly. *Data is a sovereignty issue. And broader than just the hyperscalers*. https://www.computerweekly.com/opinion/Data-is-a-sovereignty-issue-And-broader-than-just-the-hyperscalers
  - Virtualization Review. *Sovereignty Joins AI as the New Hyperscaler Battleground in 2025*. August 21, 2025.
  - Microsoft. *Microsoft Cloud for Sovereignty* (launched 2023). https://www.microsoft.com/en-us/industry/sovereignty/cloud-for-sovereignty
  - AgFunderNews. *Bayer, Microsoft formalize and launch cloud-based data manager*. October 2022. https://agfundernews.com/bayer-microsoft-formalize-and-launch-cloud-based-data-manager
  - AWS Industries Blog. *Tyson Foods elevates customer search experience with an AI-powered conversational assistant*. 2026. https://aws.amazon.com/blogs/machine-learning/tyson-foods-elevates-customer-search-experience-with-an-ai-powered-conversational-assistant/
  - Successful Farming. *Amazon Web Services Integral Part of Moving Ag Technology Forward*. February 3, 2021. https://www.agriculture.com/news/technology/amazon-web-services-integral-part-of-moving-ag-technology-forward
  - Google Cloud Customer Stories (es-419). *Grupo Falabella redefine la gestión de incidentes a través de agentes con Google Cloud*. https://cloud.google.com/customers/intl/es-419/falabella
  - EIN Presswire. *Cropin and Google Cloud Launch OrbitAI; the World's First Agentic AI Platform for Food and Agriculture*. July 15, 2026. https://www.einnews.com/pr_news/926651278/cropin-and-google-cloud-launch-orbitai-the-world-s-first-agentic-ai-platform-for-food-and-agriculture
  - The Spoon. *Google's Farm Tech Moonshot Mineral Becomes Alphabet Company*. https://thespoon.tech/googles-farm-tech-moonshot-mineral-becomes-alphabet-company/
  - AgFunderNews. *Alphabet's Mineral has analyzed 10% of world's farmland*. https://agfundernews.com/breaking-alphabet-brings-agtech-startup-out-of-stealth-with-data-from-10-of-worlds-farmland-3-major-customers
  - Farm Progress. *Alphabet launches ag 'moonshot' subsidiary*. https://www.farmprogress.com/business/alphabet-launches-ag-moonshot-subsidiary
  - USENIX NSDI 2017. *FarmBeats: An IoT Platform for Data-Driven Agriculture*. https://www.usenix.org/conference/nsdi17/technical-sessions
