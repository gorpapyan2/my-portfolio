import { BlogCard } from './BlogCard';

const blogPosts = [
  {
    title: 'Best Practices for E2E Testing',
    date: 'March 15, 2024',
    excerpt: 'Learn about the best practices for implementing end-to-end testing in your applications...',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
    readTime: '5 min read',
  },
  {
    title: 'Automated Testing Strategy Guide',
    date: 'March 10, 2024',
    excerpt: 'A comprehensive guide to creating an effective automated testing strategy...',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    readTime: '7 min read',
  },
];

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
}