# Roadmap

Created 15 November 2026 (health review). This file consolidates *where each workstream stands and what moves next*; it does not restate framing (`VISION.md`), method (`METHODS.md`, `talks/README.md`), or the registries (`GAPS.md`, `LEADS.md`). Those are authoritative for their content; this file is authoritative only for sequencing.

The project: a maintainable, openly licensed knowledge base on AI across the whole agrifood chain, from which public-education talks can be assembled for varied audiences, with a live web rendering and (eventually) deck-generation tooling. Four layers, built bottom-up: content library, presentation methodology, web, decks.

## Workstream state

| Workstream | State | Authoritative doc | Last moved |
|---|---|---|---|
| Layer 1 — corpus (units / scans / scouts / quotes) | Mature; 248 units, 37 scans, 45 quotes, 7 scouts | `VISION.md` §Status | 8 Nov 2026 — refresh-and-discovery pass: 14 units refreshed against landed triggers, 3 new units |
| Registries (gaps / leads) | Current; 462 G-NNN, 50 leads (26 realized / 16 open / 8 candidates). Regeneration script re-vendored as `scripts/build_gap_lead_registries.py` (15 Nov 2026, MIT); both registries regenerated with it | `GAPS.md`, `LEADS.md` | 15 Nov 2026 (script re-vendored; registries regenerated) |
| Layer 2 — presentation methodology | Current: 8 archetypes; the September EU + China cycles and the November pass were integrated at archetype level 15 Nov 2026 via `talks/eu-china-cycles-2026-09.md` (06 deepest; 01/02/03/07/08 touched). A dedicated EU-architecture spine remains an open decision | `talks/README.md`, `talks/index.md`, `talks/eu-china-cycles-2026-09.md` | 15 Nov 2026 (EU/China consolidation landed) |
| Layer 3 — web | Live and current at `agrifood.metaviews.ca`; deployed outside CI (workflow only builds on `web/**` changes). Local `web/node_modules` absent — pre-deploy build check requires `npm install` first | `VISION.md` §Status Layer 3 | 8 Nov 2026 (November units verified live on 15 Nov) |
| Layer 4 — deck generation | Documented, not started; gated on Layer 2 settling into repeatable assembly patterns | `VISION.md` §Layers | — |
| Scout follow-ups (ducksize, Oct 2026) | §4.1 Korechi fixed and §4.2 WerkR recorded (15 Nov 2026, see scout addendum); §4.3–§4.8 open per scout §6 | `scouts/2026-10-ducksize-field-robotics-scout.md` §4, §6 + addendum | 15 Nov 2026 (Korechi/Werkr dispositions landed) |
| Freshness / verification triggers | No landed-and-unhandled triggers as of 15 Nov 2026; next dated trigger: AI Index 2027 (expected Q1 2027) on the quantitative-panel unit | unit `trigger:` lines | 8 Nov 2026 (14 refreshed in place) |

## Milestones

### Done
- Fourteen regional/domain deepening cycles; AI-and-labour corpus completed and landed as archetype 08 (July 2026).
- EU architecture cycle (12 units) and China cycle (14 units) with consolidating scans (September 2026).
- First time-driven refresh pass (7 October 2026); ducksize coverage-audit scout (8 October 2026); refresh-and-discovery pass (8 November 2026).
- Web live on custom domain with Pagefind search; August frontmatter deployment hazard fixed and canaried.
- Registry script re-vendored as `scripts/build_gap_lead_registries.py`; GAPS/LEADS regenerated (15 November 2026 — fixed the stale 453 header total against 462 entries and the lead counts; the November pass had hand-edited both registries).
- Ducksize scout §4.1/§4.2 closed (15 November 2026): Korechi RoamIO deployment thread added to `units/haggerty-creek-ltd.md` (first RoamIO-HCT customer, January 2021; Baresich augmentation-not-substitution quotes); "WerkR" identified as Werkr Tractors = Fulcrum Works Inc., the existing CAAIN §1.7 lead (Stanley Baer, CEO — verified on caain.ca), recorded in `units/caain-portfolio-canada.md` with the ducksize-vs-vendor spec discrepancy.
- **Presentation-form consolidation of the September–November material (15 November 2026):** `talks/eu-china-cycles-2026-09.md` consolidates the EU architecture cycle, the China primary-document cycle and the November refresh into 17 talk-ready findings (EU-1..EU-8, CN-1..CN-9) with the cross-block synthesis; archetype-level integration applied to 06 (deepest: cluster-table rows, segments 3.2/3.3/4, three new Q&A handles, G-436 freshness triggers) plus 01/02/03/07/08; index and README statuses updated.

### Now (the named current priority)
1. **EU decision-calendar lead (`eu-agrifood-ai-decision-calendar.md`, G-436)** — the most time-sensitive open lead: the deadline cluster runs from the Apply AI Summit (17 November 2026 — two days after the consolidation landed; its agrifood session should be captured) through the gigafactory Lots (3 December 2026 / 4 February 2027), Buyers' Club first purchases (December 2026) and the Apply AI platform (Q1 2027). A tracker started after these dates land loses its point.

### Next
- **Open leads, by cluster** (`LEADS.md`): the 4 EU leads (the `eu-agrifood-ai-decision-calendar` is time-sensitive — a 2026–2028 tracker loses value the later it starts); the 8 AI-and-labour leads (LAC farmworker, SSA smallholder labour, H-2A data, US federal labour substrate, Canadian regulatory-absence cycle, FCC labour framework, Neethirajan positioning, back-of-house quantification); the 4 SSA leads (AU Continental AI Strategy, AIEP, TAPAS/IRRI, SIKIA/Artemis).
- **Candidate archetypes** named in `talks/README.md`: Indigenous-led deployment-of-record (Two-Eyed Seeing) spine; AI maturity-assessment spine; AI in food processing spine; cluster-pattern-as-archetype.
- **Cluster-pattern candidate** *labour-substitution-via-state-cluster*: confirm or retire per `talks/cluster-pattern-taxonomy.md` rules (the September China material is fresh evidence).

### Later
- Layer 4 deck generation (after Layer 2 patterns settle; the eight archetypes are the worked-example set).
- European field-robot fleet: the ducksize scout explicitly advises **against** a 24-machine vendor cycle; if the field-level absence ("which machines exist in Europe") ever blocks a synthesis, one landscape unit — not per-machine units — is the shape.
- Taxonomy v6, if the maturity cross-cutting tags or new cycle shapes demand it.

## Open decisions (Jesse's)
1. **Strip cropping × robots** (ducksize §4.6): the one scout theme landing on an existing corpus interest (agroecology). Agroecology-facing cycle, or leave parked?
2. **EU-architecture spine**: the consolidation recommendation (15 Nov 2026, `talks/eu-china-cycles-2026-09.md` Part IV) is to defer a dedicated archetype 09 until an EU-policy audience books or the G-436 decision-calendar unit lands; archetype 06 + the consolidation doc make the block assemblable now. Confirm or override.
3. **Practitioner five-axis robot comparison framework** (ducksize §4.7): borrow into `METHODS.md` vocabulary now, or only when a comparison is actually built?
4. **Sequencing against outside demand**: FCC winter-series talks and the book share this substrate — decide whether presentation-form work here should be timed to feed a specific booked talk.

## Maintenance rules
- Update the workstream table's *State* and *Last moved* columns at the end of every cycle/pass; keep `VISION.md` §Status as the narrative record and this file as the sequencing record — they should never disagree on counts (check both when regenerating registries).
- Dated cycle-talk files are snapshots; never overwrite (see `VISION.md` §Honesty disciplines).
- Any commit touching `units/`, `quotes/`, `talks/` (except READMEs, which the collections exclude) or `scans/` requires a verified `web` build before push; redeploy, then confirm the new content is actually live on `agrifood.metaviews.ca` (the August 2026 hazard: a failed build silently leaves the old deployment up).
- Registries are regenerated by `scripts/build_gap_lead_registries.py` only, never hand-edited; run it with `--check` after any cycle that touches units/ or scans/ to detect drift.
