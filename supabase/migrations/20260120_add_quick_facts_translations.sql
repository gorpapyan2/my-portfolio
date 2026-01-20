-- ============================================================================
-- Migration: Add Quick Facts Translation Keys
-- Date: 2026-01-20
-- ============================================================================
--
-- Purpose:
--   This migration adds the missing Quick Facts translation keys to the
--   database. These keys are used in the About page QuickFacts component
--   but were not included in previous seed files.
--
-- Missing Keys:
--   - about.quickFacts.title
--   - about.quickFacts.location
--   - about.quickFacts.experience
--   - about.quickFacts.focus
--   - about.quickFacts.availability
--   - about.quickFacts.availabilityStatus
--
-- Total entries added: 6 keys × 3 languages = 18 entries
--
-- Target locales: en (English), ru (Russian), am (Armenian)
--
-- Rollback:
--   To rollback this migration, delete the entries added by this file:
--
--   DELETE FROM public.translations
--   WHERE key LIKE 'about.quickFacts.%';
--
-- ============================================================================

BEGIN;

-- ============================================================================
-- QUICK FACTS SECTION TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  -- Quick Facts Title
  ('about.quickFacts.title', 'en', 'Quick Facts', 'about'),
  ('about.quickFacts.title', 'ru', 'Краткая информация', 'about'),
  ('about.quickFacts.title', 'am', 'Կարճ տեղեկություններ', 'about'),

  -- Location Label
  ('about.quickFacts.location', 'en', 'Location', 'about'),
  ('about.quickFacts.location', 'ru', 'Местоположение', 'about'),
  ('about.quickFacts.location', 'am', 'Գտնվելու վայր', 'about'),

  -- Experience Label
  ('about.quickFacts.experience', 'en', 'Experience', 'about'),
  ('about.quickFacts.experience', 'ru', 'Опыт', 'about'),
  ('about.quickFacts.experience', 'am', 'Փորձ', 'about'),

  -- Focus Label
  ('about.quickFacts.focus', 'en', 'Focus', 'about'),
  ('about.quickFacts.focus', 'ru', 'Фокус', 'about'),
  ('about.quickFacts.focus', 'am', 'Կենտրոնացում', 'about'),

  -- Availability Label
  ('about.quickFacts.availability', 'en', 'Availability', 'about'),
  ('about.quickFacts.availability', 'ru', 'Доступность', 'about'),
  ('about.quickFacts.availability', 'am', 'Հասանելիություն', 'about'),

  -- Availability Status Value
  ('about.quickFacts.availabilityStatus', 'en', 'Open to opportunities', 'about'),
  ('about.quickFacts.availabilityStatus', 'ru', 'Открыт для новых возможностей', 'about'),
  ('about.quickFacts.availabilityStatus', 'am', 'Բաց նոր հնարավորությունների համար', 'about')
ON CONFLICT (key, language)
DO UPDATE SET
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================
-- Run these queries after applying the migration to verify success

-- 1. Check that all Quick Facts keys have entries for all 3 languages
SELECT
  key,
  COUNT(DISTINCT language) as language_count,
  array_agg(DISTINCT language ORDER BY language) as languages
FROM public.translations
WHERE key LIKE 'about.quickFacts.%'
GROUP BY key
HAVING COUNT(DISTINCT language) < 3;
-- Expected: 0 rows (all keys should have en, ru, am)

-- 2. List all Quick Facts translations
SELECT
  key,
  language,
  value,
  category
FROM public.translations
WHERE key LIKE 'about.quickFacts.%'
ORDER BY key, language;
-- Expected: 18 rows (6 keys × 3 languages)

-- ============================================================================
-- NOTES
-- ============================================================================
--
-- Translation Quality:
--   All translations are taken from the existing static fallback files
--   (src/translations/en.ts, ru.ts, am.ts) to maintain consistency.
--
-- Schema Compatibility:
--   This migration is compatible with the existing translations table:
--     - Uses CHECK constraint (language IN ('en', 'ru', 'am'))
--     - Respects UNIQUE(key, language) constraint
--     - Maintains category structure ('about')
--     - Triggers automatic updated_at timestamp updates
--
-- Performance:
--   This migration adds 18 rows (max) to the translations table.
--   With ON CONFLICT DO UPDATE, it's safe to run multiple times.
--   Expected execution time: <50ms
--
-- Usage:
--   These translations are used in the QuickFacts component at:
--   src/components/about/QuickFacts.tsx
--
-- ============================================================================
