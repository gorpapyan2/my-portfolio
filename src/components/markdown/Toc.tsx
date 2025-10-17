import { useEffect, useState } from 'react';
import { TocEntry } from '../../lib/markdown/toc';

interface TocProps {
  headings: TocEntry[];
  className?: string;
}

/**
 * Table of Contents component
 * Displays H2/H3 headings with smooth scrolling and active section highlighting
 * Uses IntersectionObserver to track current section
 */
export function Toc({ headings, className = '' }: TocProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headings.length === 0) return;

    // Create intersection observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        let active = '';
        
        // Find the first visible heading (top of viewport)
        for (const entry of entries) {
          if (entry.isIntersecting) {
            active = entry.target.id;
            break;
          }
        }

        if (active) {
          setActiveId(active);
        }
      },
      {
        rootMargin: '-64px 0px -60% 0px',
      }
    );

    // Observe all heading elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={`bg-white/5 rounded-lg border border-white/10 p-4 ${className}`}>
      <h3 className="text-white font-semibold text-sm mb-4">On this page</h3>
      
      <div className="space-y-2">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          const isH3 = heading.depth === 3;
          
          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleScroll(e, heading.id)}
              className={`
                block text-sm transition-colors duration-200 px-3 py-1.5 rounded
                ${isH3 ? 'ml-4' : ''}
                ${isActive
                  ? 'text-[#edfc3a] font-medium bg-[#edfc3a]/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {heading.text}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
