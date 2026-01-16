-- Migration: Add Quick Wins Translation Keys (3 Easy Pages)
-- Date: 2026-01-15
-- Phase: 3 - Admin Dashboard Migration
-- Stage: 2b - Quick Wins (index.tsx, TranslationManager.tsx, TranslationTable.tsx)
-- Description: Adds 5 translation keys for 3 simple admin pages
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- ADMIN DASHBOARD HOME (index.tsx) - 1 string
-- ============================================================================

-- Note: admin.common.logout already exists from Stage 1
-- No new keys needed for index.tsx!

-- ============================================================================
-- TRANSLATION MANAGER (TranslationManager.tsx) - 1 string
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.translations.languageLabel', 'en', 'Language:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.translations.languageLabel', 'ru', 'Язык:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.translations.languageLabel', 'am', 'Լեզու:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- TRANSLATION TABLE (TranslationTable.tsx) - 3 strings
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.translations.table.actions', 'en', 'Actions', 'admin'),
('admin.translations.empty.notFound', 'en', 'No translations found', 'admin'),
('admin.translations.value.empty', 'en', 'Empty', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.translations.table.actions', 'ru', 'Действия', 'admin'),
('admin.translations.empty.notFound', 'ru', 'Переводы не найдены', 'admin'),
('admin.translations.value.empty', 'ru', 'Пусто', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.translations.table.actions', 'am', 'Գործողություններ', 'admin'),
('admin.translations.empty.notFound', 'am', 'Թարգմանություններ չեն գտնվել', 'admin'),
('admin.translations.value.empty', 'am', 'Դատարկ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count quick wins translations
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key IN (
--   'admin.translations.languageLabel',
--   'admin.translations.table.actions',
--   'admin.translations.empty.notFound',
--   'admin.translations.value.empty'
-- )
-- GROUP BY language
-- ORDER BY language;

-- Expected result:
-- am: 4
-- en: 4
-- ru: 4

-- Check if admin.common.logout exists (for index.tsx)
-- SELECT key, language, value
-- FROM translations
-- WHERE key = 'admin.common.logout'
-- ORDER BY language;

-- Expected: 3 rows (en, ru, am)
