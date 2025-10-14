import { BlogCard } from './BlogCard';
import { blogPosts, BlogPost } from './blogData.ts';

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post: BlogPost, index: number) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
}