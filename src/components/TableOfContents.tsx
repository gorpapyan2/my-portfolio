import { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronRight } from 'lucide-react';
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
    <div className={`bg-white/5 rounded-lg border border-white/10 p-4 ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 w-full text-left text-white hover:text-[#edfc3a] transition-colors"
      >
        <List className="h-4 w-4" />
        <TranslationText translationKey="blog.tableOfContents" as="span" shimmerWidth="150px" className="font-medium" />
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 ml-auto" />
        ) : (
          <ChevronRight className="h-4 w-4 ml-auto" />
        )}
      </button>
      
      {isExpanded && (
        <nav className="mt-3 space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`block w-full text-left text-sm transition-colors ${
                activeId === item.id
                  ? 'text-[#edfc3a] font-medium'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
            >
              {item.text}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
