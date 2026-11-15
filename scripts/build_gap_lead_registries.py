#!/usr/bin/env python3
"""Regenerate GAPS.md and LEADS.md from the corpus.

Re-vendored into the repo 15 November 2026 (the original, maintained in a
curation skill, was lost; this rewrite was validated by regenerating both
registries and diffing against the committed state). MIT per NOTICE.

Usage:
    python scripts/build_gap_lead_registries.py           # rewrite both registries
    python scripts/build_gap_lead_registries.py --check   # exit 1 if they would change

Design (matches the documented registry discipline in GAPS.md / LEADS.md):

GAPS.md
  - Corpus = units/*.md + scans/*.md. Every G-NNN id referenced there is
    indexed with a reference count n (occurrences on non-frontmatter lines)
    and src (file:line the definition came from, or first reference).
  - Definitions are preserved from the existing registry (overlay): the
    registry is indexical and its entries are best-effort captures, so
    regeneration must not churn them. Ids no longer referenced are dropped.
  - Ids referenced in the corpus but missing from the registry get a
    generated definition, using the documented priority chain:
      1. scan-intro   `**G-NNN (new):** ...` bullet in scans/
      2. unit-intro   same bullet form in units/
      3. unit-paren   `G-NNN (...)` parenthetical in units/
      4. bare-ref     cleaned first-reference line (walk order: units/
                      alphabetical, then scans/ alphabetical), truncated at
                      200 chars on a word boundary
  - Buckets are fixed id ranges (last bucket open-ended); header prose is
    verbatim except the total.

LEADS.md
  - Realized/open leads are regenerated mechanically from scan sections
    headed 'Future units surfaced...' / 'N. New leads surfaced'. A bullet
    `- **target.md** (G-..., ...) — desc` yields a lead; it is realized iff
    units/target.md exists (exact filename match), or the bullet carries the
    house realization markers:
      * strikethrough-written:  `- ~~**title**~~ — **written** as `units/X.md` (date). desc`
      * split:                  desc contains 'Realized YYYY-MM by split' and every
                                `units/*.md` named in the bullet exists
    The two November-2026 China leads were hand-written into LEADS.md while
    the script was lost; their scan bullets are now marked strikethrough-
    written in scans/2026-09-china-cycle.md so they regenerate canonically.
  - Descriptive bullets without a target filename (e.g. 'China's cold chain
    and prepared-dish data architecture') are NOT tracked as leads; they are
    reported on stderr. Give such a lead a target filename in the scan to
    track it.
  - The 'Cluster-pattern + framework candidates' section is curated, not
    derivable: it is preserved verbatim (overlay). Strict-regex hits in
    scans/ that are not yet listed are reported on stderr as review hints.
  - Header/footer prose verbatim except the status counts.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UNITS = ROOT / "units"
SCANS = ROOT / "scans"

GID_RE = re.compile(r"\bG-(\d{3})\b")

GAPS_BUCKETS = [
    (1, 16, "Initial scope"),
    (17, 32, "EU + LAC (early)"),
    (33, 50, "Process / retail / NA"),
    (51, 70, "Mid-cycle (US/EU/data)"),
    (71, 90, "MENA / LAC deepening"),
    (91, 110, "Asia + open source"),
    (111, 140, "Lebanese / MENA"),
    (141, 166, "Hyperscaler / multi"),
    (167, 200, "EU substrates"),
    (201, 240, "EU regulatory"),
    (241, 280, "Sub-Saharan / Africa"),
    (281, 10**9, "Recent (2026+)"),
]

GAPS_HEADER = """GAPS

This is the corpus's gap registry. Every G-NNN tag referenced anywhere in
units/ or scans/ is indexed here with the best available definition,
the file/line where it was first surfaced, and a reference count.

Gaps surface during cycle work as named absences or vendor-claimed-but-
unverified observations. Four definition sources, in priority order:

  scan-intro   - the cleanest form: a one-line bullet at the bottom
                 of a scan introducing the gap (G-NNN (new): ...)
  unit-intro   - the same bullet form inside a unit, under a
                 '## N. New gaps surfaced by this unit' heading
  unit-paren   - a parenthetical description attached to a G-NNN
                 reference inside an existing unit (often longer,
                 often more substantive)
  bare-ref     - G-NNN mentioned in passing with no explicit definition;
                 description is reconstructed from the surrounding
                 paragraph (best-effort; some entries have only fragment
                 context and read as 'see <file> L<n> for context')

Numbering follows cycle order (G-001 surfaced in the earliest cycles,
G-281+ in the most recent). Gaps have no priority ranking within a range;
the registry is indexical, not editorial.

To find a gap: scroll or grep for the G-NNN id.

To propose a new gap: prefix it with the next unused id from the highest
end of the range; add an intro bullet at the bottom of the surfacing
scan using the `**G-NNN (new):** ...` format so this registry stays in
sync (rebuild via `python scripts/build_gap_lead_registries.py`).

Total gaps registered: {total}
"""

LEADS_HEADER = """LEADS

This is the corpus's lead registry - actor-networks, foundational
actors, and substantive future-unit candidates surfaced during cycle work.

Leads differ from gaps. A **gap** is an absence: data not found, deployment
not verified. A **lead** is a direction: an actor / cluster / framework
surfaced during research that warrants its own future write-up.

Two surfaces in the corpus produce leads:

  - explicit 'Future units surfaced by this scan' sections (the cleanest)
  - cluster-pattern candidate observations in the regional deepening scans
  - bullet items in cycle tail sections (deferred-scope / next-cycle hooks)

Status:
  - {realized} leads have been realized as standalone units (closed)
  - {open} leads remain open with named target filename
  - {candidates} cluster-pattern / framework-level candidates
    not tied to a single unit

Numbering follows surfacing order in the scans; oldest first.

## Realized leads (closed)

These leads were named in a scan's 'Future units surfaced' section and
subsequently committed as standalone unit files in `units/` — or, where
a later cycle wrote several narrower units instead, marked in the scan as
realized by split (every named unit is verified to exist before it moves).

{realized_entries}
## Open leads (named target unit not yet written)

These leads are explicitly named in scan 'Future units surfaced'
sections but no unit with that filename currently exists in `units/`.
Cycle work should target these next when capacity permits.

{open_entries}
## Cluster-pattern + framework candidates

These are cluster-level or framework-level leads that aren't tied to
a single unit. They're often surfaced in regional deepening scans as
tentative patterns to test against future cycles.

{candidate_entries}
## How to use this file

When you start a new cycle, look first at 'Open leads' for named targets
that the corpus has already agreed need units. After the cycle completes,
moves from 'Open leads' to 'Realized leads' (or extend the 'Realized'
list). 'Cluster-pattern candidates' are the speculative layer - they're
useful for prospective cycles where you want to surface structural
patterns rather than fill data holes.

If a unit never lands (because research doesn't surface enough substance),
remove the lead rather than leaving a stale entry. Quality > completeness.
"""


def warn(msg):
    print(f"[registries] {msg}", file=sys.stderr)


def read_lines(path):
    return path.read_text(encoding="utf-8").splitlines()


def frontmatter_mask(lines):
    """Return a set of 0-based line indices inside YAML frontmatter."""
    masked = set()
    if lines and lines[0].strip() == "---":
        for i in range(1, len(lines)):
            if lines[i].strip() == "---":
                masked = set(range(0, i + 1))
                break
    return masked


def corpus_files():
    """Walk order: units/ alphabetical, then scans/ alphabetical."""
    units = sorted(p for p in UNITS.glob("*.md") if p.name != "README.md")
    scans = sorted(SCANS.glob("*.md"))
    return units, scans


def rel(path):
    return path.relative_to(ROOT).as_posix()


# ---------------------------------------------------------------- gaps


def collect_gap_refs():
    """gid -> list of (relpath, lineno, line); frontmatter excluded."""
    refs = {}
    units, scans = corpus_files()
    for path in units + scans:
        lines = read_lines(path)
        masked = frontmatter_mask(lines)
        for idx, line in enumerate(lines):
            if idx in masked:
                continue
            for m in GID_RE.finditer(line):
                refs.setdefault(int(m.group(1)), []).append((rel(path), idx + 1, line))
    return refs


def parse_gaps_overlay():
    """gid -> (src, definition) from the committed GAPS.md, if present."""
    overlay = {}
    gaps_file = ROOT / "GAPS.md"
    if not gaps_file.exists():
        return overlay
    pat = re.compile(r"^- \*\*G-(\d{3})\*\* \(n=\d+, src=([^)]+)\) — (.*)$")
    for line in read_lines(gaps_file):
        m = pat.match(line)
        if m:
            overlay[int(m.group(1))] = (m.group(2), m.group(3))
    return overlay


def clean(text):
    text = text.replace("**", "").strip()
    return re.sub(r"\s+", " ", text)


def truncate_words(text, limit=200):
    if len(text) <= limit:
        return text
    cut = text[:limit]
    if " " in cut:
        cut = cut[: cut.rfind(" ")]
    return cut.rstrip(" ,;:.")


INTRO_RE = re.compile(
    r"\*\*G-(\d{3}) \(new\)\*\*[:：]?\s*[—–-]*\s*(.+)$|"
    r"\*\*G-(\d{3}) \(new\)[:：]\*\*\s*(.+)$"
)
PAREN_RE_TMPL = r"\*{{0,2}}G-{gid:03d}\*{{0,2}}\s*\(([^)]{{4,}})\)"


def generate_definition(gid, refs):
    """Documented priority chain: scan-intro, unit-intro, unit-paren, bare-ref."""
    # 1. scan-intro
    for path, lineno, line in refs:
        if path.startswith("scans/"):
            m = INTRO_RE.search(line)
            if m and int(m.group(1) or m.group(3)) == gid:
                return clean(m.group(2) or m.group(4)), f"{path}:{lineno}"
    # 2. unit-intro
    for path, lineno, line in refs:
        if path.startswith("units/"):
            m = INTRO_RE.search(line)
            if m and int(m.group(1) or m.group(3)) == gid:
                return clean(m.group(2) or m.group(4)), f"{path}:{lineno}"
    # 3. unit-paren
    paren_re = re.compile(PAREN_RE_TMPL.format(gid=gid))
    for path, lineno, line in refs:
        if path.startswith("units/"):
            m = paren_re.search(line)
            if m:
                return clean(m.group(1)), f"{path}:{lineno}"
    # 4. bare-ref (first reference in walk order)
    path, lineno, line = refs[0]
    body = line.lstrip("- ").strip()
    return truncate_words(clean(body)), f"{path}:{lineno}"


def build_gaps():
    refs = collect_gap_refs()
    overlay = parse_gaps_overlay()
    dropped = sorted(g for g in overlay if g not in refs)
    for g in dropped:
        warn(f"GAPS: dropping G-{g:03d} (no longer referenced in units/ or scans/)")

    entries = []  # (gid, n, src, definition)
    generated = []
    for gid in sorted(refs):
        n = len(refs[gid])
        if gid in overlay:
            src, definition = overlay[gid]
        else:
            definition, src = generate_definition(gid, refs[gid])
            generated.append(gid)
        entries.append((gid, n, src, definition))

    out = [GAPS_HEADER.format(total=len(entries)).rstrip("\n"), ""]
    for lo, hi, name in GAPS_BUCKETS:
        bucket = [e for e in entries if lo <= e[0] <= hi]
        if not bucket:
            continue
        out.append(f"## {name}")
        out.append("")
        for gid, n, src, definition in bucket:
            out.append(f"- **G-{gid:03d}** (n={n}, src={src}) — {definition}")
        out.append("")
    text = "\n".join(out).rstrip("\n") + "\n"
    # collapse any accidental triple newlines
    text = re.sub(r"\n{3,}", "\n\n", text)
    stats = {"total": len(entries), "generated": generated, "dropped": dropped}
    return text, stats


# ---------------------------------------------------------------- leads

LEAD_SECTION_RE = re.compile(r"^#{2,3}\s+.*(Future units surfaced|New leads surfaced)", re.I)
WRITTEN_RE = re.compile(
    r"^-\s+~~\*\*(?P<title>.+?)\*\*~~\s*—\s*\*\*written\*\*\s+as\s+`units/(?P<file>[^`]+\.md)`"
    r"(?:\s*\((?P<date>[^)]*)\))?\.\s*(?P<desc>.*)$"
)
FILE_PAREN_RE = re.compile(
    r"^-\s+\*\*(?P<file>[A-Za-z0-9._\-]+\.md)\*\*\s*(?:\((?P<paren>[^)]*)\))?\s*—\s*(?P<desc>.*)$"
)
SPLIT_RE = re.compile(r"[Rr]ealized (\d{4}-\d{2}) by split")


def parse_leads():
    realized, open_leads = [], []
    seen = set()
    for path in sorted(SCANS.glob("*.md")):
        lines = read_lines(path)
        scanbase = path.name
        in_section = False
        for idx, line in enumerate(lines):
            if line.startswith("#"):
                in_section = bool(LEAD_SECTION_RE.match(line))
                continue
            if not in_section or not line.startswith("- "):
                continue
            lineno = idx + 1
            entry = None
            m = WRITTEN_RE.match(line)
            if m:
                target = m.group("file")
                entry = ("realized", target, "-", m.group("desc").strip(), scanbase, lineno, None)
            else:
                m = FILE_PAREN_RE.match(line)
                if m:
                    target = m.group("file")
                    paren = m.group("paren") or ""
                    gaps = ", ".join(re.findall(r"G-\d{3}", paren)) or "-"
                    desc = m.group("desc").strip()
                    sm = SPLIT_RE.search(desc)
                    if sm:
                        named = re.findall(r"`units/([^`]+\.md)`", line)
                        if named and all((UNITS / u).exists() for u in named):
                            entry = (
                                "realized", target, gaps, desc, scanbase, lineno,
                                f"realized {sm.group(1)} by split into {len(named)} units",
                            )
                        else:
                            warn(f"LEADS: {scanbase} L{lineno} declares split but not all named units exist; keeping open")
                    if entry is None:
                        kind = "realized" if (UNITS / target).exists() else "open"
                        entry = (kind, target, gaps, desc, scanbase, lineno, None)
                else:
                    stripped = re.sub(r"[*`~]", "", line)
                    warn(f"LEADS: {scanbase} L{lineno} has no target filename; not tracked as a lead: {stripped[:90]}...")
                    continue
            kind, target, gaps, desc, scanbase, lineno, split_note = entry
            if target in seen:
                warn(f"LEADS: duplicate target {target} at {scanbase} L{lineno}; keeping first")
                continue
            seen.add(target)
            record = {"target": target, "gaps": gaps, "desc": desc, "scan": scanbase, "line": lineno, "split": split_note}
            (realized if kind == "realized" else open_leads).append(record)
    return realized, open_leads


def render_lead(r, kind):
    if kind == "realized":
        head = f"- **{r['target']}** — "
        head += r["split"] + f", from `{r['scan']}` L{r['line']}" if r["split"] else f"realized from `{r['scan']}` L{r['line']}"
    else:
        head = f"- **{r['target']}** — surfaced in `{r['scan']}` L{r['line']}"
    return f"{head}\n  gaps: {r['gaps']}\n  {r['desc']}"


CANDIDATE_HINT_RE = re.compile(r"(?i)cluster.?pattern")
CANDIDATE_KEYWORD_RE = re.compile(r"(?i)\bcandidate|\beighth\b|\bninth\b|\bNEW cluster\b|\bproposed\b")


def load_candidates_overlay():
    """Preserve the curated cluster-pattern section verbatim from LEADS.md."""
    leads_file = ROOT / "LEADS.md"
    if not leads_file.exists():
        return "", []
    lines = read_lines(leads_file)
    start = end = None
    for i, line in enumerate(lines):
        if line.startswith("## Cluster-pattern + framework candidates"):
            start = i
        elif start is not None and line.startswith("## ") and i > start:
            end = i
            break
    if start is None:
        return "", []
    block = lines[start:end if end else len(lines)]
    # entries = '- `scan.md` L<n> — text' lines; the section intro lives in
    # LEADS_HEADER, so only the curated entry lines are carried over
    entries = [l for l in block if l.startswith("- `")]
    text = "\n".join(entries)
    return text, entries


def advise_new_candidates(existing_entries):
    listed = set()
    for e in existing_entries:
        m = re.match(r"- `([^`]+)` L(\d+)", e)
        if m:
            listed.add((m.group(1), int(m.group(2))))
    for path in sorted(SCANS.glob("*.md")):
        for idx, line in enumerate(read_lines(path)):
            if line.lstrip().startswith("#"):
                continue
            if CANDIDATE_HINT_RE.search(line) and CANDIDATE_KEYWORD_RE.search(line):
                if (path.name, idx + 1) not in listed:
                    warn(f"LEADS: possible cluster-pattern candidate not in registry (review): {path.name} L{idx + 1}")


def build_leads():
    realized, open_leads = parse_leads()
    cand_text, cand_entries = load_candidates_overlay()
    advise_new_candidates(cand_entries)

    realized_block = "\n".join(render_lead(r, "realized") for r in realized) + "\n" if realized else ""
    open_block = "\n".join(render_lead(r, "open") for r in open_leads) + "\n" if open_leads else ""

    text = LEADS_HEADER.format(
        realized=len(realized),
        open=len(open_leads),
        candidates=len(cand_entries),
        realized_entries=realized_block,
        open_entries=open_block,
        candidate_entries=cand_text + "\n",
    )
    text = re.sub(r"\n{3,}", "\n\n", text)
    stats = {"realized": len(realized), "open": len(open_leads), "candidates": len(cand_entries)}
    return text, stats


def main():
    check = "--check" in sys.argv
    gaps_text, gaps_stats = build_gaps()
    leads_text, leads_stats = build_leads()

    changed = []
    for name, text in (("GAPS.md", gaps_text), ("LEADS.md", leads_text)):
        path = ROOT / name
        current = path.read_text(encoding="utf-8") if path.exists() else None
        if current != text:
            changed.append(name)
            if not check:
                path.write_text(text, encoding="utf-8")

    print(
        f"GAPS: {gaps_stats['total']} entries "
        f"({len(gaps_stats['generated'])} newly generated: "
        f"{', '.join('G-%03d' % g for g in gaps_stats['generated']) or 'none'}; "
        f"{len(gaps_stats['dropped'])} dropped)"
    )
    print(
        f"LEADS: {leads_stats['realized']} realized / {leads_stats['open']} open / "
        f"{leads_stats['candidates']} cluster-pattern candidates"
    )
    if check:
        if changed:
            print(f"Registries out of date: {', '.join(changed)} would change.", file=sys.stderr)
            sys.exit(1)
        print("Registries up to date.")
    else:
        print(f"Wrote: {', '.join(changed) or 'no changes'}")


if __name__ == "__main__":
    main()
