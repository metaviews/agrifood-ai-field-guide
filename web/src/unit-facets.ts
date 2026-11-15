// web/src/unit-facets.ts
// Facet extraction for the units index and detail pages: turns the v6
// taxonomy frontmatter (unit-kind, governance-level, region, maturity-
// verification) into filterable values with visitor-facing labels.
//
// The region prefix list and kind vocabulary are imported from the
// corpus schema (scripts/schemas/v6.json) so the site cannot drift
// from the validator's vocabulary.

import schema from '../../scripts/schemas/v6.json';

export const REGION_PREFIXES: string[] = schema.region_prefixes;
export const UNIT_KINDS: string[] = schema.unit_kind;
export const GOVERNANCE_LEVELS: string[] = schema.governance_level;

// ── Visitor-facing labels ────────────────────────────────────────────
// Plain language first, taxonomy term where it carries meaning.

export const KIND_LABELS: Record<string, string> = {
  deployment: 'Deployments & products',
  institution: 'Institutions',
  'policy-instrument': 'Policy instruments',
  'funding-programme': 'Funding programmes',
  'data-infrastructure': 'Data infrastructure',
  'ecosystem-map': 'Ecosystem maps',
  'meta-pattern': 'Cross-case patterns',
  'critical-analysis': 'Critical analyses',
  methodology: 'Methods & frameworks',
  'tracker-artefact': 'Trackers',
};

export const REGION_LABELS: Record<string, string> = {
  'NA-Canada': 'Canada',
  'NA-US': 'United States',
  LATAM: 'Latin America & Caribbean',
  EU: 'EU-wide',
  'EU-Spain': 'Spain',
  'EU-Netherlands': 'Netherlands',
  'EU-France': 'France',
  'EU-Germany': 'Germany',
  'EU-other': 'EU (other member state)',
  MENA: 'Middle East & North Africa',
  SSA: 'Sub-Saharan Africa',
  'South-Asia': 'South Asia',
  'East-Asia': 'East Asia',
  Oceania: 'Oceania',
  Global: 'Global',
  'Global-South': 'Global South',
  'multi-region': 'Multi-region',
  'cross-cutting': 'Non-geographic',
};

// Display order for the region select (geographic grouping, most-
// represented first within reason). Values with zero units are skipped
// at render time.
export const REGION_ORDER: string[] = [
  'NA-Canada', 'NA-US', 'LATAM',
  'EU', 'EU-Spain', 'EU-Netherlands', 'EU-France', 'EU-Germany', 'EU-other',
  'MENA', 'SSA', 'South-Asia', 'East-Asia', 'Oceania',
  'Global', 'Global-South', 'multi-region', 'cross-cutting',
];

// v5 maturity definitions, verbatim in spirit.
export const VERIF_LABELS: Record<string, string> = {
  v0: 'V0 — vendor-reported only',
  v1: 'V1 — peer-reviewed',
  v2: 'V2 — third-party case study',
  v3: 'V3 — independently audited',
  v4: 'V4 — independently replicated',
  ungraded: 'Ungraded',
};
export const VERIF_ORDER: string[] = ['v0', 'v1', 'v2', 'v3', 'v4', 'ungraded'];

export const GOV_LABELS: Record<string, string> = {
  subnational: 'Subnational',
  national: 'National',
  supranational: 'Supranational (EU)',
  multilateral: 'Multilateral',
};
export const GOV_ORDER: string[] = ['subnational', 'national', 'supranational', 'multilateral'];

// ── Parsers ──────────────────────────────────────────────────────────

function stripQuotes(v: string): string {
  const t = v.trim();
  if (t.length >= 2 && (t[0] === "'" || t[0] === '"') && t[t.length - 1] === t[0]) {
    return t.slice(1, -1);
  }
  return t;
}

// Extract controlled region prefixes from a region value.
// Follows the v5.1 grammar: a prefix counts when it appears at a
// segment start (position 0, or right after a top-level ',' or ';'),
// at paren depth zero, followed by end/space/(/,/;. Longest prefix
// first so EU-Spain wins over EU. Continuation clauses ("; named
// countries: Ghana, Mali") never produce false prefixes because
// country names are not in the controlled list.
export function regionFacets(rawValue: string | undefined): string[] {
  if (!rawValue) return [];
  const value = stripQuotes(rawValue);
  const found = new Set<string>();
  if (value.startsWith('(cross-cutting')) found.add('cross-cutting');
  if (value.startsWith('(Global')) found.add('Global-South');
  const sorted = [...REGION_PREFIXES].sort((a, b) => b.length - a.length);
  let depth = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === '(') { depth++; continue; }
    if (ch === ')') { depth = Math.max(0, depth - 1); continue; }
    if (depth > 0) continue;
    const atSegmentStart = i === 0 || (i > 0 && (value[i - 1] === ',' || value[i - 1] === ';'));
    if (!atSegmentStart) continue;
    for (const p of sorted) {
      if (value.startsWith(p, i)) {
        const after = value[i + p.length];
        if (after === undefined || after === ' ' || after === '(' || after === ',' || after === ';') {
          found.add(p);
        }
        break;
      }
    }
  }
  return [...found];
}

// Extract verification tiers from a maturity-verification value.
// Ranges (V0-V1) expand to every tier they span, so a "V0" filter
// surfaces every unit whose verification bottoms out at vendor-
// reported. Parenthetical values ((n/a — analytical), (not graded))
// and absent values are "ungraded".
export function verifFacets(rawValue: string | undefined): string[] {
  if (!rawValue) return ['ungraded'];
  const value = stripQuotes(rawValue);
  if (value.startsWith('(')) return ['ungraded'];
  const m = value.match(/V([0-4])(?:\s*[-–]\s*V?([0-4]))?/);
  if (!m) return ['ungraded'];
  const lo = parseInt(m[1], 10);
  const hi = m[2] !== undefined ? parseInt(m[2], 10) : lo;
  const out: string[] = [];
  for (let v = Math.min(lo, hi); v <= Math.max(lo, hi); v++) out.push(`v${v}`);
  return out;
}

// Short chip label for the verification tier (lowest tier = the honest
// headline: a V0-V2 unit is still vendor-reported at its weakest point).
export function verifChip(rawValue: string | undefined): string | null {
  const facets = verifFacets(rawValue);
  if (facets.length === 1 && facets[0] === 'ungraded') return null;
  return facets[0].toUpperCase();
}
