// web/src/evidence-chain.ts
// Parses the corpus-internal "## Links" section from a unit's / synthesis
// doc's RAW markdown body (the remarkStripMeta plugin removes it from the
// rendered prose, but entry.body retains it). Extracts the evidence chain —
// the units a reading draws on, its open gaps, and the contested claims it
// engages — so the site can surface a visitor-friendly "Evidence & open
// questions" footer that the stripped prose would otherwise hide.

export interface EvidenceLinks {
  units: string[];
  gapsText: string | null;
  claimsText: string | null;
}

const EMPTY: EvidenceLinks = { units: [], gapsText: null, claimsText: null };

export function parseEvidenceLinks(body: string | undefined): EvidenceLinks {
  if (!body) return EMPTY;
  const lines = body.split('\n');
  let inLinks = false;
  const units = new Set<string>();
  let gapsText: string | null = null;
  let claimsText: string | null = null;

  for (const line of lines) {
    if (/^##\s+Links\s*$/.test(line)) { inLinks = true; continue; }
    if (inLinks && /^##\s/.test(line)) inLinks = false; // next H2 ends the section
    if (!inLinks) continue;

    const m = line.match(/^-\s*(units|related-units|gaps|contested-claims):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    const val = m[2].trim();

    if (key === 'units' || key === 'related-units') {
      // Drop parenthetical annotations first (they may contain commas), then
      // split on commas, strip a trailing .md, and keep valid unit ids.
      const cleaned = val.replace(/\([^)]*\)/g, '');
      for (let part of cleaned.split(',')) {
        part = part.trim().replace(/\.md$/, '').trim();
        if (/^[a-z0-9][a-z0-9-]*$/.test(part)) units.add(part);
      }
    } else if (key === 'gaps') {
      gapsText = val;
    } else if (key === 'contested-claims') {
      claimsText = val;
    }
  }
  return { units: [...units], gapsText, claimsText };
}

// Split a descriptive gaps/claims line into individual "G-NNN (...)" /
// "C-NNN (...)" entries for list display; returns [] if the format does not
// match (the caller then falls back to the raw text).
export function splitEntries(text: string | null, prefix: 'G' | 'C'): string[] {
  if (!text) return [];
  const re = prefix === 'G'
    ? /G-\d+(?:\.\.G-\d+)?\s*\([^)]*\)/g
    : /C-\d+\s*\([^)]*\)/g;
  return [...text.matchAll(re)].map((m) => m[0].trim());
}