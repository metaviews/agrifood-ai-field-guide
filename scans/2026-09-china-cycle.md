---
title: China Cycle — September 2026; the primary-document cycle; thirteen units closing the policy, livestock, aquaculture and processing cells, with the corrected policy chain, the verification posture across the cycle, and the finding that China instrumented agriculture from the state inward
date: 2026-09
status: author-facing internal scan
region: East-Asia (China)
---

# China Cycle — September 2026

**Status.** Author-facing internal scan. Cycle-document for the **China primary-document cycle** — the thirteen units that turn the July 2026 China deepening scan's leads into primary-sourced material, plus one verification pass that corrected the corpus's drone record.

**Builds on:** `scans/2026-07-china-deepening.md` (the July cycle: platforms, drones, rural revitalisation, import signal); the sister research project `opensource-agrifood`'s August 2026 China scans (open-weight agricultural models, ag-digital infrastructure); and the airborne verification recon at `~/ai-agrifood/recon-china-drones-export-2026-09-14.md`.

**Cutoff.** 2026-09-14.

**Method.** Chinese-language primary sourcing, deliberately. The July cycle was built largely on English-language secondary and consultancy sources; this cycle went to the documents themselves — government portals (moa.gov.cn, cac.gov.cn, nda.gov.cn, hlj.gov.cn, provincial agriculture bureaux), university news services (cau.edu.cn, njau.edu.cn), national institute pages (caas.cn, ags.ac.cn), central-enterprise newsrooms (sinograin.com.cn, cofco.com.cn), company and exchange disclosure (XAG's Hong Kong prospectus), and Chinese academic journals (华南农业大学学报, 农业工程学报, Computers and Electronics in Agriculture). Where a source is a search-result snippet rather than a read page, it is marked as such.

**Why the language mattered.** Two of the cycle's biggest corrections — that the corpus's "Rural Revitalization 2027 Plan" anchor was a consultancy artefact, and that XAG's "more than half of Chinese drone sales" was contradicted by XAG's own commissioned data — were only visible from Chinese-language sources. Two research passes in this cycle failed to return reports at all (600-second limits, then repeated API stalls), which is itself a finding about the cost of non-English research passes.

---

## 1. Why this scan now

The July China cycle produced a strong picture of the *platform* layer — Alibaba's ET Agricultural Brain, Tencent, Pinduoduo, JD, DJI, XAG — and a policy frame drawn from secondary summaries. It left three things unresolved:

1. **The policy chain was not read.** The corpus described the state-directed umbrella through a consultancy brief and a Tandfonline paper, without the instruments themselves.
2. **Whole sectors were empty.** Livestock (one dairy unit), aquaculture (nothing), post-harvest and processing (nothing) — in the country that produces roughly half the world's pork, the most farmed fish, and holds the largest grain reserve on earth.
3. **The drone record contained errors and unverified vendor totals.** Operator certification was misdescribed; two actor names did not exist; environmental claims had never been checked against each other.

This cycle closes all three.

---

## 2. What the cycle added — thirteen units

**Policy and infrastructure (4).**

- `china-smart-agriculture-action-plan-2024-2028.md` — MARA's National Smart Agriculture Action Plan read at article level: the 30%/32% informatisation targets, the three public-service products (national big-data platform, land-use "one map", **base-model open platform with a mandated open-source agricultural model community**), the per-production-type equipment lists, and the Zhejiang pilot linking 浙农码 to 全农码 at 1,000 digital agriculture factories and 100 future farms by 2028.
- `china-no1-central-document-2026-ai.md` — the 2026 No. 1 Central Document, where AI appears as **one clause inside "new quality productive forces"** alongside drones, IoT and robots: an authorisation, not a budget.
- `china-digital-village-plan-2026-2030.md` — the CAC/MARA/MIIT Digital Village plan issued 11 September 2026, three days before the scan. Supersedes the corpus's 2027-Plan framing.
- `china-mara-agricultural-data-resources-2026.md` — MARA's measured data estate: 38 PB capacity, 18 PB stored, 105 TB open (+42%, 4,673 datasets), 3 TB "high-quality" datasets, **240 million tokens consumed annually**.

**Livestock (4).**

- `muyuan-smart-pig-farming.md` — the world's largest pig producer as a producer-operator: 30+ smart devices per pig lifetime, 1,000+ R&D staff, 697 patents, IoT platform with 1.61 m devices connected and 1.04 m online daily, >60 m head served; the May 2026 Hengqin AI-and-robotics subsidiary.
- `china-pig-farming-ecosystem-2018-2026.md` — the causal chain: African swine fever (August 2018) and the 2019 State Council opinion built the vendor layer, not a technology push. Yangxiang's chip-to-feed-mill loop, New Hope's Xinjin farm, Nxin's Pig Network (10 m+ pigs), Xiaolong Qianxing's rail robots; peer-reviewed SCAU review; retrofit cost, retraining and weak information use named by Chinese analysts as the exclusion mechanism.
- `wens-ai4s-agri-research-platform.md` — Wens × Huawei × CAAS × iSoftStone, July 2026: "1+3+N" across gene breeding, health and feed nutrition. The AI-for-research turn; import dependence on high-end breeding stock as the stated motive; feed at 60-70% of production cost.
- `china-livestock-ai-standards-and-research-infrastructure.md` — NY/T 5655-2026 (first agricultural industry standard for pig-farm liquid-feeding digital management, with "data islands" as the named problem) and CAAS's HABLer behaviour-annotation tool (peer-reviewed; 0.87 mean frame accuracy; ~60% less expert annotation time; integrating into the national HERD livestock data platform).

**Aquaculture (2).**

- `china-smart-fisheries-fanli-llm.md` — Fanli 1.0 (June 2024) to 4.0 (August 2026): 397 billion parameters, eight aquaculture dimensions, 101 farmed species, plus the world's first public smart-fisheries dataset (116,000 image frames, 698,000 annotations) released open under FAO auspices.
- `china-deep-sea-smart-aquaculture-platforms.md` — the offshore build-out: 30,000+ gravity cages against 89 truss cages and 6 farming vessels; the Lianjiang county instrumented-platform case (~70% labour-cost saving, +30% dissolved oxygen, 11 platforms at ~180,000 m³ and ~1,800 t/yr); Shenzhen's four 100,000-tonne farming vessels at CNY 2.29 bn; marine-fishery data registered as state-recognised assets.

**Processing and post-harvest (2).**

- `china-grain-storage-ai-jiyuan.md` — Sinograin's Chengdu institute: the intelligent sampling and inspection system (>4 m tonnes through 80 enterprises, detection efficiency more than doubled, 2025 top-ten grain-circulation achievement), the 稷元 grain-storage model (200,000+ knowledge units, hosted on SASAC's AI platform), seven grain-condition modes with 21-day forecasting and 20+ stored-grain pests, 26 patents and 6 national standards.
- `china-food-processing-smart-factories.md` — MIIT and five other departments require excellent-level smart factories to have AI scenarios at ≥30% and leading-level ≥60%; COFCO's MMV flour mill; Mengniu's Ningxia plant at ~100 employees / 1 m tonnes / CNY 10 bn; prepared dishes (projected CNY 1.072 trn by 2026); sorting equipment exported to 120+ countries.

**Verification pass (1 new unit, 3 rewritten).**

- NEW `china-agricultural-drone-drift-liability.md` — MARA's own institute on ~25% fine-droplet drift and multi-kilometre herbicide movement; documented cases (Gansu: 274 households; Tianjin Baodi: 600+ mu of grapes; ~10 forensic assessments in three provinces in two months of 2026); NY/T spray standards effective 2026; subsidy telemetry as de facto enforcement.
- Rewritten: `dji-agriculture-global-export.md`, `xag-china-drone-leader.md`, `chinese-agritech-belt-and-road-export.md`.

---

## 3. The corrected record

| Previous record | Correction | Source |
|---|---|---|
| "Rural Revitalization 2027 Plan" as one of three anchor policy documents | Superseded. The 15th-Five-Year-Plan-era instrument is the CAC/MARA/MIIT **Digital Village High-Quality Development Action Plan (2026-2030)**, issued 11 September 2026. The 2027 Plan came from a consultancy brief. | cac.gov.cn |
| XAG "accounts for more than half of Chinese agricultural drone sales" | Contradicted by XAG's own commissioned Frost & Sullivan data in its prospectus: China agri-drone share 20.8%, China agri-robotics 18%. | XAG HK prospectus, via 新浪财经 / 证券时报 |
| DJI's "certified pilots" as licensed operators | Not CAAC licences. Agricultural drone operators hold **manufacturer-issued certificates** under the joint CAAC/MARA training rule; individuals flying their own land need no aviation licence; operating units need an operating certificate. | CAAC/MARA 2025 rule; Hubei provincial confirmation |
| DJI's environmental totals (222 Mt water / 30.87 Mt CO₂) as a series | DJI's two 2026 documents **disagree with each other**: 410 vs 480 Mt water, 51 vs 61.32 Mt CO₂, no methodology, no as-of date. G-033 closed as vendor-stated only. | DJI announcements, 2026-04-29 and 2026-07-29 |
| "TTA" and "Anyvision" as Chinese agri-drone competitors | Do not exist as such actors. Verified competitors: EAVISION (苏州极目机器人), 无锡汉和, 深圳天鹰兄弟, 珠海羽人, 安阳全丰. | 2022 peer-reviewed industry survey; company sources |
| Belt-and-Road agritech export as a hyperscaler-led programme (G-191) | Does not hold as framed. Export runs through hardware OEMs and dealer channels, one named corporate JV (XAG × Charoen Pokphand, Thailand); no BRI-labelled agritech programme in the actors' own materials; no Alibaba/Tencent agricultural export deployment found. | Verification recon, 2026-09-14 |
| Shennong (神农) and Sinong (司农) as one model | Two models. 神农大模型 is China Agricultural University (v4.0, July 2026, pest/disease recognition 615 → 1,016 species at >93%). 司农大模型 is Nanjing Agricultural University (open-weight 8B and 32B). | cau.edu.cn; njau.edu.cn |
| China "fully drone-saturated" | Co-founder Gong Jiaqin states **~8% of Chinese farmland has drones attached** (up from 3-5%). | 21世纪经济报道, 2026-06-29 |

---

## 4. The cross-cutting finding

**China instrumented its agriculture from the state inward.** Across all thirteen units, the pattern that recurs is not farmer demand, vendor competition or productivity pressure at the farm gate. It is state capacity seeking visibility and control over its own stocks and flows:

- The **grain reserve** gets AI first and most completely — automated intake inspection, a storage model, 21-day condition forecasting — because the state needs to know what is in its silos (Beijing's own phrasing: a shift from "watching the site" to data-based supervision).
- **Offshore aquaculture platforms** are instrumented at construction, with data registered as state-recognised assets, because provincial capital built them and needs the telemetry.
- The **national data programme** measures its own estate (38 PB capacity, 18 PB stored) and its own model consumption (240 million tokens a year) rather than farm adoption.
- **Standards** come out of the same institutes that deploy: six national standards from the grain-storage programme, an industry standard from a provincial extension station, a model standards series from the ministries.
- Even the **open-source agricultural model community** is mandated by a ministry plan rather than emerging from developers.

The corollary is that the corpus still has almost no evidence of Chinese *farmers* using agricultural AI. The one number that speaks to it — 240 million tokens a year against roughly 200 million farm households — suggests the on-farm layer is thin. The state layer is real and instrumented; the farm layer is largely unmeasured.

A second cross-cutting finding: **AI arrives in Chinese agriculture inside existing instruments, not as a new programme.** The No. 1 Central Document folds it into productive forces; the Smart Agriculture Action Plan folds it into extension and platforms; MIIT folds it into factory tiering. There is no Chinese "AI in agriculture strategy" in the sense of the USDA's or the EU's — and that is a structural difference worth naming whenever national approaches are compared.

---

## 5. China activity matrix, updated

Filled cells indicate at least one substantive unit; the July matrix's empty cells are marked in the final column.

| Sector | Technique | Coverage after this cycle |
|---|---|---|
| On-farm — open field | aerial robotics | **Strong** — DJI, XAG (corrected), drift liability |
| On-farm — open field | ground robotics | **Strong** — `units/china-ground-robotics-unmanned-farms.md` (written Sept 2026 after this scan: MARA's promoted-technology catalogue with its precondition clauses, Jiangsu's 283 documented farms, Beidahuang future farms, XAG Super Cotton Field, Heilongjiang laser weeding; binding constraint is land structure, not AI) |
| On-farm — open field | predictive ML / CV | Thin — Pinduoduo competition, Alibaba ET brain |
| Animal production | CV / IoT | **Strong** — Muyuan, ecosystem, standards, Wens |
| Animal production | generative AI | New — Wens AI4S (announced); HABLer (research) |
| Aquaculture | generative AI | **New** — Fanli 1.0-4.0, public dataset |
| Aquaculture | IoT / platforms | **New** — deep-sea platforms, Lianjiang case, Yu Junshi freshwater platform |
| Post-harvest / storage | CV + LLM + robotics | **New** — Sinograin/稷元, inspection robots |
| Processing | CV + scheduling + digital thread | **New** — COFCO, MIIT tiering, prepared dishes, sorting equipment |
| Distribution / cold chain | — | Still empty — cold chain appears only as a module inside COFCO platforms and the 十四五 cold-chain plan |
| Consumption | — | Still empty |
| Waste and recovery | — | Still empty |
| Inputs (seeds) | AI breeding | Partial — Longping/CAAS seed unit from July; Wens' breeding agents |
| Cross-cutting | policy | **Strong** — four policy/infrastructure units from primary documents |

---

## 6. Cluster patterns for China, updated

The July scan named a **state-led, provincial-autonomy** pattern. This cycle gives it structure:

1. **State-directed umbrella with named instruments.** Annual No. 1 Central Document → five-year ministry plan (Smart Agriculture Action Plan) → cross-sector informatisation plan (Digital Village 2026-2030) → data programme (数据要素×) → industrial programme (MIIT smart factories). Each layer names its own products, targets and standards.
2. **State-farm and state-enterprise vehicles.** Beidahuang and Guangdong Land Reclamation appear in the Action Plan's addressee list; Sinograin and COFCO are the reserve and processing implementers; provincial platform operators run the offshore aquaculture build-out. The corpus's earlier "who deploys" gap is answered: state enterprises, with named documents.
3. **Provincial variation as the implementation unit.** Zhejiang (leading district, 浙农码/全农码 linkage, 1,000 factories), Heilongjiang (unmanned farms, laser weeding, "future farms"), Chongqing (pig industry brain, the liquid-feeding standard), Guangdong (offshore platforms, prepared-food factories), Liaoning (COFCO smart-factory ratings).
4. **State-adjacent research infrastructure as a distinct layer.** CAU's National Digital Fisheries Innovation Centre (Fanli + public dataset), CAAS's Institute of Animal Science (HABLer + HERD data platform), Sinograin's Chengdu institute (稷元 + standards), MARA's standardisation committees. These institutions write the standards and hold the data platforms.
5. **A closed commercial platform layer underneath.** Muyuan, Yangxiang, Nxin and JD/Tencent platforms hold their own farm data; Chinese commercial agricultural data is fragmented by platform, which is why the state's own framing includes "data islands" as the problem to solve.
6. **Hardware OEM export as the international channel.** DJI, XAG, EAVISION through dealers and one corporate JV; no platform export; US market access narrowing while Brazil, Thailand and Latin America open.

---

## 7. Verification posture across the cycle

| Level | Units |
|---|---|
| **V2** (third-party / regulated disclosure) | XAG (Hong Kong prospectus — the only tier-2 agritech dataset in the cycle) |
| **V1** (peer-reviewed or official institutional with named figures) | HABLer (Computers and Electronics in Agriculture); the SCAU intelligent-pig-factory review; Sinograin/稷元; MARA and NDA case studies; DJI's effectiveness evidence via *Food Policy* 2025 (Yunnan rice) |
| **V0** (vendor- or institution-reported only) | Muyuan; Wens AI4S; Fanli; DJI's environmental totals; the prepared-food and processing company claims; the Digital Village plan's indicators |

**The structural observation.** China's agri-AI record is *government-primary but unaudited*. Most of it comes from ministries, state enterprises or university institutes rather than from marketing — which should raise the corpus's confidence in the facts — but almost none of it has been checked by a party with no stake in the programme. The one case where regulated disclosure exists (XAG) immediately contradicted a claim that had circulated in Western trade press. That is the argument for treating Chinese state-sourced figures as better than vendor-sourced and still short of verified.

---

## 8. The instruments of Chinese agri-AI governance

For reference — the document chain this cycle read in primary form:

1. **2026 No. 1 Central Document** (中共中央 国务院, 3 January 2026) — AI as one clause in agricultural new-quality productive forces; drones, IoT and robots as scenarios.
2. **National Smart Agriculture Action Plan (2024-2028)** (MARA, 农市发〔2024〕4号, October 2024) — 30% informatisation by 2026, 32% by 2028; national big-data platform; land-use "one map"; base-model open platform and open-source model community; per-production-type equipment lists; Zhejiang pilot.
3. **Digital Village High-Quality Development Action Plan (2026-2030)** (CAC + MARA + MIIT, 11 September 2026) — eight indicators to 2030 (not published in the release), five areas, 24 measures.
4. **数据要素× programme** (National Data Administration) — agricultural data estate metrics; public-data demonstration cases; the 2026 competition's 现代农业 task list including agricultural large models, trusted data spaces and subsidy delivery.
5. **Smart-factory tiered cultivation** (MIIT and five departments, 2026) — AI scenarios ≥30% for excellent level, ≥60% for leading level.
6. **NY/T standards** — spray operations (NY/T 2882.10-2025, effective May 2026), pig-farm liquid-feeding digital management (NY/T 5655-2026), 智慧渔场 construction, and the 农业农村大模型 standards series.
7. **Subsidy architecture** — machinery purchase subsidies (2024-2026 framework, ~30% cap, 35% for short-board machinery) with provincial usage conditions that make telemetry the verification instrument.

---

## 9. New gaps surfaced by this cycle

G-441 through G-466, grouped:

- **Implementation evidence** — G-441 (base-model open platform and open-source community operationally), G-442 (whether the No. 1 Document's AI clause carries budget), G-443 (the Digital Village plan's eight indicators), G-444 (definition and scope of the 240 m token figure), G-445 (state-farm enterprises as AI operators).
- **Outcomes** — G-446 (Muyuan's figures and cost outcomes), G-447 (any livestock AI outcome figure), G-448 (Wens AI4S phase-one), G-463 (whether 稷元 reduced storage loss or supervision cost), G-465 (processing AI outcomes), G-460 (deep-sea platform economics), G-461 (ecological claims at deep-sea platforms).
- **Adoption at farm level** — G-458 (aquaculture AI adoption), G-456 (drone operator population), G-455 (per-drone utilisation against the 15th-FYP implied 10,000 mu-times), G-462 (re-verify Sinograin's 98%-class figures).
- **Standards and take-up** — G-449 (NY/T 5655-2026 take-up), G-454 (spray-standard enforcement), G-459 (智慧渔场 and the model standards series), G-464 (what the MIIT AI-share actually measures).
- **Data, trust and liability** — G-452 (a drift-incidence series), G-453 (drift compensation practice), G-450 (HERD platform operation and access terms), G-466 (prepared-dish traceability: who holds the data).

---

## 10. New contested claims surfaced by this cycle

- **"China is drone-saturated."** Counter: the sector's own co-founder says ~8% of farmland has drones attached.
- **"China's agricultural AI is a vendor-driven deployment story."** Counter: the instruments, the platforms, the standards and the data estate are all state-built; the commercial layer sits underneath.
- **"The state-mandated open-source model community is a commons."** Counter: commons by mandate is a different object from commons by community — the corpus's open-source thread should compare them explicitly rather than treating both as open.
- **"AI will replace agricultural labour at scale" (C-326), Chinese evidence.** Counter-evidence and support from one unit: Muyuan replaces repetitious barn work wholesale, while XAG's drone labour is substituted through service providers rather than displacing farm workers, and the deep-sea platforms' ~70% labour saving has no disclosed baseline.
- **"Automation reduces agricultural labour in Chinese processing."** Mengniu's Ningxia plant (≈100 staff, 1 m tonnes) supports it; no employment series exists either way.

---

## 11. What this cycle did not do

Negative findings, stated plainly:

- **No independent evaluation of any Chinese agricultural AI system was located** — not for Fanli, Muyuan, Wens, Sinograin, the deep-sea platforms or the processing plants. Every outcome number in the cycle is from the deploying actor.
- **No farm-level adoption evidence for any Chinese agricultural LLM.** Fanli's reach is institutional.
- **No critical-voice literature in Chinese livestock AI.** The only critical framing located is economic (which farms are excluded), not welfare- or surveillance-focused. The corpus's critical-voice tags are correspondingly light in this cycle, which is a gap in the corpus's Chinese coverage rather than a finding that such voices do not exist.
- **No systematic drift or storage-loss statistics** — only reported cases and institutional figures.
- **No distribution, consumption or waste-recovery units for China at all.**
- **The ground-robotics and unmanned-farm unit is still unwritten** despite strong harvested material (MARA's >1,000 unmanned farms across 23 provinces; the ten promoted smart-agriculture technologies; Heilongjiang's laser-weeding "future farms"; Ningxia's state-farm programme).
- **Two research passes failed outright** (time limits, then API stalls) and a third source — Sinograin's WAIC announcement — failed to load, leaving one figure at snippet level (G-462).

---

## 12. What this scan is doing in the corpus

The July China scan's successor at the **cycle** layer. Where `2026-07-china-deepening.md` reported a platform-and-policy picture from English-language secondary sources, this scan reports a **document-chain and deployment-vehicle picture from primary Chinese sources**, and it is the first China cycle in which the state's own instruments — plans, standards, data-estate statistics, state-enterprise systems — are the primary evidence rather than context.

It also establishes the corpus's **reserve-and-platform-first** reading of Chinese agri-AI: the state instrumented what it owns before it instrumented what farmers do.

## Why this scan matters for talks

- **The document chain is citable.** Seven named instruments, with issue dates, numbers and departments — the most concrete policy evidence the corpus holds for any jurisdiction outside the EU.
- **240 million tokens a year** is the corpus's best anchor for Chinese agricultural AI actually being used, and it is small.
- **~8% farmland drone coverage** against a fleet of 300,000+ units is the honest frame for the drone story.
- **AI inside existing instruments** — not a standalone strategy — is the structural difference from the US and EU approaches, and it is more useful for comparison than any deployment count.
- **The corrections are usable as method.** Three claims in circulation (China's drone saturation, XAG's market position, DJI's certification regime) survived only until someone read a Chinese primary source. That is the argument for the corpus's verification tiers in one sentence.

## Critical context

- **Government-primary is not the same as verified.** Most cycle figures come from ministries, state enterprises or national institutes — better provenance than vendor press, still unaudited.
- **The Chinese state's self-reporting has structural incentives.** Programme case libraries select successes; ministries report against their own targets; enterprise newsrooms report against ratings.
- **The cycle is policy-heavy relative to deployment evidence.** That reflects the sources available: Chinese deployment detail exists, but outcome detail does not.
- **Non-English research costs more than it looks.** Two passes failed on time limits and the replacements stalled on API calls; the Chinese-language work that did land took materially longer per source than the English-language equivalent.
- **The scan does not attempt China-vs-EU or China-vs-US comparison.** The materials now exist for it; that is a separate piece of work.

## Links

### Future units surfaced by this scan

- ~~**Ground robotics and unmanned farms in China**~~ — **written** as `units/china-ground-robotics-unmanned-farms.md` (Sept 2026). MARA's >1,000 unmanned farms across 23 provinces; the 2025 ten promoted smart-agriculture technologies; Heilongjiang's laser-weeding and driverless-transplanter "future farms"; XAG's Super Cotton Field. **Not written:** the Ningxia state-farm group's 30,000-mu programme (company/provincial claim only, unverified) and the YTO / Lovol / Weichai machinery-maker entries (no primary source surfaced). The unit's substantive correction: the binding constraint is land consolidation and infrastructure, documented in the catalogue's own precondition clauses, not AI capability.
- **Chinese agricultural LLMs beyond fisheries** — Shennong (CAU) 4.0, Sinong (NAU) open weights, Xiongxiaonong, Gengyun, Tiangong Kaiwu, the SOE models, and the 240 m-token deployment question.
- **State farms and provincial deployment vehicles** — Beidahuang's data-management case, the XPCC, Heilongjiang's provincial programme.
- **China's cold chain and prepared-dish data architecture** — the distribution cell remains empty.
- **A China-vs-EU vs-US instrument comparison** — explicitly out of scope here.

### Cross-references to units

Policy: `china-smart-agriculture-action-plan-2024-2028.md`, `china-no1-central-document-2026-ai.md`, `china-digital-village-plan-2026-2030.md`, `china-mara-agricultural-data-resources-2026.md`, `china-deepening-scan-rural-revitalization.md` (July framing, anchor corrected).
Livestock: `muyuan-smart-pig-farming.md`, `china-pig-farming-ecosystem-2018-2026.md`, `wens-ai4s-agri-research-platform.md`, `china-livestock-ai-standards-and-research-infrastructure.md`, `china-shengmu-organic-dairy.md`.
Aquaculture: `china-smart-fisheries-fanli-llm.md`, `china-deep-sea-smart-aquaculture-platforms.md`.
Processing and storage: `china-grain-storage-ai-jiyuan.md`, `china-food-processing-smart-factories.md`.
Drones and export: `dji-agriculture-global-export.md`, `xag-china-drone-leader.md`, `china-agricultural-drone-drift-liability.md`, `chinese-agritech-belt-and-road-export.md`, `waico-alliance-china-multilateral-ai.md`.
Platforms (July): `alibaba-et-agricultural-brain.md`, `jd-farm-iot-blockchain.md`, `pinduoduo-smart-agriculture-competition.md`, `longping-yuan-caas-china-seed-ai.md`, `china-agricultural-import-signal.md`.

### Cross-references to scans

`scans/2026-07-china-deepening.md` (predecessor); `scans/2026-07-open-source-cycle.md` and `scans/2026-07-open-source-ai-substrate-v2.md` (the open-source thread the mandated model community intersects); `scans/2026-09-eu-substrate-deepening.md` (the parallel September cycle in another jurisdiction).

### External sources

- Verification recon: `~/ai-agrifood/recon-china-drones-export-2026-09-14.md`
- Transcript harvest from failed research passes: `~/ai-agrifood/notes-china-transcript-harvest-2026-09-14.md`
- Sister project: `opensource-agrifood` China scans (August 2026) on open-weight agricultural models and ag-digital infrastructure.

## Freshness

- last-verified: 2026-09
- last-regionally-scanned: 2026-09
- sources: as listed per unit; this scan's own sources are the primary documents cited in sections 2, 3 and 8, plus the verification recon named above.