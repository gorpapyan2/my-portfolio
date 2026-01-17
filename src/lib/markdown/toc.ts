import type { Root, Content, Heading, Text } from 'mdast';

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
  type MdastNode = Root | Content;
  const hasChildren = (node: MdastNode): node is MdastNode & { children: MdastNode[] } =>
    Array.isArray((node as MdastNode & { children?: MdastNode[] }).children);

  // Recursive tree traversal to find all headings
  function traverse(node: MdastNode) {
    if (node.type === 'heading') {
      const headingNode = node as Heading;
      // Only include H2 and H3
      if (headingNode.depth < 2 || headingNode.depth > 3) {
        // Still traverse children
        if (hasChildren(headingNode)) {
          headingNode.children.forEach(traverse);
        }
        return;
      }

      // Extract text from heading
      const text = extractTextFromNode(headingNode);
      if (!text) {
        if (hasChildren(headingNode)) {
          headingNode.children.forEach(traverse);
        }
        return;
      }

      // Generate ID from text (matching rehype-slug behavior)
      const id = generateId(text);

      headings.push({
        id,
        depth: headingNode.depth,
        text,
      });
    }

    // Recurse through children
    if (hasChildren(node)) {
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
function extractTextFromNode(node: Root | Content): string {
  let text = '';

  if (node.type === 'text') {
    return (node as Text).value;
  }

  if ('children' in node && Array.isArray(node.children)) {
    text = node.children.map((child) => extractTextFromNode(child)).join('');
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
