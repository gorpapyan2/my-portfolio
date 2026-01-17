-- ============================================================================
-- Migration: Fix All Missing i18n Entries
-- Date: 2026-01-16
-- ============================================================================
--
-- Purpose:
--   This migration ensures complete localization coverage for all keys
--   actively used in the codebase. It addresses:
--   1. 7 keys completely missing from the database
--   2. 9 keys with partial translations (missing ru, am)
--
-- Total entries added: 21 (7×3 languages) + (9×2 languages) = 39 entries
--
-- Target locales: en (English), ru (Russian), am (Armenian)
-- Note: The schema uses 'am' for Armenian, not 'hy'
--
-- How this was generated:
--   1. Scanned all source code for t('key') patterns
--   2. Compared against existing migration data
--   3. Identified gaps in coverage across all 3 target languages
--   4. Generated INSERT statements with idempotent ON CONFLICT clause
--
-- Rollback:
--   To rollback this migration, delete the entries added by this file:
--
--   DELETE FROM public.translations
--   WHERE (key, language) IN (
--     ('admin.blog.excerptLabel', 'en'), ('admin.blog.excerptLabel', 'ru'), ('admin.blog.excerptLabel', 'am'),
--     ('admin.blog.publicationStatusLabel', 'en'), ('admin.blog.publicationStatusLabel', 'ru'), ('admin.blog.publicationStatusLabel', 'am'),
--     ('errors.experiencesLoadFailed', 'en'), ('errors.experiencesLoadFailed', 'ru'), ('errors.experiencesLoadFailed', 'am'),
--     ('settings.category', 'en'), ('settings.category', 'ru'), ('settings.category', 'am'),
--     ('settings.importing', 'en'), ('settings.importing', 'ru'), ('settings.importing', 'am'),
--     ('settings.searchTranslations', 'en'), ('settings.searchTranslations', 'ru'), ('settings.searchTranslations', 'am'),
--     ('settings.validate', 'en'), ('settings.validate', 'ru'), ('settings.validate', 'am'),
--     ('markdown.copied', 'ru'), ('markdown.copied', 'am'),
--     ('settings.export', 'ru'), ('settings.export', 'am'),
--     ('settings.import', 'ru'), ('settings.import', 'am'),
--     ('settings.validation.revalidate', 'ru'), ('settings.validation.revalidate', 'am'),
--     ('share.copied', 'ru'), ('share.copied', 'am'),
--     ('share.linkedin', 'ru'), ('share.linkedin', 'am'),
--     ('share.share', 'ru'), ('share.share', 'am'),
--     ('share.title', 'ru'), ('share.title', 'am'),
--     ('share.twitter', 'ru'), ('share.twitter', 'am')
--   );
--
-- ============================================================================

BEGIN;

-- ============================================================================
-- PART 1: COMPLETELY MISSING KEYS (7 keys × 3 languages = 21 entries)
-- ============================================================================
-- These keys are used in code but have no database entries at all

-- Admin Blog Keys (2 keys)
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.excerptLabel', 'en', 'Excerpt', 'admin'),
('admin.blog.excerptLabel', 'ru', 'Краткое описание', 'admin'),
('admin.blog.excerptLabel', 'am', 'Հակիրճ նկարագրություն', 'admin'),

('admin.blog.publicationStatusLabel', 'en', 'Publication Status', 'admin'),
('admin.blog.publicationStatusLabel', 'ru', 'Статус публикации', 'admin'),
('admin.blog.publicationStatusLabel', 'am', 'Հրապարակման կարգավիճակ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- Error Messages (1 key)
INSERT INTO public.translations (key, language, value, category) VALUES
('errors.experiencesLoadFailed', 'en', 'Failed to load experiences', 'errors'),
('errors.experiencesLoadFailed', 'ru', 'Не удалось загрузить опыт', 'errors'),
('errors.experiencesLoadFailed', 'am', 'Չհաջողվեց բեռնել փորձը', 'errors')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- Settings Keys (4 keys)
INSERT INTO public.translations (key, language, value, category) VALUES
('settings.category', 'en', 'Category', 'settings'),
('settings.category', 'ru', 'Категория', 'settings'),
('settings.category', 'am', 'Կատեգորիա', 'settings'),

('settings.importing', 'en', 'Importing...', 'settings'),
('settings.importing', 'ru', 'Импорт...', 'settings'),
('settings.importing', 'am', 'Ներմուծում...', 'settings'),

('settings.searchTranslations', 'en', 'Search Translations', 'settings'),
('settings.searchTranslations', 'ru', 'Поиск переводов', 'settings'),
('settings.searchTranslations', 'am', 'Փնտրել թարգմանություններ', 'settings'),

('settings.validate', 'en', 'Validate', 'settings'),
('settings.validate', 'ru', 'Проверить', 'settings'),
('settings.validate', 'am', 'Ստուգել', 'settings')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- ============================================================================
-- PART 2: PARTIAL KEYS (9 keys × 2 languages = 18 entries)
-- ============================================================================
-- These keys exist in English but are missing Russian and Armenian translations

-- Markdown Editor (1 key)
INSERT INTO public.translations (key, language, value, category) VALUES
('markdown.copied', 'ru', 'Скопировано', 'markdown'),
('markdown.copied', 'am', 'Պատճենվել է', 'markdown')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- Settings Import/Export (3 keys)
INSERT INTO public.translations (key, language, value, category) VALUES
('settings.export', 'ru', 'Экспорт', 'settings'),
('settings.export', 'am', 'Արտահանել', 'settings'),

('settings.import', 'ru', 'Импорт', 'settings'),
('settings.import', 'am', 'Ներմուծել', 'settings'),

('settings.validation.revalidate', 'ru', 'Перепроверить', 'settings'),
('settings.validation.revalidate', 'am', 'Նորից ստուգել', 'settings')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- Share/Social Media (5 keys)
INSERT INTO public.translations (key, language, value, category) VALUES
('share.copied', 'ru', 'Скопировано', 'share'),
('share.copied', 'am', 'Պատճենվել է', 'share'),

('share.linkedin', 'ru', 'LinkedIn', 'share'),
('share.linkedin', 'am', 'LinkedIn', 'share'),

('share.share', 'ru', 'Поделиться', 'share'),
('share.share', 'am', 'Կիսվել', 'share'),

('share.title', 'ru', 'Поделиться статьей', 'share'),
('share.title', 'am', 'Կիսվել հոդվածով', 'share'),

('share.twitter', 'ru', 'Twitter/X', 'share'),
('share.twitter', 'am', 'Twitter/X', 'share')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================
-- Run these queries after applying the migration to verify success

-- 1. Check that all 16 unique keys now have entries for all 3 languages
SELECT
  key,
  COUNT(DISTINCT language) as language_count,
  array_agg(DISTINCT language ORDER BY language) as languages
FROM public.translations
WHERE key IN (
  'admin.blog.excerptLabel',
  'admin.blog.publicationStatusLabel',
  'errors.experiencesLoadFailed',
  'settings.category',
  'settings.importing',
  'settings.searchTranslations',
  'settings.validate',
  'markdown.copied',
  'settings.export',
  'settings.import',
  'settings.validation.revalidate',
  'share.copied',
  'share.linkedin',
  'share.share',
  'share.title',
  'share.twitter'
)
GROUP BY key
HAVING COUNT(DISTINCT language) < 3;
-- Expected: 0 rows (all keys should have en, ru, am)

-- 2. Count total entries added by this migration
SELECT
  'Total entries for migration keys' as metric,
  COUNT(*) as count
FROM public.translations
WHERE key IN (
  'admin.blog.excerptLabel',
  'admin.blog.publicationStatusLabel',
  'errors.experiencesLoadFailed',
  'settings.category',
  'settings.importing',
  'settings.searchTranslations',
  'settings.validate',
  'markdown.copied',
  'settings.export',
  'settings.import',
  'settings.validation.revalidate',
  'share.copied',
  'share.linkedin',
  'share.share',
  'share.title',
  'share.twitter'
);
-- Expected: 48 entries (16 keys × 3 languages)

-- 3. Check for any keys in code but still missing from translations
-- (This would require manual verification against source code)

-- ============================================================================
-- NOTES FOR REVIEW
-- ============================================================================
--
-- Translation Quality:
--   The Russian and Armenian translations provided are machine-generated
--   placeholders. For production use, please have native speakers review:
--
--   Russian (ru) - Review needed:
--     - settings.validation.revalidate: "Перепроверить"
--     - share.title: "Поделиться статьей"
--
--   Armenian (am) - Review needed:
--     - admin.blog.excerptLabel: "Հակիրճ նկարագրություն"
--     - admin.blog.publicationStatusLabel: "Հրապարակման կարգավիճակ"
--     - settings.searchTranslations: "Փնտրել թարգմանություններ"
--
-- Schema Compatibility:
--   This migration is compatible with the existing translations table:
--     - Uses CHECK constraint (language IN ('en', 'ru', 'am'))
--     - Respects UNIQUE(key, language) constraint
--     - Maintains category structure
--     - Triggers automatic updated_at timestamp updates
--
-- Performance:
--   This migration adds 39 rows (max) to the translations table.
--   With ON CONFLICT DO UPDATE, it's safe to run multiple times.
--   Expected execution time: <100ms
--
-- ============================================================================
