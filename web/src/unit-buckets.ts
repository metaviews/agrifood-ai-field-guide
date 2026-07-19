// web/src/unit-buckets.ts
// Maps a unit's sector-position string to a thematic bucket.
// The sector-position field is too varied for exact match, so we use
// keyword detection across the comma-separated sector-position values.

export interface UnitBuckets {
  buckets: string[];   // bucket ids the unit belongs to (in order)
}

// Bucket order = display order on the units index.
export const BUCKET_ORDER: { id: string; label: string; description: string }[] = [
  {
    id: 'on-farm-open',
    label: 'On-farm production — broadacre crops',
    description: 'Large-scale field crops, row crops, grains, oilseeds. AI for precision application, autonomous machinery, satellite/aerial sensing.',
  },
  {
    id: 'on-farm-specialty',
    label: 'On-farm production — specialty and indoor',
    description: 'Fruits, vegetables, greenhouse, vertical farming, hydroponics, controlled-environment agriculture.',
  },
  {
    id: 'on-farm-animal',
    label: 'On-farm production — livestock and animal',
    description: 'Dairy, beef, pork, poultry, aquaculture. AI for monitoring, sorting, and animal welfare.',
  },
  {
    id: 'inputs',
    label: 'Inputs and breeding',
    description: 'Seed genetics, fertilizers, agrochemicals, breeding pipelines.',
  },
  {
    id: 'processing',
    label: 'Processing and optical sorting',
    description: 'Food processing, meat and produce handling, hyperspectral and computer-vision sorting.',
  },
  {
    id: 'distribution',
    label: 'Distribution, foodservice and wholesale',
    description: 'Forecasting, logistics, restaurant and grocery supply chain.',
  },
  {
    id: 'retail',
    label: 'Retail and consumer-facing',
    description: 'Grocery e-commerce, in-store assistants, delivery, consumer nutrition apps.',
  },
  {
    id: 'waste',
    label: 'Waste and recovery',
    description: 'Food-waste tracking, surplus redistribution, recovery and diversion.',
  },
  {
    id: 'critical',
    label: 'Critical voices and frameworks',
    description: 'Independent analyses, academic critiques, open-source frameworks, data-sovereignty positions.',
  },
  {
    id: 'cross',
    label: 'Cross-cutting and methodology',
    description: 'Multi-sector frameworks, methodology, validation infrastructure, data infrastructure.',
  },
];

const BUCKET_KEYWORDS: Record<string, RegExp> = {
  'on-farm-open': /\b(on-farm[\s-]*production[\s-]*open[\s-]*field|broadacre|field crops?|row crops?|grains?|oilseeds?)\b/i,
  'on-farm-specialty': /\b(on-farm[\s-]*production[\s-]*protected|greenhouse|vertical[\s-]*farm|hydropon|controlled[\s-]*environment|specialty|fruits?|vegetables?)\b/i,
  'on-farm-animal': /\b(animal[\s-]*production|livestock|dairy|beef|pork|poultry|aquaculture)\b/i,
  'inputs': /\b(inputs|seed[\s-]*genetics|breeding|fertili[sz]er|agrochemical|germplasm)\b/i,
  'processing': /\b(processing|sorting|optical[\s-]*sort|hyperspectral|meat[\s-]*processing|food[\s-]*processing|carcass|vision[\s-]*robotics)\b/i,
  'distribution': /\b(distribution[\s-]*and[\s-]*retail|distribution|foodservice|wholesale|grocery[\s-]*wholesale|logistics|forecasting)\b/i,
  'retail': /\b(consumption|retail|consumer[\s-]*facing|delivery|qsr|restaurant|grocery[\s-]*e[\s-]*commerce|nutrition[\s-]*app)\b/i,
  'waste': /\b(waste[\s-]*and[\s-]*recovery|food[\s-]*waste|surplus|recovery|diversion)\b/i,
  'critical': /\b(critical[\s-]*voice|critical[\s-]*lens|open[\s-]*source[\s-]*in[\s-]*agrifood|data[\s-]*sovereignty|data[\s-]*ownership|cooperative|co[\s-]*op|indigenous[\s-]*data|sociological)\b/i,
  'cross': /\b(cross[\s-]*cutting|cross[\s-]*value[\s-]*chain|methodology|validation|foundational|infrastructure)\b/i,
};

const BUCKET_LABEL_OVERRIDES: Record<string, string> = {
  'critical': 'critical-voice',
  'cross': 'cross-cutting',
  'inputs': 'inputs',
};

// The sector-position string is multi-value, comma-separated, with optional
// parenthetical notes. We test each bucket's keyword regex against the
// full string. A unit may match multiple buckets; the unit appears in
// each bucket where it has a match.
export function bucketize(sectorPosition: string | undefined): string[] {
  if (!sectorPosition) return ['cross'];
  const matches: string[] = [];
  for (const bucket of BUCKET_ORDER) {
    const re = BUCKET_KEYWORDS[bucket.id];
    if (re && re.test(sectorPosition)) {
      matches.push(bucket.id);
    }
  }
  return matches.length > 0 ? matches : ['cross'];
}