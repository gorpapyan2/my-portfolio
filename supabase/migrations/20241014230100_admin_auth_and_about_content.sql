-- Admin auth and about content migration
-- This migration creates tables for experiences, education, skills and updates RLS policies

-- Create experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  achievements TEXT[] DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create education table
CREATE TABLE IF NOT EXISTS education (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  degree TEXT NOT NULL,
  school TEXT NOT NULL,
  year TEXT NOT NULL,
  description TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  level INTEGER NOT NULL CHECK (level >= 0 AND level <= 100),
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_experiences_order ON experiences(order_index);
CREATE INDEX IF NOT EXISTS idx_education_order ON education(order_index);
CREATE INDEX IF NOT EXISTS idx_skills_order ON skills(order_index);
CREATE INDEX IF NOT EXISTS idx_skills_level ON skills(level);

-- Enable RLS
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for experiences
-- Public read access for all experiences
CREATE POLICY "Public read access for experiences" ON experiences
  FOR SELECT USING (true);

-- Admin write access for experiences
CREATE POLICY "Admin write access for experiences" ON experiences
  FOR ALL USING (auth.email() = 'gorpapyan2@gmail.com');

-- Create RLS policies for education
-- Public read access for all education
CREATE POLICY "Public read access for education" ON education
  FOR SELECT USING (true);

-- Admin write access for education
CREATE POLICY "Admin write access for education" ON education
  FOR ALL USING (auth.email() = 'gorpapyan2@gmail.com');

-- Create RLS policies for skills
-- Public read access for all skills
CREATE POLICY "Public read access for skills" ON skills
  FOR SELECT USING (true);

-- Admin write access for skills
CREATE POLICY "Admin write access for skills" ON skills
  FOR ALL USING (auth.email() = 'gorpapyan2@gmail.com');

-- Update existing RLS policies to use admin email check
-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated write access for translations" ON translations;
DROP POLICY IF EXISTS "Authenticated write access for blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated write access for projects" ON projects;

-- Create new admin-only policies
CREATE POLICY "Admin write access for translations" ON translations
  FOR ALL USING (auth.email() = 'gorpapyan2@gmail.com');

CREATE POLICY "Admin write access for blog posts" ON blog_posts
  FOR ALL USING (auth.email() = 'gorpapyan2@gmail.com');

CREATE POLICY "Admin write access for projects" ON projects
  FOR ALL USING (auth.email() = 'gorpapyan2@gmail.com');

-- Create updated_at triggers
CREATE TRIGGER update_experiences_updated_at 
  BEFORE UPDATE ON experiences 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_education_updated_at 
  BEFORE UPDATE ON education 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_skills_updated_at 
  BEFORE UPDATE ON skills 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
