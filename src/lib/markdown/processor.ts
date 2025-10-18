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

// Available GitHub-style themes
export const GITHUB_THEMES = {
  'github-dark': 'GitHub Dark',
  'github-light': 'GitHub Light', 
  'dark-plus': 'VS Code Dark+',
  'light-plus': 'VS Code Light+',
  'dark-modern': 'Dark Modern',
  'light-modern': 'Light Modern',
  'min-dark': 'Minimal Dark',
  'min-light': 'Minimal Light',
  'one-dark-pro': 'One Dark Pro',
  'dracula': 'Dracula',
  'monokai': 'Monokai',
  'nord': 'Nord',
  'tokyo-night': 'Tokyo Night',
  'catppuccin-mocha': 'Catppuccin Mocha',
  'catppuccin-latte': 'Catppuccin Latte',
} as const;

export type GitHubTheme = keyof typeof GITHUB_THEMES;

// Default theme
const DEFAULT_THEME: GitHubTheme = 'github-dark';

/**
 * Custom rehype plugin to add copy buttons to code blocks
 */
function rehypeCopyCode() {
  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      // rehype-pretty-code creates a structure like: div > pre > code
      if (node.tagName === 'div' && node.properties?.className?.includes('highlight')) {
        console.log('Found highlight div, adding copy button');
        const preElement = node.children?.find((child: any) => child.tagName === 'pre');
        if (preElement) {
          const codeElement = preElement.children?.find((child: any) => child.tagName === 'code');
          if (codeElement) {
            // Extract text content from the code element
            const extractText = (element: any): string => {
              if (element.type === 'text') {
                return element.value || '';
              }
              if (element.children) {
                return element.children.map(extractText).join('');
              }
              return '';
            };
            
            const codeText = extractText(codeElement);
            
            // Add copy button to the div wrapper
            node.children = [
              {
                type: 'element',
                tagName: 'button',
                properties: {
                  className: ['copy-button', 'absolute', 'top-2', 'right-2', 'p-2', 'bg-gray-800/50', 'hover:bg-gray-700/50', 'text-gray-400', 'hover:text-white', 'rounded', 'opacity-0', 'group-hover:opacity-100', 'transition-all', 'duration-200', 'z-10'],
                  'data-code': codeText,
                  title: 'Copy code'
                },
                children: [
                  {
                    type: 'element',
                    tagName: 'svg',
                    properties: {
                      width: '16',
                      height: '16',
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      stroke: 'currentColor',
                      'stroke-width': '2',
                      'stroke-linecap': 'round',
                      'stroke-linejoin': 'round'
                    },
                    children: [
                      {
                        type: 'element',
                        tagName: 'rect',
                        properties: {
                          width: '14',
                          height: '14',
                          x: '8',
                          y: '8',
                          rx: '2',
                          ry: '2'
                        }
                      },
                      {
                        type: 'element',
                        tagName: 'path',
                        properties: {
                          d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'
                        }
                      }
                    ]
                  }
                ]
              },
              ...node.children
            ];
            
            // Add group class to the div wrapper for hover effects
            if (node.properties?.className) {
              node.properties.className.push('group', 'relative');
            } else {
              node.properties = { ...node.properties, className: ['group', 'relative'] };
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
    code: [['className']],
    div: [['className']],
    span: [['className']],
    pre: [['className']],
    button: [['className', 'data-code', 'title']],
    svg: [['width', 'height', 'viewBox', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin']],
    rect: [['width', 'height', 'x', 'y', 'rx', 'ry']],
    path: [['d']],
    polyline: [['points']],
    img: [...(defaultSchema.attributes?.img || []), ['loading']],
    a: [...(defaultSchema.attributes?.a || []), ['target', 'rel']],
  },
  tagNames: [
    ...(defaultSchema.tagNames || []),
    'input', // for task list checkboxes
    'button', // for copy buttons
    'svg', 'rect', 'path', 'polyline', // for copy button icons
    'script', // for copy functionality
  ],
  protocols: {
    ...defaultSchema.protocols,
    src: ['http', 'https', 'data'],
    href: ['http', 'https', 'mailto'],
  },
};

/**
 * Build the unified markdown processor pipeline with specified theme
 */
function createProcessor(theme: GitHubTheme = DEFAULT_THEME) {
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
      theme: theme,
      onVisitLine(node: any) {
        // Prevent lines with class name `error` from being highlighted
        if (node.properties.className?.includes('error')) {
          node.properties.className = 'error';
        }
      },
      onVisitHighlightedLine(node: any) {
        // Add class to highlighted lines
        node.properties.className.push('highlighted');
      },
      onVisitHighlightedChars(node: any) {
        // Add class to highlighted characters
        node.properties.className = 'word';
      },
      getHighlighter: async (options: any) => {
        const { getHighlighter } = await import('shiki');
        return getHighlighter(options);
      },
    } as any)
    .use(rehypeCopyCode)
    .use(rehypeSanitize, sanitizeSchema as any)
    .use(rehypeStringify);
}

// Default processor for backward compatibility
const processor = createProcessor();

/**
 * Convert markdown content to sanitized HTML with specified theme
 * @param content - Markdown content string
 * @param theme - GitHub theme to use for syntax highlighting
 * @returns Sanitized HTML string
 */
export async function markdownToHtml(content: string, theme: GitHubTheme = DEFAULT_THEME): Promise<string> {
  try {
    if (!content || typeof content !== 'string') {
      return '';
    }

    console.log('Processing markdown with theme:', theme);
    const processorWithTheme = createProcessor(theme);
    const file = await processorWithTheme.process(content);
    const html = String(file);
    
    // Debug: Check if code blocks are present
    const hasCodeBlocks = html.includes('<pre') || html.includes('highlight');
    console.log('Generated HTML contains code blocks:', hasCodeBlocks);
    if (hasCodeBlocks) {
      console.log('Code block structure:', html.match(/<div[^>]*class="[^"]*highlight[^"]*"[^>]*>.*?<\/div>/gs)?.[0]?.substring(0, 200));
    }
    
    // Add copy functionality script
    const copyScript = `
      <script>
        (function() {
          function initCopyButtons() {
            const copyButtons = document.querySelectorAll('.copy-button');
            copyButtons.forEach(button => {
              button.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const code = button.getAttribute('data-code');
                if (!code) return;
                
                try {
                  await navigator.clipboard.writeText(code);
                  
                  // Visual feedback
                  const originalHTML = button.innerHTML;
                  button.innerHTML = \`
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  \`;
                  button.classList.add('text-green-400');
                  
                  setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.classList.remove('text-green-400');
                  }, 2000);
                } catch (err) {
                  console.error('Failed to copy code:', err);
                }
              });
            });
          }
          
          // Initialize when DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initCopyButtons);
          } else {
            initCopyButtons();
          }
        })();
      </script>
    `;
    
    return html + copyScript;
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
