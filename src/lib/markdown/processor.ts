import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import { Root } from 'mdast';

/**
 * Configure sanitization schema to allow safe GFM elements
 * while preventing XSS attacks
 */
const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [['className']],
    div: [['className']],
    span: [['className']],
    pre: [['className']],
    img: [...(defaultSchema.attributes?.img || []), ['loading']],
    a: [...(defaultSchema.attributes?.a || []), ['target', 'rel']],
  },
  tagNames: [
    ...(defaultSchema.tagNames || []),
    'input', // for task list checkboxes
  ],
  protocols: {
    ...defaultSchema.protocols,
    src: ['http', 'https', 'data'],
    href: ['http', 'https', 'mailto'],
  },
};

/**
 * Build the unified markdown processor pipeline
 */
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkSmartypants)
  .use(remarkRehype, { allowDangerousHtml: false })
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, {
    behavior: 'wrap',
    properties: {
      className: ['heading-anchor'],
      ariaLabel: 'Link to heading',
    },
  })
  .use(rehypeExternalLinks, {
    target: '_blank',
    rel: ['noopener', 'noreferrer'],
  })
  .use(rehypePrettyCode, {
    keepBackground: false,
    theme: 'github-dark',
    getHighlighter: async (options) => {
      const { getHighlighter } = await import('shiki');
      return getHighlighter(options);
    },
  })
  .use(rehypeSanitize, sanitizeSchema)
  .use(rehypeStringify);

/**
 * Convert markdown content to sanitized HTML
 * @param content - Markdown content string
 * @returns Sanitized HTML string
 */
export async function markdownToHtml(content: string): Promise<string> {
  try {
    if (!content || typeof content !== 'string') {
      return '';
    }

    const file = await processor.process(content);
    return String(file);
  } catch (error) {
    console.error('Error processing markdown:', error);
    return '';
  }
}

/**
 * Parse markdown to AST for headings extraction
 * Used for generating table of contents
 * @param content - Markdown content string
 * @returns MDAST root node
 */
export async function parseMarkdown(content: string): Promise<Root | null> {
  try {
    if (!content || typeof content !== 'string') {
      return null;
    }

    const ast = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .parse(content);

    return ast as Root;
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return null;
  }
}

/**
 * Export processor for advanced usage
 */
export { processor };
