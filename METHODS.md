METHODS

A register of the distinct research methods used during cycle work on the
agrifood AI field guide. This is the *methods register* — not the
presenting-side methodology that `talks/README.md` covers. The two are
adjacent but separate:

  - this file: methods used to *build* the corpus
  - talks/README.md: methods used to *assemble* the corpus into talks

A cycle is the unit of work: a research-driven sweep that adds units,
fills gaps, surfaces leads, and refreshes the substrate. Cycles use a
mix of methods in sequence. This file names each method, when it is
load-bearing, and what shape its output takes.

This register is indexical, not prescriptive — when a cycle calls for
something more targeted than an environmental scan, look here for the
named method that fits.

================================================================================
1. ENVIRONMENTAL SCAN (baseline)

What it is: a broad coverage scan across a region, sector, or theme.
Output is a `scans/` document, ~10K-60K words, with section structure
("what it is", "substantive findings", "freshness", "new gaps"…).

When to use:
  - First contact with a region or topic in the corpus
  - Establishing a baseline before deepening
  - Need: comprehensive breadth over depth

Strengths: covers a lot of ground; surfaces many G-NNN gaps and
contested claims at once; produces the cross-tabulation tables that
subsequent cycles inherit as their source-of-truth.

Limitations: depth is shallow by design. Verification depth varies by
source (tier-1 vendor-reported is common). Each anchor unit has its
own depth agenda — the scan's job is to surface candidates, not to
draft them.

Examples in corpus:
  - 2026-07-initial.md (the original baseline)
  - 2026-07-regional.md (regional coverage)
  - 2026-07-regional-industry-na-eu.md (cross-region industry)
  - 2026-07-india-cycle.md (India as standalone)
  - 2026-07-us-academic-research.md (US research infrastructure)

================================================================================
2. REGION-DEEPENING SCAN

What it is: a focused scan revisiting a region after a baseline cycle.
Builds on the prior scan's anchors. Surfaces new units, new gaps, and
cluster-pattern observations. The aim is *to go deeper than the
baseline could*.

When to use:
  - Baseline was broad but thin on a region with substantial activity
  - A new cycle's cluster-pattern framing suggests the region needs its
    own analytical treatment
  - Need: depth on a known region

Strengths: produces cluster-pattern observations (LAC eighth cluster
candidate, Spanish cooperative cluster pattern); structurally distinct
units within a single regional ecosystem.

Limitations: assumes a baseline exists; redundant if the baseline was
already deep.

Examples in corpus:
  - 2026-07-canada-cycle-fcc.md (Canadian deepening)
  - 2026-07-quebec-cycle.md (Quebec within Canada)
  - 2026-07-china-deepening.md (China deepening)
  - 2026-07-lac-deepening.md (LAC deepening; produced the eighth
    cluster-pattern candidate)
  - 2026-07-france-cycle.md (French deepening)
  - 2026-07-spain-north-africa-pillars.md (Spain + North Africa
    pairing as one structural unit)

================================================================================
3. CYCLE FOLLOW-ON (adjacent-territory scan)

What it is: a second scan in immediate succession to the first, but
deliberately *not* a deepening of the first. Covers adjacent
territory that the first cycle could not reach.

Why the distinction matters: a deepening scan refines; a follow-on
scan complements. The cluster-pattern vocabulary (Layer 2 analytical
lens) emerges when adjacent scans surface structurally-distinct
patterns and the corpus can compare them.

When to use:
  - The first cycle surfaced something structural but couldn't close
    the comparison
  - A "Brazil beef AI" scan is followed by "Brazilian seed AI"
    follow-on to enable the cross-deployment comparison
  - "Africa multilateral" scan is followed by "Africa open-source"
    follow-on to close out the African structural story
  - Need: pair-comparison material for cluster-pattern analysis

Strengths: produces cross-cycle structural observations. Builds the
multi-scan evidence base that cluster-pattern analysis requires.

Limitations: redundant if the first scan was already two-phase. Don't
follow-on without a *substantive* reason — the pairing must enable a
comparison the first couldn't.

Examples in corpus:
  - 2026-07-brazil-beef-seed-ai.md → 2026-07-argentine-beef-brazilian-seed-ai.md
    (cross-border cluster pattern: Brazilian seed AI vs Argentine beef AI)
  - 2026-07-sub-saharan-africa-multilateral.md
    → 2026-07-africa-open-source-agrifood.md
    (the two halves of the African structural story)

================================================================================
4. SUBSTRATE SCAN (structural-layer scan)

What it is: a scan that does not surface *actors* but *substrate* —
the structural layer above or around the actors. Examples in the
corpus:

  - regulatory substrate (what rules govern AI deployment)
  - institutional / funder substrate (what money funds it)
  - hyperscaler substrate (what cloud / compute substrate runs it)

When to use:
  - Understanding the structural conditions of agrifood AI
    deployment requires the substrate, not just the actors
  - The cluster-pattern observation needs the substrate to make sense
  - Need: structural framing across many actors

Strengths: produces units that *anchor* the layers above them. The
EU AI Act substrate anchor enables reading vendor deployments and
critical voices against a single rule frame.

Limitations: easily becomes abstract. Each substrate scan must
produce at least one or two *concrete* anchors (e.g. EU AI Act + EU
CRCF certification) to retain grounding.

Examples in corpus:
  - 2026-07-eu-regulatory-substrate.md (regulatory substrate)
  - 2026-07-eu-institutional-funder-substrate.md (funder substrate)
  - 2026-07-hyperscaler-substrate.md (cloud / compute substrate)
  - 2026-07-data-cycle.md (data governance substrate)

================================================================================
5. TWO-PHASE CYCLE: SCOUT + DEEP

What it is: a cycle deliberately split into a *scout phase* (broad
parallel searches across defined tracks) and a *deep phase* (drafting
substantive units conditional on the scout showing substance). The
scout phase is its own documented step with recon tables; the deep
phase only proceeds when the scout shows enough material.

Why the distinction matters: this is the *cycle design pattern* that
prevents over-commitment when a region or topic might be substantively
thin. The MENA scan explicitly tests this pattern as a way to handle
"regions where corpus-discipline requires explicit
negative-finding-tolerance before deciding depth."

When to use:
  - Region or topic has no prior coverage (no baseline)
  - Region may be substantively thin (worth scout before deep)
  - Cycle budget allows for two stages
  - Need: careful negative-finding discipline

Strengths: surfaces gaps *as* a structured output, not as failure.
Negative findings ("scout showed no agrifood-specific critical voice
in MENA; track as G-NNN") are real research output, not absences.

Limitations: slow if the scout shows substance. The two phases must
be useful even when the deep phase doesn't fire — otherwise scout is
a sunk cost.

Examples in corpus:
  - 2026-07-mena-scan.md (the pioneer — six parallel scout tracks,
    then four units drafted in deep phase)
  - 2026-07-spain-north-africa-pillars.md (same pattern: six
    parallel scout tracks, then 4 units + 1 integrating scan)
  - 2026-07-spanish-cooperatives-ai.md (same pattern, six scout
    tracks across cooperative landscape)

================================================================================
6. ECOSYSTEM MAPPING (four-layer actor-network)

What it is: takes a substantive analytical voice (or a specific
institutional actor) and maps its ecosystem across four concentric
layers:
  1. Direct collaborators (co-founders, project leads)
  2. Institutional partners (research institutes, funding bodies)
  3. Industry / vendor counterparts within the ecosystem
  4. Framework positions that hold the ecosystem together

Why the distinction matters: most units are single-actor; ecosystem
maps are *network* units. The four layers force the writer to surface
the institutional infrastructure that makes the voice or actor load-
bearing. Without this discipline, ecosystem units become single-actor
in disguise.

When to use:
  - A substantive analytical voice (researcher, advocate) emerges
    with a corpus-defining set of framings
  - An institutional actor (INRAE, CGIAR, La Ferme Digitale) has
    multiple internal projects worth tracking together
  - The cluster-pattern analysis needs a canonical reference for a
    region's institutional substrate
  - Need: actor-network unit, not single-actor unit

Strengths: produces canonical reference units that other cycles can
cross-reference. Pillaud's French cooperative network, Neethirajan's
Dalhousie ecosystem, and Mozilla Foundation's open-source internet
ecosystem are three examples.

Limitations: requires sustained prior research to anchor. Cannot
be done cold; the writer must already know the voice or actor is
substantive. Use after a cycle has surfaced the voice, not before.

Examples in corpus:
  - units/pillaud-french-agritech-ecosystem.md (La Ferme Digitale +
    GAIA + INRAE + Naïo + Mistral)
  - units/neethirajan-dalhousie-ecosystem.md (Dalhousie +
    Charlebois + MacEachern + AAFC)
  - units/mozilla-foundation-open-source-agrifood-ai.md (Mozilla
    Foundation + Common Voice + Mozilla Data Collective + AfriAI
    + Caucasus + Hurricane Relief)

================================================================================
7. CLUSTER-PATTERN ANALYSIS (cross-region structural observation)

What it is: cycle work that *doesn't* add new units but instead
articulates a structural pattern observed across multiple cycles.
Pattern-candidate observations are recorded in scan tails with the
phrase "n-th cluster pattern candidate" or "tentative…candidate".
Stable patterns graduate into the canonical cluster-pattern taxonomy
in `talks/cluster-pattern-taxonomy.md`.

Why the distinction matters: cluster-pattern analysis is the
corpus's main analytical-lens method — it converts raw observations
into load-bearing structural framings that talks can use as spines.
The vocabulary has produced thirteen named patterns across six
regional deepening cycles.

When to use:
  - Two or more cycles have surfaced similar structural patterns
  - A regional deepening reveals a candidate pattern not in the
    canonical taxonomy
  - A follow-on scan produces comparative material that lets a
    tentative pattern be tested
  - Need: convert scattered observations into load-bearing analytical
    framings

Strengths: cluster patterns are *load-bearing* for talk construction.
Archetype 06 (regional-cluster-comparison) exists because of this
method. Patterns compound across cycles rather than dissipating.

Limitations: easy to over-name. A new cluster pattern must clear the
"distinguishable from existing patterns by three structural features
at minimum" bar. Eight patterns is the floor; thirteen is the ceiling
in current usage.

Examples in corpus (13+ named patterns):
  - multilateral-institutional convening (LAC; CGIAR)
  - cooperative-governance (Mondragón; Copa-Cogeca)
  - state-vendor hybrid (Alibaba ET Agricultural Brain; OCP Al Moutmir)
  - state-DPI substrate (India Stack)
  - equipment-vendor industrial automation (Deere; CNH; AGCO/PTx)
  - state-anchored cluster programme (QuantiFarm; EU-FARMBOOK)
  - Israeli venture-funded (Taranis + 216 Capital)
  - state-strategy dual-mode (China National Smart Agriculture
    Action Plan; Argentina SENASA)
  - state-corporate + state-strategy hybrid (Morocco Al Moutmir)
  - startup-ecosystem-emerging-expansion (Lebanese; Tunisia startup)
  - cooperative-federation-institutional (Mondragón + COVAP)
  - cross-border cluster pattern (Brazilian seed AI ↔ Argentine beef
    AI; the ninth-cluster-pattern candidate)
  - university-research-led cluster (Northeast US AI Institutes;
    CGIAR + AgriLLM)

================================================================================
8. COMPARATIVE SCAN (cross-region or cross-sector cross-section)

What it is: a cycle explicitly designed to compare two or more
regions / sectors / actors against each other on the same axes.
Output is a structured comparison rather than a sequence of separate
descriptions.

When to use:
  - Talk needs a cross-region structural move ("US vs EU vs China")
  - Cluster-pattern analysis requires a side-by-side observation
  - A regional deepening has surfaced something that deserves
    testing against another region
  - Need: structured comparison as primary output

Strengths: produces talk-ready material. The cluster-pattern
vocabulary is downstream of comparative scans that found the
patterns.

Limitations: requires both sides of the comparison to be substantively
covered. A comparative scan with one thin side becomes a regional
deepening in disguise.

Examples in corpus:
  - 2026-07-regional-industry-na-eu.md (NA industry vs EU industry)
  - 2026-07-brazil-beef-seed-ai.md (Brazil beef vs Brazilian seed AI)
  - 2026-07-argentine-beef-brazilian-seed-ai.md (Argentine beef vs
    Brazilian seed AI)
  - 2026-07-spain-north-africa-pillars.md (Spain vs North Africa)

================================================================================
9. VENDOR-REPORT HYGIENE + INDEPENDENT VERIFICATION

What it is: a *cross-cutting convention* applied during every unit
write. Vendor-reported figures (e.g. "Cropin: 1B acres, 30M
digitized, 7M farmers") are flagged as V0 (vendor-reported) in
critical-context sections until independent verification is
documented. The V0 marker is a corpus convention, not a typo — it
signals "verified only by the vendor's own materials".

The cycle has three verification tiers:
  - tier-1: primary source (vendor published documents, vendor press
    release with named timeframe, named customer case study)
  - tier-2: secondary source (independent trade press, investor
    materials, third-party coverage)
  - tier-3: peer-reviewed / regulatory (academic publication, EU
    regulatory text, regulatory filing)

When to use:
  - Every time a unit cites a number, deployment scale, or
    adoption rate
  - Every time a vendor-claimed claim is referenced in a talk
  - When the corpus's own G-NNN gaps list is populated (many G-NNN
    IDs are verification gaps, not data gaps)

Strengths: prevents vendor-claim-laundering. Talks using V0 figures
should mark them clearly; talks using tier-2 or tier-3 sources can
attribute more confidently.

Limitations: requires the writer to actually check sources. Sloppy
units inherit the vendor framing without knowing it.

Examples in corpus (V0 markers visible in units/quotes):
  - units/cropin-india.md (vendor-figure hygiene section)
  - units/walmart-sparky-ai-shopping-assistant.md (Walmart "50,000
    corporate / 1.6M associate" framing, vendor-reported)
  - units/dark-data-agrifood.md (V0 elsewhere in the corpus)

================================================================================
10. CRITICAL-VOICE SURFACING

What it is: identification of an analytical voice or critical
position that *substantively* engages agrifood AI questions, with
the four-layer ecosystem mapping applied. The criterion is
*substantive contribution*, not citation volume — a PhD candidate's
fieldwork-based essay that does deep primary engagement outranks a
tenured academic's PR piece.

Why the distinction matters: critical voices are the corpus's
"counter-frames" — they are what balance vendor framings and
institutional optimism. Surfacing them as first-class units (not
just citations) means talks can engage them directly rather than
sidelining them.

When to use:
  - A new voice emerges during research with substantive analytical
    engagement
  - A cluster pattern needs its critical counterpart (e.g. Mozilla
    Foundation's open-source internet framing as the alternative to
    corporate concentration)
  - Indigenous Data Sovereignty voices surfaced (CARE Principles,
    WIPO Treaty, IDSov cluster)
  - Need: counter-frames that engage substantively

Strengths: the four-layer ecosystem mapping converts a critical
voice into a load-bearing corpus object (not just a quote). The
analytical positions (Pillaud's "unicorns do not exist",
Neethirajan's "Canada's AI strategy stops at city limits") become
*positions the corpus has*.

Limitations: critical voices from the same cluster tend to overlap;
the corpus must resist duplicating voices in a single talk.

Examples in corpus:
  - units/pillaud-french-agritech-ecosystem.md (La Ferme Digitale)
  - units/neethirajan-dalhousie-ecosystem.md (Dalhousie)
  - units/mozilla-foundation-open-source-agrifood-ai.md (Mozilla)
  - units/sullivan-salinas-valley-specialty-crop-critical.md
    (UC Santa Cruz)
  - units/carolan-colorado-state-critical.md (Colorado State)

================================================================================
11. QUOTE FISHING

What it is: drilling into a specific speaker for quotable lines —
a known-named individual (researcher, executive, advocate) whose
position has gone through their published work, and extracting
*verbatim* or *clearly paraphrased* lines that talks can quote
directly.

When to use:
  - Speaker has published statements (papers, press, podcasts,
    interviews)
  - Lines can be attributed with publication + date
  - The corpus's `quotes/` folder is missing the speaker's coverage
  - Need: an anchor voice for a region or thematic spine

Strengths: talks gain *voice*. Verbatim quotes with proper
attribution are more credible than paraphrased positions, and they
humanize the analytical argument. The Mozilla Foundation quotes
folder is a current anchor.

Limitations: quotes need citation volume OR substantive contribution
to anchor the unit. Citation count without analytical depth fails
corpus hygiene. The opposite (analytical depth without citation
volume, like Sullivan's Just Tech essay) is acceptable when
substantive.

Examples in corpus:
  - The Mozilla Foundation quote corpus (verbatim lines from
    Raffi Krikorian, Mozilla Foundation CTO)
  - The Neethirajan quote pair (`ai-strategy-stops-at-city-limits`
    and `green-ai-cybersecurity` paraphrased positions)

================================================================================
12. CONTESTED-CLAIM TRACKING

What it is: a corpus convention where every analytical position
that the field actually disputes is tracked with a C-NNN ID and
deployed as a first-class object. Talks that engage a contested
claim show the contestation on the slide, not buried in notes.

Why the distinction matters from gaps (G-NNN): gaps are *absences
of evidence*. Contested claims are *disagreements among evidence*.
A vendor-claimed + critical-voice-countered position is contested,
not a gap. Tracking them differently matters because the
talks-side methodology handles them differently: gaps are flagged
("we don't have a Latin American JoinData equivalent in the
library"); contested claims are foregrounded ("this is contested;
here are the two sides").

When to use:
  - Vendor framing vs critical-voice framing disagreement
  - Academic disagreement within a research domain
  - Government / industry / civil-society disagreement on policy
    direction
  - Need: a corpus object that lets talks show the disagreement,
    not paper over it

Strengths: literacy through transparency. Audience gets to see the
field's uncertainty. The C-NNN index (241 IDs) lets a talk pick
the right disagreement for its audience.

Limitations: easier to track at scan time than at unit time.
Units often back-reference scan-surfaced contested claims.

Examples in corpus (themes):
  - C-001: AI will help feed the world (challenged by IPES-Food)
  - C-005: smallholder productivity gap (USDA-scale evidence vs
    Neethirajan Canadian-context)
  - C-008: Canada's existing AI governance covers agrifood AI
    (challenged by Neethirajan's Policy Options piece)
  - C-018: venture capital scales AI ag (challenged by Pillaud's
    "unicorns do not exist")
  - C-029: data cooperatives are a global alternative to vendor
    capture
  - C-049..C-051: vendor-reported ROI / yield improvements
    (across Cargill CarVe, Maple Leaf Foods Braincube, US Foods
    Where's My Truck)

================================================================================
13. NEGATIVE-FINDING TOLERANCE (corpus-discipline move)

What it is: when a cycle's scout shows substantive thinness in a
region or topic, the negative finding *is* the contribution. G-NNN
gaps get named explicitly with "scout showed no
<actor-type> at <evidential-tier>; track as G-NNN".

Why the distinction matters from "absence": thinness-with-discipline
is research output. Filling the cycle with fabricated units to
satisfy the talk-generation machinery is worse than naming the
finding.

When to use:
  - Scout returns substantially less than expected
  - Region has been claimed by industry discourse but evidence is
    not surfaced at any tier
  - Specific actor type (e.g. farmworker-side critical voice,
    MENA agritech AI critical voice) is named in the literature
    but not surfaced in primary sources
  - Need: corpus integrity, not corpus completeness

Strengths: the corpus's integrity is preserved. Talks that
reference the corpus can rely on its gaps being real, not fake.

Limitations: requires the cycle writer to *resist* fabricating
units when scout is thin. Sometimes the cycle should be abandoned
rather than completed poorly.

Examples in corpus:
  - 2026-07-mena-scan.md (critical-voice was not surfaced for MENA
    agrifood AI specifically — track as G-NNN)
  - Many Brazil/LAC scans flagged that direct US-equivalent
    data could not be sourced for Brazilian beef AI at
    equivalent independent-verification tier

================================================================================
14. GAP SURFACING + LEAD SURFACING (corpus-maintenance moves)

What it is: every cycle surfaces G-NNN (gaps) and explicit
"Future units surfaced by this scan" lists (leads). The two are
maintained in `GAPS.md` and `LEADS.md` at repo root.

Why the distinction matters: gaps are *absences*; leads are
*directions*. A regional scan may surface both — a region with
substantive activity (leads) and substantive holes (gaps). Tracking
them separately lets a cycle move on a lead without re-doing gap
analysis.

When to use:
  - End of every cycle, regardless of method
  - Manual trigger when a unit writes a new G-id or references a
    scan-introduced gap
  - Need: maintain corpus-knowledgeability

Strengths: makes the corpus queryable. `LEADS.md` "Open leads"
section names 17 named-target units across the corpus today, ready
for cycle selection.

Limitations: requires disciplined formatting on every cycle
(`**G-NNN (new):** description` in scan tails, `gaps: G-NNN
(short label)` in unit links).

================================================================================
15. PASS-2 SANITY CHECK (post-write fabrication audit)

What it is: a 5–10 minute re-read of a freshly written scan (or
unit) specifically targeting the *exposed surfaces* for fabrication.
The audit is post-write, not pre-write: it catches what slipped past
the writer's confidence, not what the writer flagged proactively.
Output is a "Pass-N sanity-check corrections" section at the scan
tail, with the pattern observed and a "What did not need correction"
bounding subsection.

Why this is a method, not a hygiene step: the substrate v2 scan §13
caught two fabricated proper nouns ("Vincent Klingora" and "Lucia
Stirling") in its own actor-map section; the quantitative panel
§19 caught two more (search-snippet-only figures attributed to
Omotayo 2025 without primary-source verification, plus the same
fabrication class on actor rows). The pattern is reproducible. The
discipline is named; the procedure is five steps:

  1. Identify exposed rows — actor-map tables, bulleted lists
     naming individuals, inline `name + role + organisation`
     triplets, quote entries (especially institutional-leaders +
     producers categories), any sentence attributing a *named*
     claim to a *named* person.
  2. Anchor test — for each name, is the claim about this person
     anchored to a primary source the scan actually read? Acceptable
     anchors: the scan quotes/paraphrases a document that names the
     person; a URL the scan cites contains the name and the
     attributed claim; a prior corpus unit is referenced and contains
     the name and the attributed claim. Unacceptable anchors: "from
     memory of the agritech ecosystem," "plausible name in this
     position," inference from a real org's posture.
  3. Replace or remove — three acceptable outcomes: (a) replace
     with a documented analogue, cite the new source; (b) demote to
     cluster-level claim ("Cluster X's position is paraphrased in
     their published materials"); (c) remove the row, leave a
     next-cycle work note in `GAPS.md` or `LEADS.md`.
  4. Document the audit — add a "Pass-N sanity-check corrections"
     section with: which rows were corrected, what each was replaced
     with, the pattern observed, a "What did not need correction"
     subsection to bound the audit.
  5. Surface in registries — if a fabrication was caught and the
     corrected version relies on a real-but-unverified name, that
     name goes in `LEADS.md` as a verification-pending lead. If no
     real analogue exists, the cell becomes a `GAPS.md` entry.

The Pass-2 audit is most exposed to *missing itself* on confident
fluent output. The rule: do not skip because the write felt
thorough. The substrate v2 §13 case is the canonical worked example
— the writer's own draft produced names that the writer's own
review did not catch; only a structured re-read of the actor-map
rows did.

When to use:
  - At the end of every fresh-pull scan cycle, before commit
  - Before any scan or unit is exposed via the web layer
  - Before any talk assembly that surfaces actor-map rows to a
    live audience
  - After any subagent-delegated writing pass (subagent summaries
    are self-reports; rows added by subagents are the highest-risk
    class — see `delegate_task` tool description)
  - Need: corpus integrity before public-surface exposure

Strengths: catches ~90% of fabrication risk (per the open-source
substrate cycle-pattern reference). Cheap (5–10 min per scan).
Self-tunes — the audit-trail section teaches the next cycle.

Limitations: post-write, not pre-write. The model will still
produce plausible-sounding names from memory; the discipline is the
audit, not prevention at generation. Does not catch every class of
fabrication — focuses on named individuals in actor-map rows;
other claims (vendor figures, contested claims, market-research
aggregator forecasts) are governed by V0–V4 verification and the
H/S-tier framework.

When NOT to use:
  - On synthesis-of-existing scans (where the substantive content
    is being composed from already-anchored sources — the discipline
    applies to fresh-pull substrate and deepening scans)
  - As a substitute for V0–V4 verification on vendor figures (the
    two are complementary, not overlapping)
  - As a retroactive sweep across all 35 existing scans unless a
    scan is going public — the discipline is targeted to the next
    fresh-pull pass

Examples in corpus (canonical worked examples):
  - `scans/2026-07-open-source-ai-substrate-v2.md` §13 — the
    canonical case study. Caught "Vincent Klingora" and "Lucia
    Stirling" in actor-map rows; replaced with anchored analogues
    (Anne Bouverot / Meredith Whittaker); documented pattern
    (fabrications appear in sections depending least on verbatim
    source quotes).
  - `scans/2026-07-open-source-ai-agrifood-quantitative-panel.md`
    §19 — the follow-on cycle. Caught two search-snippet-only
    figures attributed to Omotayo 2025 without primary-source
    verification. The Pass-2 corrections on this scan were *less
    severe* than on the substrate scan (which surfaced two
    fabricated proper nouns); the reason: data-source-anchored
    scans are safer than actor-map-anchored scans.

How to use this methods register

  - pick the cycle's primary method first
  - add complementary methods as needed (most cycles use 2-3 in
    sequence)
  - if a cycle doesn't fit any named method below, propose a new
    one and add it here
  - if a method here doesn't earn its keep over two cycles,
    retire it
