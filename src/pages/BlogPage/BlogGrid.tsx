import { BlogCard } from './BlogCard';
import { LocalizedBlogPost } from '../../lib/services/useBlogService';
import { TranslationText } from '../../components/shared/TranslationText';
import { motion } from 'framer-motion';

interface BlogGridProps {
  blogPosts: LocalizedBlogPost[];
}

/**
 * Grid component for displaying blog posts
 * Handles type-safe prop mapping from database BlogPost to BlogCard component
 */
export function BlogGrid({ blogPosts }: BlogGridProps) {
  /**
   * Map LocalizedBlogPost to BlogCard props with explicit type safety
   */
  const mapBlogPostToCardProps = (post: LocalizedBlogPost) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image,
    created_at: post.created_at,
    read_time: post.read_time
  });

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="text-center py-[var(--space-64)] bg-white/5 rounded-3xl border border-white/10 m-4">
        <p className="text-[var(--text-muted)] text-[length:var(--font-300)]">
          <TranslationText translationKey="blog.empty" as="span" shimmerWidth="200px" />
        </p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8"
    >
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          {...mapBlogPostToCardProps(post)}
        />
      ))}
    </motion.div>
  );
}
