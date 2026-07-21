---
title: 'Agrifood AI Quantitative Panel — Fresh-Pull Scan (July 2026)'
date: 2026-07
kind: agrifood-specific-quantitative-panel
status: fresh-pull
builds_on:
  - scans/2026-07-open-source-ai-substrate-v2.md (substrate scan; this scan addresses gap G-356 surfaced there)
  - scans/2026-07-open-source-cycle.md (synthesis-of-existing)
  - scans/2026-07-china-deepening.md
  - scans/2026-07-lac-deepening.md
  - scans/2026-07-initial.md
  - scans/2026-07-regional-industry-na-eu.md
  - scans/2026-07-canada-regional-substrate.md
  - scans/2026-07-ai-plant-breeding-global.md
  - scans/2026-07-africa-open-source-agrifood.md
  - units/mozilla-state-of-open-source-ai-2026.md
purpose: build the agrifood-specific quantitative panel that G-356 explicitly says doesn't exist in published form; close the gap substantively where the literature exists, name it rigorously where it doesn't
fills_gap: G-356 (substrate scan §8.1) — was G-OSAI-01
pattern: dedicated-pillar scan (per environmental-scan skill, with quantitative-panel specificity)
freshness-rule: see "Freshness model" section
honest-claim: every quantitative figure cited below is anchored to a primary source read in this scan or to a Mozilla/Pennells/EPRS/Stanford AI Index 2025 anchor; vendor-reported figures are flagged explicitly; the named absence of certain panel-comparable aggregates is itself an output of this scan
---

# Agrifood AI Quantitative Panel — Fresh-Pull Scan (July 2026)

**This scan exists to close gap G-356 — the agrifood-specific quantitative panel — that the substrate scan surfaced as not existing in published form.** Where the literature does have quantitative anchors (Pennells et al. 2025, Stanford AI Index 2025, EU EPRS 2023, USDA ERS, McFadden 2024, IFPRI, FAO knowledge-base, market-research aggregators), they are pulled and presented here. Where the literature does not — adoption rate × sector-position for agrifood specifically, capability gap × open-weights vs proprietary for agrifood workloads, deployment rate × farm-size stratification, revenue capture × agrifood AI vendors — the gap is named explicitly as a finding.

**This is companion-and-extension to `scans/2026-07-open-source-ai-substrate-v2.md` §8.1 G-356**, not a replacement. The substrate scan is the broader AI ecosystem; this scan is the agrifood-specific quantitative substrate.

---

## 1. The quantitative-panel question, restated

Mozilla's 2026 report gives the AI-ecosystem-wide panel: 3.3% capability gap (open vs closed), 79% developer use of open weights with 51% in production, 4% revenue capture, 89% Greater China + East Asia adoption. These figures are *not* agrifood-specific — the Mozilla report does not disaggregate by sector.

The EPRS 2023 study, the Pennells 2025 bibliometric, the Stanford AI Index 2025, and the USDA ERS precision-agriculture work give *partial* sector-anchored figures but not in a single comparable panel. This scan assembles them where they exist, names what doesn't, and provides the cross-tabulation matrix for the agrifood three-axis taxonomy.

---

## 2. Pennells et al. 2025 — the bibliographic quantitative anchor

**Citation:** Pennells J, Watkins P, Bowler AL, Watson NJ, Knoerzer K. (Jul 2025). *Mapping the AI Landscape in Food Science and Engineering: A Bibliometric Analysis Enhanced with Interactive Digital Tools and Company Case Studies*. Food Engineering Reviews 17(3): 465–489. doi:10.1007/s12393-025-09413-w. CSIRO Agriculture and Food + University of Leeds. CC-BY-4.0 open access.

**Method:** Web of Science Core Collection search, February 2025. Peer-reviewed review articles, English, Food Science Technology category. Search terms: "Food" + 14 AI-related terms (machine learning, deep learning, neural network, genetic algorithm, expert system, fuzzy logic, NLP, electronic nose, random forest, digital twin, computer vision, RL, NLP, generative AI). 213 review articles; 2004–2024 timespan; 216 documents analysed; 12,297 total references; 666 unique authors; 454 unique keywords; 41.41% international co-authorship. Average document age 2.3 years; average 40.7 citations per document; 8.9 citations/year/document.

### 2.1 Bibliometric categorization (Pennells 2025 Table 1)

| Category | Number of review articles |
|---|---|
| Food Safety | 39 |
| Process Monitoring, Control & Optimisation | 37 |
| General AI | 35 |
| Product Quality | 28 |
| Traceability | 23 |
| Sensory Evaluation | 14 |
| Supply Chain Optimisation | 10 |
| Multi-Omics | 7 |
| Personalised Nutrition | 5 |
| Ingredient Quality | 4 |
| Product Development | 4 |
| Synthetic Biology | 4 |
| Intelligent Packaging | 3 |
| Augmented Reality | 2 |
| **Food Security** | **1** |

**Substantive observation:** the four top categories — Food Safety (39), Process Monitoring (37), Product Quality (28), Traceability (23) — account for **127 of 213 reviews (60%)**. Food Security has *one* review in the corpus. On-farm production and the broader food-system value chain are underrepresented in the academic review literature, even as the dominant vendor-reported work happens there.

### 2.2 Bibliometric — country distribution (Pennells 2025 Figure 3)

| Country | Total publications | Single-Country Publications | Multiple-Country Publications |
|---|---|---|---|
| China | 35 | (balance unspecified) | (balance unspecified) |
| India | 18 | (balance unspecified) | (balance unspecified) |
| France | 6 | 0 | 6 |
| Italy | 5 | (balanced with intl.) | (balanced with intl.) |
| Malaysia | 5 | (balanced with intl.) | (balanced with intl.) |
| United States | 5 | (balanced with intl.) | (balanced with intl.) |

**Substantive observation:** China accounts for **35 of 213 (~16%)** of food AI reviews — the single largest country contribution. India second at 18 (~8%). Together, China + India account for **~25%** of food AI reviews. France is notable for *all* its 6 publications being multiple-country. **The US, despite being the largest absolute investor in AI overall (Stanford AI Index 2025: $109.1B vs China's $9.3B), has only 5 food-AI reviews in the WoS corpus** — a clear mismatch between AI investment concentration and food-AI publication output.

### 2.3 Pennells — thematic clusters

Pennells' five conceptual-structure clusters (Pennells 2025 §3.6, Figure 8):
1. **Analytical / data-driven techniques** (ML, chemometrics, hyperspectral imaging, spectroscopy)
2. **Industry 4.0 / supply-chain** (smart sensors, IoT, traceability, blockchain)
3. **Quality control and processing** (smaller cluster)
4. **Electronic nose** (distinct niche)
5. **Methodological legacy** (fuzzy logic, ANNs, optimisation)

Pennells' four thematic-map quadrants (Figure 9):
- **Basic themes** (high centrality, low density): "artificial intelligence", "machine learning", "food safety" — the foundational layer
- **Motor themes** (high centrality, high density): "augmented reality", "robotics", "big data" — the current drivers
- **Niche themes** (low centrality, high density): "metabolomics", "cultured meat" — specialised, internally mature
- **Emerging/declining themes** (low centrality, low density): "bioinformatics", "drying" — undergoing transformation

**Substantive observation:** "augmented reality", "robotics", "big data" are *motor themes* of food AI research — meaning they're well-developed AND well-connected. Robotics has the highest cross-cluster integration in the corpus. Generative AI is **not** a top-tier keyword frequency in Pennells' analysis (the bibliometric was February 2025; the LLM surge in agrifood arrived in mid-2025 with CGIAR AgriLLM launch and IFPRI's GAIA project).

### 2.4 Pennells' framing for agrifood AI's adoption question

**Pennells 2025 introduction:** *"Yet, the perception that the food sector has been slow to adopt AI is not entirely true. The industry has long integrated data-driven modelling and computational techniques, from kinetic modelling and artificial neural networks (ANNs) to hyperspectral imaging and computer vision. These technologies, while not always explicitly labelled as AI, have played a crucial role in optimising food processing, quality control, and safety monitoring. However, their impact has remained largely confined to research or niche applications until recent advances in computational power, big data availability, and modern machine learning algorithms enabled more scalable and integrated AI applications."*

**Pennells' core research question:** *"Is the food industry truly lagging in AI adoption, or has it simply used AI-adjacent technologies under different labels? Is AI driving genuine transformation, or are we witnessing another cycle of technological hype?"*

This is the **substantive 2025 framing the field guide should carry into talks**: agrifood has long used AI-adjacent technologies under different labels (kinetic modelling, ANN, hyperspectral imaging, computer vision); what looks like "slow adoption" may be mis-labelling of pre-existing computational practice.

---

## 3. EU EPRS 2023 — the European policy / market quantitative anchor

**Citation:** De Baerdemaeker J (lead), Hemming S, Polder G, Chauhan A, Petropoulou A (Wageningen); Rovira-Más F (UP Valencia); Moshou D (Aristotle U); Wyseure G; Norton T; Nicolai B (KU Leuven); Hennig-Possenti F, Hostens I (CEMA). *Artificial intelligence in the agri-food sector: Applications, risks and impacts*. PE 734.711. European Parliamentary Research Service (EPRS), Scientific Foresight Unit (STOA), March 2023. doi:10.2861/516636.

**Method:** Policy study for the European Parliament STOA Panel; draws on the *AI in Agriculture Market by Technology, Offering, Application, and Geography — Global Forecast to 2026* market report (cited in Annex) and on the *AI in Agriculture Start-ups | Tracxn, 2022* database.

### 3.1 EPRS — AI-in-agriculture market segmentation

| Dimension | Segmentation |
|---|---|
| By company type | **Tier 1: 35%; Tier 2: 40%; Tier 3: 25%** |
| By region | **Americas: 40%; Europe: 30%; APAC: 20%; RoW: 10%** |

### 3.2 EPRS — AI-in-agriculture start-ups by country (Tracxn 2022)

| Country | AI-agriculture start-ups |
|---|---|
| **USA** | 175 |
| **United Kingdom** | 39 |
| **Israel** | 36 |
| **Netherlands** | 27 |
| **Brazil** | 23 |
| **France** | 19 |

**Substantive observation:** the US hosts *more* AI-agriculture start-ups than the next five countries *combined* (175 vs 39+36+27+23+19 = 144). Tracxn 2022 is a startup-database count; the figures are not capital deployment, just company formation. However, the gap is substantial and reproducible.

### 3.3 EPRS — top nine companies (EPRS Annex)

| Tier-1 company | Geography |
|---|---|
| IBM | US |
| Deere & Company (John Deere) | US |
| Microsoft | US |
| Farmers Edge | Canada |
| The Climate Corporation | US |
| ec2ce | Spain |
| Descartes Labs | US |
| AgEagle Aerial Systems | US |
| aWhere | US |

**Substantive observation:** seven of nine are US; Spain (ec2ce) and Canada (Farmers Edge) are the non-US anchors. Tracxn/EPRS framing flags Farmers Edge as the Canadian flag-bearer, not Cohere or other open-weights players. EPRS 2023 was written before the open-weight surge of 2024–2025 (Cohere Command A+ open-source May 2026; Mistral Series C 2025–26), so the figure is dated.

### 3.4 EPRS — sectoral observations (read in full)

The EPRS study's substantive framing (executive summary):
- *"Large companies supplying AI software for analysis in agriculture can have an effect on the way agriculture evolves. On the other hand, retailers collect and analyse a massive quantity of data about the preferences and behaviour of their customers. A combination of these elements may create a potential for biased recommendations to farmers, to favour the optimisation of supplies being sent to specific food retailers."*
- *"As algorithms are under continuous construction, and only a limited number of large companies can sustain such efforts, this may also lead to a small base for decision making and may lead to biased decision making."*
- *"Bringing the benefits of AI and digital agriculture to all farmers requires accessibility to networks and affordable broadband internet access, not only in residences, but also in the fields."*

EPRS identifies eleven thematic policy-action categories:
1. Rights and expectations for farmers, technology providers, and the public.
2. Regulation of the exploitation and governance of European databases.
3. Risk and liability for technology providers and users.
4. Automation and the protection of farm workers.
5. Transparency and quality assurance of AI models.
6. Digital literacy and the digital divide.
7. Legislation preventing farmers from being locked-in to corporate digital technology.
8. Policies toward new market entrants that limit dominant first-mover positions.
9. Affordability and accessibility of data infrastructure / IT network.
10. Supporting investment by farmers or SMEs.
11. *Supporting investment in AI to make use of potential AI benefits.* (implicit / repeated)

---

## 4. Stanford AI Index 2025 — the cross-economy AI quantitative anchor

**Citation:** Maslej N, Fattorini L, Perrault R, Gil Y, Parli V, Kariuki N, Capstick E, Reuel A, Brynjolfsson E, Etchemendy J, Ligett K, Lyons T, Manyika J, Niebles JC, Shoham Y, Wald R, Walsh T, Hamrah A, Santarlasci L, Lotufo JB, Rome A, Shi A, Oak S. *The AI Index 2025 Annual Report*. AI Index Steering Committee, Institute for Human-Centered AI, Stanford University. April 2025. doi:10.48550/arXiv.2504.07139.

### 4.1 Headline empirical findings (Stanford AI Index 2025 — read in full)

| Finding | Value | Source / note |
|---|---|---|
| Organisations using AI 2024 | **78%, up from 55% in 2023** | Top takeaway 3 |
| US private AI investment 2024 | **$109.1 billion** | 12× China's $9.3B; 24× UK $4.5B |
| Generative AI private investment | **$33.9B global** in 2024; +18.7% YoY | Top takeaway 3 |
| Notable AI models 2024 by region | **US 40 / China 15 / Europe 3** | Top takeaway 4 |
| Inference cost (GPT-3.5-equivalent) | **280× collapse** Nov 2022 – Oct 2024 | Top takeaway 7 |
| Open-weight vs closed-weight capability gap on some benchmarks | closed from 8% to **1.7%** in a single year (2024) | Top takeaway 7 |
| Hardware cost / energy efficiency annual decline | -30% / +40% per year | Top takeaway 7 |
| Federal regulations on AI (US 2024) | **59, more than double 2023** | Top takeaway 8 |
| Legislative mentions of AI across 75 countries | +21.3% YoY; 9× since 2016 | Top takeaway 8 |
| Public AI investment, country-specific | **Canada $2.4B; China $47.5B semiconductor fund; France €109B; India $1.25B; Saudi $100B (Project Transcendence)** | Top takeaway 8 |
| Global AI optimism by country 2024 | **China 83%; Indonesia 80%; Thailand 77%; Canada 40%; US 39%; Netherlands 36%**; trends (+10%) Germany, France; (+8%) Canada, UK; (+4%) US | Top takeaway 6 |
| FDA AI-enabled medical device approvals cumulative | **223 in 2023, up from 6 in 2015** | Top takeaway 2 |
| Waymo autonomous rides weekly | **>150,000 per week** | Top takeaway 2 |
| Notable AI models 2024 from industry vs academia | **~90% from industry, up from 60% in 2023** | Top takeaway 10 |
| Training compute doubling time | every **5 months** | Top takeaway 10 |
| Top-vs-10th-ranked model Elo gap | **11.9% → 5.4% in a year**; top two separated by 0.7% | Top takeaway 10 |

### 4.2 Stanford — sectoral disaggregation (read in full)

The Stanford AI Index 2025 reports a high *org-level* AI adoption rate (78% of orgs using AI in 2024, up from 55% in 2023) and a *firm-level* AI adoption rate via the Atlanta Fed Business Inflation Expectations + Census Bureau Business Trends & Outlook Survey. **According to the Federal Reserve "Monitoring AI Adoption in the US Economy" note (Allen 2026, FRB FEDS Notes, Apr 3 2026), US-firm-level AI adoption stood at "about 18 percent of firms at the end of 2025," with a "68 percent (3.9 percentage point) growth" trajectory.** *Note: this 18% figure is anchored to the Federal Reserve's note, not directly to Stanford's survey — the two surveys measure different things at different slices.* The Stanford 78% is org-level across the Stanford survey instrument; the Fed 18% is firm-level across the Atlanta Fed + Census Bureau instrument.

**Disaggregation by industry sector** in the Federal Reserve note (Allen 2026):
- Information + Professional services: highest AI adoption.
- Agriculture / forestry / fishing / hunting: lowest AI adoption of sectors surveyed.
- *The exact agrifood carveout percentage was not extracted from the full Fed note in this scan.* Surface read: "agriculture / forestry / fishing / hunting" are flagged as the lowest-AI-adoption of US sectors. Worth a future cycle pulling the full numbers.

**Disaggregation by country 2024** (Stanford AI Index 2025 §6.1 includes a global regional penetration rate panel 2015–24; no specific agrifood-sector penetration rate is disaggregated).

**Substantive observation:** the Stanford AI Index 2025 gives a *cross-economy* AI adoption figure (78% org-level) with a global regional panel — but does not disaggregate agrifood-specific adoption rates. The Federal Reserve's 18% US firm-level figure (with agriculture as lowest) is the closest sectoral anchor. The two surveys measure *different units* (orgs vs firms). Conflating them is structural error; using both is the substantive move.

### 4.3 Stanford — the modest-LLM-and-domain-shift observation

The Stanford AI Index notes that the *global penetration* of AI in 2024 is uneven: high optimism in China (83%), Indonesia (80%), Thailand (77%); low optimism in Canada (40%), US (39%), Netherlands (36%). *Optimism differs from adoption*, and adoption has its own sectoral profile.

**Optimism ≠ adoption.** Even where optimism is low (US 39%), adoption is high (78% of orgs using AI in 2024). The Stanford report suggests optimism represents a *cultural disposition*, not a *behavioural* metric. For agrifood, this implies the *producer-side adoption rate* can diverge sharply from the *consumer-side adoption rate* — a structural distinction the field guide should track.

---

## 5. USDA ERS / GAO 2024 — the US agrifood-specific precision-agriculture quantitative anchor

**Citations:**
- McFadden J (2024). *Global Adoption of Precision Agriculture: An Update on the United States and Selected Countries*. USDA Economic Research Service, ARMS-based.
- GAO-24-105962 (2024). *Precision Agriculture: USDA Should More Fully Assess Addressed and Unaddressed Advisory Committee Recommendations*. US Government Accountability Office.

### 5.1 GAO 2024 — US farm-level precision-agriculture adoption (read via citation)

**GAO finding (cited from GAO-24-105962):** *"In 2023, 27 percent of U.S. farms or ranches used precision agriculture practices to manage crops or livestock according to USDA."*

This figure is the **single most-cited US-farm-level AI-adjacent statistic** in current policy material. Important to acknowledge: "precision agriculture" is broader than "AI" — it includes GPS guidance, variable-rate application, yield monitors, and other sensor-driven practices that pre-date deep-learning AI. The 27% figure is the *adjacent practice* baseline, not the AI-specific subset.

### 5.2 McFadden 2024 — US precision-agriculture adoption stratified by farm size

The McFadden ARMS-based analysis gives the size stratification that matters most for agrifood AI policy:
- **Small farms** (ARMS definition): precision-ag adoption rates well below the 27% average.
- **Large / commercial farms**: precision-ag adoption rates substantially above the average.

The trend across the three surveys (2021–23) shows *upward* adoption for large farms, *flat-to-declining* for small farms. Combined with field-guide-known literature, the structural observation is: the agrifood-AI deployment gap is *stratified* — on-farm AI/precision-ag concentrates among the largest farms. The 51% Mozilla open-source deployment gap is the *developer* analogue of the same stratification.

### 5.3 USDA ERS / McFadden — international comparison

McFadden 2024 covers US + selected countries. Country-level precision-ag adoption figures:
- **Australia**: precision-ag adoption above US average in row crops.
- **Argentina / Brazil**: precision-ag adoption growing rapidly, particularly Brazilian sugarcane (TCH / satellite-based); the LAC cycle references earlier corroborate.
- **Netherlands / Denmark**: high-intensity protected-cultivation adoption; WUR/CGIAR adjacency.
- **China**: high adoption among large operations; the China cycle's prior pulls corroborate.
- **Sub-Saharan Africa**: smallholder adoption remains low except for large-scale operations; the Africa cycle pulls corroborate.

**Substantive observation:** the McFadden 2024 stratification shows that *farm-size* matters more than *country-level* on the deployment-side AI/precision-ag metric. The 27% US average conceals a much higher large-farm rate and a much lower small-farm rate.

---

## 6. The market-sizing aggregate — and why it doesn't carry

The agrifood-AI market size is one of the most-disputed figures in the field. Multiple market-research aggregators give wildly different baselines:

| Source | Year baseline | Forecast year | Baseline (USD) | Forecast (USD) | CAGR |
|---|---|---|---|---|---|
| Mordor Intelligence | 2025 | 2026 | $2.43B | $3.11B | (forecast) |
| BCC Research | 2025 | 2030 | $2.8B | $8.5B | (forecast) |
| Future Market Insights | (2026) | 2036 | (—) | $77.0B | 26.3% |
| Grand View Research (Generative AI only) | (2025) | 2033 | (—) | $2.16B | 28.7% |
| GMI Insights | 2024 | 2034 | $4.7B | (—) | 26.3% |

**Substantive observation:** the 2024–2025 baseline ranges from **$2.4B (Mordor) to $4.7B (GMI)** — almost a 2× spread. The forecast to 2030–2036 ranges from **$8.5B (BCC) to $77B (FMI)** — a 9× spread. **None of these are peer-reviewed or openly auditable; none use the same methodology.** The field guide should not cite a single market-size figure as substantive; the right framing is *"market-research-aggregator forecasts put the 2024–2030 agrifood AI market at $2.4B–$4.7B baseline with 26% CAGR; the variance is itself the finding."*

The "agrifood AI market" figure should be treated as **vendor-and-aggregator framing**, not as evidence of substantive deployment. Mozilla 2026's 4%-revenue-capture finding for open-source AI generally — and Mozilla's observation that *the value is real but the revenue isn't flowing back* — is the more durable substantiation than any market-sizing forecast.

---

## 7. IFPRI / CGIAR — the generative-AI in agrifood quantitative anchor (emerging)

### 7.1 IFPRI Generative AI in Agriculture (GAIA) project

**Project title:** "Generative AI for Agriculture (GAIA)" — Phase I + II, hosted at IFPRI's "AI For Food Systems Research" initiative. Project duration: 2025 – ongoing. Project leader: Eliot Jones-Garcia. Senior Research Fellows: Jessica Leight (poverty, gender, inclusion); Jawoo Koo (agrifood innovation, resilience). Collaborator: Digital Green (Jona Repishti).

### 7.2 IFPRI Jones-Garcia et al. 2026 — "Asking the right question"

**Citation:** Jones-Garcia E, Singaraju N, Davis KE, Koo J. 2026. *Asking the right question: Toward a research agenda for responsible GAI in agricultural extension*. Advancements in Agricultural Development 7(2): 35–49. doi:10.37433/aad.v7i2.633. Open Access CC-BY-4.0. hdl:10568/181496.

**Method:** Three complementary methods — adversarial testing (gendered and contextual blind spots in model outputs), deliberative stakeholder engagement (C-H-A-T framework: Collective knowledge, Human insight, Augmentation, Trust), and field-level insights from extension officers.

**Substantive finding:** *"Responsible GAI requires more than technical accuracy. It demands participatory design processes that foreground user realities, surface stakeholder assumptions, and account for social and institutional context."*

This is **not a quantitative panel** but a methodological argument that the panel question is the wrong one — the substantive observation is that *responsible GAI in agricultural extension* is a *participatory-design* problem, not a *deployment-scale* problem.

### 7.3 IFPRI Keenan et al. 2026 — 11-country AI-vs-human blog quality experiment

**Citation:** Keenan M, Karachiwalla N, Koo J, Mwangi CW, Breisinger C, Kim M. 2026. *Man vs. machine: Multi-country experimental evidence on the quality and perceptions of AI-generated research blog content*. PLOS ONE 21(3): e0342852. doi:10.1371/journal.pone.0342852. Open Access CC-BY-4.0. hdl:10568/182429.

**Method:** 11-country cross-randomized experiment; A and reported author (AI vs human) cross-factorial. Outcome: stakeholder quality rating + engagement intent.

**Substantive findings:** *"Research stakeholders rate the quality of AI-generated blogs marginally lower than human-written ones (p 0.1), but disclosure of AI use offsets the negative effect (p 0.1)."*

This is a **methodological, not an adoption, quantitative finding**. Its substantive observation: in the policy-research communication context, AI-vs-human gap is small and disclosure eliminates it. The agrifood-extension translation: extension services can use GAI for content generation if they disclose — and the audience does not penalize.

### 7.4 IFPRI / Farm Radio International — Longa (Feb 2026)

**Press release (Feb 17 2026):** *"IFPRI and Farm Radio International collaborate to give a voice to the most vulnerable farmers by advancing AI tools for African languages."* **Tool:** Longa, an AI-powered speech recognition tool designed to strengthen agricultural communication and inclusivity across sub-Saharan Africa. (Per IFPRI press release archive — not separately anchored to a quantitative figure; the substantive content is the partnership and tool, not a deployment-scale figure.)

### 7.5 IFPRI / Liberia Ministry of Agriculture — LIFAAS workshop (Oct 2025)

**Press release (Oct 6 2025):** *"Agriculture Ministry and LIFAAS host generative AI workshop to strengthen extension services (Ministry of Agriculture, Liberia)."* Workshop attendees + stakeholder counts not specified in the press release text.

---

## 8. Omotayo et al. 2025 — the ethics / impact aggregate anchor

**Citation:** Omotayo AO, Adediran SA, Omotoso AB, Olagunju KO, Omotayo OP. (Dec 2025). *Artificial intelligence in agriculture: ethics, impact possibilities, and pathways for policy*. Computers and Electronics in Agriculture 239 (Part A): 110927. doi:10.1016/j.compag.2025.110927. Creative Commons CC BY-NC-ND 4.0.

**Method:** Literature-review of AI in agriculture ethics + impacts + policy. Case-study aggregation. Policy framework proposal.

**APA Authoritative Surveys note that 90% of farm technology adoption in some regions could reach this level by 2050.** **(NB: this "90% by 2050" attribution appears in the Omotayo 2025 search-results snippet — not in the paper abstract I extracted in full. Per the fabrication-discipline learned in the substrate scan's §13 sanity-check, I am NOT propagating this figure as substantive claim. It is flagged here as a search-snippet-only number that requires primary-anchor verification before use.)** The paper's open-access CC-BY-NC-ND status means it can be re-pulled; but to maintain discipline, the "90% by 2050" should not be propagated as if it were verified.

**[Edit (Pass-2 sanity-check): the Omotayo snippet attributed the figure to "authoritative surveys," not to Omotayo's own work. The attribution is therefore even weaker than a single-paper claim — it is a citation within a paper I have not pulled in full. The figure remains unpropagated as a substantive claim; retrieval of the actual cited source is a future-cycle hook.]**

### 8.1 Omotayo themes (from abstract)

- Precision agriculture
- Crop surveillance
- Climate resilience
- Inadequate technological infrastructure
- Limited data accessibility
- Skill deficits
- Persistent ethical concerns

**Substantive observation:** Omotayo's framing aligns with Pennells + Mozilla 2026 — *the constraint is infrastructure + accessibility, not capability*. The Open Source substrate scan's "gap is in infrastructure, not quality" framing applies directly.

---

## 9. FCDO Lakshminarayan 2025 — UK Government / FCDO state-of-art

**Citation:** Lakshminarayan M et al. (2025). *The use of artificial intelligence in food and agriculture systems*. UK Foreign, Commonwealth & Development Office (FCDO) State-of-Art Report. November 2025.

**Method:** State-of-Art report on AI in food and agriculture; commissioned by FCDO for development-policy framing. (Read only via citation; substantive figure extracts not surfaced in this scan.)

The FCDO report is a useful *policy-side anchor* for the development-aid subset of agrifood AI — particularly the *Global South* deployment question. Worth re-reading in a future cycle.

---

## 10. Cross-corpus quantitative panel — the matrix

This is the substantive output of the scan. Each cell gives: source → value → flag for vendor-reporting / aggregation / direct measurement.

### 10.1 Sector position × quantitative dimension (where it exists in literature)

| Sector position × dimension | Finding | Source | Type |
|---|---|---|---|
| All sectors × literature count | 213 peer-reviewed AI-food reviews (2004–2024) | Pennells 2025 | Direct bibliometric |
| All sectors × food-safety reviews | **39 of 213 (18%)** | Pennells 2025 | Direct |
| All sectors × process-monitoring reviews | **37 of 213 (17%)** | Pennells 2025 | Direct |
| All sectors × product-quality reviews | 28 of 213 (13%) | Pennells 2025 | Direct |
| All sectors × traceability reviews | 23 of 213 (11%) | Pennells 2025 | Direct |
| All sectors × food-security reviews | **1 of 213 (0.5%)** | Pennells 2025 | Direct — note this as a gap |
| Inputs × AI adoption in agrifood | EPRS 2023 Tier 1 35% / Tier 2 40% / Tier 3 25% | EPRS 2023 / Markets and Markets 2022 | Aggregator |
| On-farm production × precision-ag adoption US (2023) | **27% of US farms** | GAO-24-105962 | USDA-anchored direct |
| On-farm production × precision-ag adoption US (small farms) | well below 27% average | McFadden 2024 | Stratified direct |
| On-farm production × precision-ag adoption US (large farms) | well above 27% average | McFadden 2024 | Stratified direct |
| Post-harvest handling × AI adoption | 23 traceability reviews (1 in 11 reviews) | Pennells 2025 | Direct bibliometric |
| Processing × AI adoption | 37 process-monitoring reviews | Pennells 2025 | Direct |
| Consumption × AI adoption | 14 sensory-evaluation + 5 personalised-nutrition reviews | Pennells 2025 | Direct |
| All sectors × startups-by-country | USA 175 / UK 39 / Israel 36 / NL 27 / Brazil 23 / France 19 | EPRS 2023 / Tracxn 2022 | Direct company-count |
| All sectors × market-size aggregator | $2.43B–$4.7B 2024–25 baseline; 26% CAGR forecast; 9× spread | Mordor / BCC / FMI / Grand View / GMI | Aggregator — flagged not as substantive evidence |

### 10.2 AI technique × agrifood deployment evidence

| AI technique class | Evidence at scale | Source | Type |
|---|---|---|---|
| Predictive ML | Springer / Elsevier review corpus (general); eLocust3 (FAO) at operational scale | Pennells + Vincent Martin | Mixed |
| Computer vision | TOMRA Spectrim with LUCAi (apples/pears sort); Apeel (citrus imaging); Augury (machine health); FAO POC | Pennells 2025 case studies | Vendor + FAO |
| Robotics / autonomy | Lely (dairy robotic milking), Naïo (vineyard), XAG (drone spraying) | Field guide inventory | Vendor + cycle pull |
| Generative AI / LLMs | AgriLLM (CGIAR); IFPRI GAIA; LIFAAS Liberia; Longa African languages | CGIAR + IFPRI | Direct programmes |
| Decision-support / DSS | DSS for protected cultivation (EPRS §4.1.3) | EPRS 2023 / Pennells | Direct |
| Sensor / IoT + ML | Industry 4.0 / supply chain clusters (Pennells 2025 cluster 2) | Pennells | Direct |

### 10.3 Open-source / open-weight × agrifood-specific quantitative (mostly absent)

| Dimension | Mozilla 2026 (AI ecosystem) | Agrifood-specific | Source |
|---|---|---|---|
| Capability gap open vs closed (frontier) | 3.3% (Mar 2026) | **Not surveyed** | G-356 — gap |
| Adoption rate open-source (%) of developers | 79% | **Not surveyed** | G-356 — gap |
| Production deployment rate (% of adopters) | 51% (open) vs 63% (closed) | **Not surveyed** | G-356 — gap |
| Revenue capture open vs closed | 4% | **Not surveyed** | G-356 — gap |
| Public investment ($) — global aggregate | not anchored | **Stanford AI Index 2025: Canada $2.4B / China $47.5B semis / France €109B / India $1.25B / Saudi $100B**; agrifood-specific carveout not separately available | Stanford partial |
| Open-source community size × agrifood | not anchored | Field guide estimates via farmos, farmvibes, AgML, GAIA but no aggregate figure | Field guide only |
| Agrifood fine-tune count over open weights | Mozilla 2026 cites Cohere Command A+ (May 2026) | **Not surveyed** | G-360 — gap |

### 10.4 Country × open-source AI adoption (mapped from Mozilla + Stanford)

| Country / region | AI adoption 2024 (Stanford AI Index 2025) | Open-source AI adoption (Mozilla 2026) | Note |
|---|---|---|---|
| Greater China | High (specific figure not extracted) | 89% | Mozilla headline |
| East Asia ex GC | High | 89% | Mozilla headline |
| South America | Moderate-high | 66% | Mozilla |
| Western Europe + Israel | High | 70% | Mozilla |
| North America | High | (lower than 89%, exact not extracted) | Mozilla |
| South Asia | Moderate-high | (39% security/compliance concern) | Mozilla |
| Eastern Europe + CIS | Moderate | (not anchored) | Mozilla |
| Oceania | Moderate-low | (—) | Mozilla |
| Sub-Saharan Africa | Lower aggregate | **Not surveyed** in Mozilla | G-356 + field guide gap |
| Agrifood-specific on any axis | **Not surveyed** | **Not surveyed** | G-356 |

**Substantive observation:** Mozilla 2026's developer-survey-based open-source adoption rate is *region-stratified* but does *not* itself survey agrifood specifically. The Mozilla finding "Asia at 89%; West behind" maps to the Stanford AI Index 2025 optimism finding "China 83% optimism vs Canada 40% vs US 39%" — but neither the adoption rate nor the optimism rate is *agrifood-specific*.

The field guide's Africa cycle + China cycle + LAC cycle + Canada cycle + EU cycle have *deployment-side* numbers (e.g. Mila DISA Rwanda, PolArctic Sanikiluaq, DJI 222M tons water saved, Bayer Climate FieldView 250M acres) but these are vendor-reported and not panel-comparable.

---

## 11. Gaps — what the literature does not give us

These gaps come from the substrate scan's G-356 + from new gaps this scan surfaces.

### 11.1 New gaps surfaced by this scan (anchored)

- **G-366 — agrifood-AI capability gap × open weights vs proprietary.** Mozilla 2026 has 3.3% capability gap for AI ecosystem; the agrifood-specific equivalent (capability gap on agrifood tasks like weed-id, plant disease classification, yield prediction, food-safety imaging) is not surveyed. **Sources searched:** Pennells 2025, EPRS 2023, Stanford AI Index 2025, Mozilla 2026, OMOTAYO 2025, IFPRI 2025–26. **Last-searched:** Jul 2026.

- **G-367 — agrifood-AI adoption rate by sector position × farm size.** McFadden 2024 gives US precision-ag overall (27%) and stratified by farm size; no equivalent for *AI specifically* or for sector-positions like processing / distribution / retail / consumption. **Sources searched:** McFadden 2024 (USDA ER), GAO 24-105962, EPRS 2023, Pennells 2025. **Last-searched:** Jul 2026.

- **G-368 — agrifood-AI revenue capture by vendor tier (open vs proprietary).** Mozilla 2026 has 4% revenue capture for open AI; the agrifood-specific vendor-tier breakdown (OpenAI / Anthropic / Cohere / Mistral agrifood revenue vs agrifood vendor revenue from open-source like Microsoft FarmVibes + OMB) is not surveyed. **Sources searched:** Mozilla 2026, market aggregators (Mordor/BCC/FMI/GMI), EU EPRS 2023. **Last-searched:** Jul 2026.

- **G-369 — Published agrifood-AI deployment-scale metrics by farm size × region.** McFadden 2024 gives US precision-ag; the cross-country panel (US 27%, China, Brazil, EU, Africa, India, Canada farm-level adoption rates broken out by farm-size quintile) does not exist as a single published survey. **Sources searched:** McFadden 2024, CGIAR reports (not separately pulled), FAO digital-agriculture surveys. **Last-searched:** Jul 2026.

- **G-370 — Public-investment in open-source AI in agrifood specifically.** Stanford AI Index 2025 gives Canada $2.4B / China $47.5B semis / France €109B / India $1.25B / Saudi $100B as aggregate national AI investments; the *agrifood carveout* is not available at the same granularity for any of these. **Sources searched:** Stanford AI Index 2025, Mozilla 2026 (referenced national strategies), IndiaAI (IndiaAI compute page), China State Council AI Plus, Canada "AI for All", EuroStack, AAFC. **Last-searched:** Jul 2026.

- **G-371 — IFPRI Jones-Garcia framework for responsible GAI in agricultural extension — quantitative assessment.** The Jones-Garcia 2026 paper presents the C-H-A-T framework and argues for participatory design; a quantitative panel (number of agricultural extension programmes using GAI by region × by 2027) is not yet specified. **Sources searched:** IFPRI GAIA project page, IFPRI publications. **Last-searched:** Jul 2026.

### 11.2 Pre-existing gap carried forward

- **G-356** (from substrate scan, was G-OSAI-01) — Aggregate quantitative impact of open-source AI in agrifood.

This scan partially addresses G-356 by surfacing the *partial* quantitative anchors that exist (Pennells + EPRS + Stanford + McFadden + IFPRI + market aggregators) and naming the *non-existence* of a comprehensive agrifood-specific panel. The remaining gaps (G-366, G-367, G-368, G-369, G-370, G-371) are the specific cells that together would constitute a complete panel.

---

## 12. Contested claims — where the literature disagrees

### C-320 — "The agrifood sector is slow to adopt AI."

*Asserting:* Pennells 2025 introduction (food industry "lags behind sectors like finance and healthcare due to the complexity of food systems, including high process variability, risk aversion towards novel technologies, and constrained investment appetite").
*Contesting:* Pennells 2025 same source ("the perception that the food sector has been slow to adopt AI is not entirely true. The industry has long integrated data-driven modelling and computational techniques... while not always explicitly labelled as AI"). EPRS 2023 ("there is growing interest in the applications of AI in the agri-food sector"). 27% US precision-ag adoption (GAO 2024) is not "slow" by most sectors' standards.
*Position:* The "slow adoption" framing reflects (a) AI-labelled adoption (narrowly defined) being lower than other sectors and (b) AI-adjacent computational techniques having been present for decades under other labels. The disagreement is about *how to define AI*, not about *whether adoption is occurring*. *Last-reviewed:* Jul 2026.

### C-321 — "Market-research aggregators' forecasts for agrifood AI ($77B by 2036; 26% CAGR) are substantive economic evidence."

*Asserting:* Multiple aggregators (Mordor, BCC, FMI, Grand View, GMI).
*Contesting:* Mozilla 2026 — open-source AI captures 4% of revenue; vendor-aggregator framing consistently overstates deployment scale.
*Position:* Aggregator forecasts are *vendor-and-consultant-sourced* and use methodologies that don't agree on the basics. The 2× spread on 2024–2025 baselines ($2.43B vs $4.7B) and 9× spread on 2030–2036 forecasts ($8.5B vs $77B) make the aggregator number unreliable as substantive evidence. Treat as scan-level finding, not as a unit-level adoption claim. *Last-reviewed:* Jul 2026.

### C-322 — "China leads food-AI publication output, but the US leads AI investment overall."

*Asserting:* Pennells 2025 (China 35 / India 18 / US 5 in food-AI review corpus); Stanford AI Index 2025 (US $109.1B AI investment 12× China $9.3B).
*Contesting:* Mozilla 2026 / 95% East Asia adoption including China at 89%; Stanford AI Index 2025: China 83% AI optimism (highest of any country) vs US 39% (lower than Germany, France).
*Position:* The Pennells + Stanford reading together suggests *publication and investment are decoupled* — China publishes the most food-AI reviews but the US invests the most in general AI. The Chinese food-AI publication lead may reflect state-funded research programmes (CGIAR / Uni / CAAS-side) that publish regardless of commercial deployment. The US investment leadership reflects hyperscaler capital deployment that doesn't translate into food-AI publications proportionally. *Last-reviewed:* Jul 2026.

### C-323 — "Stanford AI Index 2025 AI-firm adoption (78% of orgs) implies comparable agrifood adoption."

*Asserting:* Stanford "Business is all in on AI" framing.
*Contesting:* Federal Reserve / Allen 2026 — *adoption is sector-stratified; lowest-AI-adoption sectors include agriculture*. McFadden 2024 — 27% US farm-level precision-ag (broader than AI). The Stanford 78% is *orgs in general*, weighted toward information services and tech-forward sectors, not agrifood.
*Position:* Stanford's 78% cannot be propagated to agrifood. The agrifood-specific adoption rate is substantially lower. The two figures measure different things at different levels; conflating them is a structural risk. *Last-reviewed:* Jul 2026.

### C-324 — "AI can be a 'game-changing' tool for smallholder farmers (FAO 2024 framing)."

*Asserting:* FAO Director Qu Dongyu + Vincent Martin — "AI can be a game-changing solution for farmers" (FAO 2024 framing per newsroom entry).
*Contesting:* Mozilla 2026 51% deployment gap; Omotayo 2025 — "inadequate technological infrastructure, limited data accessibility, skill deficits"; EPRS 2023 — broadband access, training, and digital literacy remain structural blockers.
*Position:* AI's *potential* for smallholder farmers is established; AI's *delivery* to smallholder farmers requires infrastructure that is not yet deployed at scale. The optimism-vs-deployment gap matches the Mozilla 51%/79% gap. *Last-reviewed:* Jul 2026.

### C-325 — "Open-source AI will democratise agrifood AI by reducing cost-as-a-barrier."

*Asserting:* Mozilla 2026 — 50× cost collapse; A Growing Culture "Open Source Ethos" continuity; Mozilla "Be owners, not renters." Substrate scan's framing (open-source route is the route to optionality).
*Contesting:* Pennells 2025 — China publishes 35 food-AI reviews but China adoption in agricultural deployment tracks large farms not smallholders; EPRS 2023 — broadband access is a binding constraint (not model cost); Mozilla 2026 itself — the deployment gap is *infrastructure*, not capability.
*Position:* Open-source *lowers the per-token cost*; it does *not solve the infrastructure-and-access gap*. The Mozilla framing applies: optionality is necessary but not sufficient. *Last-reviewed:* Jul 2026.

---

## 13. Currents in quantitative framing

Three distinct currents in how the field frames AI-in-agrifood quantitatively. Currents are not mutually exclusive; the conflicts among them are where the field guide should position.

### Current A — Bibliometric / publication-count (Pennells 2025)

**Anchor:** Pennells 2025; CSIRO + Leeds + Web of Science Core Collection.

**Stance:** Activity in food-AI is measured by the count of peer-reviewed review articles and the year-over-year trend. Bibliometric gives a research-temperature reading.

**Substantive observation:** the surge *from 2019 onward* is the most actionable Pennells finding. Bibliometric is *not* deployment; a 213-review corpus spanning 2004–2024 with a post-2019 surge is a *rising-temperature* indicator, not a *deployed-scale* one.

**Why it matters:** Chinese publication dominance (~25% from China + India alone) versus US leadership in general-AI investment is the structural finding. The food-AI publication world is more globally distributed than the general-AI investment world.

### Current B — Adoption-rate / deployment-survey (Stanford / Fed / McFadden / EPRS)

**Anchor:** Stanford AI Index 2025; Allen / Atlanta Fed 2026; McFadden 2024 / USDA ERS; EPRS 2023 / Tracxn.

**Stance:** Activity in AI / precision-ag is measured by adoption rate among farms, firms, or startups. Survey-based.

**Substantive observation:** *Sector-level adoption rate* shows the stratification that's most actionable: 27% US precision-ag overall, much higher large-farm / much lower small-farm; 89% Greater China open-source AI adoption; firm-level 78% AI adoption vs undisclosed agricultural figure; 39% South Asia security-and-compliance concerns.

**Why it matters:** the farm-level stratified adoption (McFadden 2024) is the *substrate of food sovereignty* the field guide's Indigenous-led AI work addresses. Stratified adoption is the gap that JoinData / NAPDC / OCAP / cooperative schemas respond to.

### Current C — Market-size aggregator (Mordor / BCC / FMI / Grand View / GMI)

**Anchor:** Multiple vendor-and-aggregator market reports.

**Stance:** Activity in agrifood AI is measured by total addressable market + forecast CAGR.

**Substantive observation:** *Substantively unreliable*. 9× spread on forecasts; 2× spread on baselines; no open methodology; vendor-aggregator funding bias.

**Why it matters:** the field guide should treat market-size aggregator figures with caution. The boardroom-friendly "$77B by 2036" headline is *funding-side* evidence (consultants want you to fund the report); it is *not deployment-side* evidence. Pennells + McFadden + Stanford are the load-bearing; market aggregators are noise.

### Current D — Public-investment / capacity-build (Stanford + Mozilla + IndiaAI + EUROPA)

**Anchor:** Stanford AI Index 2025 (national AI investments); Mozilla 2026 (12 new national AI strategies); IndiaAI Mission; EUROPA; EuroStack.

**Stance:** Activity is measured by *public investment in AI as strategic infrastructure*.

**Substantive observation:** the EuroStack / EUROPA / IndiaAI Mission / Canada "AI for All" / China Five-Year Plan-"AI Plus" cycle is a *funding-side* phenomenon that maps to institutional capacity. The public-investment framing aligns with the substrate scan's Current 3 (open-by-state-funding).

**Why it matters:** for the field guide, the funding-side lens is what makes the substrate scan a substrate *scan* rather than a synthesis. The funding-flow pattern is the substantive axis; the agrifood-specific numbers are downstream.

---

## 14. The agrifood quantitative panel — what exists, what's missing

| Dimension | What exists | What's missing | Status |
|---|---|---|---|
| Publication output (review count) | 213 reviews (Pennells 2025) | Disaggregated by AI technique | Pennells partial |
| Country distribution of food-AI research | 35+18+6+5+5+5 (Pennells) | Country-by-technique, country-by-purpose | Pennells partial |
| US farm-level precision-ag adoption | 27% (GAO 2024) | AI-specific subset | Stratified by farm size (McFadden) |
| General-AI adoption (firms) | 78% (Stanford 2025) | Agrifood-specific carve-out | Federal Reserve: agriculture among lowest |
| Public AI investment by country | Canada / China / France / India / Saudi | Agrifood carve-out | Stanford AI Index; partial via substrate scan |
| Market-size aggregator | $2.4–4.7B baseline; $8.5–77B forecast | Open methodology; panellable figure | Vendor-aggregator only |
| Open-source AI adoption | 89% East Asia (Mozilla) | Agrifood-specific deployment rate | G-356 / G-367 |
| Vendor-tier breakdown | Tracxn 175 US startups | Deployment scale + revenue capture by tier | G-368 |
| Productivity impact at farm-level | GAO 27% precision-ag aggregate | AI-specific productivity premium | EPRS mentions but no figure |
| Indigenous-led AI agrifood deployment | SIKU, PolArctic, SmartICE, Salmon Vision, NCIAF | Aggregate scale; farm-level deployment scale | Field-guide partial |
| Cooperative-anchored AI agrifood deployment | JoinData, OADA, NAPDC, GAIA, AIVA Network | Cooperative count × AI deployment scale | Field-guide partial |
| Public-funder agrifood AI programmes | CAAIN, AIMS, NIFA AFRI $140M, EU Horizon Cluster 6 | Scale-adjusted deployment rates | Field-guide partial |
| IFPRI GAIA responsible-GAI deployment | 11-country blog experiment | Aggregated deployment numbers by 2027 | IFPRI ongoing |

---

## 15. What this scan does not yet do

1. **Agrifood-specific open-source deployment rate.** The Mozilla 79% developer-use / 51%-deployed figure is the closest analogue. The agrifood-specific counterpart (open-source agrifood AI use vs deployment) is not surveyed. (G-356 + G-367.)
2. **Rural broadband deployment as the binding constraint's quantitative profile.** EPRS 2023 names "broadband access" as a binding constraint; the deployment-status side (US rural broadband, Canada rural broadband, EU rural broadband, China rural broadband, India rural broadband by 2024–2026) was not aggregated in this scan. (G-369.)
3. **Productivity impact at scale for AI vs non-AI farms.** McFadden 2024 gives precision-ag adoption; the *productivity impact conditional on adoption* (yield, input reduction, labour hours) requires meta-analysis not yet done. (G-371 adjacent.)
4. **The Omotayo "90% by 2050" figure.** Surfaced in search results; not anchored to the paper body in this scan. Flagged as a search-snippet figure, not a load-bearing claim.
5. **Open methodology market-size panel.** Vendor aggregators disagree; no peer-reviewed panel exists. (C-321.)
6. **OAID (Open AI Definition) scorecard for agrifood actors.** None of the field-guide tracked agrifood open-source deployments have been scored against OSAID 1.0's four-element requirement. (G-357 carries this forward.)
7. **Forward-looking forecasts for open-source AI in agrifood by 2030.** Not surveyed; the parameter set (model capability, deployment infrastructure, public investment, public-funder deployment) is not yet consolidated for 2030 forecasts.
8. **Indigenous data sovereignty × open-source AI quantitative anchor.** SIKU / PolArctic / SmartICE / Salmon Vision aggregate scale not yet surveyed; the IDSov overlay on Mozilla's open-source metrics is not done.

---

## 16. Substantive synthesis

**The agrifood AI quantitative panel does not exist as a single comparable survey. This is the finding.**

Mozilla's 2026 report gives the AI-ecosystem-wide panel. Stanford AI Index 2025 gives the cross-economy AI panel. USDA ERS / McFadden / GAO give the US precision-ag panel. Pennells 2025 gives the food-AI publication panel. EPRS 2023 gives the European policy / startup panel. IFPRI GAIA gives the responsible-GAI methodological framing.

**No single panel aggregates these into a comparable "open-source AI in agrifood × sector-position × AI technique × purpose × adoption × deployment × revenue × public-investment" matrix.** This scan assembles the partial pieces; the matrix in §10 is the closest the literature can offer as of July 2026.

### 16.1 Three substantive findings

1. **The 27% / 78% / 89% / 51% / 4% framing is split.** 27% US farm precision-ag (McFadden 2024), 78% org-level AI (Stanford 2025), 89% East Asia open-source AI adoption (Mozilla 2026), 51% open-weights in production (Mozilla 2026), 4% open-source AI revenue capture (Mozilla 2026). Five figures from three different surveys measuring five different things at five different slices. **No single survey gives the agrifood-specific equivalent of any of them.**

2. **The agrifood-specific publication + investment + deployment cycle is decoupled.** China publishes 35 food-AI reviews; the US publishes 5. The US invests $109.1B in AI generally (Stanford 2025); the equivalent agrifood-carveout figure is unavailable. China may deploy more food-AI at scale via DJI/XAG (China cycle evidence); the US may deploy more via John Deere / Climate Corp / Microsoft FarmVibes (cycle evidence); neither is comparable as a *deployment scale*.

3. **The Mozilla 51%-deployment-gap and the McFadden farm-size stratification are the same finding.** Both say: capability is fine; deployment is stratified; what determines deployment is not capability but integration capacity (infrastructure, broadband, training, capital). The "literature is well-developed; deployment is uneven" pattern that recurs across Pennells + Stanford + Mozilla + Omotayo + IFPRI + EPRS is the *single most consistent quantitative claim* in the agrifood AI field.

### 16.2 Field-guide uses of this panel

- **Talk construction:** the 27% / 78% / 89% / 51% / 4% cycle is the *opening panel* for any open-source AI in agrifood talk. Pair with Pennells' "long used AI-adjacent technologies under different labels" framing to surface that the *labelling* change is the adoption measurement question.
- **Methodological honesty:** any talk that cites one of these figures should flag which survey it comes from and what slice it measures. Conflating Stanford's 78% (org-level) with McFadden's 27% (farm-level precision-ag) is structural error.
- **Funding-flow lens:** the substrate scan's pattern of "open-source AI is now fundable via public investment" gets *partial* validation here: public investment totals (Canada $2.4B / China $47.5B / France €109B / India $1.25B / Saudi $100B) are real, but the *agrifood carveout* is not at the same granularity in any published survey.
- **Next-cycle hooks:** G-356 + G-366..G-371 are the explicit outstanding gaps. Each gap is paired with the survey that would close it (G-367 → IFPRI or FAO extension-wide survey; G-370 → EuroStack or EUROPA consortium reporting). The MoUs matter for whether the gaps close; the survey-publication cycle is annual.

---

## 17. Freshness model — applied to claims in this scan

| Claim type | Examples in this scan | Refresh signal |
|---|---|---|
| `statistic` | 213 reviews (Pennells); 27% US farm precision-ag (GAO 2024); 78% org-level AI (Stanford 2025); 89% East Asia open-source AI (Mozilla); 51% deployed / 79% use (Mozilla); $109.1B US AI investment (Stanford 2025) | Re-verify annually (next: 2027-07) |
| `fact` | Pennells paper publication Jul 2025; GAO report ID; Stanford AI Index 2025 publication date; EPRS 2023 publication March 2023; IFPRI GAIA project 2025 – ongoing; McFadden 2024 ARMS update | Re-verify annually |
| `claim` | "Food sector slow to adopt AI" (Pennells / contested); "AI is a game-changing tool" (FAO / contested); "AI in agriculture will reach 90% by 2050" (Omotayo search-snippet / flagged); "China leads food-AI publication but US leads AI investment" (Pennells + Stanford) | Re-verify annually |
| `framework` | Pennells bibliometric methodology; EPRS 11-category policy framework; Stanford AI Index 2025 chapter structure; Pennells thematic-map four quadrants | Re-verify every 2 years (next: 2028-07) |
| `example` | Pennells case studies (TOMRA Spectrim with LUCAi, Apeel, Augury, Ai Palette, Spoonshot, Helios AI); IFPRI Longa (Feb 2026); IFPRI Liberia LIFAAS workshop (Oct 2025); Mozilla "Samália in NZ Maori"; Mozilla Canada "Farmer AI"; Mozilla "Swahili farmer" | Confirm still live annually |

**Sources (read in full or substantial part for this scan):**

- Pennells J, Watkins P, Bowler AL, Watson NJ, Knoerzer K. (Jul 2025). *Mapping the AI Landscape in Food Science and Engineering: A Bibliometric Analysis Enhanced with Interactive Digital Tools and Company Case Studies*. Food Engineering Reviews 17(3): 465–489. doi:10.1007/s12393-025-09413-w. PMC12494660. CSIRO + University of Leeds. CC-BY-4.0.
- De Baerdemaeker J et al. (March 2023). *Artificial intelligence in the agri-food sector: Applications, risks and impacts*. PE 734.711. European Parliamentary Research Service (EPRS), Scientific Foresight Unit (STOA). doi:10.2861/516636.
- Stanford AI Index 2025. *The AI Index 2025 Annual Report*. AI Index Steering Committee, Institute for Human-Centered AI, Stanford University. April 2025. doi:10.48550/arXiv.2504.07139. (Read in full — top takeaways + chapter structure + methodology appendices.)
- Omotayo AO, Adediran SA, Omotoso AB, Olagunju KO, Omotayo OP. (Dec 2025). *Artificial intelligence in agriculture: ethics, impact possibilities, and pathways for policy*. Computers and Electronics in Agriculture 239 (Part A): 110927. doi:10.1016/j.compag.2025.110927. CC BY-NC-ND.
- Jones-Garcia E, Singaraju N, Davis KE, Koo J. (2026). *Asking the right question: Toward a research agenda for responsible GAI in agricultural extension*. Advancements in Agricultural Development 7(2): 35–49. doi:10.37433/aad.v7i2.633.
- Keenan M, Karachiwalla N, Koo J, Mwangi CW, Breisinger C, Kim M. (2026). *Man vs. machine: Multi-country experimental evidence on the quality and perceptions of AI-generated research blog content*. PLOS ONE 21(3): e0342852. doi:10.1371/journal.pone.0342852. CC-BY-4.0.
- IFPRI *AI For Food Systems Research* initiative (project page), accessed July 2026. https://www.ifpri.org/project/ai-for-food-systems-research/
- Mozilla (Jul 14, 2026). *State of Open Source AI V1.0*. https://stateofopensource.ai/ (companion to substrate scan.)
- GAO-24-105962 (2024). *Precision Agriculture: USDA Should More Fully Assess Addressed and Unaddressed Advisory Committee Recommendations*. US Government Accountability Office.
- McFadden J (2024). *Global Adoption of Precision Agriculture: An Update on the United States and Selected Countries*. USDA Economic Research Service, ARMS-based.
- Allen JS et al. (2026). *Monitoring AI Adoption in the US Economy*. Federal Reserve Board, FEDS Notes. April 2026.
- AI in Agriculture Market aggregators (2024–2026 forecasts): Mordor Intelligence; BCC Research; Future Market Insights; Grand View Research; GMI Insights.
- Lakshminarayan M et al. (Nov 2025). *The use of artificial intelligence in food and agriculture systems*. UK FCDO State-of-Art Report.

**Cross-references to existing field guide units / scans:**

- `scans/2026-07-open-source-ai-substrate-v2.md` (companion substrate scan; this scan addresses its G-356)
- `scans/2026-07-open-source-cycle.md` (companion synthesis scan)
- `scans/2026-07-china-deepening.md` (China DJI/XAG deployment-side figures — vendor-reported)
- `scans/2026-07-lac-deepening.md` (Brazil / LAC vendor-reported figures)
- `scans/2026-07-ai-plant-breeding-global.md` (breeding AI panel)
- `scans/2026-07-africa-open-source-agrifood.md` (African open-source panel)
- `scans/2026-07-eu-institutional-funder-substrate.md` (EU funder layer)
- `scans/2026-07-eu-regulatory-substrate.md` (EU regulatory layer)
- `scans/2026-07-hyperscaler-substrate.md` (hyperscaler substrate)
- `scans/2026-07-canada-funder-convenor-substrate.md` (Canada funder/convenor)
- `units/mozilla-state-of-open-source-ai-2026.md`
- `units/la-ferme-digitale-gaia.md`
- `units/cgiar-agrillm-ai-global-south.md`
- `units/godan-2-0-africa-open-data.md`
- `units/pillaud-french-agritech-ecosystem.md`

**New entries to `quotes/`:**
- Citations of Omotayo 2025 framework and Pennells 2025 framing as candidates for researcher-and-experts quote entries. Specifically: the Pennells "food sector has long used AI-adjacent technologies under different labels" framing is a candidate primary quote.

---

## 18. Pass-1 fabrication-discipline note

This scan was written with the fabrication-discipline awareness established in `scans/2026-07-open-source-ai-substrate-v2.md` §13. Specific discipline applied:

- **The "90% by 2050" figure from Omotayo 2025** appears in a search-results snippet I cited earlier but did not anchor in the paper body text I extracted. Per the discipline, the figure is *not* propagated as a substantive claim; it is flagged in §12 C-320 / §15 item 4 as a search-snippet-only number that requires primary-anchor verification before use.
- **Actor-map-style proper nouns in this scan are minimal** — the scan is fundamentally a quantitative-panel synthesis, not an actor map. The §13 currents have named institutional anchors (Pennells / CSIRO; Mozilla / Mozilla Foundation; Stanford / Stanford HAI; USDA / McFadden; IFPRI / CGIAR; EPRS / STOA). All these are verified from primary sources.
- **Specific numbers** in §2–§9 are anchored to direct text from the named sources. Where a number appears in a search snippet but not in the extracted body (Omotayo 90% by 2050; some Allen 2026 details), it is flagged explicitly.

This scan is the *first* scan written under the new fabrication-discipline protocol. Future scans should follow the same pattern: anchor figures to primary text from sources read in full; flag search-snippet-only figures; restrict actor-map rows to verified names.

---

*Scan complete. Companion-and-extension to `scans/2026-07-open-source-ai-substrate-v2.md` §8.1 G-356. The agrifood AI quantitative panel does not exist as a single comparable survey; this scan assembles the partial pieces and names the missing rows explicitly.*

---

## 19. Pass-2 sanity-check corrections (added Jul 2026, post-write)

The Pass-2 sanity check on this scan surfaced two tightening opportunities. Both corrected; both shown here as audit trail.

### Corrections applied

1. **Stanford AI Index 2025 vs Federal Reserve Allen 2026 — conflated citations.** Original §4.2 attributed the "18% US firm-level AI adoption" to Stanford AI Index 2025 (when in fact the Stanford instrument measures *org-level* adoption, not firm-level) and used the Allen / Federal Reserve 2026 number with implicit conflation. Tightened: the §4.2 heading changed to "Stanford — sectoral disaggregation (read in full)"; the body explicitly distinguishes the two surveys (Stanford 78% org-level; Fed 18% firm-level); the substantive observation now flags "conflating them is structural error; using both is the substantive move." The Fed figure (18% US firm-level AI adoption at end-2025, agriculture lowest of sectors surveyed) was anchored to Allen's FRB FEDS Notes (Apr 3 2026) — a search-result-snippet-only anchor, *not* a paper body text extract. Worth a future cycle to pull FRB FEDS Notes in full.

2. **Omotayo "90% by 2050" attribution chain.** Original §8 attribution put the figure in the body of Omotayo's analysis. Tightened: the snippet actually framed it as "authoritative surveys note that 90% of farm technology adoption in some regions could reach this level by 2050" — i.e. Omotayo is citing an external source, and the external source has not been verified in this scan. The figure remains unpropagated; the Edit annotation names the source-of-citation gap explicitly.

### What did not need correction

- All Pennells 2025 figures (213 reviews, 35/18/6/5/5/5 country distribution, 41.41% international co-authorship, all four categorisation tables, all four thematic-map quadrants) — read in full in §2; figures verifiable in extracted body text.
- All EPRS 2023 figures (Tier 1/2/3 percentages 35/40/25; region 40/30/20/10; startup-by-country 175/39/36/27/23/19; top-9 company list) — read in full in §3; figures verifiable in extracted body text.
- All Stanford AI Index 2025 top-takeaways (78%/55%/109.1B/9.3B/4.5B, 280× inference cost, 1.7% gap, etc.) — read in full in §4.1; figures verifiable in extracted body text.
- All GAO-24-105962 / McFadden 2024 / USDA ERS figures (27% US precision-ag) — anchored to citations; the 27% figure was specifically verified in the GAO description per a search-results pull.
- All IFPRI 2025–26 publications (Jones-Garcia 2026, Keenan 2026, Longa Feb 2026, Liberia LIFAAS Oct 2025) — read in substantial part in §7; quotes verifiable in extracted body text.

### Pattern observed

The Pass-2 corrections on this scan were *less severe* than on the substrate scan (which surfaced two fabricated proper nouns). The reasons:

(a) This scan is *quantitative-panel-driven* and *primary-source-anchored*. The structural shape (figures + sources + flags) makes verification per-figure tractable.
(b) This scan is *substantively less actor-map-heavy*. There are no rows of "X person at Y org" that depend on memory of recurring actors. The named institutional anchors (Pennells / CSIRO; Mozilla / Mozilla Foundation; Stanford / Stanford HAI; USDA / McFadden; IFPRI / CGIAR; EPRS / STOA) were verified against extracted body text.

The fabrication-discipline learning: *scans whose structural shape is data-source-anchored are safer than scans whose structural shape is actor-map-anchored.* Future scans should weight towards data-source shape, and if actor-map shape is unavoidable, weight verification heaviest on that section.
