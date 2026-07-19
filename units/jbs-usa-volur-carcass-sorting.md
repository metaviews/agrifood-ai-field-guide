---
id: jbs-usa-volur-carcass-sorting
title: JBS USA × Völur — AI carcass-sorting and cutting-plan optimisation at Hyrum UT (Proof-of-Value phase)
sector-position: processing
ai-technique-class: predictive-ml, decision-support-systems
purpose: input-reduction, supply-chain-efficiency
claim-type: example
activity-status: piloting
critical-voice: (none directly — vendor framing)
capital-intensity: industrial
language-literacy-profile: (not applicable)
policy-instrument: (none)
region: NA-US (Hyrum UT initial deployment; planned scale-out to other JBS USA plants)
actor: 'JBS USA (operator; world''s largest meat processor); Völur (Norway-origin, US business; AI vendor)'
actor-type: vendor
data-governance: proprietary
data-rights-framework: vendor-owned
last-verified: 2026-07
last-regionally-scanned: 2026-07

---

## Content

JBS USA, the US arm of JBS S.A. (the world's largest meat processor), announced in January 2023 a partnership with **Völur** to deploy Völur's AI for carcass-sorting and cutting-plan optimisation. The initial Proof-of-Value ran for 6 months at JBS USA's Hyrum, Utah beef plant, with the Völur model hosted on Microsoft Azure.

**What the AI does:**
- Optimises daily carcass sorting and cutting plans
- Balances supply (carcass quality / grade mix) against demand (customer orders) in real time
- Maximises carcass value (matches parts to highest-value orders)
- AI is on the cutting-plan stage (downstream of the slaughter floor), not on the carcass-quality grading itself

**Deployment status as of mid-2026:**
- Hyrum POV: completed
- Plans announced to scale to other JBS USA plants at end of POV
- **Post-2023 status not publicly confirmed** — no trade press confirmation surfaced that Völur is in scaled production at additional JBS USA plants
- Treat as **pilot-stage with scale ambition** until verified

**Why this is structurally different from Cargill CarVe and Tyson × AWS:**
- Cargill CarVe = computer vision on carcass yield (line-side, real time)
- Tyson × AWS = computer vision on poultry-piece counting (line-side, real time)
- JBS × Völur = **decision-support** AI for cutting-plan optimisation (not on the line, in the planning layer)
- Together these three cover most of the surface area of NA meat-processing AI

## What this unit is doing in the taxonomy

Anchors the **processing × predictive ML × input-reduction** cell for NA meat processing — the *planning-layer* counterpart to Cargill CarVe and Tyson × AWS (line-layer). Sister units:
- **Cargill CarVe** (`cargill-carve-meat-processing.md`) — beef, line-side CV
- **Tyson × AWS** (`tyson-aws-poultry-vision.md`) — poultry, line-side CV
- **SoraLINK** (`soralink-export-food-processing.md`) — Canadian NA processing AI, predictive maintenance

## Why it matters for talks

- *JBS completes the NA meat-packing trifecta.* Cargill, Tyson, and JBS are the three largest US protein packers. All three now have publicly documented AI deployments — but in three different cells: line vision (Cargill), line vision (Tyson), cutting-plan optimisation (JBS). Worth distinguishing in talks.
- *The "planning layer" AI is a different shape from "line layer" AI.* CarVe and Tyson × AWS affect yield in real time at the cut. Völur affects value capture across the day's orders. The two have different feedback-loop speeds and different unit economics.
- *Microsoft Azure is the AI compute substrate for Völur at JBS.* Same hyperscaler pattern as Tyson × AWS (Amazon) and Cargill CarVe (Cargill in-house; some cloud partnerships).
- *POV state is the honesty check on the knowledge base.* The subagent's recon was careful to note that scaling status is "pilot-stage with scale ambition, not verified at scale."

## Critical context

- All deployment evidence is from Völur and JBS press releases; the Hyrum POV completion is documented, but the subsequent scale-out is not.
- "Optimises" / "maximises" vendor framing — independent verification of carcass-value capture uplift not surfaced.
- Völur is Norway-origin with US business; the company is small relative to JBS USA. Single-vendor dependency is a strategic consideration worth naming.
- Data flows: cutting-plan AI requires detailed daily carcass / order data. Whether Völur retains aggregated cross-plant data is not publicly characterised.

## Links

- gaps: G-053 (US meat processing AI deployment scale — partially addressed when this unit read with Cargill CarVe and Tyson × AWS), G-060 (new: post-2023 status of JBS × Völur scale-out)
- contested-claims: C-043 (whether AI yield/value-capture improvements across the industry are systemic or concentrated)
- related-units: cargill-carve-meat-processing.md (beef line-layer CV), tyson-aws-poultry-vision.md (poultry line-layer CV), soralink-export-food-processing.md (Canadian processing AI)
- sovereignty-flags: implicit — JBS cutting data flows to Azure; cross-plant aggregation not publicly documented

## Freshness

- last-verified: 2026-07
last-regionally-scanned: 2026-07
- sources:
  - Völur. *JBS USA to implement Völur's AI solution to maximise carcass value*. https://www.volur.ai/blog/jbs-usa-to-implement-volurs-ai-solution-to-maximize-carcass-value-and-ensure-optimal-use-of-each-animal
  - The Provisioner Online. *JBS USA to implement Völur's AI solution*. https://www.provisioneronline.com/articles/114167-jbs-usa-to-implement-volurs-ai-solution-to-maximize-carcass-value-and-ensure-optimal-use-of-each-animal
  - Trade-press coverage of the January 2023 announcement (Meat + Poultry, WATTPoultry)
