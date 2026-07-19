// web/src/scan-buckets.ts
// Maps a scan's filename id and title to a thematic bucket. Scans are
// regional or topic overviews, so the bucket axis is geography first
// and cross-cutting themes second.

export const SCAN_BUCKET_ORDER: { id: string; label: string; description: string }[] = [
  {
    id: 'foundational',
    label: 'Foundational scans',
    description: 'Initial environmental scans and roundups that established the field-guide scope.',
  },
  {
    id: 'canada',
    label: 'Canada',
    description: 'Canadian regional cycles, federal programs, ecosystem analyses, and Quebec-specific scans.',
  },
  {
    id: 'united-states',
    label: 'United States',
    description: 'US academic and industry deployment cycles.',
  },
  {
    id: 'latin-america',
    label: 'Latin America',
    description: 'Brazilian, Argentine, and LAC multilateral-institutional cycles.',
  },
  {
    id: 'europe',
    label: 'Europe',
    description: 'French, Spanish, and broader European scans including the cooperative-AI cluster pattern.',
  },
  {
    id: 'east-asia',
    label: 'East Asia',
    description: 'China, Japan, Korea cycles.',
  },
  {
    id: 'south-asia',
    label: 'South Asia',
    description: 'India and South Asian DPI-substrate analyses.',
  },
  {
    id: 'mena',
    label: 'Middle East and North Africa',
    description: 'MENA sub-patterns and Mediterranean bridge scans.',
  },
  {
    id: 'cross-cutting',
    label: 'Cross-cutting themes',
    description: 'Multi-region cycles on data sovereignty, open source, and industry activity.',
  },
];

// Each bucket lists patterns that, if found in the id or the title,
// assign the scan to that bucket. The first match wins. Patterns that
// could match across multiple regions (e.g. na-eu, industry-activity)
// are checked first so they don't get captured by a regional rule.
const BUCKET_RULES: Array<[string, RegExp]> = [
  // Cross-region surveys first — they would otherwise match the regional rules
  ['cross-cutting', /na[\s-]eu|industry[\s-]activity|north america and europe/i],

  // Foundational — roundups that aren't region-specific
  ['foundational', /^(2026-07-)?regional$|\binitial[\s-]environmental\b/i],

  // Specific regional buckets (order matters: more specific first)
  ['canada', /canada|quebec|\bfcc\b/i],
  ['united-states', /us-academic|united-states|\bna[\s-]us\b/i],
  ['latin-america', /argentin|brazil|\blac\b|latin[\s-]america|chile/i],
  ['europe', /france|\bspain\b|spanish|europe/i],
  ['east-asia', /china|japan|korea|east[\s-]asia/i],
  ['south-asia', /india|south[\s-]asia/i],
  ['mena', /\bmena\b|north[\s-]africa|lebanon/i],

  // Theme-specific cycles
  ['cross-cutting', /data[\s-]cycle|open[\s-]source/i],
];

export function scanBucket(id: string, title?: string): string {
  const haystack = `${id} ${title ?? ''}`;
  for (const [bucket, re] of BUCKET_RULES) {
    if (re.test(haystack)) return bucket;
  }
  return 'cross-cutting';
}