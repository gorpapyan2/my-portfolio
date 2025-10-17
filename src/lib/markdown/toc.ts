import { Root, Heading } from 'mdast';
import { visit } from 'unist-util-visit';

export interface TocEntry {
  id: string;
  depth: number;
  text: string;
}

/**
 * Extract table of contents from markdown AST
 * Filters H2 and H3 headings only
 * @param ast - MDAST root node
 * @returns Array of TOC entries with id, depth, and text
 */
export function extractToc(ast: Root | null): TocEntry[] {
  if (!ast) return [];

  const headings: TocEntry[] = [];

  visit(ast, 'heading', (node: Heading) => {
    // Only include H2 and H3
    if (node.depth < 2 || node.depth > 3) return;

    // Extract text from children
    const text = extractTextFromNode(node);
    if (!text) return;

    // Generate ID from text (matching rehype-slug behavior)
    const id = generateId(text);

    headings.push({
      id,
      depth: node.depth,
      text,
    });
  });

  return headings;
}

/**
 * Extract plain text from a node and its children
 * @param node - MDAST node
 * @returns Plain text content
 */
function extractTextFromNode(node: any): string {
  let text = '';

  if (node.type === 'text') {
    return node.value;
  }

  if (node.children && Array.isArray(node.children)) {
    text = node.children.map((child: any) => extractTextFromNode(child)).join('');
  }

  return text;
}

/**
 * Generate URL-safe ID from text
 * Matches rehype-slug behavior for consistency
 * @param text - Heading text
 * @returns URL-safe ID
 */
function generateId(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '')
    .replace(/\-+/g, '-')
    .replace(/^\-+|\-+$/g, '');
}
