---
id: china-agricultural-llms-landscape
title: 'Chinese agricultural LLMs beyond fisheries — the university-model wave, the SOE entrants, and the honest adoption picture'
sector-position: (cross-cutting — decision-support layer across crop production, livestock, breeding and farm advisory; complements the fisheries-specific unit)
ai-technique-class: LLM / foundation models (domain fine-tunes and RAG over agricultural corpora); multi-agent systems (Shennong's 36 specialist agents, Tiangong Kaiwu's 1,200-algorithm agent platform); open-weight releases (Sinong 8B/32B)
purpose: "advisory and decision support (pest/disease diagnosis, agronomy questions); supply chain efficiency; research and discovery (breeding knowledge tools)"
claim-type: deployment examples (named models with named institutions and, in two cases, named farmer-level adoption) + pattern observation (a university-model wave with no independent evaluation)
activity-status: deployed at pilot-to-regional scale (Tiangong Kaiwu on 114 Heilongjiang farms; Shennong claiming 31-province reach; Sinong open-weight) — with the corpus's standing caveat that no independent audit exists
critical-voice: "present and remarkable for China: a provincial official-media piece carries the industry's own verdict — '只是盆景，还不是风景' (\"just a potted landscape, not yet scenery\") — most agricultural LLMs remain in labs and demonstration bases; plus a critical Chinese blog finding Gengyun had no findable public entry point"
capital-intensity: mixed (university teams on grant funding; SOE entrants Sinochem + China Mobile and China Telecom bringing hyperscaler-class compute)
language-literacy-profile: Chinese-language interfaces throughout (WeChat mini-programs, mobile apps); the relevant literacy question is elderly-farmer usability, which Chinese sources themselves name as a barrier
policy-instrument: strategy (State Council "AI Plus" Opinions implementation framing; 备案 model registration as the state's visible hand); fiscal (university and CAS funding); the 15th FYP "AI + agriculture" named action (2026-10) as the successor policy frame
region: East-Asia (China); notable concentration in Heilongjiang (Tiangong Kaiwu, Shennong rollout) and Jiangsu (~20 models, per provincial media)
actor: "China Agricultural University (Shennong 神农); Nanjing Agricultural University (Sinong 司农; 问梨; 司农智机); Harbin Institute of Technology (Tiangong Kaiwu 天工开悟, Liu Jie team); Hebei provincial MARA + China Telecom (Xiongxiaonong 雄小农, on 星辰·神农一号); Anhui provincial MARA + iFlytek (Gengyun 耕云); Sinochem + China Mobile (iMAP); CAAS (agricultural knowledge LLM with CNKI; 農耕大模型1.0 farmland-monitoring model); CAU (工耕 agri-robotics model)"
actor-type: academic (CAU, NAU, HIT, Anhui Agricultural University); state-enterprise (Sinochem, China Telecom, China Mobile); state-agency (provincial MARAs as co-developers); vendor (iFlytek, CNKI)
data-governance: mixed (university corpora — Sinong's ~4bn-token open dataset; SOE platforms on proprietary infrastructure; provincial platforms aggregating farm data)
data-rights-framework: state-directed (the 备案 registration regime; corpus of policies/standards as training data implies state-published material as substrate; no farmer data-rights documentation found for any model)
maturity-scale: S2 (a national population of named models across provinces and institutions; two with farm-count-scale deployment claims; no independent evaluation anywhere)
maturity-verification: V0-V1 (institution newsroom primary sources and one provincial official-media feature at V1; farmer-level adoption figures are institution-reported; outcome claims — +5% yield, -10% cost — all deployment-actor reported; one peer-reviewed survey (Trans. CSAE) documents the model population but evaluates none)
maturity-longevity: L1-L2 (Shennong since 2023 through 4.0 in July 2026; Sinong open-weight January 2026 with public artifacts; Gengyun possibly dormant since 2023)
maturity-translation: T2 (university-to-farm translation runs through county extension and demonstration bases; the sources themselves say the extension layer is the bottleneck — compute limits, ageing-farmer usability, trust-based diffusion)
last-verified: 2026-11
last-regionally-scanned: 2026-11
---

## Content

The September 2026 China cycle corrected the corpus's biggest China-AI conflation — Shennong (CAU) and Sinong (NAU) are two models, not one — and left the rest of the agricultural-LLM population as a named-but-unwritten lead. This unit writes it. The picture that emerges is a **university-model wave** (CAU, NAU, HIT, Anhui Agricultural University, provincial academies), a smaller **SOE wave** (Sinochem, China Telecom, China Mobile), and an adoption evidence base that is thin but — unusually for this corpus's China coverage — includes **named farmer-level cases and a Chinese-language critical voice**.

### The university wave

- **Shennong 神农 (China Agricultural University).** v4.0 released **July 2026** (corpus anchor: pest/disease recognition 615 → 1,016 species at >93%, cau.edu.cn). A 2 September 2026 Jiangsu official-media feature reports 4.0 covering **all 31 provinces**, "serving a million farmers", with over **5M mu** of applied use — a jump from the >100k users reported at the 3.0 launch (13 October 2025, World AgriTech Innovation Conference) that no source explains. People's Daily (27 January 2026) supplies the corpus's first named farmer-level adoption: Du Lianhui, 600 mu of corn near Shenyang, per-mu cost down from ~480 to below 400 CNY in 2025; a 神农卫田 WeChat mini-program for photo-based diagnosis; **36 specialist agents**; a "three-sentence" answer design for farmer usability; and the team's own admission that **compute limits prevent unlimited farmer use**.
- **Sinong 司农 (Nanjing Agricultural University).** Released **10 January 2026**, open-weight 8B/32B on ModelScope (NAULLM org) and GitHub — the corpus's only *directly verifiable* open-weights claim in the Chinese agri-LLM population. Corpus of ~4bn tokens (~9,000 books, 240k+ papers, ~20k policies/standards); multi-agent RAG; explicitly framed as implementing the State Council "AI+" opinion. NAU subsequently released 问梨 (world-first open pear-industry LLM) and 司农智机 (agricultural machinery).
- **Tiangong Kaiwu 天工开悟 (Harbin Institute of Technology, Liu Jie team).** HIT's own newsroom (11 March 2026) calls it the **first officially registered (备案) agricultural LLM in China** and "the first agricultural large model covering the whole agricultural production chain": growth prediction across **24 crops / 64 varieties**; deployed on **114 Heilongjiang farms**, serving over **1M mu**, with claimed average **+5% yield / −10% cost** (all HIT-reported). 2024 UK international invention exhibition diamond award; 2025 the only smart-agriculture entry in the China-SCO Digital Technology Toolbox. **v3.0 due H2 2026** with an agent platform of 1,200+ agricultural model algorithms. Name discipline: 天工开悟 (kaiwu, "enlightenment") — not 天工开物, the 17th-century technology treatise the romanisation invites.
- **Provincial and sector models.** The Jiangsu feature names a dense provincial population: 瑞雪 (global-first plastic-film vertical LLM, Jiangsu Academy of Agricultural Sciences), 豆好 (mung-bean breeding agent with Zhejiang University), 谷语 (first Jiangsu nationally-registered agri vertical model), 新犁 (first Jiangsu model in production decision use), 光伏慧农 (agri-PV trade-off model); Anhui Agricultural University's 丰菽 2.0 (soybean) and 棃想 (pear); Shanghai's 丰登 (first bio-breeding model); Heilongjiang's 龙江农知. Anhui's **Gengyun 耕云** (provincial MARA + iFlytek, first shown September/October 2023, 360M records / ~2M documents) is the cautionary case: a critical Chinese blog reports **no findable public entry point**, and nothing post-2023 surfaced — existence as a live product rests on one launch announcement.

### The SOE wave

- **Sinochem iMAP** (28 July 2025, Sinochem newsroom): first central-SOE crop-cultivation LLM, built with China Mobile on the 九天 (Jiutian) base model; eight scenarios; ~**1M mu** of corn pilots in Inner Mongolia and the Northeast; delivered through Sinochem's several-hundred MAP (Modern Agriculture Platform) service centres — an SOE delivery channel, not an app-store channel.
- **China Telecom 雄小农 Xiongxiaonong** (Hebei provincial MARA + China Telecom, February 2025): the first DeepSeek-based agricultural sector model, built on China Telecom's 星辰·神农一号 base — note the **naming collision** with CAU's Shennong across two different institutions. Documented at snippet level in a peer-reviewed survey and China Telecom's ESG report; no Hebei government primary page located; no user numbers anywhere.
- **CAAS models**: the Institute of Agricultural Information with CNKI released China's first general agricultural LLM and knowledge platform (August 2024, 1bn+ records); the Institute of Agricultural Resources released 農耕大模型1.0 (December 2025, farmland monitoring, Tang Huajun team); CAU's 工耕 agri-robotics model (July 2026).

### The adoption picture — better than the corpus's standing finding, still unaudited

The corpus's September cycle finding was that on-farm usage evidence was almost absent, anchored by 240 million agricultural-LLM tokens/year against ~200 million farm households (`units/china-smart-fisheries-fanli-llm.md`). This unit upgrades that in one respect and holds it in another:

- **Upgraded:** named farmer-level adoption now exists (the Du Lianhui case; the 神农卫田 mini-program user), plus institution-reported user counts (>100k Shennong 3.0 users; "million farmers" 4.0 claim; 114 Tiangong Kaiwu farms).
- **Held:** **no independent evaluation of any Chinese agricultural LLM was found** — every outcome figure is deployment-actor reported, consistent with the corpus's standing no-audit finding. The most credible countervailing evidence is internal to the sector: the Jiangsu feature's own framing that most models "remain in laboratories and demonstration bases", the named barriers (data silos, cost, elderly-farmer usability, missing mechanisation beneath the AI layer), and CAU's admission of compute limits on farmer access.

## What this unit is doing in the taxonomy

Anchors the **Chinese agricultural LLM population** as a cell distinct from the fisheries-specific LLM unit and the policy-document chain. Distinct from:

- `units/china-smart-fisheries-fanli-llm.md` — the fisheries LLM unit where the 240m-token anchor lives; this unit covers the rest of the population and carries the adoption-evidence assessment.
- `units/china-smart-agriculture-action-plan-2024-2028.md` — the plan layer that mandates "20+ base model algorithms and general software tools or SaaS" by 2028; this unit is the emergent supply those targets describe.
- `units/china-no1-central-document-2026-ai.md` — the political-mandate layer, refreshed 2026-11 with the 15th FYP "AI + agriculture" action and the intelligent-design-breeding clause.
- `units/china-ground-robotics-unmanned-farms.md` — where Tiangong Kaiwu also appears, as decision support inside the ground-robotics delivery story.

## New gaps surfaced by this unit

- **G-476 (new):** independent evaluation of Chinese agricultural LLMs — no benchmark, third-party audit or peer-reviewed outcome study of any named model was found; the CSAE survey documents the population without evaluating it. Track: any MRV-style audit, benchmark leaderboard, or academic evaluation of Shennong/Sinong/Tiangong Kaiwu.
- **G-477 (new):** the Shennong user-count discontinuity — >100k users (October 2025, 3.0) to "million farmers / 5M mu" (September 2026, 4.0) with no intermediate measurement or methodology in any source.
- **G-478 (new):** 雄小农 primary documentation — no Hebei provincial-government primary page; the model is known at snippet level via the CSAE survey and China Telecom ESG material; no user or deployment figures.

## New contested claims surfaced

- **C-360 (new):** "Chinese agricultural LLMs are reaching farmers at scale" — supported by institution-reported counts (million-farmer claims, 114 farms, 5M mu) and one named farmer case; countered by the sector's own verdict that most models remain lab-bound ("盆景不是风景"), the absence of any independent evaluation, and the 240m-token/year aggregate that implies per-household usage near zero.

## Links

- related-units: `china-smart-fisheries-fanli-llm.md` (fisheries cell + token anchor), `china-smart-agriculture-action-plan-2024-2028.md` (the 20-model target), `china-no1-central-document-2026-ai.md` (15th FYP AI+agriculture), `china-ground-robotics-unmanned-farms.md` (Tiangong Kaiwu in the robotics story), `programmatic-breeding-ai.md` (global breeding-AI frame the Chinese breeding models plug into)
- gaps: G-476, G-477, G-478 (new, above)
- contested-claims: C-360 (new, above)

## Freshness

- last-verified: 2026-11
- last-regionally-scanned: 2026-11
- sources (checked 2026-11-08; two read in full this session, the rest located by the discovery pass with URLs — V-tiers reflect that):
  - HIT newsroom. 哈工大以AI播种"农业未来" (10 March 2026) — **read in full**: 天工开悟 details, 114 farms / 1M mu / +5% / −10%, v3.0 and 1,200-algorithm platform, HIT+CAAS agricultural-AI college (Nov 2025). http://news.hit.edu.cn/2026/0311/c11819a241436/page.htm
  - 交汇点/新华日报 (Jiangsu official media). 探索｜农业垂直大模型百舸争流 (2 September 2026) — **read in full**: Shennong 4.0 reach claim, the 盆景/风景 critical voice, four named barriers, Jiangsu model population, Suzhou group standards. https://jsnews.jschina.com.cn/jsyw/202609/t20260902_s6a97769ee4b03b461cd06933.shtml
  - NAU newsroom. Sinong release (10 January 2026). https://www.njau.edu.cn/2026/0113/c1108a139949/page.htm
  - Sinong repository and weights (open-weights claim directly checkable). https://github.com/njauzzx/Sinong ; modelscope.cn/organization/NAULLM
  - People's Daily theory page (27 January 2026): Du Lianhui farmer case; 神农卫田; 36 agents; compute-limit admission. http://kpzg.people.com.cn/BIG5/n1/2026/0127/c404214-40653242.html
  - Transactions of the CSAE survey 中国农业大模型数据治理、核心技术与应用挑战 — model population table incl. 雄小农 (not 熊小农), 耕云, 后稷AgriMa, PigGPT, 小田. https://www.aeeisp.com/nygcxb/cn/article/pdf/preview/10.11975/j.issn.1002-6819.202505226.pdf
  - Sinochem newsroom (28 July 2025): iMAP launch. https://hk.sinochem.com/hk.sinochem/xwdt/jtdt/2025/7/I1399790995863764992.html ; China Mobile newsroom (30 July 2025): Jiutian base model. https://www.10086.cn/aboutus/news/groupnews/index_detail_53314.html
  - Digital China summit portal (2 August 2024): CAAS+CNKI first general agricultural LLM. https://www.szzg.gov.cn/2024/xwzx/qwfb/202408/t20240802_4869817.htm
  - CAAS Institute of Agricultural Resources (17 December 2025): 農耕大模型1.0. https://www.ncsti.gov.cn/kjdt/kjrd/rgzn_kjrd/202512/t20251217_232510.html
  - Critical blog on Gengyun's absent public entry point. https://www.cnblogs.com/miyuanbiotech/p/18190240.html
- verification notes: name corrections are load-bearing and were the discovery pass's primary findings — 雄小农 (Xiong'an's 雄, Hebei MARA + China Telecom) not 熊小农; 天工开悟 not 天工开物. The HIT page (primary) confirms the 天工开悟 characters and institutional attribution directly.
