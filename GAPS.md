GAPS

This is the corpus's gap registry. Every G-NNN tag referenced anywhere in
units/ or scans/ is indexed here with the best available definition,
the file/line where it was first surfaced, and a reference count.

Gaps surface during cycle work as named absences or vendor-claimed-but-
unverified observations. Three definition sources, in priority order:

  scan-intro   - the cleanest form: a one-line bullet at the bottom
                 of a scan introducing the gap (G-NNN (new): ...)
  unit-paren   - a parenthetical description attached to a G-NNN
                 reference inside an existing unit (often longer,
                 often more substantive)
  bare-ref     - G-NNN mentioned in passing with no explicit definition;
                 description is reconstructed from the surrounding
                 paragraph (best-effort; some entries have only fragment
                 context and read as 'see <file> L<n> for context')

Numbering follows cycle order (G-001 surfaced in the earliest cycles,
G-281+ in the most recent). Gaps have no priority ranking within a range;
the registry is indexical, not editorial.

To find a gap: scroll or grep for the G-NNN id.

To propose a new gap: prefix it with the next unused id from the highest
end of the range; add an intro bullet at the bottom of the surfacing
scan using the `**G-NNN (new):** ...` format so this registry stays in
sync (rebuild via the gap-extraction script attached to the source-of-
truth commit).

Total gaps registered: 311

## Initial scope

- **G-001** (n=11, src=units/aiira-iowa-state-institute.md:100) — inputs × all × all — partially addressed by plant breeding work
- **G-002** (n=7, src=units/apeel-ripetrack.md:55) — waste-and-recovery × all × supply-chain-efficiency — partially addressed by this unit
- **G-003** (n=1, src=units/root-ai.md:65) — consumption × extension-and-advisory
- **G-004** (n=1, src=units/agrosmart-brazil.md:54) — Vendor-reported figures (60% water, 20% energy) come from Agrosmart's own framing; Borgen Project is a popular-press outlet, not a peer-reviewed source. Independent verification at sector scale not
- **G-006** (n=23, src=scans/2026-07-regional.md:60) — `consumption × all × all` is a near-total gap in Canadian-specific sources. Strong candidate for a first content unit.
- **G-007** (n=5, src=scans/2026-07-regional.md:61) — `inputs × all × all` for Canada specifically. Not surfaced anywhere in our Canadian sources — likely an evidence problem rather than an absence of activity.
- **G-008** (n=14, src=scans/2026-07-regional.md:118) — Cross-border data governance interoperability. The Chinese regulatory environment shapes what Chinese agrifood AI looks like globally; this is a structural gap in any global framework that doesn't account for it.
- **G-009** (n=9, src=scans/2026-07-regional.md:119) — `all × generative-AI-and-LLMs × extension-and-advisory` *for China specifically*. Chinese rural LLM deployment is reported in fragments but no consolidated source.
- **G-010** (n=3, src=scans/2026-07-regional.md:147) — Indigenous-led AI agrifood deployment. The CARE / IEEE 2890 framework exists; the operational deployments from Indigenous data sovereign institutions are sparse. The gap is real and worth tracking.
- **G-011** (n=6, src=scans/2026-07-regional.md:148) — Generative AI / LLMs deployed with *local Indigenous languages* in agrifood advisory. Most current work uses major national languages; Indigenous-language LLM work is rare.
- **G-012** (n=6, src=scans/2026-07-regional.md:149) — Climate-adaptation AI specifically for smallholder and pastoralist contexts. CGIAR's TAPAS platform (satellite-based tracking) is one entry point; broader coverage is thin.
- **G-013** (n=15, src=scans/2026-07-regional-lac.md:92) — Caribbean-specific agritech activity. Jamaica, Trinidad, Dominican Republic under-surfaced. Strong evidence-collection problem.
- **G-014** (n=5, src=scans/2026-07-regional-lac.md:93) — LAC-specific animal production AI beyond dairy. Poultry, beef, aquaculture AI work under-represented.
- **G-015** (n=12, src=scans/2026-07-regional-lac.md:94) — Agrosmart and Kilimo — independent verification of yield / water-savings claims. Vendor-reported figures (60% water reduction Agrosmart, 20% Kilimo) circulate widely; independent verification at scale not surfaced.
- **G-016** (n=1, src=scans/2026-07-regional-lac.md:95) — UNDROP / UNDRIP-aligned AI deployment in LAC. Frameworks exist; operationalised deployments from this frame are sparse.

## EU + LAC (early)

- **G-017** (n=16, src=scans/2026-07-regional-industry-na-eu.md:188) — US row-crop autonomous machinery operational scale beyond Deere. Announcements exceed deployments.
- **G-018** (n=8, src=scans/2026-07-regional-industry-na-eu.md:189) — US specialty crop AI at scale (strawberry, leafy greens, orchard).
- **G-019** (n=10, src=scans/2026-07-regional-industry-na-eu.md:190) — EU post-harvest / food processing AI (TOMRA optical sorting, Ellab, Key Technology) beyond Apeel.
- **G-020** (n=21, src=scans/2026-07-regional-industry-na-eu.md:191) — Independent verification of vendor-reported input-reduction figures at scale (See & Spray 50%, Climate FieldView, Taranis, xFarm, Apeel).
- **G-021** (n=3, src=scans/2026-07-france-cycle.md:111) — French agritech AI deployment at the food-processing, distribution, and consumption stages. Largely under-surfaced.
- **G-022** (n=3, src=scans/2026-07-france-cycle.md:112) — Mistral AI explicit agrifood partnerships. Worth re-searching after 12 months.
- **G-023** (n=2, src=scans/2026-07-france-cycle.md:113) — INRAE specific AI deployment projects and their translation into operational French agrifood.
- **G-024** (n=4, src=scans/2026-07-france-cycle.md:114) — French small-farmer-specific AI deployment beyond Naïo (vineyards, vegetable crops). Are there French AI tools specifically designed for small mixed farms, which is a structural French context?
- **G-025** (n=2, src=scans/2026-07-france-cycle.md:115) — World FIRA ecosystem — concrete exhibitor / participant activity beyond 3,000-participant headline figure.
- **G-026** (n=1, src=scans/2026-07-quebec-cycle.md:96) — Quebec consumer-facing agrifood AI (Loblaw, Metro, Sobeys operations in Quebec). Distinct from Ontario patterns. Largely under-surfaced.
- **G-027** (n=1, src=scans/2026-07-quebec-cycle.md:97) — Quebec field-crop (open-field) AI deployment. Real but under-surfaced in our scan.
- **G-028** (n=2, src=scans/2026-07-quebec-cycle.md:98) — IVADO R3AI substantive deployment (vs. positioning). The June 8, 2026 statement is forward-looking; substantive deployment outcomes not yet visible.
- **G-029** (n=3, src=scans/2026-07-quebec-cycle.md:99) — Mila DISA partner farms and concrete deployed acreage. The project is real but operational scale not surfaced.
- **G-030** (n=3, src=scans/2026-07-quebec-cycle.md:100) — Sollum / Zone Agtech actual deployed acreage and number of grower deployments. The 40% electricity reduction figure is per-deployment; aggregate deployment is the gap.
- **G-031** (n=3, src=scans/2026-07-china-deepening.md:180) — Chinese agritech export to specific regions (Africa, Southeast Asia, Latin America, Pacific) by named actors. Worth surfacing.
- **G-032** (n=2, src=scans/2026-07-china-deepening.md:181) — Chinese AI deployment at the *processing* level. JD Farm is the closest, but the broader processing-cell population in China is under-surfaced.

## Process / retail / NA

- **G-033** (n=7, src=scans/2026-07-china-deepening.md:182) — Independent verification of DJI's 222M tons water saved and 30.87M tons CO2 reduced figures. Worth tracking.
- **G-034** (n=2, src=scans/2026-07-china-deepening.md:183) — Pinduoduo Smart Agriculture Competition outcomes translated into commercial farm deployment. Worth tracking.
- **G-035** (n=4, src=scans/2026-07-china-deepening.md:184) — Chinese rural revitalisation policy outcomes from the 2027 Plan once implemented. Forward-looking.
- **G-036** (n=1, src=units/proprietary-farm-data.md:96) — Ag Data Transparent certified contracts vs anonymised data pool rights — gap
- **G-037** (n=1, src=units/dark-data-agrifood.md:93) — data cooperatives / data altruism in agrifood — under-deployed in our scan
- **G-038** (n=1, src=units/farm-data-ownership-critical.md:99) — data cooperatives / data altruism — practitioner-anchored alternative
- **G-039** (n=1, src=units/joindata-netherlands.md:96) — international replication of JoinData model
- **G-040** (n=1, src=units/napdc-national-ag-producer-data-cooperative.md:99) — NAPDC operational deployment post-grant; data trust structure adoption
- **G-041** (n=1, src=units/oada-open-ag-data-alliance.md:100) — OADA vendor adoption rate — implementation scale
- **G-042** (n=1, src=units/data-commons-architecture.md:128) — data commons architecture global deployment scale
- **G-043** (n=4, src=units/cornell-atkinson-idsov-cluster.md:100) — Indigenous-led AI deployment in agrifood — partially addressed by Cornell Atkinson cluster framework-extension, but operational deployment remains gap
- **G-044** (n=1, src=units/mozilla-state-of-open-source-ai-2026.md:82) — open-source AI deployment in agrifood specifically; not yet surfaced
- **G-045** (n=1, src=units/open-source-in-agrifood-framework.md:143) — open-source AI deployment in agrifood specifically; gap between Mozilla general finding and agrifood-specific
- **G-046** (n=12, src=units/agaid-wsu-institute.md:85) — academic-to-deployment translation gap — directly relevant
- **G-047** (n=3, src=units/usda-fy25-26-ai-strategy.md:92) — federal AI strategy continuity under administration change — directly relevant
- **G-048** (n=4, src=units/cornell-atkinson-idsov-cluster.md:100) — Indigenous-led AI deployment at US land-grant scale — partially addressed
- **G-049** (n=7, src=units/agaid-wsu-institute.md:85) — Cooperative Extension AI tool maturity — adjacent
- **G-050** (n=2, src=units/ai-maturity-assessment-framework.md:251) — new — independent verification of vendor-reported agrifood AI scale claims

## Mid-cycle (US/EU/data)

- **G-051** (n=2, src=units/ai-maturity-assessment-framework.md:253) — new — research-to-deployment pathway documentation for academic agrifood AI
- **G-052** (n=3, src=units/ai-maturity-assessment-framework.md:255) — new — longevity / generational durability of vendor-led agrifood AI deployments
- **G-053** (n=4, src=units/cargill-carve-meat-processing.md:67) — new: US meat processing AI deployment scale beyond Cargill and Tyson
- **G-054** (n=2, src=units/albertsons-afresh-fresh-suite.md:72) — new: independent verification of shrink-reduction figures at retail AI vendors
- **G-055** (n=3, src=units/leanpath-food-waste-tracker.md:68) — new: independent verification of 50% waste-reduction claim across food-waste AI vendors
- **G-056** (n=1, src=units/instacart-cart-assistant.md:74) — Walmart AI program stack — for cross-reference
- **G-057** (n=1, src=units/winnow-na-foodservice.md:64) — new: cross-border data sovereignty for international food-waste AI vendors operating in NA
- **G-058** (n=2, src=units/instacart-cart-assistant.md:74) — new: Cart Assistant transaction-share and impact
- **G-059** (n=1, src=units/mcdonalds-ibm-ai-drive-thru-discontinued.md:73) — new: post-IBM McDonald's AI strategy — Google partnership status as of 2026
- **G-060** (n=1, src=units/jbs-usa-volur-carcass-sorting.md:68) — new: post-2023 status of JBS × Völur scale-out
- **G-061** (n=1, src=units/maple-leaf-foods-ai-canada.md:67) — new: Canadian NA processing AI depth — between SoraLINK and Maple Leaf there are now 2 documented Canadian processing units; whether a third (Olymel, Agropur
- **G-062** (n=2, src=units/sysco-ai360-foodservice.md:62) — new: NA foodservice-distributor AI depth — Sysco + US Foods now documented; PFG, GFS, Shamrock remain thinner
- **G-063** (n=1, src=units/ahold-delhaize-usa-retailer-ai.md:70) — new: cross-actor NA grocery AI consolidation patterns — Instacart × FoodStorm × Ahold Delhaize USA
- **G-064** (n=1, src=units/kroger-ocado-cfc-closures-discontinued.md:66) — new: NA grocer fulfilment-centre automation — Kroger is the largest walk-back; what other US grocers are using or abandoning fulfilment robotics in 2026
- **G-065** (n=1, src=units/kpm-siftai-beef-fm-detection.md:57) — new: NA beef processing AI deployment scope — combined coverage from Cargill CarVe, KPM SiftAI, JBS × Völur is the only public map
- **G-066** (n=1, src=units/headwall-laitram-hyperspectral-seafood.md:64) — new: NA seafood processing AI deployment scope — apart from Headwall+Laitram, no other named-NA seafood processor AI deployment surfaced in our sources
- **G-067** (n=5, src=units/cropin-india.md:84) — Vendor-figure hygiene**: 1B acres / 30M digitized / 7M farmers / 103 countries are all from Cropin's own materials. V0 per the corpus's strict discipline. V1 in practice because the customer base
- **G-068** (n=6, src=units/indiaai-mission-agrifood.md:92) — gaps: (the deployment-figure verification gaps G-067, G-068, G-069, G-070 are anchored in the deployment units; the structural gaps G-071 and G-072 are anchored in `india-agrifood-ai-pattern.md`)
- **G-069** (n=5, src=units/indiaai-mission-agrifood.md:92) — gaps: (the deployment-figure verification gaps G-067, G-068, G-069, G-070 are anchored in the deployment units; the structural gaps G-071 and G-072 are anchored in `india-agrifood-ai-pattern.md`)
- **G-070** (n=5, src=units/india-agrifood-ai-pattern.md:102) — gaps: (the deployment-figure verification gaps G-067 through G-070 are anchored in the deployment units; G-071 and G-072 are corpus-wide structural gaps surfaced by the cycle)

## MENA / LAC deepening

- **G-071** (n=5, src=units/india-agrifood-ai-pattern.md:96) — Indian dairy processing AI at named deployment scale. Search surfaced no India-anchored dairy-processing AI unit comparable to the NA meat-packing AI quartet (Cargill / Tyson / JBS / Smithfield). The cycle's scope does not cover animal-production AI in India; worth a future cycle.
- **G-072** (n=7, src=units/india-agrifood-ai-pattern.md:96) — The exportability claim** is C-052; preserved as a contested claim rather than a settled observation.
- **G-073** (n=7, src=units/iocrops-greenhouse-ai-korea.md:97) — Ation's Korea deployment scale is V0.** Greenhouse Canada says "Already deployed in Korea, Ation is..." — the deployment is confirmed but the size (number of greenhouses, hectares covered) is not
- **G-074** (n=5, src=units/japan-korea-agrifood-ai-pattern.md:144) — G-074 — Spread Co. Techno Farm Narita operational date
- **G-075** (n=9, src=units/yamaha-fazer-agricopter-drone-japan.md:79) — independent audit gap
- **G-076** (n=2, src=units/japan-korea-agrifood-ai-pattern.md:146) — G-074 — Spread Co. Techno Farm Narita operational date
- **G-077** (n=6, src=units/japan-korea-agrifood-ai-pattern.md:104) — The Korean post-harvest / processing AI layer is unverified.** G-077 captures this. The Korean cluster's CEA focus is real; the absence of Cargill-CarVe-equivalent processing AI in Korean meat pro
- **G-078** (n=4, src=units/japan-korea-agrifood-ai-pattern.md:106) — The Korean post-harvest / processing AI layer is unverified.** G-077 captures this. The Korean cluster's CEA focus is real; the absence of Cargill-CarVe-equivalent processing AI in Korean meat pro
- **G-079** (n=7, src=units/daedong-ai-lab-korean-agriculture.md:118) — (Kubota Agri Concept 2.0 / Yanmar SMARTPILOT — future supporting units not drafted in this cycle; cross-refs to be completed at kubota + yanmar unit drafting.)*
- **G-080** (n=2, src=units/daedong-ai-lab-korean-agriculture.md:117) — (Kubota Agri Concept 2.0 / Yanmar SMARTPILOT — future supporting units not drafted in this cycle; cross-refs to be completed at kubota + yanmar unit drafting.)*
- **G-081** (n=2, src=scans/2026-07-china-deepening.md:186) — Independent identification of WAICO operational secretariat structure, named agriculture-vertical lead, and member-state implementation plans. At signing date (16-17 July 2026), no agriculture-vertical secretary, named secretariat, or member-state implementation plan is publicly disclosed.
- **G-082** (n=2, src=scans/2026-07-china-deepening.md:187) — Independent verification of Xi's "5,000 AI research projects" capacity-building announcement; vertical distribution (agriculture's share) and delivery timeline unverified.
- **G-083** (n=3, src=scans/2026-07-china-deepening.md:188) — Independent verification of member-state WAICO implementation, particularly for the agriculture sector in the founding 29 states.
- **G-084** (n=2, src=scans/2026-07-lac-deepening.md:114) — | **G-084** | Independent verification of Solinftec LAC deployment scope and named-customer roster (Brazil-origin, raised R$189m green-CRA capital) |
- **G-085** (n=1, src=scans/2026-07-lac-deepening.md:115) — | **G-084** | Independent verification of Solinftec LAC deployment scope and named-customer roster (Brazil-origin, raised R$189m green-CRA capital) |
- **G-086** (n=3, src=units/pinesort-ainnovatech-costa-rica-pineapple-ai.md:92) — AinnovaTech named customer roster
- **G-087** (n=1, src=scans/2026-07-lac-deepening.md:117) — | **G-084** | Independent verification of Solinftec LAC deployment scope and named-customer roster (Brazil-origin, raised R$189m green-CRA capital) |
- **G-088** (n=1, src=scans/2026-07-lac-deepening.md:118) — | **G-085** | Autoplants Argentine AI irrigation deployment scope at farm-area scale (surfaced at IICA DAW 2025 only) |
- **G-089** (n=3, src=units/kilimo-argentina-irrigation.md:71) — independent verification of Kilimo 7-vs-9 country deployment figure
- **G-090** (n=2, src=units/kilimo-argentina-irrigation.md:76) — Microsoft × Kilimo audit beyond Maipo case-study

## Asia + open source

- **G-091** (n=2, src=units/falabella-google-cloud-tars-lac.md:91) — LAC retail consumer-facing generative AI deployment scope — currently not verified for any LAC retailer except Falabella TARS at internal-operations
- **G-092** (n=4, src=units/marfrig-agrorobotica-brazil-cattle-carbon.md:77) — Marfrig × Agrorobótica AGLIBS deployment scope beyond Mato Grosso pilot
- **G-093** (n=2, src=units/marfrig-agrorobotica-brazil-cattle-carbon.md:77) — carbon-credit registry partner for AGLIBS-issued credits
- **G-094** (n=3, src=units/pinesort-ainnovatech-costa-rica-pineapple-ai.md:92) — PineSORT commercial deployment scope beyond research project
- **G-095** (n=2, src=units/grupo-bimbo-global-bakery-ai.md:100) — Grupo Bimbo named plant × named baking-AI deployment scope — Mexican HQ vs Indian subsidiary vs 30+ other country operations
- **G-096** (n=2, src=units/grupo-bimbo-global-bakery-ai.md:100) — peer-reviewed baking-AI practice vs named commercial line deployment
- **G-097** (n=2, src=units/grupo-bimbo-global-bakery-ai.md:100) — Oracle Fusion Data Intelligence AI/analytics deployment at Grupo Bimbo — planning vs deployment state
- **G-098** (n=2, src=units/iica-digital-agriculture-week-2025.md:97) — LAC AI institutional substrate cluster-pattern tested against other regional events beyond DAW 2025
- **G-099** (n=2, src=units/iica-digital-agriculture-week-2025.md:97) — IICA institutional substrate AI deployment scale outside AI Day media visibility
- **G-100** (n=3, src=units/auravant-argentina-precision-agriculture.md:78) — independent verification of Auravant 156-country deployment claim
- **G-101** (n=2, src=units/auravant-argentina-precision-agriculture.md:78) — Auravant customer roster by country beyond the three named testimonial customers
- **G-102** (n=5, src=scans/2026-07-brazil-beef-seed-ai.md:179) — This cycle adds the following new ledger entries (continuing from G-102 and C-067):
- **G-103** (n=4, src=units/minerva-foods-brazil-cattle-traceability.md:81) — Minerva traceability programme scope post-Marfrig-acquisition
- **G-104** (n=2, src=units/minerva-foods-brazil-cattle-traceability.md:87) — Minerva meat-side traceability figure equivalents to the 200,000-animal leather figure
- **G-105** (n=2, src=units/minerva-foods-brazil-cattle-traceability.md:87) — independent audit of Minerva meat-side supply-chain at scale comparable to SBCert leather audit
- **G-106** (n=4, src=units/brazil-beef-supply-chain-deforestation.md:89) — independent audit of JBS 100% indirect-supplier monitoring achievement post-2025 — already noted in jbs unit; same gap here for cross-reference
- **G-107** (n=2, src=units/jbs-blockchain-indirect-supplier-monitoring.md:84) — JBS programme scope post-COP-28 Pará investment at scale
- **G-108** (n=3, src=units/brazil-beef-supply-chain-deforestation.md:89) — Brazilian beef big-three AI programme cluster-pattern distinctness — three programmes not one
- **G-109** (n=3, src=units/brazil-beef-supply-chain-deforestation.md:89) — rancher-level voice on Brazilian beef AI traceability programmes
- **G-110** (n=2, src=units/brazil-beef-supply-chain-deforestation.md:89) — Imazon-style per-state conformance data for Brazilian beef indirect-supplier monitoring

## Lebanese / MENA

- **G-111** (n=3, src=units/chile-pucv-seed-quality-ai.md:85) — multinational-vs-academic Chilean seed AI deployment differentiation
- **G-112** (n=2, src=units/chile-pucv-seed-quality-ai.md:92) — FONDEF IT funding timeline and deployment scale at maturity
- **G-113** (n=3, src=units/chile-canada-seed-ai-cross-border.md:113) — Chile-Canada-Global seed AI value-chain integration
- **G-114** (n=4, src=units/chile-canada-seed-ai-cross-border.md:104) — BioHeuris deployment scope at multinational seed-company scale
- **G-115** (n=5, src=units/chile-canada-seed-ai-cross-border.md:113) — Chile Canada bilateral regulatory framework for seed-data exchange
- **G-116** (n=4, src=units/argentine-beef-electronic-traceability-senasa.md:108) — AI deployment *on top of* SENASA SIGSA data — surfaced by primary sources or only structural?
- **G-117** (n=2, src=units/argentine-beef-electronic-traceability-senasa.md:108) — Argentine SENASA compliance rate at producer level for the July 1, 2026 deadline
- **G-118** (n=2, src=units/argentine-beef-electronic-traceability-senasa.md:108) — Argentine beef AI vs Brazil big-three corporate AI cluster-pattern comparison at scale
- **G-119** (n=3, src=units/brazilian-seed-ai-academic-research-led.md:89) — Embrapa AI deployment at seed-industry-primary-source tier
- **G-120** (n=2, src=units/brazilian-seed-ai-academic-research-led.md:96) — Brazilian-origin corporate seed-AI vendor cycle — substantive negative finding worth cycle-time
- **G-121** (n=4, src=units/brazilian-seed-ai-academic-research-led.md:96) — Brazilian land-grant-equivalent soybean AI deployment scope
- **G-122** (n=3, src=units/taranis-israel-crop-intelligence.md:97) — Israeli agritech ecosystem 750+ companies beyond Taranis + Prospera at named-deployment-scope tier
- **G-123** (n=2, src=units/taranis-israel-crop-intelligence.md:97) — Taranis deployment scope by country at named-deployment-scope level
- **G-124** (n=2, src=units/taranis-israel-crop-intelligence.md:97) — Israeli agritech AI critical-voice research at scope equivalent to Mighty Earth Brazilian beef
- **G-125** (n=2, src=units/uae-adafsa-ai-management-certification.md:100) — other sectors receiving ISO 42001:2023 globally — does this stay agriculture-first or is it one of several?
- **G-126** (n=2, src=units/uae-adafsa-ai-management-certification.md:100) — Khalifa University AI/ML/IoT partnership deployment scale at primary-source tier
- **G-127** (n=2, src=units/uae-adafsa-ai-management-certification.md:100) — specific ADAFSA AI deployment products at deployment-scope tier
- **G-128** (n=3, src=units/uae-date-palm-ai-genetic-diversity.md:103) — UAE date palm platform deployment-at-scale outcomes at primary-source tier
- **G-129** (n=2, src=units/uae-date-palm-ai-genetic-diversity.md:103) — date-palm AI deployment × other MENA countries' similar initiatives
- **G-130** (n=2, src=units/lebanon-agrytech-accelerator-agrismart.md:100) — AgriSmart WhatsApp chatbot deployment scale in production; farmer-usage data; Arabic-language NLP performance
- **G-131** (n=2, src=units/lebanon-agrytech-accelerator-agrismart.md:100) — other Lebanese agritech startups (KARYA, Luxeed, FoodSight
- **G-132** (n=2, src=units/lebanon-agrytech-accelerator-agrismart.md:100) — Lebanese agritech in economic-instability conditions — operational-at-scale data
- **G-133** (n=2, src=units/lebanon-agrytech-accelerator-agrismart.md:100) — Lebanon-specific food-security-policy + AI deployment intersection
- **G-134** (n=1, src=scans/2026-07-mena-scan.md:169) — | G-131 | Other Lebanese agritech startups (KARYA, Luxeed, FoodSight) at named-deployment-scope tier |
- **G-135** (n=1, src=scans/2026-07-mena-scan.md:170) — | G-132 | Lebanese agritech in economic-instability conditions — operational-at-scale data |
- **G-136** (n=3, src=scans/2026-07-mena-scan.md:171) — | G-133 | Lebanon-specific food-security-policy + AI deployment intersection |
- **G-137** (n=4, src=units/ekonoke-spanish-indoor-hop-hydroponics-ai.md:117) — Ekonoke 95% water-savings figure independent academic verification
- **G-138** (n=4, src=units/ekonoke-spanish-indoor-hop-hydroponics-ai.md:117) — Spanish corporate-buyer AI deployment scope — Pescanova / Damm / Calidad Pascual at named-deployment-scope tier
- **G-139** (n=5, src=units/ekonoke-spanish-indoor-hop-hydroponics-ai.md:117) — Spanish AgriFoodTech 2025 48% AI-adoption rate methodology
- **G-140** (n=2, src=units/ekonoke-spanish-indoor-hop-hydroponics-ai.md:117) — Hispatec / Fertiberia / other Spanish agritech corporations at named-deployment-scope tier

## Hyperscaler / multi

- **G-141** (n=2, src=units/spain-agrifoodtech-2025-ecosystem-eatable-adventures.md:117) — Spanish academic-research agritech AI at INIA / CSIC / UPM / UPC at named-deployment-scope tier
- **G-142** (n=2, src=units/spain-agrifoodtech-2025-ecosystem-eatable-adventures.md:117) — Spanish corporate-buyer AI deployment scope — Mercadona / Pescanova / Damm / Calidad Pascual at named-deployment-scope tier
- **G-143** (n=2, src=units/spain-agrifoodtech-2025-ecosystem-eatable-adventures.md:117) — Eatable Adventures international reach across 6 countries — country-by-country named-deployment data
- **G-144** (n=2, src=units/spain-agrifoodtech-2025-ecosystem-eatable-adventures.md:117) — Spanish-EU institutional substrate coordination at primary-source tier
- **G-145** (n=2, src=units/tunisia-robocare-precision-agriculture.md:123) — RoboCare deployment scale at named-deployment-scope tier; specific crop / specific country focus
- **G-146** (n=2, src=units/tunisia-robocare-precision-agriculture.md:123) — other Tunisian agritech AI startups (Smart Farm; Agritech4Tunisia
- **G-147** (n=2, src=units/tunisia-robocare-precision-agriculture.md:123) — Tunisian AMCAI-ATIA 2025 academic substrate at named-deployment-scope tier
- **G-148** (n=2, src=units/tunisia-robocare-precision-agriculture.md:123) — 216 Capital portfolio scope beyond RoboCare at named-deployment-scope tier
- **G-149** (n=3, src=units/morocco-al-moutmir-ocp-agritech.md:134) — Al Moutmir 2025-2026 bilan substantive deployment-scale numbers — farmer count / soil-test count / fertilizer-recommendation count
- **G-150** (n=3, src=units/morocco-al-moutmir-ocp-agritech.md:134) — IRESEN agritech-AI deployment scope
- **G-151** (n=3, src=units/morocco-al-moutmir-ocp-agritech.md:134) — ICARDA North-Africa AI conference deployment-scope outcomes
- **G-152** (n=5, src=units/morocco-al-moutmir-ocp-agritech.md:134) — Algerian agritech AI deployment scope at named-deployment-scale
- **G-153** (n=6, src=units/morocco-al-moutmir-ocp-agritech.md:134) — Egyptian agritech AI deployment scope at named-deployment-scale; trade.gov AI Egypt
- **G-154** (n=3, src=units/spain-cooperative-agrifood-ai-cluster-pattern.md:133) — Spanish cooperative AI deployment of record at primary-source tier — academic-discussion-tier vs. deployment-tier scale ratio
- **G-155** (n=2, src=units/spain-cooperative-agrifood-ai-cluster-pattern.md:133) — Mondragón agricultural division AI deployment scope
- **G-156** (n=3, src=units/spain-cooperative-agrifood-ai-cluster-pattern.md:133) — Dcoop AI deployment scope — Andalusian second-degree olive-oil cooperative
- **G-157** (n=3, src=units/spain-cooperative-agrifood-ai-cluster-pattern.md:133) — Coren Galicia pork cooperative AI deployment scope
- **G-158** (n=3, src=units/spain-cooperative-agrifood-ai-cluster-pattern.md:133) — Central Lechera Asturiana AI deployment scope
- **G-159** (n=3, src=units/spain-cooperative-agrifood-ai-cluster-pattern.md:133) — AN Group Navarra agricultural cooperative AI deployment scope
- **G-160** (n=3, src=units/spain-cooperative-agrifood-ai-cluster-pattern.md:133) — Spanish cooperative sector national-statistics on AI deployment count
- **G-161** (n=2, src=units/spain-cooperative-covap-ai-deployment.md:119) — COVAP deployment-of-record outcomes — whether deployment tracks have been implemented at production scale in 2026
- **G-162** (n=2, src=units/spain-cooperative-covap-ai-deployment.md:119) — Spanish cooperative AI deployment growth trajectory — academic-discussion-tier-to-deployment-of-record-tier shift
- **G-163** (n=6, src=units/mondragon-corporation-cooperative-federation.md:116) — Mondragón agricultural-division AI deployment scope at primary-source tier
- **G-164** (n=4, src=units/spain-cooperative-covap-ai-deployment.md:119) — DIGIS3 / DIHBU / ANCES ecosystem deployment-scale outcomes
- **G-165** (n=2, src=units/mondragon-corporation-cooperative-federation.md:116) — Mondragón Unibertsitatea cooperative-AI research substrate
- **G-166** (n=4, src=units/mondragon-corporation-cooperative-federation.md:116) — Mondragén's specific AI deployment of record across industrial / consumer-goods / financial / retail divisions — corpus-track broader scope

## EU substrates

- **G-167** (n=16, src=scans/2026-07-us-industry-ai.md:333) — Hyperscaler substrate of US agritech AI — Microsoft Azure Data Manager for Agriculture / FarmBeats, AWS agritech partnerships (Cargill, Tyson, JBS), Google Cloud (Taranis but not extensively US-domestic). The infrastructure layer is under-acknowledged; the field guide has Microsoft FarmBeats in name only and no Microsoft / AWS / Google agritech layer.
- **G-168** (n=6, src=scans/2026-07-us-industry-ai.md:334) — Carbon Robotics LaserWeeder — US specialty-crop weeding AI at operational scale (reportedly 100K+ acres across customers; not verified). Distinct from FarmWise Vulcan.
- **G-169** (n=4, src=scans/2026-07-us-industry-ai.md:335) — Pivot Bio PROVEN G3 — US biologicals + ML deployment at scale, peer-reviewed validation, ready for a standalone unit.
- **G-170** (n=4, src=scans/2026-07-us-industry-ai.md:336) — Sound Agriculture, Anuvia, and the broader US biologicals + ML cluster beyond Pivot Bio.
- **G-171** (n=3, src=scans/2026-07-us-industry-ai.md:337) — Corteva spinout — what happens to Granular, CARL, One Seed, and the digital twin of the seed business when SpinCo is created. Live, time-sensitive, structural.
- **G-172** (n=2, src=scans/2026-07-us-industry-ai.md:338) — Salinas Valley lettuce harvest automation — the Sullivan ethnography is the most substantive critical voice on US specialty-crop AI; not yet unitized. Direct counterweight to vendor and investor pitches.
- **G-173** (n=4, src=scans/2026-07-us-industry-ai.md:339) — US grain/seed processing AI — Cargill, ADM, Bunge have grain-handling AI initiatives; under-surfaced in the corpus.
- **G-174** (n=3, src=scans/2026-07-us-industry-ai.md:340) — American industry analyst skepticism — Bloomberg Intelligence, Oppenheimer, Bank of America, AgFunderNews journalists as substantive analyst voices on US industry AI events (e.g., the Corteva split). The corpus has critical voices on technology but underweight on the financial-analysis side.
- **G-175** (n=2, src=scans/2026-07-us-industry-ai.md:341) — Independent verification of vendor-reported figures at scale — the discipline (cite, name, flag verification gap) is in place; a consolidated framework listing every US industry vendor figure and its verification status would be the corpus-level artefact.
- **G-176** (n=4, src=units/advanced-farm-tech-farmwise-carbon-robotics-specialty-crop-weeders.md:135) — farmworker-side critical voice beyond Salinas Valley — Sullivan anchors; broader US specialty-crop labour contexts remain thin
- **G-177** (n=1, src=scans/2026-07-hyperscaler-substrate.md:332) — Alphabet Mineral customer-base and deployment-scale data beyond the original three major customers at launch. The 10% farmland data claim is the substantive figure; specific customer deployments, integration depth, and 2026 deployment status need verification.
- **G-178** (n=1, src=scans/2026-07-hyperscaler-substrate.md:333) — Microsoft ADMA customer base beyond Bayer. Bayer is the flagship; the corpus has JBS × Völur as another Azure customer, but the broader ADMA customer ecosystem (enterprise customers, large grocery retailers, food manufacturers) needs more substantive evidence.
- **G-179** (n=1, src=scans/2026-07-hyperscaler-substrate.md:334) — AWS agritech customer base beyond the named customers (Tyson, Smithfield, Cargill, Walmart, etc.). Karen Hildebrand's 2021 statement that "90% of AWS services are based on what the company's customers say they need" implies a substantial customer base; specific named customers beyond the list in Section 2.2 need surfacing.
- **G-180** (n=1, src=scans/2026-07-hyperscaler-substrate.md:335) — Google Cloud agritech customer base beyond Taranis, Falabella, Cropin, Farmers Edge, Kroger, Wendy's, Papa Johns. The breadth of Google Cloud agritech partnerships is substantial; specific named customers and use-case details need surfacing.
- **G-181** (n=1, src=scans/2026-07-hyperscaler-substrate.md:336) — Hyperscaler competition for agritech customers — the structural question of whether agritech customers choose hyperscalers based on technical features, ecosystem, sovereignty assurance, or partnership narrative. The Gartner 2025 shift toward sovereignty as a selection criterion suggests this is becoming a substantive competitive dimension; the agritech-specific competitive dynamics need surfacing.
- **G-182** (n=1, src=scans/2026-07-hyperscaler-substrate.md:337) — EU and Asia-Pacific hyperscaler-agritech deployments (TINE Norway, Bayer Crop Science global deployment outside US, etc.). The US concentration of named customers may be partly a source-discovery bias; EU and Asia-Pacific agritech deployments using US hyperscalers need surfacing.
- **G-183** (n=2, src=scans/2026-07-hyperscaler-substrate.md:338) — The data-sovereignty critique specific to US agritech AI (as opposed to general hyperscaler sovereignty). The Gartner and ComputerWeekly literature is general hyperscaler sovereignty; agritech-specific sovereignty implications need dedicated analysis.
- **G-184** (n=4, src=scans/2026-07-hyperscaler-substrate.md:339) — Chinese hyperscaler agritech substrate. Alibaba Cloud and Tencent Cloud are substantial hyperscalers with agritech deployments in China and other markets (referenced via WAICO and other units). The US-China hyperscaler-agritech bifurcation is structurally meaningful.
- **G-185** (n=25, src=scans/2026-07-hyperscaler-substrate.md:340) — Independent verification of hyperscaler-reported agritech figures. The vendor-reported bias applies across all four hyperscalers; consolidated framework for verification at scale needs development.
- **G-186** (n=2, src=units/chinese-hyperscaler-agritech-substrate.md:247) — (reconstructed from units/chinese-hyperscaler-agritech-substrate.md L247; see context)
- **G-187** (n=2, src=units/chinese-hyperscaler-agritech-substrate.md:248) — (reconstructed from units/chinese-hyperscaler-agritech-substrate.md L248; see context)
- **G-188** (n=2, src=units/chinese-hyperscaler-agritech-substrate.md:249) — (reconstructed from units/chinese-hyperscaler-agritech-substrate.md L249; see context)
- **G-189** (n=2, src=units/chinese-hyperscaler-agritech-substrate.md:250) — (reconstructed from units/chinese-hyperscaler-agritech-substrate.md L250; see context)
- **G-190** (n=2, src=units/chinese-hyperscaler-agritech-substrate.md:251) — (reconstructed from units/chinese-hyperscaler-agritech-substrate.md L251; see context)
- **G-191** (n=6, src=units/chinese-agritech-belt-and-road-export.md:289) — this unit is the anchor — Belt-and-Road export of Chinese hyperscaler agritech deployments to ASEAN, Africa, Latin America, MENA member states
- **G-192** (n=2, src=units/chinese-hyperscaler-agritech-substrate.md:253) — (reconstructed from units/chinese-hyperscaler-agritech-substrate.md L253; see context)
- **G-193** (n=2, src=units/chinese-agritech-belt-and-road-export.md:231) — (reconstructed from units/chinese-agritech-belt-and-road-export.md L231; see context)
- **G-194** (n=2, src=units/chinese-agritech-belt-and-road-export.md:232) — (reconstructed from units/chinese-agritech-belt-and-road-export.md L232; see context)
- **G-195** (n=2, src=units/chinese-agritech-belt-and-road-export.md:233) — (reconstructed from units/chinese-agritech-belt-and-road-export.md L233; see context)
- **G-196** (n=2, src=units/chinese-agritech-belt-and-road-export.md:234) — (reconstructed from units/chinese-agritech-belt-and-road-export.md L234; see context)
- **G-197** (n=3, src=units/chinese-agritech-belt-and-road-export.md:235) — (reconstructed from units/chinese-agritech-belt-and-road-export.md L235; see context)
- **G-198** (n=2, src=units/chinese-agritech-belt-and-road-export.md:236) — (reconstructed from units/chinese-agritech-belt-and-road-export.md L236; see context)
- **G-199** (n=2, src=units/chinese-agritech-belt-and-road-export.md:237) — (reconstructed from units/chinese-agritech-belt-and-road-export.md L237; see context)
- **G-200** (n=2, src=scans/2026-07-eu-institutional-funder-substrate.md:374) — EIT Food 2025-2026 cohort named startup list with AI-focus mapping. The corpus knows "65 startups per year" but does not enumerate the named startups or their AI focus (precision agriculture, autonomous farming, biotech, circular food, low-carbon supply chain).

## EU regulatory

- **G-201** (n=2, src=scans/2026-07-eu-institutional-funder-substrate.md:375) — Horizon Europe Cluster 6 2026-2027 AI-relevant calls (topic IDs, budgets, deadlines, awarded projects). The corpus knows Cluster 6 exists but does not enumerate the named AI calls.
- **G-202** (n=2, src=scans/2026-07-eu-institutional-funder-substrate.md:376) — EU Mission Soil Living Lab AI components. The corpus knows the 100 Living Labs by 2030 target but does not enumerate the AI/ML components of named Living Labs (soil monitoring, ML classification, satellite imagery analysis).
- **G-203** (n=2, src=scans/2026-07-eu-institutional-funder-substrate.md:377) — Copa-Cogeca AI position papers and EU AI Act consultation submissions. The corpus knows Copa-Cogeca exists but does not surface its AI-specific positions.
- **G-204** (n=2, src=scans/2026-07-eu-institutional-funder-substrate.md:378) — CEMA AI Project Team named statements and regulatory positions. The corpus knows CEMA exists but does not unitize the CEMA AI Project Team's work.
- **G-205** (n=2, src=scans/2026-07-eu-institutional-funder-substrate.md:379) — EU AI Continent Action Plan Apply AI Strategy agriculture-specific content. The corpus knows the Action Plan exists but does not surface its agriculture-specific adoption targets.
- **G-206** (n=2, src=scans/2026-07-eu-institutional-funder-substrate.md:380) — EAFRD per-member-state CAP Strategic Plan AI deployment scope. The corpus mentions CAP Strategic Plans in passing but does not enumerate AI deployment scope by member state.
- **G-207** (n=1, src=scans/2026-07-eu-institutional-funder-substrate.md:381) — EU AI Factories × EIT Food FAN startups access path. The 13 AI Factories are the EU's hyperscaler-substrate counterpart; whether EIT Food FAN startups have documented access paths is thin in the corpus.
- **G-208** (n=1, src=scans/2026-07-eu-institutional-funder-substrate.md:382) — EU-FARMBOOK deployment-scale outcomes (extending existing G-164). The EU-wide digital platform for agriculture knowledge exchange has substantive AI components (knowledge graph, recommendation systems) not surfaced in the corpus.
- **G-209** (n=1, src=scans/2026-07-eu-institutional-funder-substrate.md:383) — QuantiFarm deployment-scale outcomes. QuantiFarm is the corpus's most-named EU digital-agriculture deployment project (Jul 2022 – Dec 2026); specific deployment outcomes are thin.
- **G-210** (n=1, src=scans/2026-07-eu-institutional-funder-substrate.md:384) — Copa-Cogeca × European Space Agency partnership deployment outcomes. The partnership positions Earth observation data as a critical EU asset for agritech AI; deployment outcomes not enumerated.
- **G-211** (n=3, src=scans/2026-07-eu-institutional-funder-substrate.md:385) — EU regulatory layer scan (deferred — separate scan recommended). EU AI Act + EU Code of Practice on AI + European AI Office + EU Carbon Removal Certification Framework are structurally large and warrant a dedicated scan.
- **G-212** (n=2, src=scans/2026-07-eu-regulatory-substrate.md:318) — National AI regulatory sandbox implementation by EU member state. The corpus knows Article 57 requires at least one sandbox per member state by 2 August 2026; specific member-state sandbox implementations for agritech AI are next-cycle work.
- **G-213** (n=2, src=scans/2026-07-eu-regulatory-substrate.md:319) — First EU AI Act fines actually imposed (post-August 2026). The corpus knows the penalty structure but not actual enforcement actions.
- **G-214** (n=5, src=scans/2026-07-eu-regulatory-substrate.md:320) — EU AI Act + Machinery Regulation interplay guidance for agricultural AI. OECD 2026 explicitly notes this gap; Commission guidance is forthcoming.
- **G-215** (n=2, src=scans/2026-07-eu-regulatory-substrate.md:321) — CRCF certification methodologies for carbon farming. The Commission is drafting delegated acts; specific methodologies for soil carbon are substantive next-cycle work.
- **G-216** (n=2, src=scans/2026-07-eu-regulatory-substrate.md:322) — First certified CRCF projects (likely emerging 2026-2027). Tracking named projects and AI-vendor involvement.
- **G-217** (n=2, src=scans/2026-07-eu-regulatory-substrate.md:323) — CRCF Buyers' Club named buyers and suppliers. Likely members include major food processors, retailers, and EU member-state programmes; specific membership is substantive.
- **G-218** (n=1, src=scans/2026-07-eu-regulatory-substrate.md:324) — EU AI Act fines for prohibited practices (emotion recognition in workplace, manipulative AI, etc.). The corpus knows penalties but not enforcement cases.
- **G-219** (n=2, src=scans/2026-07-eu-regulatory-substrate.md:325) — National AI authority implementations by member state (AESIA Spain, CNIL France, etc.). Each member state has national authority designations; substantive next-cycle work.
- **G-220** (n=1, src=scans/2026-07-eu-regulatory-substrate.md:326) — Copa-Cogeca and CEMA submissions to AI Office and Advisory Forum. The corpus knows these bodies exist but not their specific submissions.
- **G-221** (n=1, src=scans/2026-07-eu-regulatory-substrate.md:327) — GDPR + EU AI Act interplay for farmer data. The corpus has separate GDPR and EU AI Act references but not the specific interplay for farmer-data processing.
- **G-222** (n=1, src=scans/2026-07-eu-regulatory-substrate.md:328) — EU AI Act transparency requirements (Article 50) for agritech AI vendors. Article 50 transparency requirements apply from 2 August 2026; specific agritech AI implementation is next-cycle work.
- **G-223** (n=2, src=units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md:376) — (reconstructed from units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md L376; see context)
- **G-224** (n=2, src=units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md:377) — (reconstructed from units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md L377; see context)
- **G-225** (n=2, src=units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md:378) — (reconstructed from units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md L378; see context)
- **G-226** (n=2, src=units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md:379) — (reconstructed from units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md L379; see context)
- **G-227** (n=2, src=units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md:380) — (reconstructed from units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md L380; see context)
- **G-228** (n=2, src=units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md:381) — (reconstructed from units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md L381; see context)
- **G-229** (n=2, src=units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md:382) — (reconstructed from units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md L382; see context)
- **G-230** (n=2, src=units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md:383) — (reconstructed from units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md L383; see context)
- **G-231** (n=2, src=units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md:384) — (reconstructed from units/oecd-2026-progress-eu-coordinated-plan-ai-agriculture.md L384; see context)
- **G-232** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:400) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L400; see context)
- **G-233** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:401) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L401; see context)
- **G-234** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:402) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L402; see context)
- **G-235** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:403) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L403; see context)
- **G-236** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:404) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L404; see context)
- **G-237** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:405) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L405; see context)
- **G-238** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:406) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L406; see context)
- **G-239** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:407) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L407; see context)
- **G-240** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:408) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L408; see context)

## Sub-Saharan / Africa

- **G-241** (n=2, src=units/sub-saharan-africa-ai-hub-concentration.md:409) — (reconstructed from units/sub-saharan-africa-ai-hub-concentration.md L409; see context)
- **G-242** (n=3, src=scans/2026-07-sub-saharan-africa-multilateral.md:503) — CGIAR Science Week 2025 + April 2025 Nairobi event substantive deployment outcomes. The 250+ participant event identified multiple AI deployment patterns; substantive farmer-reach figures are next-cycle work.
- **G-243** (n=3, src=scans/2026-07-sub-saharan-africa-multilateral.md:504) — AgriLLM Q&A pair coverage across CGIAR centers. Goal is 500 Q&A pairs per CGIAR center; substantive coverage across ILRI, ICRISAT, IITA, AfricaRice, IRRI, CIMMYT, CIP, ICARDA, World Vegetable Center is substantive next-cycle work.
- **G-244** (n=3, src=scans/2026-07-sub-saharan-africa-multilateral.md:505) — AGRA deployment scale per country across 13 African countries. Named countries: Ghana, Mali, Mozambique, Tanzania, Burkina Faso, Nigeria; broader coverage is next-cycle work.
- **G-245** (n=3, src=scans/2026-07-sub-saharan-africa-multilateral.md:506) — Mastercard Foundation × AGRA partnership outcomes across Ghana + Tanzania + Kenya. The Mastercard Foundation partnership focus on youth inclusiveness + capacity + participation in Ghana's agrifood system transformation; substantive deployment figures are next-cycle work.
- **G-246** (n=2, src=scans/2026-07-sub-saharan-africa-multilateral.md:507) — AIEP deployment scale across Kenya + global. Christian Merz cited Rose as a Kenyan farmer example; broader deployment-scale + farmer-reach figures are next-cycle work.
- **G-247** (n=2, src=scans/2026-07-sub-saharan-africa-multilateral.md:508) — SIKIA + Artemis deployment beyond 480-farmer Tanzania trial. The 480-farmer trial was the named substantive pilot; broader deployment is next-cycle work.
- **G-248** (n=1, src=scans/2026-07-sub-saharan-africa-multilateral.md:509) — UAE × CGIAR partnership outcomes beyond AgriLLM. The US$200M UAE-Gates-CGIAR partnership + CGIAR AI Hub in Abu Dhabi are the substantive institutional anchors; specific deployment figures are next-cycle work.
- **G-249** (n=2, src=scans/2026-07-sub-saharan-africa-multilateral.md:510) — TAPAS climate-adaptation AI deployment scale. The University of Galway satellite-imagery platform tracks climate adaptation investments; specific country coverage + investment tracking are next-cycle work.
- **G-250** (n=2, src=scans/2026-07-sub-saharan-africa-multilateral.md:511) — AU Continental AI Strategy implementation across 15+ named national AI strategies. The strategy was endorsed July 2024; substantive implementation figures across Rwanda + Senegal + Egypt + Mauritius + Benin + Ethiopia + Ghana + Kenya + Morocco + Nigeria + South Africa + Tanzania + Tunisia + Uganda are next-cycle work.
- **G-251** (n=4, src=scans/2026-07-sub-saharan-africa-multilateral.md:512) — IRRI genebank ML seed-screening deployment outcomes. The "more accessions in one season than in the previous 45 years combined" claim is substantive; specific accession numbers + variety development are next-cycle work.
- **G-252** (n=3, src=scans/2026-07-sub-saharan-africa-multilateral.md:513) — FAO + CGIAR AgriLLM Q&A pair collaboration. The FAO partnership is named in AgriLLM next steps; substantive Q&A pair contribution + thematic focus are next-cycle work.
- **G-253** (n=2, src=units/cgiar-agrillm-ai-global-south.md:355) — (reconstructed from units/cgiar-agrillm-ai-global-south.md L355; see context)
- **G-254** (n=2, src=units/cgiar-agrillm-ai-global-south.md:356) — (reconstructed from units/cgiar-agrillm-ai-global-south.md L356; see context)
- **G-255** (n=2, src=units/cgiar-agrillm-ai-global-south.md:357) — (reconstructed from units/cgiar-agrillm-ai-global-south.md L357; see context)
- **G-256** (n=2, src=units/cgiar-agrillm-ai-global-south.md:358) — (reconstructed from units/cgiar-agrillm-ai-global-south.md L358; see context)
- **G-257** (n=2, src=units/cgiar-agrillm-ai-global-south.md:359) — (reconstructed from units/cgiar-agrillm-ai-global-south.md L359; see context)
- **G-258** (n=2, src=units/cgiar-agrillm-ai-global-south.md:360) — (reconstructed from units/cgiar-agrillm-ai-global-south.md L360; see context)
- **G-259** (n=2, src=units/cgiar-agrillm-ai-global-south.md:361) — (reconstructed from units/cgiar-agrillm-ai-global-south.md L361; see context)
- **G-260** (n=2, src=units/cgiar-agrillm-ai-global-south.md:362) — (reconstructed from units/cgiar-agrillm-ai-global-south.md L362; see context)
- **G-261** (n=2, src=units/cgiar-agrillm-ai-global-south.md:363) — (reconstructed from units/cgiar-agrillm-ai-global-south.md L363; see context)
- **G-262** (n=2, src=units/agra-alliance-green-revolution-africa.md:304) — (reconstructed from units/agra-alliance-green-revolution-africa.md L304; see context)
- **G-263** (n=2, src=units/agra-alliance-green-revolution-africa.md:305) — (reconstructed from units/agra-alliance-green-revolution-africa.md L305; see context)
- **G-264** (n=2, src=units/agra-alliance-green-revolution-africa.md:306) — (reconstructed from units/agra-alliance-green-revolution-africa.md L306; see context)
- **G-265** (n=2, src=units/agra-alliance-green-revolution-africa.md:307) — (reconstructed from units/agra-alliance-green-revolution-africa.md L307; see context)
- **G-266** (n=2, src=units/agra-alliance-green-revolution-africa.md:308) — (reconstructed from units/agra-alliance-green-revolution-africa.md L308; see context)
- **G-267** (n=2, src=units/agra-alliance-green-revolution-africa.md:309) — (reconstructed from units/agra-alliance-green-revolution-africa.md L309; see context)
- **G-268** (n=2, src=units/agra-alliance-green-revolution-africa.md:310) — (reconstructed from units/agra-alliance-green-revolution-africa.md L310; see context)
- **G-269** (n=2, src=units/agra-alliance-green-revolution-africa.md:311) — (reconstructed from units/agra-alliance-green-revolution-africa.md L311; see context)
- **G-270** (n=3, src=scans/2026-07-africa-open-source-agrifood.md:498) — Ushahidi agricultural AI deployment scale beyond civic tech origin. Ushahidi is the corpus's most-substantive African-originated open-source platform; substantive agricultural AI deployment is next-cycle work.
- **G-271** (n=3, src=scans/2026-07-africa-open-source-agrifood.md:499) — Open Data Kit (ODK) African agritech deployment scale beyond named country coverage. ODK has substantive academic deployment across Nigeria + Sierra Leone + Tanzania + Ghana; broader scale + commercial deployment are next-cycle work.
- **G-272** (n=3, src=scans/2026-07-africa-open-source-agrifood.md:500) — Open Source Seed Initiative (OSSI) African deployment scale beyond Daniel Wanjama (Kenya). OSSI has substantive 14+ year track record; broader African deployment scale + African seed company partners are next-cycle work.
- **G-273** (n=3, src=scans/2026-07-africa-open-source-agrifood.md:501) — GODAN Africa chapter substantive deployment + 2024 side event outcomes. GODAN 2.0 is the corpus's most-substantive international open-data coordination body; African chapter substantive deployment is next-cycle work.
- **G-274** (n=3, src=scans/2026-07-africa-open-source-agrifood.md:502) — Code for Africa AI For Good Fellowship 2026 outcomes + pan-African deployment. CfA's 2026 fellowship is substantive African open-source AI capacity-building; substantive deployment outcomes + African deployment scale are next-cycle work.
- **G-275** (n=3, src=scans/2026-07-africa-open-source-agrifood.md:503) — Mozilla Common Voice African-language dataset deployment scale beyond Maseno University + Africa Next Voices. Common Voice 23.0 has 357 hours across 51 languages; substantive African-language deployment beyond the named workshops is next-cycle work.
- **G-276** (n=3, src=scans/2026-07-africa-open-source-agrifood.md:504) — Alliance Bioversity-CIAT banana disease dashboard deployment outcomes beyond 100,000+ observations. The dashboard has substantive deployment scale; substantive farmer reach + extension worker adoption + disease management outcomes are next-cycle work.
- **G-277** (n=3, src=scans/2026-07-africa-open-source-agrifood.md:505) — Strathmore University AI tools deployment scale beyond the named open-source commitment. Strathmore has substantive open-source AI tools; substantive deployment scale + farmer reach are next-cycle work.
- **G-278** (n=1, src=scans/2026-07-africa-open-source-agrifood.md:506) — CGIAR Open and FAIR Data Assets Policy implementation outcomes across 15 CGIAR centers. The CGIAR policy is substantive; substantive implementation outcomes + FAIR compliance per center are next-cycle work.
- **G-279** (n=1, src=scans/2026-07-africa-open-source-agrifood.md:507) — Digital Green 700,000+ smallholder farmers deployment composition across Africa. Mollel et al. 2025 peer-reviewed publication substantiates the 700K figure; substantive country breakdown + farmer demographics + extension content are next-cycle work.
- **G-280** (n=1, src=scans/2026-07-africa-open-source-agrifood.md:508) — Viamo Ask Viamo Anything (AVA) voice-first Generative AI deployment outcomes. GSMA case study is substantive; substantive deployment outcomes + farmer reach + language coverage are next-cycle work.

## Recent (2026+)

- **G-281** (n=2, src=units/ushahidi-civic-tech-agrifood-ai.md:187) — (reconstructed from units/ushahidi-civic-tech-agrifood-ai.md L187; see context)
- **G-282** (n=2, src=units/ushahidi-civic-tech-agrifood-ai.md:188) — (reconstructed from units/ushahidi-civic-tech-agrifood-ai.md L188; see context)
- **G-283** (n=2, src=units/ushahidi-civic-tech-agrifood-ai.md:189) — (reconstructed from units/ushahidi-civic-tech-agrifood-ai.md L189; see context)
- **G-284** (n=2, src=units/ushahidi-civic-tech-agrifood-ai.md:190) — (reconstructed from units/ushahidi-civic-tech-agrifood-ai.md L190; see context)
- **G-285** (n=2, src=units/open-data-kit-africa-agritech.md:192) — (reconstructed from units/open-data-kit-africa-agritech.md L192; see context)
- **G-286** (n=2, src=units/open-data-kit-africa-agritech.md:193) — (reconstructed from units/open-data-kit-africa-agritech.md L193; see context)
- **G-287** (n=2, src=units/open-data-kit-africa-agritech.md:194) — (reconstructed from units/open-data-kit-africa-agritech.md L194; see context)
- **G-288** (n=2, src=units/open-data-kit-africa-agritech.md:195) — (reconstructed from units/open-data-kit-africa-agritech.md L195; see context)
- **G-289** (n=2, src=units/open-source-seed-initiative-africa.md:195) — (reconstructed from units/open-source-seed-initiative-africa.md L195; see context)
- **G-290** (n=2, src=units/open-source-seed-initiative-africa.md:196) — (reconstructed from units/open-source-seed-initiative-africa.md L196; see context)
- **G-291** (n=2, src=units/open-source-seed-initiative-africa.md:197) — (reconstructed from units/open-source-seed-initiative-africa.md L197; see context)
- **G-292** (n=2, src=units/open-source-seed-initiative-africa.md:198) — (reconstructed from units/open-source-seed-initiative-africa.md L198; see context)
- **G-293** (n=2, src=units/godan-2-0-africa-open-data.md:178) — (reconstructed from units/godan-2-0-africa-open-data.md L178; see context)
- **G-294** (n=2, src=units/godan-2-0-africa-open-data.md:179) — (reconstructed from units/godan-2-0-africa-open-data.md L179; see context)
- **G-295** (n=2, src=units/godan-2-0-africa-open-data.md:180) — (reconstructed from units/godan-2-0-africa-open-data.md L180; see context)
- **G-296** (n=2, src=units/godan-2-0-africa-open-data.md:181) — (reconstructed from units/godan-2-0-africa-open-data.md L181; see context)
- **G-297** (n=2, src=units/code-for-africa-ai-for-good.md:192) — (reconstructed from units/code-for-africa-ai-for-good.md L192; see context)
- **G-298** (n=2, src=units/code-for-africa-ai-for-good.md:193) — (reconstructed from units/code-for-africa-ai-for-good.md L193; see context)
- **G-299** (n=2, src=units/code-for-africa-ai-for-good.md:194) — (reconstructed from units/code-for-africa-ai-for-good.md L194; see context)
- **G-300** (n=2, src=units/code-for-africa-ai-for-good.md:195) — (reconstructed from units/code-for-africa-ai-for-good.md L195; see context)
- **G-301** (n=2, src=units/mozilla-common-voice-african-languages.md:179) — (reconstructed from units/mozilla-common-voice-african-languages.md L179; see context)
- **G-302** (n=2, src=units/mozilla-common-voice-african-languages.md:180) — (reconstructed from units/mozilla-common-voice-african-languages.md L180; see context)
- **G-303** (n=2, src=units/mozilla-common-voice-african-languages.md:181) — (reconstructed from units/mozilla-common-voice-african-languages.md L181; see context)
- **G-304** (n=2, src=units/mozilla-common-voice-african-languages.md:182) — (reconstructed from units/mozilla-common-voice-african-languages.md L182; see context)
- **G-305** (n=2, src=units/alliance-bioversity-ciat-banana-disease-dashboard.md:175) — (reconstructed from units/alliance-bioversity-ciat-banana-disease-dashboard.md L175; see context)
- **G-306** (n=2, src=units/alliance-bioversity-ciat-banana-disease-dashboard.md:176) — (reconstructed from units/alliance-bioversity-ciat-banana-disease-dashboard.md L176; see context)
- **G-307** (n=2, src=units/alliance-bioversity-ciat-banana-disease-dashboard.md:177) — (reconstructed from units/alliance-bioversity-ciat-banana-disease-dashboard.md L177; see context)
- **G-308** (n=2, src=units/alliance-bioversity-ciat-banana-disease-dashboard.md:178) — (reconstructed from units/alliance-bioversity-ciat-banana-disease-dashboard.md L178; see context)
- **G-309** (n=2, src=units/strathmore-university-ai-tools.md:162) — (reconstructed from units/strathmore-university-ai-tools.md L162; see context)
- **G-310** (n=2, src=units/strathmore-university-ai-tools.md:163) — (reconstructed from units/strathmore-university-ai-tools.md L163; see context)
- **G-311** (n=2, src=units/strathmore-university-ai-tools.md:164) — (reconstructed from units/strathmore-university-ai-tools.md L164; see context)
- **G-312** (n=2, src=units/strathmore-university-ai-tools.md:165) — (reconstructed from units/strathmore-university-ai-tools.md L165; see context)

## Canada funder-convenor substrate (July 2026)

- **G-313** (n=1, src=scans/2026-07-canada-funder-convenor-substrate.md:296) — No federal or provincial programme specifically funds Indigenous-led agrifood AI deployment. CanNor REGI-AI funded an Inuit economic-development AI tool, but not an agrifood AI tool. PolArctic Sanikiluaq (Inuit-led mariculture AI) and Salmon Vision (Indigenous-led BC wild salmon AI) are operational but not funded through an Indigenous-led-agrifood-AI-specific programme.
- **G-314** (n=1, src=scans/2026-07-canada-funder-convenor-substrate.md:297) — No federal farm-data-governance programme adopted. EMILI's Canadian Agri-Food Data Initiative (CADI) guidebooks are industry-led; CAPI/EMILI's ISED submission recommended a UK Farm Data Principles equivalent — not adopted. No federal CSA-equivalent safety standard for agrifood AI systems.
- **G-315** (n=1, src=scans/2026-07-canada-funder-convenor-substrate.md:298) — No CSA-equivalent safety standard for agrifood AI systems in Canada. Health Canada cellular agriculture novel-food guidance is the closest sector-specific AI-adjacent federal posture. No FCC AgExpert data-licensing public framework.
- **G-316** (n=1, src=scans/2026-07-canada-funder-convenor-substrate.md:299) — No FCC AgExpert data-licensing public framework. AgExpert has 25,000 users and 6.5M acres; data-licensing terms are private contract terms.
- **G-317** (n=1, src=scans/2026-07-canada-funder-convenor-substrate.md:300) — RAII funding shares by RDA (other than PrairiesCan's $33.8M) not publicly disclosed. Open Canada Grants portal enumerates recipients but not by-region totals for non-Prairie RDAs.
- **G-318** (n=1, src=scans/2026-07-canada-funder-convenor-substrate.md:301) — No federal funder channel covers post-consumer food waste AI specifically across CAAIN / Scale AI / Digital / PIC / RAII. Worth a future cycle scan focused on waste-and-recovery matrix cell + funder substrate.
