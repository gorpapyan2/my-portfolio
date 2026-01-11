import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { TocEntry } from '../../lib/markdown/toc';
import { TranslationText } from '../shared/TranslationText';
import { useLanguage } from '../../context/LanguageContext';

interface TocProps {
  headings: TocEntry[];
  className?: string;
}

/**
 * Table of Contents component
 * Displays H2/H3 headings with smooth scrolling and active section highlighting
 * Uses IntersectionObserver to track current section
 * Auto-scrolls TOC container to keep active item visible
 */
export function Toc({ headings, className = '' }: TocProps) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);
  const tocLinksRef = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const tocContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll TOC container when active item changes
  useEffect(() => {
    if (!activeId) return;

    const activeLinkElement = tocLinksRef.current.get(activeId);
    const container = tocContainerRef.current;
    
    if (activeLinkElement && container) {
      // Check user's motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Use requestAnimationFrame for smooth rendering
      requestAnimationFrame(() => {
        // Calculate positions relative to the TOC container
        const containerRect = container.getBoundingClientRect();
        const elementRect = activeLinkElement.getBoundingClientRect();
        
        // Calculate the scroll position to center the active element
        const containerScrollTop = container.scrollTop;
        const elementOffsetTop = elementRect.top - containerRect.top;
        const targetScrollTop = containerScrollTop + elementOffsetTop - (containerRect.height / 2) + (elementRect.height / 2);
        
        // Scroll only the TOC container, not the page
        container.scrollTo({
          top: targetScrollTop,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      });
    }
  }, [activeId]);

  useEffect(() => {
    if (headings.length === 0) return;

    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let retryCount = 0;
    const MAX_RETRIES = 3;

    const initializeObservers = () => {
      // Check if all headings exist in DOM and get their actual IDs
      const actualHeadings = headings.map(heading => {
        // Try to find element by our generated ID first
        let element = document.getElementById(heading.id);
        
        // If not found, try to find by text content (fallback)
        if (!element) {
          const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          for (const h of allHeadings) {
            if (h.textContent?.trim() === heading.text) {
              element = h as HTMLElement;
              break;
            }
          }
        }
        
        return {
          ...heading,
          actualId: element?.id || heading.id,
          element
        };
      });
      
      const missingHeadings = actualHeadings.filter(h => !h.element);
      
      if (missingHeadings.length > 0 && retryCount < MAX_RETRIES) {
        console.warn(`TOC: ${missingHeadings.length} headings not yet in DOM, retry ${retryCount + 1}/${MAX_RETRIES}`);
        retryCount++;
        setTimeout(initializeObservers, 100 * Math.pow(2, retryCount)); // exponential backoff
        return;
      }

      // Create IntersectionObserver for active section tracking
      // rootMargin: '-64px 0px -60% 0px' means:
      // - 64px from top (account for header)
      // - 60% from bottom (trigger when section enters top 40% of viewport)
      observer = new IntersectionObserver(
        (entries) => {
          // Sort entries by their position in the viewport
          const sortedEntries = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => {
              return a.boundingClientRect.top - b.boundingClientRect.top;
            });

          // Set the first visible heading as active (closest to top)
          if (sortedEntries.length > 0) {
            const active = sortedEntries[0].target.id;
            if (active) {
              setActiveId(active);
            }
          }
        },
        {
          rootMargin: '-64px 0px -60% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1]
        }
      );
      
      actualHeadings.forEach((heading) => {
        if (heading.element) {
          observer?.observe(heading.element);
        }
      });
    };

    // Use MutationObserver to detect when markdown content is added
    mutationObserver = new MutationObserver(() => {
      if (headings.every(h => {
        // Check if element exists by our ID or by text content
        return document.getElementById(h.id) || 
               Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
                 .some(el => el.textContent?.trim() === h.text);
      })) {
        mutationObserver?.disconnect();
        initializeObservers();
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Also try immediate initialization
    initializeObservers();

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [headings]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // Try to find element by ID first
    let element = document.getElementById(id);
    
    // If not found, try to find by text content (fallback)
    if (!element) {
      const heading = headings.find(h => h.id === id);
      if (heading) {
        const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        for (const h of allHeadings) {
          if (h.textContent?.trim() === heading.text) {
            element = h as HTMLElement;
            break;
          }
        }
      }
    }
    
    if (!element) {
      console.error(`TOC: Heading element #${id} not found in DOM`);
      return;
    }

    // Use requestAnimationFrame for smooth scroll
    requestAnimationFrame(() => {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Check user's motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
      
      setActiveId(element.id);
    });
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav 
      className={`bg-white/5 rounded-lg border border-white/10 ${className}`}
      aria-label={t('aria.tableOfContents')}
    >
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="lg:hidden w-full flex items-center justify-between p-4 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
        aria-expanded={isExpanded}
        aria-controls="toc-content"
      >
        <TranslationText translationKey="blog.toc.title" as="span" shimmerWidth="120px" />
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Desktop heading */}
      <div className="hidden lg:block p-4 pb-2">
        <h3 className="text-white font-semibold text-sm">
          <TranslationText translationKey="blog.toc.title" as="span" shimmerWidth="120px" />
        </h3>
      </div>

      {/* TOC Content - collapsible on mobile, always visible on desktop */}
      <div
        id="toc-content"
        ref={tocContainerRef}
        className={`
          overflow-y-auto overflow-x-hidden
          ${isExpanded ? 'block' : 'hidden'} lg:block
          lg:max-h-[calc(100vh-12rem)]
          max-h-[50vh]
          scrollbar-thin
        `}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(237, 252, 58, 0.3) transparent'
        }}
      >
        <div className="space-y-1 p-4 pt-2">
          {headings.map((heading) => {
            // Find the actual element to get its real ID
            let actualId = heading.id;
            const element = document.getElementById(heading.id);
            if (!element) {
              // Fallback: find by text content
              const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
              for (const h of allHeadings) {
                if (h.textContent?.trim() === heading.text) {
                  actualId = (h as HTMLElement).id;
                  break;
                }
              }
            } else {
              actualId = element.id;
            }
            
            const isActive = activeId === actualId;
            const isH3 = heading.depth === 3;
            
            return (
              <a
                key={heading.id}
                ref={(el) => {
                  if (el) {
                    tocLinksRef.current.set(actualId, el);
                  } else {
                    tocLinksRef.current.delete(actualId);
                  }
                }}
                href={`#${actualId}`}
                onClick={(e) => handleScroll(e, actualId)}
                aria-current={isActive ? 'true' : undefined}
                className={`
                  block text-sm transition-all duration-200 px-3 py-1.5 rounded
                  focus:outline-none focus:ring-2 focus:ring-[#edfc3a] focus:ring-offset-2 focus:ring-offset-black/50
                  ${isH3 ? 'ml-4 pl-4 border-l-2 border-white/10' : ''}
                  ${isActive
                    ? 'text-[#edfc3a] font-medium bg-[#edfc3a]/10 border-l-[#edfc3a]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {heading.text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
