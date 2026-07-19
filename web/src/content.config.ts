import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { fileURLToPath } from 'node:url';

// All five collections point at the repo-root content directories. Loader
// base paths in Astro v5 are resolved relative to the project root (the
// directory containing astro.config.mjs, i.e. web/). We use absolute file://
// URLs so the path is unambiguous regardless of where the build runs from.
// This keeps a single source of truth: the same .md files are readable on
// GitHub and renderable on the website.

const repoRoot = fileURLToPath(new URL('../../', import.meta.url));

// Units — the substantive knowledge units.
// Schema uses kebab-case field names to match existing frontmatter
// convention established across the corpus. Excludes README.md and
// _index.md at the directory root (human-facing directory docs).
// Date-like fields accept string|number|date because YAML parses
// ISO dates as native Date objects.
const units = defineCollection({
  loader: glob({ pattern: '**/!(README|_index)*.md', base: `${repoRoot}units` }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    'sector-position': z.string().optional(),
    'ai-technique-class': z.string().optional(),
    purpose: z.string().optional(),
    'claim-type': z.string().optional(),
    'activity-status': z.string().optional(),
    'critical-voice': z.string().optional(),
    'capital-intensity': z.string().optional(),
    'language-literacy-profile': z.string().optional(),
    'policy-instrument': z.string().optional(),
    region: z.string().optional(),
    actor: z.string().optional(),
    'actor-type': z.string().optional(),
    'data-governance': z.string().optional(),
    'data-rights-framework': z.string().optional(),
    'last-verified': z.union([z.string(), z.number(), z.date()]).optional(),
    'last-regionally-scanned': z.union([z.string(), z.number(), z.date()]).optional(),
    'maturity-scale': z.string().optional(),
    'maturity-verification': z.string().optional(),
    'maturity-longevity': z.string().optional(),
    'maturity-translation': z.string().optional(),
    summary: z.string().optional(),
  }),
});

// Scans — regional or topic scans (synthesizing multiple units).
const scans = defineCollection({
  loader: glob({ pattern: '**/!(README|_index)*.md', base: `${repoRoot}scans` }),
  schema: z.object({
    title: z.string().optional(),
    region: z.string().optional(),
    scope: z.string().optional(),
    summary: z.string().optional(),
    date: z.string().optional(),
    units_anchored: z.array(z.string()).default([]),
  }),
});

// Quotes — speaker voices, verbatim or paraphrased.
// Quote files use `id` as identifier and may have unquoted year-only dates,
// so the schema accepts string|number|date for date-like fields.
const quotes = defineCollection({
  loader: glob({ pattern: '**/!(README|_index)*.md', base: `${repoRoot}quotes` }),
  schema: z.object({
    title: z.string().optional(),
    id: z.string().optional(),
    speaker: z.string().optional(),
    category: z.string().optional(),
    region: z.string().optional(),
    quote_date: z.union([z.string(), z.number(), z.date()]).optional(),
    date: z.union([z.string(), z.number(), z.date()]).optional(),
  }),
});

// Talks — methodology, repeatable spines for assembling talks.
// Includes the archetypes subdirectory; the archetypes collection below
// filters to just the archetypes.
const talks = defineCollection({
  loader: glob({ pattern: '**/!(README|_index)*.md', base: `${repoRoot}talks` }),
  schema: z.object({
    title: z.string().optional(),
    archetype: z.string().optional(),
    audience: z.string().optional(),
    duration: z.string().optional(),
    summary: z.string().optional(),
  }),
});

// Archetypes — repeatable talk-assembly patterns.
const archetypes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: `${repoRoot}talks/archetypes` }),
  schema: z.object({
    title: z.string(),
    archetype_number: z.number().optional(),
    audience: z.string().optional(),
    duration: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { units, scans, quotes, talks, archetypes };