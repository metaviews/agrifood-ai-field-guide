---
id: falabella-google-cloud-tars-lac
title: Falabella TARS — Google Cloud conversational AI for IT-internal incident management across 7 LAC countries
sector-position: distribution-and-retail
ai-technique-class: generative-ai-llm
purpose: operational-efficiency, employee-productivity
claim-type: example
activity-status: deployed
critical-voice: (none)
capital-intensity: enterprise
language-literacy-profile: corporate-internal
policy-instrument: (none)
region: South-America (Chile origin; deployed across 7 LAC countries)
actor: Grupo Falabella (Chile; LAC multi-country retail conglomerate)
actor-type: vendor
data-governance: proprietary
data-rights-framework: vendor-owned
last-verified: 2026-07-19
last-regionally-scanned: 2026-07
---

## Content

Grupo Falabella, the Chilean-origin retail conglomerate with brands including Falabella Retail, Sodimac, Tottus, Banco Falabella, Mallplaza, and the IKEA franchise, deployed a generative-AI conversational agent called **TARS** on Google Cloud's Conversational Agents platform with Gemini models, to manage internal IT incident tickets across 7 countries (Chile, Peru, Colombia, Argentina, Brazil, Mexico, and Uruguay — the Falabella operating geography).

The deployment is **Google Cloud customer-storied and named in detail**, with the following published metrics (from the Google Cloud Customer story in Spanish, dated 2025):

- **+22,000 tickets created via TARS, the AI agent**
- **33% reduction in tickets created by human agents** in the helpdesk during phase 1 of deployment
- **Ticket creation time: 16 minutes → 4 minutes**
- **Ticket resolution time: 2 hours → 30 minutes**
- **+80 increase in ticket-categorisation precision**
- Multi-channel ingestion: voice, web, Microsoft Teams, WhatsApp

The deployment architecture is detailed in the Google Cloud case study, naming the following Google Cloud services: **Pub/Sub** (for ticketing-event orchestration), **Cloud Run Functions** (for API integration), **BigQuery** (analytical engine), **Vertex AI Search** (RAG corpus of internal-process documentation), **Contact Center AI Platform** (multi-channel convergence), **Conversational Agents / Dialogflow** (primary conversational platform), **Firestore** (rapid-access data store), **Cloud Storage**, **Dataform** (data-pipeline orchestration), **Looker** (ticket visualisation), **Cloud Logging**, and **Gemini models** for natural-language interactions.

Falabella today has >36 million customers, 90,000+ collaborators across 7 countries. Named engineers in the case study: Antonelli Torriani (Director de Operaciones TI Omnichannel Retail); Sergio del Pino (Tech Manager Omnichannel Retail); Richard Andrade (Cloud Engineer); Yeny Villavicencio (IT Manager Tottus Corporativo); Franco Peña (DevOps Engineer); José Luis Calderón Ríos (CIO Sodimac México).

**STRATEGICALLY IMPORTANT DISTINCTION — this is NOT customer-facing retail AI.** TARS handles *internal IT incident-management tickets* (employees reporting tech issues, store-network problems, etc.). It is functionally distinct from the corpus's *consumer-facing generative-AI retail pattern*:

| Pattern | Example | Distinction |
|---|---|---|
| Consumer-facing generative-AI (in-app assistant) | Walmart Sparky, Instacart Cart Assistant, Kroger Gemini, Loblaw PCxpress | AI serves the *shopper*; deployed via retailer app + integration with foundation models (OpenAI, Anthropic, Google) |
| Internal-operations generative-AI (helpdesk) | **Falabella TARS**, also similar in pattern to corporate-wide Microsoft 365 Copilot deployments | AI serves the *employee*; deployed via corporate IT; serves internal helpdesk |

This distinction matters for the corpus's regional comparison: NA has well-documented consumer-facing retail AI (Walmart Sparky, Instacart Cart Assistant, Kroger Gemini, Loblaw PCxpress). LAC has documented *internal-operations* generative AI (Falabella TARS) — but the consumer-facing pattern in LAC, while rumoured in strategy decks, has *no deployment scope verified to the TARS level*. Cencosud's CenCoDay 2025 deck names "AI-Driven Hyper-Personalization" as a strategy framing but does not name a deployment with scope numbers. Walmart Chile AI deployments are not verified in public sources.

**Why this deployment matters for the corpus despite the IT-internal framing:**

1. **It documents that LAC retail conglomerates can deploy generative-AI agents at scale.** TARS being 22,000 tickets is non-trivial operational scale; the platform is multi-country (7), multi-brand (5+ Falabella brands), multi-channel (4+ input surfaces).
2. **It demonstrates the Google Cloud Conversational Agents + Gemini pattern as the corpus's first Latin American deployment.** The corpus now has:
   - OpenAI-mediated consumer retail: Loblaw PCxpress, Walmart Sparky
   - Anthropic-mediated consumer retail (rumoured): Kroger
   - Google Cloud Conversational Agents + Gemini internal-operations: **Falabella TARS** (this unit)
   - Microsoft Azure-mediated agronomic AI: Kilimo (Microsoft × Kilimo partnership)
3. **It positions Falabella as a regional AI-deployed retail player**, distinct from Loblaw (Canada-only) or Walmart (US-anchored). Falabella's cross-Andean operating geography (Chile, Peru, Colombia, Argentina, Brazil, Mexico, Uruguay) gives it reach the NA-anchored retailers do not have, even though its consumer-facing generative-AI product is not (yet) the equivalent of NA counterparts.
4. **The "Solving for IT internal first, then customer-facing" pattern** is structurally distinct from NA where consumer-facing retail AI comes first. Falabella's stated future direction in the case study is to extend TARS to: "automatically document solutions, participate in incident review meetings with resolver teams, generate post-mortem tickets, and help identify root causes for reported problems. The goal: create a solution that can resolve repetitive cases without human intervention, so support teams can focus on the most complex incidents." — i.e. automating tier-1 / tier-2 IT support before pivoting to customer-facing surfaces.

## What this unit is doing in the taxonomy

Anchors the **LAC conglomerate-retail generative-AI internal-operations pattern** at deployed scale. Distinguishes:
- From NA *consumer-facing generative AI retail* (Walmart Sparky, Instacart Cart, Kroger Gemini, Loblaw PCxpress) by being IT-internal rather than customer-facing
- From NA *internal-operations enterprise AI* (Microsoft 365 Copilot deployment patterns) by being a custom conversational agent on Google Cloud Conversational Agents + Gemini, not a vertical SaaS product
- From *consumer-facing generative AI delivery platforms* (DoorDash voice ordering discontinued; Uber Eats AI Cart Assistant) by being IT-internal not in the delivery flow

Functionally pairs with:
- **Agrosmart / Kilimo** (LAC smallholder-side agronomic AI)
- **Marfrig × Agrorobótica** (LAC beef-processing AI)
- **PineSORT / AinnovaTech** (Costa Rica pineapple computer vision)
- **Microsoft × Kilimo** (LAC foundation-model-vendor × agronomic AI collaboration)

## Why it matters for talks

- Substantively refines the *LAC retail AI* picture away from "LAC is 2 cycles behind NA" framing. The internal-operations generative-AI pattern *exists* in LAC at scale; the consumer-facing pattern is where the question mark sits.
- Useful counterweight to vendor figures in Cencosud / Walmart Chile framing-as-strategy conversations. Cencosud and Walmart Chile *claim* "AI-driven hyper-personalization" but **Falabella is the only LAC retail conglomerate to publish verifiable deployment scope numbers** (Google Cloud customer story, July 2025 reference).
- Useful case study for the *operational AI as precursor to consumer AI* narrative. TARS prioritised IT-internal first ("automate tier-1 tier-2 IT support"); consumer-facing AI surfaces are described as a *future* extension. This is a different strategic ordering from NA's consumer-first deployments.
- Useful for the *Google Cloud Conversational Agents + Gemini pattern* as a deployment archetype distinct from the corpus's existing OpenAI-mediated or Anthropic-mediated patterns.

## Critical context

- **Categorically distinct from consumer-facing retail AI.** This unit should not be cited as evidence of LAC retail AI consumer-deployment; the corpus's structural observation is that *internal-operations generative AI in LAC retail exists at scope; consumer-facing generative AI in LAC retail does not (yet) exist at the same scope*. The corpus needs both patterns kept distinct.
- The 22,000-tickets figure is from Falabella's own framing via Google Cloud customer story. It is tier-2 (named customer + named services + named scope), but the scope figure is still effectively *vendor-reported from the deploying organisation* — same V0 / V1 tiering discipline as the in-service AI vendor-figure hygiene applied to other units.
- The case study is in Spanish (Google Cloud Customer es-419 page); the corpus's English-language secondary press has not picked it up prominently. Worth flagging as a *Spanish-language primary-source-in-undercovered-LAC* signal: the LAC regional scan notes are Spanish-language-light, this unit partly restores the balance.
- The deployment architecture detailed in the Google Cloud case study is unusually thorough (Pub/Sub, Cloud Run Functions, BigQuery, Vertex AI Search, Contact Center AI, Conversational Agents, Firestore, Cloud Storage, Dataform, Looker, Cloud Logging, Gemini). The narrative thrust: a multi-layer generative-AI stack, not just a chatbot — distinguishing TARS from a basic FAQ-bot deployment.
- Falabella's cross-LAC operating geography (7 countries, 90,000+ collaborators) gives TARS the corpus's *largest-scale named internal-operations generative AI* deployment, but this scale reflects the conglomerate's size, not the AI's specific reach.
- Microsoft Teams and WhatsApp as incident-reporting channels reflect LAC-specific patterns (WhatsApp dominance in LAC consumer; Microsoft Teams in enterprise IT). Distinct from NA patterns where retail-employee channels tend to be Slack / Teams / custom-helpdesk-portal.
- The future-direction intent documented in the case study — automate tier-1/2 support, then extend to other surfaces — means TARS as-deployed in 2025 is not the final product. The corpus should treat this as a *moving target*, re-verifying at cycle time what TARS surfaces it operates in.

## Links

- gaps: G-091 (LAC retail consumer-facing generative AI deployment scope — currently not verified for any LAC retailer except Falabella TARS at internal-operations)
- contested-claims: C-060 (LAC retail AI consumer-facing deployment claim vs internal-operations deployment reality — Falabella TARS is the *latter*; Cencosud/Walmart Chile strategy framing is the *former*, not verified)
- related-units: walmart-sparky-ai-shopping-assistant.md, instacart-cart-assistant.md, kroger-gemini-shopping-assistant.md, loblaw-pcxpress-chatgpt.md (NA consumer-facing generative AI retail for direct comparison); agrosmart-brazil.md, kilimo-argentina-irrigation.md, iica-digital-agriculture-week-2025.md (LAC cluster peers)
- sovereignty-flags: implicit — Google Cloud Conversational Agents + Gemini is the foundation-model layer; Falabella's training data is internal IT tickets and internal process documentation; the conversational agent mediates between Falabella employees and Falabella's internal IT

## Freshness

- last-verified: 2026-07-19
- last-regionally-scanned: 2026-07
- sources:
  - Google Cloud Customer Stories (es-419). *Grupo Falabella redefine la gestión de incidentes a través de agentes con Google Cloud*. https://cloud.google.com/customers/intl/es-419/falabella?hl=es-419 (cited metrics, services, named engineers)
  - Grupo Falabella corporate context (cited in case study): >36M customers, 7 countries, brands include Banco Falabella, Falabella Retail, Sodimac, Tottus, Mallplaza, IKEA franchise
