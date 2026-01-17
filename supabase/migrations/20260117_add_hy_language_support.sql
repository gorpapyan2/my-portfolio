-- ============================================================================
-- Migration: Add 'hy' Language Code Support (ISO 639-1 Standard for Armenian)
-- Date: 2026-01-17
-- ============================================================================
--
-- Purpose:
--   Update all translation-related tables to support 'hy' (Armenian ISO 639-1)
--   in addition to the existing 'am' code. This allows the application to use
--   the ISO standard language code.
--
-- Background:
--   - Current schema uses 'am' for Armenian
--   - ISO 639-1 standard code for Armenian is 'hy'
--   - This migration adds 'hy' as a supported language code
--
-- Changes:
--   1. translations table: Update CHECK constraint to allow 'hy'
--   2. blog_post_translations table: Update CHECK constraint to allow 'hy'
--   3. technology_translations table: Update CHECK constraint to allow 'hy'
--   4. technology_category_translations table: Update CHECK constraint to allow 'hy'
--
-- ============================================================================

BEGIN;

-- ============================================================================
-- PART 1: Update translations table
-- ============================================================================

-- Drop the old constraint
ALTER TABLE public.translations
  DROP CONSTRAINT IF EXISTS translations_language_check;

-- Add new constraint with 'hy' support
ALTER TABLE public.translations
  ADD CONSTRAINT translations_language_check
  CHECK (language IN ('en', 'ru', 'am', 'hy'));

-- Add comment explaining language codes
COMMENT ON COLUMN public.translations.language IS
'Language code: en (English), ru (Russian), am (Armenian - legacy), hy (Armenian - ISO 639-1 standard)';

-- ============================================================================
-- PART 2: Update blog_post_translations table
-- ============================================================================

-- Drop the old constraint
ALTER TABLE public.blog_post_translations
  DROP CONSTRAINT IF EXISTS blog_post_translations_language_check;

-- Add new constraint with 'hy' support
ALTER TABLE public.blog_post_translations
  ADD CONSTRAINT blog_post_translations_language_check
  CHECK (language IN ('en', 'ru', 'am', 'hy'));

-- Add comment
COMMENT ON COLUMN public.blog_post_translations.language IS
'Language code: en (English), ru (Russian), am (Armenian - legacy), hy (Armenian - ISO 639-1 standard)';

-- ============================================================================
-- PART 3: Update technology_translations table
-- ============================================================================

-- Drop the old constraint
ALTER TABLE public.technology_translations
  DROP CONSTRAINT IF EXISTS technology_translations_language_check;

-- Add new constraint with 'hy' support
ALTER TABLE public.technology_translations
  ADD CONSTRAINT technology_translations_language_check
  CHECK (language IN ('en', 'ru', 'am', 'hy'));

-- Add comment
COMMENT ON COLUMN public.technology_translations.language IS
'Language code: en (English), ru (Russian), am (Armenian - legacy), hy (Armenian - ISO 639-1 standard)';

-- ============================================================================
-- PART 4: Update technology_category_translations table
-- ============================================================================

-- Drop the old constraint
ALTER TABLE public.technology_category_translations
  DROP CONSTRAINT IF EXISTS technology_category_translations_language_check;

-- Add new constraint with 'hy' support
ALTER TABLE public.technology_category_translations
  ADD CONSTRAINT technology_category_translations_language_check
  CHECK (language IN ('en', 'ru', 'am', 'hy'));

-- Add comment
COMMENT ON COLUMN public.technology_category_translations.language IS
'Language code: en (English), ru (Russian), am (Armenian - legacy), hy (Armenian - ISO 639-1 standard)';

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Verify constraints were updated
SELECT
  conrelid::regclass AS table_name,
  conname AS constraint_name,
  pg_get_constraintdef(oid) AS constraint_definition
FROM pg_constraint
WHERE conname LIKE '%language_check'
  AND conrelid::regclass::text IN (
    'translations',
    'blog_post_translations',
    'technology_translations',
    'technology_category_translations'
  )
ORDER BY table_name;

-- Count translations by language code
SELECT
  language,
  COUNT(*) as count
FROM public.translations
GROUP BY language
ORDER BY language;

-- ============================================================================
-- NOTES
-- ============================================================================
--
-- After running this migration:
--
-- 1. Both 'am' and 'hy' are valid language codes
-- 2. Existing 'am' translations continue to work
-- 3. New 'hy' translations can be added
--
-- Migration Path:
--   Step 1: Run this SQL migration (adds 'hy' support to schema)
--   Step 2: Run TypeScript migration script to copy 'am' → 'hy' data
--   Step 3: Update application code to use 'hy' going forward
--   Step 4: (Optional) Deprecate 'am' code in future release
--
-- Rollback:
--   To rollback, remove 'hy' from CHECK constraints:
--
--   ALTER TABLE public.translations
--     DROP CONSTRAINT translations_language_check,
--     ADD CONSTRAINT translations_language_check
--     CHECK (language IN ('en', 'ru', 'am'));
--
--   (Repeat for other tables)
--
-- ============================================================================
