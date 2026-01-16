-- Migration: Add Project Admin Translation Keys
-- Date: 2026-01-15
-- Phase: 3 - Admin Dashboard Migration
-- Stage: 5 - ProjectAdmin Page
-- Description: Adds translation keys specific to ProjectAdmin page
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- PROJECT ADMIN - FORM LABELS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.form.liveUrl', 'en', 'Live URL', 'admin'),
('admin.projects.form.githubUrl', 'en', 'GitHub URL', 'admin'),
('admin.projects.form.tags', 'en', 'Tags', 'admin'),
('admin.projects.form.tagPlaceholder', 'en', 'Add a tag', 'admin'),
('admin.projects.form.featured', 'en', 'Featured Project', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.form.liveUrl', 'ru', 'URL проекта', 'admin'),
('admin.projects.form.githubUrl', 'ru', 'GitHub URL', 'admin'),
('admin.projects.form.tags', 'ru', 'Теги', 'admin'),
('admin.projects.form.tagPlaceholder', 'ru', 'Добавить тег', 'admin'),
('admin.projects.form.featured', 'ru', 'Избранный проект', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.form.liveUrl', 'am', 'Նախագծի URL', 'admin'),
('admin.projects.form.githubUrl', 'am', 'GitHub URL', 'admin'),
('admin.projects.form.tags', 'am', 'Պիտակներ', 'admin'),
('admin.projects.form.tagPlaceholder', 'am', 'Ավելացնել պիտակ', 'admin'),
('admin.projects.form.featured', 'am', 'Առանձնացված նախագիծ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- PROJECT ADMIN - BUTTONS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.button.add', 'en', 'Add Project', 'admin'),
('admin.projects.button.create', 'en', 'Create Project', 'admin'),
('admin.projects.button.update', 'en', 'Update Project', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.button.add', 'ru', 'Добавить проект', 'admin'),
('admin.projects.button.create', 'ru', 'Создать проект', 'admin'),
('admin.projects.button.update', 'ru', 'Обновить проект', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.button.add', 'am', 'Ավելացնել նախագիծ', 'admin'),
('admin.projects.button.create', 'am', 'Ստեղծել նախագիծ', 'admin'),
('admin.projects.button.update', 'am', 'Թարմացնել նախագիծ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- PROJECT ADMIN - SECTION & LABELS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.section.title', 'en', 'Projects', 'admin'),
('admin.projects.card.order', 'en', 'Order:', 'admin'),
('admin.projects.card.created', 'en', 'Created:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.section.title', 'ru', 'Проекты', 'admin'),
('admin.projects.card.order', 'ru', 'Порядок:', 'admin'),
('admin.projects.card.created', 'ru', 'Создано:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.section.title', 'am', 'Նախագծեր', 'admin'),
('admin.projects.card.order', 'am', 'Հերթականություն:', 'admin'),
('admin.projects.card.created', 'am', 'Ստեղծված:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- PROJECT ADMIN - MESSAGES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.confirm.delete', 'en', 'Are you sure you want to delete this project?', 'admin'),
('admin.projects.error.deleteFailed', 'en', 'Failed to delete project', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.confirm.delete', 'ru', 'Вы уверены, что хотите удалить этот проект?', 'admin'),
('admin.projects.error.deleteFailed', 'ru', 'Не удалось удалить проект', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.confirm.delete', 'am', 'Համոզվա՞ծ եք, որ ուզում եք ջնջել այս նախագիծը:', 'admin'),
('admin.projects.error.deleteFailed', 'am', 'Չհաջողվեց ջնջել նախագիծը', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count project-specific translations
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key LIKE 'admin.projects.%'
-- GROUP BY language
-- ORDER BY language;

-- Expected result:
-- am: 13
-- en: 13
-- ru: 13

-- List all project keys
-- SELECT key, language, value
-- FROM translations
-- WHERE key LIKE 'admin.projects.%'
-- ORDER BY key, language;
