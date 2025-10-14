import { BlogCard } from './BlogCard';
import { BlogPost } from '../../types/database.types';

interface BlogGridProps {
  blogPosts: BlogPost[];
}

export function BlogGrid({ blogPosts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post: BlogPost, index: number) => (
        <BlogCard key={post.id || index} {...post} date={post.created_at} readTime={post.read_time} image={post.image ?? ''} />
      ))}
    </div>
  );
}