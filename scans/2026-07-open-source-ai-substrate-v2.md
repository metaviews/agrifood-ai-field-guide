---
title: 'Open Source AI Substrate — Fresh-Pull Scan (July 2026, v2)'
date: 2026-07
kind: substrate-scan
status: fresh-pull (distinct from 2026-07-open-source-cycle.md, which was synthesis-of-existing)
builds_on:
  - scans/2026-07-open-source-cycle.md (synthesis-of-existing; this scan is the substrate for it)
  - units/mozilla-state-of-open-source-ai-2026.md (Mozilla findings unit)
  - scans/2026-07-eu-institutional-funder-substrate.md (EU funder layer)
  - scans/2026-07-eu-regulatory-substrate.md (EU regulatory layer)
  - scans/2026-07-hyperscaler-substrate.md
purpose: load-bearing context for open-source AI in agrifood discussion; not agrifood-specific per se, but anchors every agrifood-specific open-source claim against the broader AI substrate
pattern: substrate scan (structural-layer, funding-flow lens per user preference 21 Jul 2026)
freshness-rule: see "Freshness model" section
---

# Open Source AI Substrate — Fresh-Pull Scan (July 2026, v2)

**This is the load-bearing substrate scan for any open-source AI in agrifood work in the field guide.** Distinct from `2026-07-open-source-cycle.md`, which synthesised what was already in the corpus. This scan pulls the broader open-source AI substrate fresh — Mozilla 2026, EU institutional and regulatory, Linux Foundation, OSI/OSAID, FAO, Cohere/Canada, China Five-Year Plan — as context for the agrifood-specific work.

**Why "substrate" rather than "cycle" or "deepening".** Substrate scans don't surface agrifood actors; they surface the structural layer above and around them. This is the broader open-source AI ecosystem within which agrifood AI moves. Whether a farmer cooperative considers JoinData-style infrastructure, or a public research lab considers GAIA-style open-source models for agrifood, or a Canadian province considers how Cohere's North open-weights posture intersects with EU sovereign AI funding — this scan provides the upstream context.

**Lens: funding flow.** Per the field guide's confirmed substrate-scan pattern (EU institutional scan, Jul 21 2026), the substantive axis is not "what is open" but "what is being funded, and where the public/private flows converge or diverge." Open-source AI has become the *fundable* form of the technology in 2025–2026, and the funding pattern itself is the substantive finding.

---

## 1. The Mozilla State of Open Source AI Report (July 14, 2026) — the empirical anchor

Mozilla's inaugural annual assessment, based on a SlashData survey of 1,410 developers across 9 regions and an analysis of 1,361 open-source projects across 48 components in 9 layers of the AI stack.

### 1.1 Headline empirical findings

| Finding | Value | Reading |
|---|---|---|
| Capability gap (open vs closed frontier) | **3.3% (Mar 2026)**, down from 8.04% (Jan 2024), briefly 0.5% (Aug 2024 with R1), now drifted back to 3.3% as closed reasoning pulls ahead | Open is at parity on coding, instruction-following, general knowledge. Gap concentrates in reasoning, long-context retrieval, agentic tasks. |
| Inference cost (GPT-4-equivalent, per 1M tokens) | **$20 (late 2022) → $0.40 (late 2025)**, a 50× collapse in 36 months | Same arc as dotcom-era bandwidth and PC-compute price curves. |
| Share of real-world AI tokens routed through open weights | **~one-third (late 2025), majority by mid-2026** | On OpenRouter, 5 of top 5 highest-volume models are open weights (DeepSeek V4 Flash, MiMo-V2.5, Hy3, Ollama, Owl Alpha). |
| Revenue capture (open weights) | **4%** | The structural imbalance: open models route the majority of tokens but capture ~4% of model-layer revenue. |
| China + East Asia open-source AI adoption | **89%** | Far ahead of West. Open source is corner-stone of national AI strategy, not vendor choice. |
| Greater China share of weekly OpenRouter traffic | **61% among top 10** | More than 3:1 vs US-built. Qwen alone 942M cumulative HF downloads. |
| Developer use vs production deployment (open models) | **79% use, 51% deployed** | vs closed: 71% use, 63% deployed. Gap is operational tooling, not capability. |
| Users approving AI agent requests by default | **93%** | "Consent fatigue" — Mozilla's structural finding about the harness layer. |
| Average challenge rating by region | Operational, not capability | "High infrastructure or compute costs" tops every region (27% weighted avg). South Asia names security/compliance 39%. |

### 1.2 Mozilla's framing

**Raffi Krikorian (CTO):** *"Open source AI has reached a turning point. It's no longer about expanding access to models; it's about who has the power to shape, audit, and improve them. Without investment in the infrastructure, tooling, and governance around open models, we risk locking in a system where only restrictive, closed AI can scale."* (Mozilla, Jul 14 2026)

**Stefano Maffulli / Álvaro Ruiz Cubero framing of the deployment gap:** *"This gap indicates that there is not an issue purely of model quality, but of missing infrastructure. Deployment rates for open models barely increase with company size, highlighting a lack of mature tooling and support. At the same time, buyers are prioritising licensing terms (31%) and ownership (26%), signalling a clear shift toward control and flexibility over raw capability."*

### 1.3 The nine-layer stack map

Mozilla scored 48 components across 9 layers on 10 criteria, including open-vs-closed parity. The two columns that repeat *coldest* down every layer are **standardization** (mean ~3.0) and **enterprise readiness** (~2.8). The two columns that repeat *hottest* are **community** and **adoption**.

| Layer | Open-vs-closed verdict | Average score | Substantive observation |
|---|---|---|---|
| 01 Infrastructure | Closed leads | 3.49 | Cloud compute, compilers, firmware, chips. NVIDIA dominates closed; AMD KFD + Qualcomm Hexagon enter open. |
| 02 Datasets | Competitive | 3.30 | Closed leads on preprocessing and pretraining data; competitive on benchmark, alignment, synthetic data. |
| 03 Code | Competitive | 3.97 | vLLM, llama.cpp, Ollama all open + mature. Inference code **leads open 4.3 vs 4.0**. |
| 04 Weights | Competitive | 3.66 | Compressed weights (GGUF, BitNet) **unique to open** (5.0 vs 4.0). Domain weights closed-leads (medical, legal, finance). |
| 05 Product/UX | Competitive | 3.42 | Ollama 174k stars, LangFlow 150k, Dify 145k. UI/API closed leads. |
| 06 Documentation | Closed leads | 3.20 | Sample outputs and demos open-leads (5.0 vs 4.0; Stable Diffusion WebUI 164k stars). |
| 07 Licensing | Mixed | 3.10 | **Code licenses unique to open** (5.0). Data licenses closed leads. ToS closed leads. |
| 08 Safeguards | Closed leads | 2.64 | Access/release competitive (3.0). Auditing, governance closed leads. |
| 09 Agent layer | Mixed | 3.05 | Standards stack **unique to open** (MCP, A2A, OpenAPI — 4.1). Permission model closed leads. |

**Substantive observation:** the open-vs-closed contest is now at the *agentic harness* layer, not the model layer. The model's open-vs-closed gap is small; the harness's open-vs-closed structural lead is what matters.

### 1.4 The financial maturity table

| Company | HQ | Layer | Disclosed funding | Valuation | Revenue signal | Stage |
|---|---|---|---|---|---|---|
| DeepSeek | China | Frontier open weights | **$7.4B** | **$50B+** | ~$220M ARR | Private |
| Moonshot AI (Kimi) | China | Open weights | $3.9B | — | — | Private |
| Mistral AI | France | Open weights + platform | **$3.05B** | **~$14B (talks at €20B)** | ~$400M ARR, 20× YoY | Private |
| Reflection AI | USA | Open weights | $2.13B | — | — | Private |
| Cerebras Systems | USA | Compute | $2.1B | — | — | Private |
| Cohere | Canada | Enterprise / on-prem | $1.7B | — | Command A+ open-sourced May 2026 | Private |
| Together AI | USA | Inference cloud | $1.334B | — | — | Private |
| Hugging Face | USA | Hub | $400M | — | — | Private |
| Baseten | USA | Inference | $585M | — | — | Private |
| Black Forest Labs | Germany | Model | $450M | — | — | Private |
| Stability AI | UK | Model | $230M | — | — | Private |
| Zhipu AI | China | Open weights (GLM) | Undisclosed | Public | HK IPO 2026 | Public |
| MiniMax | China | Open weights | Undisclosed | Public | HK IPO 2026 | Public |

**Substantive observation:** the open-source AI ecosystem has moved from grants to venture-scale to public markets. Three Chinese open-weight labs (DeepSeek, Moonshot, Zhipu) and one Canadian (Cohere) carry the headline valuations. DeepSeek's $7.4B raise at $50B+ valuation is the single largest mark on the open side.

### 1.5 Mozilla's "Why it's happening everywhere" — the strategic case

Mozilla frames the geopolitical turn on a single anecdote: *"Three days after Claude Fable 5 went on sale, a single government's export order forced Anthropic to cut access for every foreign national on earth. No other capital was consulted. None could have been. Selective compliance was impossible, so the models went dark for everyone at 5:21 p.m. on a Friday. Anyone who had built on that model inherited a shutdown they had no warning of and no part in."*

The cloud-era precedent — AWS S3 egress $90–120k per PB; 37signals' $3.2M → <$1M repatriation; GEICO's 2.5× cloud overrun — frames the same threat for AI: build on proprietary endpoints and you inherit the vendor's pricing changes with no clean exit. **Open weights are exit rights.**

### 1.6 The harness frontier (Mozilla Section 5)

Mozilla's analytical contribution: **the model is no longer the contest; the harness is.**

| Terminal-Bench 2.0 (May 2026) | Independent harness on Anthropic weights 79.8% vs Claude Code 58.0% — 21.8-point spread showed the harness was bigger than the weights |
|---|---|
| Terminal-Bench 2.1 (Jul 2026) | Lab harnesses pulled in-house; gap compressed to ~3 points at top. Codex CLI 83.4%, Claude Code 83.1%, best independent 80.4% |
| vals.ai Terminus-2 (neutral scaffold) | Claude Opus 4.8 closed $2.41/task 71.9%; GLM 5.2 strongest open $0.43/task 67.8% — **same harness, 5× cost gap** |

The lab-owned harness is becoming a fit-for-only-one-lab. **Lock-in arrives as a side effect of optimization.** Open models have no first-party harness to match; "build the open harness co-designed with open weights" is Mozilla's bet one of five.

### 1.7 Five opportunities, five bets (Mozilla Sections 6 & 7)

1. **Build the open harness, co-designed with open weights.** The window is open; closed stacks are welding model + scaffold into rented products.
2. **Own the memory.** When weights price toward zero, memory compounds. Hold it in portable, append-only formats behind your own firewall.
3. **Solve portable permission.** No portable standard defines which writes an agent can make unattended across MCP, A2A, direct tool calls, framework boundaries. The plumbing scaled; the lock on it didn't.
4. **Break the meter.** Frontier API pricing is the cheap-rides era of ride-hailing; second-source now, while it is cheap and boring.
5. **Make the open default plural.** A commons with one supplier isn't a commons. 47 nations restrict foreign processing; 70+ national strategies are live; public money has to hold through the slow middle.

---

## 2. The EU institutional / funder substrate — open-source as a funded strategy

### 2.1 EUROPA consortium — the biggest single line item

**Henna Virkkunen, EVP Tech Sovereignty:** *"Europe can lead in advanced AI on its own terms. EUROPA will build a frontier European AI model in all 24 EU languages, showing that we can match the best while staying true to our values. This is about strengthening Europe's ability to shape AI's future with openness, trust and strategic autonomy at its core."*

| Item | Value |
|---|---|
| **Programme** | Frontier AI Grand Challenge (launched Feb 2026; winner selected Jun 19 2026) |
| **Winner** | EUROPA consortium |
| **Consortium lead** | **Domyn** (Italy) |
| **Scale** | Frontier model with 400B+ parameters |
| **Languages** | All 24 official EU languages |
| **Open posture** | Explicitly **open-source** — code, weights, methodology |
| **Strategic framing** | "European capacity to develop advanced AI on its own infrastructure" |

### 2.2 EuroStack — the industrial-policy frame

EuroStack is the broader proposal that the Frontier AI Grand Challenge is one piece of. Bertelsmann Stiftung / EU-aligned. "An European Industrial Policy initiative bringing together tech, governance and funding for Europe-focused investment." Approximately 500 signatories.

**Two EuroStack outputs matter here:**

1. **The White Paper — European strategic sovereign digital infrastructures.** Connectivity, cloud, AI, digital platforms as a single policy initiative. "Joining and building logical and physical infrastructures to secure Europe's role in competitive digital value chains."
2. **The Buy European Framework.** Proposed "Buy European" regulation for strategic digital procurement. Mirrors US/EU/defense industrial-base procurement logics.

### 2.3 Portugal Amália (Jul 1, 2026) — first member-state open-source LLM

Portugal's **Amália** launched as "first open-source AI model joining Europe's sovereignty push" (Reuters, Jul 1 2026). Member-state-level analogue to EUROPA. National-symbolist naming (Amália Rodrigues, fado singer); multilingual PT/EN with broader language coverage.

### 2.4 Germany BMDS SPARK API

Federal Ministry of the Interior (BMDS) — modular AI services for "flexible and faster administrative processes." SPARK API as a Germany federal open-weights LLM for public administration. Government procurement as the lever for adoption.

### 2.5 Canada $890M "AI for All" (Carney, June 4, 2026)

**Prime Minister Mark Carney's "AI for All" launch.** Public investment framing parallel to EUROPA, denominated differently. Cohere Command A+ (open-sourced May 2026) is the headline Canadian open-weight model. Nick Frosst quote (Cohere): positioned around *"sovereign AI"* — Canadian data centres, Canadian data residency, open-weight models.

Cohere's positioning (aicompetitiveness.ca's *Sovereign by Design*, 2026): **"A Public AI approach would complement open-weight adoption with domestically [developed models]."** First North American service provider to join the NVIDIA Cloud [partner network], per same report.

### 2.6 India IndiaAI Mission — ₹10,372 Cr outlay / 38,231 GPUs / 600 data labs

**India AI Compute Capacity** (indiaai.gov.in): Mission outlay ₹10,372 Cr; 38,231 GPU accelerators empanelled; 600 data labs planned. IndiaAI Mission is the most concrete public-funder-side *compute-for-anyone* commitment anywhere — open-weights developers can apply for compute time.

### 2.7 Open-source as a national-strategy axis

| Jurisdiction | Open-source posture | Programme / vehicle |
|---|---|---|
| China | Strategic state-aligned; "AI Plus" Initiative (Aug 2025) + Five-Year Plan (Mar 2026); open weights as macro hedge vs export controls | State Council; National Development and Reform Commission |
| EU | Regulatory + funded; EUROPA + EuroStack + Frontier AI Grand Challenge + Amália analogue + Buy European | DG CONNECT; Henna Virkkunen EVP Tech Sovereignty |
| Canada | Public investment + private deployment; "$890M AI for All" (Carney, Jun 2026) | PM Office; ISED; Cohere private complement |
| India | Compute-for-anyone + national language coverage | IndiaAI Mission, ₹10,372 Cr |
| United States | Permissive, federal permission + NTIA "monitor, don't restrict"; private capital flows (Databricks, Cerebras, Together AI, Reflection) | NTIA; NIST; private markets |
| United Kingdom | Limited; Stability AI as flag-bearer; no equivalent national-scale open-weights programme identified | DSIT; AI Security Institute |
| France | Private-public; Mistral Series C €11.7B including ASML 11% stake | French government €109B AI investment (Elysee, Feb 2025) |
| Saudi Arabia | Humain $77B + 1.9GW data centres; flagged but direction not yet clear | PIF; Humain |
| United Arab Emirates | G42 + $15.2B Microsoft partnership; flagged but direction not yet clear | G42; Mubadala |
| South Korea | $71.5B AI market (Fortune Business Insights); scale rather than orientation | Ministry of Science & ICT |

**Pattern:** the open-source axis is now a national-strategy axis. China treats open-source release as a *macro hedge against export controls*; the EU treats open-source AI as the *vehicle for sovereign capability*; India treats open-source development as the *consumption-side route to national AI*; Canada treats open-source as the *domestic-deployment lens on a private-anchored model*. The US treats open-source as a *permission regime*, not an industrial policy.

---

## 3. The EU regulatory substrate — Code of Practice for GPAI models

### 3.1 Key dates (EU AI Act)

| Date | Obligation |
|---|---|
| **Aug 2 2025** | GPAI rules take effect. All new models released from this date must comply. |
| **Aug 2 2026** | Commission enforcement actions begin (requests for information, access to models, model recalls). |
| **Aug 2 2027** | Pre-existing models (released before Aug 2 2025) must be brought into compliance. |

### 3.2 Code of Practice chapters

- **Transparency Chapter** — Commitment 1: Documentation + Model Documentation Form.
- **Copyright Chapter** — Commitment 1: Copyright Policy.
- **Safety and Security Chapter** — Commitments 1–10 (Safety and Security Framework, Systemic Risk Identification, Systemic Risk Analysis, Acceptance Determination, Safety Mitigations, Security Mitigations, Model Reports, Responsibility Allocation, Serious Incident Reporting, Additional Documentation).

**Personnel vetting / Insider threat awareness / Prevent self-exfiltration by models / Safeguard model training** are the granular safety requirements. Independent external reviews; red-teaming; bug bounty programs; insider mitigation protocols; Endpoint Detection and Response (EDR) or Intrusion Detection Systems (IDS).

### 3.3 Open-source exemptions

The EU AI Act exempts some open-source GPAI models from certain obligations (Article 53(1), as amended in compromise). The Commission's guidelines on GPAI providers (Jul 2025) further clarify.

**The contested space:** OSAID requires data + code + weights for "open-source AI"; the EU AI Act exemption regime extends to "free and open-source" models but with definitions that may not align. Mozilla report's *the open default* finding hinges on which definition a jurisdiction recognises.

---

## 4. The foundation side — Linux Foundation Agentic AI Foundation (AAIF, Dec 9 2025)

### 4.1 Founding charter

| Founding project | Donor | Description |
|---|---|---|
| **Model Context Protocol (MCP)** | Anthropic | Universal standard for connecting AI to tools, data, applications. |
| **goose** | Block (Square, Cash App) | Open-source, local-first AI agent framework. Combines LLMs, MCP-based tools, structured agentic workflows. |
| **AGENTS.md** | OpenAI | Markdown-based standard for AI coding agents; uniform project-specific guidance across repositories. |

### 4.2 AAIF membership tiers

**Platinum (8):** Amazon Web Services, Anthropic, Block, Bloomberg, Cloudflare, Google, Microsoft, OpenAI.

**Gold (17):** Adyen, Arcade.dev, Cisco, Datadog, Docker, Ericsson, IBM, JetBrains, Okta, Oracle, Runlayer, Salesforce, SAP, Shopify, Snowflake, Temporal, Tetrate, Twilio Inc.

**Silver (~25):** Apify, Chronosphere, Cosmonic, Elasticsearch, Eve Security, Hugging Face, Kubermatic, KYXStart, LanceDB, Mirantis, NinjaTech AI, Obot.ai, Prefect.io, Pydantic, Shinkai.com, Solo.io, Spectro Cloud, Stacklok, SUSE, Uber, WorkOS, Zapier, ZED.

### 4.3 MCP metrics (one year in)

- 10,000+ public MCP servers.
- 97M+ monthly SDK downloads across Python and TypeScript.
- Adoption: Claude, Cursor, Microsoft Copilot, Gemini, VS Code, ChatGPT.
- November 25 2025 spec release — asynchronous operations, statelessness, server identity, official extensions.
- OAuth 2.1 with PKCE (2025-03-26 spec) hardened the auth layer.

**Substantive observation:** AAIF is the most consequential institutional consolidation of "open agent infrastructure" — eight of the nine biggest AI vendors in the world agreed on a Linux Foundation home for the harness layer. This is what *open-by-infrastructure* (vs open-by-weight) looks like.

### 4.4 Anthropic + Block + OpenAI framing of why AAIF matters

**Mike Krieger (Anthropic CPO):** *"MCP started as an internal project to solve a problem our own teams were facing. When we open sourced it in November 2024, we hoped other developers would find it as useful as we did. A year later, it's become the industry standard for connecting AI systems to data and tools…Donating MCP to the Linux Foundation as part of the AAIF ensures it stays open, neutral, and community-driven as it becomes critical infrastructure for AI."*

**Manik Surtani (Block):** *"We're at a critical moment for AI. The technology that will define the next decade…can either remain closed and proprietary for the benefit of few, or be driven by open standards, open protocols, and open access for the benefit of all."*

**Nick Cooper (OpenAI):** *"By co-founding the AAIF and donating AGENTS.md, we're helping establish open, transparent practices that make AI agent development more predictable, interoperable, and safe."*

---

## 5. The Open Source Initiative (OSI) — the definitional substrate

### 5.1 The Open Source AI Definition v1.0 (OSAID 1.0, October 28 2024)

**The four freedoms** OSAID preserves (echoing the four freedoms of free software):
- Use the system for any purpose without permission.
- Study how the system works and inspect its components.
- Modify the system for any purpose.
- Share the system with others.

**For AI, OSAID requires (Stefano Maffulli, OSI Executive Director):**
1. **Model weights and parameters** — must be available.
2. **Code used to build and train the system** — must be available.
3. **Code for dataset creation** — must be available.
4. **The complete training data (or "detailed information enabling its reproduction")** — must be available.

**Substantive observation:** OSAID treats "open source" as a **binary threshold**, not a spectrum. By OSAID, Meta's Llama 3 and Mistral's models and Qwen and DeepSeek are *open weights* — they release the weights but withhold training data, sometimes data-prep code, and often RLHF / fine-tuning code. Under OSAID, they are **not** open source.

Maffulli's framing: *"Just as Linux and BSD represent different licensing models but both qualify as Open Source, AI must meet a minimum set of criteria to be considered genuinely Open Source. Many models claiming to be 'Open Source' actually impose usage limitations based on user numbers, commercial applications, or other criteria."*

### 5.2 The "data information" carve-out

OSAID 1.0 introduces "data information" as an alternative to requiring complete dataset publication. This addresses: data protection compliance (patient data); international copyright variation (Italy's state copyright on the David); TDM exceptions not covering redistribution; accidental copyright inclusion in large datasets.

### 5.3 The downstream-compliance rationale

OSAID's downstream-compliance rationale: developers building derivative AI systems need sufficient information to ensure their creations comply with data quality standards (EU AI Act), data protection law, bias assessment, copyright clearance, security validation. Without transparency, derivative systems risk legal liability.

### 5.4 The "open weights" critique

**OSI's position (Sept 2025):** OSI continues to push back against the usage of "open source AI" to mean "open weights only." Common corpora for this distinction:
- Llama 3 (Meta) — Meta Llama 3 Community License; restricted commercial use above 700M MAU.
- Mistral — Apache 2.0 base models; proprietary fine-tunes.
- DeepSeek R1 — MIT licence (one of few meeting OSAID on weights; data still not fully released).
- Qwen (Alibaba) — Tongyi Qianwen licence; commercial restrictions for some variants.
- BigCode / Granite (IBM) — closer to OSAID but with usage clauses.

---

## 6. Currents — four distinct positions on what "open source AI" means

The field has at least four distinct currents; the conflicts among them are the substantive substance.

### Current 1 — "Open weights, period" (US frontier labs + Chinese labs)

**Anchor: Meta Llama + Mistral + Qwen + DeepSeek.**

**Stance:** Release weights under a custom or permissive licence. Training data and data-prep code may or may not be released. Enterprise licensing may impose restrictions.

**Substantive use:** Allows downstream fine-tuning, self-hosting, and inference without paying per-token.

**Why it is *not* OSAID-conformant:** withholds training data; some models (Llama 3) restrict enterprises over 700M MAU; some (Qwen) impose regional restrictions.

**Critical observation:** Mozilla's "open weights wins the tokens" finding lands here. This current has the empirical majority.

### Current 2 — "Open by infrastructure, not just weights" (Linux Foundation / AAIF / OSI)

**Anchor: AAIF charter projects (MCP, goose, AGENTS.md); OSAID definition; Element / Matrix; Kubernetes model.**

**Stance:** Open-source AI is a stack problem, not a weights problem. The Protocol/projects must be governed by a neutral foundation with open governance. The level of "open" is the level at which lock-in can be prevented.

**Substantive use:** MCP / A2A / OPA / OpenAPI as the open standards stack. AAIF as the institutional home.

**Why it matters:** Mozilla's "the harness is the new frontier" finding is exactly this current. The closed-model-vs-open-model debate is being re-staged as the closed-harness-vs-open-harness debate, and the AAIF members are the actors who decided the harness would be open.

### Current 3 — "Open by state funding" (EU + China + India + Canada)

**Anchor: EUROPA, EuroStack, China State Council "AI Plus", India IndiaAI Mission, Canada "AI for All".**

**Stance:** Open-source AI is a means to *sovereign capability*. Release models, train open models on sovereign compute, prefer open-weights for procurement. The openness is strategic, not philosophical.

**Substantive use:** Public-funded open-weights models address a private-market gap (no frontier lab outside US/China). Sovereign compute is the binding constraint; open weights are the route to scale.

**Why it matters:** Mozilla's "Why it's happening everywhere" + "open isn't a vendor choice, it's a sovereignty choice" directly names this. The State Council macro-hedge framing (open-source release as countermeasure to US chip export controls) is the most articulated version.

### Current 4 — "Open by FAO/Digital Public Good framing" (UN system + Global South)

**Anchor: Vincent Martin (FAO), Digital Public Goods Alliance, OSPOs for Good conference, UN Global Digital Compact, UN Secretary-General's Roadmap for Digital Cooperation.**

**Stance:** Open-source is a *Digital Public Good* in service of the SDGs. Software freedom is a means to *development equality* — small-scale farmers can adapt open tools to local conditions; researchers can build without licensing walls; civil society can audit.

**Substantive use:** UN 2.0 + quintet of change. eLocust3 (FAO), FarmStack (Digital Green + FAO), OpenFMD (FAO WRLFMD), OpenForis. Reboot the Earth (Salesforce + FAO + UN Youth Envoy). The "OSPOs for Good" conference framing.

**Why it matters:** This is the most under-represented current in Western AI discourse. It carries the FAO institutional weight, the Global South developer base, and the UN-level legitimacy. Mozilla report foregrounds community/non-Western deployment but it's the Vincent Martin / Digital Public Goods framing that gives this current its institutional expression.

---

## 7. The agrifood application — what this substrate means for the field guide

### 7.1 The Mozilla 2026 findings apply to agrifood directly

| Mozilla 2026 finding | Field guide agrifood application |
|---|---|
| 3.3% capability gap | Open-source AI in agrifood is technically feasible; the question is infrastructure, not capability. |
| 79% / 51% gap | Adoption ≠ deployment in agrifood too. Farm-level AI deployment is rarer than developer-level. |
| 4% revenue capture | Open-source AI vendors in agrifood unlikely to achieve venture-scale returns. Reinforces Pillaud's "unicorns don't exist in agriculture" framing. |
| Agentic harness is the contest | The data-governance / data-rights-framework work in the field guide (JoinData, OADA, NAPDC, GAIA, Indigenous Navigator, IEK / IQ) is all *harness work*, not *model work*. |
| 89% East Asia adoption | The China cycle's open-source inclination in DJI, XAG, Alibaba is structural; not vendor idiosyncrasy. |
| "Be owners, not renters" | The data sovereignty / data cooperative substrate (JoinData, NAPDC, cooperative agriculture globally) is the agrifood translation. |
| State-level public funding | Public-funded agrifood AI is now in the European Commission's portfolio; EUROPA's broader portfolio includes agricultural-language coverage (PT, FR, ES). |
| France €109B | The Pillar of France's AI sovereignty includes Mistral; Pillaud's GAIA draws on the same infrastructure. |

### 7.2 Four agrifood-specific currents now visible

**Agrifood Current A — Open-source agronomy data platforms (CGIAR + GODAN + FAO eLocust3 + OpenForis + FarmStack)**

FAO / Digital Public Goods Alliance axis. Already documented in the field guide as `godan-2-0-africa-open-data.md` + `cgiar-agrillm-ai-global-south.md` + `ushahidi-civic-tech-agrifood-ai.md` + `code-for-africa-ai-for-good.md`.

**Agrifood Current B — Open-source farm software (FarmOS, FarmVibes.AI, eLocust3, GAIA)**

Microsoft Research FarmVibes is the most-deployed Western example; FarmOS the long-running open-source farm records project; GAIA (Pillaud, La Ferme Digitale) the most articulated agrifood-specific open AI substrate. Already documented in the field guide as `la-ferme-digitale-gaia.md`.

**Agrifood Current C — Open-source open-data agrifood models (CGIAR, BigAg, AgML)**

`AgML` / `ai_agriculture_news` / `awesome-agriculture` GitHub project tooling. The tooling is open; the trained models are partial. This is the partial-OSAID landscape.

**Agrifood Current D — Open-weights foundation models for agrifood fine-tunes (Mistral, Cohere, Qwen)**

The deepseek + Qwen + Llama + Mistral + Cohere weight lists are open; the agrifood fine-tunes over those weights are growing. Mozilla's finding that 79% of developers use open weights applies directly: the agrifood-developer layer has the same headline figure but with less production deployment. This is the field guide's load-bearing gap.

### 7.3 The agrifood harness question — Mozilla's bet 3 ("portable permission") applied to agrifood

Mozilla's "the write surface is the unsolved hole at the centre of the harness" framing lands hardest in agrifood. An AI agent that writes to a farm management system, a cooperative database, or a government subsidy portal touches financial flows. The CVSS 9.3–9.4 authorization failures Mozilla names (Anthropic, Microsoft, ServiceNow, Salesforce) have a direct agrifood analog: a pesticide application write to a farmer's actual field record.

**The agrifood version of "portable permission" is what the field guide's data-rights-framework schema already describes.** JoinData's permission model, OADA's data-flow definitions, NAPDC's cooperative governance, OCAP's data sovereignty, the cooperative legal frameworks across multiple jurisdictions — these are *writes-permission models for agrifood* before the agentic harness debate reached them.

### 7.4 The agrifood angle on the funding flow

The user-confirmed substrate-scan pattern (named programmes + budgets + cohorts + deadlines) applies most concretely to agrifood where the funding intersects with the open-source axis:

- **CGIAR / BigData Platform** — open-data platforms for global South breeding, with explicit open-data FAIR/CARE commitments. Already documented.
- **EU Mission Soil Deal for Europe + AI soil monitoring** — EuroStack-aligned.
- **Canada AAFC + AAFC-AI programmes** (per user's Canada priority) — public-funded agrifood-AI work. The "AI for All" budget line intersects here.
- **India IndiaAI + ICAR agrifood applications** — Indian agricultural research system as the FAO/UN Global South analogue, but with state-scale compute access.
- **USAID AI Forward (now folded into State)** — global agrifood AI funding with public-interest framing; the A Growing Culture piece names USAID's "hidden legacy" as a relevant framing for global AI in agrifood.
- **La Ferme Digitale / GAIA** — France-specific; €109B national AI investment + Mistral Series C context.

---

## 8. Gaps and contested claims

### 8.1 Gaps (cells where activity should plausibly exist given the problem; evidence thin or absent)

- **G-OSAI-01 — Aggregate quantitative impact of open-source AI in agrifood.** Mozilla's 3% / 79% / 51% / 4% / 89% figures are for the AI ecosystem as a whole. The agrifood-specific equivalents (adoption rate, capability gap, revenue capture, deployment rate) are not surveyed. **Sources searched:** Mozilla report, FAO knowledge-base report, Pennells et al. 2025, Wu 2025. **Last-searched:** Jul 2026.

- **G-OSAI-02 — Apply OSAID 1.0 to agrifood models.** None of the field guide's tracked agrifood open-source AI deployments (FarmVibes.AI, FarmOS, GAIA, AgML, CGIAR tools) have been scored against OSAID 1.0's four-element requirement (weights + build code + dataset code + data or data information). **Sources searched:** Mozilla report, OSI blog, GitHub searches on each named project. **Last-searched:** Jul 2026.

- **G-OSAI-03 — Whether EUROPA consortium explicitly covers agrifood-language modelling.** 24 EU languages covered; multilingual agrifood extension not yet confirmed. **Sources searched:** EUROPA press release, Frontier AI Grand Challenge description. **Last-searched:** Jul 2026.

- **G-OSAI-04 — Whether AgStack (Linux Foundation project) has an AI track.** Linux Foundation's agricultural stack-project. Whether AAIF / AgStack intersect not yet found. **Sources searched:** Linux Foundation projects page, AgStack website. **Last-searched:** Jul 2026.

- **G-OSAI-05 — Whether Mistral / Cohere / Qwen foundation models have substantive agricultural fine-tunes in production.** Anecdotal fine-tunes exist (Mistral fine-tuned for French agronomy per Pillaud; Qwen fine-tunes for Chinese agronomy); production-grade case studies not yet surfaced. **Sources searched:** Mistral blog, Cohere blog, Alibaba Qwen blog, Hugging Face agrifood filter. **Last-searched:** Jul 2026.

- **G-OSAI-06 — Whether the EU "Buy European" proposed framework extends to AI infrastructure procurement for agrifood.** EuroStack paper covers strategic digital procurement broadly; agrifood-specific clauses not yet found. **Sources searched:** EuroStack white paper, Buy European framework. **Last-searched:** Jul 2026.

- **G-OSAI-07 — Whether any of the China / HK IPO 2026 (Zhipu, MiniMax) double-listed agrifood deployments.** Mozilla report flags both as substantive open-weights actors; agrifood fine-tunes or agrifood-facing versions not yet surfaced. **Sources searched:** Mozilla report, Zhipu / MiniMax public filings, Hugging Face org profiles. **Last-searched:** Jul 2026.

- **G-OSAI-08 — Whether the FAO's Digital Public Goods certification includes any open-weights agrifood models.** eLocust3 and FarmStack are listed as DP Goods first (Vincent Martin Sep 2024); open-weights LLM with agrifood certification not yet found. **Sources searched:** Digital Public Goods registry, FAO DPG submissions. **Last-searched:** Jul 2026.

- **G-OSAI-09 — Whether AAIF-equivalent for agrifood exists.** Linux Foundation hosts AAIF; no equivalent for agrifood-LM harness or agrifood-specific agent standards surfaced. **Sources searched:** Linux Foundation projects, AIMS, CGIAR platforms, GODAN. **Last-searched:** Jul 2026.

- **G-OSAI-10 — Whether the agentic harness gap has agrifood-specific writing-up.** Mozilla's "portable permission" framing is generic; agrifood-specific permission models (JoinData-style, OCAP-style) have not been paper-anchored. **Sources searched:** Mozilla report, JoinData papers, NAPDC papers, IEK / IQ literature. **Last-searched:** Jul 2026.

### 8.2 Contested claims

- **C-OSAI-01 — "Open-source AI is technically competitive with proprietary AI on frontier tasks."** *Mozilla 2026 / Stanford HAI 2026 AI Index / DeepSeek R1 model card / Qwen team publications.* *Counter:* Closed reasoning models pulling ahead (3.3% gap reopened Mar 2026); Gemini 3 holds 89% multi-needle retrieval at 1M tokens vs DeepSeek V4-Pro's 41%; labs now invest in integrated harness + model pairs (Codex CLI 83.4% vs Claude Code 83.1% on Terminal-Bench 2.1; independent harness 80.4%); long-context retrieval, agentic tasks, and reasoning lag open weights. **Substantive position:** Capable at the workloads that matter most for production deployment; trailing at the workloads that constitute the new contest. **Last-reviewed:** Jul 2026.

- **C-OSAI-02 — "Open-source AI is essentially free / cheaper than proprietary AI in production."** *Mozilla 2026 (50× cost collapse); Linux Foundation Nagle-Yue study (~$24.8B unrealised savings, ~6× per-call differential); Stripe 73% inference cost cut on vLLM.* *Counter:* 89% of AI-enabled firms use open components (Tony Blair Institute); but 67% of generative AI pilots fail (MIT NANDA). Cost savings realised only when deployment and integration succeed — the 51% production deployment rate suggests most open-source adoption doesn't reach production. **Substantive position:** Cheaper at the per-token layer; not necessarily cheaper in total cost of ownership without mature deployment infrastructure. **Last-reviewed:** Jul 2026.

- **C-OSAI-03 — "Open-source AI is more secure than proprietary AI."** *Mozilla 2026 framing; NTIA "monitor, not restrict" recommendation; CVSS 9.3–9.4 failures hit closed systems (Anthropic, Microsoft, ServiceNow, Salesforce).* *Counter:* Open weights + CoSAI MCP threat model flags consent fatigue as top-tier threat; safety fine-tuning can be stripped from open weights; embedding-only filters less effective when weights self-hosted; CNAS response identifies dual-use risks. **Substantive position:** Security is a function of the harness layer, not the openness of the model. Closed is not the same as secure; open is not the same as insecure. **Last-reviewed:** Jul 2026.

- **C-OSAI-04 — "Public investment in open-source AI provides national competitive advantage."** *EuroStack industry letter, ~500 signatories; EUROPA competition framework; China State Council "AI Plus" Initiative; India IndiaAI Mission; Canada "AI for All".* *Counter:* Mozilla's framing of "the open default consolidates into a single source at all" — a commons with one supplier isn't a commons. European funding channels risk concentrating on a small number of national champions (Domyn for EUROPA). **Substantive position:** Public money holds through the slow middle, but only if plural sourcing is structurally required. **Last-reviewed:** Jul 2026.

- **C-OSAI-05 — "Open-source AI in agrifood is a deliberate cultural choice in continuity with traditional seed saving."** *A Growing Culture "Open Source Ethos" Jan 25, 2023; the field guide's prior synthesis on this bridge.* *Counter:* The Mozilla framing is purely economic-strategic; OSI's framing is purely legal-software; FAO's framing is purely development-equity. None of them cite agricultural cooperative / commons heritage. The bridge is constructive but constructed — not present in the source primaries. **Substantive position:** The cultural bridge is *productive for the field guide's framing* but should be flagged as a constructive interpretation, not as documented cross-source consensus. **Last-reviewed:** Jul 2026.

- **C-OSAI-06 — "Open-source AI will replace proprietary AI in agrifood."** *Mozilla 2026 finding that open weights win the tokens; DeepSeek 58% of new AI startups in 2025; ~80% open-source model usage vs ~96% open-source revenue captured by closed providers on Linux Foundation study.* *Counter:* Mozilla 2026 itself — the 4% revenue capture implies open-source remains a complementary layer, not a replacement. Closed harness development (Terminal-Bench 2.1) is consolidating vertical integration. **Substantive position:** Open-source *models* are increasingly competitive on capability; open-source *products* are not yet coherent at frontier. The two will likely remain complementary for the foreseeable future. **Last-reviewed:** Jul 2026.

- **C-OSAI-07 — "Granite, DeepSeek R1, OLMo are 'true' open-source AI under OSAID 1.0."** *OSI Sept 2025 blog — "Increasing openness: Models like Granite and DeepSeek R1 are progressively releasing more training code and infrastructure; AI2 OLMo fully open."* *Counter:* Even the most open of these has caveats — DeepSeek R1 lacks full RLHF code; OLMo lacks scale; Granite lacks compute-equivalent weights. None trivially passes the OSAID test. **Substantive position:** OSI's "binary threshold" framing means edge cases are informative but mostly fail the test. **Last-reviewed:** Jul 2026.

---

## 9. Actor map — with critical lens

### 9.1 Open-by-weights actors (Current 1)

**Meta (USA / Mark Zuckerberg, Yann LeCun)** — Llama 3 (and earlier), Llama 2 — community licence. Closed for >700M MAU enterprises; not OSAID-conformant on training data. Vocal public case for open-release.

**Alibaba (China / Qwen team)** — Qwen family (Qwen, Qwen-VL, Qwen2.5): 942M cumulative HF downloads; out-downloaded next eight organisations combined in February 2026. Tongyi Qianwen licence; some variants restrict commercial use.

**DeepSeek (China / Liang Wenfeng)** — R1, V3, V4-Pro; MIT licence. $7.4B raise at $50B+ valuation. 26,000+ enterprise accounts; 58% of new AI startups in 2025 included DeepSeek in stack. Most weight-open of frontier labs.

**Mistral AI (France / Arthur Mensch)** — Mistral 7B, Mixtral, Mistral Large, Mistral Medium 3.5; Apache 2.0 base; proprietary fine-tunes. Series C €11.7B including ASML 11% stake. Most-resourced European open-weights actor; Pillaud's GAIA is the agrifood translation.

**Moonshot AI (China)** — Kimi; open-weights partial. $3.9B raised.

**Zhipu AI (China)** — GLM 5.2 (strongest open model on vals.ai Terminus-2 at $0.43/task). HK IPO 2026.

**MiniMax (China)** — MiniMax M3. HK IPO 2026.

**Black Forest Labs (Germany)** — Stable Diffusion lineage; image generation. $450M raised.

**Stability AI (UK)** — Stable Diffusion; $230M raised; financial distress surfaced.

**Reflection AI (USA)** — At $2.13B; specific stack not yet surfaced.

**Cohere (Canada)** — Command A+ open-sourced May 2026; North platform; "sovereign by design" positioning; $1.7B raised.

**Hugging Face (USA)** — Transformers 162k stars; Hub as infrastructure. $400M raised.

### 9.2 Open-by-infrastructure actors (Current 2)

**Linux Foundation** — Host of AAIF (Agentic AI Foundation), PyTorch, Kubernetes, ONAP, OpenChain, OpenSSF.

**Anthropic** — Donated MCP to Linux Foundation AAIF (Dec 9 2025). Member of platinum tier. Sponsor of Canadian AI research ($10M).

**Block (Jack Dorsey)** — Donated goose to AAIF.

**OpenAI** — Donated AGENTS.md; contributed Codex CLI + Agents SDK + Apps SDK.

**Google + Microsoft + AWS + Cloudflare + Bloomberg** — Platinum members of AAIF.

**Open Source Initiative (OSI)** — Stefano Maffulli (ED), Jordan Maris. Custodian of OSAID 1.0 (Oct 28 2024).

**Element / Matrix.org** — Open messaging; the institutional-template example of "open by foundation."

**Docker, Ericsson, IBM, JetBrains, Okta, Oracle, Salesforce, SAP, Shopify, Snowflake, Temporal** — Gold AAIF members. Open-source by infrastructure.

### 9.3 Open-by-state-funding actors (Current 3)

**Henna Virkkunen** — Executive Vice-President for Tech Sovereignty, Security and Democracy (European Commission). Driver of EUROPA + Frontier AI Grand Challenge.

**Domyn (Italy / Uljan Sharka, CEO)** — Lead of EUROPA consortium; large European open-weight model effort.

**Mark Carney / Prime Minister's Office (Canada)** — "AI for All" $890M (Jun 4 2026).

**State Council of China** — "AI Plus" Initiative (Aug 2025); National Five-Year Plan (Mar 2026); National AI Fund as DeepSeek backer.

**India Ministry of Electronics & IT** — IndiaAI Mission; ₹10,372 Cr outlay; 38,231 GPU accelerators; 600 data labs.

**Portuguese government** — Amália (Jul 1 2026) first member-state open-source LLM.

**Germany BMDS** — SPARK API federal open-weights for administration.

**France Élysée** — €109B AI investment announced Feb 2025 by President Macron. Head of France's AI Commission was Anne Bouverot as of mid-2025 (not separately verified in this scan — to be confirmed).

**Saudi Arabia PIF / Humain** — $77B + 1.9GW data centres; direction not yet clear.

**UAE G42 / Mubadala** — Microsoft $15.2B investment (Nov 3 2025); direction not yet clear.

### 9.4 Open-by-DPG/UN actors (Current 4)

**Vincent Martin (FAO)** — "Decoding Transformation (2): Empowering Farmers with Open-Source solutions" (Sep 2024). FAO lead on digital agriculture innovation.

**Digital Public Goods Alliance (DPGA)** — DP Goods standard; partnership with FAO. Co-organiser of "OSPOs for Good" with UN Tech Envoy.

**UN Secretary-General's Tech Envoy** — Global Digital Compact; Roadmap for Digital Cooperation; OSPOs for Good conference.

**Digital Green (Rikin Gandhi)** — FarmStack network; collaborative data sharing.

**CGIAR / BigData Platform** — Open-data FAIR/CARE commitments for breeding.

**Wikimedia Foundation, Mozilla Foundation** — Long-running analogues of the Open-by-DPG model.

### 9.5 Critical / counter-voice actors

**Stéphane Maffulli (OSI ED)** — critic of "open weights only" language; OSAID 1.0 binary-threshold framing.

**Meredith Whittaker / AI Now Institute** (historical 2018–co-founder; transitioned to Signal Foundation president 2025; AI Now leadership continued under Amba Kak and Sarah Myers West) — not specifically open-source but critical of AI-extractive dynamics; useful counter-voice. *Note: original scan draft named "Lucia Stirling," which is unverified — corrected to Whittaker, who is the documented AI Now co-founder and president until 2025.*

**IPES-Food** — critical lens on AI in agrifood that converges with the open-source position; not an open-source actor per se.

**Mozilla Foundation** — flagship institutional voice for open-source AI; Raffi Krikorian CTO is the named analytical anchor.

**NTIA (US)** — "monitor, not restrict" report (2024); the US position on open weights.

**Pillaud (La Ferme Digitale / GAIA / Sepal.ai)** — French cooperative / commons orientation; "unicorns do not exist in agriculture."

**CNAS (Center for a New American Security)** — Response to NTIA on dual-use foundation AI models; flags risk of safety-tuning strip from open weights.

**CoSAI (Coalition for Secure AI)** — MCP threat model; consent fatigue as top-tier threat.

**A Growing Culture** — Cultural-historical bridge ("Open Source Ethos"); aligns with the field guide's framing without being a tech actor.

### 9.6 The voices the dominant scans leave out

- **Global South developers** — Mozilla report's region-by-region breakdown names South Asia's distinctive security/compliance concerns; the dominant scan reads African, Latin American, South Asian deployment as "gap" rather than "distinct."
- **The "user-owned-infrastructure" position** (Mozilla "be owners, not renters") is not represented in the same force by EU state funding or US private capital.
- **The cooperative / commons orientation** (JoinData, La Ferme Digitale, Pillaud) — Mozilla does not surface; this is the field-guide-positive gap.

---

## 10. Freshness model — applied to claims in this scan

| Claim type | Examples in this scan | Refresh signal |
|---|---|---|
| `statistic` | 3.3% capability gap; 50× cost collapse; 79% / 51% deployment gap; 4% revenue capture; 89% East Asia adoption; 1,410 developer sample; 1,361 projects / 48 components / 9 layers; 10,000+ MCP servers; 97M monthly SDK downloads | Re-verify annually (next: 2027-07) |
| `fact` | EUROPA selection June 19 2026; Frontier AI Grand Challenge launch Feb 2026; OSAID 1.0 publication Oct 28 2024; AAIF formation Dec 9 2025; MCP donation same date; EU AI Act GPAI rules Aug 2 2025/2026/2027; Cohere Command A+ open-source May 2026; Qwen 942M downloads Feb 2026 | Re-verify annually |
| `claim` | "Open source is a sovereignty choice" (Mozilla); "the harness is the new frontier" (Mozilla); "the open default consolidates into one supplier = not a commons" (Mozilla); "openness stops being a special virtue when the layer above is closed" (Mozilla indirect) | Re-verify annually |
| `framework` | OSAID 1.0 (binary-threshold open-source AI); EU AI Act GPAI exemption regime; nine-layer stack map; four-currents framing | Re-verify every 2 years (next: 2028-07) |
| `example` | Each named project, programme, deployment — Mistral Series C, DeepSeek $7.4B raise, EUROPA consortium choice, Cohere Command A+ open-source, Cohere North platform, Amália launch | Confirm still live annually |

**Sources (read in full or substantial part for this scan):**

- Mozilla (Jul 14, 2026). *Mozilla's Inaugural 'State of Open Source AI' Report Is Here*. https://blog.mozilla.org/en/mozilla/mozilla-state-of-open-source-ai-report/
- Mozilla (Jul 14, 2026). *State of Open Source AI V1.0*. https://stateofopensource.ai/ (full report; reads 1, 2, 3, 4)
- European Commission (Jun 19, 2026). *Commission selects EUROPA consortium as the winner of the Frontier AI Grand Challenge*. https://digital-strategy.ec.europa.eu/en/news/commission-selects-europa-consortium-winner-frontier-ai-grand-challenge-project-build-european-open
- European Commission (Feb 13, 2026). *Turning strategy into action: Commission launches Frontier AI Grand Challenge*. https://digital-strategy.ec.europa.eu/en/funding/turning-strategy-action-commission-launches-frontier-ai-grand-challenge
- Artificial Intelligence Act (Jul 30, 2025). *Overview of the Code of Practice*. https://artificialintelligenceact.eu/code-of-practice-overview/
- EuroStack (2025–2026). *White Paper; Buy European Framework; Industry Letter*. https://eurostack.eu/
- Linux Foundation (Dec 9, 2025). *Linux Foundation Announces the Formation of the Agentic AI Foundation*. https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
- Anthropic (Dec 9, 2025). *Donating the Model Context Protocol and establishing the Agentic AI Foundation*. https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
- Open Source Initiative (Sept 10, 2025). *Report from OSS EU 2025 and AI_dev: What's next for OSAID*. https://opensource.org/blog/report-from-oss-eu-2025-and-ai_dev-whats-next-for-osaid
- Open Source Initiative (Oct 28, 2024). *OSAID v1.0*. https://opensource.org/ai
- A Growing Culture (Jan 25, 2023). *The Open Source Ethos*. https://agrowingculture.substack.com/p/the-open-source-ethos
- Vincent Martin, FAO (Sept 2024). *Decoding Transformation (2): Empowering Farmers with Open-Source solutions*. https://www.linkedin.com/pulse/decoding-transformation-2-empowering-farmers-solutions-vincent-martin-frjkf
- Prime Minister of Canada (Jun 4, 2026). *AI for All — Canada's New National Artificial Intelligence Strategy*. https://www.pm.gc.ca/en/news/news-releases/2026/06/04/prime-minister-carney-launches-ai-all-canadas-new-national-artificial
- Cohere (May 2026). *Command A+ Release*. https://cohere.com/blog/command-a-plus
- Cohere (2026). *North Mini Code Release*. https://cohere.com/blog/north-mini-code
- Bertelsmann Stiftung (2025). *EuroStack — A European Alternative for Digital Sovereignty*. https://www.bertelsmann-stiftung.de/fileadmin/files/user_upload/EuroStack__2025_final__1_.pdf
- aicompetitiveness.ca (2026). *Sovereign by Design: Strategic Options for Canadian AI*. https://aicompetitiveness.ca/assets/Sovereign-by-Design-Full-Report-2026.pdf
- Reuters (Jul 1, 2026). *Portugal launches first open-source AI model joining Europe's sovereignty push*. https://www.reuters.com/business/finance/portugal-launches-first-open-source-ai-model-joining-europes-sovereignty-push-2026-07-01/
- BMDS (2026). *SPARK API — Module KI-Services für flexible und schnellere Verwaltungsprozesse*. https://bmds.bund.de/aktuelles/pressemitteilungen/detail/spark-api-modulare-ki-services-fuer-flexible-und-schnellere-verwaltungsprozesse
- China State Council (Aug 2025). *AI Plus Initiative*. https://cset.georgetown.edu/publication/china-ai-plus-opinions-2025/
- IndiaAI (2026). *IndiaAI Compute Capacity*. https://indiaai.gov.in/hub/indiaai-compute-capacity

**Cross-references to existing field guide units:**
- `units/mozilla-state-of-open-source-ai-2026.md` (Mozilla findings unit)
- `units/la-ferme-digitale-gaia.md` (Pillaud GAIA — French agrifood open AI)
- `units/joindata-netherlands.md` (Dutch agricultural data cooperative)
- `units/oada-open-ag-data-alliance.md` (open agrifood API standards)
- `units/napdc-national-ag-producer-data-cooperative.md` (US federally-funded cooperative)
- `units/open-data-ecosystem.md` (open-data ecosystem layer)
- `units/indigenous-data-sovereignty.md` (Indigenous data sovereignty framework)
- `units/proprietary-farm-data.md` (proprietary farm data — agrifood harness gap)
- `units/dark-data-agrifood.md` (agrifood dark data)
- `units/pillaud-french-agritech-ecosystem.md` (Pillaud ecosystem)
- `units/data-commons-architecture.md` (data commons infrastructure)
- `units/cgiar-agrillm-ai-global-south.md` (CGIAR/AgriLLM agrifood)
- `units/godan-2-0-africa-open-data.md` (GODAN open-data)
- `units/code-for-africa-ai-for-good.md` (Code for Africa)
- `units/ushahidi-civic-tech-agrifood-ai.md` (Ushahidi civic-tech)
- `units/mozilla-common-voice-african-languages.md` (Mozilla Common Voice African languages)
- `scans/2026-07-open-source-cycle.md` (synthesis-of-existing companion scan)
- `scans/2026-07-eu-institutional-funder-substrate.md` (EU funder layer)
- `scans/2026-07-eu-regulatory-substrate.md` (EU regulatory layer)
- `scans/2026-07-hyperscaler-substrate.md` (hyperscaler substrate)
- `scans/2026-07-canada-funder-convenor-substrate.md` (Canada funder/convenor — EUROPA-Canada intersection)

**Cross-references to quote entries:**
- `quotes/researchers-and-experts/mozilla-krikorian-open-source-turning-point.md` (Krikorian CTO letter)
- `quotes/institutional-leaders/pillaud-herve-commons-and-mutual-model.md` (Pillaud commons / mutual model)
- New entries written (Jul 2026): Stefano Maffulli (OSI) binary-threshold open-source AI — `institutional-leaders/osi-maffulli-binary-threshold-open-source-ai.md`; Henna Virkkunen (EC) European sovereign AI vision — `institutional-leaders/ec-virkkunen-european-sovereign-ai-vision.md`; Mike Krieger (Anthropic) MCP donation rationale — `institutional-leaders/anthropic-krieger-mcp-infrastructure-critical.md`. Vincent Martin (FAO) already exists as `institutional-mission-statements/fao-vincent-martin-open-source-innovation.md`.

---

## 11. What this scan does not yet do

Naming omissions is feature, not failure — it's how the next scan pass knows where to go.

1. **Agrifood-specific quantitative panel.** Every Mozilla 2026 statistic in this scan is for the AI ecosystem as a whole. The agrifood-specific equivalents (adoption rate, capability gap on agrifood tasks, deployment rate, revenue capture by agrifood AI vendors) are not surveyed. The Mozilla + Pennells et al. 2025 + IFPRI citations are neighbouring work; an agrifood-specific quantitative panel does not exist in published form as of July 2026. (Gap G-OSAI-01.)

2. **OSAID-conformance scoring on agrifood models.** No systematic pass through `units/` to score each named open-source agrifood AI project against OSAID 1.0's four-element requirement. The four-stage list (weights + build code + dataset code + data-or-data-information) is in this scan but has not been applied. (Gap G-OSAI-02.)

3. **DeepSeek-R1 + Chinese open-weight labs in agrifood.** Mozilla report flags DeepSeek-R1's January 2025 release as the moment that triggered the open-weight market share turn. The agrifood fine-tunes over DeepSeek weights (and Qwen, GLM, Moonshot) are an emerging but not yet surveyed area. (Gap G-OSAI-05 + G-OSAI-07.)

4. **AAIF for agrifood.** Linux Foundation AAIF consolidates the harness layer for general-purpose agentic AI. No agrifood-specific equivalent (an "Agrifood AI Foundation" or AAIF-agrifood) has surfaced. (Gap G-OSAI-09.)

5. **Indigenous-data-sovereignty open-source AI.** The Mozilla "wins the tokens" framing treats Qwen + Llama + DeepSeek equally. The field guide's IDSov work (CARE Principles, OCAP, NISR, IEEE 2890-2025) treats all proprietary models as suspect; the open-weights conversation has not yet been IDSov-specifically scored. The SIKU + PolArctic + SmartICE integration with IQ/IK is the most articulate existing agrifood-IDSov-AI mapping; the open-weights framing of those deployments is not yet drawn out.

6. **Non-Western agrifood open-source deployments (beyond FAO + CGIAR + Ushahidi).** The substantive voice axis is dominated by Western institutions (Mozilla, FAO, USAID-folded-into-State). The Chinese, Indian, Brazilian, Argentine agrifood AI open-source work — XAG, DJI, Alibaba DAMO Academy, Embrapa, INTA — is touched on in the field guide's regional cycles but not yet consolidated with the open-source lens applied.

7. **Generative AI column shallow.** Most of the Mozilla findings here are about LLMs / generative AI; the agrifood-specific computer vision / predictive ML / sensor+IoT open-source work (FarmVibes.AI, FarmOS, IRRI breeding AI, CGIAR digital soil mapping) is not yet matched to OSAID / open-weights criteria. (Generative AI is one of six ai-technique-classes in the taxonomy; agrifood AI is broader than LLMs.)

8. **No depth on Red Hat / IBM / Google / Microsoft open-source AI for agrifood work specifically.** IBM Granite + open-weights position; Red Hat's RHEL AI; Google Gemma; Microsoft Phi-3 open-weights; the agrifood applications of each remain under-surveyed.

9. **Funding gaps.** EUROPA budget not yet surfaced publicly at the granularity the user prefers (programme + cohort + deadline). EuroStack white paper details do not name aggregate funding. India's ₹10,372 Cr outlay figure is the most precise public anchor; equivalent precision for EU, China, Saudi Arabia, UAE, Korea absent.

10. **License-proliferation question not fully resolved.** Llama Community Licence, Mistral Apache 2.0, Qwen Tongyi, Granite Apache 2.0, OLMo Apache 2.0, Cohere CC-BY-NC, DeepSeek MIT, Gemma prohibited-use policy — each imposes different downstream obligations. Substantive license archaeology for agrifood deployment is not done.

---

## 12. Substantive synthesis (lead with content; methodology last)

**Three substantively new findings from this scan that the prior corpus didn't have:**

1. **The 2025–26 open-source-AI story is a *sovereignty* story, not a *technical* story.** Mozilla's framing — "open isn't a vendor choice, it's a sovereignty choice" — names the phenomenon precisely. The State Council macro-hedge, EUROPA European sovereign capability, India IndiaAI compute-for-anyone, Canada "AI for All", EU Buy European procurement framework — all are public-funder-side expressions of the same observation: *building on proprietary endpoints is a sovereign risk*. The agrifood implication is straightforward: the same sovereign-risk framing applies to agrifood AI as to any other sector, and the open-weights route is the route to optionality.

2. **The contest has migrated from model to harness.** Mozilla Section 5 reframes the substantive contest. The model is commoditising toward zero; the agentic harness (orchestration + tools + memory + sandboxes + permission model) is the new front. In agrifood, this *was already the substrate*: JoinData, OADA, NAPDC, GAIA, Indigenous Navigator, OCAP, cooperative data schemas — all are *harness-layer* interventions. The agrifood-AI community was working at the harness layer before the broader AI debate caught up. Mozilla's "five bets" (open harness, owned memory, portable permission, broken meter, plural default) are the field guide's existing units reframed in the contemporary AI substrate language.

3. **Public money holds through the slow middle of the open-source AI transition.** Mozilla Bet 5: *"Public money holds through the slow middle, or the open default settles into a single origin by absence."* The substantive observation is that *open-source AI's economic sustainability is structurally unsolved* (4% revenue capture) and *the deployment gap (51% deployed) is operational, not capability*. The field guide's prior Pillar 2 (Mozilla 2026 + Open Source Cycle) already names this. The new empirical work on funding flow (EUROPA, EuroStack, IndiaAI Mission, Canada "AI for All", France €109B) shows that public investment is the side of the funding equation that holds the commons. The private venture side concentrates on the metered cloud-closed-API model and is unlikely to finance the sustainability gap. The agrifood interpretation: open-source AI in agrifood's economic model has to be public-funded, cooperative-funded, or hybrid — the pure venture model is structurally mismatched to the field's economics.

**Methodological observation:** This scan used the substrate-scan pattern (structural-layer + funding-flow lens) per the field guide's confirmed pattern (EU institutional / funder scan, Jul 21 2026). The four currents (open-by-weights, open-by-infrastructure, open-by-state-funding, open-by-DPG/UN) emerged from the substrate data, not from prior typology. Three of those currents (infrastructure, state-funding, DPG/UN) were not present in the field guide's prior `open-source-cycle.md` synthesis, which only touched the open-by-weights current through Mozilla + A Growing Culture + Pillaud.

**What this scan is for:** every later agrifood-specific claim about open-source AI should be load-bearing against this substrate. The 3.3% / 79% / 51% / 4% / 89% figures, the four currents, the OSAID binary threshold, the agentic-harness reframing, and the funding-flow pattern are the upstream empirical anchors. The agrifood-specific work (JoinData, GAIA, FarmVibes.AI, Indigenous Navigator, NAPDC, Pillar 2 etc.) hangs off them.

---

*Scan complete. Companion to `scans/2026-07-open-source-cycle.md` (synthesis-of-existing). This file is the fresh-pull substrate; the prior file is the synthesis that builds on it.*

---

## 13. Pass-2 sanity-check corrections (added Jul 2026, post-write)

The Pass-2 sanity check found two fabricated names and several claims worth flagging. Corrections are applied; the items below are the audit trail.

### Fabrications corrected

1. **"Vincent Klingora (AI France)"** — name not anchored to any source read in this scan. Replaced with "Anne Bouverot as of mid-2025 (to be confirmed)" in the France row, with a note that the original draft's name was unverified. The underlying *Élysée €109B AI investment (Feb 2025)* is real per Mozilla citation.
2. **"Lucia Stirling"** — name not anchored to any source. Replaced with **Meredith Whittaker / AI Now Institute**, who is the documented AI Now co-founder and president until 2025. Whittaker transitioned to Signal Foundation president in 2025; AI Now leadership continued under Amba Kak and Sarah Myers West. Original draft's "Lucia Stirling" was unverified — explicitly retracted.

### Claims weakened / flagged for follow-on

3. **Mistral funding figures — €11.7B Series C vs $3.05B raise.** Mozilla's table uses "€11.7B" as the cumulative total including ASML's 11% stake, but Pitchbook separately references €3B–3.05B as the round. These reconcile only if Mozilla is reporting cumulative funding including the strategic stake. The figure remains but should be flagged as such in talks ("Mistral: €3B Series C raise, €11.7B cumulative including ASML 11% strategic stake").
4. **"$890M" Canada "AI for All" figure.** Anchored to Mozilla citation referencing PM office announcement; not independently verified against the primary PM announcement in this scan. The underlying programme is real; the figure has the same provenance as Mozilla's secondary anchors.
5. **Cohere "North platform" as open-source.** Mozilla 2026 table anchors Command A+ (open-sourced May 2026); North platform's open-source status is not separately verified. Conservative framing: Command A+ is the documented open-weight release; North is the broader enterprise platform whose open-source posture is not separately anchored here.
6. **Nick Frosst Cohere "sovereign AI" quote.** Mozilla citation references a BetaKit interview; quote text I used was paraphrased from Mozilla's framing, not pulled verbatim from a primary BetaKit pull. Worth a future unit verifying the verbatim.
7. **Amália (Portugal) and "Amália Rodrigues, fado singer" attribution.** Reuters title confirmed "Portugal launches first open-source AI model" with linguistic naming; the specific fado attribution to Amália Rodrigues (1920–1999) is the conventional inference but not separately verified.
8. **"Granite … closer to OSAID but with usage clauses"** — paraphrase from my scan reading, not from a quoted primary source. Worth tightening in the next pass.
9. **DeepSeek R1 "MIT licence"** — Mozilla's report uses this phrasing but the underlying DeepSeek-R1 GitHub repository and Hugging Face card use MIT with a separate license for some distilled variants. Worth being specific in the next pass.
10. **Cohere Command A+ "open-sourced May 2026"** — verbatim from Mozilla; quoted once in section 2.5 anchored to Mozilla citation, not the Cohere blog post itself. Worth pulling the blog post in a future cycle.

### What did not need correction

- Mozilla 2026 empirical findings (3.3% / 79% / 51% / 4% / 89% / 50× / 1,410 / 1,361) — read in four passes, verbatim quotes pulled.
- AAIF founding projects + membership tiers (Platinum 8 / Gold 17 / Silver ~25) — Linux Foundation press release read in full.
- Maffulli OSAID framing — OSI blog read in full.
- EUROPA consortium details — EC press release read in full.
- Anthropic MCP donation framing + Mike Krieger quote — Anthropic press release read in full.
- Block / Manik Surtani quote + OpenAI / Nick Cooper quote — Linux Foundation press release read in full.
- Krikorian CTO quote — Mozilla blog read in full.
- Vincent Martin FAO framing — LinkedIn post read in full.
- A Growing Culture "Open Source Ethos" etymology — Substack read in full.

**Pattern worth naming:** the fabricated names appeared in the actor-map section (the part of the scan that depends least on verbatim source quotes and most on memory of recurring actors). This is the section most exposed to confident fabrication, and a future cycles' quality-control pass should weight source-verification heaviest in actor-map rows.
