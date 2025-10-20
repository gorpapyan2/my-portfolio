import { BlogCard } from './BlogCard';
import { LocalizedBlogPost } from '../../lib/services/useBlogService';
import { useLanguage } from '../../context/LanguageContext';

interface BlogGridProps {
  blogPosts: LocalizedBlogPost[];
}

/**
 * Grid component for displaying blog posts
 * Handles type-safe prop mapping from database BlogPost to BlogCard component
 */
export function BlogGrid({ blogPosts }: BlogGridProps) {
  const { t } = useLanguage();
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
      <div className="text-center py-16">
        <p className="text-gray-400 text-lg">{t('blog.empty')}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogCard 
          key={post.id}
          {...mapBlogPostToCardProps(post)}
        />
      ))}
    </div>
  );
}