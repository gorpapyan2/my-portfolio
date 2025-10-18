import { useEffect, useState } from 'react';
import { markdownToHtml } from '../../lib/markdown/processor';
import { useSafeCodeTheme } from '../../context/CodeThemeContext';

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
 * - Syntax highlighting with Shiki
 * - Safe HTML rendering (XSS protection via sanitizer)
 * - Responsive images with lazy loading
 * - External links with target="_blank" and rel="noopener noreferrer"
 */
export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const { theme } = useSafeCodeTheme();
  const [html, setHtml] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (isLoading) {
    return (
      <div className={`${className}`}>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-white/10 rounded w-3/4" />
          <div className="h-4 bg-white/10 rounded w-full" />
          <div className="h-4 bg-white/10 rounded w-4/5" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-red-400 text-sm p-4 bg-red-400/10 rounded ${className}`}>
        Error rendering markdown: {error}
      </div>
    );
  }

  if (!html) {
    return (
      <div className={`text-gray-500 italic p-4 ${className}`}>
        No content to display
      </div>
    );
  }

  return (
    <div
      key={html.substring(0, 50)} // Force re-mount on content change
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ scrollMarginTop: '80px' }} // CSS scroll offset for headings
    />
  );
}
