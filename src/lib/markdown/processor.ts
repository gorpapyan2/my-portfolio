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
import { visit } from 'unist-util-visit';
import { Root } from 'mdast';

type HastNode = {
  type?: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
  value?: string;
};

type RehypePrettyCodeNode = {
  properties: {
    className?: string[];
  };
};

// Theme type for dual-theme support
export type AppTheme = 'light' | 'dark';

/**
 * Custom rehype plugin to add data attributes to code blocks for React copy button
 */
function rehypeCodeMeta() {
  return (tree: HastNode) => {
    visit(tree as unknown as HastNode, 'element', (node: HastNode) => {
      // Handle both figure (with titles) and direct pre elements
      const isFigure = node.tagName === 'figure' && node.properties?.['data-rehype-pretty-code-figure'] !== undefined;
      const isPre = node.tagName === 'pre';
      
      if (isFigure || isPre) {
        // For figures, find the pre element; for pre, use it directly
        const preElement = isFigure
          ? node.children?.find((child) => child.tagName === 'pre')
          : node;
          
        if (preElement) {
          const codeElement = preElement.children?.find((child) => child.tagName === 'code');
          if (codeElement) {
            // Extract text content from the code element
            const extractText = (element: HastNode): string => {
              if (element.type === 'text') {
                return element.value || '';
              }
              if (element.children) {
                return element.children.map(extractText).join('');
              }
              return '';
            };
            
            const codeText = extractText(codeElement);
            
            // Add data attributes and classes to the wrapper (figure or pre)
            const targetNode = isFigure ? node : preElement;
            if (!targetNode.properties) {
              targetNode.properties = {};
            }
            targetNode.properties['data-code-content'] = codeText;
            
            // Add wrapper class
            const className = targetNode.properties.className;
            const existingClasses = Array.isArray(className)
              ? className
              : className
                ? [String(className)]
                : [];
            if (!existingClasses.includes('code-block-wrapper')) {
              targetNode.properties.className = [...existingClasses, 'code-block-wrapper'];
            }
          }
        }
      }
    });
  };
}

/**
 * Configure sanitization schema to allow safe GFM elements
 * while preventing XSS attacks
 */
const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [['className', 'data-line', 'data-line-numbers', 'data-language']],
    div: [['className', 'data-code-content']],
    span: [['className', 'data-line', 'data-highlighted-line', 'data-highlighted-chars', 'style']],
    pre: [['className', 'data-language', 'data-theme', 'data-code-content']],
    figure: [['className', 'data-rehype-pretty-code-figure', 'data-code-content']],
    figcaption: [['className', 'data-rehype-pretty-code-title']],
    img: [...(defaultSchema.attributes?.img || []), ['loading']],
    a: [...(defaultSchema.attributes?.a || []), ['target', 'rel']],
  },
  tagNames: [
    ...(defaultSchema.tagNames || []),
    'input', // for task list checkboxes
    'figure', // for code blocks with titles
    'figcaption', // for code titles
  ],
  protocols: {
    ...defaultSchema.protocols,
    src: ['http', 'https', 'data'],
    href: ['http', 'https', 'mailto'],
  },
};

/**
 * Build the unified markdown processor pipeline with dual theme support
 */
function createProcessor(theme: AppTheme = 'dark') {
  void theme;
  return unified()
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
      theme: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      defaultLang: 'plaintext',
      onVisitLine(node: RehypePrettyCodeNode) {
        // Ensure each line has at least one class for proper styling
        if (!node.properties.className || node.properties.className.length === 0) {
          node.properties.className = ['line'];
        }
      },
      onVisitHighlightedLine(node: RehypePrettyCodeNode) {
        // Add class to highlighted lines
        if (!node.properties.className) {
          node.properties.className = [];
        }
        node.properties.className.push('highlighted');
      },
      onVisitHighlightedChars(node: RehypePrettyCodeNode) {
        // Add class to highlighted characters
        node.properties.className = ['word'];
      },
    } as Parameters<typeof rehypePrettyCode>[0])
    .use(rehypeCodeMeta)
    .use(rehypeSanitize, sanitizeSchema as Parameters<typeof rehypeSanitize>[0])
    .use(rehypeStringify);
}

// Default processor for backward compatibility
const processor = createProcessor();

/**
 * Convert markdown content to sanitized HTML with dual-theme support
 * @param content - Markdown content string
 * @param theme - App theme ('light' or 'dark') - not used but kept for API compatibility
 * @returns Sanitized HTML string with dual-theme tokens
 */
export async function markdownToHtml(content: string, theme: AppTheme = 'dark'): Promise<string> {
  try {
    if (!content || typeof content !== 'string') {
      return '';
    }

    const processorWithTheme = createProcessor(theme);
    const file = await processorWithTheme.process(content);
    const html = String(file);
    
    return html;
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
 * Export processor and utilities for advanced usage
 */
export { processor, createProcessor };
