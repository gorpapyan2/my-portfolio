-- Blog post translations migration
-- This migration creates the blog_post_translations table to support multi-language content
-- Base blog_posts table keeps slug, image, read_time, published, timestamps
-- Translatable fields (title, excerpt, content) move to blog_post_translations

-- Create blog_post_translations table
CREATE TABLE IF NOT EXISTS blog_post_translations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  language TEXT NOT NULL CHECK (language IN ('en', 'ru', 'am')),
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(blog_post_id, language)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_post_translations_blog_post_id ON blog_post_translations(blog_post_id);
CREATE INDEX IF NOT EXISTS idx_blog_post_translations_language ON blog_post_translations(language);
CREATE INDEX IF NOT EXISTS idx_blog_post_translations_composite ON blog_post_translations(blog_post_id, language);

-- Enable RLS
ALTER TABLE blog_post_translations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Public read access for all blog post translations
CREATE POLICY "Public read access for blog post translations" ON blog_post_translations
  FOR SELECT USING (true);

-- Authenticated write access for blog post translations
CREATE POLICY "Authenticated write access for blog post translations" ON blog_post_translations
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE TRIGGER update_blog_post_translations_updated_at 
  BEFORE UPDATE ON blog_post_translations 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Remove translatable columns from blog_posts table
-- Note: We'll keep them for now and remove in a separate migration after data migration
-- ALTER TABLE blog_posts DROP COLUMN IF EXISTS title;
-- ALTER TABLE blog_posts DROP COLUMN IF EXISTS excerpt;
-- ALTER TABLE blog_posts DROP COLUMN IF EXISTS content;

