# Initial Environmental Scan — July 2026

**Scope.** A first working scan of activity around artificial intelligence in the agrifood sector — research, deployment, criticism, policy, and adjacent practice — to seed the field guide's taxonomy and surface where activity is, where it isn't, and where the framing is contested.

**Method.** Targeted review of foundational reports from the academic-policy mainstream and from explicitly critical voices, cross-checked against each other. Not a literature review; the goal is a working map, not a bibliography.

**Cutoff.** Active in the last year. Items with older underlying studies but recent (2024–2026) framing or commentary are included; pure pre-2023 references appear only where they're load-bearing.

**Status.** First draft. The scan is meant to be reshaped by what gets pulled in next and by what we find missing.

---

## 1. The terrain

Three broad currents are doing most of the work right now. They're worth naming separately because they read the same evidence differently and disagree in load-bearing ways.

### 1.1 Academic-policy mainstream

Comprehensive, technically informed, written for institutional audiences. The shape: *AI is a tool that, deployed carefully, can help address documented challenges in the agrifood sector.* Critical of itself in the sense of identifying risks; rarely critical in the sense of questioning whether the underlying framing serves.

**Anchors:**
- **European Parliament EPRS study (March 2023)** — *Artificial intelligence in the agri-food sector: Applications, risks and impacts*. The most comprehensive single document we have. Worth reading in full because of the value chain coverage (protected cultivation, field crops, soil and water, animal production, supply chain, machinery industry). Identifies the policy levers that would shape European deployment — data space, testing facilities, digital skills, CAP instruments. Last_verified: 2026-07; this study is from 2023, so freshness tag is `framework` with a soft annual review for the policy sections.
- **Pennells, Watkins, Bowler, Watson, Knoerzer (July 2025)** — *Mapping the AI Landscape in Food Science and Engineering*. Bibliometric scan of the food-side research literature, with an interactive dashboard and LLM tools. Anchors the food (post-farmgate) side, which is otherwise under-represented in our scan.
- **Wu and Zhong (December 2025)** — *Artificial intelligence in sustainable agriculture: Towards a socio-technical roadmap*. Bridges technical and critical. Argues for a pivot from techno-optimism to a socio-technical framing centred on Agricultural Digital Twins and Human-AI Collaboration. Useful because it models a *measured* critical voice that stays inside the academic register.

### 1.2 International institutional and donor framing

Bodies like the FAO, WFP, USDA, and the World Bank are now publishing AI strategies. The framing is uniformly *AI as a solution to known agrifood problems*, with caveats about inclusion and risk that vary in depth.

**Anchors:**
- **FAO AI Strategy / Innovation Chief statements (2024–2025)** — explicit positioning of AI as a "core element" of FAO's digital agriculture strategy. FAO's *cc6724en* report looks at AI *applied to FAO's own knowledge assets*, not at AI in the sector. The asymmetry is telling: FAO is operationalising AI internally faster than it's analysing its sectoral use.
- **WFP Global AI Strategy 2025–2027** — operationalises AI across food security and emergency response.
- **USDA FY2025–2026 AI Strategy** — the US side's institutional response. Practical, less rhetorically ambitious than EU work.

**Critical reading:** institutional framing consistently emphasises *productivity, climate resilience, inclusion*. The measures of success used are largely inputs (adoption rates, R&D spend, pilots launched) rather than outcomes (yield change for whom, climate outcome for whom, livelihood change for whom). This is a gap worth naming in talks.

### 1.3 Critical and counter-voice

The current that questions whether the dominant framing of AI in agrifood is even serving the right problem. Two strands worth distinguishing.

**Strand A — Farmer-led, agroecological, sovereignty-oriented:**
- **IPES-Food, *Head in the Cloud* (February 2026)** — the most important recent critical document. Argues that the Big Tech / Big Ag alliance is consolidating control under the cover of "innovation," and that farmer-led innovation is being systematically underfunded. Method: 34 semi-structured interviews + surveys across world regions + literature review. The framing is sharp, the evidence is concrete, and it names a different set of innovations (community seed banks, ecological pest management, peasant seed systems, participatory breeding) that the dominant scan doesn't see. **This is the document to anchor our critical voice.**
- **IPES-Food, *Farming by algorithm* (February 2026 press)** — the public-facing summary of the above. Good source for headlines and quotations.

**Strand B — Academic / policy critical, more contained:**
- **Wu and Zhong (2025)** — see above; the measured socio-technical critique.
- **C. Gans Combe et al. (2025)** — *Data sovereignty and valuation model for sustainable agriculture*. Names farmer data sovereignty as a primary issue, not a footnote.

**Adjacent voices worth tracking but not yet pulled:**
- AI Now Institute (adjacent to agrifood; not agrifood-specific yet)
- ETC Group (long history on biotech / corporate concentration in food; AI-era work is forthcoming)
- Data & Society (data governance generally; agrifood intersection is under-built)
- GRAIN (food sovereignty framing)

---

## 2. Where activity is concentrated — a first matrix

This is a working matrix, not a comprehensive one. Cells are filled where the scan produced concrete evidence; cells that are blank are *gaps* as much as omissions.

The matrix uses the three taxonomy axes from VISION.md: **sector position** × **AI technique class** × **purpose**. Activity is high (●●), moderate (●), emerging (○), or gap (—).

### 2.1 Sector position × AI technique class

| Sector position \ AI class | Predictive ML | Computer vision | Robotics / autonomy | Generative AI / LLMs | Decision-support | Sensors + ML |
|---|---|---|---|---|---|---|
| Inputs | — | — | — | — | — | — |
| On-farm production (open field) | ●● | ●● | ● | ○ | ● | ●● |
| On-farm production (protected) | ●● | ●● | ● | ○ | ●● | ●● |
| Animal production | ● | ● | ● | ○ | ● | ●● |
| Post-harvest / storage | ● | ●● | ● | ○ | ● | ● |
| Processing | ● | ●● | ● | ○ | ● | ●● |
| Distribution / retail | ● | ● | ○ | ○ | ● | ● |
| Consumption | ● | ○ | — | ○ | ● | ○ |
| Waste / recovery | ○ | ● | ○ | ○ | ○ | ○ |

**First observations:**
- **Inputs row is blank.** This is a gap, not an absence of activity. Seed companies (Bayer, Corteva, Syngenta) and agrochemical giants are doing massive AI work internally — but our scan sources don't surface it at the agrifood-system level. Likely an evidence-collection problem more than an activity problem.
- **Generative AI / LLMs is the weakest column.** Real sectoral activity exists but is concentrated in extension services, research discovery, and consumer-facing interfaces. Few fielded deployments of consequence.
- **Protected cultivation and processing are the most saturated cells.** Both have high data density, capital intensity, and a long history of automation that AI slots into.
- **Consumption and waste/recovery rows are thin.** Important for *why the scan matters* — these are the cells where the talk audiences typically have direct lived experience.

### 2.2 Sector position × purpose

| Sector position \ Purpose | Yield optimisation | Input reduction | Disease / pest detection | Supply chain efficiency | Consumer-facing | Research | Extension / advisory | Governance / policy |
|---|---|---|---|---|---|---|---|---|
| Inputs | ● | ○ | ● | — | — | ●● | — | ○ |
| On-farm production | ●● | ●● | ●● | ○ | — | ●● | ● | ○ |
| Animal production | ● | ● | ●● | ○ | — | ● | ○ | ○ |
| Post-harvest | ○ | — | ● | ●● | ○ | ● | ○ | — |
| Processing | ● | — | — | ●● | ● | ● | — | — |
| Distribution / retail | — | — | — | ●● | ●● | — | — | — |
| Consumption | — | — | — | — | ● | — | — | — |
| Waste / recovery | — | — | — | ● | — | — | — | — |

**First observations:**
- **Yield optimisation and input reduction are concentrated on-farm.** Risk: this is also where the most significant corporate concentration of agritech AI happens (John Deere, Bayer, Climate Corp, etc.), and where the critical-voice concerns about lock-in are sharpest.
- **Extension / advisory as a purpose is underdeveloped.** Wu and Zhong flag this explicitly — human-AI collaboration is supposed to be the next frontier, and it remains mostly promise.
- **Governance / policy is a thin column across the board.** The EU is doing the most; FAO and national bodies much less.

### 2.3 AI technique class × purpose

| AI class \ Purpose | Yield | Input reduction | Disease / pest | Supply chain | Consumer | Research | Extension | Governance |
|---|---|---|---|---|---|---|---|---|
| Predictive ML | ●● | ●● | ●● | ●● | ● | ●● | ● | ○ |
| Computer vision | ● | ● | ●● | ●● | ● | ● | ○ | — |
| Robotics / autonomy | ●● | ●● | ●● | ● | — | ● | — | — |
| Generative AI / LLMs | ○ | ○ | ○ | ○ | ● | ●● | ●● | ○ |
| Decision-support | ●● | ●● | ● | ● | ○ | ● | ●● | ● |
| Sensors + ML | ●● | ●● | ●● | ● | ○ | ● | ● | ● |

---

## 3. Where activity is *not* — first gap observations

Gaps are first-class objects, not omissions. A gap is a cell where activity should plausibly exist given the problem but evidence is thin.

1. **Farmer data sovereignty as a designed system, not a debate.** Discussion is everywhere; operational tooling that *enforces* farmer sovereignty (interoperable formats, federated models, cooperative-owned infrastructure) is rare. The EU Data Act and the Open Ag Data Alliance are early steps; substantive deployments aren't visible yet.
2. **Generative AI applied to on-farm extension for low-resource and smallholder contexts.** Activity is concentrated in well-capitalised, OECD-context extension services. The global majority is largely uncovered.
3. **AI for food loss and waste reduction.** The sector-position-by-purpose matrix shows waste / recovery is thin across the board. Real opportunities (predictive demand modelling, supply-destock coordination, quality grading in low-resource contexts) are under-developed.
4. **AI accountability and audit tooling for agrifood.** Unlike finance or healthcare, agrifood lacks a developed ecosystem of audit, certification, and recourse tooling for AI systems. This is a regulatory gap and a tooling gap.
5. **AI in food sovereignty and peasant innovation systems.** Activity exists but isn't seen in dominant scans because it's not framed as "AI." IPES-Food documents this directly. For our purposes this is a *framing gap* as much as a technical one.
6. **Generative AI / LLM column across most of the matrix.** If a near-term horizon matters for talks, this column will move fast. Worth watching, not yet anchor of a presentation.

---

## 4. Contested claims — first list

Claims the scan treats as live rather than settled. Worth naming in talks so the presenter can position.

1. **"AI will help feed the world."** Common in institutional framing. The IPES-Food report and Wu/Zhong both argue that framing ignores who captures value, what smallholders actually need, and whether the proposed AI solves the binding constraint.
2. **"Precision agriculture reduces inputs."** Strong claims in vendor and EP-study material. Counter-evidence: monoculture lock-in, increased absolute input use where previously unprofitable land becomes profitable, rebound effects. Contested.
3. **"Farmer data is the new oil."** Operative metaphor in vendor and Big Tech framing. Critical voices reframe as: *farmer data should belong to farmers, by default*. Different conclusion, different policy.
4. **"AI is inevitable in agrifood."** Strongly implied by current investment flows and policy framing. The IPES-Food counter-framing — that the *path* is a political choice, and that farmer-led alternatives exist and are being underfunded — is the operative disagreement.
5. **"AI in agrifood will close the productivity gap between smallholder and industrial farms."** Common in World Bank / FAO donor framing. Counter: AI may widen the gap if it requires capital, connectivity, and data infrastructure that smallholders don't have, and if advisory systems trained on industrial-farm data are deployed in smallholder contexts.
6. **"AI will reduce chemical inputs."** Claims exist but tied to specific techniques (precision spraying, mechanical weeding). Net effect on chemical use at sector scale is contested and under-measured.

---

## 5. Actors worth tracking

Not a comprehensive list; a starter set biased toward critical and practitioner voices rather than vendors.

**Critical / counter-voice:**
- IPES-Food (ipes-food.org)
- ETC Group (etcgroup.org)
- GRAIN (grain.org)
- Civil Society and Indigenous Peoples' Mechanism (CSIPM) for relations with the UN Committee on World Food Security
- Nyéléni movement / food sovereignty forums

**Academic / policy:**
- Wageningen University & Research — long history in precision agriculture, increasingly critical
- Cornell Atkinson / Cornell Tech — agricultural data sovereignty
- Australian Centre for International Agricultural Research (ACIAR)
- Columbia Climate School — landscape AI work that touches agrifood

**Institutional:**
- FAO digital agriculture programme
- European Commission DG AGRI, DG CONNECT
- USDA AI Strategy team
- World Bank agritech portfolio

**Practitioner / co-design:**
- Atelier Paysan (FR), Fabriek Paysanne (BE) — co-designed farm tooling
- Farmers' Seed Network (China)
- AGUAPAN (Peru) — custodian farmer network
- Prolinnova — farmer-led innovation network
- Float — funding lab for open agroecological technologies

**Sectoral industry voices (cite for the dominant framing, not for endorsement):**
- McKinsey agritech reports (used by IPES-Food as evidence of the dominant framing)
- AgFunder reports
- CEMA — European Agricultural Machinery Association

---

## 6. What this scan does not yet do

- Geographic spread is uneven: heavy on OECD / EU, lighter on Global South practice. Next scan should pull at least one substantive non-OECD source.
- Quantitative claims (market size, adoption rates, yield gains) have been noted but not verified against primary data. Where talks lean on them, verify against the underlying report.
- The AI technique class column for generative AI is shallow. Likely to change fastest; revisit within six months.
- Indigenous data sovereignty and decolonial framings are noted but not yet pulled into the scan proper. Next pass.

---

## 7. Source list — with freshness tags

| Source | Type | Tag | Last verified | Notes |
|---|---|---|---|---|
| EPRS_STU(2023)734711 — *Artificial intelligence in the agri-food sector* | Institutional scan (EU) | framework | 2023-03, verify annually for policy sections | Foundational. Read in full. |
| Pennells et al. (2025) — *Mapping the AI Landscape in Food Science and Engineering* | Academic bibliometric | framework | 2025-07, verify annually | Food-side anchor. |
| Wu and Zhong (2025) — *Towards a socio-technical roadmap* | Academic review | claim | 2025-12, verify annually | Socio-technical pivot. |
| IPES-Food (2026) — *Head in the Cloud* | Critical report | claim | 2026-02, verify annually | Critical voice anchor. |
| IPES-Food (2026) — *Farming by algorithm* | Press release | claim | 2026-02 | Public summary of *Head in the Cloud*. |
| FAO AI Strategy materials | Institutional | claim | 2024–2025 | Verify before citing. |
| USDA FY2025–2026 AI Strategy | Institutional | claim | 2025 | US side. |
| WFP Global AI Strategy 2025–2027 | Institutional | claim | 2025 | Operational scope. |
| Gans Combe et al. (2025) — *Data sovereignty and valuation model* | Academic | claim | 2025, verify annually | Data sovereignty framing. |

---

## 8. What the scan asks of the taxonomy

The taxonomy under `taxonomy/` should:

- Treat the **inputs row** as a known blind spot and design for it — don't let the empty cells in the matrix make it disappear from the taxonomy.
- Treat **generative AI / LLMs** as a low-evidence, high-velocity column that needs an explicit watching mechanism rather than a settled entry.
- Make **gap** and **contested claim** first-class taxonomy objects, not after-thoughts.
- Be explicit about **geographic spread** — every entry should carry an actor/region tag so the scan can re-balance.

These four are open questions for the next iteration.