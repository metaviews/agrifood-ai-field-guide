# US Academic Research Cycle — July 2026

**Status.** New regional cycle. Adds the US academic research layer to the field guide, which has previously been vendor-dominated on the US side. Distinct from prior scans in *actor type*: the existing US coverage is overwhelmingly vendor (Bayer Climate FieldView, John Deere See & Spray, Indigo Ag, AGCO PTx, Apeel RipeTrack, Taranis). This cycle adds the academic / federally-funded institutional layer.

**Scope.** US academic research at the intersection of AI and agrifood, with four layers:

1. **The NSF/USDA-NIFA National AI Research Institutes cluster** — the defining US institutional-academic structure for agrifood AI. Five institutes with USDA-NIFA funding that touch agrifood directly: AgAID (WSU), AIIRA (Iowa State), AIFARMS (Illinois), AI-CLIMATE (U Minnesota Twin Cities), AI-LEAF (Penn State, Colorado State, and partners).
2. **USDA institutional response** — the FY2025-2026 USDA AI Strategy, the Chief Data and AI Officer role, the AI Compliance Plan for OMB M-25-21, and adjacent agency activity.
3. **Cooperative Extension + Land-grant system** — the 2026 Extension Foundation National AI Report (released May 14, 2026) is the most current systematic land-grant perspective; ExtensionBot and MERLIN as early AI tools.
4. **Substantive analytical / critical voices** — US-based academic researchers with substantive analytical contribution (not citation volume): Michael Carolan (Colorado State sociology of digital agriculture) and the Cornell Atkinson Indigenous data sovereignty cluster (Steven Manaʻoakamai Johnson, Michael Charles). Distinct from international voices (Bronson at Ottawa, Tzachor at Cambridge / Reichman) that the field guide references but does not classify as US-based.

**Why this scan now.** The vendor-sweep work in `scans/2026-07-regional-industry-na-eu.md` and the data-cycle work in `scans/2026-07-data-cycle.md` foregrounded the US-vendor and US-data-infrastructure layers. The academic / federally-funded research layer was a structural gap. Filling it matters because:

- The US is the world's largest single investor in public agricultural AI research (NSF + USDA-NIFA combined ~$500M across the AI Institutes network).
- The NSF/USDA-NIFA institute model is *distinctive* — no parallel exists at this scale in Canada (Mila + IVADO are Quebec-only, multi-institute but not NSF-structured), EU (INRAE is national, not multi-institute), or elsewhere.
- The Land-grant + Cooperative Extension system is a *distinctive US deployment infrastructure* that other countries lack at equivalent scale. Its 2026 National AI Report (released May 14, 2026) is current and substantive.
- Without the academic layer, US coverage in the field guide is asymmetric — vendor reality + data infrastructure, but no federally-funded research institutional layer.

**Method.** Substantive reading of NSF press releases, USDA-NIFA project pages, USDA AI Strategy document, Extension Foundation 2026 National AI Report, and select PI CVs / publication lists. Cross-reference to existing units (especially `napdc-national-ag-producer-data-cooperative.md` for the academic-lead cooperative framework and `indigenous-data-sovereignty.md` for the IDSov framework the Cornell Atkinson work extends).

**Cutoff.** Active in the last 18 months. 2024 vintage acceptable for foundational positioning; 2025-2026 documents used where load-bearing.

---

## 1. The NSF/USDA-NIFA National AI Research Institutes cluster

NSF + USDA-NIFA have jointly funded a **National AI Research Institutes** network since 2020. The network is now 25+ institutes across the US, with **five institutes funded by USDA-NIFA** that focus substantively on agrifood:

### 1.1 AgAID — USDA-NIFA Institute for Agricultural AI for Transforming Workforce and Decision Support

- **Lead:** Washington State University (WSU)
- **Co-leads / partners:** Oregon State University, University of Maryland, Iowa State University, and others
- **Funding:** $20M over five years (2021 launch, currently in second-cycle continuation)
- **Approach:** "Adopt-adapt-amplify" methodology — adopt AI methods from other sectors, adapt to agricultural operations, amplify via farmer-engaged deployment
- **Focus areas:** Labor (agricultural workforce), water (irrigation / drought), weather and climate change, decision support, robotics-enabled agriculture
- **Specific signature work:** Apple-harvesting robotics (Manoj Karkee lab, now at Cornell), irrigation decision support, tree-fruit and specialty-crop AI
- **Lead PI:** Ananth Kalyanaraman (WSU, computer science; Director)

**Unit in this cycle:** `units/agaid-wsu-institute.md`.

### 1.2 AIIRA — AI Institute for Resilient Agriculture

- **Lead:** Iowa State University
- **Funding:** $20M over five years (Sep 1, 2021 — Aug 31, 2028; AFRI Competitive Grant, $20M total)
- **Lead PIs:** Baskar Ganapathysubramanian (Mechanical Engineering) and Arti Singh (Plant Breeding)
- **Approach:** AI-driven digital twins that model plants at unprecedented scale; crop breeding, plant phenotyping, climate adaptation
- **Focus crops:** Soybean, corn (per USDA-NIFA classification)
- **Signature work:** Plant stress phenotyping via computer vision, deep learning for crop yield prediction, multimodal data fusion, soybean nodule acquisition pipeline (SNAP), UAS-based plant phenotyping
- **Workforce emphasis:** Native American bidirectional engagement and farmer programs (per project summary)

**Unit in this cycle:** `units/aiira-iowa-state-institute.md`.

### 1.3 AIFARMS — Artificial Intelligence for Future Agricultural Resilience, Management, and Sustainability

- **Lead:** University of Illinois Urbana-Champaign (Center for Digital Agriculture)
- **Co-leads / partners:** multi-institutional
- **Funding:** $20M over five years (2021 launch; NSF + USDA-NIFA joint funding)
- **Lead PI:** Vikram Adve (computer science; PI)
- **Approach:** Foundational AI advances applied to agriculture; emphasis on diverse workforce
- **Research thrusts:** Autonomous farming, livestock efficiency, environmental resilience, soil health, technology adoption
- **Signature outputs:** PigLife dataset (May 2026, computer vision benchmark for pig tracking), CropWizard (generative AI for agricultural decision-making), EarthSense (terramechanics + ML)
- **Notable personnel:** Madhu Khanna (Associate Director; AAAS Fellow 2025; agricultural economics + AI adoption)

**Unit in this cycle:** `units/aifarms-illinois-institute.md`.

### 1.4 AI-CLIMATE — AI Institute for Climate-Land Interactions, Mitigation, Adaptation, Tradeoffs and Economy

- **Lead:** University of Minnesota Twin Cities
- **Co-leads / partners:** multi-institutional; USDA-NIFA funding
- **Funding:** $20M over five years (May 2023 launch as part of round 3 of the AI Institutes network)
- **Approach:** Advance foundational AI by incorporating knowledge from agriculture and forestry; climate-smart agriculture and forestry; rural economies
- **Focus:** Greenhouse gas estimation, carbon accounting on farms and forests, field-to-market decision support, carbon markets
- **Workforce emphasis:** Rural and urban AI workforce diversification

**Unit in this cycle:** `units/ai-climate-minnesota-institute.md`.

### 1.5 AI-LEAF — AI Institute for Land, Economy, Agriculture & Forestry

- **Lead:** Pennsylvania State University (Penn State)
- **Co-leads / partners:** Colorado State University (Carolan-affiliated), University of Minnesota, and others
- **Funding:** ~$20M (2023 launch; USDA-NIFA funding)
- **Approach:** Foundational AI informed by land economy, agriculture, forestry sciences
- **Focus:** Flood forecasting (per UMN collaboration), water resources, land use, climate adaptation
- **Personnel link:** Colorado State partners include Michael Carolan's Food Systems Institute

**Unit in this cycle:** `units/ai-leaf-penn-state-institute.md`.

### 1.6 The cluster as a whole — what it is and isn't

**What the cluster is:**
- The single largest public investment in agricultural AI research in any country
- Multi-institutional, multi-state, multi-crop focus
- Federally-funded with substantive PI autonomy
- Structured around US land-grant universities — the institutions that have done US agricultural research for 150+ years

**What the cluster isn't:**
- Not a deployment infrastructure. The AI Institutes are *research* programs with translation arms; deployment happens via Cooperative Extension, vendor partnerships, and farmer cooperatives, not directly from the Institutes.
- Not all-encompassing. The cluster focuses on row crops, specialty crops, livestock, climate adaptation. It does not substantively cover post-harvest, processing, retail, or consumer-facing AI (those layers are dominated by private-sector deployment).
- Not consensus on AI governance. Each Institute has its own approach; the network doesn't enforce a unified framework for AI ethics, data rights, or sovereignty. Worth naming as a structural observation.

---

## 2. USDA institutional response

### 2.1 USDA FY2025-2026 AI Strategy

**Released:** ~February 2024 (under Biden administration, signed by Secretary Tom Vilsack and Chief Data & AI Officer Christopher Alvares)

**Status (July 2026):** Operationally in effect; Alvares continues as USDA Chief Data and AI Officer (now CDO/CAIO combined role). The strategy document is publicly available on USDA.gov.

**Five goals:**
1. AI Governance and Leadership
2. Workforce Readiness for AI
3. AI Infrastructure and Toolset
4. Data Readiness and Access
5. Ethical, Equitable, and Responsible Use of AI

**Three operational emphases:**
- Generative AI for operational efficiency (drafting, summarising, content generation)
- Geospatial data and computer vision for monitoring crop health, forest health, wildfire, natural disasters
- Predictive analytics for production, food safety, sustainability, animal disease, drought/flood/pest response

**Substantive content:** This is the first comprehensive USDA AI strategy. It acknowledges the USDA Data Strategy FY2024-2026, the FY22-26 USDA Strategic Plan, the FY23-26 USDA Science and Research Strategy, and the AI Compliance Plan for OMB Memorandum M-25-21. Critically, the strategy foregrounds *workforce development* and *AI literacy* — distinct from a purely technical strategy.

**Critical context (per memory hygiene):**
- The strategy is Biden-era. The Trump administration (2025-2027) has not formally rescinded it, but the policy environment is uncertain.
- The strategy foregrounds "responsible AI" and ethics; whether implementation matches the framing is a separate empirical question. Worth naming this gap.
- The strategy does not substantively engage Indigenous data sovereignty or smallholder / farmworker concerns; it is centered on the US commodity / large-farm frame.

**Unit in this cycle:** `units/usda-fy25-26-ai-strategy.md`.

### 2.2 USDA-NIFA funding structure (broader)

- **National Institute of Food and Agriculture (NIFA)** — the USDA extramural research agency that funds the AI Institutes and Cooperative Extension
- **AFRI (Agriculture and Food Research Initiative)** — the primary competitive grants program; the AI Institutes are funded through AFRI's AI Institutes program code (A7303)
- **New Technologies for Ag Extension (NTAE)** — the funding mechanism behind the Extension Foundation's work; the 2025-2026 Extension Foundation AI reports are partly funded by NTAE grant 2023-41595-41325

---

## 3. Cooperative Extension and the Land-grant system

### 3.1 The 2026 Extension Foundation National AI Report

**Released:** May 14, 2026 (update of December 2025 original)

**Authors:** Aaron Weibe (Extension Foundation), Dhruti Patel (University of Maryland Extension), David Warren (Oklahoma State University), Mark Locklear (Extension Foundation)

**Method:** National AI landscape assessment + virtual focus groups + in-person convenings + Joint Council of Extension Professionals national conference engagement (Feb 2026, Savannah GA). Five-phase engagement total.

**Funding:** USDA-NIFA New Technologies for Ag Extension (NTAE), grant 2023-41595-41325.

**Three central findings:**
1. **People** — workforce readiness is the most urgent need
2. **Trust** — public trust must be protected through transparency, human oversight, and clear standards
3. **Coordination** — shared data, common platforms, and aligned policies needed to prevent fragmentation across the Land-grant system

**Two named early AI tools in the Cooperative Extension context:**
- **ExtensionBot** — AI-enabled information discovery within Cooperative Extension
- **MERLIN** — AI for data stewardship, attribution, and human-centered content review

**Why this matters for the field guide:**
- The Land-grant system is a *distinctive US deployment infrastructure* not paralleled in Canada (no equivalent of Cooperative Extension at this scale), EU (the EU has research institutes but not the same deployment-extension linkage), or elsewhere.
- The 2026 Report is the most current systematic account of *what Extension agents, specialists, and educators actually experience* when AI arrives at the land-grant level.
- The "people, trust, coordination" framing is substantive — it's not vendor hype, it's practitioner reality.

**Unit in this cycle:** `units/extension-foundation-2026-national-ai-report.md`.

### 3.2 The broader Land-grant system (context, not unit)

- 112 land-grant institutions (1862, 1890, 1994 institutions — historical Black colleges and tribal colleges respectively)
- Cooperative Extension System delivers ~35,000 county / regional agents in nearly 3,000 US counties
- Federal investment: Hatch Act (1887) and Smith-Lever Act (1914) provide statutory federal funding
- The Land-grant model is the deployment infrastructure that the AI Institutes need to translate research into farmer-facing tools

---

## 4. Substantive analytical / critical voices (US-based)

### 4.1 Michael Carolan — Colorado State University

- **Title:** Professor of Sociology; Co-Director, Food Systems Institute, Colorado State University
- **Background:** 300+ peer-reviewed publications; substantive analytical work on digital agriculture sociology and ethics
- **Key US-based works:**
  - *"Who and what gets recognized in digital agriculture: Agriculture 4.0 at the intersectionality of (Dis)Ableism, labor, and recognition"* (Agriculture and Human Values, 2024)
  - *"Digital agriculture killjoy: Happy objects and cruel quests"* (Sociologia Ruralis, 2023)
  - *"The perilous promise of productivity: Affective politics"* (New Media & Society, 2023)
- **Why his work matters for the field guide:** Carolan is the most substantive *US-based sociological critical voice* on digital agriculture. His work is *not* citation-volume theatre; it engages substantively with the labor, recognition, and disability dimensions of agricultural AI deployment that mainstream reports (USDA AI Strategy, the AI Institutes' communications) avoid.
- **Limitation:** Carolan's work is critical-sociological; he is not a researcher who deploys AI. He is the analytical counterweight to vendor and institute framing.

**Unit in this cycle:** `units/carolan-colorado-state-critical.md`.

### 4.2 Cornell Atkinson Indigenous Data Sovereignty cluster

- **Lead researchers:**
  - **Steven Manaʻoakamai Johnson** — Assistant Professor, Cornell University (Ashley School of Global Development and the Environment; Faculty Fellow, Cornell Atkinson Center for Sustainability; Affiliate Faculty, American Indian and Indigenous Studies Program). Kanaka ʻŌiwi (Native Hawaiian) scholar.
  - **Michael Charles** — Citizen of the Tohono O'odham Nation; Cornell CALS; computational modeling for Indigenous data sovereignty
- **Distinguishing work:** Community-defined research atlases, statistical summaries, Indigenous data sovereignty frameworks. The cluster extends the GIDA / CARE Principles operational work into US land-grant institutional context.
- **Why this matters for the field guide:** The existing `units/indigenous-data-sovereignty.md` covers the IDSov framework (CARE Principles, IEEE 2890-2025) and operational anchors in Peru, Aotearoa, Mexico. The Cornell Atkinson cluster is the *US land-grant institutional anchor* for IDSov work — a substantively different cell (academic US-anchored vs Indigenous-led operational in other regions).

**Unit in this cycle:** `units/cornell-atkinson-idsov-cluster.md`.

### 4.3 Other US-based PIs with substantive work (named in units but not standalone units)

- **Manoj Karkee** — Cornell University (formerly WSU). Agricultural automation and robotics lab. Substantive work on apple-harvesting robotics, computer vision for specialty crops. Cited 8,855.
- **Vikram Adve** — University of Illinois. PI of AIFARMS, CropWizard PI. Generative AI for agricultural decision-making.
- **Baskar Ganapathysubramanian** — Iowa State. Co-PI of AIIRA. Digital twins, plant phenotyping.
- **Ananth Kalyanaraman** — Washington State. Director of AgAID. AI methods for agriculture.

These PIs are *named within their institute units* rather than getting standalone units. The corpus discipline: institute-level units cover the institutional structure; individual-PI units would risk over-populating the field guide with figures that get absorbed into their institutes anyway.

---

## 5. What this cycle adds to the taxonomy

### 5.1 Coverage gaps filled

- **G-001 (inputs × all × all — vendor activity high but under-surfaced)** — partially addressed by AIIRA (digital twin plant breeding, plant phenotyping work).
- **G-009 (China rural LLM)** — not addressed; remains a gap. Worth noting explicitly.
- **G-013 (Caribbean)** — not addressed; remains a gap.
- **G-017 (US row-crop autonomous machinery operational scale beyond Deere)** — partially addressed by AIFARMS autonomous farming and AgAID specialty-crop robotics. Still under-surfaced for deployment scale.
- **G-018 (US specialty crop AI at scale)** — partially addressed by AgAID (apple-harvesting robotics, irrigation decision support).
- **G-043 (Indigenous-led AI deployment in agrifood)** — partially addressed by Cornell Atkinson cluster (US academic IDSov work) but remains substantially a gap (operational deployment, not academic).

### 5.2 New gaps surfaced

- **G-046 (new — academic-to-deployment translation gap in US agrifood AI).** The AI Institutes are research programs; deployment happens through Cooperative Extension and vendor partnerships. The translation pathway is structurally under-studied in the field guide. Worth surfacing.
- **G-047 (new — federal AI strategy continuity under administration change).** The USDA FY2025-2026 AI Strategy is Biden-era; the Trump administration's posture is uncertain. The freshness of this unit will require checking.
- **G-048 (new — Indigenous-led AI deployment at US land-grant scale).** Cornell Atkinson is the *anchor*; substantive operational deployment at scale is not yet documented in the field guide.
- **G-049 (new — Cooperative Extension AI tool maturity).** ExtensionBot and MERLIN are early; deployment outcomes not yet documented.

### 5.3 New contested claims surfaced

- **C-036 (new — NSF/USDA-NIFA AI Institutes deliver deployment outcomes).** Counter: the Institutes are research programs with translation arms; deployment scale is structurally modest compared to research output. Worth naming as a real, ongoing question.
- **C-037 (new — US Cooperative Extension can translate AI research to producer adoption at scale).** Counter: workforce readiness is the limiting factor (per the 2026 Extension Foundation report itself).
- **C-038 (new — Substantive analytical critique of US ag AI is leading academic work).** Counter: Bronson (Ottawa) and Tzachor (Cambridge / Reichman) are the highest-cited responsible-AI-in-ag authors; Carolan is the leading US-based critical voice but with a distinctively sociological not governance-analytic framing.

### 5.4 Cross-cutting tag analysis

After this cycle, the v4 taxonomy's `actor-type: academic` value is populated more substantively. The Institutes collectively exercise the `actor-type: academic` value across multiple purposes (yield optimisation, input reduction, climate adaptation, governance). The Extension Foundation exercises a `multi-type` ecosystem (academic + state-adjacent + USDA-NIFA funded). The Cornell Atkinson cluster exercises `academic` for IDSov work. The Carolan unit exercises `academic` for `critical-civil-society`-adjacent critique (Carolan is academic; his work has critical-voice posture).

---

## 6. What this cycle does NOT cover

- **US AI deployment in processing / retail / consumer-facing** — dominated by vendors (Apeel, Loblaw for Canadian context, IBM, Blue Yonder, etc.). Already covered in existing units.
- **US large-scale row-crop deployment at operational scale beyond vendor reports** — partially addressed by AIFARMS autonomous farming but substantive operational data is thin. G-017 partially filled; remains a gap.
- **US AI deployment in animal production at scale (poultry, beef, aquaculture)** — AIFARMS PigLife is the substantive research contribution but operational deployment scale not documented. Worth surfacing as next-cycle gap.
- **US agricultural labour and AI** — Torrie (Ontario dairy), Fratantuono (Belgian vineyard) are existing producer voices; Carolan covers the sociological dimension. US farmworker-specific AI deployment is thin in the field guide. Worth noting.
- **Federal AI strategy continuity under administration change** — addressed in critical context on USDA AI Strategy unit but not as a standalone unit. G-047.

---

## 7. Source list

Read in full or substantial part during this cycle development:

- NSF. *NSF partnerships expand National AI Research Institutes to 40 states*. July 29, 2021. https://www.nsf.gov/news/nsf-partnerships-expand-national-ai-research-institutes-40
- NSF. *NSF announces 7 new National Artificial Intelligence Research Institutes*. May 4, 2023. https://www.nsf.gov/news/nsf-announces-7-new-national-artificial-intelligence
- USDA-NIFA. *AIIRA Project Page*. https://training-portal.nifa.usda.gov/web/crisprojectpages/1027030-ai-institute-aiira-ai-institute-for-resilient-agriculture.html
- AgAID Institute. https://agaid.org/
- AIFARMS Institute. https://aifarms.illinois.edu/
- AI-LEAF Institute. https://aiinstitutes.org/institute-ai-leaf/
- USDA. *FY2025-2026 AI Strategy*. https://www.usda.gov/sites/default/files/documents/fy-2025-2026-usda-ai-strategy.pdf
- USDA. *AI Compliance Plan for OMB Memorandum M-25-21*. https://www.usda.gov/sites/default/files/documents/usda-ai-compliance-plan-fy-2025-2026.pdf
- Extension Foundation. *2026 National AI Report*. https://extension.org/2026/05/14/extension-foundation-releases-updated-2026-national-ai-report-with-new-workforce-level-insights/
- Steven Manaʻoakamai Johnson CV, February 2026. https://www.manaoakamai.com/uploads/1/1/6/4/116485505/smjohnson-cv_feb2026.pdf
- Michael Carolan profile. https://www.researchgate.net/scientific-contributions/Michael-Carolan-2227629932

Cross-references to existing units preserved as change history.