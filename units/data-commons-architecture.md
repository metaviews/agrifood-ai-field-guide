---
id: data-commons-architecture
title: Data commons architecture — operational, framework, and standards layers
sector-position: (cross-cutting)
ai-technique-class: (cross-cutting)
purpose: governance
claim-type: framework
activity-status: deployed (operational layer); piloting (framework layer); deployed (standards layer)
critical-voice: digital-equity
capital-intensity: (not applicable)
language-literacy-profile: (not applicable)
policy-instrument: regulatory; strategy
region: Global (with country-specific operational examples)
actor: JoinData, NAPDC / Ag Data Coop, OADA, Ag Data Transparent, FAIR Principles
actor-type: '(multi-type: farmer-cooperative, state-agency, standards-body, civil-society)'
data-governance: not applicable
data-rights-framework: not applicable
last-verified: 2026-07
last-regionally-scanned: 2026-07

---

## Content

A complete data commons infrastructure has **three distinct layers**, each with different design choices and different actors. Worth distinguishing because conflating them obscures the substantive work at each layer.

### Layer 1 — Operational data sharing

Farmer-controlled data exchange platforms. The farmers are the operators / members.

**Anchor example:** JoinData (Netherlands), founded 2017, first agricultural data cooperative. 16,000+ farmer members, 260 sharing parties, 70 using parties, €50/year farmer membership fee, non-profit.

**Design choices at this layer:**
- Non-profit cooperative structure
- Farmer-controlled (members are the operators)
- Fee-funded (farmer membership, vendor transport fees)
- Multi-stakeholder founding coalition (often including established cooperatives, banks, farmers' unions)
- Cultural fit (cooperative tradition) is structurally important

### Layer 2 — Framework / policy development

National-level frameworks, legal structures, sustainability plans, regulatory compliance.

**Anchor example:** NAPDC / Ag Data Coop (US), $957,350 USDA NIFA grant, University of Nebraska lead, 2023-2026. Goals include data trust structure, FAIR principles, sustainability plan.

**Design choices at this layer:**
- Public-private-academic partnership
- Federally-funded (US) or state-funded
- Framework-development stage (not operational)
- Multi-stakeholder governance
- Legal structures being designed (e.g., data trust)

### Layer 3 — Open-source interoperability standards

Technical specifications that vendor implementations could adopt to enable farmer-controlled data exchange.

**Anchor example:** Open Ag Data Alliance (OADA), open-source project. RAML API specification on GitHub. Verification suite automated. Explicitly non-commercial, non-lobbying.

**Design choices at this layer:**
- Open-source project
- Industry-led standards effort
- Vendor implementations adopt the spec
- Verification suite validates compliance
- Inspired by Internet / Web standards (IETF, W3C, Apache)

### Why three layers

The three layers address three different problems:

1. **Operational data sharing** solves the *immediate* problem: farmer doesn't have consolidated view of data authorisations; vendor lock-in; consent management. JoinData solves this with a non-profit cooperative platform.

2. **Framework / policy development** solves the *systemic* problem: how does the legal and regulatory structure support farmer-controlled data infrastructure at national scale? NAPDC is designing this.

3. **Open-source interoperability standards** solves the *technical* problem: how do different vendor systems talk to each other without lock-in? OADA is building this.

A complete data commons infrastructure would have all three. Without all three, the operational layer alone (JoinData) doesn't scale internationally without framework development; the framework alone (NAPDC) doesn't have operational deployment; the standards alone (OADA) don't have farmer-controlled platforms adopting them.

### The layered structure in the field guide

| Layer | Substantive work | Field-guide unit |
|---|---|---|
| Operational | Farmer-controlled data exchange | JoinData (`joindata-netherlands.md`) |
| Framework / policy | National data trust structure; FAIR principles; sustainability | NAPDC (`napdc-national-ag-producer-data-cooperative.md`) |
| Standards | Open API specification; vendor implementations; verification | OADA (`oada-open-ag-data-alliance.md`) |

### Relationship to other data-layer concepts

Worth distinguishing:

- **Data cooperatives** — operational layer (farmer-controlled data exchange)
- **Data trusts** — legal structure often developed at framework layer (NAPDC's data trust design)
- **Data commons** — broader concept covering open / cooperative / standards
- **Data altruism** — individual voluntary contribution; less developed in agrifood
- **Open data** — distinct from data commons; open data is publicly available; commons is collectively managed
- **FAIR Principles** — technical interoperability standard (Layer 3 element)
- **CARE Principles** — Indigenous Data Governance; complementary to FAIR

### Critical observation

The data cooperative / commons movement in agrifood is at an *early stage* relative to its potential. The JoinData model (operational, mature) is replicable in countries with cooperative cultural traditions. The NAPDC model (framework development, piloting) is US-specific but worth tracking. The OADA model (open standards) is global. None of these are at scale globally.

## What this unit is doing in the taxonomy

Anchors the *data-substrate × cooperative / commons × framework* layer as a `framework` claim-type — the structural map of the three layers.

Distinct from:
- **JoinData** (`joindata-netherlands.md`) — operational layer example.
- **NAPDC** (`napdc-national-ag-producer-data-cooperative.md`) — framework layer example.
- **OADA** (`oada-open-ag-data-alliance.md`) — standards layer example.

## Why it matters for talks

- The three-layer architecture is a structural scaffold for any talk about data commons in agrifood.
- The complementary nature of the three layers is worth naming — single-layer framings miss the substantive work.
- The early-stage nature of the movement is worth knowing — operational models work but don't yet scale globally.
- The cultural-fit observation (cooperative tradition) is real and worth surfacing.

## Critical context

- The data cooperative / commons movement in agrifood is at an early stage globally.
- JoinData (Netherlands) is the most mature operational example but Netherlands-specific.
- NAPDC (US) is in framework-development stage, not operational deployment.
- OADA (global) is open-source project; vendor adoption determines scale.
- Cultural fit (cooperative tradition) matters for replication.

## Links

- gaps: G-042 (data commons architecture global deployment scale)
- contested-claims: C-032 (new — "Data commons will replace vendor platforms" — counter: at early stage; cultural fit matters; replication not yet demonstrated)
- related-units: joindata-netherlands.md, napdc-national-ag-producer-data-cooperative.md, oada-open-ag-data-alliance.md, open-data-ecosystem.md, proprietary-farm-data.md, dark-data-agrifood.md, farm-data-ownership-critical.md, pillaud-french-agritech-ecosystem.md
- sovereignty-flags: explicit — farmer-controlled, distributed model, non-commercial

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - Development Gateway / USAID (2023). JoinData case study. https://developmentgateway.org/wp-content/uploads/2023/02/Agricultural-Data_CaseStudy_Feb2023.pdf
  - NAPDC. https://www.agdatacoop.org/
  - OADA Principles. https://openag.io/principles/