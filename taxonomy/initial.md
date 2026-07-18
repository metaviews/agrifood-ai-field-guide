# Taxonomy — first working draft

**Status.** First draft, anchored in the initial environmental scan at `scans/2026-07-initial.md`. Not a final structure. Meant to be reshaped as the scan deepens.

**Purpose.** A consistent way to position content units within the knowledge base, and a way to surface gaps and contested claims rather than just topics.

---

## Three axes

### Axis 1 — Sector position

Where in the agrifood value chain the activity sits. Ordered from upstream to downstream.

1. **Inputs** — seed, agrochemicals, fertilizer, machinery-as-input, biologicals, finance
2. **On-farm production — open field** — broad-acre crops, outdoor horticulture, agroforestry
3. **On-farm production — protected** — greenhouse, vertical farm, indoor
4. **Animal production** — dairy, meat, eggs, aquaculture, apiculture
5. **Post-harvest handling and storage** — grading, sorting, cold chain, drying
6. **Processing** — primary and secondary processing, ingredient manufacture
7. **Distribution and retail** — logistics, wholesale, retail, food service
8. **Consumption** — household, food service, dietary patterns
9. **Waste and recovery** — food loss, food waste, by-products, nutrient cycling, compost

**Note.** *Inputs* was a blank cell in the scan matrix but is now an explicit axis position. The blank was an evidence-collection problem, not an absence of activity.

### Axis 2 — AI technique class

What kind of AI does the work. Listed roughly in maturity order, not importance.

1. **Predictive ML** — supervised, unsupervised, classical and deep; yield prediction, risk modelling, classification
2. **Computer vision** — image and video classification, segmentation, spectral imaging, phenotyping
3. **Robotics and autonomy** — autonomous vehicles, manipulators, drones, mobile platforms
4. **Sensors and IoT + ML** — embedded sensing, edge inference, real-time monitoring
5. **Decision-support systems** — agronomic advisory, irrigation scheduling, integrated management platforms
6. **Generative AI and LLMs** — extension chatbots, research discovery, summarisation, content generation

**Notes.**
- *Generative AI and LLMs* is the lowest-maturity, highest-velocity column. Worth tagging as `watching` rather than treating as a settled entry.
- *Sensors and IoT + ML* is the substrate; many of the other classes depend on it. Listing it explicitly avoids losing the infrastructure layer.
- The taxonomy deliberately does **not** separate "robotics" from "AI" — robotics in agrifood today is overwhelmingly AI-driven.

### Axis 3 — Purpose / claim

What the activity is intended to do, or what claim is being made about it. Categories are not mutually exclusive in real deployments but useful for tagging.

1. **Yield optimisation** — increase output per unit area, per animal, per input
2. **Input reduction** — water, fertilizer, pesticide, energy, labour per unit output
3. **Disease, pest, and weed detection and management** — early detection, targeted intervention
4. **Supply chain efficiency** — loss reduction, traceability, demand matching, logistics
5. **Consumer-facing** — labelling, personalisation, safety, dietary support
6. **Research and discovery** — breeding, ingredient discovery, scientific synthesis
7. **Extension and advisory** — agronomic advice, knowledge translation to farmers
8. **Governance, policy, and accountability** — monitoring, audit, regulatory tools
9. **Worker conditions and labour** — drudgery reduction, safety, displacement (rarely the headline purpose, but always a real consequence)

---

## Cross-cutting tags

Every entry in the knowledge base carries these in addition to its three axis positions.

### Claim type

Drives freshness rules. See VISION.md for the rule per type.

- `fact` — re-verify annually
- `statistic` — re-verify annually
- `claim` — re-verify annually
- `framework` — re-verify every 2 years
- `example` — confirm still live annually

### Activity status

- `deployed` — operational, not just pilot
- `piloting` — limited field trials, not yet general
- `research` — published, not yet fielded
- `announced` — vendor or institutional commitment, no working artefact
- `discontinued` — was deployed, no longer — worth keeping for the gap analysis

### Critical-voice tag

Where applicable, mark the entry with the critical lens it sits within:

- `dominant` — works within the prevailing framing of AI in agrifood
- `counter` — explicitly challenges dominant framing
- `grassroots` — community-led, farmer-led, peasant-led
- `sovereignty` — explicitly engages farmer data or food sovereignty
- `policy` — primarily a policy or governance tool

### Geographic and actor tag

Every entry carries a `region` and an `actor` tag where known.

`region` examples (not exhaustive): `global-N`, `EU`, `UK`, `NA-US`, `NA-Canada`, `LATAM`, `SSA`, `MENA`, `South-Asia`, `East-Asia`, `Oceania`.

`actor` examples: `FAO`, `IPES-Food`, `Microsoft`, `John Deere`, `Atelier Paysan`, `Farmers' Seed Network China`, etc.

---

## First-class objects beyond topics

Three object types belong in the KB alongside activity entries. They're first-class because the *standing on existing work* commitment in VISION.md depends on them being trackable.

### Gaps

Cells in the matrix where activity should plausibly exist given the problem but evidence is thin.

Each gap entry carries:
- the (sector × class × purpose) intersection it's about
- a one-line statement of why activity is plausible here
- sources searched and not found
- a `last_searched` date — gap entries are re-searched on the same cadence as `claim`

First gap candidates from the scan:

- **G-001:** `inputs × all × all` — vendor activity is high but is under-surfaced in dominant scans
- **G-002:** `waste-and-recovery × all × supply-chain-efficiency`
- **G-003:** `consumption × all × extension-and-advisory` — extension targeted at consumers
- **G-004:** `all × generative-AI × extension-and-advisory` in low-resource and smallholder contexts
- **G-005:** `all × all × governance-and-accountability` — audit, certification, recourse tooling

### Contested claims

Claims the scan treats as live rather than settled.

Each carries:
- the claim, in plain language
- the source(s) asserting it
- the source(s) contesting it
- `last_reviewed` date

First contested claim candidates from the scan:

- **C-001:** "AI will help feed the world."
- **C-002:** "Precision agriculture reduces inputs." (net effect contested)
- **C-003:** "Farmer data is the new oil." (sovereignty vs value-capture framings)
- **C-004:** "AI is inevitable in agrifood." (political choice framing)
- **C-005:** "AI will close the productivity gap between smallholder and industrial farms." (widening-gap counter)
- **C-006:** "AI will reduce chemical inputs." (sector-scale effect under-measured)

### Sovereignty flags

Entries that raise data sovereignty, food sovereignty, labour displacement, or vendor lock-in concerns.

Each carries:
- which axis positions are affected
- the specific concern
- reference to the sovereignty framework it sits within (where applicable)

---

## What this taxonomy does not yet do

- It does not yet encode **maturity** as a primary axis (deployment vs research vs announced). That can be inferred from `activity_status` cross-cutting tag but isn't first-class.
- It does not yet encode **scale** (smallholder vs industrial vs research-scale). Important for the *widening-gap* contested claim; missing.
- It does not yet encode **capital intensity**, which is critical for understanding the equity story.

These are open questions for the next iteration.