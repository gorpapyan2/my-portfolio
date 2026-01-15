-- Migration: Add Skills Admin Translation Keys (Stage 2 of Phase 3)
-- Date: 2026-01-15
-- Phase: 3 - Admin Dashboard Migration
-- Stage: 2 - SkillsAdmin Page
-- Description: Adds translation keys specific to SkillsAdmin page
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- SKILLS ADMIN - FORM LABELS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.form.title', 'en', 'Title', 'admin'),
('admin.skills.form.icon', 'en', 'Icon', 'admin'),
('admin.skills.form.level', 'en', 'Level (0-100%)', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.form.title', 'ru', 'Название', 'admin'),
('admin.skills.form.icon', 'ru', 'Иконка', 'admin'),
('admin.skills.form.level', 'ru', 'Уровень (0-100%)', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.form.title', 'am', 'Վերնագիր', 'admin'),
('admin.skills.form.icon', 'am', 'Պատկերակ', 'admin'),
('admin.skills.form.level', 'am', 'Մակարդակ (0-100%)', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- SKILLS ADMIN - BUTTONS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.button.add', 'en', 'Add Skill', 'admin'),
('admin.skills.button.create', 'en', 'Create Skill', 'admin'),
('admin.skills.button.update', 'en', 'Update Skill', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.button.add', 'ru', 'Добавить навык', 'admin'),
('admin.skills.button.create', 'ru', 'Создать навык', 'admin'),
('admin.skills.button.update', 'ru', 'Обновить навык', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.button.add', 'am', 'Ավելացնել հմտություն', 'admin'),
('admin.skills.button.create', 'am', 'Ստեղծել հմտություն', 'admin'),
('admin.skills.button.update', 'am', 'Թարմացնել հմտություն', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- SKILLS ADMIN - SECTION & LABELS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.section.title', 'en', 'Skills', 'admin'),
('admin.skills.card.proficiency', 'en', 'Proficiency', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.section.title', 'ru', 'Навыки', 'admin'),
('admin.skills.card.proficiency', 'ru', 'Владение', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.section.title', 'am', 'Հմտություններ', 'admin'),
('admin.skills.card.proficiency', 'am', 'Տիրապետում', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- SKILLS ADMIN - MESSAGES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.confirm.delete', 'en', 'Are you sure you want to delete this skill?', 'admin'),
('admin.skills.error.deleteFailed', 'en', 'Failed to delete skill', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.confirm.delete', 'ru', 'Вы уверены, что хотите удалить этот навык?', 'admin'),
('admin.skills.error.deleteFailed', 'ru', 'Не удалось удалить навык', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.confirm.delete', 'am', 'Համոզվա՞ծ եք, որ ուզում եք ջնջել այս հմտությունը:', 'admin'),
('admin.skills.error.deleteFailed', 'am', 'Չհաջողվեց ջնջել հմտությունը', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count skills-specific translations
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key LIKE 'admin.skills.%'
-- GROUP BY language
-- ORDER BY language;

-- Expected result:
-- am: 10
-- en: 10
-- ru: 10

-- List all skills keys
-- SELECT key, language, value
-- FROM translations
-- WHERE key LIKE 'admin.skills.%'
-- ORDER BY key, language;
