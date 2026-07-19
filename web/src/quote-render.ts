// web/src/quote-render.ts
// Render a markdown excerpt (just the ## Quote / Position section)
// as HTML at build time, preserving blockquotes, italics, bold, and links.
// This is the right way to handle quote-within-quote and paraphrase-after-quote
// structures that a regex-flatten approach loses.

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify);

export async function renderMarkdownExcerpt(md: string): Promise<string> {
  const file = await processor.process(md);
  return String(file);
}

/**
 * Extract the body of a `## Quote / Position` section from raw markdown.
 * If the section doesn't exist, returns an empty string.
 * The returned body still has the `>` blockquote markers intact, so
 * remark will render them as nested <blockquote> elements.
 */
export function extractQuoteSection(rawMarkdown: string): string {
  const match = rawMarkdown.match(
    /^## Quote\s*\/\s*Position\s*\n+([\s\S]*?)(?=\n## |\n*$)/m
  );
  if (!match) return '';
  return match[1].trim();
}