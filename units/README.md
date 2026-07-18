# Content units

A unit is a small, self-contained piece of knowledge positioned in the taxonomy. Units are the substrate from which talks are assembled.

## Why units, not a monolithic document

A knowledge base for presentation-building needs to be *combinable*. A unit carries enough metadata to be found by taxonomy position (sector × AI class × purpose), enough freshness data to be trusted, and enough linking to related gaps and contested claims to be honest about what's known and contested.

Units are designed to be small enough to fit in a slide, large enough to anchor a paragraph in a talk. They are not mini-essays and they are not single sentences.

## Anatomy of a unit

Every unit has the following structure. Fields are mandatory unless noted.

```
ID
Title (one line)
Three-axis position:
  - sector-position: ...
  - ai-technique-class: ...
  - purpose: ...
Cross-cutting tags:
  - claim-type: fact | statistic | claim | framework | example
  - activity-status: deployed | piloting | research | announced | discontinued
  - critical-voice: food-sovereignty | indigenous-data-sovereignty | right-to-repair | digital-equity
  - capital-intensity: smallholder | industrial | research-scale
  - language-literacy-profile: voice-first | low-literacy | standard-smartphone
  - policy-instrument: regulatory | fiscal | strategy
  - region: ...
  - actor: ...
Content (the unit itself — claim, statistic, framework, or example with sources)
Links:
  - gaps: G-NNN
  - contested-claims: C-NNN
  - sovereignty-flags: (if applicable)
  - related-units: (if applicable)
Freshness:
  - last-verified: YYYY-MM
  - last-regionally-scanned: YYYY-MM
  - source-list: [...]
```

## What units are not

- Not a database row. Markdown with structured frontmatter-style metadata is the format; no database, no schema migration story.
- Not exhaustive. A unit captures one piece of knowledge; the same actor can have many units.
- Not vendor brochures. Each unit carries sources and links to gaps/contested claims; this is not a marketing surface.
- Not evergreen. Units past their freshness window are flagged, not deleted. Staleness is signal.

## File naming

`units/<id>.md` where `<id>` is a short stable identifier. Suggested format: `units/<actor-or-topic-slug>-<descriptor>.md`. Examples after this revision: `loblaw-chatgpt-pcxpress.md`.

## Filling out the schema for the first unit

The first unit (Loblaw × ChatGPT) deliberately exercises every cross-cutting tag at least once across its three sub-units. This is a schema stress test, not because every unit needs every tag, but because the first unit should reveal which tags earn their place and which get in the way.

If a future unit doesn't need a tag, leave it out. The schema is a *menu*, not a checklist.