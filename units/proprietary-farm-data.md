---
id: proprietary-farm-data
title: Proprietary farm data — vendor platforms and Ag Data Transparent certification
sector-position: on-farm-production-open-field, on-farm-production-protected, animal-production
ai-technique-class: (cross-cutting — data infrastructure)
purpose: (cross-cutting)
claim-type: framework
activity-status: deployed
critical-voice: (none directly — vendor framing; Ag Data Transparent is industry-led counter-institutional response)
capital-intensity: industrial
language-literacy-profile: (not applicable)
policy-instrument: regulatory (Ag Data Transparent certification; FTC-Deere settlement)
region: Global (multi-jurisdiction, primarily US/EU/Canada/Brazil/Argentina)
actor: Bayer Climate FieldView, John Deere Operations Center, AGCO PTx Trimble, CNH AFS Connect, Trimble, Taranis, Cainthus/Elanco, Lely, Merck Animal Health, Afimilk, Climate FieldView
actor-type: vendor
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

Proprietary farm data is the *dominant cell* in the agrifood AI data substrate. Major vendor platforms collect farm-level data (GPS coordinates, seeding rates, pesticide volumes, moisture readings, yield estimates) and aggregate with external feeds (satellite, weather). The aggregation is the value; the individual farm data is the input.

### The major proprietary platforms

- **Bayer Climate FieldView** — multi-continent (23 countries, 250M subscribed acres per November 2024). Customer-owned data, vendor-aggregated. Ag Data Transparent certified since 2021.
- **John Deere Operations Center** — equipment-led data aggregation. Ag Data Transparent certified (first major ag player).
- **AGCO PTx Trimble** — retrofit platform with Trimble Connected Farm.
- **CNH AFS Connect** — equipment-led data aggregation.
- **Trimble / CNH AFS** — broader precision-ag platforms.
- **Taranis** — multi-continent aerial imagery platform (20M acres in operations).

### The contractual reality

**Climate FieldView's privacy statement (verbatim):**
> "Does Climate LLC own the customer farm data uploaded into FieldView? No. Our customers own the customer farm data they provide to Climate LLC, including data..."

**Bayer framing (Brian Leake, spokesperson):**
> "Farmers own their own data—full stop. They can choose to share their data with others and request that their individual farm data is deleted."

**But:** Climate FieldView's data is stored with Amazon Web Services, Microsoft Azure, or Google Cloud — *third-party cloud infrastructure*. The vendor's *operational* control over data movement, aggregation, and use extends beyond the contractual ownership statement.

### Ag Data Transparent — the industry-led certification

Ag Data Transparent is a non-profit certification scheme based on the *Privacy and Security Principles for Farm Data*. John Deere is the first major ag player to obtain it (the *first major* qualifier matters — the certification has existed since at least 2021). Bayer Climate FieldView certified since 2021.

**The certification is industry-led:** "made up of farmer-led organizations and commodity groups." It provides five levels of transparency and is the operational instantiation of farmer-data ownership rights.

**Critical observations on Ag Data Transparent:**
- The certification addresses *transparency* (contract disclosure, data use disclosure), not *control* (vendor cannot sell anonymised data, vendor cannot aggregate against farmer interests).
- A contract can be Ag Data Transparent certified *and* still grant broad rights to anonymised data pools.
- The certification is voluntary; not all major vendors are certified.

### The FTC-Deere settlement (July 8, 2026) — the regulatory layer

The FTC settled with John Deere in July 2026 over right-to-repair concerns. The settlement is *also* a data-governance event: equipment data access is a precondition for right-to-repair. Worth knowing because the right-to-repair conversation is *also* a farm-data conversation.

### The Civil Eats critical framing (March 2026)

Concrete data from Civil Eats:
- 27% of US farms/ranches use precision ag tools (US Government Accountability Office 2024).
- 70% of precision ag-tech users globally are large operators; smaller farms slower to buy in.
- Global precision farming market projected to reach $27 billion by 2030 (Mordor Intelligence).

**Practitioner reality (Andrew Nelson, Washington farmer, 7,500 acres):**
> "I've read the terms and conditions. But giving some of that information to the person that I'm having to buy a three-quarter of a million-dollar machine from just doesn't sit quite right."

## What this unit is doing in the taxonomy

Anchors the *data-substrate × proprietary × industry* cell as a `framework` claim-type. Captures the major vendor platforms, the contractual framing, the Ag Data Transparent certification, and the FTC-Deere regulatory layer.

Distinct from:
- **Open data ecosystem unit** (`open-data-ecosystem.md`) — open / state / civil society cell.
- **Dark data unit** (`dark-data-agrifood.md`) — collected-but-not-surfaced cell.
- **Farm-data ownership critical voice unit** (`farm-data-ownership-critical.md`) — critical lens.

## Why it matters for talks

- Proprietary farm data is the *dominant cell* — most agrifood AI deployment runs on proprietary vendor platforms.
- The Ag Data Transparent certification is the operational instantiation of farmer-data ownership rights worth knowing.
- The contractual reality vs. the contractual framing matters — Civil Eats captures this honestly.
- The FTC-Deere settlement is the regulatory layer that makes right-to-repair *also* a data-governance conversation.
- The 27% / 70% / $27B / 7,500-acre-practitioner-reality figures are concrete anchors.

## Critical context

- Climate FieldView data is stored with AWS, Azure, or Google Cloud — third-party cloud infrastructure.
- Ag Data Transparent addresses transparency, not control — anonymised data pool rights can be preserved under certified contracts.
- Civil Eats' critical framing names the value capture concern explicitly.
- The FTC-Deere settlement (July 2026) addresses right-to-repair, which is also a data-governance question.

## Links

- gaps: G-036 (Ag Data Transparent certified contracts vs anonymised data pool rights — gap)
- contested-claims: C-026 (new — "Vendor data contracts put farmers in control" — counter: practitioner reality and Civil Eats analysis show contracts favor businesses)
- related-units: open-data-ecosystem.md, dark-data-agrifood.md, farm-data-ownership-critical.md, bayer-climate-fieldview.md, john-deere-see-and-spray.md, agco-ptx.md
- sovereignty-flags: explicit — vendor contracts, anonymised data pools, regulatory layer (FTC-Deere settlement)

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - Civil Eats (2026). *A Hidden Crop for Corporate Tech: Farm Data*. March 23, 2026. https://civileats.com/2026/03/23/a-hidden-crop-for-corporate-tech-farm-data/
  - Climate FieldView Privacy Statement. https://climate.com/en-us/legal/privacy-statement-faq.html
  - Ag Data Transparent. https://www.agdatatransparent.com/
  - Ag Data Transparent Principles. https://www.agdatatransparent.com/principles
  - AgFunder News. *John Deere Obtains Ag Data Transparent Certification*. https://agfundernews.com/john-deere-obtains-ag-data-transparent-certification
  - US Government Accountability Office (2024). GAO-24-105962.