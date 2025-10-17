import { BlogCard } from './BlogCard';
import { BlogPost } from '../../types/database.types';

interface BlogGridProps {
  blogPosts: BlogPost[];
}

/**
 * Grid component for displaying blog posts
 * Handles type-safe prop mapping from database BlogPost to BlogCard component
 */
export function BlogGrid({ blogPosts }: BlogGridProps) {
  /**
   * Map BlogPost to BlogCard props with explicit type safety
   */
  const mapBlogPostToCardProps = (post: BlogPost) => ({
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
        <p className="text-gray-400 text-lg">No blog posts available yet.</p>
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