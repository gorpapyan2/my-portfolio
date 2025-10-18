import { Root, Heading } from 'mdast';

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

  // Recursive tree traversal to find all headings
  function traverse(node: any) {
    if (node.type === 'heading') {
      // Only include H2 and H3
      if (node.depth < 2 || node.depth > 3) {
        // Still traverse children
        if (node.children && Array.isArray(node.children)) {
          node.children.forEach(traverse);
        }
        return;
      }

      // Extract text from heading
      const text = extractTextFromNode(node);
      if (!text) {
        if (node.children && Array.isArray(node.children)) {
          node.children.forEach(traverse);
        }
        return;
      }

      // Generate ID from text (matching rehype-slug behavior)
      const id = generateId(text);

      headings.push({
        id,
        depth: node.depth,
        text,
      });
    }

    // Recurse through children
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach(traverse);
    }
  }

  traverse(ast);
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
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}
