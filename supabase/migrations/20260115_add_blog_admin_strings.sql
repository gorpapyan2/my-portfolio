-- Migration: Add Blog Admin Translation Keys
-- Date: 2026-01-15
-- Phase: 3 - Admin Dashboard Migration
-- Stage: 6 - BlogAdmin Page (Remaining Strings)
-- Description: Adds missing translation keys for BlogAdmin page
-- Note: Most BlogAdmin UI already uses TranslationText components
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- BLOG ADMIN - STATUS BADGES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.status.published', 'en', 'Published', 'admin'),
('admin.blog.status.draft', 'en', 'Draft', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.status.published', 'ru', 'Опубликовано', 'admin'),
('admin.blog.status.draft', 'ru', 'Черновик', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.status.published', 'am', 'Հրապարակված', 'admin'),
('admin.blog.status.draft', 'am', 'Սևագիր', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- BLOG ADMIN - MESSAGES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.confirm.delete', 'en', 'Are you sure you want to delete this blog post?', 'admin'),
('admin.blog.error.deleteFailed', 'en', 'Failed to delete blog post', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.confirm.delete', 'ru', 'Вы уверены, что хотите удалить этот пост?', 'admin'),
('admin.blog.error.deleteFailed', 'ru', 'Не удалось удалить пост', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.confirm.delete', 'am', 'Համոզվա՞ծ եք, որ ուզում եք ջնջել այս բլոգ գրառումը:', 'admin'),
('admin.blog.error.deleteFailed', 'am', 'Չհաջողվեց ջնջել բլոգ գրառումը', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count blog-specific translations
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key LIKE 'admin.blog.%'
-- GROUP BY language
-- ORDER BY language;

-- Expected result (including existing TranslationText keys):
-- am: 4 (new)
-- en: 4 (new)
-- ru: 4 (new)

-- List all blog keys
-- SELECT key, language, value
-- FROM translations
-- WHERE key LIKE 'admin.blog.%'
-- ORDER BY key, language;
