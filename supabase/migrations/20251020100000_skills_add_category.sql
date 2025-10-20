-- Migration: Add category column to skills and create index for it
-- Safe to run multiple times (IF NOT EXISTS / default value)

-- Add category column with default so existing rows are backfilled
ALTER TABLE skills
  ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'General';

-- Create index for category lookups/grouping
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);


