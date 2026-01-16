-- Migration: Add Russian and Armenian translations for existing English-only keys
-- Date: 2026-01-15
-- Phase: 1 (Low Risk, High Impact)
-- Description: Completes RU/AM translations for auth/login, errors, 404 page, and author bio
-- This migration is idempotent (safe to run multiple times)

-- ============================================================================
-- AUTHENTICATION & LOGIN
-- ============================================================================

-- Russian translations for admin login
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.login.title', 'ru', 'Вход для администратора', 'admin'),
('admin.login.subtitle', 'ru', 'Войдите, чтобы получить доступ к панели администратора', 'admin'),
('admin.login.emailLabel', 'ru', 'Адрес электронной почты', 'admin'),
('admin.login.emailPlaceholder', 'ru', 'admin@example.com', 'admin'),
('admin.login.passwordLabel', 'ru', 'Пароль', 'admin'),
('admin.login.passwordPlaceholder', 'ru', 'Введите ваш пароль', 'admin'),
('admin.login.signingIn', 'ru', 'Вход...', 'admin'),
('admin.login.signIn', 'ru', 'Войти', 'admin'),
('admin.login.backToPortfolio', 'ru', '← Назад к портфолио', 'admin'),
('auth.checkingAuthentication', 'ru', 'Проверка аутентификации...', 'auth')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian translations for admin login
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.login.title', 'am', 'Ադմինի մուտք', 'admin'),
('admin.login.subtitle', 'am', 'Մուտք գործեք՝ ադմինի վահանակ մտնելու համար', 'admin'),
('admin.login.emailLabel', 'am', 'Էլ. փոստի հասցե', 'admin'),
('admin.login.emailPlaceholder', 'am', 'admin@example.com', 'admin'),
('admin.login.passwordLabel', 'am', 'Գաղտնաբառ', 'admin'),
('admin.login.passwordPlaceholder', 'am', 'Մուտքագրեք ձեր գաղտնաբառը', 'admin'),
('admin.login.signingIn', 'am', 'Մուտք...', 'admin'),
('admin.login.signIn', 'am', 'Մուտք գործել', 'admin'),
('admin.login.backToPortfolio', 'am', '← Վերադառնալ պորտֆոլիո', 'admin'),
('auth.checkingAuthentication', 'am', 'Նույնականացման ստուգում...', 'auth')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- ERROR MESSAGES
-- ============================================================================

-- Russian translations for error messages
INSERT INTO public.translations (key, language, value, category) VALUES
('error.unexpected.title', 'ru', 'Упс! Произошла непредвиденная ошибка', 'error'),
('error.unexpected.subtitle', 'ru', 'Не волнуйтесь, такое иногда случается. Проверьте подключение и попробуйте снова.', 'error'),
('error.retry', 'ru', 'Попробовать снова', 'error'),
('error.goHome', 'ru', 'На главную', 'error'),
('error.technicalDetails', 'ru', 'Технические детали', 'error'),
('error.languageLoadFailed.title', 'ru', 'Не удалось загрузить язык', 'error'),
('error.languageLoadFailed.message', 'ru', 'Мы не смогли загрузить настройки вашего языка. Это может быть временной проблемой.', 'error'),
('error.boundary.title', 'ru', 'Что-то пошло не так!', 'error'),
('error.boundary.details', 'ru', 'Детали ошибки', 'error'),
('error.loadFailed.skills', 'ru', 'Не удалось загрузить навыки', 'error'),
('error.loadFailed.education', 'ru', 'Не удалось загрузить образование', 'error'),
('error.loadFailed.featureFlags', 'ru', 'Ошибка загрузки флагов функций', 'error')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian translations for error messages
INSERT INTO public.translations (key, language, value, category) VALUES
('error.unexpected.title', 'am', 'Վայ! Անսպասելի սխալ է տեղի ունեցել', 'error'),
('error.unexpected.subtitle', 'am', 'Մի անհանգստացեք, սա երբեմն պատահում է: Ստուգեք կապը և փորձեք կրկին:', 'error'),
('error.retry', 'am', 'Փորձել կրկին', 'error'),
('error.goHome', 'am', 'Գլխավոր էջ', 'error'),
('error.technicalDetails', 'am', 'Տեխնիկական մանրամասներ', 'error'),
('error.languageLoadFailed.title', 'am', 'Լեզուն բեռնել չհաջողվեց', 'error'),
('error.languageLoadFailed.message', 'am', 'Ձեր նախընտրած լեզվի կարգավորումները բեռնել չհաջողվեց: Սա կարող է լինել ժամանակավոր խնդիր:', 'error'),
('error.boundary.title', 'am', 'Ինչ-որ բան սխալ է գնացել!', 'error'),
('error.boundary.details', 'am', 'Սխալի մանրամասներ', 'error'),
('error.loadFailed.skills', 'am', 'Չհաջողվեց բեռնել հմտությունները', 'error'),
('error.loadFailed.education', 'am', 'Չհաջողվեց բեռնել կրթությունը', 'error'),
('error.loadFailed.featureFlags', 'am', 'Սխալ՝ ֆունկցիաների դրոշակներ բեռնելիս', 'error')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- 404 PAGE (if not already exist with RU/AM)
-- ============================================================================

-- Check if these keys already have RU/AM - if they do, this will just update them

-- Russian translations for 404 page
INSERT INTO public.translations (key, language, value, category) VALUES
('pages.notFound.title', 'ru', 'Страница не найдена', 'pages'),
('pages.notFound.message', 'ru', 'Упс! Страница, которую вы ищете, не существует. Возможно, она была перемещена или удалена.', 'pages'),
('pages.notFound.goHome', 'ru', 'На главную', 'pages'),
('pages.notFound.goBack', 'ru', 'Назад', 'pages'),
('pages.notFound.popularPages', 'ru', 'Популярные страницы', 'pages')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian translations for 404 page
INSERT INTO public.translations (key, language, value, category) VALUES
('pages.notFound.title', 'am', 'Էջը չի գտնվել', 'pages'),
('pages.notFound.message', 'am', 'Վայ! Էջը, որը դուք փնտրում եք, գոյություն չունի: Հնարավոր է՝ այն տեղափոխվել կամ ջնջվել է:', 'pages'),
('pages.notFound.goHome', 'am', 'Գլխավոր էջ', 'pages'),
('pages.notFound.goBack', 'am', 'Հետ', 'pages'),
('pages.notFound.popularPages', 'am', 'Հայտնի էջեր', 'pages')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- SECTION UNAVAILABLE (WorkPage disabled state)
-- ============================================================================

-- Russian translations for section unavailable
INSERT INTO public.translations (key, language, value, category) VALUES
('pages.sectionUnavailable.title', 'ru', 'Раздел недоступен', 'pages'),
('pages.sectionUnavailable.message', 'ru', 'Этот раздел в настоящее время недоступен.', 'pages')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian translations for section unavailable
INSERT INTO public.translations (key, language, value, category) VALUES
('pages.sectionUnavailable.title', 'am', 'Բաժինը հասանելի չէ', 'pages'),
('pages.sectionUnavailable.message', 'am', 'Այս բաժինը ներկայումս հասանելի չէ:', 'pages')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- AUTHOR BIO (if not already exist with RU/AM)
-- ============================================================================

-- Russian translations for author bio
INSERT INTO public.translations (key, language, value, category) VALUES
('author.name', 'ru', 'Гор Папян', 'author'),
('author.bio', 'ru', 'Старший QA инженер и специалист по автоматизации тестирования с опытом работы с Playwright, Selenium и современными фреймворками. Увлечен созданием надежных, поддерживаемых тестовых наборов и обменом знаниями с сообществом.', 'author'),
('author.role', 'ru', 'QA Инженер', 'author'),
('author.location', 'ru', 'Удаленно', 'author'),
('author.experience', 'ru', '5+ лет опыта', 'author'),
('author.initials', 'ru', 'ГП', 'author')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Armenian translations for author bio
INSERT INTO public.translations (key, language, value, category) VALUES
('author.name', 'am', 'Գոր Պապյան', 'author'),
('author.bio', 'am', 'Ավագ QA ինժեներ և թեստավորման ավտոմատացման մասնագետ՝ Playwright, Selenium և ժամանակակից շրջանակների փորձով: Կիրքով զբաղվում եմ հուսալի, պահպանելի թեստային հավաքածուների ստեղծմամբ և գիտելիքների փոխանակմամբ համայնքի հետ:', 'author'),
('author.role', 'am', 'QA Ինժեներ', 'author'),
('author.location', 'am', 'Հեռավար', 'author'),
('author.experience', 'am', '5+ տարի փորձ', 'author'),
('author.initials', 'am', 'ԳՊ', 'author')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- To verify the migration, run these queries:

-- Count translations per language
-- SELECT language, COUNT(*) as count
-- FROM translations
-- WHERE key LIKE 'admin.login.%'
--    OR key = 'auth.checkingAuthentication'
--    OR key LIKE 'error.%'
--    OR key LIKE 'pages.notFound.%'
--    OR key LIKE 'pages.sectionUnavailable.%'
--    OR key LIKE 'author.%'
-- GROUP BY language
-- ORDER BY language;

-- Expected result:
-- language | count
-- ---------+-------
-- am       |   35
-- en       |   35
-- ru       |   35

-- Check for missing translations
-- SELECT DISTINCT key, language
-- FROM (
--   SELECT key FROM translations WHERE key LIKE 'admin.login.%'
--   UNION SELECT 'auth.checkingAuthentication'
--   UNION SELECT key FROM translations WHERE key LIKE 'error.%'
--   UNION SELECT key FROM translations WHERE key LIKE 'pages.notFound.%'
--   UNION SELECT key FROM translations WHERE key LIKE 'pages.sectionUnavailable.%'
--   UNION SELECT key FROM translations WHERE key LIKE 'author.%'
-- ) keys
-- CROSS JOIN (VALUES ('en'), ('ru'), ('am')) langs(language)
-- WHERE NOT EXISTS (
--   SELECT 1 FROM translations t
--   WHERE t.key = keys.key AND t.language = langs.language
-- )
-- ORDER BY key, language;

-- Expected result: 0 rows (all keys should have all 3 languages)
