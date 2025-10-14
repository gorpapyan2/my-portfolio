-- Projects table migration
-- This migration creates the projects table with RLS policies

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  tags TEXT[] DEFAULT '{}',
  live_url TEXT,
  github_url TEXT,
  order_index INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);
CREATE INDEX IF NOT EXISTS idx_projects_tags ON projects USING GIN(tags);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Public read access for all projects
CREATE POLICY "Public read access for projects" ON projects
  FOR SELECT USING (true);

-- Authenticated write access for projects
CREATE POLICY "Authenticated write access for projects" ON projects
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE TRIGGER update_projects_updated_at 
  BEFORE UPDATE ON projects 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
