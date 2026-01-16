import { useEffect, useState, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { markdownToHtml } from '../../lib/markdown/processor';
import { useTheme } from '../../context/ThemeContext';
import { CopyButton } from './CopyButton';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Render markdown content using remark/rehype pipeline
 * Supports GitHub-flavored markdown with syntax highlighting and sanitization
 * 
 * Features:
 * - GFM (tables, task lists, strikethrough, autolinks, footnotes)
 * - Dual-theme syntax highlighting with Shiki
 * - Safe HTML rendering (XSS protection via sanitizer)
 * - Responsive images with lazy loading
 * - External links with target="_blank" and rel="noopener noreferrer"
 * - Copy-to-clipboard buttons on code blocks
 */
export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const { theme } = useTheme();
  const [html, setHtml] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const copyButtonRootsRef = useRef<Root[]>([]);

  useEffect(() => {
    const processMarkdown = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        if (!content) {
          setHtml('');
          return;
        }

        const result = await markdownToHtml(content, theme);
        setHtml(result);
      } catch (err) {
        console.error('Error rendering markdown:', err);
        setError(err instanceof Error ? err.message : 'Failed to render markdown');
        setHtml('');
      } finally {
        setIsLoading(false);
      }
    };

    processMarkdown();
  }, [content, theme]);

  // Attach copy buttons to code blocks after HTML is rendered
  useEffect(() => {
    if (!containerRef.current || !html) return;

    // Clean up previous copy button roots
    copyButtonRootsRef.current.forEach(root => {
      try {
        root.unmount();
      } catch {
        // Ignore errors during unmount
      }
    });
    copyButtonRootsRef.current = [];

    // Find all code block wrappers and add copy buttons
    const codeBlocks = containerRef.current.querySelectorAll('.code-block-wrapper');
    
    codeBlocks.forEach((block) => {
      const codeContent = block.getAttribute('data-code-content');
      if (!codeContent) return;

      // Add group class for hover effects
      block.classList.add('group', 'relative');

      // Create a container for the copy button
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'copy-button-container';
      block.appendChild(buttonContainer);

      // Render the CopyButton React component
      const root = createRoot(buttonContainer);
      root.render(<CopyButton code={codeContent} />);
      copyButtonRootsRef.current.push(root);
    });

    // Cleanup function
    return () => {
      copyButtonRootsRef.current.forEach(root => {
        try {
          root.unmount();
        } catch {
          // Ignore errors during unmount
        }
      });
      copyButtonRootsRef.current = [];
    };
  }, [html]);

  if (isLoading) {
    return (
      <div className={`${className}`}>
        <div className="animate-pulse stack [--stack-space:var(--space-16)]">
          <div className="h-[var(--space-16)] bg-[var(--surface-strong)] rounded-[var(--radius-sm)] w-3/4" />
          <div className="h-[var(--space-16)] bg-[var(--surface-strong)] rounded-[var(--radius-sm)] w-full" />
          <div className="h-[var(--space-16)] bg-[var(--surface-strong)] rounded-[var(--radius-sm)] w-4/5" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-red-400 text-[length:var(--font-100)] p-[var(--space-16)] bg-red-400/10 rounded-[var(--radius-md)] ${className}`}>
        Error rendering markdown: {error}
      </div>
    );
  }

  if (!html) {
    return (
      <div className={`text-[var(--text-muted)] italic text-[length:var(--font-100)] p-[var(--space-16)] ${className}`}>
        No content to display
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      key={html.substring(0, 50)} // Force re-mount on content change
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ scrollMarginTop: '80px' }} // CSS scroll offset for headings
    />
  );
}
