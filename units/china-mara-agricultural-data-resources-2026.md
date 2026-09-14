---
id: china-mara-agricultural-data-resources-2026
title: 'MARA''s agricultural data estate, measured — 18 PB stored, 105 TB open, 240 million tokens a year'
sector-position: (cross-cutting — national data infrastructure for agriculture)
ai-technique-class: generative AI / LLMs (token consumption); sensors and IoT ML (collected data); (cross-cutting)
purpose: governance (national data management); food security / sovereignty
claim-type: statistic
activity-status: deployed (platform in operation; figures as of end-2025)
critical-voice: (none directly — ministry self-report)
capital-intensity: research (public data infrastructure)
language-literacy-profile: (not applicable)
policy-instrument: strategy
region: East-Asia (China); national
actor: MARA 市场与信息化司 (Market and Informatisation Department), reporting to the National Data Administration
actor-type: state-agency
data-governance: state-stewarded
data-rights-framework: state-stewarded
maturity-scale: S3 (national platform with province-level reach; 4,673 open datasets)
maturity-verification: V0 (ministry self-reported, with the definition of its own terms unpublished)
maturity-longevity: L2 (data-management rules from 2024, platform programme from 2024 under the Smart Agriculture Action Plan)
maturity-translation: T3 (the national platform and the 数据要素× competition are the translation instruments)
last-verified: 2026-09
last-regionally-scanned: 2026-09
---

## Content

On **6 July 2026** the National Data Administration (国家数据局) held its second 数据要素× ("data elements multiply") press conference of the year. The agriculture portion was given by **宋丹阳, deputy director-general and first-class inspector of MARA's Market and Informatisation Department**. His answers are the most precise public accounting of China's agricultural data estate that this corpus has located — and the best available hard number for actual agricultural AI usage in the country.

**The estate, as reported (year-end 2025, versus 2024):**

| Measure | Figure |
|---|---|
| Total data storage capacity | **38 PB** (up markedly on 2024, exact figure not given) |
| Data actually stored | **18 PB** (up markedly on 2024) |
| Open data released to the public | **105 TB**, up **42%** year on year, across **4,673 datasets** |
| High-quality datasets built | **3 TB** (total) |
| **Annual token consumption** | **over 240 million (2.4 亿个) tokens** |

The open-data categories named are agricultural science and technology, agricultural product market prices, and education and training. MARA "built high-quality datasets" and states that "agricultural AI application progress is accelerating".

**Governance and standards.** Since 2024 MARA has issued the agricultural and rural departmental statistical work measures, guidance on statistics, the guidance on vigorously developing smart agriculture, and the National Smart Agriculture Action Plan. It established a **MARA Data Standardisation Technical Committee** with a data-standard system framework and a five-year construction plan: **9 national standards and 38 industry standards led**, of which **13 have been published**, covering collection, governance and application.

**The 数据要素× programme in agriculture.** Three years of a joint competition; **6 agricultural and rural typical cases** selected and published; **31 application-scenario guidelines** across 3 directions and 10 key fields; and **3 construction plans** (including "satellite remote-sensing data empowering precision agriculture") taken into the NDA's public-data demonstration list.

**The 2026 competition tasks for the 现代农业 sector** are effectively a state list of what it wants built: promoting skill and equipment digitalisation; **strengthening the whole-chain intelligent traceability of the seed industry**; new data-information service models for producers; data-driven extension services; **accelerating the R&D and application of agricultural large models**; data fusion for **precise delivery of agricultural subsidies to named households**; green transition; **intelligent farmland quality monitoring**; rural governance and precision assistance; benefit-linkage and farmer income; and — new for 2026 — **establishing a trusted data space for agriculture and rural affairs (农业农村可信数据空间)**, using blockchain and privacy computing to keep agricultural data "safe and controllable".

**The property-rights layer.** The NDA reported issuing the **Data Property Rights Registration Work Guidelines (Trial)** (《数据产权登记工作指引（试行）》) shortly before the conference, completing its "531" policy system for data-element market allocation.

## What this unit is doing in the taxonomy

The corpus's **state-data-infrastructure unit for China**, and the analytic counterweight to every announcement-driven China unit in the corpus. It is a `statistic` claim-type: what is being measured is not a vendor's deployment but the state's own data estate.

Distinct from:
- `china-smart-agriculture-action-plan-2024-2028.md` — the plan that mandates this infrastructure; this unit records what the ministry says exists.
- `farm-data-ownership-critical.md` and the corpus's data-rights units — the critical-voice treatment of farm data; this is the state's own account, where the unit of analysis is the national pool rather than the farm.
- `mozilla-data-collective` and the open-source quantitative panel — the corpus's open-data thread; China's 105 TB of *open* agricultural data is a large absolute figure with a state-stewarded rights model behind it, not a commons.

## Why it matters for talks

- **240 million tokens a year is the finding.** In a country of roughly 200 million farm households, with a national agricultural data platform and a state-mandated model programme, annual token consumption of 2.4 亿 is small — the corpus's honest anchor for the gap between Chinese agricultural AI announcements and measured use. Any claim about Chinese farmers using AI assistants should be checked against it.
- **The open-data asymmetry mirrors the global one.** 105 TB open out of 18 PB stored is well under 1% — the same openness-versus-hoarding pattern the corpus documents in the global open-source panel, here in a state-stewarded system.
- **The competition task list is a procurement plan by another name.** It states the state's unmet needs — seed traceability, subsidy delivery to households, trusted data spaces, agricultural large models — which doubles as a map of what private and academic actors are being incentivised to build.
- **The trusted data space (可信数据空间)** is the Chinese answer to cross-border and inter-actor data governance: privacy computing and blockchain inside a state-controlled perimeter. Worth contrasting with the EU's data spaces and the corpus's data-sovereignty units.

## Critical context

- **The token figure is undefined.** MARA does not publish what counts as a token-consuming AI application, across which systems, or whether it includes internal ministry use. Treat 240 million/year as an order of magnitude rather than a measurement, and note it is small on any reading.
- **Storage capacity ≠ data quality.** 18 PB stored and 3 TB of "high-quality datasets" is the ministry's own implied admission that less than a ten-thousandth of the estate is AI-ready — consistent with its emphasis on datasets and standards rather than models.
- **Self-reported throughout.** No independent audit of the 38 PB / 18 PB / 105 TB / 240 million figures was located. `maturity-verification: V0` reflects that, not skepticism of the source's good faith.
- **The data-rights framework is state-stewarded, not farmer-owned.** Data property-rights registration (数据产权) is an economic-rights framework for market allocation — the opposite end of the axis from the corpus's Indigenous-sovereignty and farmer-owned-data units, and worth being precise about when the two are compared.
- **Statistics about the ministry are not evidence about farms.** Nothing here measures adoption on farm; the farm-level figure is the token number, with the caveats above.

## Links

- gaps: G-444 (in China — definition and scope of the 240 million annual token figure: which systems, which users, whether ministry-internal), G-008 (China — cross-border data governance and the domestic regime affecting agrifood AI), G-009 (China — agricultural LLM layer reported in fragments), G-032 (China — AI at the processing level), G-441 (in China — whether the Action Plan's base-model open platform and open-source model community exist operationally)
- contested-claims: (none directly — this is a measurement, not a prediction)
- related-units: china-smart-agriculture-action-plan-2024-2028.md, china-digital-village-plan-2026-2030.md, china-no1-central-document-2026-ai.md, farm-data-ownership-critical.md, china-agricultural-import-signal.md
- sovereignty-flags: explicit — state-stewarded data estate, national coding and registration schemes, trusted-data-space perimeter

## Freshness

- last-verified: 2026-09
- last-regionally-scanned: 2026-09
- sources:
  - 国家数据局. 文字实录 | 国家数据局举办2026年"数据要素×"新闻发布会（第二场）, 6 July 2026 — MARA remarks by 宋丹阳, 市场与信息化司副司长、一级巡视员. https://www.nda.gov.cn/sjj/swdt/xwfb/0706/20260706172337226401795_pc.html
  - MARA 市场与信息化司. 智慧农业动能强劲启新程 (December 2025). https://scs.moa.gov.cn/xxhtj/202512/t20251219_6480010.htm
  - 国家数据局. 数据产权登记工作指引（试行）(2026) — property-rights registration framework referenced at the same conference
  - 国家数据局. 现代农业案例：建设北大荒数据管理体系，提升农业生产数智化水平 (11 January 2025). https://www.nda.gov.cn/
