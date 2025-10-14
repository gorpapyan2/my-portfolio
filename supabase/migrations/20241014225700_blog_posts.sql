-- Blog posts table migration
-- This migration creates the blog_posts table with RLS policies

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT,
  image TEXT,
  read_time TEXT NOT NULL,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Public read access for published blog posts
CREATE POLICY "Public read access for published blog posts" ON blog_posts
  FOR SELECT USING (published = true);

-- Authenticated read access for all blog posts (including drafts)
CREATE POLICY "Authenticated read access for all blog posts" ON blog_posts
  FOR SELECT USING (auth.role() = 'authenticated');

-- Authenticated write access for blog posts
CREATE POLICY "Authenticated write access for blog posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE TRIGGER update_blog_posts_updated_at 
  BEFORE UPDATE ON blog_posts 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
