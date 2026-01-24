import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MarkdownRenderer } from '../../components/markdown/MarkdownRenderer';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

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

    return cleaned.length > 150 ? `${cleaned.substring(0, 150)}...` : cleaned;
  };

  const preview = content ? getContentPreview() : excerpt;
  const hasImage = Boolean(image);
  const formattedDate = formatDate(created_at);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        {hasImage ? (
          <img
            src={image ?? ''}
            alt={title}
            width={1280}
            height={720}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" aria-hidden="true">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="text-4xl font-bold text-white">Blog</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex-grow p-6 flex flex-col">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-4 font-medium uppercase tracking-wide">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>{read_time}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog/${slug}`} className="block mb-3 focus:outline-none">
          <h2 className="text-xl font-bold text-[var(--text)] font-display leading-tight group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h2>
        </Link>

        {/* Preview Content */}
        <div className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 line-clamp-3">
          {content ? (
            <MarkdownRenderer
              content={preview}
              className="line-clamp-3"
            />
          ) : (
            <p>{excerpt}</p>
          )}
        </div>

        {/* Read More Link */}
        <div className="mt-auto">
          <Link
            to={`/blog/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors group/link"
          >
            <TranslationText translationKey="blog.readMore" shimmerWidth="80px" />
            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
