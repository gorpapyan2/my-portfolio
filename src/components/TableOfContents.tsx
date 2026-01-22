import { useState, useEffect } from 'react';
import List from 'lucide-react/dist/esm/icons/list';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import { TranslationText } from './shared/TranslationText';

interface TableOfContentsProps {
  className?: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ className = "" }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Extract headings from the content
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const items: TocItem[] = [];

    headings.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
      if (id) {
        heading.id = id; // Ensure the heading has an ID
        items.push({
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1))
        });
      }
    });

    setTocItems(items);

    // Set up intersection observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <div className={`bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)] p-[var(--space-16)] ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-[var(--space-8)] w-full text-left text-[var(--text)] hover:text-accent transition-colors text-[length:var(--font-100)] font-medium"
      >
        <List className="h-[var(--space-16)] w-[var(--space-16)]" />
        <TranslationText translationKey="blog.tableOfContents" as="span" shimmerWidth="150px" className="font-medium" />
        {isExpanded ? (
          <ChevronDown className="h-[var(--space-16)] w-[var(--space-16)] ml-auto" />
        ) : (
          <ChevronRight className="h-[var(--space-16)] w-[var(--space-16)] ml-auto" />
        )}
      </button>
      
      {isExpanded && (
        <nav className="mt-[var(--space-12)] stack [--stack-space:var(--space-4)]">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`block w-full text-left text-[length:var(--font-100)] transition-colors ${
                activeId === item.id
                  ? 'text-accent font-medium'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
              style={{ paddingLeft: `calc(${item.level - 1} * var(--space-12))` }}
            >
              {item.text}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

