---
id: china-livestock-ai-standards-and-research-infrastructure
title: 'China builds the measurement layer for livestock AI — an industry standard and a national behaviour-annotation tool'
sector-position: animal production (livestock — pigs and dairy cattle)
ai-technique-class: computer vision (behaviour and posture recognition); generative AI / LLMs (vision-language models for annotation)
purpose: governance (standards, data comparability); worker conditions (animal welfare assessment); yield optimisation (precision feeding, oestrus detection)
claim-type: example
activity-status: deployed (industry standard issued; annotation tool released and being integrated into national data infrastructure)
critical-voice: (none directly — standards bodies and a national research institute)
capital-intensity: research (public research and standards work)
language-literacy-profile: (not applicable)
policy-instrument: regulatory (technical standard) and strategy (national data platform integration)
region: East-Asia (China); national, with Chongqing as the standard's lead province
actor: MARA standardisation machinery (农业信息化标准化技术委员会); Chongqing Animal Husbandry Technology Extension Station; CAAS Institute of Animal Science (智慧畜牧业创新团队)
actor-type: state-agency
data-governance: mixed (public standard; open research tool; national data-sharing platform)
data-rights-framework: state-stewarded
maturity-scale: S1 (one standard issued; one tool released, integration pending)
maturity-verification: V1 (peer-reviewed publication for the annotation tool; official standard number for the standard)
maturity-longevity: L1 (both items from 2025-2026)
maturity-translation: T3 (standards committee and national data centre are the translation pathway)
last-verified: 2026-09
last-regionally-scanned: 2026-09
---

## Content

Two items, one function: China is building the layer that makes livestock AI comparable, auditable and shareable — the part that is usually missing everywhere.

**1. A standard for pig-farm liquid-feeding digital management.** 《猪场液态饲喂数字化管理系统技术要求》(**NY/T 5655—2026**) is, per Chinese reporting, the **first agricultural industry standard in the field of pig-farm liquid-feeding digital management**, filling a domestic standards gap. It was drafted under the lead of the **Chongqing Animal Husbandry Technology Extension Station** with the municipal pig-industry innovation team and **twelve units** including Henan Hesun Automation Equipment (河南河顺自动化设备股份有限公司), and it **passed expert review on 11 October 2025** under MARA's **agricultural informatisation standardisation technical committee**, issuing as an NY/T standard in 2026. The problem it names is explicitly a data problem: breaking **"data islands" (数据孤岛)** — the situation where each farm's liquid-feeding system speaks its own format and no cross-farm comparison is possible. The lead drafter was 朱燕, a senior livestock engineer at the Chongqing station.

**2. A national behaviour-annotation tool for livestock.** In December 2025 CAAS's **Institute of Animal Science** smart-livestock innovation team published **HABLer — Humanoid Animal Behavior Labeler**, described as the first system to fuse a **large vision-language model** with traditional computer vision, behaviour quantification and expert knowledge for animal behaviour annotation. The pipeline: animal detection, instance segmentation and keypoint recognition identify individuals in video; behaviour metrics supply quantitative, explainable evidence; the vision-language model reasons about behaviour semantics; expert interaction corrects and updates policy, giving continuous learning.

Reported results (pigs and dairy cattle; zero-shot or few-shot):

- Short-behaviour tasks: **mean frame accuracy 0.87, temporal consistency 0.94**.
- A **125-minute continuous pig-posture annotation task**: **expert annotation time cut by roughly 60%**, with initial prediction accuracy holding near **94%**.

The paper appeared in **Computers and Electronics in Agriculture** (DOI 10.1016/j.compag.2025.111307); first author 周梦婷, corresponding authors 李建功 and **唐湘方**. Funding came from the national pig industry technology system, the CAAS science and technology innovation programme, and central public-interest research institute funds. The tool is live at **ai4as.cn** and is to be integrated into the **HERD platform — the national agricultural science data centre's smart-livestock data-sharing service platform (国家农业科学数据中心智慧畜牧业数据共享服务平台)**.

**The Chongqing backdrop.** The standard's home province runs the **"pig industry brain 2.0 + future pig farm" (生猪产业大脑2.0 + 未来猪场)** programme, presented by the municipal government in 2025 as a move toward **unmanned pig farms** with automatic precision feeding and robotic cleaning; and the Rongchang district launched China's first **livestock-industry technology trading market** in November 2025 — a digital matchmaking platform with expert, output and demand databases. Livestock AI in China is being institutionalised provincially as much as nationally.

## What this unit is doing in the taxonomy

The **measurement-and-standards unit** for Chinese livestock AI — the counterpart to what the corpus tracks in data-governance units elsewhere. It exists because the corpus's Chinese livestock material is all production claims; this is the layer that decides whether those claims can be compared.

Distinct from:
- `muyuan-smart-pig-farming.md` and `china-pig-farming-ecosystem-2018-2026.md` — production and vendor layers; this is standards and research infrastructure.
- `china-mara-agricultural-data-resources-2026.md` — the ministry's own data estate and statistics; this unit is the technical-standard and research-tool layer beneath it, and HERD is the domain instance of the national science data centre system.
- `canadian-dairy-ai` / `milk-quality-standards`-type units elsewhere in the corpus — comparable standardisation moves in other jurisdictions; China's is happening at the same time and in the same direction.

## Why it matters for talks

- **Standards are the unglamorous half of AI adoption.** A country that writes the liquid-feeding data standard first is doing the thing that makes vendor claims checkable later. Worth naming when the corpus's other stories document claim inflation.
- **The stated enemy is "data islands"** — the same fragmentation problem the corpus records in the global data-infrastructure units, named here by a provincial extension station rather than a researcher.
- **HABLer is the corpus's best-verified Chinese livestock AI item.** Peer-reviewed, with reported effect sizes and a released tool: `V1` on verification, which almost nothing else in the corpus's Chinese livestock material achieves.
- **Extension stations write standards.** The lead body is a *technology extension* station, which is notable for the corpus's Extension thread: in China the extension system appears in standard-setting and platforms, not only in farmer advice.
- **HERD is the state's answer to shared livestock data** — a national platform that researchers and industry users may join, with data-sharing framed as public infrastructure rather than as a market.

## Critical context

- **The standard's scope is liquid feeding, not livestock AI.** NY/T 5655—2026 concerns digital management systems for liquid-feeding — an automation-heavy segment of pig production, not models. Its inclusion here is honest only if labelled that way; it is the closest thing to a digital-management standard the sector has, not an AI standard.
- **HABLer's numbers are the authors' own**, though peer-reviewed and with code published. Effect sizes (0.87 accuracy, 60% time reduction) come from the paper's own test scenarios — three named production settings — not from independent replication. `V1`, not `V2`.
- **The standard's adoption is unverified.** Issuing a standard is not adopting it; no take-up data was located among Chinese farms or equipment vendors.
- **"First" claims in Chinese standards reporting are narrow.** "First agricultural industry standard in pig-farm liquid-feeding digital management" is a specific and defensible claim; it should not be paraphrased as "China's first livestock AI standard".
- **The Chongqing "unmanned pig farm" language is promotional** (from a government press conference), not a deployment report; no named farm or operational figure accompanies it.

## Links

- gaps: G-449 (in China — take-up of NY/T 5655—2026 among farms and equipment vendors, and the composition of the wider set of NY/T digital-livestock standards issued alongside it), G-450 (in China — whether HERD is operational and contains shared livestock datasets, and under what access terms), G-447 (China — livestock AI outcomes), G-441 (China — the Action Plan's data-platform and model-community products)
- contested-claims: C-326 (AI will replace agricultural labour at scale — the standards layer is evidence about measurement, not about labour)
- related-units: muyuan-smart-pig-farming.md, china-pig-farming-ecosystem-2018-2026.md, wens-ai4s-agri-research-platform.md, china-mara-agricultural-data-resources-2026.md, china-smart-agriculture-action-plan-2024-2028.md
- sovereignty-flags: explicit — state-stewarded research data and standards; a national sharing platform for animal data

## Freshness

- last-verified: 2026-09
- last-regionally-scanned: 2026-09
- sources:
  - 农业农村部 农业信息化标准化技术委员会 — review of 《猪场液态饲喂数字化管理系统技术要求》 (11 October 2025), via 重庆市农业农村委员会. https://nyncw.cq.gov.cn/wsdw/cqsxmz/cmgz/202510/t20251013_15073138_wap.html
  - 重庆市农业农村委员会. 我国首个猪场液态饲喂数字化管理系统行业标准发布 破解"数据孤岛"痛点 (1 September 2026) — the standard issues as NY/T 5655—2026. https://nyncw.cq.gov.cn/zwxx_161/mtbb/202609/t20260901_16016219.html
  - 周梦婷, 李建功, 唐湘方, et al. HABLer: Humanoid Animal Behavior Labeler. *Computers and Electronics in Agriculture* (2025). DOI: 10.1016/j.compag.2025.111307. Institute announcement (19 December 2025): https://ias.caas.cn/xwzx/kyhd/d29fd0cca76949f9bd9625f2254a2766.htm
  - 国务院新闻办公室. 重庆举行"生猪产业大脑2.0+未来猪场"新闻发布会 (April 2025). http://www.scio.gov.cn/xwfb/dfxwfb/gssfbh/zq_13847/202504/t20250423_892489.html
  - 人民日报. 重庆荣昌：加快建设具有国际影响力的畜牧科技策源地 (2025-11, livestock technology trading market). https://www.peopleapp.com/column/30052009532-500007465569
