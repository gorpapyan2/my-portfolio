-- Run this SQL in your Supabase SQL Editor to create the translations table

-- Create translations table
CREATE TABLE IF NOT EXISTS translations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('en', 'ru', 'am')),
  value TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'common',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(key, language)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_translations_key ON translations(key);
CREATE INDEX IF NOT EXISTS idx_translations_language ON translations(language);
CREATE INDEX IF NOT EXISTS idx_translations_category ON translations(category);

-- Enable RLS
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Public read access for all translations
CREATE POLICY "Public read access for translations" ON translations
  FOR SELECT USING (true);

-- Authenticated write access (for admin operations)
CREATE POLICY "Authenticated write access for translations" ON translations
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_translations_updated_at 
  BEFORE UPDATE ON translations 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample translations to test
INSERT INTO translations (key, language, value, category) VALUES
('nav.about', 'en', 'About', 'nav'),
('nav.about', 'ru', 'О себе', 'nav'),
('nav.about', 'am', 'Իմ մասին', 'nav'),
('hero.title', 'en', 'Quality Assurance Engineer', 'hero'),
('hero.title', 'ru', 'Инженер по контролю качества', 'hero'),
('hero.title', 'am', 'Որակի ապահովման ինժեներ', 'hero')
ON CONFLICT (key, language) DO NOTHING;
