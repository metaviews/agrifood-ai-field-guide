# Regional Scans — July 2026

**Status.** Three regional extensions to `scans/2026-07-initial.md`. Read together they update the initial scan's claim about geographic balance.

**Scope.** Canada (priority — presenter's location), China (priority — sectoral scale and policy intensity), Global South and Indigenous sovereignty (priority — the framing that IPES-Food named as missing from dominant scans).

**Method.** Same as the initial scan: substantive reading of foundational and critical references, naming of currents, working matrices, gaps and contested claims extended.

**Cutoff.** Active in the last year. Items from 2024 are included where they're load-bearing for current framing.

---

## 1. Canada

Canada gets a dedicated section because: the presenter is Canadian, the policy frame is *currently in formation* (the federal AI strategy was launched June 2026 under PM Carney), and the agricultural sector has substantive Canadian-specific activity not visible in OECD-EU framings.

### 1.1 The currents in Canada specifically

**Mainstream / institutional / industry-aligned:** Canada's *AI for All* strategy (June 2026) names agriculture and agri-food as a priority sector. EMILI and CAPI (industry + policy institute) have a joint submission to ISED that lays out the case for agricultural AI as a strategic asset. The Croptimistic example (precision soil mapping) is held up in the strategy itself. Coverage focuses on productivity, market competitiveness, and adoption barriers.

**Critical / rural-policy lens:** Suresh Neethirajan (*Policy Options*, January 2026) — *Canada's AI strategy stops at city limits*. The most important Canadian critical voice we've found. Argues that rural AI deployment is *already happening* without governance, oversight, or policy attention; that "AI policy assumes an urban world" (reliable broadband, stable power, central oversight); and that Canadian food production AI is governed by vendor contracts, not public standards.

**Indigenous data sovereignty / federation work:** The Collaboratory for Indigenous Data Governance (Arizona, but with Canadian relevance through shared frameworks — CARE Principles, IEEE 2890-2025). The Canadian Ag Data Framework recommendation in EMILI/CAPI explicitly names Indigenous co-design as a required step.

**Cross-border regulatory relevance:** The FTC-Deere settlement (July 8, 2026) is US-domestic, but Deere's Canadian operations are affected; the broader Canadian right-to-repair conversation is referenced in the FTC coverage as having Canadian parallels.

### 1.2 Canada-specific activity matrix (sector × AI class)

Concentrated in cells that the initial scan marked as moderate globally. Canada is *not* a frontier sector in agricultural AI capability; it's an early-mover in policy framing.

| Sector position \ AI class | Predictive ML | Computer vision | Robotics / autonomy | Generative AI / LLMs | Decision-support | Sensors + ML |
|---|---|---|---|---|---|---|
| Inputs | — | — | — | — | — | ○ |
| On-farm production (open field) | ● | ● | ○ | — | ● | ● |
| On-farm production (protected) | ● | ● | ○ | — | ● | ● |
| Animal production | ●● | ● | ○ | ○ | ● | ●● |
| Post-harvest / storage | ● | ● | — | — | ○ | ● |
| Processing | ● | ● | ○ | — | ○ | ● |
| Distribution / retail | ○ | — | — | — | ○ | ○ |
| Consumption | — | — | — | — | — | — |
| Waste / recovery | ○ | ○ | — | — | — | ○ |

**Observations specific to Canada:**
- **Animal production cell is strongest** (Neethirajan, EMILI/CAPI). Reflects Canada's livestock-heavy agricultural economy and the high data density of dairy/poultry operations.
- **Generative AI / LLMs is essentially empty.** AgriLLM is not Canadian. No substantive Canadian equivalent visible.
- **Distribution / retail and Consumption rows are thin to absent.** Canada's retail concentration (Loblaws, Sobeys, Metro) is doing AI work, but it's not surfaced in our sectoral scan sources.
- **Connectivity is the binding constraint** (Neethirajan, EMILI/CAPI). 78% rural broadband access; structural barrier to any AI that depends on real-time data or remote updates.

### 1.3 Canada-specific contested claims and gaps

Extend the initial scan's contested claim list:

- **C-007 (new):** "Canada can become a global leader in agricultural AI." (EMILI/CAPI framing.) Counter: Canada captures 3% of global agtech VC vs 55% for the US; the gap may not be closable without structural intervention.
- **C-008 (new):** "Canada's existing AI governance framework covers agricultural deployment." Counter (Neethirajan): regulatory absence, not deregulation; AI in food production is governed by vendor contracts.
- **G-006 (new):** `consumption × all × all` is a near-total gap in Canadian-specific sources. Strong candidate for a first content unit.
- **G-007 (new):** `inputs × all × all` for Canada specifically. Not surfaced anywhere in our Canadian sources — likely an evidence problem rather than an absence of activity.

### 1.4 What the Canada scan asks of the methodology layer

When a talk is built for a Canadian audience, the substantive anchor has to be Canadian: the AI for All strategy, Neethirajan's critique, the EMILI/CAPI industry position, the agricultural data framework debate. Not the EP study. The methodology layer (not yet built) needs to make this geographic substitution straightforward — the same talk frame, different substrate.

---

## 2. China

China is a priority because: scale of deployment, scale of policy ambition, the National Smart Agriculture Action Plan is one of the most concrete national strategies globally, and Chinese AI deployment in agriculture often runs ahead of published analysis.

### 2.1 The currents in China specifically

**Mainstream / institutional / state-aligned:** China's National Smart Agriculture Action Plan (2024-2028), published by MARA October 2024, is the load-bearing institutional document. Targets: 30% informatization rate of agricultural production by end of 2026, 32% by end of 2028. Specific instruments: "One-Map" agricultural land platform, smart farms / smart pastures / smart fisheries, demonstration farms in Zhejiang (including the "Fuxi Farm" model).

**Industry / vendor side:** Alibaba's "ET Agricultural Brain" (now several years old but still operationally significant), JD Farm, China Shengmu Organic Dairy, drone manufacturers (DJI agricultural line). The DCZ study (Chai Li, January 2025) gives the most substantive academic-industry survey.

**Critical / equity lens:** The digital divide is named explicitly in Chinese-language and English-language sources (Ding 2025 on three-tier digital divide; multiple Chinese rural-sociology studies). The structural tension — capital-intensive automation vs. smallholder farm structure (avg ~0.65 ha per USDA report) — is repeatedly flagged.

**Cross-border data friction:** China's data regulations make cross-border data exchange difficult and limit foreign company role in launching smart agriculture products (USDA report). This is policy-relevant because it shapes what Chinese AI in agrifood looks like in practice: state-aligned, domestically scaled, less internationally interoperable.

### 2.2 China-specific activity matrix (sector × AI class)

The Chinese activity distribution is meaningfully different from the global OECD-EU picture. Drones / UAVs are a distinct AI technique class that China's scan highlights but our taxonomy doesn't yet separate.

| Sector position \ AI class | Predictive ML | Computer vision | Robotics / autonomy | **Drones / UAV** | Generative AI / LLMs | Decision-support | Sensors + ML |
|---|---|---|---|---|---|---|---|
| Inputs | ● | ○ | ○ | — | — | ● | ● |
| On-farm production (open field) | ●● | ●● | ● | **●●** | ○ | ●● | ●● |
| On-farm production (protected) | ● | ●● | ○ | ○ | — | ●● | ●● |
| Animal production | ●● | ●● | ○ | ○ | — | ● | ●● |
| Post-harvest / storage | ● | ●● | ● | — | — | ● | ● |
| Processing | ● | ●● | ● | — | — | ● | ●● |
| Distribution / retail | ● | ● | ○ | — | ○ | ● | ● |
| Consumption | ○ | ○ | — | — | ○ | ○ | ○ |
| Waste / recovery | ○ | ● | ○ | — | — | ○ | ○ |

**Observations specific to China:**
- **Drones / UAVs are a real, separate axis in China** — agricultural drone deployment (DJI, XAG) is at a scale and maturity not visible elsewhere. The global scan matrix had this folded under "robotics / autonomy"; for China it warrants its own cell.
- **On-farm production is densest in China** across ML, vision, drones, and sensors — concentrated investment visible.
- **Animal production row is strong** (Shengmu Organic Dairy case in DCZ study; pig facial recognition per NYT 2019; aquaculture per BioMar Chile).
- **Distribution / retail row is filled in** — Chinese e-commerce platforms (Pinduoduo, JD, Alibaba) have agrifood AI work that doesn't appear in our other regional scans.

### 2.3 The China scan asks a structural question of the taxonomy

**Question:** Should **drones / UAVs** be promoted from a sub-class of robotics to its own AI technique class? China-side evidence strongly suggests yes. The implication is that the global taxonomy should be revised in the next iteration to either:

- separate drones / UAVs as their own class, or
- explicitly sub-class robotics / autonomy into "ground robotics" and "aerial robotics"

Either way, this is a *taxonomy revision* the regional scan has surfaced, not just a gap.

### 2.4 China-specific contested claims and gaps

- **C-009 (new):** "China's smart agriculture deployment is a model for other developing economies." (DCZ study implicit framing.) Counter: capital-intensive automation may not transfer to other smallholder contexts; the smallholder / capital-intensity tension is unresolved in the Action Plan itself.
- **C-010 (new):** "The Action Plan will reach its 30% informatization target by end of 2026." USDA report explicitly notes no new resources or funding were announced — gap between plan and resourcing is structural.
- **G-008 (new):** Cross-border data governance interoperability. The Chinese regulatory environment shapes what Chinese agrifood AI looks like globally; this is a structural gap in any global framework that doesn't account for it.
- **G-009 (new):** `all × generative-AI-and-LLMs × extension-and-advisory` *for China specifically*. Chinese rural LLM deployment is reported in fragments but no consolidated source.

---

## 3. Global South and Indigenous data sovereignty

This section is positioned as the *counterweight* to the OECD-EU heavy lift of the initial scan. The IPES-Food report named the framing gap; this section tries to fill some of it.

### 3.1 The currents

**CGIAR / Global South institutional:** CGIAR's *AI Sparks a New Agricultural Revolution in the Global South* (April 2025 Nairobi event, May 2025 publication) and *AgriLLM* (launched June 2025 with UAE's AI71) are the load-bearing references. Notable because CGIAR explicitly centres smallholder farmers, extension agents, and local-language deployment (Bihar, Kenya, Mexico examples). AgriLLM targets a working chatbot prototype by COP30 (November 2025 / 2026 cycle).

**Indigenous data sovereignty:** The CARE Principles for Indigenous Data Governance (Carroll et al. 2020, ~1800 citations) are the foundational document. The Collaboratory for Indigenous Data Governance produces an active stream. Most directly relevant for our purposes: the *Safeguarding Traditions, Enhancing Agriculture* policy brief (January 2026) — explicitly on Indigenous Data Sovereignty in AI-centered agriculture, produced by an Indigenous-led steering committee representing 8 Tribal Nations.

**Sovereignty standardisation:** IEEE 2890-2025 (Provenance of Indigenous Peoples' Data) — newly published. Notable because it gives the sovereignty movement its first formal standard.

**Practitioner / co-design:** SIKIA (Swahili AI for listening to farmers), Artemis (Tanzania low-cost phenotyping + voice data), AIEP (Gates Foundation / Digital Green / Viamo) — these are the *design pattern* references. They show what AI deployment looks like when built from the smallholder side rather than the vendor side.

### 3.2 The pattern this surfaces

CGIAR's framing of AgriLLM — "tailored for people who rarely feature in the AI revolution" — is the closest thing to an explicit counter-frame to the dominant vendor-led deployment narrative. The design pattern is consistent across the CGIAR / Global South institutional work: voice interfaces, low-bandwidth / feature-phone compatibility, local languages, feedback loops to farmers, women-specific design attention.

The Indigenous sovereignty work surfaces a parallel but distinct frame: data *about* Indigenous peoples, lands, knowledge systems must be governed by those peoples. CARE Principles are people- and purpose-oriented, in contrast to FAIR Principles which are data-oriented. The combination of FAIR + CARE is now the standard pairing.

### 3.3 Global South / Indigenous contested claims and gaps

- **C-011 (new):** "AI will close the smallholder productivity gap." Counter: digital divide literature (Ding 2025; *Down to Earth* 2026; Harvard SIR 2025) names the gap itself as the binding constraint. AI may widen the gap if it requires infrastructure smallholders don't have.
- **C-012 (new):** "AgriLLM-style extension LLMs serve smallholders." Counter: LLM training data is uneven across languages and crops; the "smallholder centred" framing is sometimes operational and sometimes aspirational. Need to verify per deployment.
- **G-010 (new):** Indigenous-led AI agrifood deployment. The CARE / IEEE 2890 framework exists; the operational deployments from Indigenous data sovereign institutions are sparse. The gap is real and worth tracking.
- **G-011 (new):** Generative AI / LLMs deployed with *local Indigenous languages* in agrifood advisory. Most current work uses major national languages; Indigenous-language LLM work is rare.
- **G-012 (new):** Climate-adaptation AI specifically for smallholder and pastoralist contexts. CGIAR's TAPAS platform (satellite-based tracking) is one entry point; broader coverage is thin.

### 3.4 What the Global South / Indigenous scan asks of the field guide

The "standing on existing work" commitment in VISION.md requires that the field guide's critical voice not be dominated by Western academic-policy critique. The IPES-Food material is foundational but it has its own blind spots — Indigenous data sovereignty is a distinct current with its own framework (CARE / IEEE 2890) that should be tracked separately.

**Specifically:** when the field guide populates the `critical-voice` tag, it should distinguish at minimum:
- IPES-Food / food-sovereignty framing
- Indigenous data sovereignty framing (CARE / IEEE 2890)
- Right-to-repair framing (FTC-Deere / PIRG / Australian reforms)
- Digital divide / equity framing (Ding 2025, *Down to Earth*, Harvard SIR)

These overlap but they aren't the same lens and they point to different practical interventions.

---

## 4. Cross-regional observations

### 4.1 The actor list has expanded meaningfully

Beyond the initial scan's actors:

**Canadian / North American critical:**
- Suresh Neethirajan (Dalhousie) — rural-AI policy critique
- EMILI — Manitoba agtech / industry / policy
- CAPI — Canadian Agri-Food Policy Institute

**Canadian industry / government:**
- Croptimistic Technology (soil mapping, named in AI for All strategy)
- ISED, AAFC, NRC, PrairiesCan, Employment and Social Development Canada
- Palette Skills (digital agriculture microcredentials)
- Pan-Canadian Smart Farm Network
- CAAIN (Canadian Agri-Food Automation and Intelligence Network)
- Protein Industries Canada

**Chinese institutional / vendor:**
- MARA (Ministry of Agriculture and Rural Affairs)
- Alibaba Cloud / ET Agricultural Brain
- JD Farm / JD.com agritech
- China Shengmu Organic Dairy
- DJI Agriculture / XAG (drone manufacturers)
- China Agricultural University (academic anchor)
- IEDA (Institute of Economic Development and Agriculture, MARA-aligned)

**Global South institutional:**
- CGIAR (system-wide)
- Alliance of Bioversity and CIAT
- IRRI, CIMMYT, ICARDA, ICRISAT, CIP, IITA, AfricaRice, ILRI
- Digital Green, Viamo, GIZ (AIEP partners)
- AI71 (UAE — AgriLLM partner)
- Google Research Africa

**Indigenous data sovereignty:**
- Collaboratory for Indigenous Data Governance (Arizona)
- Global Indigenous Data Alliance (GIDA)
- Indigenous Peoples Data Collective
- IEEE 2890 working group

### 4.2 The freshness / sources table — extended

| Source | Type | Tag | Last verified | Notes |
|---|---|---|---|---|
| Neethirajan (2026) — *Canada's AI strategy stops at city limits* | Critical commentary (Canada) | claim | 2026-01 | Canadian rural-AI critique. |
| EMILI/CAPI (2025) — ISED Public Consultation submission | Industry / policy institute | claim | 2025-10 | Canadian industry position. |
| Government of Canada (2026) — *AI for All* strategy | Government strategy | claim | 2026-06 | Federal strategy. Verify policy sections annually. |
| US FTC (2026) — Deere settlement | Regulatory action | example | 2026-07 | Re-verify annually. |
| Chai Li (2025) — *AI applications in Chinese agriculture* (DCZ) | Academic / industry survey | framework | 2025-01 | China-side scan. |
| USDA-FAS (2024) — National Smart Agriculture Action Plan report | Government reporting | claim | 2024-11 | Verifies the Plan document. |
| CGIAR (2025) — *AI sparks a new agricultural revolution* | Institutional / case collection | example | 2025-05 | Anchors Global South institutional. |
| CGIAR / AI71 (2025) — AgriLLM | Project / initiative | example | 2025-07 | Re-verify post-COP30. |
| Collaboratory for Indigenous Data Governance (2026) — *Safeguarding Traditions, Enhancing Agriculture* | Policy brief | framework | 2026-01 | Indigenous agrifood IDSov. |
| IEEE 2890-2025 Provenance of Indigenous Peoples' Data | Standard | framework | 2025 | Verify deployment cases annually. |
| CARE Principles (Carroll et al. 2020) | Framework | framework | 2020, framework (2-year) | Foundational. |

### 4.3 What the regional scans do to the initial scan

The initial scan's geographic balance claim — "OECD/EU-heavy, Global South under-represented" — is now partially corrected. The regional scans together:

- **Strengthen the Canadian picture** (now well-covered; country-specific gaps and contested claims named)
- **Strengthen the Chinese picture** (institutional, vendor, and structural-friction lenses)
- **Strengthen the Indigenous / Global South picture** (CGIAR institutional, IDSov framework, IEEE standard, practitioner design patterns)

What's *still* under-represented:
- Sub-Saharan Africa beyond CGIAR's institutional framing
- South Asia (India — Pinduoduo's agritech work, India's farm data debates)
- Latin America (Brazilian precision agriculture is substantial; the IPES-Food Farmers' Seed Network has Latin American presence but our technical scan doesn't)
- MENA beyond UAE's AI71 partnership

These are the next-pass regional scan candidates.

### 4.4 What the regional scans ask of the taxonomy

Concrete revisions the next taxonomy iteration should consider:

1. **Promote drones / UAVs** to its own AI technique class, or sub-class robotics / autonomy into ground / aerial.
2. **Add a `language / literacy profile` tag** on extension and advisory entries — low-literacy / feature-phone / voice-first design is a different design pattern than smartphone-app deployment.
3. **Distinguish `sovereignty` tag into sub-tags**: food sovereignty (IPES-Food framing) vs Indigenous data sovereignty (CARE / IEEE framing) vs right-to-repair (FTC-Deere / Australian reforms) vs digital equity / divide.
4. **Add `capital-intensity` axis or cross-cutting tag** — smallholder / industrial / research-scale. This was flagged in the initial taxonomy as missing; the China and Global South scans make it more load-bearing.
5. **Add `policy-instrument` tag** for entries that are primarily regulatory, fiscal, or strategy instruments (AI for All strategy, China Action Plan, EMILI/CAPI recommendations, IEEE 2890).

These are revisions, not a rewrite. The initial taxonomy's three primary axes survive; the cross-cutting tags and first-class objects need to absorb the regional evidence.

---

## 5. Sources

This scan reads in full or in substantial part:

- Neethirajan, Suresh (2026). *Canada's AI strategy stops at city limits.* Policy Options.
- EMILI and CAPI (2025). *Growing Canada's AI Leadership By Supporting Innovation in Agriculture and Agri-Food.* ISED Public Consultation submission.
- Government of Canada (2026). *Canada's National Artificial Intelligence Strategy: AI for All.*
- US Federal Trade Commission (2026). *FTC, States Secure Settlement with Deere & Company.*
- Chai Li (2025). *Artificial intelligence in Chinese agriculture: Applications and prospects.* DCZ Expert Study.
- USDA-FAS (2024). *National Smart Agriculture Action Plan Published.* GAIN Report CH2024-0148.
- CGIAR (2025). *AI sparks a new agricultural revolution in the Global South.*
- CGIAR (2025). *AgriLLM: How CGIAR is developing an AI-powered agricultural advisory service for global South.*
- Collaboratory for Indigenous Data Governance (2026). *Safeguarding Traditions, Enhancing Agriculture: Indigenous Data Sovereignty as a Tool in the Age of AI Centered Agriculture.*
- Collaboratory for Indigenous Data Governance (2026). Various news / webinar pages including IEEE 2890.

Cross-references to sources from the initial scan remain valid and are not re-listed here.