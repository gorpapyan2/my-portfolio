-- Migration: Add Experience Admin Translation Keys
-- Date: 2026-01-15
-- Phase: 3 - Admin Dashboard Migration
-- Stage: 4 - ExperienceAdmin Page
-- Description: Adds translation keys specific to ExperienceAdmin page
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- EXPERIENCE ADMIN - FORM LABELS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.form.role', 'en', 'Role', 'admin'),
('admin.experience.form.company', 'en', 'Company', 'admin'),
('admin.experience.form.period', 'en', 'Period', 'admin'),
('admin.experience.form.achievements', 'en', 'Achievements', 'admin'),
('admin.experience.form.achievementPlaceholder', 'en', 'Add an achievement', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.form.role', 'ru', 'Должность', 'admin'),
('admin.experience.form.company', 'ru', 'Компания', 'admin'),
('admin.experience.form.period', 'ru', 'Период', 'admin'),
('admin.experience.form.achievements', 'ru', 'Достижения', 'admin'),
('admin.experience.form.achievementPlaceholder', 'ru', 'Добавить достижение', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.form.role', 'am', 'Դիրք', 'admin'),
('admin.experience.form.company', 'am', 'Ընկերություն', 'admin'),
('admin.experience.form.period', 'am', 'Ժամանակահատված', 'admin'),
('admin.experience.form.achievements', 'am', 'Նվաճումներ', 'admin'),
('admin.experience.form.achievementPlaceholder', 'am', 'Ավելացնել նվաճում', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EXPERIENCE ADMIN - BUTTONS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.button.add', 'en', 'Add Experience', 'admin'),
('admin.experience.button.create', 'en', 'Create Experience', 'admin'),
('admin.experience.button.update', 'en', 'Update Experience', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.button.add', 'ru', 'Добавить опыт', 'admin'),
('admin.experience.button.create', 'ru', 'Создать запись', 'admin'),
('admin.experience.button.update', 'ru', 'Обновить запись', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.button.add', 'am', 'Ավելացնել փորձ', 'admin'),
('admin.experience.button.create', 'am', 'Ստեղծել գրառում', 'admin'),
('admin.experience.button.update', 'am', 'Թարմացնել գրառում', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EXPERIENCE ADMIN - SECTION & LABELS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.section.title', 'en', 'Experiences', 'admin'),
('admin.experience.card.at', 'en', 'at', 'admin'),
('admin.experience.card.order', 'en', 'Order:', 'admin'),
('admin.experience.card.created', 'en', 'Created:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.section.title', 'ru', 'Опыт работы', 'admin'),
('admin.experience.card.at', 'ru', 'в', 'admin'),
('admin.experience.card.order', 'ru', 'Порядок:', 'admin'),
('admin.experience.card.created', 'ru', 'Создано:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.section.title', 'am', 'Աշխատանքային փորձ', 'admin'),
('admin.experience.card.at', 'am', '-ում', 'admin'),
('admin.experience.card.order', 'am', 'Հերթականություն:', 'admin'),
('admin.experience.card.created', 'am', 'Ստեղծված:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EXPERIENCE ADMIN - MESSAGES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.confirm.delete', 'en', 'Are you sure you want to delete this experience?', 'admin'),
('admin.experience.error.deleteFailed', 'en', 'Failed to delete experience', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.confirm.delete', 'ru', 'Вы уверены, что хотите удалить этот опыт работы?', 'admin'),
('admin.experience.error.deleteFailed', 'ru', 'Не удалось удалить запись об опыте работы', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.confirm.delete', 'am', 'Համոզվա՞ծ եք, որ ուզում եք ջնջել այս աշխատանքային փորձը:', 'admin'),
('admin.experience.error.deleteFailed', 'am', 'Չհաջողվեց ջնջել աշխատանքային փորձի գրառումը', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count experience-specific translations
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key LIKE 'admin.experience.%'
-- GROUP BY language
-- ORDER BY language;

-- Expected result:
-- am: 14
-- en: 14
-- ru: 14

-- List all experience keys
-- SELECT key, language, value
-- FROM translations
-- WHERE key LIKE 'admin.experience.%'
-- ORDER BY key, language;
