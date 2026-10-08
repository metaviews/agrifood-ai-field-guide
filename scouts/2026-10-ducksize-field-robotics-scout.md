---
title: "Ducksize field-robotics scout — whole-site pass over a practitioner agricultural-robot directory against corpus coverage"
date: 2026-10
kind: scout
status: scouting-only, no scan output yet
related_scans:
  - scans/2026-07-france-cycle.md
  - scans/2026-07-ai-and-labour.md
related_units:
  - units/naio-technologies.md
  - units/haggerty-creek-ltd.md
  - units/advanced-farm-tech-farmwise-carbon-robotics-specialty-crop-weeders.md
  - units/cnh-raven-autonomous-portfolio.md
  - units/root-ai.md
  - units/john-deere-see-and-spray.md
  - units/lely-astronaut.md
  - units/china-ground-robotics-unmanned-farms.md
  - units/niqo-robotics-india.md
  - units/xag-china-drone-leader.md
---

# Ducksize field-robotics scout — October 2026

**Status.** Scouting-only pass. **No edits to the repo beyond this scout file.** No G-NNN ids issued, no leads registered, `LEADS.md` and `GAPS.md` deliberately untouched: leads surface from scans and this is not one.

**Purpose.** The user found ducksize.com and asked whether the field guide is missing anything that might be found there. This scout answers that as an auditable coverage check — what the site contains, what the corpus already covers, and an exact list of what it does not — so a later cycle can decide rather than re-derive the list.

**Method.** Whole-site enumeration on 2026-10-08: all four sitemaps read (`pages`, `blog-posts`, `store-products`, `blog-categories`); all 41 pages (40 plus homepage) and all 4 blog posts fetched and read; 34 of 35 robot product cards fetched and read (the `root-ai` card returns an empty body). Every robot, organisation, event and external resource named on the site was then grep-checked against `units/`, `scans/`, `scouts/`, `quotes/`, `talks/`, `GAPS.md` and `LEADS.md`. Presence/absence below is grep-verified, not recalled.

---

## 0. Headline findings

1. **One intra-corpus link the corpus never made.** ducksize records the first delivery of a Korechi RoamIO robot to **Haggerty Creek Ltd** (Bothwell, Ontario). The corpus has `units/haggerty-creek-ltd.md` and no Korechi mention anywhere. This is a coverage bug, not a research gap.
2. **A second Canadian machine is absent too:** the WerkR autonomous electric tractor, carded as available to order, country of origin Canada.
3. **The corpus covers four of the ~30 machines ducksize directories** (Naïo, FarmWise/Carbon Robotics, Raven/CNH, Root AI). The European field-robot fleet — AgXeed, Agrointelli, FarmDroid, Sabanto, Ecorobotix, Ekobot, Elatec, Trabotyx, Odd.Bot, Aigro, GOtrack, SITIA and ~12 more — is entirely unrepresented.
4. **ducksize is a source *type* the corpus does not otherwise have:** first-hand, practitioner-written field-experience accounts of robots working, rather than vendor pages, press or academic literature. Its figures are as-reported and must stay that way.
5. **Two themes map onto existing corpus interests and are worth naming, not yet working:** strip cropping / intercropping enabled by robots (agroecology taxonomy), and FIRA USA / GOFAR as robotics events beyond the World FIRA the France cycle already names.
6. **The one open-source-relevant item on the site is for the sibling project, not this one:** Aspexit's open catalogue of agricultural digital tools, now recorded as `examples/records/wiki-agri-tech.md` in `~/opensource-agrifood`.

---

## 1. What ducksize is (and its limits as a source)

ducksize.com is the site of Corné Rispens, a Dutch agrarian-background, technology-career consultant working out of the Netherlands (site `about-ducksize` page, read 2026-10-08). It has three content surfaces plus a directory:

- **Robot directory** — 35 product cards, each with a short description, an outbound manufacturer link, and four labelled fields: country of origin, maturity (concept vs for sale), power source, track width. Every card carries the footnote *"Estimated value; please verify with supplier."*
- **Category pages** — by operation (weeding, sowing, tillage, spraying, insect removal, inspection) and by crop (lettuce, carrots, onions, sugar beets, pumpkins, grain, apples), plus machine-class pages (replace small tractor, replace large tractor, replace orchard tractor, upgrade your own tractor).
- **Field-experience articles** — the distinctive layer: Aigro Up weeding between trees; Naïo Dino set-up in three steps; FarmDroid sowing and weeding; Ekobot weeding onions; Elatec prototyping; AMOS fully electric; GOtrack teach-to-drive; *Sabanto operates 39h in a row*; *Robotti sows 100.000 beets per hour*; Trabotyx weeding carrots; plus standalone pieces on the FarmDroid COVID-labour driver and a grower claim that "FarmDroid robots will pay itself in two years". These headings and claims are ducksize's own, reproduced from vendor and grower material — **as-reported**.
- **Background / method pages** — `robot-info` (drivers: reduce chemicals, save labour, reduce soil compaction; "Kiss the Ground" as soil inspiration), `compare-agriculture-robots` (five practitioner axes: Task, Robustness, Crop, Potential, Eco-friendly), `tractor-robot` (David Brown 880 → New Holland TVT 135 → Agrointelli Robotti → AgXeed Agbot, dominant factor "reduce human work", with the Dutch operator doorgrond named as the only company running all the pictured machines), `strip-cropping-by-robots`, `robot-sector-listing`.
- **Event reportage** — on-site video at FIRA USA ("more than 30 robots, showcasing in 20+ demos"), the GOFAR tour kick-off in France (10-year GOFAR celebration), and Innov-Agri 2023 Outarville (Zilus by SAB AGRI, Trektor by SITIA Robotique, Softi Rover e-K18 by Softivert, FD20 by FarmDroid, AgBot 2.055W4 by AgXeed). The site carries ducksize banners at World FIRA in Toulouse and a YouTube channel.

**Limits, stated before anything is taken from it:** single author; commercial interest (the about page sells exactly this work — "I work with companies, growers and organizations… reach out"); self-characterised as capturing "some basic and preliminary information about the robots"; no peer review; spec values explicitly estimates; event figures are the site's own counts.

---

## 2. What the corpus already covers

Grep-verified overlap between ducksize's roster and this repo:

| ducksize subject | corpus home |
|---|---|
| Naïo Dino / Oz / JO | `units/naio-technologies.md` (also France-cycle scan, EU regulatory scan, quotes) |
| FarmWise, Carbon Robotics specialty-crop weeders | `units/advanced-farm-tech-farmwise-carbon-robotics-specialty-crop-weeders.md` |
| Raven DOT | `units/cnh-raven-autonomous-portfolio.md` |
| Root AI | `units/root-ai.md` |
| John Deere See & Spray (adjacent) | `units/john-deere-see-and-spray.md` |
| World FIRA | `scans/2026-07-france-cycle.md` |
| Clearpath Robotics | one mention, `scouts/2026-07-canada-deepening-scout.md` (Vineland greenhouse harvester built on a Clearpath Husky) |

Everything else below is absent.

---

## 3. Roster coverage table

Country and maturity as carded by ducksize (its own estimates, footnote on every card); "corpus" column is grep-verified.

| Machine (country, maturity per ducksize) | corpus |
|---|---|
| Naïo Dino / Oz (France, orderable) | present |
| FarmWise (USA, orderable) | present |
| Raven DOT (USA, prototype) | present |
| Root AI (USA) | present (card body renders empty on ducksize) |
| AgXeed Agbot / HSS / 2.055W4 (Netherlands, orderable) | **absent** |
| Agrointelli Robotti 150D / LR (Denmark, orderable) | **absent** |
| FarmDroid FD20 (Denmark, orderable, solar) | **absent** |
| Sabanto (USA, orderable) | **absent** |
| EcoRobotix Evo (Switzerland, orderable, solar) | **absent** |
| Ekobot (Sweden, prototype) | **absent** |
| Elatec e-Tract (France, prototype) | **absent** |
| Trabotyx (experience page; card not in sitemap) | **absent** |
| Odd.Bot Maverick (Netherlands, orderable) | **absent** |
| Aigro UP (Netherlands, orderable) | **absent** |
| GOtrack tractor upgrade (Poland, orderable) | **absent** |
| SITIA Trektor (France, prototype) | **absent** |
| Farmertronics eTrac (Netherlands, prototype) | **absent** |
| AutoAgri IC (Norway, prototype, hybrid) | **absent** |
| Horsch Robot 18MT autonomous planter (Germany, prototype) | **absent** |
| Carré Anatis (France, orderable) | **absent** |
| AgreenCulture CEOL (France, orderable) | **absent** |
| Meropy SentiV (France, prototype) | **absent** |
| Octinion Rubion (Belgium, orderable) | **absent** |
| PixelFarming Robot One (Netherlands, solar) | **absent** |
| Agrobot E-series / Bug Vacuum (Spain, prototype) | **absent** |
| Farming Revolution weeding-as-a-service (Germany, orderable) | **absent** |
| Robotics Plus UGV (New Zealand, prototype) | **absent** |
| AMOS A4 (USA, prototype) | **absent** |
| **Korechi RoamIO (Canada, prototype)** | **absent — see §4.1** |
| **WerkR co-bot (Canada, orderable)** | **absent — see §4.2** |
| Innov-Agri 2023 cast: Zilus (SAB AGRI), Softi Rover (Softivert), doorgrond operator | **absent** |

---

## 4. Named absences, ranked

### 4.1 Korechi Innovations ↔ Haggerty Creek Ltd (highest value; Canadian)
ducksize's product card for the Korechi RoamIO is a Canadian machine from Oshawa, Ontario. Independent check while scouting (korechi.com, Bioenterprise, Durham Region economic development, all retrieved 2026-10-08): Korechi Innovations was founded 2016 by Sougata Pahari, describes itself as "Ontario's only designers and manufacturers of farming robots", and **delivered its first large-track RoamIO-HCT in January 2021 to Haggerty Creek Ltd** — the same Bothwell, Ontario farm that `units/haggerty-creek-ltd.md` documents as the substrate of Haggerty AgRobotics and the Innovation Farms Ontario validation hub. The corpus's Haggerty Creek unit names CAAIN autonomous manure application and AIVA validation but never Korechi; the same press material places Korechi at Canada's Outdoor Farm Show with Haggerty AgRobotics and reports Ontario weeding-robot trials. **This is a defect in an existing unit, not a new cycle** — worth correcting the next time Canadian robotics content is touched.

### 4.2 WerkR (Canadian)
Carded as an autonomous electric "co-bot" tractor, 40 hp peak / 25 hp average, 18 kW battery system, four individual wheel motors, orderable, country of origin Canada. Absent from the corpus alongside every other Canadian field-robot thread (`units/haggerty-creek-ltd.md`, `units/greater-montreal-agtech-cluster.md`, `scouts/2026-07-canada-deepening-scout.md`).

### 4.3 The European field-robot fleet (~24 machines, §3)
Not a unit-per-machine gap — the corpus's frame is AI-and-labour in agriculture, not machine specification. What is actually missing is the *field*: the corpus cannot currently say which machines exist in Europe, who sells them, or which are prototypes, because it only holds Naïo. Any claim of the form "European robotic weeding is dominated by…" is currently unverifiable from the corpus.

### 4.4 Events beyond World FIRA
FIRA USA (California) and the GOFAR tour (France, celebrating 10 years) are named on ducksize and absent from the corpus, which has World FIRA only via `scans/2026-07-france-cycle.md`.

### 4.5 First-hand field-experience evidence (source type)
The corpus's robotics evidence is vendor material, press and academic/ethnographic work. ducksize is the only located source of practitioner-written deployment accounts — e.g. *Sabanto operates 39h in a row*, *Robotti sows 100.000 beets per hour*, the FarmDroid grower payback claim, and a COVID-19 labour-shortage adoption driver. All **as-reported**, none independently verified in this pass; usable as leads to primary material, never as figures.

### 4.6 Strip cropping and intercropping enabled by robots (agroecology intersection)
`strip-cropping-by-robots` argues fixed driving lanes, RTK-GPS alignment, long stretched mini-fields and redesigned logistics as the enabler of strip cropping and intercropping. Zero matches for `strip.?crop` in either project. This is the only ducksize theme that lands on an existing corpus interest (the agroecology taxonomy) rather than on robotics itself.

### 4.7 Practitioner comparison framework
Five axes — Task, Robustness, Crop, Potential, Eco-friendly — from `compare-agriculture-robots`. A ready-made, sourced, non-vendor framework for comparing agricultural robots. Not present in the corpus's maturity/taxonomy vocabulary.

### 4.8 Component layer
Septentrio (GNSS receivers plus routing interface for autonomous agriculture, with a webinar on positioning and orientation for ag robots) and Clearpath Robotics (loose components plus complete platforms for third-party robot builders). The corpus mentions Clearpath once; Septentrio zero.

### 4.9 Cross-project item, deliberately not handled here
ducksize's *Open-source catalog for agriculture* post points at Aspexit's catalogue of agricultural digital tools. The URL it cites 404s; the project lives on as wiki-agri-tech.com with ODbL 1.0 data and a free REST API. Recorded as `examples/records/wiki-agri-tech.md` in `~/opensource-agrifood` (candidate), where identification-and-verification of open projects is the collection's actual goal.

---

## 5. What ducksize does not establish

- It is not open source, not peer-reviewed, and not independent of the vendors it lists (it sells field-fit consulting to them).
- Every spec card is explicitly an estimate to be verified with the supplier; maturity labels ("Available to order" vs "Prototype") are the author's reading.
- Its quantitative claims (39 hours, 100,000 beets/hour, two-year payback, 30+ robots at FIRA USA) are its own or its sources' figures, unverified here.
- Nothing on the site is Canadian-focused; the Canada-relevant items (Korechi, WerkR) are incidental entries, not coverage.
- **Absence claims in this scout are absence-from-ducksize and absence-from-corpus, verified by grep on 2026-10-08 — not claims that no other source covers these machines.**

---

## 6. What a cycle would and would not add

Per **METHOD #13 negative-finding tolerance**, the thin parts are named rather than backfilled:

1. **Do not open a vendor-unit cycle on §3.** Twenty-four spec cards would add inventory without changing any synthesis the corpus currently makes about AI, labour or deployment.
2. **Do fix §4.1** the next time Canadian robotics content is touched: Korechi belongs in `units/haggerty-creek-ltd.md` (and in any Canadian field-robot list). That is a correction, not a cycle.
3. **Keep ducksize as a named discovery index.** Its durable value is knowing *which* machines and *which* first-hand accounts exist, always with as-reported labelling, so future robotics claims start from a primary source rather than a search box.
4. **§4.6 (strip cropping × robots) is the one theme worth a decision** — it belongs to an agroecology-facing cycle, not a robotics one.
5. **§4.7 (five-axis comparison) is a framework borrow**, cheap to note in `METHODS.md` vocabulary if a comparison is ever built.
6. **§4.9 goes to the sibling project**, already recorded there.

No G-NNN ids are proposed: each item above is an identified absence with a source, and none of them yet meets the bar of a gap the corpus is actively tracking.

---

## 7. Sources and verification

All retrieved 2026-10-08.

- https://www.ducksize.com/ — homepage: category navigation, FIRA USA and GOFAR items, Innov-Agri 2023 cast, three-surface site map — read in full.
- https://www.ducksize.com/sitemap.xml (+ `pages`, `blog-posts`, `store-products`, `blog-categories` sub-sitemaps) — enumeration of 41 pages, 4 posts, 35 product cards — read.
- https://www.ducksize.com/about-ducksize — author, consultancy model, self-characterisation of content scope — read.
- https://www.ducksize.com/robot-experience — index of field-experience articles (Sabanto 39h, Robotti 100.000 beets/hour, FarmDroid, Ekobot, Elatec, AMOS, GOtrack, Aigro, Trabotyx) — read.
- https://www.ducksize.com/weeding-seeding-robot — FarmDroid COVID labour-shortage driver, "pay itself in two years" grower claim — read.
- https://www.ducksize.com/compare-agriculture-robots — five comparison axes — read.
- https://www.ducksize.com/strip-cropping-by-robots — strip cropping, fixed lanes, RTK alignment, intercropping — read.
- https://www.ducksize.com/tractor-robot — tractor-to-robot evolution, doorgrond operator — read.
- https://www.ducksize.com/fira-robot-event — World FIRA, FIRA USA, GOFAR links; ducksize banners at World FIRA Toulouse — read.
- https://www.ducksize.com/post/open-source-catalog-for-agriculture — Aspexit pointer (URL now 404) — read; recorded in the sibling project.
- https://www.ducksize.com/post/gps-with-routing-for-autonomous-agriculture-robots (Septentrio), .../post/key-robot-components-and-complete-platform (Clearpath), .../post/analyse-the-potential-market-for-innovation (AgTech Market) — read.
- Product cards read for country/maturity/power: all listed in §3 except `root-ai` (empty body) — each carries "Estimated value; please verify with supplier".
- Independent check on Korechi: https://korechi.com/, https://bioenterprise.ca/success-stories/korechi-innovations-inc/, https://www.durham.ca/en/economic-development/news/meet-the-founders-of-durham-region-s-leading-agri-tech-companies.aspx — founder, Oshawa base, January 2021 RoamIO-HCT delivery to Haggerty Creek, "Ontario's only designers and manufacturers of farming robots" — read via search index excerpts, 2026-10-08.

**Corpus checks behind every "absent" above:** `AgXeed|FarmDroid|Agrointelli|Robotti|Sabanto|Ecorobotix|Ekobot|Elatec|Trabotyx|Odd.Bot|Aigro|GOtrack|SITIA|Trektor|Farmertronics|AutoAgri|Horsch|AgreenCulture|Meropy|Octinion|PixelFarming|Agrobot|Robotics Plus|AMOS|Korechi|RoamIO|Werkr|Septentrio|GOFAR|strip.?crop|ducksize|Aspexit|lesoutilsnumeriques` — zero matches across `units/`, `scans/`, `scouts/`, `quotes/`, `talks/`, `GAPS.md`, `LEADS.md`.

Machine-facing notes end here; humans can stop at §6.
