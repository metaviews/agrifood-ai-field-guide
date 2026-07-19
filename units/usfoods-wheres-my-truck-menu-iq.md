---
id: usfoods-wheres-my-truck-menu-iq
title: 'US Foods — Where''s My Truck (AWS SageMaker) + Menu IQ AI menu profitability tools for NA foodservice'
sector-position: distribution-and-retail
ai-technique-class: predictive-ml, generative-ai-and-llms
purpose: supply-chain-efficiency, market-access
claim-type: example
activity-status: deployed
critical-voice: (none directly — vendor framing)
capital-intensity: industrial
language-literacy-profile: standard-smartphone
policy-instrument: (none)
region: NA-US (US Foods operates across the US)
actor: 'US Foods (operator; #2 NA foodservice distributor); AWS (technology partner — SageMaker + ECS + Fargate + Aurora for Where''s My Truck; MOXē platform for Menu IQ)'
actor-type: vendor
data-governance: proprietary
data-rights-framework: vendor-owned
last-verified: 2026-07
last-regionally-scanned: 2026-07

---

## Content

US Foods, the second-largest NA foodservice distributor, operates at least two named AI products with deployment evidence:

**Where's My Truck — AI ETA on MOXē (built on AWS):**
- 3 ML models: Likely Remaining Route, Service Time, ETA Range
- Built on AWS SageMaker + ECS + Fargate + Aurora + Amazon Location Service
- Piloted April 2024 in 2 markets; scaled to 10 markets by July 2024; **rolled out across all markets by end of 2024**
- Vendor-reported claim: 40% improvement in delivery-window accuracy
- Documented in Consumer Goods (June 2025, AWS-sponsored content)

**Menu IQ — AI-powered menu profitability tool:**
- Embedded inside MOXē (US Foods' digital ordering / engagement platform)
- Pulls real-time food-cost data from MOXē Inventory to flag low-margin menu items
- Free for US Foods' restaurant-operator customers
- Launched November 2025

**Why US Foods is the load-bearing competitor-counterpart to Sysco AI360.** Between Sysco (AI360, 90% consultant adoption) and US Foods (Where's My Truck + Menu IQ), the top two NA foodservice distributors both have concrete publicly-documented AI in production. Worth pulling both into the same talk-stage slide when framing NA foodservice-AI as an industry pattern, not a single-vendor case.

## What this unit is doing in the taxonomy

Anchors the **distribution-and-retail × predictive-ML + GenAI × supply-chain-efficiency** cell for NA foodservice, *alongside* the Sysco unit. Sister units:
- **Sysco AI360** (`sysco-ai360-foodservice.md`) — #1 NA foodservice distributor comparator
- **Leanpath** (`leanpath-food-waste-tracker.md`) — food-waste AI (Leanpath listed on US Foods partnership page for restaurant operators)
- **Loblaw × Blue Yonder** (`loblaw-blue-yonder-forecasting.md`) — grocery-forecast pattern

## Why it matters for talks

- *AWS SageMaker stack architecture is a specific hyperscaler-AI-deployment reference.* Worth pulling apart from Sysco (in-house / Sysco LABS) and US Foods (AWS hyperscaler-mediated) — different architectural patterns.
- *"40% delivery-window accuracy improvement" is the kind of operationally-specific figure that survives independent verification.* Vendor-reported but methodologically clean (single KPI, before/after).
- *Menu IQ is the AI-deployed-for-restaurant-operator-customer pattern.* Different from Sysco's AI-for-Sysco's-own-salesforce. Both AI surfaces face the restaurant industry but at different layers of the value chain.
- *The "free for US Foods customers" framing on Menu IQ positions AI as a customer-acquisition / lock-in feature for the US Foods platform.* Worth naming because that is a vendor / customer acquisition strategic reason for AI in foodservice — distinct from the productivity-uplift framing in Sysco AI360.

## Critical context

- Where's My Truck accuracy improvement is vendor-reported (Consumer Goods article is AWS-sponsored content — note the source framing).
- Menu IQ is launch-stage as of this writing (November 2025); transaction-volume / menu-engagement metrics not yet publicly disclosed.
- US Foods partnership with Leanpath (food-waste AI) noted separately in leanpath-food-waste-tracker.md — multiple AI partnerships across the US Foods platform.

## Links

- gaps: G-062 (NA foodservice-distributor AI depth)
- contested-claims: C-051 (new: vendor-claimed 40% delivery-window accuracy — independent verification not surfaced)
- related-units: sysco-ai360-foodservice.md (#1 comparator), leanpath-food-waste-tracker.md (US Foods / Leanpath partnership), loblaw-blue-yonder-forecasting.md (grocery forecast pattern)
- sovereignty-flags: implicit — US Foods delivery / menu-cost data flows to AWS; cross-customer restaurant-customer-data retention policy not publicly documented

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - Consumer Goods / AWS sponsored post (June 2025). *US Foods: Where's My Truck — How AI Transformed Delivery Tracking*. https://consumergoods.com/us-foods-wheres-my-truck-how-ai-transformed-delivery-tracking
  - US Foods Investor Relations (Nov 2025). *US Foods Launches Menu IQ — AI-Powered Tool Giving Restaurant Operators Real-Time Visibility Into Menu Profitability*. https://ir.usfoods.com/newsroom/news/news-details/2026/US-Foods-Launches-Menu-IQ-AI-Powered-Tool-Giving-Restaurant-Operators-Real-Time-Visibility-Into-Menu-Profitability/default.aspx
  - Distribution Strategy (Feb 2026). *US Foods rolls out AI tool to give restaurants real-time view of menu profitability*. https://distributionstrategy.com/2026/02/us-foods-rolls-out-ai-tool-to-give-restaurants-real-time-view-of-menu-profitability/
  - US Foods MOXē help center. https://www.usfoods.com/how-we-help-you/easy-ordering/moxe-help-center/menu-iq
