---
id: ai-maturity-assessment-framework
title: AI maturity assessment framework — a four-dimension model for evaluating agrifood AI deployments
sector-position: (cross-cutting — methodology layer)
ai-technique-class: (not applicable — methodology)
purpose: governance (deployment evaluation); research and discovery (research-to-deployment translation)
claim-type: framework
activity-status: (not applicable — methodology framework)
critical-voice: (not applicable — methodology; vendor-figure hygiene critical-voice adjacent)
capital-intensity: (not applicable)
language-literacy-profile: (not applicable)
policy-instrument: (not applicable)
region: Global (applies to any agrifood AI deployment regardless of region)
actor: (framework authors and maintainers — see Freshness)
actor-type: (not applicable — methodology)
data-governance: (not applicable)
data-rights-framework: (not applicable)
maturity-scale: (n/a — framework)
maturity-verification: (n/a — analytical)
maturity-longevity: L1 (first iteration, July 2026)
maturity-translation: T2 (applied to 60+ existing units in maturity-grade table)
last-verified: 2026-07
last-regionally-scanned: 2026-07
---

## Content

This is the field guide's **structured maturity-assessment framework** for evaluating any agrifood AI deployment. The framework addresses a recurring problem in the corpus: the `activity-status` tag in `taxonomy/v4.md` collapses four distinct dimensions into a single value (`deployed | piloting | research | experimental | announced | discontinued`), which obscures the substantive differences between a vendor deployment at billion-acre scale and an academic research-stage pilot.

The framework is **methodology, not content**. It defines four evaluation dimensions and a grading rubric. Each dimension is assessed independently. A deployment can be high on one dimension and low on another — *and that's a real, substantive finding*, not a contradiction.

The framework is applied to existing units through the maturity-grade table later in this document. New units should carry a maturity-grade as part of their frontmatter.

---

## The four dimensions

### Dimension 1 — Scale

**What this measures:** the *quantified deployment volume* of the AI system. Named numbers — units, acres, farmers, growers, operations, monthly active users, transactions.

**Grading ladder:**
- **S0 — no quantified deployment.** Vendor / academic / institutional description only; no named figures.
- **S1 — pilot-scale deployment.** Tens to low hundreds of units / acres / users; typically a single region or single partner.
- **S2 — early deployed.** Hundreds to low thousands of units / acres / users; multi-region or single-region multi-partner.
- **S3 — deployed at scale.** Tens of thousands to millions of units / acres / users; multi-region, multi-year.
- **S4 — global deployment.** Hundreds of thousands to billions of units / acres / users; multi-continent, multi-decade.

**Why this matters:** vendor-reported scale figures circulate in the corpus without independent verification. A claim of "X million acres" means something different when independently audited vs vendor-reported. The scale dimension *alone* does not tell you whether the figure is real — pair it with Dimension 2.

### Dimension 2 — Verification

**What this measures:** the *epistemic posture* of the deployment claim. Who has verified the figure, and how?

**Grading ladder:**
- **V0 — vendor-reported only.** The figure is provided by the deploying vendor / institution; no external verification cited.
- **V1 — academic / institutional peer-reviewed.** A peer-reviewed publication supports the figure (e.g. Plant Phenomics, AI Magazine, Computer and Electronics in Agriculture).
- **V2 — third-party case study.** A reputable external organisation (Development Gateway, Inrae, Mozilla, IPES-Food, civil-society research) has produced a case study that names the figure.
- **V3 — independently audited.** The figure has been independently audited by an accounting firm, government inspector general, or comparable oversight body.
- **V4 — replicated by independent party.** Multiple independent parties have reproduced or verified the figure across different contexts.

**Why this matters:** per memory hygiene, *vendor-reported agritech figures circulate without independent verification*. The verification dimension makes this visible — V0 vs V2 is the difference between a marketing claim and a substantively verified deployment. The field guide's existing gaps G-015 (Agrosmart / Kilimo yield claims verification), G-020 (independent verification of vendor-reported input-reduction figures), G-033 (DJI 222M tons water saved / 30.87M tons CO2 reduced verification) are exactly this dimension.

### Dimension 3 — Longevity

**What this measures:** the *operational durability* of the deployment. How long has it been deployed, has it survived generational cycles, has the vendor / institution remained stable, has it been discontinued.

**Grading ladder:**
- **L0 — announced / not yet operational.** Deployment is announced but not in operational use.
- **L1 — first-generation operational.** Deployed 0-2 years; first iteration; no generational update cycle yet.
- **L2 — multi-generation operational.** Deployed 3-7 years; second or third iteration; vendor / institution stable; user base has renewed.
- **L3 — mature / durable.** Deployed 7-15 years; multi-iteration; survived market cycles; institutional memory.
- **L4 — generational / legacy.** Deployed 15+ years; multiple vendor or institutional generations; established as operational infrastructure rather than product.

**Why this matters:** Indiga Ag's boom-and-bust pattern is the canonical field-guide example: the company raised over $1.6B and then underwent major restructuring. Climate FieldView has been deployed for over a decade and remains operational. Both could be `deployed` in the v4 schema; longevity tells you they are *very different kinds of deployed*.

### Dimension 4 — Translation

**What this measures:** the *research-to-deployment pathway* for academic / research-stage work. Whether documented operational adoption pathways exist for the research outputs.

**Grading ladder:**
- **T0 — research output only.** Peer-reviewed papers and grant-funded research exist; no documented operational adoption.
- **T1 — pilot deployment documented.** At least one operational pilot / deployment is named; figures may be small.
- **T2 — multiple operational deployments.** Multiple named deployments across partners or regions; translation arms in place.
- **T3 — institutional adoption pathway.** Cooperative Extension, USDA-NIFA translation program, or comparable institutional structure moves research into operational deployment.
- **T4 — self-sustaining translation.** Operational deployments continue without ongoing academic / research-side involvement.

**Why this matters:** the USDA-NIFA AI Institutes (AgAID, AIIRA, AIFARMS, AI-CLIMATE, AI-LEAF) are all high on research output and low on operational deployment figures. The Extension Foundation 2026 National AI Report (`units/extension-foundation-2026-national-ai-report.md`) names workforce readiness as the limiting factor. Translation is the dimension where the gap between academic output and operational adoption shows up.

---

## How the dimensions combine

The dimensions are independent. A deployment can score:
- **High scale + low verification** — DJI Agriculture (400,000 drones, 980M acres, 100+ countries — but vendor-reported, not independently audited at scale).
- **Low scale + high verification** — smallholder agricultural AI pilots in academic literature (peer-reviewed, but tiny deployment).
- **High longevity + low current scale** — legacy equipment-makers with stable platforms but modest current-year deployment.
- **High research + low translation** — the canonical academic-agrifood-AI pattern.

When a deployment has high scale *and* high verification *and* high longevity *and* high translation, it is the field guide's canonical "mature deployment" — and worth treating as such in talks. The number of units that hit all four at high levels is small. Knowing this is more useful than the v4 schema's `deployed` value can express.

---

## Maturity-grade summary table for the corpus

This is the first-pass maturity assessment for all current units. Each row shows the four-dimension grades (S/V/L/T, where S0-S4 etc.), plus a one-line summary. The assessment is auditable; any grade can be contested with a unit-level source citation.

### Vendor deployments with named scale

| Unit | S | V | L | T | Summary |
|---|---|---|---|---|---|
| `dji-agriculture-global-export.md` | S4 | V0 | L3 | T3 | Multi-continent scale; vendor-reported; ~decade deployment; broad partner ecosystem |
| `lely-astronaut.md` | S4 | V0 | L4 | T4 | 50,000 units / 50 countries; vendor-reported; multi-decade legacy; self-sustaining translation |
| `bayer-climate-fieldview.md` | S4 | V1 | L4 | T4 | Multi-continent; peer-reviewed papers exist; ~decade legacy; established platform |
| `xag-china-drone-leader.md` | S4 | V0 | L3 | T3 | 10M+ farmers claimed (vendor-reported); decade deployment; multi-region |
| `john-deere-see-and-spray.md` | S3 | V1 | L2 | T3 | Operational scale; peer-reviewed computer-vision papers; ~2-3 year deployment; broad partner ecosystem |
| `agco-ptx.md` | S3 | V0 | L2 | T3 | Brand-agnostic retrofit; vendor-reported; multi-year deployment |
| `claas-connect.md` | S3 | V0 | L3 | T3 | EU equipment-maker; multi-region; multi-year; vendor-reported |
| `naio-technologies.md` | S2 | V0 | L3 | T2 | Vineyards / specialty crops; multi-region; decade deployment; modest scale |
| `taranis-aerial-imagery.md` | S3 | V0 | L3 | T3 | Aerial imagery multi-continent; vendor-reported; ~decade |
| `indigo-ag.md` | S2 | V1 | L1 | T2 | Boom-bust pattern; modest current scale; ~5-7 years with major restructuring |
| `xfarm-europe.md` | S3 | V0 | L2 | T3 | European multi-region; vendor-reported; ~5 years |
| `apeel-ripetrack.md` | S3 | V1 | L3 | T3 | EFSA approval; peer-reviewed; multi-region; ~decade |
| `loblaw-pcxpress-chatgpt.md` | S1 | V1 | L1 | T2 | First-of-its-kind; documented; ~1 year; consumer-facing pilot |
| `loblaw-blue-yonder-forecasting.md` | S3 | V1 | L3 | T3 | Canadian grocer; multi-year; documented |
| `haven-greens.md` | S1 | V0 | L1 | T1 | First Canadian automated greenhouse; ~1 year; vendor-reported |
| `sollum-sun-as-a-service.md` | S2 | V0 | L2 | T2 | Quebec greenhouse cluster; multi-year |
| `soralink-export-food-processing.md` | S2 | V0 | L2 | T2 | Quebec dairy/meat processing; multi-year |
| `alibaba-et-agricultural-brain.md` | S3 | V0 | L3 | T3 | China cloud-mediated; multi-region; multi-year |
| `jd-farm-iot-blockchain.md` | S2 | V0 | L2 | T2 | China vertically integrated; modest scale |
| `pinduoduo-smart-agriculture-competition.md` | S1 | V1 | L1 | T1 | AI-vs-traditional competition; documented; research-stage |
| `china-shengmu-organic-dairy.md` | S2 | V0 | L2 | T2 | China organic dairy; multi-year |
| `agrosmart-brazil.md` | S2 | V0 | L2 | T2 | Latin America; 100,000 farmers claimed; vendor-reported |

### Academic / research / institutional deployments

| Unit | S | V | L | T | Summary |
|---|---|---|---|---|---|
| `agaid-wsu-institute.md` | S0 | V1 | L2 | T2 | Research-stage; peer-reviewed; 5-year deployment; partner pilots |
| `aiira-iowa-state-institute.md` | S0 | V1 | L2 | T2 | Research-stage; peer-reviewed; 5-year deployment; breeding-pipeline translation |
| `aifarms-illinois-institute.md` | S0 | V1 | L2 | T2 | Research-stage; peer-reviewed; foundational AI contributions |
| `ai-climate-minnesota-institute.md` | S0 | V1 | L1 | T1 | Research-stage; peer-reviewed; 3-year deployment; young |
| `ai-leaf-penn-state-institute.md` | S0 | V1 | L1 | T1 | Research-stage; peer-reviewed; 3-year deployment; young |
| `mila-quebec-ai-institute.md` | S0 | V1 | L3 | T2 | DISA project; peer-reviewed; multi-year; partner farms |
| `inrae-france-ai-agriculture.md` | S0 | V1 | L4 | T2 | National research backbone; multi-decade; institutional translation |
| `ivado-quebec-ai-implementation.md` | S1 | V0 | L1 | T1 | Implementation partner; modest operational deployment |
| `olds-college-smart-farm.md` | S1 | V0 | L2 | T2 | Alberta applied research; multi-year operational |
| `emili-innovation-farms.md` | S1 | V0 | L2 | T2 | Manitoba applied research; multi-year operational |
| `croptimistic-swat-cam.md` | S1 | V0 | L2 | T1 | Saskatchewan autonomous in-field; vendor with academic anchor |

### Cooperative / commons / alternative infrastructure

| Unit | S | V | L | T | Summary |
|---|---|---|---|---|---|
| `joindata-netherlands.md` | S3 | V2 | L3 | T3 | 16,000+ members (Feb 2023 case study); third-party case study; decade deployment; institutional pathway |
| `napdc-national-ag-producer-data-cooperative.md` | S0 | V0 | L1 | T1 | Federally-funded framework development; deployment not yet operational |
| `oada-open-ag-data-alliance.md` | S0 | V1 | L3 | T2 | Open-source standards; peer-reviewed; multi-year; modest operational |
| `data-commons-architecture.md` | S0 | V1 | L2 | T2 | Framework; peer-reviewed; multi-year |
| `open-data-ecosystem.md` | S3 | V2 | L3 | T3 | GODAN, CGIAR, USDA Ag Data Commons; third-party case studies; multi-year |
| `indigenous-data-sovereignty.md` | S0 | V2 | L3 | T2 | CARE Principles / IEEE 2890-2025; multi-region; institutional; operational anchors modest |
| `cornell-atkinson-idsov-cluster.md` | S0 | V1 | L1 | T1 | US academic IDSov anchor; peer-reviewed; ~3-year |
| `mozilla-state-of-open-source-ai-2026.md` | S0 | V2 | L1 | T2 | Mozilla report July 14 2026; third-party; one-off report cadence |
| `open-source-in-agrifood-framework.md` | S0 | V1 | L1 | T2 | Cross-cutting framework; peer-reviewed references |
| `la-ferme-digitale-gaia.md` | S0 | V1 | L2 | T2 | French industry association + GAIA; peer-reviewed; multi-year |
| `pillaud-french-agritech-ecosystem.md` | S0 | V2 | L2 | T2 | French cooperative / commons ecosystem; INRAE third-party |
| `farm-data-ownership-critical.md` | (n/a — analytical) | V2 | L2 | (n/a) | Critical-analytical; not a deployment |
| `dark-data-agrifood.md` | (n/a — analytical) | V1 | L2 | (n/a) | Critical-analytical |
| `proprietary-farm-data.md` | (n/a — analytical) | V2 | L2 | (n/a) | Critical-analytical |
| `carolan-colorado-state-critical.md` | (n/a — analytical) | V2 | L2 | (n/a) | Critical-sociological |
| `neethirajan-dalhousie-ecosystem.md` | S0 | V2 | L2 | T2 | Dalhousie ecosystem; third-party institutional references |
| `extension-foundation-2026-national-ai-report.md` | S1 | V2 | L1 | T2 | ExtensionBot + MERLIN; third-party assessment; one-off report |
| `usda-fy25-26-ai-strategy.md` | (n/a — strategy) | V2 | L2 | T2 | Federal strategy; third-party referenced |
| `china-agricultural-import-signal.md` | (n/a — statistic) | V2 | L2 | (n/a) | USDA + third-party import projections |
| `china-deepening-scan-rural-revitalization.md` | (n/a — policy) | V2 | L2 | (n/a) | China state policy; third-party |
| `canadian-retail-ai-pattern.md` | S2 | V1 | L2 | T2 | Canadian retail; multi-year |
| `canadian-food-waste-ai-landscape.md` | S1 | V0 | L1 | T1 | Canadian food-waste AI; vendor-reported; piloting |
| `aiva-network.md` | S2 | V0 | L2 | T2 | Canadian farmer-centric AI validation; 235,000 acres |
| `fcc-canada-ai-adoption.md` | (n/a — statistic) | V2 | L2 | (n/a) | FCC / Statistics Canada / Deloitte; third-party institutional |
| `fcc-ecosystem-not-technology.md` | (n/a — analysis) | V2 | L2 | (n/a) | FCC analysis |
| `greater-montreal-agtech-cluster.md` | S2 | V1 | L2 | T2 | Montréal agtech cluster; multi-year; documented |
| `root-ai.md` | S1 | V2 | L1 | T2 | FCC Root AI generative AI; third-party; July 2026 launch |
| `mozilla-state-of-open-source-ai-2026.md` | S0 | V2 | L1 | T2 | Mozilla report |

### Summary observations

**1. The high-scale / low-verification pattern is real and structural.** 9 of 22 named-scale vendor units score S3 or S4 paired with V0. This is the canonical vendor-figures-without-independent-audit pattern that the field guide's freshness rules and gap indexes G-015 / G-020 / G-033 have been tracking. The framework makes this pattern visible at the corpus level rather than case-by-case.

**Concrete examples of the V0 / vendor-reported pattern (worth naming in talks):**
- **DJI Agriculture** (`units/dji-agriculture-global-export.md`): 400,000 drones, 980M acres, 100+ countries — vendor-reported from DJI Annual Report. The unit itself flags: *"400,000 / 980M acres / 100+ countries figures are vendor-reported. Independent verification limited."* The 222M tons water saved and 30.87M tons CO2 reduced figures are explicitly vendor-reported and flagged for verification (G-033).
- **Bayer Climate FieldView** (`units/bayer-climate-fieldview.md`): 250M subscribed acres (Bayer release). Vendor-reported; the unit's own critical-context section names this.
- **XAG** (`units/xag-china-drone-leader.md`): 10M+ farmers. Vendor-reported.
- **Agrosmart** (`units/agrosmart-brazil.md`): 100,000 farmers, 60% water reduction claim. Vendor-reported; verification gap is G-015.
- **Lely Astronaut** (`units/lely-astronaut.md`): 50,000 units across 50 countries. Vendor-reported; Lely is a multi-decade equipment-maker so the figure is plausible but not independently audited.
- **Taranis** (`units/taranis-aerial-imagery.md`): multi-continent scale. Vendor-reported.
- **Indigo Ag** (`units/indigo-ag.md`): boom-bust pattern makes the unit's *current* scale modest. The unit is honest about this; the V1 score reflects that the boom-bust *itself* is well-documented (Agriculture Dive, Farm Progress, Memphis Business Journal, AgTech Dive).

**2. The research-stage-without-translation pattern dominates academic units.** All 5 USDA-NIFA AI Institutes plus 4 other academic units score T1 or T2 with documented translation gaps. The Extension Foundation 2026 Report (T2, workforce-readiness-as-limit) is the substantive practitioner-side acknowledgment of this pattern.

**3. The cooperative / commons cluster sits at the structural middle.** JoinData is the only unit scoring S3+ with V2 verification (third-party case study) and T3 translation — *mature cooperative infrastructure*. NAPDC is S0 / T1 — the same conceptual space, but pre-deployment.

**4. Longevity is where Indigo Ag stands out negatively.** L1 in a vendor with $1.6B raised and major restructuring is a substantive finding. Other units scoring L1 are predominantly research-stage (Cornell Atkinson IDSov, AI-CLIMATE) — that's expected, not concerning.

**5. Translation is the dimension where the academic / practitioner gap is most visible.** 6 academic units score T1; 5 score T2; 1 (INRAE) scores T2; none score T3. By contrast, vendor units cluster at T2-T4. The framework makes the research-to-deployment gap structurally visible.

---

## What this framework is NOT

- **Not a replacement for `activity-status`.** The v4 tag is a coarse single-value summary. The framework is the multi-dimension evaluation. Both should coexist.
- **Not a vendor-evaluation tool.** The framework is for the field guide's own maturity assessment, not for procurement or rating decisions.
- **Not a research-productivity assessment.** Translation (T) measures research-to-deployment pathway, not research output quantity.
- **Not a vendor-comparison leaderboard.** Each unit's grade reflects the unit's claim, not a relative ranking against other vendors.

---

## How to use this framework

**When writing a new unit:**
1. After the unit's `Content` section, add a `## Maturity assessment` section with the four grades (S/V/L/T) and a one-paragraph justification.
2. If the deployment's grade changes meaningfully (e.g. from S2 to S3 with documented scale increase), update the unit and bump `last-verified`.
3. For pure analytical / critical / framework units (where `activity-status: not applicable`), skip the maturity assessment and use `(n/a — analytical)` etc. as in the table above.

**When reading the corpus:**
1. Filter by maturity grade: e.g. "show me vendor units with V2 or higher" surfaces deployments with substantively verified scale claims.
2. Filter by translation grade: "show me academic units with T3 or higher" surfaces research-stage work that has documented operational adoption pathways.
3. Pair dimensions: "S3+ AND V2+" surfaces the rare mature, verified deployments.

**When assembling a talk:**
1. Lead with units that score high on multiple dimensions — they are the substantive anchor points.
2. Use low-translation academic units as *examples of research-stage work* and low-verification vendor units as *examples of claims that need independent verification*.
3. Avoid claiming scale without naming the verification level.

**When responding to vendor claims in talks:**
1. Quote the figure with the verification level (e.g. *"DJI reports 400,000 drones across 100+ countries; this is vendor-reported, not independently audited"*).
2. Use the gap indexes (G-015, G-020, G-033) to anchor the verification-gap discussion.

---

## What this framework enables

1. **Vendor-figure hygiene at the corpus level.** The framework makes the V0 / V2 / V3 distinction visible per unit. Talks that quote vendor figures can pair the figure with the verification level.
2. **Honest research-to-deployment assessment.** Academic units can be assessed on Translation without claiming operational deployment they don't have.
3. **Substantive cross-corpus comparison.** JoinData vs. NAPDC vs. academic translation arms — same conceptual space, different maturity profiles.
4. **Pilot vs scale differentiation.** Vendor pilot announcements can be flagged as S1 rather than S3.
5. **Longevity as a maturity signal.** Indigo Ag's L1 vs. Climate FieldView's L4 is a substantive difference that the v4 schema's `deployed` collapses.

---

## What this framework surfaces for future cycles

**G-050 (new — independent verification of vendor-reported agrifood AI scale claims).** The V0/V1/V2/V3 distinction in this framework surfaces that 9+ units have V0 vendor-reported scale claims without independent verification. Per memory hygiene, this is exactly the kind of pattern the field guide should track.

**G-051 (new — research-to-deployment pathway documentation for academic agrifood AI).** The T1/T2/T3 distinction in this framework surfaces that the academic agrifood AI cluster has documented translation gaps. The Extension Foundation 2026 Report (workforce readiness as limit) is the substantive practitioner-side acknowledgment.

**G-052 (new — longevity / generational durability of vendor-led agrifood AI deployments).** The L1/L2/L3 distinction surfaces Indigo Ag's L1 as an outlier; broader generational durability is a substantive question worth tracking.

**C-041 (new — academic agrifood AI research translates to operational deployment).** Counter: the AI Institutes (T1-T2), the research-to-deployment gap is structurally modest. Worth naming honestly in any talk about academic agrifood AI.

**C-042 (new — vendor-reported agrifood AI scale figures are reliable).** Counter: 9+ vendor units score V0 with no independent audit. Per memory hygiene, this is the structural pattern the field guide should surface.

---

## Links

- gaps: G-046 (academic-to-deployment translation gap — directly addressed by Dimension 4 Translation), G-049 (Cooperative Extension AI tool maturity — directly addressed), G-050 / G-051 / G-052 (new — surfaced by this framework)
- contested-claims: C-041 / C-042 (new — surfaced by this framework)
- related-units: dji-agriculture-global-export.md, lely-astronaut.md, bayer-climate-fieldview.md, xag-china-drone-leader.md, john-deere-see-and-spray.md, indigo-ag.md, agaid-wsu-institute.md, aiira-iowa-state-institute.md, joindata-netherlands.md, napdc-national-ag-producer-data-cooperative.md, extension-foundation-2026-national-ai-report.md, agrosmart-brazil.md, proprietary-farm-data.md, dark-data-agrifood.md, carolan-colorado-state-critical.md, indigenous-data-sovereignty.md, root-ai.md, usda-fy25-26-ai-strategy.md
- sovereignty-flags: implicit — verification and translation dimensions engage substantively with vendor-figure hygiene

## Freshness

- last-verified: 2026-07
- last-regionally-scanned: 2026-07
- sources (for methodology; the framework itself is a methodology unit, not a content claim):
  - Field guide corpus: 60+ units across `units/`. Maturity grades drawn from each unit's claims, sources, and freshness dates.
  - Taxonomy v4 (`taxonomy/v4.md`): activity-status tag and its limitations
  - Memory hygiene: vendor-figure hygiene discipline (vendor-reported figures circulate without independent verification)
  - G-015 / G-020 / G-033: existing gap-index anchors for vendor-figure verification
  - G-046 / G-049: existing gap-index anchors for research-to-deployment and Extension tool maturity