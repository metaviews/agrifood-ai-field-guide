---
id: mcdonalds-ibm-ai-drive-thru-discontinued
title: McDonald's × IBM AI drive-thru — the largest NA QSR AI deployment that ended in 2024
sector-position: consumption
ai-technique-class: generative-ai-and-llms (voice-based conversational ordering)
purpose: consumer-facing, worker-conditions
claim-type: example
activity-status: discontinued
critical-voice: (none directly — vendor framing, with worker-conditions concerns surfaced in coverage)
capital-intensity: industrial
language-literacy-profile: standard-smartphone (no consumer-end UI; the drive-thru surface was the consumer touchpoint)
policy-instrument: (none)
region: NA-US (McDonald's pilot in 100+ US drive-thru locations; IBM operated the technology stack from McD Tech Labs acquired Dec 2021)
actor: McDonald's (deployer); IBM (technology vendor — McD Tech Labs acquired Dec 2021, returned to IBM June 2024)
actor-type: vendor
data-governance: proprietary
data-rights-framework: vendor-owned
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

**McDonald's × IBM AI drive-thru** was the largest NA quick-service restaurant (QSR) AI deployment involving voice-based conversational ordering at the drive-thru. The system used automated order-taking (AOT) technology built by IBM at McD Tech Labs (acquired by IBM from McDonald's in December 2021) and deployed across **100+ McDonald's US drive-thru locations** starting in 2021.

**Timeline (per multiple sources, 2021–2024):**
- 2021: McDonald's acquires Apprente (voice-AI startup), renames it McD Tech Labs
- 2021 (December): IBM acquires McD Tech Labs from McDonald's; partnership announced
- 2021–2024: AI drive-thru pilot in 100+ restaurants in NA
- June 2024: McDonald's announces end of partnership with IBM; voice ordering AI shut off at all pilot locations "no later than July 26, 2024"

**Why this unit matters — even though it failed:**
- It was the largest publicly-documented QSR AI deployment in NA by a single brand
- It had a 3-year pilot period, not a one-off test
- The pilot was extended across 100+ stores rather than held to a small test bed
- McDonald's did *not* declare AI-driven ordering a dead-end — they ended the *IBM* partnership specifically, with reports of subsequent partnerships with Google for AI drive-thru replacing the IBM role
- The pilot ending is *not* a verdict on consumer-facing AI in QSR — it is a verdict on one specific vendor build and integration

**Reasons cited in coverage (multiple sources):**
- Order accuracy at noisy drive-thru (SOTA voice models at the time did not yet match the noise-tolerance required)
- Edge cases (special instructions, substitutions) were frequent enough to slow service
- Customer experience degradation when the AI mis-ordered
- Workers' and franchisees' reports of cost-to-serve issues when the AI failed

## What this unit is doing in the taxonomy

Anchors the **consumption × generative AI / voice × consumer-facing** cell with a *discontinued* status — a category of unit the field guide previously did not have. Distinct from:
- **Walmart Sparky** (`walmart-sparky-ai-shopping-assistant.md`) — still deployed/piloting
- **Instacart Cart Assistant** (`instacart-cart-assistant.md`) — still deployed
- **Loblaw PC Express in ChatGPT** (`loblaw-pcxpress-chatgpt.md`) — still deployed

## Why it matters for talks

- *This is the most visible "AI deployment that didn't work out" unit in the NA food-system.* Worth surfacing as a Negative Result because:
  - It tests the argument that vendor-reported AI deployment scale is not the same as deployment *sustainedness*
  - It is on-record evidence that voice-based consumer AI in noisy environments was not mature in 2021–2024 — 2026-vintage voice models (Whisper-class accuracy improvements) may now be viable but that is the next test
  - The IBM partnership specifically ending — not McDonald's AI strategy ending — is a load-bearing distinction; McDonald's reportedly moved toward Google in subsequent announcements
- *Workforce framing.* QSR AI drive-thru has been framed as a *labour* story by some media (displacement concerns) and as an *efficiency* story by others (faster service, fewer mistakes). The pilot ending complicates the labour-displacement concern by demonstrating that the technology *itself* wasn't ready — though it does not resolve the policy question of what happens if/when it works.
- *Negative-result units are first-class objects in the field guide.* Honest industry reading requires recording what failed, on what scale, after what duration — not just what is currently live.

## Critical context

- The unit is **discontinued** as of mid-2024 — *not* in 2026. Activity-status should be tagged `discontinued` and freshness follow-up questions should ask whether *successor* AI programs at McDonald's have advanced.
- McDonald's has not made a public statement rejecting AI in drive-thru; subsequent reporting points to Google partnership activity. Worth checking as of 2026 verification.
- The 100+ restaurants figure is consistently reported but the specific store list and which markets got the AI was never publicly disclosed.
- Customer impact during the pilot (mis-orders, longer wait times, complaint rates) is not quantitatively reported; coverage is qualitative.
- The acquisition-by-IBM-then-IBM-ended-by-McDonald's sequence is an unusual partnership structure; "tech-lab → vendor → partner-end" is a structural pattern worth noting for AI procurement in NA food retail.
- Worker / labour union concerns were raised during the pilot period; the discontinuation may have been partly tactical (cost / accuracy) rather than a labour settlement.

## Links

- gaps: G-059 (new: post-IBM McDonald's AI strategy — Google partnership status as of 2026)
- contested-claims: C-007 (claims about mature consumer-facing AI in NA QSR — challenged here), C-039 (labour-displacement by AI in QSR — partially addressed: the technology wasn't mature; displacement was constrained by accuracy problems)
- related-units: walmart-sparky-ai-shopping-assistant.md (still-deployed consumer AI), instacart-cart-assistant.md (still-deployed consumer AI), loblaw-pcxpress-chatgpt.md (still-deployed Canadian consumer AI), taranis-aerial-imagery.md (different cell — aerial imagery platform, similar post-mortem-framing language sometimes applied), kroger-ocado-cfc-closures-discontinued.md (sociological framing of negative outcomes in AI-in-agrifood), mcdonalds-ibm-aot-discontinued.md (sister unit — AOT-acronym canonical, accent / dialect framing; this unit emphasises the McD-Tech-Labs-to-IBM partnership sequence)
- sovereignty-flags: (none directly — proprietary US vendor stack)

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources:
  - AP News (June 2024). *McDonald's ends test run of AI-powered drive-thrus with IBM.* https://apnews.com/article/mcdonalds-ai-drive-thru-ibm-bebc898363f2d550e1a0cd3c682fa234
  - CNBC (June 17, 2024). *McDonald's to end AI drive-thru test with IBM.* https://www.cnbc.com/2024/06/17/mcdonalds-to-end-ibm-ai-drive-thru-test.html
  - Restaurant Business Online. *McDonald's is ending its drive-thru AI test.* https://restaurantbusinessonline.com/technology/mcdonalds-ending-its-drive-thru-ai-test
  - Customer Experience Dive. *McDonald's ends IBM drive-thru voice order test.* https://www.customerexperiencedive.com/news/mcdonalds-ibm-drive-thru-automation-voice-ordering-ai/719128/
  - McDonald's / IBM joint statement (December 2021). *IBM will acquire McD Tech Labs.* https://corporate.mcdonalds.com/corpmcd/our-stories/article/IBM-McD-Tech-Labs.html
  - Trade press synthesising the post-mortem (dev.to summary and others)
