# Archetype 05 — Critical lens: Indigenous sovereignty and the structural critique

**A critical-lens deep-dive for academic and policy audiences.**

## Header

| Field | Value |
|---|---|
| **Spine** | critical-lens |
| **Audience** | academic (especially STS, political-economy, food-sovereignty, Indigenous-studies), policy advisors working on AI governance / data rights, civil-society researchers |
| **Duration** | 60 min (45 min talk + 15 min Q&A) |
| **Depth** | specialist (full taxonomy fluency; the audience knows critical agrifood-tech discourse) |
| **Region emphasis** | Global framework, with operational anchors in Peru (ONAMIAP-IWGIA Indigenous Navigator), Canada (FNIGC, CARE Principles co-development), Aotearoa New Zealand (Te Mana Raraunga), and Mexico |
| **Stance** | curious, critical, collaborative — with explicit critical-voice foregrounding. Not anti-AI; structural-critique-first. |

## What this talk is for

The audience already knows that agrifood AI raises structural concerns about who captures value, who bears the cost, and whose knowledge counts. They're not looking for an introduction to the problem. They're looking for *the most rigorous framework for engaging it* — and Indigenous data sovereignty is the most rigorous framework the field guide carries. This talk walks them through the CARE Principles, IEEE 2890-2025, operational anchors, and the *structural critique* of agrifood AI that an IDSov lens foregrounds.

## Run-of-show

### 1. Opening — the framing that dominant scans miss (5 min)

**Frame.** IPES-Food (the International Panel of Experts on Sustainable Food Systems) has consistently named the gap in dominant agrifood-AI scans: structural questions about corporate concentration, smallholder dispossession, and Indigenous / food sovereignty are routinely absent from mainstream policy-oriented reports.

**Anchor.** `scans/2026-07-regional.md` (Global South / Indigenous sovereignty section), `scans/2026-07-regional-lac.md` (Latin America / Caribbean, where IT for Change / FIAN substantive critique sits).

**The single claim.** *Indigenous data sovereignty is the most rigorous existing framework for the structural critique of agrifood AI.* It is rigorous because it is operationalised (IEEE 2890-2025), substantively deployed (Indigenous Navigator Peru, AGUAPAN, Mila FLAIR), and articulated by Indigenous-led institutions (GIDA — Global Indigenous Data Alliance).

**Don't open with vendor examples.** This audience has heard them. Open with the framework.

### 2. Segment one — the CARE Principles (10 min)

**The framework.** Indigenous Data Sovereignty (IDSov) is the *right of Indigenous Peoples to own, control, access and possess data that derive from them, and which pertain to Nation membership, knowledge systems, customs, or territories.*

**The CARE Principles (Carroll et al. 2020, Gaborone):**
- **Collective benefit** — data ecosystems should enable Indigenous communities to derive benefit from their data
- **Authority to control** — Indigenous Peoples' rights and interests in their data are recognised
- **Responsibility** — those working with Indigenous data are accountable to Indigenous communities
- **Ethics** — Indigenous worldviews and rights are foregrounded in data work

**Provenance:**
- Drafted November 2018, International Data Week and Research Data Alliance Plenary, Gaborone, Botswana
- Co-leads: Stephanie Russo Carroll (University of Arizona) and Maui Hudson (University of Waikato, Aotearoa New Zealand)
- Citation count: 1,808 (Carroll et al. 2020, *Data Science Journal*)
- Translations: Spanish, Vietnamese, Māori, German, Khmer

**The "FAIR + CARE" framing.** CARE Principles were explicitly developed to *complement* the FAIR Principles (Findable, Accessible, Interoperable, Re-usable). Per GIDA: *"Existing principles within the open data movement (e.g. FAIR) primarily focus on characteristics of data that will facilitate increased data sharing among entities while ignoring power differentials and historical contexts."*

**Unit:** `units/indigenous-data-sovereignty.md`.

**Institutional mission quotes (anchor the framework):**
- GIDA mission: `quotes/institutional-mission-statements/care-principles-mission.md`
- GIDA "CARE Directs Us Home" communique: `quotes/institutional-mission-statements/gida-care-directs-us-home.md`
- IEEE 2890-2025 mission: `quotes/institutional-mission-statements/ieee-2890-mission.md`

### 3. Segment two — IEEE 2890-2025 (8 min)

**The operational standard.** IEEE 2890-2025 — *Provenance of Indigenous Peoples' Data* — was approved August 2025 after a five-year development process. It is the world's first global standard for the provenance of Indigenous data.

**What it does.** Operationalises the CARE Principles into industry specifications by detailing the process for describing and recording the *provenance* (origin and history of ownership) of data derived from Indigenous Peoples, lands, and waters.

**Format.** IEEE Recommended Practice — *industry specification, not binding regulation*. Worth knowing: this is a deliberate format choice. It allows the standard to be adopted voluntarily and to influence procurement, certification, and best practice without requiring state legislative action.

**Recognition.** GIDA recognised IEEE 2890-2025 as including the active participation of Indigenous members in the development process. This is not a courtesy mention — it's a substantive procedural claim about how the standard was built.

**Unit:** `units/indigenous-data-sovereignty.md`. Quote: `quotes/institutional-mission-statements/ieee-2890-mission.md`.

### 4. Segment three — operational anchors (12 min)

**This is where the framework becomes concrete.** Three operational deployments that move CARE Principles from articulation to community outcomes.

#### 4.1 Indigenous Navigator Peru (ONAMIAP-IWGIA, 2023-2025)

- **Lead organisations:** ONAMIAP (Organización Nacional de Mujeres Indígenas Andinas y Amazónicas del Perú) + IWGIA (International Work Group for Indigenous Affairs)
- **Funding:** European Union
- **Communities:** Quechua and Asháninka in Peru
- **Period:** 2023-2025

The Indigenous Navigator is a *community-led monitoring framework*. It's not an AI deployment — it's a methodology for Indigenous communities to gather, own, and use data about their own conditions. AI is one *potential* layer on top of Indigenous-owned data, not the entry point.

#### 4.2 AGUAPAN (Colombia)

- A network of Indigenous-led organisations in Colombia using community-led data infrastructure for land rights, biodiversity, and food sovereignty work.

#### 4.3 Mila FLAIR (Indigenous languages)

- The Mila FLAIR project is at the intersection of AI and Indigenous languages. Worth knowing because it's a *Canadian* Indigenous-led AI deployment anchored in language preservation. Distinct from the more extractive AI deployments in the field guide.

**Unit:** `units/indigenous-data-sovereignty.md` carries all three.

**Critical move.** Name what each operational anchor *does* and *what AI role it allows*. Indigenous Navigator is *AI-skeptical by design* — it centres Indigenous community ownership and treats AI as one tool among many, not the primary infrastructure. AGUAPAN is similar. Mila FLAIR is more AI-forward but still Indigenous-led and language-sovereignty-anchored.

### 5. Segment four — what the IDSov lens reveals about mainstream agrifood AI (12 min)

**The pivot.** Having established the IDSov framework, apply it to the mainstream deployments in the field guide. *What does the IDSov lens reveal that the vendor-sweep lens misses?*

#### 5.1 Vendor data capture

| Vendor | What they collect | What IDSov lens reveals |
|---|---|---|
| **Climate FieldView (Bayer)** | Agronomic, operational, equipment telemetry | Data aggregation across continents; Indigenous-knowledge-derived crops in some regions; no CARE-Principles-aligned provenance |
| **John Deere Operations Center** | Equipment telemetry | Same. Equipment is one layer; underlying agronomic context is another |
| **Taranis aerial imagery** | Leaf-level imagery across multi-continent operations | Imagery of Indigenous lands without provenance-tracking or CARE-aligned engagement |

**Unit:** `units/proprietary-farm-data.md`, `units/farm-data-ownership-critical.md`.

**The structural claim.** *The dominant agrifood AI data infrastructure does not engage with CARE Principles.* This is not a moral accusation; it is a structural observation. The standards exist (IEEE 2890-2025); the engagement is absent. The IDSov lens *names the gap*.

#### 5.2 The dark-data problem

**Unit:** `units/dark-data-agrifood.md`. The dark-data problem — data collected but not surfaced for broader use — has a specific IDSov dimension: *data about Indigenous lands, crops, water, and biodiversity that is collected by vendors and state agencies and not surfaced for Indigenous community use.* This is structurally darker than the standard dark-data problem because the *absence* is compounded by the *asymmetry of who controls the aggregation*.

#### 5.3 The cooperative alternative — limits

**Unit:** `units/joindata-netherlands.md`, `units/napdc-national-ag-producer-data-cooperative.md`. Worth naming honestly: the cooperative / commons alternative (archetype 04) is *not* the same as IDSov. Cooperative / commons is *member-controlled*; IDSov is *Indigenous-sovereign*. These are distinct frameworks with overlapping concerns but different operational logics. Conflating them — treating JoinData as an IDSov example — is a category error.

#### 5.4 State-stewarded substrates — limits, an East-Asia layer

**Unit:** `units/wagri-japan-agricultural-data-platform.md`, `units/india-digital-agriculture-mission-agristack.md`, `units/korea-smart-farm-innovation-valley-rda.md`. State-led DPI substrates and state-anchored clusters are a third structural layer worth surfacing in the IDSov lens. *These substrates do not engage with CARE Principles.* They are operational, they are deployed (WAGRI since April 2019; AgriStack since September 2024; Korea's Innovation Valley four sites since 2018), and they are widely cited in their respective national policy frames. But they are also *non-Indigenous-governed* state substrates: where they touch Indigenous lands (which is real, particularly in Japan's and India's rural contexts), they do so without provenance-tracking, without CARE-aligned engagement, and without benefit-sharing mechanisms. The IDSov lens identifies this as a parallel structural gap to the vendor-data-capture case. Worth naming because three of the corpus's largest state-stewarded substrates are exactly this — and the IDSov critique applies to them as well as to private vendors.

### 6. Segment five — the structural critique, named (5 min)

**Engage the structural critique head-on.** The IDSov lens reveals at least four structural problems in mainstream agrifood AI:

1. **Provenance opacity.** Mainstream AI training datasets do not document Indigenous-knowledge or Indigenous-land origins. IEEE 2890-2025 exists; adoption is voluntary; the dominant pattern is non-engagement.
2. **Aggregation without benefit-sharing.** Vendor-aggregated data creates value; the value flows to the aggregator; the Indigenous communities that generated the data do not share in it. CARE Principle 1 (Collective benefit) is the structural counter.
3. **Authority erosion.** Even when individual Indigenous farmers consent to data collection, the aggregated model outputs erode community-level authority over knowledge systems. CARE Principle 2 (Authority to control) is the structural counter.
4. **Ethics gaps.** Mainstream agrifood AI ethics work focuses on farmer data rights (e.g. Ag Data Transparent certification), not on Indigenous data sovereignty. CARE Principles 3-4 (Responsibility, Ethics) are the structural counter.

**A fifth structural problem the IDSov lens names — labour replacement under ageing-farmer imperative.** Worth surfacing for any audience that already accepts the IDSov frame: the East-Asia cluster pattern observation (`units/japan-korea-agrifood-ai-pattern.md`) names that Japan's agrifood AI deployment is *ageing-farmer-targeted industrial automation*. The Yamaha FAZER / RMAX deployment (`units/yamaha-fazer-agricopter-drone-japan.md`) substitutes unmanned helicopters for human crop-dusters; the Spread Techno Farm deployment (`units/spread-techno-farm-vertical-lettuce-japan.md`) substitutes indoor automation for human labour. *Both operate against the labour-shortage imperative of Japan's ageing-farmer context, which is also the demographic context of most Indigenous communities in OECD countries.* The IDSov lens sees this not just as labour economics but as *community continuity*: an automated-rice-paddy operation does not transfer knowledge to the next generation in the way a human-piloted crop-duster pilot does. Worth naming because the corpus's East-Asia work makes this framing available.

**Engage the limits.** IDSov is a real framework but it's *not a panacea*. It is rigorous about *Indigenous data*; it is less developed on *Indigenous AI deployment* (Mila FLAIR is one model; there are not many). It is a *framework*, not a deployment catalogue.

### 7. Close — what an IDSov-aligned agrifood AI would require (3 min)

**The forward claim.** An IDSov-aligned agrifood AI would require, at minimum:
1. **Provenance tracking** as default (IEEE 2890-2025 adoption)
2. **Community-led deployment** rather than vendor-led with Indigenous consent
3. **Benefit-sharing mechanisms** built into the data infrastructure (not as add-ons)
4. **Standards harmonisation** between CARE Principles and the dominant FAIR data infrastructure

These are not impossible; they are *underdeveloped*. The standards exist (CARE, IEEE 2890-2025); the harmonisation work hasn't been done at scale.

**The single sentence.** *Indigenous data sovereignty is the most rigorous existing framework for the structural critique of agrifood AI. It is operationally deployed, internationally recognised, and substantively incomplete in its harmonisation with the dominant data infrastructure. The work of closing that gap is the work of the next decade.*

## Q&A handles

- *"Is IDSov only relevant to Indigenous communities?"* → The CARE Principles articulate concerns about power differentials and historical context that *extend beyond* Indigenous contexts (e.g. smallholder farmer dispossession, Global South agricultural communities). But the *operational* framework is specifically Indigenous-led. The structural critique applies more broadly; the specific framework is IDSov.
- *"What about China?"* → China's rural revitalisation strategy (`units/china-deepening-scan-rural-revitalization.md`) is a state-led data infrastructure that does not engage IDSov. Worth knowing: state-stewarded data infrastructure in non-Indigenous contexts raises parallel structural concerns without the IDSov-specific framework.
- *Q&A "Is IPES-Food / Civil Eats aligned with IDSov?"* → IPES-Food's critique is parallel — corporate concentration, smallholder dispossession — but uses a different analytical framework (food sovereignty rather than data sovereignty). Civil Eats is journalism, not a framework. Worth distinguishing: parallel critique, different frameworks.
- *"What about Brazil beef supply-chain AI?"* → The Brazilian beef AI cluster is corpus's first cluster-with-tension example (added July 19 2026). Three vendor units (`units/minerva-foods-brazil-cattle-traceability.md`, `units/jbs-blockchain-indirect-supplier-monitoring.md`, `units/marfrig-agrorobotica-brazil-cattle-carbon.md`) plus the cluster-critique unit (`units/brazil-beef-supply-chain-deforestation.md`). Substantive claim: *AI traceability is deploying at meaningful scale in Brazilian beef (Minerva leather 200,000-animal SBCert milestone; JBS $9M Pará investment; Marfrig AGLIBS pilot), but critical-voice reporting demonstrates persistent supply-chain embedded-deforestation post-commitment (Mighty Earth April 2026 finding 1,400 ha Amazon-deforestation-linked cattle in JBS's 2025 supply chain).* This is *not* an IDSov case (the relevant actors are Brazilian beef processors and the Brazilian cattle supply-chain — Indigenous communities affected at the deforestation-edge are downstream-of-Indigenous-lands at scale, but the cluster-critique is structurally about *commitment-vs-reality*, not IDSov per se). For an IDSov frame on Brazilian beef, the Monsalve-Suárez / Seufert / FIAN / IT for Change *Big Tech Takeover of Food Systems in Latin America* (2022) is the corpus's Latin American civil-society critical-voice anchor; see `scans/2026-07-regional-lac.md`.
- *"What about Chile / Canada seed AI?"* → The Chile-Canada seed-AI cross-border cluster (added July 19 2026) is corpus's first cross-border cluster-pattern unit. Two anchor units (`units/chile-pucv-seed-quality-ai.md` — Chilean counter-season seed-quality ML deployment via PUCV × LEM System with FONDEF IT funding; `units/chile-canada-seed-ai-cross-border.md` — meta-pattern unit) plus the existing Canadian units (`bayer-climate-fieldview.md`, `croptimistic-swat-cam.md`, `farm-data-ownership-critical.md`, PMC Azhar 2025 historical review). Substantive claim: *Canada's role is genetic-tooling + breeding-pipeline origination (canola pan-genome consortium, Bayer Crop Science multinational pipeline); Chile's role is physical counter-season production + operator-accuracy AI. The Canada-Chile corridor is structurally multinational-corporate-pipelined (Bayer Crop Science, Syngenta, BASF); Indigenous-led or cooperative-led seed AI is largely absent from this corridor.* This contrasts with the corpus's IDSov framework: the Chile-Canada corridor exemplifies where *the IDSov lens would apply if explicit cross-border-genetic-resource-sovereignty work existed* — and that work has not been substantially developed in the corpus yet.

## Freshness check

- CARE Principles: Carroll et al. 2020; substantively stable, but new translations and adoption work continue. Re-verify biennially.
- IEEE 2890-2025: August 2025 approval. Adoption status will evolve annually.
- Indigenous Navigator Peru: 2023-2025 period. Verify outcomes.
- Mila FLAIR: verify project status annually.
- IPES-Food reports: substantive ongoing publication. Verify the most recent IPES-Food report relevant to agrifood AI / data sovereignty.

## Substitutions

- **If audience is food-sovereignty-focused rather than data-sovereignty-focused**, swap segments 2-3 for the food-sovereignty framing rooted in IPES-Food work; keep segments 4-5 (operational anchors, structural critique).
- **If audience is policy / governance**, swap segment 5 (structural critique applied to vendor data) for segment 5 (governance responses: IEEE 2890-2025 adoption, federal procurement standards, Canada-specific governance under AAFC / Canadian Digital Service).
- **If audience is Latin America / Caribbean focused**, lead with the LAC regional scan (`scans/2026-07-regional-lac.md`); the operational anchors (Indigenous Navigator Peru, AGUAPAN) become the spine.

## What this archetype is doing in the methodology

This is the *critical-lens talk* — the one a presenter gives when the audience is asking for the structural critique, not the survey. The IDSov framework is the load-bearing choice because it is *both rigorous and operational*. It is rigorous because it is articulated by Indigenous-led institutions, peer-reviewed, and substantively cited. It is operational because it has been deployed in community settings (Peru, Colombia, Aotearoa, Canada) and codified into IEEE 2890-2025. The talk does not equivocate: *Indigenous data sovereignty is the most rigorous existing framework for the structural critique of agrifood AI.* That claim is defensible, and the talk earns it through concrete deployments and structural analysis. The 60-min duration matters because the framework needs to be built carefully and applied carefully; rushing the IDSov framework into a 20-min slot would distort it.