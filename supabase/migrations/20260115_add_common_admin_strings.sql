-- Migration: Add Common Admin Strings (Stage 1 of Phase 3)
-- Date: 2026-01-15
-- Phase: 3 - Admin Dashboard Migration
-- Stage: 1 - Common Strings (Foundation)
-- Description: Adds reusable admin strings used across ALL admin pages
-- Impact: ~30% of admin strings will be covered by these common keys
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- COMMON ADMIN BUTTONS & ACTIONS (Used across all admin pages)
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.cancel', 'en', 'Cancel', 'admin'),
('admin.common.add', 'en', 'Add', 'admin'),
('admin.common.create', 'en', 'Create', 'admin'),
('admin.common.update', 'en', 'Update', 'admin'),
('admin.common.delete', 'en', 'Delete', 'admin'),
('admin.common.save', 'en', 'Save', 'admin'),
('admin.common.edit', 'en', 'Edit', 'admin'),
('admin.common.close', 'en', 'Close', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.cancel', 'ru', 'Отмена', 'admin'),
('admin.common.add', 'ru', 'Добавить', 'admin'),
('admin.common.create', 'ru', 'Создать', 'admin'),
('admin.common.update', 'ru', 'Обновить', 'admin'),
('admin.common.delete', 'ru', 'Удалить', 'admin'),
('admin.common.save', 'ru', 'Сохранить', 'admin'),
('admin.common.edit', 'ru', 'Редактировать', 'admin'),
('admin.common.close', 'ru', 'Закрыть', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.cancel', 'am', 'Չեղարկել', 'admin'),
('admin.common.add', 'am', 'Ավելացնել', 'admin'),
('admin.common.create', 'am', 'Ստեղծել', 'admin'),
('admin.common.update', 'am', 'Թարմացնել', 'admin'),
('admin.common.delete', 'am', 'Ջնջել', 'admin'),
('admin.common.save', 'am', 'Պահպանել', 'admin'),
('admin.common.edit', 'am', 'Խմբագրել', 'admin'),
('admin.common.close', 'am', 'Փակել', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- COMMON ADMIN STATES (Loading, saving, etc.)
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.loading', 'en', 'Loading...', 'admin'),
('admin.common.saving', 'en', 'Saving...', 'admin'),
('admin.common.saved', 'en', 'Saved', 'admin'),
('admin.common.uploading', 'en', 'Uploading...', 'admin'),
('admin.common.processing', 'en', 'Processing...', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.loading', 'ru', 'Загрузка...', 'admin'),
('admin.common.saving', 'ru', 'Сохранение...', 'admin'),
('admin.common.saved', 'ru', 'Сохранено', 'admin'),
('admin.common.uploading', 'ru', 'Загрузка файла...', 'admin'),
('admin.common.processing', 'ru', 'Обработка...', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.loading', 'am', 'Բեռնում...', 'admin'),
('admin.common.saving', 'am', 'Պահպանում...', 'admin'),
('admin.common.saved', 'am', 'Պահպանված է', 'admin'),
('admin.common.uploading', 'am', 'Վերբեռնում...', 'admin'),
('admin.common.processing', 'am', 'Մշակում...', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- COMMON FORM LABELS (Used in multiple admin forms)
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.form.title', 'en', 'Title', 'admin'),
('admin.common.form.description', 'en', 'Description', 'admin'),
('admin.common.form.orderIndex', 'en', 'Order Index', 'admin'),
('admin.common.form.required', 'en', 'Required', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.form.title', 'ru', 'Название', 'admin'),
('admin.common.form.description', 'ru', 'Описание', 'admin'),
('admin.common.form.orderIndex', 'ru', 'Порядковый номер', 'admin'),
('admin.common.form.required', 'ru', 'Обязательное', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.form.title', 'am', 'Վերնագիր', 'admin'),
('admin.common.form.description', 'am', 'Նկարագրություն', 'admin'),
('admin.common.form.orderIndex', 'am', 'Հերթական համար', 'admin'),
('admin.common.form.required', 'am', 'Պարտադիր', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- COMMON CONFIRMATION & ERROR MESSAGES
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.confirm.delete', 'en', 'Are you sure you want to delete this item?', 'admin'),
('admin.common.confirm.unsavedChanges', 'en', 'You have unsaved changes. Are you sure you want to leave?', 'admin'),
('admin.common.error.deleteFailed', 'en', 'Failed to delete item', 'admin'),
('admin.common.error.saveFailed', 'en', 'Failed to save changes', 'admin'),
('admin.common.error.loadFailed', 'en', 'Failed to load data', 'admin'),
('admin.common.success.saved', 'en', 'Changes saved successfully', 'admin'),
('admin.common.success.deleted', 'en', 'Item deleted successfully', 'admin'),
('admin.common.success.created', 'en', 'Item created successfully', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.confirm.delete', 'ru', 'Вы уверены, что хотите удалить этот элемент?', 'admin'),
('admin.common.confirm.unsavedChanges', 'ru', 'У вас есть несохраненные изменения. Вы уверены, что хотите уйти?', 'admin'),
('admin.common.error.deleteFailed', 'ru', 'Не удалось удалить элемент', 'admin'),
('admin.common.error.saveFailed', 'ru', 'Не удалось сохранить изменения', 'admin'),
('admin.common.error.loadFailed', 'ru', 'Не удалось загрузить данные', 'admin'),
('admin.common.success.saved', 'ru', 'Изменения успешно сохранены', 'admin'),
('admin.common.success.deleted', 'ru', 'Элемент успешно удален', 'admin'),
('admin.common.success.created', 'ru', 'Элемент успешно создан', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.confirm.delete', 'am', 'Համոզվա՞ծ եք, որ ուզում եք ջնջել այս տարրը:', 'admin'),
('admin.common.confirm.unsavedChanges', 'am', 'Դուք ունեք չպահպանված փոփոխություններ: Համոզվա՞ծ եք, որ ուզում եք հեռանալ:', 'admin'),
('admin.common.error.deleteFailed', 'am', 'Չհաջողվեց ջնջել տարրը', 'admin'),
('admin.common.error.saveFailed', 'am', 'Չհաջողվեց պահպանել փոփոխությունները', 'admin'),
('admin.common.error.loadFailed', 'am', 'Չհաջողվեց բեռնել տվյալները', 'admin'),
('admin.common.success.saved', 'am', 'Փոփոխությունները հաջողությամբ պահպանվել են', 'admin'),
('admin.common.success.deleted', 'am', 'Տարրը հաջողությամբ ջնջվել է', 'admin'),
('admin.common.success.created', 'am', 'Տարրը հաջողությամբ ստեղծվել է', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- ADMIN DASHBOARD HOME (index.tsx specific)
-- ============================================================================

-- English
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.logout', 'en', 'Logout', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Russian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.logout', 'ru', 'Выйти', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.logout', 'am', 'Դուրս գալ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- To verify the migration, run these queries:

-- Count common admin translations
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key LIKE 'admin.common.%'
-- GROUP BY language
-- ORDER BY language;

-- Expected result:
-- language | count
-- ---------+-------
-- am       |   29
-- en       |   29
-- ru       |   29

-- List all common admin keys
-- SELECT key, language, LEFT(value, 50) as value_preview
-- FROM translations
-- WHERE key LIKE 'admin.common.%'
-- ORDER BY key, language;

-- Check for missing translations
-- SELECT key,
--        COUNT(*) as language_count,
--        STRING_AGG(language, ', ' ORDER BY language) as languages_present
-- FROM translations
-- WHERE key LIKE 'admin.common.%'
-- GROUP BY key
-- HAVING COUNT(*) < 3
-- ORDER BY key;

-- Expected result: 0 rows (all keys should have all 3 languages)
