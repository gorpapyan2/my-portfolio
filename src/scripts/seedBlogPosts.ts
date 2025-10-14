import { supabase } from '../lib/supabase';
import { BlogPostInsert } from '../types/database.types';
import { blogPosts } from '../pages/BlogPage/blogData';

export async function seedBlogPosts(): Promise<void> {
  try {
    console.log('Starting blog posts seeding...');

    // Convert static blog data to Supabase format
    const blogPostInserts: BlogPostInsert[] = blogPosts.map((post, index) => ({
      title: post.title,
      slug: post.title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim(),
      excerpt: post.excerpt,
      content: null, // Add content later if needed
      image: post.image,
      read_time: post.readTime,
      published: true,
      order_index: index
    }));

    // Insert blog posts
    const { data, error } = await supabase
      .from('blog_posts')
      .upsert(blogPostInserts, { 
        onConflict: 'slug',
        ignoreDuplicates: false 
      })
      .select();

    if (error) {
      throw error;
    }

    console.log(`✅ Successfully seeded ${data?.length || blogPostInserts.length} blog posts`);
  } catch (error) {
    console.error('❌ Error seeding blog posts:', error);
    throw error;
  }
}

export async function clearBlogPosts(): Promise<void> {
  try {
    console.log('Clearing blog posts...');
    
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all records

    if (error) {
      throw error;
    }

    console.log('✅ Successfully cleared blog posts');
  } catch (error) {
    console.error('❌ Error clearing blog posts:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedBlogPosts()
    .then(() => {
      console.log('Blog posts seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Blog posts seeding failed:', error);
      process.exit(1);
    });
}
