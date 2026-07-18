# Quotes and Paraphrased Positions

**Status.** Captures speaker voices (verbatim quotes + paraphrased positions) for use in talks and presentations.

## Why this directory exists

Talks about AI in agrifood benefit from including diverse voices — producers, institutional leaders, researchers, industry executives — as *handholds* the audience can briefly hear from before the presenter reframes. The field guide has substantial quote material embedded in unit files, but it is not queryable as a separate resource. This directory captures that material as discrete, filterable entries while preserving the inline context where the quote appears.

## What this directory contains

Two kinds of entries:

1. **Verbatim quotes** — exact speaker words, with full citation. Suitable for direct quotation in talks.
2. **Paraphrased positions** — speaker's framing as captured in source material, suitable for *attribution* rather than quotation. The schema distinguishes the two so talk preparers don't accidentally quote a paraphrase.

A small number of entries are **institutional mission statements** (CARE Principles, OADA principles, JoinData mission) — these are not personal quotes but are framed as the institution's position and worth capturing for talks.

## Schema

Each entry is a single markdown file with YAML frontmatter. The frontmatter makes the directory queryable; the body has the verbatim quote or paraphrased position plus context.

### Frontmatter fields

```
---
id: <unique-id>
type: verbatim-quote | paraphrased-position | institutional-mission-statement
speaker: <speaker name(s)>
speaker-role: <role at time of statement>
organization: <organization>
region: <where the speaker is based / statement context>
date: YYYY-MM-DD or YYYY-MM (vintage)
source-url: <canonical URL>
source-publication: <publication name>
units-referenced-in: <comma-separated list of unit IDs>
tags: <comma-separated list — see below>
context-summary: <1-3 sentence summary of what was being discussed>
freshness: current | verify-on-next-cycle | historical
---
```

### Tag values (closed set)

- **sector-position:** inputs | on-farm-open-field | on-farm-protected | animal-production | post-harvest | processing | distribution-retail | consumption | waste-recovery
- **theme:** data-governance | food-sovereignty | indigenous-data-sovereignty | cooperative-commons | ai-deployment | worker-conditions | funding-models | data-rights | right-to-repair | policy-framework | research-framework | vendor-deployment
- **region:** NA-Canada | NA-US | EU-Netherlands | EU-France | EU-other | East-Asia | LATAM | SSA | South-Asia | Oceania | Global
- **language:** English | French | German | Spanish | Māori | Vietnamese | Khmer | Indigenous-language-named
- **intended-use-in-talk:** primary-quote | secondary-quote | framing-support | not-for-quotation

### Body template

```
## Quote / Position

[verbatim quote in blockquote, or paraphrased position in italic]

## Context

[1-3 sentences of what was being discussed, with the substantive question or theme the speaker was addressing]

## Source

[Full citation: publication, date, URL]
```

## Maintenance discipline

The discipline that prevents this index from rotting:

1. **When a quote is added to a unit**, the curator (or curator-tool) also adds a corresponding entry to `quotes/`.
2. **When a quote is removed or modified in a unit**, the corresponding entry is also updated.
3. **The inline version in the unit is canonical** — this index is a queryable shadow of the inline content.
4. **The freshness flag** on each entry is checked annually. If a quote is older than 18 months, the curator decides whether to keep it (historical), update the citation (verify-on-next-cycle), or remove it (no longer relevant).

## How to use this directory

- **For a talk**, filter by `theme:` and `region:` to assemble a quote set relevant to the talk's audience.
- **For a scan update**, filter by `freshness: verify-on-next-cycle` and re-verify before incorporating into the scan.
- **For a methodology layer**, this directory is one input — it surfaces voices that should be in talk constructions.

## What this directory is *not*

- **Not a citation manager.** Citations for source material remain in unit files; this directory just makes them queryable.
- **Not a substitute for inline quotes.** Inline quotes in units retain their context; this index is a queryable shadow.
- **Not comprehensive.** This is what we have, captured from existing units. New quotes should be added here as they appear in units.

## Inventory

A filterable table in `_index.md` lists all entries by speaker, region, theme, and freshness.
