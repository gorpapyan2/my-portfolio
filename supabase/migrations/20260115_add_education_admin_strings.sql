-- Migration: Add Education Admin Translation Keys
-- Date: 2026-01-15
-- Phase: 3 - Admin Dashboard Migration
-- Stage: 3 - EducationAdmin Page
-- Description: Adds translation keys specific to EducationAdmin page
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- EDUCATION ADMIN - FORM LABELS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.form.degree', 'en', 'Degree', 'admin'),
('admin.education.form.school', 'en', 'School', 'admin'),
('admin.education.form.year', 'en', 'Year', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.form.degree', 'ru', 'Степень', 'admin'),
('admin.education.form.school', 'ru', 'Учебное заведение', 'admin'),
('admin.education.form.year', 'ru', 'Год', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.form.degree', 'am', 'Աստիճան', 'admin'),
('admin.education.form.school', 'am', 'Ուսումնական հաստատություն', 'admin'),
('admin.education.form.year', 'am', 'Տարի', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EDUCATION ADMIN - BUTTONS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.button.add', 'en', 'Add Education', 'admin'),
('admin.education.button.create', 'en', 'Create Education', 'admin'),
('admin.education.button.update', 'en', 'Update Education', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.button.add', 'ru', 'Добавить образование', 'admin'),
('admin.education.button.create', 'ru', 'Создать запись', 'admin'),
('admin.education.button.update', 'ru', 'Обновить запись', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.button.add', 'am', 'Ավելացնել կրթություն', 'admin'),
('admin.education.button.create', 'am', 'Ստեղծել գրառում', 'admin'),
('admin.education.button.update', 'am', 'Թարմացնել գրառում', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EDUCATION ADMIN - SECTION & LABELS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.section.title', 'en', 'Education', 'admin'),
('admin.education.card.order', 'en', 'Order:', 'admin'),
('admin.education.card.created', 'en', 'Created:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.section.title', 'ru', 'Образование', 'admin'),
('admin.education.card.order', 'ru', 'Порядок:', 'admin'),
('admin.education.card.created', 'ru', 'Создано:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.section.title', 'am', 'Կրթություն', 'admin'),
('admin.education.card.order', 'am', 'Հերթականություն:', 'admin'),
('admin.education.card.created', 'am', 'Ստեղծված:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EDUCATION ADMIN - MESSAGES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.confirm.delete', 'en', 'Are you sure you want to delete this education entry?', 'admin'),
('admin.education.error.deleteFailed', 'en', 'Failed to delete education entry', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.confirm.delete', 'ru', 'Вы уверены, что хотите удалить эту запись об образовании?', 'admin'),
('admin.education.error.deleteFailed', 'ru', 'Не удалось удалить запись об образовании', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.confirm.delete', 'am', 'Համոզվա՞ծ եք, որ ուզում եք ջնջել այս կրթության գրառումը:', 'admin'),
('admin.education.error.deleteFailed', 'am', 'Չհաջողվեց ջնջել կրթության գրառումը', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count education-specific translations
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key LIKE 'admin.education.%'
-- GROUP BY language
-- ORDER BY language;

-- Expected result:
-- am: 11
-- en: 11
-- ru: 11

-- List all education keys
-- SELECT key, language, value
-- FROM translations
-- WHERE key LIKE 'admin.education.%'
-- ORDER BY key, language;
