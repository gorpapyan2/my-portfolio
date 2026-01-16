-- Migration: Fix Missing RU/AM Translations for Common Admin Keys
-- Date: 2026-01-15
-- Phase: 3 - Admin Dashboard Migration
-- Stage: 1 - Fix Missing Translations
-- Description: Adds missing RU/AM translations for 5 pre-existing admin.common keys
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- FIX MISSING TRANSLATIONS
-- ============================================================================

-- Russian translations
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.addFlag', 'ru', 'Добавить флаг', 'admin'),
('admin.common.description', 'ru', 'Описание', 'admin'),
('admin.common.language', 'ru', 'Язык', 'admin'),
('admin.common.orderIndex', 'ru', 'Порядковый номер', 'admin'),
('admin.common.title', 'ru', 'Название', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian translations
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.addFlag', 'am', 'Ավելացնել դրոշակ', 'admin'),
('admin.common.description', 'am', 'Նկարագրություն', 'admin'),
('admin.common.language', 'am', 'Լեզու', 'admin'),
('admin.common.orderIndex', 'am', 'Հերթական համար', 'admin'),
('admin.common.title', 'am', 'Վերնագիր', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERY
-- ============================================================================

-- Run this to verify all admin.common.* keys have all 3 languages:
-- SELECT
--   key,
--   COUNT(*) as language_count,
--   STRING_AGG(language, ', ' ORDER BY language) as languages
-- FROM translations
-- WHERE key LIKE 'admin.common.%'
-- GROUP BY key
-- HAVING COUNT(*) < 3;

-- Expected result: 0 rows (all keys should have EN, RU, AM)

-- Count per language (should now be equal):
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key LIKE 'admin.common.%'
-- GROUP BY language
-- ORDER BY language;

-- Expected result:
-- am: 31
-- en: 31
-- ru: 31
