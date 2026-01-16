-- Migration: Add Feature Flag Admin Translation Keys
-- Date: 2026-01-15
-- Phase: 3 - Admin Dashboard Migration
-- Stage: 7 - FeatureFlagAdmin Page (Final Admin Page)
-- Description: Adds translation keys for FeatureFlagAdmin page
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- FEATURE FLAG ADMIN - BUTTONS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.button.addFlag', 'en', 'Add Flag', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.button.addFlag', 'ru', 'Добавить флаг', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.button.addFlag', 'am', 'Ավելացնել դրոշ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- FEATURE FLAG ADMIN - SEARCH & EMPTY STATES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.search.placeholder', 'en', 'Search flags...', 'admin'),
('admin.featureFlags.empty.noFlags', 'en', 'No feature flags found', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.search.placeholder', 'ru', 'Поиск флагов...', 'admin'),
('admin.featureFlags.empty.noFlags', 'ru', 'Флаги функций не найдены', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.search.placeholder', 'am', 'Փնտրել դրոշներ...', 'admin'),
('admin.featureFlags.empty.noFlags', 'am', 'Ֆունկցիոնալ դրոշներ չգտնվեցին', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- FEATURE FLAG ADMIN - STATUS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.status.enabled', 'en', 'Enabled', 'admin'),
('admin.featureFlags.status.disabled', 'en', 'Disabled', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.status.enabled', 'ru', 'Включено', 'admin'),
('admin.featureFlags.status.disabled', 'ru', 'Отключено', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.status.enabled', 'am', 'Միացված', 'admin'),
('admin.featureFlags.status.disabled', 'am', 'Անջատված', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- FEATURE FLAG ADMIN - FORM LABELS
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.form.flagKey', 'en', 'Flag Key', 'admin'),
('admin.featureFlags.form.contentType', 'en', 'Content Type', 'admin'),
('admin.featureFlags.form.contentId', 'en', 'Content ID (Optional)', 'admin'),
('admin.featureFlags.form.contentIdPlaceholder', 'en', 'UUID for specific content item', 'admin'),
('admin.featureFlags.form.descriptionPlaceholder', 'en', 'Describe what this flag controls', 'admin'),
('admin.featureFlags.form.enabledByDefault', 'en', 'Enabled by default', 'admin'),
('admin.featureFlags.form.enabled', 'en', 'Enabled', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.form.flagKey', 'ru', 'Ключ флага', 'admin'),
('admin.featureFlags.form.contentType', 'ru', 'Тип контента', 'admin'),
('admin.featureFlags.form.contentId', 'ru', 'ID контента (необязательно)', 'admin'),
('admin.featureFlags.form.contentIdPlaceholder', 'ru', 'UUID для конкретного элемента контента', 'admin'),
('admin.featureFlags.form.descriptionPlaceholder', 'ru', 'Опишите, что контролирует этот флаг', 'admin'),
('admin.featureFlags.form.enabledByDefault', 'ru', 'Включено по умолчанию', 'admin'),
('admin.featureFlags.form.enabled', 'ru', 'Включено', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.form.flagKey', 'am', 'Դրոշի բանալի', 'admin'),
('admin.featureFlags.form.contentType', 'am', 'Բովանդակության տեսակ', 'admin'),
('admin.featureFlags.form.contentId', 'am', 'Բովանդակության ID (ոչ պարտադիր)', 'admin'),
('admin.featureFlags.form.contentIdPlaceholder', 'am', 'UUID կոնկրետ բովանդակության տարրի համար', 'admin'),
('admin.featureFlags.form.descriptionPlaceholder', 'am', 'Նկարագրեք՝ ինչ է վերահսկում այս դրոշը', 'admin'),
('admin.featureFlags.form.enabledByDefault', 'am', 'Միացված լռելյայն', 'admin'),
('admin.featureFlags.form.enabled', 'am', 'Միացված', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- FEATURE FLAG ADMIN - CONTENT TYPES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.contentType.section', 'en', 'Section', 'admin'),
('admin.featureFlags.contentType.blogPost', 'en', 'Blog Post', 'admin'),
('admin.featureFlags.contentType.project', 'en', 'Project', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.contentType.section', 'ru', 'Секция', 'admin'),
('admin.featureFlags.contentType.blogPost', 'ru', 'Пост в блоге', 'admin'),
('admin.featureFlags.contentType.project', 'ru', 'Проект', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.contentType.section', 'am', 'Բաժին', 'admin'),
('admin.featureFlags.contentType.blogPost', 'am', 'Բլոգի գրառում', 'admin'),
('admin.featureFlags.contentType.project', 'am', 'Նախագիծ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- FEATURE FLAG ADMIN - MESSAGES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.confirm.deleteMessage', 'en', 'Are you sure you want to delete the feature flag "{flagKey}"? This action cannot be undone.', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.confirm.deleteMessage', 'ru', 'Вы уверены, что хотите удалить флаг "{flagKey}"? Это действие нельзя отменить.', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.confirm.deleteMessage', 'am', 'Համոզվա՞ծ եք, որ ուզում եք ջնջել "{flagKey}" դրոշը: Այս գործողությունը հնարավոր չէ հետարկել:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count featureFlags-specific translations
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key LIKE 'admin.featureFlags.%'
-- GROUP BY language
-- ORDER BY language;

-- Expected result:
-- am: 18
-- en: 18
-- ru: 18

-- List all featureFlags keys
-- SELECT key, language, value
-- FROM translations
-- WHERE key LIKE 'admin.featureFlags.%'
-- ORDER BY key, language;
