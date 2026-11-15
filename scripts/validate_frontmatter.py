#!/usr/bin/env python3
"""validate_frontmatter.py — corpus frontmatter validator (taxonomy v6).

Checks every units/*.md against scripts/schemas/v6.json:
  - required fields present
  - unit-kind in vocabulary
  - governance-level (if present) in vocabulary
  - claim-type composite grammar: every '+'-joined part's primary word recognized
  - region leading token is a controlled prefix (v5.1 grammar) or a recognized
    parenthetical form ((cross-cutting — ...), (Global South ...))
  - maturity values match the ladder pattern or are parenthetical
  - YAML hazards: unquoted values containing ': ' or starting with special
    characters (the js-yaml breakage class that hit the repo in Aug and Nov 2026)

Stdlib only, like build_gap_lead_registries.py. Exit 0 clean, 1 on errors.
Usage: python3 scripts/validate_frontmatter.py [--schema scripts/schemas/v6.json] [dir]
"""
import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent

YAML_SPECIAL_STARTS = tuple("[{*&!|>%@`#?,")


def load_schema(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def parse_frontmatter(path):
    """Flat key: value parse of the first frontmatter block. Returns (dict, raw_lines)."""
    lines = path.read_text(encoding="utf-8").splitlines()
    if not lines or lines[0].strip() != "---":
        return None, []
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end = i
            break
    if end is None:
        return None, []
    fm = {}
    block = lines[1:end]
    for line in block:
        if not line or line.startswith((" ", "\t")):
            continue
        m = re.match(r"^([A-Za-z0-9_-]+):\s*(.*)$", line)
        if m:
            fm[m.group(1)] = m.group(2)
    return fm, block


def unquote(v):
    v = v.strip()
    if len(v) >= 2 and v[0] == v[-1] and v[0] in "'\"":
        return v[1:-1]
    return v


def check_yaml_hazards(block, errors):
    for line in block:
        m = re.match(r"^([A-Za-z0-9_-]+):\s*(.*)$", line)
        if not m:
            continue
        key, val = m.group(1), m.group(2)
        if not val:
            continue
        if val[0] in "'\"":
            q = val[0]
            if val.endswith(q) and len(val) >= 2:
                inner = val[1:-1]
                if q == "'":
                    inner = inner.replace("''", "")  # YAML doubled-apostrophe escape
                else:
                    inner = inner.replace('\\"', "")  # YAML backslash escape in double quotes
                if q in inner:
                    errors.append(f"{key}: {q}-quoted value contains unescaped inner {q}")
            else:
                errors.append(f"{key}: value starts with {q} but does not end with it")
            continue
        if ": " in val:
            errors.append(f"{key}: unquoted value contains ': ' (breaks js-yaml — quote the value)")
        if val[0] in YAML_SPECIAL_STARTS:
            errors.append(f"{key}: unquoted value starts with YAML-special character '{val[0]}'")


def check_region(value, schema, errors):
    v = unquote(value)
    if v.startswith("(cross-cutting") or v.startswith("(Global"):
        return
    tok = re.split(r"[ (—;,]", v)[0]
    if tok not in schema["region_prefixes"]:
        errors.append(f"region: leading token '{tok}' is not a controlled prefix (v5.1 grammar)")


def split_claim_parts(v):
    """Split a claim-type value on ' + ' and '; ' at paren depth zero only."""
    parts, depth, cur, i = [], 0, "", 0
    while i < len(v):
        ch = v[i]
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth = max(0, depth - 1)
        if depth == 0:
            if v[i:i + 3] == " + ":
                parts.append(cur)
                cur = ""
                i += 3
                continue
            if ch == ";" and (i + 1 >= len(v) or v[i + 1] == " "):
                parts.append(cur)
                cur = ""
                i += 2
                continue
        cur += ch
        i += 1
    parts.append(cur)
    return [p for p in parts if p.strip()]


def check_claim_type(value, schema, errors):
    v = unquote(value)
    for part in split_claim_parts(v):
        primary = re.split(r"[ (\u2014]", part.strip())[0].lower()
        if primary not in schema["claim_type_primaries"]:
            errors.append(f"claim-type: unrecognized primary '{primary}' in part '{part.strip()[:40]}'")


def check_maturity(key, value, schema, errors):
    v = unquote(value)
    if v.startswith("("):
        return
    if not re.match(schema["maturity_value_pattern"], v):
        errors.append(f"{key}: '{v[:20]}' does not match the maturity ladder pattern")


def validate_unit(path, schema):
    errors = []
    fm, block = parse_frontmatter(path)
    if fm is None:
        return ["no frontmatter block found"]
    check_yaml_hazards(block, errors)
    for field in schema["required_fields"]:
        if field not in fm or not fm[field].strip():
            errors.append(f"missing required field: {field}")
    kind = unquote(fm.get("unit-kind", ""))
    if kind and kind not in schema["unit_kind"]:
        errors.append(f"unit-kind: '{kind}' not in vocabulary")
    gov = unquote(fm.get("governance-level", ""))
    if gov and gov not in schema["governance_level"]:
        errors.append(f"governance-level: '{gov}' not in vocabulary")
    if "region" in fm:
        check_region(fm["region"], schema, errors)
    if "claim-type" in fm:
        check_claim_type(fm["claim-type"], schema, errors)
    for mfield in schema["maturity_fields"]:
        if mfield in fm:
            check_maturity(mfield, fm[mfield], schema, errors)
    return errors


def main():
    args = [a for a in sys.argv[1:]]
    schema_path = REPO / "scripts" / "schemas" / "v6.json"
    units_dir = REPO / "units"
    if "--schema" in args:
        i = args.index("--schema")
        schema_path = Path(args[i + 1])
        del args[i:i + 2]
    if args:
        units_dir = Path(args[0])
    schema = load_schema(schema_path)

    files = sorted(p for p in units_dir.glob("*.md") if p.name not in ("README.md", "_index.md"))
    total_errors = 0
    failed = 0
    for path in files:
        errors = validate_unit(path, schema)
        if errors:
            failed += 1
            total_errors += len(errors)
            print(f"{path.name}:")
            for e in errors:
                print(f"  - {e}")
    print(f"\nvalidate_frontmatter ({schema_path.name}): {len(files)} units checked, "
          f"{failed} failed, {total_errors} errors")
    sys.exit(1 if total_errors else 0)


if __name__ == "__main__":
    main()
