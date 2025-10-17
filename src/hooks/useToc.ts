import { useState, useEffect } from 'react';
import { TocEntry, extractToc } from '../lib/markdown/toc';
import { parseMarkdown } from '../lib/markdown/processor';

interface UseTocReturn {
  headings: TocEntry[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook to extract table of contents from markdown content
 * Parses content and extracts H2/H3 headings
 * @param content - Markdown content string
 * @returns Object with headings array, loading state, and error
 */
export function useToc(content: string): UseTocReturn {
  const [headings, setHeadings] = useState<TocEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const extractHeadings = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!content) {
          setHeadings([]);
          return;
        }

        // Parse markdown to AST
        const ast = await parseMarkdown(content);
        
        // Extract TOC entries
        const toc = extractToc(ast);
        setHeadings(toc);
      } catch (err) {
        console.error('Error extracting TOC:', err);
        setError(err instanceof Error ? err.message : 'Failed to extract table of contents');
        setHeadings([]);
      } finally {
        setIsLoading(false);
      }
    };

    extractHeadings();
  }, [content]);

  return {
    headings,
    isLoading,
    error,
  };
}
