-- Feature flags migration
-- This migration creates the feature_flags table with RLS policies

-- Create feature_flags table
CREATE TABLE IF NOT EXISTS feature_flags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  flag_key TEXT NOT NULL UNIQUE,
  content_type TEXT NOT NULL CHECK (content_type IN ('section', 'blog_post', 'project')),
  content_id UUID NULL,
  enabled BOOLEAN NOT NULL DEFAULT true,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_feature_flags_key ON feature_flags(flag_key);
CREATE INDEX IF NOT EXISTS idx_feature_flags_content_type ON feature_flags(content_type);
CREATE INDEX IF NOT EXISTS idx_feature_flags_enabled ON feature_flags(enabled);

-- Enable RLS
ALTER TABLE feature_flags ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Public read access for all feature flags
CREATE POLICY "Public read access for feature flags" ON feature_flags
  FOR SELECT USING (true);

-- Authenticated write access (for admin operations)
CREATE POLICY "Authenticated write access for feature flags" ON feature_flags
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE TRIGGER update_feature_flags_updated_at 
  BEFORE UPDATE ON feature_flags 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert initial feature flags
INSERT INTO feature_flags (flag_key, content_type, description, enabled) VALUES
('blog_section', 'section', 'Controls visibility of the entire blog section', true),
('work_section', 'section', 'Controls visibility of the entire work/projects section', true),
('featured_projects_section', 'section', 'Controls visibility of featured projects on homepage', true),
('latest_articles_section', 'section', 'Controls visibility of latest articles on homepage', true)
ON CONFLICT (flag_key) DO NOTHING;
