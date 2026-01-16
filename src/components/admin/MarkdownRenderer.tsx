import { useMemo } from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const cleanContent = (content: string) => {
    return content
      // Fix specific malformed list patterns
      .replace(/^(\d+)\.\./gm, '$1.')  // Fix malformed numbered lists like "1.." -> "1."
      .replace(/^[-*]\.\./gm, '-')      // Fix malformed bullet lists like "-.." -> "-"
      .replace(/^(\d+)\.\s*\./gm, '$1.')  // Fix "1. ." -> "1."
      .replace(/^[-*]\s*\./gm, '-')      // Fix "- ." -> "-"
      .trim();                         // Only trim leading/trailing whitespace
  };

  const renderedContent = useMemo(() => {
    if (!content) return '';

    // Only clean content during rendering, not during input
    const cleanedContent = cleanContent(content);

    const paragraphClass = 'text-[var(--text-muted)] mb-2.5 leading-[1.7]';
    const paragraphClassEscaped = paragraphClass.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    return cleanedContent
      // Headers with IDs for TOC
      .replace(/^### (.*$)/gim, (_, title) => {
        const id = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
        return `<h3 id="${id}" class="text-lg font-semibold text-[var(--text)] mt-5 mb-2 scroll-mt-20">${title}</h3>`;
      })
      .replace(/^## (.*$)/gim, (_, title) => {
        const id = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
        return `<h2 id="${id}" class="text-xl font-semibold text-[var(--text)] mt-7 mb-2.5 scroll-mt-20">${title}</h2>`;
      })
      .replace(/^# (.*$)/gim, (_, title) => {
        const id = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
        return `<h1 id="${id}" class="text-2xl font-bold text-[var(--text)] mt-8 mb-3 scroll-mt-20">${title}</h1>`;
      })
      
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[var(--text)]">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-[var(--text-muted)]">$1</em>')
      
      // Code blocks (must come before inline code)
      .replace(/```([^`]+)```/g, '<pre class="bg-[var(--surface)] p-4 rounded-[var(--radius-md)] my-6 overflow-x-auto border border-[var(--border)]"><code class="text-[var(--text-muted)] font-mono text-[length:var(--font-100)]">$1</code></pre>')
      
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-[var(--surface-strong)] px-2 py-1 rounded text-accent text-[length:var(--font-100)] font-mono">$1</code>')
      
      // Lists - improved regex to handle all cases properly
      .replace(/^(\d+)\.\s*(.+)$/gim, '<li class="text-[var(--text-muted)] ml-6">$1. $2</li>')
      .replace(/^[-*]\s+(.+)$/gim, '<li class="text-[var(--text-muted)] ml-6 relative"><span class="absolute -left-3 w-2 h-2 bg-accent rounded-full top-2"></span>$1</li>')
      
      // Blockquotes
      .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-accent pl-6 italic text-[var(--text-muted)] my-6 bg-[var(--surface)] py-4 rounded-r-[var(--radius-md)]">$1</blockquote>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent hover:text-[var(--text)] underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>')
      
      // Images
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-[var(--radius-md)] my-6 shadow-lg border border-[var(--border)]" />')
      
      // Line breaks
      .replace(/\n\n/g, `</p><p class="${paragraphClass}">`)
      .replace(/\n/g, '<br>')
      
      // Wrap in paragraph tags
      .replace(/^(?!<[h|p|b|u|l|i|d])/gm, `<p class="${paragraphClass}">`)
      .replace(/(?<!>)$/gm, '</p>')
      
      // Clean up empty paragraphs
      .replace(new RegExp(`<p class="${paragraphClassEscaped}"></p>`, 'g'), '')
      .replace(new RegExp(`<p class="${paragraphClassEscaped}"><br></p>`, 'g'), '')
      
      // Clean up list items that are wrapped in paragraphs
      .replace(new RegExp(`<p class="${paragraphClassEscaped}">(<li[^>]*>.*</li>)</p>`, 'g'), '$1')
      
      // Wrap consecutive list items in ul/ol tags
      .replace(/(<li[^>]*>.*<\/li>)(\s*<li[^>]*>.*<\/li>)+/g, (match) => {
        const isOrdered = match.includes('1.') || match.includes('2.') || match.includes('3.');
        const tag = isOrdered ? 'ol' : 'ul';
        return `<${tag} class="my-4 space-y-1">${match}</${tag}>`;
      });
  }, [content]);

  return (
    <div 
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
}


