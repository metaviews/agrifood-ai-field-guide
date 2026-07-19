// web/src/archetype-metadata.ts
// Each archetype file has a ## Header section with a 2-column table
// containing Spine, Audience, Duration, Depth, Region emphasis, and Stance.
// Parse it at build time so the talks index can render richer metadata.

export interface ArchetypeMeta {
  spine: string;
  audience: string;
  duration: string;
  depth: string;
  region: string;
  stance: string;
}

export function parseArchetypeHeader(rawMarkdown: string): ArchetypeMeta {
  const meta: ArchetypeMeta = {
    spine: '',
    audience: '',
    duration: '',
    depth: '',
    region: '',
    stance: '',
  };
  // Find the Header table
  const m = rawMarkdown.match(
    /^## Header\s*\n+\|[\s\S]*?\n((?:\|.+\n)+)/m
  );
  if (!m) return meta;
  const rows = m[1].trim().split('\n');
  for (const row of rows) {
    const cols = row.split('|').map((c) => c.trim()).filter((c) => c.length > 0);
    if (cols.length < 2) continue;
    const key = cols[0].replace(/\*\*/g, '').trim().toLowerCase();
    const value = cols[1].replace(/\*\*/g, '').trim();
    if (key === 'spine') meta.spine = value;
    else if (key === 'audience') meta.audience = value;
    else if (key === 'duration') meta.duration = value;
    else if (key === 'depth') meta.depth = value;
    else if (key === 'region emphasis') meta.region = value;
    else if (key === 'stance') meta.stance = value;
  }
  return meta;
}