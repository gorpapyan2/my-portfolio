-- Contact submissions table migration
-- This migration creates the contact_submissions table with RLS policies

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  from_name TEXT NOT NULL,
  from_email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(from_email);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Authenticated read access for contact submissions
CREATE POLICY "Authenticated read access for contact submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Authenticated write access for contact submissions
CREATE POLICY "Authenticated write access for contact submissions" ON contact_submissions
  FOR ALL USING (auth.role() = 'authenticated');

-- Public insert access for contact submissions (anyone can submit)
CREATE POLICY "Public insert access for contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);
