import { Link } from 'react-router-dom';
import { Card } from '../../components/shared/Card';
import { MarkdownRenderer } from '../../components/markdown/MarkdownRenderer';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';

/**
 * Props for BlogCard component with explicit typing
 * Mapped directly from BlogPost database type
 */
interface BlogCardProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string | null;
  image: string | null;
  created_at: string;
  read_time: string;
}

/**
 * BlogCard component - displays a blog post preview card
 * Strongly typed with explicit null-safety for optional fields
 */
export function BlogCard({
  title,
  slug,
  excerpt,
  content,
  image,
  created_at,
  read_time
}: BlogCardProps) {
  const { t, language } = useLanguage();
  /**
   * Format date string to readable format
   */
  const formatDate = (dateString: string): string => {
    try {
      const locale = language === 'am' ? 'hy-AM' : language;
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(new Date(dateString));
    } catch {
      return t('blog.unknownDate');
    }
  };

  /**
   * Get a clean preview of the markdown content
   * Falls back to excerpt if content unavailable
   */
  const getContentPreview = (): string => {
    if (!content) return excerpt;
    
    // Remove markdown syntax and limit to 150 characters
    const cleaned = content
      .replace(/[[#*`()]/g, '')
      .replace(/\n/g, ' ')
      .trim();
    
    return cleaned.length > 150 ? `${cleaned.substring(0, 150)}…` : cleaned;
  };

  // Use database-provided localized content directly
  const preview = content ? getContentPreview() : excerpt;
  const displayImage = image || '';
  const formattedDate = formatDate(created_at);

  return (
    <Card className="group h-full flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden rounded-[var(--radius-md)] mb-[var(--space-16)]">
        <img
          src={displayImage}
          alt={title}
          width={1280}
          height={720}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Metadata */}
      <div className="flex justify-between items-center text-[length:var(--font-100)] text-[var(--text-muted)] mb-[var(--space-12)]">
        <span>{formattedDate}</span>
        <span>{read_time}</span>
      </div>
      
      {/* Title */}
      <h2 className="text-[length:var(--font-500)] font-semibold text-[var(--text)] mb-[var(--space-8)] group-hover:text-accent transition-colors line-clamp-2">
        {title}
      </h2>
      
      {/* Preview Content */}
      <div className="text-[var(--text-muted)] mb-[var(--space-16)] flex-grow">
        {content ? (
          <MarkdownRenderer 
            content={preview}
            className="text-[length:var(--font-200)] line-clamp-3"
          />
        ) : (
          <p className="text-[length:var(--font-200)] line-clamp-3">{excerpt}</p>
        )}
      </div>
      
      {/* Read More Link */}
      <Link 
        to={`/blog/${slug}`}
        className="inline-flex items-center text-accent hover:text-white transition-colors font-medium text-[length:var(--font-200)] mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-full"
      >
        <TranslationText translationKey="blog.readMore" shimmerWidth="100px" />
        <svg 
          className="w-4 h-4 ml-[var(--space-8)] transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </Link>
    </Card>
  );
}
