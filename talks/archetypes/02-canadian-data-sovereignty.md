---
title: 'Archetype 02 — Who''s your data working for'
archetype_number: 2
---

# Archetype 02 — Who's your data working for

**A data-sovereignty talk for Canadian farmer co-ops and mixed public.**

## Header

| Field | Value |
|---|---|
| **Spine** | data-sovereignty |
| **Audience** | farmer co-ops (Ontario-anchored), mixed public with some producer presence |
| **Duration** | 45 min (30 min talk + 15 min Q&A — Q&A is load-bearing for this talk) |
| **Depth** | working (introduce taxonomy terms in context; the audience knows farming, may or may not know the AI policy landscape) |
| **Region emphasis** | Canada (Ontario-anchored), with EU-Netherlands comparison and US comparison |
| **Stance** | curious, critical, collaborative — but with explicit critical-voice on data capture |

## What this talk is for

The audience is producer-facing or producer-adjacent. They are suspicious of vendor marketing but not anti-technology. They want to know: *if I adopt this AI tool, what happens to my data, and what choices do I actually have?* This talk walks them through the data-sovereignty question concretely, anchored in Canadian and Dutch examples, and ends with practical decision criteria.

## Run-of-show

### 1. Opening — the question on the table (4 min)

**Frame.** Don't open with vendor horror stories or with cooperative boosterism. Open with the question: *when you adopt a precision-ag tool — Climate FieldView, John Deere Operations Center, AGCO PTx, CLAAS connect — what happens to the data your equipment and your fields generate?*

**Anchor.** Andrew Nelson (5th-generation farmer, Garfield WA, 7,500 acres wheat/canola/lentils/garbanzos/green peas): *"I've read the terms and conditions. But giving some of that information to the person that I'm having to buy a three-quarter of a million-dollar machine from just doesn't sit quite right."* `quotes/producers/nelson-andrew-proprietary-data-reluctance.md`. Civil Eats, March 23, 2026.

**Move.** This is the practitioner reality, not the theoretical concern. Nelson uses these tools; he just withholds some field-level data because of contract concerns. That's a *workable* posture, not a refusal.

### 2. Segment one — what data is being collected (8 min)

**Map the field.** Three categories of data generated on a working farm:
- **Equipment telemetry** — engine hours, fuel, location, software versions (collected automatically by equipment)
- **Agronomic data** — yield maps, soil samples, application rates, scouting notes (collected when you feed them in)
- **Operational data** — contracts, prices, supplier info (collected when you transact)

**Anchor units:** `units/proprietary-farm-data.md`, `units/bayer-climate-fieldview.md`, `units/john-deere-see-and-spray.md`, `units/agco-ptx.md`.

**Critical move.** Each vendor collects different combinations. Climate FieldView is *agronomic-centric*. John Deere is *equipment-centric*. AGCO PTx is *brand-agnostic retrofit*. CLAAS connect is *equipment-centric, EU-led*. The data-flow posture differs by vendor; the audience should not treat "vendor data" as a monolith.

### 3. Segment two — the contract layer (8 min)

**The pivot.** Even when a vendor claims "you own your data" — Bayer's Brian Leake says exactly this — the contract terms determine what you can practically do with it. The unit `units/proprietary-farm-data.md` distinguishes:
- **Contract statement of ownership** — vendor says farmers own their data
- **Operational control** — vendor controls aggregation, anonymised pools, derived model outputs

**Anchor quote (vendor framing).** Brian Leake (Bayer spokesperson): *"Farmers own their data. They always have and they always will. The data that they enter into Climate FieldView remains theirs."* `quotes/industry-executives/leake-brian-bayer-farmers-own-data.md`. Use as the vendor-side framing.

**Counter-anchor (practitioner reality).** Andrew Nelson's quote above. Use as the practitioner-side reality. The audience should see the gap between contract language and contract practice.

**Ag Data Transparent certification.** Mention: this is an industry-led contract-transparency certification (`units/proprietary-farm-data.md`, `quotes/institutional-mission-statements/ag-data-transparent-principles.md`). It's a real response to the contract-concern problem — but it's *industry-led*, so its critique of the industry is bounded by what the industry will accept.

### 4. Segment three — the cooperative alternative (10 min)

**The structural choice is not binary.** Cooperation and state-stewardship are two distinct paths that each address data capture. Worth naming the four major data-stewardship models the corpus carries — three of them are below.

**The Dutch example — cooperative-governed substrate.** JoinData is the world's first agricultural data cooperative. Founded 2017 in the Netherlands. Independent, non-profit. Mission: *"any farmer can pool, control, connect and share data — in a safe, secure and fair way — with agribusiness and innovation partners, and to make sure the data and benefits flow back to the farmer."*

**Concrete scale (per Development Gateway / USAID case study, Feb 2023):**
- **16,000+ farmer members**
- **260 parties** sharing data via JoinData (fodder suppliers, accountants, etc.)
- **70 parties** using data for the farmer
- **€50/year** farmer membership fee
- Companies pay fees to JoinData for "data transport" — JoinData reinvests in platform

**Founding coalition.** FrieslandCampina (largest Dutch dairy cooperative), Agrifirm, LTO Nederland (Dutch farmers' union), EDI-Circle (accountants), Rabobank (cooperative bank). The Dutch cooperative cultural tradition is structurally important.

**Unit:** `units/joindata-netherlands.md`.

**Anchor quotes (producer voice, Dutch side).**
- Djessie Donkers (ZLTO advocacy): the vendor-fragmentation problem JoinData solves. `quotes/producers/donkers-djessie-joindata-vendor-fragmentation.md`.
- Mathé van den Bosch (dairy farmer, JoinData member): the milk-data case. `quotes/producers/van-den-bosch-mathe-joindata-milk-data.md`.

**Critical move (do not skip).** Name what JoinData is *not*:
- Not a data repository (it's a sharing platform; doesn't store farmer data)
- Not a vendor (non-profit, farmer-controlled)
- Not global yet (Netherlands-only as of source date; international expansion is an ambition)
- Not a substitute for Ag Data Transparent (different layer — control vs contract transparency)

**The Canadian context.** Worth knowing: there is currently **no Canadian JoinData equivalent** in the field guide. `napdc-national-ag-producer-data-cooperative.md` is a US federally-funded framework-development cooperative, not yet deployed. This is a gap, not a finding. Worth naming to the audience — *the cooperative alternative exists; the Canadian equivalent does not (yet).*

**The wider context — three data-stewardship models compared.** The data-sovereignty question isn't binary. Three operational models the audience should know about:

| Model | Initiation | Funding | Operational control | Who benefits? |
|---|---|---|---|---|
| **JoinData (NL)** — `units/joindata-netherlands.md` | Industry-led (FrieslandCampina et al.) | Membership fees + company fees | **Farmer-controlled cooperative** | Members directly |
| **WAGRI (Japan)** — `units/wagri-japan-agricultural-data-platform.md` | State-led (NARO + MAFF) | State budget (Japan MAFF oversight) | **State-stewarded public platform** | Industry access via API; farmers via vendor-built apps |
| **AgriStack / DAM (India)** — `units/india-digital-agriculture-mission-agristack.md` | State-led (Gov of India) | State budget (₹2,817 crore / $321M outlay) | **State-stewarded Digital Public Infrastructure** | Federation across state-agriculture-departments |

These three models sit on a continuum — JoinData is member-governed; WAGRI is state-stewarded but vendor-accessible; AgriStack is fully state-stewarded and federation-cascaded. The Canadian conversation should know all three exist and ask: *what's the right governance layer for the Canadian context?* Per `units/japan-korea-agrifood-ai-pattern.md`, the East-Asia (Japan/Korea) cluster offers a state-stewarded pattern worth understanding even if Canada picks a different one.

**South-Asia cross-reference — Korea's state-anchored cluster.** Korea's Smart Farm Innovation Valley (`units/korea-smart-farm-innovation-valley-rda.md`) is a fourth operational pattern: state-anchored cluster programme *with vendor participation*. Four sites (Sangju, Gimje, Milyang, Goheung) under MAFRA's *Act on Fostering and Supporting Smart Farming* with a 30%-smart-farming-by-2027 statutory target. This is *not* a data-stewardship model — it's a deployment-cluster model — but it shows Korea's response to the data-capture question: state-anchored cluster, vendor participation, young-farmer recruitment. Different answer than Canada's; worth naming.

### 4b. Segment four-b — the Canadian binding constraint (4 min, added cycle)

**The structural observation.** For Canadian producers adopting AI tools, the data-sovereignty question *runs on connectivity that may or may not be there*. The federal AI SME funding layer (RAII) is scaling; the federal rural connectivity layer (UBF) is not renewing. Without surfacing this, the talk pretends the data-sovereignty question can be settled independently of the connectivity question. It cannot.

**RAII scaling ($200M → $500M).** The Regional Artificial Intelligence Initiative is the federal AI SME funding layer. Per *AI for All* (June 2026), RAII scales from $200M (Budget 2024) toward $500M, delivered through seven Regional Development Agencies (PrairiesCan's $33.8M share is the only publicly disclosed RDA-level share). RAII is the lever that's pulling *up*. Unit: `units/raii-canada-ai-adoption-programme.md`.

**Universal Broadband Fund — non-renewal.** Wire Report (industry source, May 27 2026): "Ottawa will not renew its multi-billion dollar funding program designed to connect every household to high-speed internet by 2030." ISED confirmed June 5 2026 that it will not raise the 50/10 Mbps minimum service standard.

**The Auditor General of Canada baseline (2021, still the operating reference):** 90.9% national broadband coverage, but only **42.9% on First Nations reserves** and 59.5% in rural and remote areas. First Nations reserves are at less than half the national rate.

**The binding-constraint framing.** RAII scaling without UBF renewal means the AI SME funding layer reaches farms whose connectivity layer is contracting. Federal AI adoption support and rural connectivity support are out of phase. Producers looking at adoption need to ask: *will the connectivity be there next year?*

**DFO's 551-FTE reduction (added cycle — sets up segment 5's Canadian anchor).** DFO faces a $54.47M (2026-27), $101.91M (2027-28), $193.82M (2028-29) spending reduction / 551-FTE decrease by 2028-29. Three active Pacific salmon AI pilots — Chumputer (deep-learning CNNs for salmon-scale age reading), computer-vision salmon migration counter at Sproat/Stamp River fish ladders, Factoid Finder (NLP for watershed planning) — are positioned as the digital modernization counterweight. *AI is being deployed in part to substitute for reduced FTE capacity rather than to augment it.* Unit: `units/dfo-pacific-salmon-ai.md`.

**Talk-ready claims.**
- Federal AI SME funding scales ($200M → $500M); rural connectivity funding does not renew (UBF May 2026).
- First Nations reserves coverage is 42.9% — less than half the national 90.9% — and ISED won't raise the 50/10 Mbps standard.
- DFO's three Pacific salmon AI pilots are the digital modernization counterweight to a 551-FTE reduction. AI is substituting for human capacity, not augmenting it.
- For Canadian producers, the data-sovereignty question runs on the connectivity layer; that layer is the binding constraint the talk should name.

**Critical move (speak it).** This is not an anti-AI observation. It's an observation about *the conditions under which the data-sovereignty question is meaningful*. A producer adopting Climate FieldView or JoinData needs both an adoption funding layer and a connectivity layer; one without the other doesn't produce sovereignty, it produces symptom-management.

**Anchor units.** `units/raii-canada-ai-adoption-programme.md`, `units/northern-canada-can-ai-2026.md` (CanNor Inuvik Tech Society "only recently gained reliable, high-speed connectivity" language), `units/dfo-pacific-salmon-ai.md`.

**Archetype cross-link.** Adoption-diagnosis (archetype 03) treats this as the binding-constraint diagnosis; this archetype treats it as the binding-constraint framing for the data-sovereignty decision. Same evidence, different use.

### 5. Segment four — Canadian context: Haven Greens and the question of control (5 min)

**The Canadian anchor.** Haven Greens (King City, Ontario) is Canada's first fully automated AI-powered greenhouse. Unit: `units/haven-greens.md`. It's a *closed-loop proprietary farm + open consumer retail integration* — a *mixed* data-governance posture (per v4 taxonomy).

**The cross-border Canadian-context addition (added July 19 2026).** Canada's seed-AI pipeline has substantial cross-border structural connection to Chile — Canada's *genetic-tooling + breeding-pipeline origination* (Bayer Crop Science canola hybridisation, International Canola Pan-genome Consortium 2019-, Croptimistic SWAT CAM, PMC Azhar 2025 *From Classical Breeding to AI* historical review) operates alongside *Chilean counter-season production + operator-accuracy AI* (PUCV × LEM System, FONDEF IT funded, 38,000-ton Chile seed export context). The full Canada-Chile cross-border cluster pattern is the corpus's **first cross-cutting seed-AI cluster pattern unit** (`units/chile-canada-seed-ai-cross-border.md`), pairing the existing Canadian anchor surface (`bayer-climate-fieldview.md`, `croptimistic-swat-cam.md`, `farm-data-ownership-critical.md`) with the Chilean counterpart (`chile-pucv-seed-quality-ai.md`). For Canadian-context talks on AI-and-data-sovereignty, *this cluster-pattern unit gives substantive cross-border genetic-resource-sovereignty material that the previous CAN-only focus did not surface*.

**Anchor quote.** Jay Willmot (Haven Greens founder / CEO) on local demand. `quotes/industry-executives/willmot-jay-haven-greens-local-demand.md`. Use this to anchor the Canadian food-sovereignty framing — a Canadian-controlled AI deployment with local-market orientation is structurally different from a US/EU vendor's Canadian deployment.

**Critical move.** Haven Greens is a Canadian founder running Canadian infrastructure for Canadian consumers. That's a *different data posture* than a multinational vendor selling into Canada, even when the technology is comparable.

### 6. Close — practical decision criteria (5 min)

**Frame.** This is not a talk that ends with "use a cooperative." It ends with decision criteria for the producer in the room.

**Four questions for any AI tool adoption:**
1. *What categories of data does this tool collect — equipment, agronomic, operational?*
2. *In whose hands does the aggregated data end up — yours, the vendor's, a third party's?*
3. *Can you export the data in a usable format if you stop using the tool?*
4. *Is there a cooperative / commons alternative in your sub-sector?*

These are the four working questions of the data-sovereignty spine. They are how the talk earns its keep.

## Q&A handles

This talk has substantive Q&A time. Anticipated questions and the units they map to:

- *"What about FCC / Root AI?"* → `units/root-ai.md` — FCC's free generative AI extension assistant for Canadian farmers. Worth naming: this is *not* a data cooperative, it's a generative AI service from a Crown corporation. Different model, different questions.
- *"What about AgExpert (FCC)?"* → named in `scans/2026-07-canada-cycle-fcc.md`. Crown corp's farm management software — data posture worth asking FCC directly about.
- *"Is JoinData replicable in Canada?"* → `units/joindata-netherlands.md` carries a contested-claim: *Data cooperatives are a global alternative to vendor capture* (C-029). Counter: cultural fit matters; replication requires cooperative tradition. Worth naming this to the audience as a *real* question, not a settled answer.
- *"What about my John Deere data?"* → Ag Data Transparent certification, John Deere Operations Center (`units/proprietary-farm-data.md`).
- *"What about state-led substrates like WAGRI or AgriStack?"* → `units/wagri-japan-agricultural-data-platform.md`, `units/india-digital-agriculture-mission-agristack.md`. State-stewarded DPI is *not* the same as cooperative-governed substrate; the data-right posture is different (state-stewarded for both, farmer-owned for JoinData). Worth naming the structural distinction.

## Freshness check

- JoinData figures (16,000+ members) are Feb 2023; verify on annual cadence. Likely higher in 2026.
- Haven Greens is May 2026 source; confirm deployment is still operating.
- FCC Root AI launched July 2026; verify still offered.
- Nelson quote is March 2026; current.
- RAII / UBF framing (added cycle): RAII $200M → $500M trajectory per *AI for All* (June 2026); UBF non-renewal per Wire Report (May 27 2026); ISED 50/10 Mbps decision confirmed June 5 2026. Re-verify if Budget 2027 or *AI for All* update lands; the 90.9% / 42.9% Auditor General baseline still references 2021 — check for an OAG 2026 update.
- DFO 551-FTE reduction (added cycle): per DFO 2026-27 Departmental Plan. Operational scale of three pilots not yet publicly documented (G-323); re-verify at next DFO plan release.

## Substitutions

- **If audience is Quebec-anchored**, swap segments 4 and 5 for the Quebec cycle: Mila DISA project (`units/mila-quebec-agrifood.md`; note: DISA is Rwandan-deployment + Canadian-research-pipelined, not Canadian-deployment per G-331), Sollum (`units/sollum-sun-as-a-service.md`), Greater Montréal agtech cluster (`units/greater-montreal-agtech-cluster.md`). The cooperative alternative gets reframed: Quebec has Zone Agtech but no JoinData equivalent either.
- **If audience is academic**, deepen segment 3 with the open-source framework unit (`units/open-source-in-agrifood-framework.md`), Mozilla State of Open Source AI 2026 (`units/mozilla-state-of-open-source-ai-2026.md`).
- **If audience is policy / leadership**, lead with the Canadian 1.8% adoption figure and use data sovereignty as the *why it matters* — roughly archetype 03 with the sovereignty spine.

## What this archetype is doing in the methodology

This is the *producer-facing talk* — the one a presenter gives when the room is full of farmers or farmer-adjacent professionals. The data-sovereignty spine is the load-bearing decision: it's the analytical frame that *producer audiences* find immediately actionable. The Dutch comparison is structurally important — JoinData is the most concrete data-cooperative example in the field guide and it lets the audience see what an alternative looks like in practice, not just in principle. The close — four practical questions — is what makes the talk *useful* rather than *informative*.