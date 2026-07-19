// remark plugin: strip H2 sections that are corpus-maintenance metadata
// rather than visitor-facing prose. Sections are matched by exact H2 text
// or by case-insensitive prefix. Sections to keep are rendered normally.
//
// Sections to strip (corpus-internal):
//   ## Freshness, ## Links, ## Cycle status, ## Audit notes,
//   ## Maintenance discipline, ## Cross-references, ## G-NNN..., ## C-NNN...
//
// Sections to keep (visitor-facing prose):
//   ## Content, ## Quote / Position, ## Context, ## Source, ## Sources,
//   ## 1. ..., ## 2. ... (numbered narrative), and any H2 not in the strip list.

import { visit } from 'unist-util-visit';

const STRIP_HEADINGS = new Set([
  'freshness',
  'links',
  'cycle status',
  'cycle status — food-side deepening (july 2026)',
  'audit notes',
  'maintenance discipline',
  'cross-references',
  'cross references',
  'method',
  'methodology note',
  'taxonomy placement',
  'taxonomy versioning',
  'cycle summary',
]);

// Prefixes that indicate maintenance / corpus-internal sections
const STRIP_PREFIXES = [
  'g-',         // ## G-NNN ...
  'c-',         // ## C-NNN ...
  'cycle ',     // ## Cycle X — ...
  'audit ',     // ## Audit ...
  'related ',   // ## Related ...
  'index ',     // ## Index ...
];

function shouldStrip(headingText) {
  const normalized = headingText.trim().toLowerCase();
  if (STRIP_HEADINGS.has(normalized)) return true;
  for (const prefix of STRIP_PREFIXES) {
    if (normalized.startsWith(prefix)) return true;
  }
  return false;
}

export function remarkStripMeta() {
  return (tree) => {
    // Walk the tree and find H2 headings followed by content; remove both
    // the heading node and all subsequent nodes up to the next heading at
    // the same or higher depth.
    const children = tree.children;
    const newChildren = [];
    let skipping = false;
    let skipDepth = 0;

    for (let i = 0; i < children.length; i++) {
      const node = children[i];

      if (node.type === 'heading' && node.depth === 2) {
        const text = node.children
          .map((c) => c.value || '')
          .join('')
          .trim();
        if (shouldStrip(text)) {
          skipping = true;
          skipDepth = 2;
          continue; // skip the heading itself
        } else {
          skipping = false;
          skipDepth = 0;
        }
      } else if (skipping && node.type === 'heading' && node.depth <= skipDepth) {
        // We've hit the next H2 (or higher) — stop skipping
        skipping = false;
        skipDepth = 0;
      }

      if (!skipping) {
        newChildren.push(node);
      }
    }

    tree.children = newChildren;
  };
}