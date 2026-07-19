---
title: Data Cycle
date: 2026-07
---

# Data Cycle — July 2026

**Status.** Cross-cutting scan. Distinct from the regional cycles (Canada, China, France, Latin America, Global South, NA/EU industry, Quebec). This scan is about the *data substrate* that all agrifood AI deployment depends on — a precondition that has been implicit throughout the field guide and is now foregrounded.

**Scope.** Three dimensions the user named:
- **Data type:** soil, livestock, crop, environmental
- **Data openness:** open, proprietary, dark
- **Data owner / steward:** industry, state, civil society

**Method.** Substantive reading of named institutions and concrete deployment patterns. Critical context on data governance, sovereignty, and farmer rights.

**Cutoff.** Active in the last 18 months, with 2024 vintage acceptable per user guidance.

---

## 1. Why this scan now

The field guide has populated 40+ content units across multiple regional and topical cycles, all about AI deployments in agrifood. But every one of those deployments depends on *data*: trained models on training data; production models on production data. The data substrate has been implicit throughout. Surfacing it is the next level of the field guide's work.

Three structural observations before going further:

1. **The data substrate is at least as important as the AI model.** A trained AI model without representative, current, well-labelled data degrades; a data-rich substrate without AI is still useful. The competitive dynamics and value capture are increasingly in the *data layer*, not the *model layer*.

2. **The data layer is where sovereignty questions concentrate.** Who owns farmer data? Who captures value from aggregated farm data? Who controls the training data for foundation models in agrifood? Who decides what data is collected, what is surfaced, what is dark?

3. **The field guide's stance — curious, critical, collaborative — applies most acutely to the data layer.** Critical scrutiny of proprietary data capture is what distinguishes a literacy-focused field guide from a vendor-friendly one.

## 2. The three dimensions as a matrix

The user proposed three dimensions; let me make the matrix concrete.

### 2.1 Data type × openness × owner

| Data type \\ Owner × Openness | Open / state | Open / civil society | Open / industry | Proprietary / industry | Proprietary / civil society | Dark (collected, not surfaced) |
|---|---|---|---|---|---|---|
| **Soil** | SoilGrids (ISRIC); EU LUCAS; Africa Soil Information Service (AfSIS) | Open Soil Atlas; Global Soil Organic Carbon map | Syngenta, Bayer Soil Health programs (some open) | Bayer SoilHealth; Trimble Soil Information System; vendor-bound precision ag maps | (rare) | IoT sensor data collected but not aggregated / shared |
| **Crop** | USDA NASS Cropland Data Layer; EU CAP parcel data; Copernicus Sentinel-2; FAOSTAT | CGIAR HarvestChoice; GODAN aggregated crop data | (rare; industry prefers proprietary) | Bayer Climate FieldView; John Deere Operations Center; AGCO PTx Trimble; Trimble Connected Farm; CNH AFS Connect; Taranis | (rare) | Combine telemetry; planter telemetry; precision-ag vendor aggregation |
| **Livestock** | FAO GLW (Gridded Livestock of the World); national livestock census | Open livestock health data (partial) | (rare) | Cainthus/Elanco dairy AI; Lely milking robotics; Merck Animal Health; Afimilk | (rare) | RFID-tagged animal movement; barn-sensor IoT data |
| **Environmental** | Copernicus Atmosphere / Marine / Climate; GBIF biodiversity; National Phenology Network | Open Climate Fix; OpenAQ air quality | (rare) | Climate Corporation historical weather (now Bayer); DTN weather | (rare) | Government-classified satellite imagery; corporate environmental monitoring |

**Observations from the matrix:**
- **Open state data is the dominant cell for soil, environmental, and satellite-derived crop data.** SoilGrids (ISRIC), Copernicus Sentinel, USDA NASS Cropland Data Layer, FAOSTAT — all state / multilateral open infrastructure.
- **Proprietary industry data is the dominant cell for crop and livestock.** The major vendor platforms (Climate FieldView, John Deere, AGCO, Trimble, CNH, Taranis, Lely, Cainthus, Afimilk) hold data that is *contractually* the farmer's but *operationally* the vendor's aggregation.
- **Civil society open data is substantial but not dominant.** CGIAR HarvestChoice, OpenAQ, GODAN aggregated data, Open Climate Fix — substantive but smaller than the state or industry data layers.
- **Dark data is structurally undercounted.** IoT sensor streams, machine telemetry, government-classified satellite — collected but not surfaced for broader use. The *dark* data cell is the most under-catalogued in the field guide.

### 2.2 The "data value stack"

A useful way to think about data in agrifood:

| Layer | What it is | Examples |
|---|---|---|
| **Layer 0 — Raw signal** | Sensor readings, satellite pixels, machine telemetry | Soil probe moisture reading; Sentinel-2 NDVI pixel; combine yield sensor value |
| **Layer 1 — Cleaned data** | QA/QC'd, calibrated, geo-referenced | SoilGrids 250m maps; Copernicus Sentinel-2 L2A surface reflectance; Bayer FieldView cleaned yield maps |
| **Layer 2 — Aggregated dataset** | Across farms, across regions | USDA NASS Cropland Data Layer; FAOSTAT production data; Bayer aggregated Climate FieldView maps |
| **Layer 3 — Derived model input** | Training data for ML / AI models | Mila DISA training data (satellite + ground truth); CGIAR AgriLLM training corpus; vendor ML training sets |
| **Layer 4 — Trained model output** | Predictions, classifications | See & Spray weed classification; Pinduoduo Smart Agriculture Competition strawberry yield prediction; Climate FieldView nitrogen recommendation |
| **Layer 5 — Decision / action** | Farmer or vendor takes action based on output | Spray decision; planting decision; selling decision |

The *openness* and *owner* dimensions vary by layer. State data is dominant at Layers 1-2 (calibrated, aggregated) and valuable at Layer 3 (training data for public-interest models). Industry data is dominant at Layers 3-5 (training data, model output, decision capture). Dark data is mostly at Layer 0 (raw signal) and partially Layer 4 (predictions made but not shared).

## 3. Open data ecosystem

### 3.1 GODAN — Global Open Data for Agriculture and Nutrition

Founded 2013 (originally G8-initiated with US, UK, UK aid). Now an international initiative. Current framing: GODAN 2.0 — "advances a holistic framework for transforming food systems through open data, youth-led innovation, and inclusive digital infrastructure."

**Positioning.** GODAN is the international coordination body for open data in agriculture and nutrition. Distinct from a *funding* body or a *data repository* — it is a *coordination and convening* body that supports the ecosystem of open data producers and consumers.

**Concrete collaborations:**
- GODAN Action (IDS-led) — practical engagement with open data in agriculture and nutrition.
- *A Global Data Ecosystem for Agriculture and Food* (2016 paper, commissioned by Syngenta with GODAN assistance) — articulated the "Five stars of open data" and FAIR principles for the agrifood context.

### 3.2 CGIAR FAIR data principles and Platform for Big Data in Agriculture

CGIAR's Platform for Big Data in Agriculture advocates FAIR principles: **Findable, Accessible, Interoperable, Re-usable.** Responsible Data Guidelines explicitly for agricultural research for development.

The CGIAR positioning is unique in the field guide: it is *multilateral research-for-development* infrastructure explicitly committed to FAIR data principles. The CGIAR's open-access mandate is among the strongest of any institution working on agricultural data globally.

### 3.3 USDA Ag Data Commons

Public access research data catalog operated by the National Agricultural Library. FAIR-compliant repository. Replatformed to Figshare-powered institutional portal in January 2024. USDA-funded research data — the *output* of publicly-funded research is open.

This is the structural counter-example to the proprietary data capture concern: US public investment in agricultural research is required (since 2023 federal policy on public access) to deposit research data in FAIR-compliant repositories. The Ag Data Commons is the operational instantiation.

### 3.4 Copernicus Sentinel — EU Earth observation

EU's Earth observation programme. Sentinel-2 specifically supports land monitoring, including vegetation, soil, water. Open data access via Copernicus Data Space Ecosystem. Substantive: the data is freely available, well-documented, and used for crop monitoring at continental and global scales.

### 3.5 SoilGrids (ISRIC)

Global soil property maps at 250m resolution. 14 soil properties. 6 standard depth intervals. ML-based predictions. Africa soil property maps at 250m resolution produced using automated spatial prediction framework.

The SoilGrids system is the substantive open-data anchor for *soil* in the field guide. Worth distinguishing from vendor-bound soil information systems (Trimble Soil Information System, etc.) — same underlying science, different openness.

### 3.6 Other open data of note

- **FAOSTAT** — FAO's global food and agriculture statistics. The standard reference for production, trade, and consumption data globally.
- **GBIF** — Global Biodiversity Information Facility. Open biodiversity data, including agrifood-relevant pollinators and soil biodiversity.
- **OpenAQ** — Open air quality. Environmental monitoring data relevant to agricultural pollution.
- **Open Climate Fix** — open climate / weather data, including for agriculture.
- **HarvestChoice** — CGIAR-supported agronomic data.

## 4. Proprietary farm data

### 4.1 Vendor platforms — the dominant cell

The crop-data proprietary layer is dominated by major vendor platforms:

- **Bayer Climate FieldView** — multi-continent platform (23 countries, 250M acres). Customer-owned data, vendor-aggregated. Ag Data Transparent certified since 2021.
- **John Deere Operations Center** — equipment-led data aggregation. Ag Data Transparent certified (first major ag player).
- **AGCO PTx Trimble** — retrofit platform. Trimble Connected Farm.
- **CNH AFS Connect** — equipment-led data aggregation.
- **Trimble / CNH AFS** — broader precision-ag platforms.
- **Taranis** — multi-continent aerial imagery platform.

These vendors collect farm-level data (GPS coordinates, seeding rates, pesticide volumes, moisture readings, yield estimates) and combine with external feeds (satellite, weather). The *aggregation* is the value; the *individual farm data* is the input.

### 4.2 The Ag Data Transparent certification

Ag Data Transparent is a non-profit certification scheme based on the *Privacy and Security Principles for Farm Data*. John Deere is the first major ag player to obtain it; Bayer Climate FieldView certified since 2021.

The certification is *industry-led* (made up of farmer-led organizations and commodity groups) and provides five levels of transparency. This is the operational instantiation of farmer-data ownership rights — the *institutional* response to the proprietary data capture concern.

### 4.3 The contractual reality vs. the certification

Climate FieldView's privacy statement explicitly says: "Farmers own their own data — full stop." Bayer's Brian Leake has cited this in civil society conversations.

But Civil Eats (March 2026) reports substantial concern about the *practical reality*:
- "Most ag-tech services insist that they are granting farmers ownership of their data. Watchdog groups warn, however, that legalese within click-to-sign contracts favors the businesses."
- "Surprises can lurk within a 10,000-word software license agreement."
- "A contract that prevents a tech company from selling data to a third party may nevertheless grant a business partner broad rights to exploit and share anonymized pools of data."
- "A gray zone exists regarding who controls the bits and bytes, which the ag-tech providers store with the likes of Amazon Web Services, Microsoft Azure, and Google Cloud."

The Andrew Nelson (Washington farmer) quote captures the practitioner reality: "I've read the terms and conditions. But giving some of that information to the person that I'm having to buy a three-quarter of a million-dollar machine from just doesn't sit quite right."

### 4.4 The Civil Eats March 2026 critical voice

Civil Eats (March 23, 2026): "A Hidden Crop for Corporate Tech: Farm Data. Precision agriculture tools promise to 'empower' farmers with AI-driven insights, but they may be signing away their rights to share the profits."

**Concrete data from the piece:**
- 27% of US farms/ranches use precision ag tools (US Government Accountability Office 2024).
- 70% of precision ag-tech users globally are large operators; smaller farms slower to buy in.
- Global precision farming market projected to reach $27 billion by 2030 (Mordor Intelligence).
- US farm bill (2026 skinny draft) bundled incentives for adoption.

**Critical questions raised:**
- "What if the main purpose of collecting all this data isn't to help farmers, but to sell more products?"
- "Where does data go if a startup folds?"
- "What if a bad foreign actor uses intelligence to disrupt the food system?"
- "Could government use evidence of fertilizer use today to punish a farm later for nitrogen pollution?"
- "What if the data lands with hedge funds or investors who manipulate commodity markets or drive down land prices?"

The piece is the strongest single source for the *critical-voice* perspective on proprietary farm data capture in the field guide.

## 5. Dark data

### 5.1 What "dark data" means in agrifood

Dark data is data that is *collected but not surfaced for broader use*. In agrifood, three categories:

1. **IoT sensor data** — soil moisture probes, barn environment sensors, climate sensors in greenhouses. Often collected by individual farms or vendors but aggregated only at the vendor level (and not surfaced publicly).

2. **Machine telemetry** — combine yield sensors, planter population sensors, sprayer volume sensors. Captured by equipment makers (Deere, AGCO, CNH) but aggregated and operationalised within vendor platforms.

3. **Government-classified satellite data** — high-resolution satellite imagery held by governments for national-security purposes, not released for agricultural use. Some countries (India, China, Russia) have meaningful classified satellite capacity that could theoretically benefit agricultural monitoring but is not released.

4. **Aggregator-pooled data** — vendors aggregate farm data into pooled datasets (anonymised, supposedly) but do not surface the pooled data for farmer benefit. The aggregate value flows to the vendor and to the model's training, not back to the contributing farmers.

### 5.2 The structural problem with dark data

Dark data is the *inequality* problem in agrifood AI. The farmers whose data trains the model receive the model's recommendations back, but the *aggregated insight* (regional patterns, market signals, supply-chain trends) is held by the vendor. This is the value capture concern that the FCC ecosystem-not-technology framework names as "data governance" as one of the four systemic constraints.

## 6. Critical voices on data governance

The data-substrate conversation has a distinct critical voice community that has been developing since the mid-2010s. Three distinct lenses:

### 6.1 IPES-Food / Monsalve / Seufert — corporate concentration lens

IPES-Food's *Head in the Cloud* (Feb 2026) names the corporate concentration of food system data. Monsalve Suárez and Seufert (FIAN International Secretariat) extend this to agritech in Latin America. The framing: Big Tech's data capture of agrifood is a structural concern distinct from the technology deployment itself.

### 6.2 Indigenous Data Sovereignty (CARE Principles, IEEE 2890)

The CARE Principles for Indigenous Data Governance (Collective benefit, Authority to control, Responsibility, Ethics) and IEEE 2890-2025 standard explicitly articulate Indigenous data sovereignty in agrifood contexts. The framing: Indigenous communities have the right to control data about their lands, crops, livestock, and food systems.

### 6.3 Civil Eats / farmer advocacy lens

Elizabeth Vaughan (Small-Farm Tech Hub at CAFF) in Civil Eats: "Is Amazon going to be our food producer 50 years from now, or Microsoft—or are we still going to have small farmers that provide for their local communities, grow culturally relevant crops, and have resilient community food systems?"

This is the small-farm / community-food-system lens on data capture. Distinct from the IDSov lens and from the IPES-Food corporate-concentration lens.

### 6.4 Right-to-repair as a data-governance lens

The FTC-Deere settlement (July 8, 2026) and the right-to-repair movement broadly engage with the data-governance question because equipment data access is a precondition for right-to-repair. The Deere / FTC / right-to-repair conversation is *also* a farm-data conversation.

## 7. Data cycle matrix

| Data type \\ openness × owner | Open state | Open civil society | Open industry | Proprietary industry | Dark / aggregated |
|---|---|---|---|---|---|
| Soil | SoilGrids, LUCAS | Open Soil Atlas | Syngenta Soil Health (partial) | Trimble Soil Information, vendor maps | IoT sensor streams |
| Crop | USDA NASS Cropland, Copernicus, FAOSTAT | CGIAR HarvestChoice | (rare) | Climate FieldView, Deere Ops, AGCO PTx, Taranis | Combine telemetry, vendor aggregation |
| Livestock | FAO GLW | (partial) | (rare) | Cainthus/Elanco, Lely, Merck, Afimilk | Barn sensor IoT |
| Environmental | Copernicus, GBIF | OpenAQ, Open Climate Fix | (rare) | Climate Corp (now Bayer), DTN | Government satellite classified |
| **Cross-cutting** | USDA Ag Data Commons, GODAN, CGIAR Platform | FAIR Principles, Ag Data Transparent certification | (rare) | Ag Data Transparent certified vendors | (across all categories) |

## 8. What this scan asks of the field guide

1. **The data substrate is now foregrounded in the field guide.** Talks about AI in agrifood need to engage with the data layer, not only the model and deployment layer.

2. **The three critical-voice lenses on data governance are now named in the field guide.** IPES-Food corporate concentration; Indigenous Data Sovereignty (CARE / IEEE 2890); farmer advocacy / community-food-system (Civil Eats / CAFF). The right-to-repair lens connects data governance to equipment access.

3. **Ag Data Transparent is the institutional response worth naming.** The certification scheme is the operational instantiation of farmer-data ownership rights.

4. **Dark data is the most under-catalogued cell.** Worth understanding as the *inequality* problem in agrifood AI.

5. **The matrix is now anchored to the field guide.** Talks that frame "the data substrate" of agrifood AI can use the matrix in this scan as a structural scaffold.

## 9. Schema observations

Three schema considerations emerging from this scan:

1. **Data substrate as a *cross-cutting framework unit*** captures the substantive data layer without making it a primary axis in the matrix. The schema's three primary axes (sector position × AI technique class × purpose) survive; data is a cross-cutting tag set. If the field guide extends to a v4 taxonomy, the data layer could be promoted to a fourth axis (data-substrate type).

2. **The `data-governance` cross-cutting tag could be added** with values: open / proprietary / dark / mixed. This would let content units be filtered by data-governance stance, which is a meaningful analytical dimension.

3. **The `data-rights-framework` cross-cutting tag could be added** with values: farmer-owned / vendor-owned / state-stewarded / Indigenous-sovereign / co-operative. This would let the field guide distinguish the Ag Data Transparent model from the IPES-Food model from the IDSov model.

These are v4 considerations. Worth naming for the next iteration; not in scope for this scan's immediate work.

## 10. Source list

Read in full or substantial part:

- Civil Eats (2026). *A Hidden Crop for Corporate Tech: Farm Data*. March 23, 2026. https://civileats.com/2026/03/23/a-hidden-crop-for-corporate-tech-farm-data/
- GODAN. https://www.godan.info/
- GODAN via CGIAR (2016). *A Global Data Ecosystem for Agriculture and Food*. https://cgspace.cgiar.org/items/7db049dd-989b-4df7-b13c-b5d765b17fbe
- CGIAR Big Data Platform. *Responsible Data Guidelines*. https://bigdata.cgiar.org/responsible-data-guidelines/
- CGIAR Big Data Platform. *FAIR Data Principles*. https://bigdata.cgiar.org/gardian-tool/fair-data-principles/
- USDA National Agricultural Library. *Ag Data Commons*. https://www.nal.usda.gov/services/agdatacommons
- ISRIC. *SoilGrids*. https://isric.org/explore/soilgrids and https://soilgrids.org/
- Copernicus Data Space Ecosystem. https://dataspace.copernicus.eu/
- Climate FieldView Privacy Statement. https://climate.com/en-us/legal/privacy-statement-faq.html
- Ag Data Transparent. https://www.agdatatransparent.com/
- Ag Data Transparent Principles. https://www.agdatatransparent.com/principles
- AgFunder News. *John Deere Obtains Ag Data Transparent Certification*. https://agfundernews.com/john-deere-obtains-ag-data-transparent-certification
- Dagne, T.W. *Access to and Control Over User Data in Agriculture*. Vanderbilt JETLaw. https://www.vanderbilt.edu/jetlaw/wp-content/uploads/sites/356/2022/06/2.-Dagne.pdf

Cross-references to existing field-guide units remain valid (FCC ecosystem-not-technology; Climate FieldView unit; John Deere See & Spray unit; Lely Astronaut unit; Taranis unit; Bayer Climate FieldView unit; Loblaw Blue Yonder unit; Neethirajan ecosystem unit; Pillaud ecosystem unit; CARE Principles / IEEE 2890 in earlier scans).