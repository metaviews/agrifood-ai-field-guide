# Agrifood AI Field Guide

A knowledge base and presentation framework for public education on artificial intelligence across the agrifood sector.

**Start here:** [VISION.md](VISION.md) — the framing, audience, stance, taxonomy, freshness rules, and positioning relative to existing work. [ROADMAP.md](ROADMAP.md) — workstream state, milestones, and open decisions.

## Layout

- `VISION.md` — the project's framing and operating principles
- `ROADMAP.md` — workstream state table, milestones (Done / Now / Next / Later), open decisions
- `scans/` — environmental scan outputs (37 scan files through September 2026)
- `scouts/` — coverage audits and pre-scan reconnaissance (7 scouts; latest: the October 2026 ducksize field-robotics whole-site audit)
- `taxonomy/v6.md` — current taxonomy (sixth iteration; adds the `unit-kind` and `governance-level` tags, the *agentic systems / harness layer* technique value and the *state capacity and visibility* purpose value, and machine-enforced vocabularies). `taxonomy/v5.md`, the `v5.1.md` region-normalization errata, and `v1.md..v4.md` retained as change-history anchors.
- `scripts/` — stdlib-only corpus tooling: `build_gap_lead_registries.py` (registry regeneration, `--check` for drift) and `validate_frontmatter.py` + `schemas/v6.json` (frontmatter validation against the v6 vocabulary; runs in CI via `.github/workflows/validate-corpus.yml`).
- `units/` — content units (249 entries) — the substrate from which talks are built. Vendor deployments, NA/EU/LAC/Africa/MENA/Asia academic institutes, data cooperatives, IDSov frameworks, critical voices, ecosystem mappings, hyperscaler and EU institutional/regulatory substrate.
- `quotes/` — speaker voices (45 entries across 7 categories)
- `talks/` — talk-assembly methodology: eight working archetypes + cluster-pattern taxonomy. See `talks/README.md` for operating principles.
- `web/` — Astro static site (Layer 3), live at `agrifood.metaviews.ca`. Content collections share the same `.md` sources as the repo; scans and READMEs are corpus-internal and not routed.
- `METHODS.md` — corpus-build methodology: 15 named methods (environmental scan, region-deepening, follow-on, substrate, two-phase, ecosystem mapping, cluster-pattern analysis, comparative scan, vendor-report hygiene, critical-voice surfacing, quote fishing, contested-claim tracking, negative-finding tolerance, gap + lead surfacing, Pass-2 sanity check)
- `GAPS.md` — corpus-wide gap registry (462 G-NNN IDs; regenerated from the corpus, not hand-edited)
- `LEADS.md` — corpus-wide lead registry (50 leads: 27 realized, 15 open, 8 cluster-pattern candidates; regenerated from the corpus, not hand-edited)
- `LICENSE` — CC BY 4.0 for content
- `NOTICE` — MIT for code

## Status

Substantively mature. Layer 1 (content library: units + scans + scouts + quotes) and Layer 2 (methodology + templates + eight archetypes) are well populated; Layer 3 (web generation) is live at `agrifood.metaviews.ca` and current through the November 2026 pass; Layer 4 (deck-generation tooling per VISION.md architecture) is documented but not built.

Recent movement: the September 2026 EU architecture and China cycles added 26 units; the October 2026 refresh pass closed two landed verification triggers and repaired registry integrity; the October 2026 ducksize scout audited field-robotics coverage against a practitioner directory (scouting-only, with named follow-ups); the November 2026 refresh-and-discovery pass refreshed 14 units in place against landed triggers (EU AI Act enforcement, EN 18286:2026, EDIC for Agri-Food, the 15th FYP agriculture plan) and added 3 units.

Presentation-form consolidation landed 15 November 2026: `talks/eu-china-cycles-2026-09.md` folds the EU architecture cycle, the China primary-document cycle and the November refresh into talk-ready findings, with archetype-level integration applied across 01/02/03/06/07/08 (06 deepest). The same pass landed `units/eu-agrifood-ai-decision-calendar.md` — the tracked 2026-2028 EU decision calendar closing the time-sensitive G-436 lead. See `ROADMAP.md` for the full workstream state and the open decisions.

The corpus is structural: scans synthesize research, units anchor specific actor-networks or deployments, quotes capture speaker voices, talks compose units into presentations. `GAPS.md` and `LEADS.md` make the corpus's gap and lead tracking queryable.

## Contributing

Open issues, suggestions, and pointers to existing work welcome. See `VISION.md` for what this project is and isn't. When proposing new gaps or leads, follow the formatting conventions documented in `GAPS.md` and `LEADS.md` so the registries stay in sync.
