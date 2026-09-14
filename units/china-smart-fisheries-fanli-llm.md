---
id: china-smart-fisheries-fanli-llm
title: 'Fanli — China''s fisheries large model, from 1.0 to 397 billion parameters in two years'
sector-position: (cross-cutting — aquaculture; digital fisheries infrastructure)
ai-technique-class: generative AI / LLMs (domain model); computer vision (the released dataset is image and visual-cognition based)
purpose: yield optimisation (feed, health, water quality); governance (shared data, model standards); climate adaptation (water-quality control)
claim-type: example (a released model and dataset) + framework (the emerging agricultural LLM standards series)
activity-status: deployed (four iterations released; public dataset published August 2026)
critical-voice: (none directly — university and FAO framing; the model's own evaluation is not published)
capital-intensity: research
language-literacy-profile: (not applicable — research and service infrastructure)
policy-instrument: strategy (within the state's agricultural-model programme)
region: East-Asia (China); developed at national level, opened globally
actor: China Agricultural University National Digital Fisheries Innovation Centre (中国农业大学国家数字渔业创新中心), director Li Daoliang (李道亮); supported by FAO
actor-type: academic (national university research centre with ministry and FAO engagement)
data-governance: open (public dataset and model released for use, evaluation and co-building)
data-rights-framework: not applicable
maturity-scale: S1 (model released publicly; named deployments not enumerated beyond the aquaculture service layer)
maturity-verification: V0 (institutional release at a conference; no published evaluation, no independent benchmark)
maturity-longevity: L1 (1.0 in June 2024, 4.0 in August 2026 — fast generational turnover, no durability evidence yet)
maturity-translation: T3 (an institutional pathway exists — the National Digital Fisheries Innovation Centre plus FAO cooperation; farm-level adoption is not documented)
last-verified: 2026-09
last-regionally-scanned: 2026-09
---

## Content

**Fanli (范蠡)** — named for the ancient Chinese statesman associated with fish farming — is China's fisheries large model, built at the **National Digital Fisheries Innovation Centre** at China Agricultural University under **Li Daoliang (李道亮)**, professor in the School of Information and Electrical Engineering and dean of the International College.

**The iteration record.**

- **Fanli 1.0** released at CAU on **15 June 2024**, described as China's first fisheries large model: multimodal fisheries data collection, cleaning, extraction and integration, aimed at fisheries workers and producers.
- **Fanli 4.0** released **17–18 August 2026** at the **2026 International Smart Fisheries and Aquaculture Conference** in Beijing (hosted by CAU with FAO support, 400+ participants). Reported specification: **397 billion parameters**; coverage of **eight core aquaculture dimensions** — water quality, species, feed, health, operations, equipment, energy and economics; expert knowledge for **101 major farmed species**; described as the industry's most complete vertical-domain knowledge graph.

So: four named versions in 26 months, and a parameter count that grew from unstated to 397 billion. That trajectory is the unit's most useful fact — the generational cadence of Chinese agricultural AI is fast, and none of it is published with evaluation.

**The dataset is the more consequential release.** Alongside 4.0, the centre published what it calls the **world's first public smart-fisheries dataset**: **116,000 image frames and 698,000 task annotations**, forming an image and visual-cognition dataset. Model and dataset were declared open to the world, with an explicit invitation for scholars and companies to **use, evaluate, co-build and share** — a framing that anticipates scrutiny rather than avoiding it.

**The FAO layer.** FAO Assistant Director-General and Fisheries and Aquaculture Division director **Manuel Barange** attended and spoke of continuing cooperation with the CAU centre around three cores — **blue transformation, digital fisheries, sustainable fisheries** — and five directions: technology empowerment, green production, scale promotion, talent co-building and **global export**. An FAO-supported Chinese fisheries model is a materially different export channel from the vendor hardware routes documented elsewhere in the China cycle.

**What surrounds it.** The conference ran three tracks — data, AI and decision-support systems; sensing, smart equipment and robotics; and integrated smart-production systems with whole-chain coordination. Chinese reporting also records the standards work moving underneath: a **smart fishery farm (智慧渔场) construction industry standard**, alongside the **《农业农村大模型》系列标准** — an agricultural-and-rural large-model standards series — which is the state's attempt to make model inputs comparable in fisheries as elsewhere.

## What this unit is doing in the taxonomy

The corpus's **first aquaculture unit anywhere**, and its first Chinese generative-AI unit for a food-production sector. It anchors the *generative AI × aquaculture* cell that the activity matrix had left empty, and it is the Chinese counterpart to the corpus's other domain-model work.

Distinct from:
- `china-deep-sea-smart-aquaculture-platforms.md` — the physical platform and farming-vessel layer; this is the model and data layer.
- `china-livestock-ai-standards-and-research-infrastructure.md` — CAAS's HABLer and the Ministry's livestock standards; same function (measurement infrastructure) in a different sector, different institution (CAU vs CAAS).
- The corpus's agricultural-LLM units elsewhere — Fanli is a domain model with a released dataset, not a vendor assistant product.
- `aquaculture-ai`-type material in other jurisdictions — Canada's aquaculture AI units are commercial farm-side systems; China's is a national university centre releasing public data.

## Why it matters for talks

- **China released an aquaculture model and dataset to the world, under FAO auspices.** That is the most open act in the corpus's Chinese agri-AI record and it cuts against the closed-platform pattern that dominates the country's commercial layer.
- **397 billion parameters for fisheries** is a scale claim worth pausing on: it is far larger than most domain models in the corpus and is presented without evaluation. Parameter count is not capability; the unit records it as a cadence signal, not a performance claim.
- **116,000 image frames and 698,000 annotations** is a concrete, checkable contribution — the kind of number that can be verified by downloading the dataset, unlike a deployment claim.
- **The eight dimensions, 101 species structure shows what a genuinely domain-shaped model looks like** — water quality, feed, health, equipment, energy and economics in one system, rather than a chatbot over agricultural text.
- **FAO as a channel** makes this the corpus's clearest case of Chinese agri-AI moving through a multilateral technical institution rather than through bilateral deals.

## Critical context

- **No published evaluation exists for any Fanli version.** The claim "industry's most complete vertical-domain knowledge graph" is institutional self-description. `maturity-verification: V0` applies to a university centre's release as much as to a vendor's.
- **Fast iteration may indicate immaturity as much as progress** — four versions in 26 months, with parameter counts used as the progress metric, is a pattern the corpus should treat skeptically in any sector.
- **"World's first" public fisheries dataset is a narrow claim** — first public image-and-visual-cognition dataset for fisheries, not the first fisheries data release of any kind. Chinese "first" claims are typically specific and should be paraphrased as narrowly as they are made.
- **Deployment to farms is the missing half.** Nothing here shows a named farm, cooperative or region using Fanli in operations; the conference's own tracks are technology-oriented. The unit reaches `T3` on institutional pathway only.
- **The dataset's licence and access terms were not established** — "open to the world" is a statement at a conference, not a licence. Check before relying on the data being reusable.
- **1.0's release date (June 2024) and the FAO framing (2026) are two years apart** — read the FAO involvement as a 2026 development, not as validation of the earlier versions.

## Links

- gaps: G-457 (in China — whether the Fanli dataset and model are actually downloadable under stated terms, and whether any external team has evaluated or reproduced the model's performance), G-458 (in China — farm-level adoption of aquaculture AI models: any named farm, cooperative or region using Fanli or a comparable model in operations), G-459 (in China — the 智慧渔场 construction standard and the 农业农村大模型 standards series: issue numbers, scope and take-up), G-447 (China — outcome evidence: production or cost effects attributable to these systems)
- contested-claims: (none directly — the release is an artefact, not a claim about outcomes)
- related-units: china-deep-sea-smart-aquaculture-platforms.md, china-livestock-ai-standards-and-research-infrastructure.md, china-smart-agriculture-action-plan-2024-2028.md, china-mara-agricultural-data-resources-2026.md
- sovereignty-flags: explicit-but-inverted — a state university centre releasing models and data openly, with FAO involvement, is the opposite of the closed-platform posture documented in the corpus's commercial Chinese units

## Freshness

- last-verified: 2026-09
- last-regionally-scanned: 2026-09
- sources:
  - 中国新闻网, via 新浪财经 (2026-08-18). 2026国际智慧渔业和水产大会开幕 发布智慧渔业公开数据集和“范蠡大模型4.0” — Fanli 4.0 specification (397 billion parameters, eight dimensions, 101 species), the public dataset (116,000 frames, 698,000 annotations), FAO participation and the five cooperation directions. https://finance.sina.com.cn/roll/2026-08-18/doc-inintpiw0123698.shtml
  - 中国农业大学新闻网. 我国首个渔业大模型“范蠡大模型1.0”发布 (15 June 2024). https://news.cau.edu.cn/mtndnew/98d7e0f834aa4f71aaa4d29a97b00290.htm
  - 智慧渔场建设行业标准 and the 《农业农村大模型》系列标准 — surfaced via Chinese professional commentary on the standards series (zhuanlan.zhihu.com/p/2053782247166293510); treat as a lead requiring the standard numbers, recorded in G-459
