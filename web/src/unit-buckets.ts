// web/src/unit-buckets.ts
// Maps a unit's sector-position string to a thematic bucket.
// The sector-position field is too varied for exact match, so we use
// keyword detection across the comma-separated sector-position values.
//
// Bucket ids below are stable and used as anchors in the units index.

export interface UnitBuckets {
  buckets: string[];   // bucket ids the unit belongs to (in order)
}

// Bucket order = display order on the units index.
// Granularity is finer than a single sector label so the user can drill
// into specific types of activity rather than scrolling through a long list.
export const BUCKET_ORDER: { id: string; label: string; description: string }[] = [
  // ─── On-farm production ─────────────────────────────────────────
  {
    id: 'on-farm-broadacre',
    label: 'On-farm production — broadacre and row crops',
    description: 'Field-scale crops, grains, oilseeds. AI for precision application, autonomous machinery, satellite and aerial sensing.',
  },
  {
    id: 'on-farm-specialty',
    label: 'On-farm production — specialty crops, fruits and vegetables',
    description: 'Orchard, vineyard, and vegetable production. Crop monitoring, harvest decision support, disease detection.',
  },
  {
    id: 'on-farm-greenhouse',
    label: 'On-farm production — greenhouse and controlled environment',
    description: 'Indoor and vertical farming, hydroponics, controlled-environment agriculture.',
  },
  {
    id: 'on-farm-livestock',
    label: 'On-farm production — livestock and animal',
    description: 'Dairy, beef, pork, poultry, aquaculture. AI for monitoring, robotic milking and feeding, animal welfare.',
  },

  // ─── Inputs and breeding ────────────────────────────────────────
  {
    id: 'inputs',
    label: 'Inputs — seed, breeding and agrochemicals',
    description: 'Seed genetics, breeding pipelines, agrochemical R&D.',
  },

  // ─── Mid-supply-chain ───────────────────────────────────────────
  {
    id: 'processing',
    label: 'Processing and optical sorting',
    description: 'Food processing, meat and produce handling, hyperspectral and computer-vision sorting, carcass grading.',
  },
  {
    id: 'distribution',
    label: 'Distribution, foodservice and wholesale',
    description: 'Forecasting, logistics, restaurant and grocery supply chain, foodservice operations.',
  },
  {
    id: 'retail',
    label: 'Retail and consumer-facing',
    description: 'Grocery e-commerce, in-store assistants, delivery, consumer nutrition apps.',
  },
  {
    id: 'waste',
    label: 'Food waste, surplus and recovery',
    description: 'Food-waste tracking, surplus redistribution, recovery and diversion infrastructure.',
  },

  // ─── Cross-cutting ──────────────────────────────────────────────
  {
    id: 'data-sovereignty',
    label: 'Data sovereignty, ownership and rights',
    description: 'Farmer data ownership, data cooperatives, Indigenous data sovereignty, open-source data infrastructure.',
  },
  {
    id: 'open-source',
    label: 'Open-source frameworks and tooling',
    description: 'Open-source agrifood AI tools, frameworks, and approaches.',
  },
  {
    id: 'cooperative',
    label: 'Cooperative and collective models',
    description: 'Cooperative federation, joint AI deployment, mutual-aid models.',
  },
  {
    id: 'academic',
    label: 'Academic and institute-led work',
    description: 'University and research-institute programmes, AI centres and consortia.',
  },
  {
    id: 'policy',
    label: 'Policy, regulation and standards',
    description: 'Government strategies, regulatory frameworks, standards bodies, certification programmes.',
  },
  {
    id: 'framework',
    label: 'Frameworks, methodology and assessment',
    description: 'Cross-sector frameworks, AI maturity assessment, taxonomy and classification work.',
  },
];

const BUCKET_KEYWORDS: Record<string, RegExp> = {
  'on-farm-broadacre': /\b(on-farm[\s-]*production[\s-]*open[\s-]*field|broadacre|field crops?|row crops?|grains?|oilseeds?|open field)\b/i,
  'on-farm-specialty': /\b(fruits?|vegetables?|orchard|vineyard|specialty crops?)\b/i,
  'on-farm-greenhouse': /\b(greenhouse|vertical[\s-]*farm|hydropon|controlled[\s-]*environment|indoor[\s-]*farm|protected[\s-]*cultivation|on-farm[\s-]*production[\s-]*protected)\b/i,
  'on-farm-livestock': /\b(animal[\s-]*production|livestock|dairy|beef|pork|poultry|aquaculture)\b/i,
  'inputs': /\b(inputs|seed[\s-]*genetics|breeding|fertili[sz]er|agrochemical|germplasm|plant[\s-]*breeding)\b/i,
  'processing': /\b(processing|sorting|optical[\s-]*sort|hyperspectral|meat[\s-]*processing|food[\s-]*processing|carcass|vision[\s-]*robotics|post[\s-]*harvest[\s-]*handling|post[\s-]*harvest[\s-]*and[\s-]*storage)\b/i,
  'distribution': /\b(distribution[\s-]*and[\s-]*retail|distribution|foodservice|wholesale|grocery[\s-]*wholesale|logistics|forecasting)\b/i,
  'retail': /\b(consumption|retail|consumer[\s-]*facing|delivery|qsr|restaurant|grocery[\s-]*e[\s-]*commerce|nutrition[\s-]*app|online[\s-]*grocery)\b/i,
  'waste': /\b(waste[\s-]*and[\s-]*recovery|food[\s-]*waste|surplus|recovery|diversion)\b/i,
  'data-sovereignty': /\b(data[\s-]*sovereignty|data[\s-]*ownership|data[\s-]*rights|indigenous[\s-]*data|care[\s-]*principles)\b/i,
  'open-source': /\b(open[\s-]*source|open[\s-]*data|open[\s-]*pollination)\b/i,
  'cooperative': /\b(cooperative|co[\s-]*op|mutual|co[\s-]*operative|federation|commons|digital[\s-]*commons)\b/i,
  'academic': /\b(academic|institute|university|consortium|research[\s-]*network)\b/i,
  'policy': /\b(policy|regulation|regulatory|standard|certification|government|strategy|extension[\s-]*service)\b/i,
  'framework': /\b(framework|methodology|assessment|taxonomy|validation[\s-]*infrastructure|maturity|cross[\s-]*value[\s-]*chain)\b/i,
};

// bucketize() returns the list of bucket ids a unit belongs to.
// It scans three signals in order: the sector-position field, the
// title, and the summary. Most units belong to exactly one bucket;
// multi-sector units (e.g. a cooperative that spans open-field and
// livestock) appear in multiple buckets. Units with no detectable
// signals land in 'framework' as a generic catch-all.
export function bucketize(unit: { sectorPosition?: string; title?: string; summary?: string }): string[] {
  const haystack = [
    unit.sectorPosition ?? '',
    unit.title ?? '',
    unit.summary ?? '',
  ].join(' \n ');
  if (!haystack.trim()) return ['framework'];
  const matches: string[] = [];
  for (const bucket of BUCKET_ORDER) {
    const re = BUCKET_KEYWORDS[bucket.id];
    if (re && re.test(haystack)) {
      matches.push(bucket.id);
    }
  }
  return matches.length > 0 ? matches : ['framework'];
}