# Methodology and Templates — Talks Layer

**Status.** First iteration. Layer 2 of the project architecture defined in `VISION.md`. Layer 1 (content library: scans, taxonomy, units, quotes) is the substrate; this directory is the *repeatable ways to assemble that substrate into talks for different audiences, durations, and depth levels.*

**Why this exists.** A knowledge base only earns its keep if it can be turned into talks. Without a methodology layer, the units accumulate but the talks take longer to build than they should; the same analytical move gets rediscovered every time. The methodology layer is the *shared practice* — once it's documented, every talk is faster than the last.

## What this directory contains.
- This README: operating principles, how to use the archetypes, when to deviate.
- `talks/cluster-pattern-taxonomy.md` — the canonical cluster-pattern vocabulary surfaced across six regional deepening cycles; this is the working analytical-lens doc that archetype 06 draws on.
- `talks/archetypes/` — six named, complete run-of-shows. Each is a worked example, not a template.
- `talks/index.md` — quick-reference table of the six archetypes by audience, duration, and analytical spine.

## Operating principles

### 1. The library is the substrate. The presenter is the translator.

The KB does not write talks. It holds the material. The presenter assembles, sequences, and translates for a specific audience on a specific day. The archetypes in this directory are *examples of the assembly work* — they are not turn-key decks and they are not the only valid assemblies.

A talk is good when it is *honest about the field's uncertainty* and *useful to the audience in the room*. The first rule of methodology is: don't ship a talk you wouldn't defend in front of a critical agrifood audience.

### 2. The five axes of variation

Talks built from this library vary along five axes. Every archetype names its position on each:

| Axis | Possible values (this iteration) |
|---|---|
| **Audience** | farmer co-op / mixed public / students / policy & leadership / academic |
| **Duration** | 20 min (lunch-and-learn) / 45 min (standard) / 60+ min (deep-dive) |
| **Analytical spine** | vendor-sweep / data-sovereignty / adoption-diagnosis / cooperative-alternative / critical-lens |
| **Region emphasis** | Canada / EU / Global / East-Asia / mixed |
| **Depth** | literate (no jargon) / working (some vocabulary) / specialist (full taxonomy fluency) |

These are orthogonal. The same spine (vendor-sweep) can serve a 20-min student talk or a 60-min academic session; what changes is depth and which units get foregrounded.

### 3. Spines are the load-bearing decision

The most important choice when building a talk from this library is *the spine*. The spine is the single analytical argument the talk is built around. Without a spine, you have a content dump.

The six spines currently documented in `talks/archetypes/`:
- **Vendor-sweep** — what's actually deployed, by whom, at what scale, with what claims
- **Data-sovereignty** — who owns / controls / benefits from the data underlying AI deployment
- **Adoption-diagnosis** — why is X region lagging in AI adoption, and what does the data say
- **Cooperative-alternative** — the farmer-cooperative model as a real, deployed alternative
- **Critical-lens** — the structural critique of agrifood AI, centred on Indigenous data sovereignty and food sovereignty
- **Regional-cluster-comparison (added July 2026)** — meta-pattern archetype; how countries operationalise agrifood AI differently through cluster patterns; nine regional contexts covered (NA / EU / China / India / Japan / Korea / LAC / MENA / EU Mediterranean-Spain); draws on the canonical cluster-pattern vocabulary in `talks/cluster-pattern-taxonomy.md`

You can mix spines but you cannot dodge the choice. A talk that mixes data-sovereignty with vendor-sweep needs to commit to which one is the *frame* and which one is *evidence inside that frame*.

**New spines as the corpus supports them.** The Spain + North Africa and Spanish cooperatives cycles (July 2026) surfaced two additional analytical moves that are not yet load-bearing spines but are candidates: (a) *cooperative-statutory-vs-corporate-statutory context framing* (Mondragón vs. Bayer-type parallel); (b) *state-driven vs. state-strategy vs. state-corporate substrate distinction* (Argentine SENASA vs. UAE ADAFSA vs. Morocco Al Moutmir). When the corpus supports either as a spine, a new archetype gets drafted. Same with the cross-cycle "cluster-with-three-structures as cross-region cluster pattern" observation: when it warrants an archetype, an archetype gets drafted.

You can mix spines but you cannot dodge the choice. A talk that mixes data-sovereignty with vendor-sweep needs to commit to which one is the *frame* and which one is *evidence inside that frame*.

### 4. Depth is not duration

A 20-min talk is not a "shortened" 60-min talk. It is a different talk with a tighter spine. The depth axis (literate / working / specialist) controls vocabulary, framing, and which cross-cutting tags get surfaced.

Rule of thumb:
- **Literate (mixed public, no agritech background)**: avoid taxonomy jargon; use concrete deployments as the entry point; foreground the *who benefits* question.
- **Working (farmer co-op, students, journalists)**: introduce 3-5 taxonomy terms, defined in context; foreground concrete Canadian / regional examples; show the data sovereignty question concretely.
- **Specialist (academic, policy, sector insiders)**: full taxonomy fluency; engage with contested claims and gaps explicitly; compare across regions.

### 5. Sources on the slide, not just in the notes

Every named claim, statistic, or quote gets source attribution visible to the audience — at minimum the publication, ideally a URL. The field guide's stance is literacy-as-empowerment, and literacy without sources is decoration.

### 6. Contested claims are foregrounded, not buried

The library carries a `contested-claims` (`C-NNN`) index. When a talk covers a contested claim — e.g. "AI closes smallholder productivity gap" (C-011) or "Data cooperatives are a global alternative to vendor capture" (C-029) — the contestation goes on the slide. Naming the disagreement is more honest than picking a side silently.

### 7. Gaps are first-class objects

The library carries a `gaps` (`G-NNN`) index. If a talk would benefit from a deployment example in a category the library doesn't cover, name the gap to the audience. "We don't yet have a Latin American JoinData equivalent in the library" is more honest than papering over.

## How to use an archetype

1. **Start with audience and duration.** These are usually given by the booking.
2. **Pick the spine that fits.** Cross-reference `talks/index.md`.
3. **Read the archetype from top to bottom.** Treat it as a worked example, not a script.
4. **Substitute regionally.** The archetype names units; if your region emphasis differs, find a parallel unit (the taxonomy positions are documented in `taxonomy/v4.md`).
5. **Add 1-2 anchor quotes per talk.** The library has 24 quotes; pick ones whose speaker is geographically and politically credible for your audience. Five producer voices currently anchor concrete testimonials.
6. **Re-verify freshness.** Every named unit has a `last-verified` date. If a unit is past its refresh window (annual for facts/stats/claims/examples; biennial for frameworks), the talk should reflect that.

## When to deviate from the archetypes

Deviate when:
- A regional context is dominant and the archetype's region emphasis is wrong (e.g. a talk in Beijing needs the East-Asia spine, not Canada).
- The audience is unusual (a primary-school class, a national broadcaster, a parliamentary committee).
- The field has moved since the archetype was written (a major vendor collapse, a new cooperative launch).

Document deviations. When you deviate substantively, add notes — a third-tier directory (`talks/worked/`) for actual delivered talks, with date, audience, and deviations from archetype noted.

## What this methodology layer is not

- Not a slide-deck template. The library is markdown; the archetypes are markdown. Tools that produce slides from this are a Layer 4 concern (`VISION.md`).
- Not a presentation-skills manual. The focus is assembly of content, not delivery technique.
- Not exhaustive. Six archetypes is a working set, not a complete library. New spines (e.g. *AI and labour*, *AI and the climate transition*) should be added when the corpus supports them.

## Status and freshness

The six archetypes are first iteration (July 2026), with archetype 06 added during the Japan+Korea cycle (mid-July 2026) and the cooperative-cluster-pattern refinement (Mondragón / COVAP / cluster-with-three-structures cross-region pattern) integrated after the Spanish cooperatives cycle (July 19 2026). The six archetypes exercise the full taxonomy (sector positions, AI classes, purposes, all fifteen v5 cross-cutting tags) and deploy representative units from each regional cycle. They are *the working example set*, not the only valid assemblies.

**Cluster-pattern vocabulary.** Across six regional deepening cycles (LAC deepening; Brazil beef + Chile-Canada; Argentine beef + Brazilian seed; MENA + Lebanon; Spain + North Africa; Spanish cooperatives) the cluster-pattern observation has become a load-bearing analytical lens. The canonical cluster-pattern vocabulary is in `talks/cluster-pattern-taxonomy.md` and archetype 06 draws on it. Three observations from the cluster-pattern taxonomy:
- (a) **Cluster patterns are layered-mix, not single-pattern** — observed across LAC, MENA, and EU-cluster-pattern.
- (b) **Cluster-with-three-structures is a cross-region pattern** — observed in Brazilian seed AI (multinational-corporate-pipelined Tier-2) and Spanish cooperative AI (Mondragón-federation-institutional Tier-2), with structurally-distinct Tier-2 substrates.
- (c) **Cluster-with-state-substrate as substantive pattern** distinct from cluster-with-state-strategy; surfaced in Argentine beef AI (SENASA + SIGSA + World Bank financing) and partially Morocco Al Moutmir (OCP Group's state-corporate substrate).

When the corpus grows materially (new regional cycles, new quote categories, new cooperatives), the methodology layer refreshes. The next iteration candidates: a *AI and labour* spine, a *AI in food processing* spine, a *cooperative-statutory-vs-corporate-statutory context* spine, and a *cluster-pattern-as-archetype* archetype (currently the cluster-pattern observation is hosted as a cross-cutting analytical lens rather than its own archetype). Each candidate emerges when the corpus has units that load-bearingly demonstrate the pattern.

## Files
- `talks/README.md` (this file)
- `talks/index.md` — quick-reference table of the six archetypes
- `talks/cluster-pattern-taxonomy.md` — canonical cluster-pattern vocabulary surfaced across six regional cycles
- `talks/archetypes/01-vendor-sweep-primer.md`
- `talks/archetypes/02-canadian-data-sovereignty.md`
- `talks/archetypes/03-canadian-adoption-diagnosis.md`
- `talks/archetypes/04-cooperative-alternative.md`
- `talks/archetypes/05-critical-lens-indigenous-sovereignty.md`
- `talks/archetypes/06-regional-cluster-comparison.md`