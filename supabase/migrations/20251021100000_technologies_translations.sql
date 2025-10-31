-- Create technologies table
CREATE TABLE IF NOT EXISTS technologies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  language TEXT NOT NULL CHECK (language IN ('en', 'ru', 'am')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  level INTEGER NOT NULL CHECK (level >= 0 AND level <= 100),
  icon_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(slug, language)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_technologies_slug ON technologies(slug);
CREATE INDEX IF NOT EXISTS idx_technologies_language ON technologies(language);
CREATE INDEX IF NOT EXISTS idx_technologies_category ON technologies(category);

-- Enable RLS
ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;

-- Public read access for all technologies
CREATE POLICY "Public read access for technologies" ON technologies
  FOR SELECT USING (true);

-- Authenticated write access (for admin operations)
CREATE POLICY "Authenticated write access for technologies" ON technologies
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE TRIGGER update_technologies_updated_at 
  BEFORE UPDATE ON technologies 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Create technology_details table for detailed descriptions, tags, and examples
CREATE TABLE IF NOT EXISTS technology_details (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  technology_id UUID NOT NULL REFERENCES technologies(id) ON DELETE CASCADE,
  language TEXT NOT NULL CHECK (language IN ('en', 'ru', 'am')),
  detailed_description JSONB NOT NULL,
  tags JSONB NOT NULL,
  real_world_example TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(technology_id, language)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_technology_details_technology_id ON technology_details(technology_id);
CREATE INDEX IF NOT EXISTS idx_technology_details_language ON technology_details(language);

-- Enable RLS
ALTER TABLE technology_details ENABLE ROW LEVEL SECURITY;

-- Public read access for all technology_details
CREATE POLICY "Public read access for technology_details" ON technology_details
  FOR SELECT USING (true);

-- Authenticated write access (for admin operations)
CREATE POLICY "Authenticated write access for technology_details" ON technology_details
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE TRIGGER update_technology_details_updated_at 
  BEFORE UPDATE ON technology_details 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

