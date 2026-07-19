---
id: wendys-freshai-google
title: Wendy's FreshAI — Google Cloud generative AI drive-thru voice ordering, deployed at ~100 restaurants across 17 states (Jan 2025)
sector-position: consumption
ai-technique-class: generative-ai-and-llms
purpose: consumer-facing
claim-type: example
activity-status: deployed
critical-voice: (none — vendor announcement)
capital-intensity: industrial
language-literacy-profile: standard-smartphone, voice-first
policy-instrument: (none)
region: NA-USA
actor: Wendy's with Google Cloud
actor-type: vendor
data-governance: proprietary
data-rights-framework: vendor-owned
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

Wendy's *FreshAI* is a generative-AI drive-thru ordering system built with Google Cloud. It went from pilot (4 company restaurants in Columbus, OH, 2023) to *production* by January 2025, when Wendy's reported:

- **~100 restaurants across 17 states** running FreshAI in production.
- **Spanish language capability** added in 2024.
- **86% average order-completion rate without human intervention** (vendor number).
- **~99% "accuracy"** if measured by Wendy's broader definition (any AI-started order submitted to POS).
- One test site showed **service times 22 seconds faster** than the Columbus market average.

Wendy's CIO Matt Spessard (interviewed by Forbes / Lopez Research, Jan 2025) frames FreshAI as a *platform* intended to scale to mobile apps, kiosks, and smart devices, beyond drive-thru. Wendy's operates over 7,000 restaurants globally, so 100 deployed = ~1.4% of footprint.

## What this unit is doing in the taxonomy

Anchors the *pilot-to-production* narrative for generative AI in QSR drive-thru. Smaller deployment than Taco Bell × Omilia (890+ units) but with stronger *measurement culture* — the 86% / 99% / 22-second numbers are vendor-reported but methodologically specific.

## Why it matters for talks

- Documents the *production metrics* that vendor presentations can produce when they try: order completion rate, accuracy (with definitional caveat), service-time delta. Useful contrast to Taco Bell × Omilia, where public metrics are more limited.
- Documents the *production reality gap*: 100 of 7,000+ restaurants is small. Public framing tends to over-state scaling.
- The Spanish-language capability is the only public North American QSR voice-AI deployment that explicitly handles a non-English language in production as of mid-2026.

## Critical context the unit does not sanitise

- Wendy's franchise system means deployment is opt-in for franchisees (announced as a *test option* for franchisees). The 100-restaurant footprint includes both company and franchise locations.
- The 86% / 99% numbers are *Wendy's own metrics* — definitional. Wendy's explicitly notes the broader-accuracy definition is shared with "other QSR companies" but the underlying measurement methodology is not publicly auditable.
- The "200 billion combinations" of menu ordering Wendy's cites is a vendor number intended to justify LLM use; not a public measurement.

## Links

- gaps: G-006 (consumption × consumer-facing × US restaurant), G-009 (voice-AI data governance)
- contested-claims: (none — deployment and metric numbers are vendor-reported but methodologically specific)
- related-units: taco-bell-omilia-drive-thru-voice-ai.md (larger competitor deployment), mcdonalds-ibm-ai-drive-thru-discontinued.md (failed counterpart, parallel-agent unit)
- sovereignty-flags: implicit — voice data flows to Google Cloud

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - Forbes / Lopez Research, *Wendy's Serves Up Generative AI To Boost Its Customer Experience*, Jan 15 2025. https://www.forbes.com/sites/maribellopez/2025/01/15/wendys-serves-up-generative-ai-to-boost-its-customer-experience/
  - Wendy's blog, *Leading Drive-Thru Innovation with Wendy's FreshAi*. https://www.wendys.com/blog/drive-thru-innovation-wendys-freshai
  - Nation's Restaurant News, *Wendy's is giving franchisees the option to test its drive-thru AI chatbot*. https://www.nrn.com/restaurant-technology/wendy-s-is-giving-franchisees-the-option-to-test-its-drive-thru-ai-chatbot
  - Google Cloud blog, *Wendy's Generative AI Drive-Thru Reinvention*, 2024. https://cloud.google.com/blog/transform/wendys-generative-ai-drive-thru-reinvention-worker-freedom
