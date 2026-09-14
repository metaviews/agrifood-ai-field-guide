---
id: china-grain-storage-ai-jiyuan
title: 'Jiyuan and the inspection robots — China puts AI inside the state grain reserve'
sector-position: post-harvest handling and storage (grain procurement, storage, condition monitoring)
ai-technique-class: generative AI / LLMs (the Jiyuan grain-storage model); computer vision (imperfect-kernel and pest recognition); robotics — autonomy (sampling and inspection robots); sensors and IoT ML (temperature, humidity, moisture, gas)
purpose: food security / sovereignty (reserve integrity, loss reduction); governance (supervision of the state reserve); input reduction (storage loss)
claim-type: example (deployed systems with enterprise counts) + statistic (detection performance)
activity-status: deployed (sampling-inspection system at 80 enterprises; Jiyuan model released and hosted on SASAC's AI platform)
critical-voice: (none directly — state enterprise and ministry research framing; supervision is the state's own)
capital-intensity: industrial (state reserve infrastructure)
language-literacy-profile: (not applicable — institutional system)
policy-instrument: strategy (national grain reserve modernisation; SASAC AI programme)
region: East-Asia (China); national
actor: Sinograin (中国储备粮管理集团) via its Chengdu Grain Storage Research Institute (中储粮成都储藏研究院), under the National Engineering Research Centre for Grain Storage and Transport; with COFCO in the adjacent commercial layer
actor-type: state-enterprise (central SOE research institute)
data-governance: state-stewarded
data-rights-framework: state-stewarded
maturity-scale: S3 (sampling-inspection system deployed at 80 grain enterprises with >4 million tonnes purchased; national reserve context)
maturity-verification: V1 (state research institute publication and ministry-adjacent sources with named figures; no independent audit)
maturity-longevity: L2 (intelligent grain-depot research programme under way since 2024 with multi-generation equipment; 稷元 model operational)
maturity-translation: T3 (the central SOE's own deployment network is the translation pathway; national standards issued from the work)
last-verified: 2026-09
last-regionally-scanned: 2026-09
---

## Content

Grain storage is where China's post-harvest AI is most developed, and it is an unusual case: the deployer, the researcher, the regulator and the beneficiary are the same state apparatus.

**The institution.** The **intelligent grain depot technology R&D platform** is led by **Sinograin's Chengdu Grain Storage Research Institute**, a central-level research institution under China's central grain reserve group, sitting inside the **National Engineering Research Centre for Grain Storage and Transport**. Reported scale: 42 research and management staff; 30 active projects in the evaluation period including 2 national science projects; R&D expenditure of CNY 67.6 m; technical income of CNY 373 m.

**What it built, in four parts.**

1. **Intelligent sampling and inspection for grain purchase (粮食收购智能扦检系统)** — a "robot technology + modular" system performing multi-indicator, **whole-process unmanned inspection** of grain at intake, with reported **detection efficiency more than doubled**. It was selected into the **2025 list of ten major science and technology innovation achievements in the grain circulation sector**, is reported deployed at **80 grain enterprises nationally** with **over 4 million tonnes** of procurement executed through it, and was inspected by Vice-Premier **Ding Xuexiang in July 2025**.
2. **"Jiyuan" (稷元) grain-storage large model** — built on **more than 200,000 high-quality grain-storage knowledge units**, described by the institute as the foundation for intelligent management across storage enterprises, and **admitted to SASAC's AI "Renewal Community" (焕新社区) platform** — that is, into the central state-asset regulator's own AI showcase.
3. **Grain-condition monitoring and warning** — a multi-parameter online system covering **temperature, humidity, moisture, insects, mould and gas**, automatically identifying **seven grain-condition modes** (including loading, unloading, heating and moulding) and providing **21-day dynamic forecasting**, with an embedded AI pest-monitoring system that recognises **more than 20 stored-grain pest species** and integrates remote collection, identification and warning for pests on the grain surface.
4. **A new silo type** — air-film reinforced-concrete low-carbon silos: airtightness **more than six times the national silo standard**, thermal insulation **three times** a traditional silo, **33% shorter build cycle**, **over 20% lower operating and maintenance cost**, at 9,000-tonne scale.

The work has produced **26 national invention patents** and **6 national standards**, with three first prizes from the Chinese Cereals and Oils Association.

**The commercial parallel from Sinograin's peers.** At the **2026 World AI Conference**, three Sinograin AI achievements were selected for SASAC's showcase of excellent results, including inspection equipment that compresses **single-sample testing to under three minutes** with **imperfect-kernel recognition accuracy up to 97.6%**. *(Figure from the Sinograin announcement's own summary line; the page returned an error on fetch, so this is recorded at snippet level pending re-verification — see G-462.)* **COFCO**, the commercial state group, separately introduced AI into large-scale grain procurement and processing, including a digital market-intelligence system. And Beijing's municipal programme for 2026 continues iterating its "smart grain depots" with the stated aim of **raising the share of off-site supervision** and mining grain-temperature and grain-condition data for **predictive risk warning** — a shift, in its own words, from "watching the site" to data-based supervision.

## What this unit is doing in the taxonomy

The corpus's **post-harvest/storage unit for China** — the first anywhere in the corpus in that sector for this country, and one of its few post-harvest units at all. It also fills the corpus's G-032 gap (Chinese AI at the processing level) on the storage side.

Distinct from:
- `china-food-processing-smart-factories.md` — the processing and manufacturing layer; this is the reserve and storage layer.
- `china-mara-agricultural-data-resources-2026.md` — the ministry's data estate; this is the central reserve group's operational system.
- `grain-storage`-type material elsewhere — the corpus's other post-harvest units are mostly commercial cold-chain and quality systems; China's is a state reserve integrity system, with supervision as a first-class purpose.

## Why it matters for talks

- **Supervision is the point, not productivity.** The Beijing programme says plainly that it is shifting from on-site inspection to off-site data supervision. AI in China's grain reserve is primarily a **principal-agent control technology** for the state over its own reserve — a purpose that barely appears elsewhere in the corpus.
- **Four million tonnes of grain through an automated inspection system at 80 enterprises** is one of the largest verified operational reaches of any Chinese agricultural AI system in the corpus, and unlike most of it, it is at intake rather than in-field.
- **Jiyuan's 200,000 knowledge units and 21-day forecasting** show what a domain model looks like when built on a narrow, well-documented process instead of on general agricultural text.
- **Six national standards came out of this work**, which is how the corpus's Chinese standards thread keeps surfacing: the same institutes that deploy also write the rules.
- **The 97.6% imperfect-kernel recognition figure** — pending verification — is the kind of number that makes a vision system's value legible; the corpus should hold it until re-checked.

## Critical context

- **Every figure is from the deploying institution.** The 80 enterprises, 4 million tonnes, 2× efficiency and model specifications are Sinograin's own or its research institute's. `maturity-verification: V1` reflects a state research institute's publication, not an audit.
- **One number in this unit is snippet-level only.** The WAIC imperfect-kernel accuracy (97.6%) and the three-minute detection claim come from a Sinograin page that failed to load; they are flagged in G-462 rather than presented as verified.
- **"Seven grain-condition modes" and "20+ pest species" describe a rule-and-classifier system** as much as a model. The AI label sits on top of a long-standing sensor and inspection discipline; the corpus should not read modern machine learning into what may be improved threshold logic.
- **The knowledge-unit count (200,000) is not a benchmark.** It measures corpus construction, not accuracy.
- **Reserve integrity is not farm-level food loss.** This unit is about the state's ability to know what is in its silos; it says nothing about losses on farms, in transport, or in commercial storage.
- **The sandbox does not extend to the commercial layer.** COFCO and private mills buy their own systems; the Corpus should not generalise Sinograin's deployment reach to Chinese grain storage as a whole.

## Links

- gaps: G-462 (in China — re-verify Sinograin's WAIC 2026 figures: the sub-three-minute single-sample detection time and the 97.6% imperfect-kernel recognition accuracy, from a source that failed to load), G-463 (in China — whether Jiyuan has generated measured reductions in storage loss or supervision cost), G-032 (China — AI at the processing level: partly closed by this unit and `china-food-processing-smart-factories.md`, still open for meat, dairy and cold chain), G-451-adjacent (standards issuance versus take-up)
- contested-claims: (none directly)
- related-units: china-food-processing-smart-factories.md, china-mara-agricultural-data-resources-2026.md, china-smart-agriculture-action-plan-2024-2028.md, china-digital-village-plan-2026-2030.md
- sovereignty-flags: explicit — state-stewarded reserve data, central SOE deployment, supervision as the primary purpose

## Freshness

- last-verified: 2026-09
- last-regionally-scanned: 2026-09
- sources:
  - 粮食储运国家工程研究中心 / 中储粮成都储藏研究院. 智能化粮库技术研发平台 — platform composition, the intelligent sampling and inspection system (80 enterprises, >4 million tonnes, 2× efficiency, 2025 top-ten achievement, Ding Xuexiang inspection July 2025), the 稷元 grain-storage model (200,000+ knowledge units, SASAC Renewal Community), multi-parameter monitoring (7 grain-condition modes, 21-day forecasting, 20+ pest species), 26 patents and 6 national standards, and the air-film silo. http://ags.ac.cn/new/lscygjgcyjzx/cxpt/jspt/202406/t20240601_8718.html
  - 中储粮集团. 中储粮集团3项人工智能成果入选2026世界人工智能大会国资委优秀成果 — sub-three-minute sample testing, 97.6% imperfect-kernel recognition (page failed to fetch; snippet-level). https://www.sinograin.com.cn/article1.html?navId=13&artId=79017&arindex=3
  - 国家粮食和物资储备局 / 经济日报. 粮库管理更加“智慧” — COFCO AI in grain procurement and processing; smart grain depot practice. https://www.lswz.gov.cn/html/mtsy2024year/2024-05/31/content_281783.shtml
  - 新华网 (2024-01-20). 我国中央储备粮监管智能化全面提速 — smart in/out-put, digital warehousing, real-time grain condition, AI early warning. http://www.xinhuanet.com/fortune/20240120/fa9bae9fa9b04dc7a11cfb4d26e64e3d/c.html
  - 智慧粮库 (Baidu Baike entry, 2026) — Beijing's 2026 iteration and the shift toward off-site supervision. https://baike.baidu.com/item/智慧粮库/67364119
