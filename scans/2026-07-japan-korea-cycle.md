# Scan — Japan + Korea Cycle: AI in Japanese and Korean Agrifood (July 2026)

## 1. Why this cycle now

The corpus, as of mid-July 2026, has **zero anchor units for Japan or Korea**. The only regional treatment of East Asia outside China is a single passing DJI mention noting "Japan" as an export market, and the China deepening scan's reference to "Japan, Europe (TLS-protected)" data-sovereignty positioning.

The gap is structural: the corpus's `maturity-scale` x `actor-type` matrix is dominated by NA-US/Canada (≈ 35 anchor units), EU (≈ 14), with South-Asia (India) as the recent cycle-driven addition (≈ 7 units, July 2026). The entire East-Asia region outside China — one of the world's most mature agrifood AI clusters in actual industrial terms — was unrepresented. Both Japan and Korea have substantive, *operating* AI deployments in 2026; ignoring them makes the corpus's regional geography wrong.

This cycle fills that gap. It is modeled on the India cycle footprint: **5 anchor units (the operational deployments that meet the corpus's "deployed multi-source" bar) + 1 state policy unit (the Korean *Act on Fostering and Supporting Smart Farming*) + 1 meta-pattern unit (Japan + Korea as a "state-anchored cluster programme vs capital-intensive industrial automation" structural pair).**

The intent is **content deepening first**, not methodology extension. Like the India cycle, the meta-pattern observation lives in both the scan narrative and a separate meta-pattern unit — not in the taxonomy. The v5 taxonomy does not need adjustment: existing `region:` values (East-Asia) plus the multi-country compound strings (e.g. `East-Asia (Japan; multi-country deployment via Yamaha)`) absorb the new units cleanly.

## 2. Layered findings

### Layer A — Industrial automation, equipment-vendor concentration (Japan, dominant pattern)

**Anchor unit:** Spread Co. / Techno Farm Keihanna. Spread's Techno Farm Keihanna has reached **99% operating rate** at **30,000 heads of lettuce per day**, with documented 80% process automation and 97% throughput yield at the predecessor Kameoka plant. The Techno Farm Cloud system (an IoT-based management platform) is the visible AI/ML layer. **Maturity: S3 / V1 / L2 / T3.** Spread has raised $30M (¥4B) Series A in 2023, the largest food-tech Series A in Japan, indicating that the deployment is being capitalised for the next-leg scale-out (Techno Farm Narita, Techno Farm Fukuroi).

**Anchor unit:** Yamaha Motor FAZER / RMAX unmanned-helicopter aerial-spraying platform. The FAZER R (released October 2016, with FAZER R G2 automatic-flight variant) carries a 32-litre chemical tank and covers approximately 4 hectares per flight. Yamaha RMAX helicopters are cited (WineBusiness, 2015, in the FAA exemption filing) as spraying **2.4 million acres annually**, covering more than **35 percent of Japan's rice fields**. The fleet originated with the 1997 RMAX (GPS-augmented); pre-2001 academic figure cites 1,220 units deployed. **Maturity: S3-S4 historical / V0 vendor-fleet scale; L4 generational (35-year product line); T3 institutional pathway via Japanese agricultural cooperative distribution.** The >35% rice-field coverage figure is **vendor-reported and the post-2015 fleet size is unverified** — both are encoded as G-IDs.

**Supporting unit (announced/pre-deployment):** Kubota Agri Concept 2.0 + Type: V + Type: S. Kubota's 2025 Expo 2025 Osaka pavilion showcased the "Type: V" (full-autonomy rice + paddy from tilling to harvest, height/width-transformable, automatic implement replacement) and "Type: S" (4-leg platform based on KATR, Best-of-Innovation CES 2025). At retrieval date these are concept vehicles — **no named commercial farming customer yet**. **Maturity: S0 / V0 / L0-L1 (announced, not yet deployed).**

**Supporting unit:** Yanmar SMARTPILOT robot tractor. Yanmar began robot-tractor development in 2011 and won the Minister of Agriculture, Forestry and Fisheries Award at the 7th Robot Awards in 2016. Cooperative multi-tractor work, remote operation, and multi-operation-per-pass are documented in the company's technical publications. **Maturity: S0-S1 (technology demonstrably operational); L2 (multi-generation since 2011); V0 on commercial fleet scale.**

### Layer B — State-anchored digital public infrastructure (Japan, secondary; Korea, primary)

**Anchor unit:** WAGRI (Japan). Operated by NARO under MAFF oversight since **April 2019**. Public agricultural data collaboration platform providing APIs in nine categories (weather, farmland, growth prediction, market conditions, pesticides/fertilizers, pest diagnosis, farm machinery, agribusiness, maps). NARO provides the growth-prediction API for protected horticulture (tomatoes, paprika, cucumbers); NTT InfraNet provides map data; MAFF provides market-condition data; Food Agricultural Materials Inspection Center (FAMIC) provides the pesticide registration system (≈ 7,400 registered agricultural chemicals). Peer-reviewed architecture documentation exists (Kawamura 2022, *Smart Agricultural Technology*). **Maturity: S2-S3 / V1 / L2-L3 (operational since April 2019) / T3 (institutional pathway via NARO + MAFF).** **The platform has a structural analogue to India's AgriStack DPI substrate (see meta-pattern unit).** Active API-customer count is unverified at the publicly-named level — encoded as G-NN.

**Anchor unit:** Korea — Smart Farm Innovation Valley (Sangju, Gimje, Milyang, Goheung). State-anchored cluster programme operated under RDA / MAFRA with FAO Digital Villages Initiative recognition for Sangju. Four sites, each with greenhouse complexes, rental smart farms, test centres, startup incubation centres (SIC), distribution centres. Trainee pipeline: 104 trainees in 2019 (Sangju + Gimje) → 81 graduated 2021 → 208 enrolled across all four sites in 2022 → 168 active. Crop specialties are differentiated by site: strawberries + tomatoes (Sangju); bell peppers + premium strawberries (Milyang); oranges + melons + tropical R&D (Goheung); functional food R&D + life-science integration (Gimje). **Maturity: S2 / V1 (FAO-confirmed) / L1 (first-generation since 2018 SIC launch) / T3 (institutional pathway via MAFRA's *Act on Fostering and Supporting Smart Farming* targeting 30% of agricultural output via smart farming by 2027).**

### Layer C — Greenhouse-automation vendor (Korea, secondary anchor)

**Anchor unit:** ioCrops. Founded 2017; Korea-origin AgTech with active deployment in Canada, Japan, Turkey, Australia, Poland, Saudi Arabia — multi-country out of Korea. Product surface: FTVC™ stack of greenhouse robots (HERMAI), IoT sensors, ioFarm (data-driven cultivation), Ation (labour management), Sprayer (pest control), Control Center. Operational system: Grotecture™ (proprietary greenhouse OS). Korean Media: Jinhyung (CEO) has described the system in HortiDaily trade interviews. Canada trade-press (Greenhouse Canada) confirms Ation already deployed in Korea. **Maturity: S2-S3 / V2 / L2 multi-country / T2-T3 institutional (Autonomous Greenhouse Challenge participation).**

### Layer D — Robotics / AI roadmap (Korea, announced)

**Anchor unit (announced/piloting):** Daedong AI Lab. Korea's leading agricultural-machinery vendor (the "Kioti" tractor brand internationally) operating through its AI-robotics subsidiary (founded 2024; CEO Choi Joon-gi). Three "AI domains": Mobility (vision-based autonomous driving), Operations (LLM-based "AI Daedongi" chatbot extending to Agentic AI), Cultivation (crop-specific AI). Collected ~500,000 orchard/field images + ~3M driving-video samples — described as "the largest agricultural dataset in Korea" (Daedong self-statement). **Flagship tractor with Level 4 autonomy scheduled for release in H1 2026.** RT-100 government-certified autonomous agricultural transport robot launched February 2025. **Maturity: S1 (announced/piloting); L1 (first-gen); T2.** Doosan Robotics + Daedong partnership (Oct 2025) for agricultural mobile platform + field data. **V0 vendor self-statement; track the H1 2026 L4 release as the verification trigger.**

### Layer E — Policy frame (Korea)

**State-policy unit:** *Act on Fostering and Supporting Smart Farming* (Republic of Korea). Statutory target: 30% of agricultural output via smart farming by 2027. 2025 MAFRA designated four smart-farming fostering zones (si/county level). Smart Farmland Distribution Centers planned to scale from 14 (2023) → 26 (2024) → 100. **Maturity: policy-deployment S2 (statute active, four designated zones operational) / V0 (MAFRA self-reported, no independent audit at time of recon) / L1 (first-generation since statutory 30%-by-2027 target) / T3 (institutional pathway via RDA + MAFRA).**

**Adjacent / supporting:** KT Corp. (Korea Telecom) $5.4B 18-trillion-won "AX Platform Company" initiative announced July 2026 — includes 5 trillion won on AI data centres for physical AI / autonomous driving, 1GW capacity. November 2024 KT launched an upgraded AI-powered digital farming advisory platform (satellite + sensor + predictive). **Not a deployment unit per se; encode as supporting context for the Korean state-anchored digital infrastructure layer.**

### Layer F — Retail / consumer-side context (cross-border reference only)

**Adjacent / not anchored:** Coupang ML-driven retail forecasting. The Harold Rogers (interim CEO) Semafor speech and the WSJ 2021 reporting document the same conceptual category as US Amazon Fresh / Instacart forecasting. **Korea context but not agrifood-production AI.** Tag in the cycle's "what this cycle does NOT cover" section as a Korea retail-anchor only; do not draft a primary unit. **Market Kurly on-farm ML = NOT verified.** Negative finding.

## 3. What this cycle adds

### 3.1 Coverage deltas

| Region tag | Pre-cycle | Post-cycle | Δ |
|---|---|---|---|
| East-Asia (Japan) | 0 anchor | 4 anchor + 1 state-policy + 1 supporting announced | **+5–6** |
| East-Asia (Korea) | 0 anchor | 2 anchor + 1 state-policy + 1 supporting announced | **+3** |
| East-Asia (cluster-pattern) | 1 (China) | 2 (China + Japan/Korea pair) | +1 |

### 3.2 New gaps (G-IDs)

Carried from recon and renumbered with corpus's G-ID sequence (next available: G-073):

- **G-073: Independent identification of WAGRI API customer bases.** The platform is documented (peer-reviewed + government explainer) but the active customer-side roster is gated behind WAGRI membership.
- **G-074: Spread Co. Techno Farm Narita operational date confirmation.** Narita is "under construction" in pre-2022 sources; no 2025-2026 confirmation surfaced.
- **G-075: Independent audit of Yamaha Motor Japan aerial-spraying fleet post-2015.** The "2.4M acres annually / >35% of Japan's rice fields" figure (2015 WineBusiness, citing Yamaha's FAA exemption filing) is not independently audited; modern fleet size unknown.
- **G-076: Kubota Type: V commercial-deployment confirmation post-2025.** Type: V was a 2025 Expo Osaka demonstration; no named commercial-farming customer has been announced.
- **G-077: Korean meat-processing / post-harvest line-level AI deployments.** No equivalent of Cargill CarVe, JBS-Völur, Tyson-Panorama, or TOMRA-Key Technology deployments surfaced for Korean processors. (Negative-finding-as-output.)
- **G-078: NAVER agrifood AI deployment.** NAVER Labs has robotics programs (AMBIDEX, M1 robot arm) but no published NAVER agrifood-deployed product surfaced.
- **G-079: Korean NACF / NongHyup agrifood-data platform product (analogous to AgriStack or JoinData).** NH Bank is the financial arm of the National Agricultural Cooperative Federation (NACF, 농협), but the cooperative-orchestrated agrifood-data-API product comparable to India's AgriStack or NL's JoinData is not in primary sources.

### 3.3 New contested claims (C-IDs)

- **C-054: "Japanese agrifood AI is aging-farmer-targeted industrial automation; Korean agrifood AI is state-orchestrated young-farmer incubation."** Structural pattern claim. Surface in the meta-pattern unit. *Not defensibly contested without more data — encodes the pattern observation the user wanted surfaced, with the Korea-side clearly anchored in MAFRA's 30%-by-2027 youth-farmer target and Sangju's SIC trainee pipeline.*

- **C-055: "Yamaha's >35% rice-field coverage in Japan is the highest automated-spray penetration of any national agriculture."** Likely true on the figure alone (FAA filing + MAFF agricultural-policy context), but the modern fleet-size is a gap (G-075). Surface the figure with V0 tag.

### 3.4 Schema / methodology changes

**None required.** The existing `region:` tag with `East-Asia` compound strings (`East-Asia (Japan; …)`, `East-Asia (Korea; …)`) absorbs the new units. The v5 maturity dimensions illuminate the differential scale / verification / translation / longevity of these deployments the same way they do for India, NA, and EU — no schema-level change is needed to express the new content.

## 4. What this cycle does NOT cover

**Explicit non-coverage — encode these so future recons / cycles know where the boundary is:**

1. **Korean post-harvest / processing AI.** No line-level meat-processing AI (Cargill CarVe equivalent) found. White space. G-077 captures this.
2. **NAVER agrifood AI.** NAVER is a major Korean AI platform with corporate-level commitment to AI but no published agrifood-deployment product. G-078. The Nextplant project is referenced but not verifiable at deployment scale.
3. **Coupang retail-forecasting AI.** Not agrifood-production AI; same conceptual category as NA Amazon / Instacart retail forecasting. Cited as Korea retail context only.
4. **Japanese post-harvest / processing AI (Nisshin Seifun, Ajinomoto, Nippon Ham).** Searched but did not surface — Japan's processing-AI footprint (if it exists at the line level) is not published at the press-release density of NA's processors. **Likely under-disclosed rather than absent — flag for future research.**
5. **Korean fisheries AI.** Not searched. Out-of-scope for the agrifood-AI cycle, but worth surfacing for a later fisheries cycle.
6. **Yamaha FAZER R G2 outside-Japan deployment.** Yamaha aerial-spraying helicopters have global Australia / US (via FAA exemption) deployments — those are not Japanese agrifood deployments and out of scope.
7. **Deep-dive on the 2024 revision of the *Act on the Promotion of Smart Agricultural Technology Utilization to Improve Agricultural Productivity* (Japan, effective October 2024).** Out of scope for a deployment-cycle; relevant to a separate Japanese state-policy unit (not drafted this cycle).

## 5. Source list

### 5.1 Primary corporate / government / institutional

- MAFF (Japan) — <https://www.maff.go.jp/e/policies/tech_res/smaagri/attach/pdf/WAGRI.pdf>
- WAGRI (NARO) — <https://wagri.naro.go.jp/>
- Yamaha Motor (global) — <https://global.yamaha-motor.com/design_technology/technology/electronic/008/>
- Kubota Corp. — <https://www.kubota.com/news/2025/20250310.html>, <https://www.kubota.com/news/2025/20250207.html>
- Yanmar — <https://www.yanmar.com/global/agri/smart_agri/agricultural_machinery.html>
- Daedong / Daedong AI Lab — <https://daedong-kioti.com/news/daedongnews/1313>, /1315, /1318
- KT Corp. — <https://en.yna.co.kr/view/AEN20260706002751320>
- NongHyup Bank — <https://vpr.hkma.gov.hk/statics/assets/doc/100341/ar_24/ar_24_eng.pdf>
- ioCrops — <https://www.iocrops.com/?lang=en>
- MAFRA / Korea.net — <https://www.korea.net/NewsFocus/policies/view?articleId=255753>, <https://www.korea.net/Government/Briefing-Room/Press-Releases/view?articleId=573412>
- FAO Digital Villages Initiative — <https://www.fao.org/digital-villages-initiative/asia-pacific/digital-villages-list/digital-villages/sangju-village-(republic-of-korea)/en>

### 5.2 Peer-reviewed / institutional research

- Kawamura 2022 — <https://www.sciencedirect.com/org/science/article/pii/S1947319222000016> (WAGRI architecture; cited 16 in *Smart Agricultural Technology*)
- Ceccarelli 2022 — FAO / ageconsearch (ioCrops deployment pattern; cited 26) — <https://ageconsearch.umn.edu/record/330811/files/cc2912en.pdf>
- Bissadu 2025 *Society 5.0-Enabled Agriculture* — <https://www.sciencedirect.com/science/article/pii/S2214317324000234> (cited 114)
- OECD 2025 Japan Agricultural Policy Monitoring and Evaluation — <https://www.oecd.org/en/publications/2025/10/agricultural-policy-monitoring-and-evaluation-2025_354e7040/full-report/japan_d94ab3f7.html>
- MDPI Society 5.0 (Narvaez Rojas 2021, cited 546) — context only

### 5.3 Trade press with named source

- VerticalFarmDaily — <https://www.verticalfarmdaily.com/article/9283357/japan-operating-rate-of-99-in-large-scale-automated-farm/>
- Hortidaily — <https://www.hortidaily.com/article/9209430/using-data-and-a-data-management-platform-to-turn-the-autonomous-greenhouse-into-a-reality/>
- Greenhouse Canada — <https://www.greenhousecanada.com/sponsored/optimize-labour-costs-and-maximize-greenhouse-profits-with-data-driven-solutions/>
- Maeil Kyungjae (English) — <https://www.mk.co.kr/en/business/12030798>
- Korea Times — <https://www.koreatimes.co.kr/business/companies/20251020/doosan-robotics-daedong-team-up-for-agricultural-robots>
- Yonhap News — <https://en.yna.co.kr/view/AEN20260706002751320>
- Farm Equipment — <https://www.farm-equipment.com/articles/23336-kubota-unveils-new-solutions-at-ces-2025-enhancing-equipment-with-connectivity-and-automation>
- WineBusiness — <https://www.winebusiness.com/wbm/article/154846> (Yamaha RMAX FAA exemption context)

### 5.4 Tier-1 tech press (acceptable context)

- Forbes — <https://www.forbes.com/sites/andrewwatman/2025/01/09/ces-2025-best-of-agritech-and-ai-in-sustainable-farming/> (CES 2025 Korean vertical farms)
- WSJ — <https://www.wsj.com/business/retail/after-coupang-another-south-korean-delivery-company-catches-u-s-ipo-fever-11615482737>

### 5.5 Ignored (Tier-7/8 — not used)

- Vocal.Media, KD Market, IMARC, Data Bridge (Tier-7/8 SEO recycling; ignored)
- LinkedIn posts (Tier-7; used only as "this person works on this area" context, never as deployment claim)

### 5.6 Cross-corpus reference

- `~/agrifood-ai-field-guide/units/india-agrifood-ai-pattern.md` — the prior cycle's meta-pattern unit; used as structural reference for the East-Asia meta-pattern drafting.
- `~/agrifood-ai-field-guide/scans/2026-07-china-deepening.md` — the existing East-Asia unit/scan context; the new Japan+Korea cycle is structurally *different* (state-anchored cluster + equipment-vendor concentration; China's state-vendor hybrid with provincial autonomy is distinct from both).
- `~/ai-agrifood/recon-japan-korea-agrifood-ai-2026-07-19.md` — this cycle's upstream recon document.

## 6. Freshness

Verified 2026-07-19. Verification-trigger dates for unit refresh:
- **Daedong AI Lab — H1 2026 L4 tractor release**. If confirmed at release date, promote `daedong-ai-lab-korean-agriculture.md` from S1 to S2 with V1 vendor-customer naming.
- **MAFF quarterly WAGRI update.** Site maintenance log shows 12 June 2026 Open Day and 22 May 2026 maintenance window — operating through 2026.
- **Spread Co. Techno Farm Narita.** Pending operational date — unverified.
- **Year-end 2026 — Korean 30%-by-2027 target interim measurement.** MAFRA is the source.
