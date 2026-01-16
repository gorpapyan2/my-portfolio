-- Migration: Add missing non-admin translation keys
-- Date: 2026-01-16
-- Description: Adds 145 missing translations across 10 categories:
--              - Pages, navigation, statistics, footer (seed script keys)
--              - About basic info, key results (EN→RU/AM), languages (EN→RU/AM)
--              - Experience general and Zealous company-specific keys
--              Total: 46 keys × 3 languages + 8 keys × 2 languages (RU/AM only) = 145

BEGIN;

-- ============================================================================
-- PAGES CATEGORY
-- ============================================================================

-- Basic page keys from seed script
INSERT INTO public.translations (key, language, value, category) VALUES
('pages.home', 'en', 'Home', 'pages'),
('pages.home', 'ru', 'Главная', 'pages'),
('pages.home', 'am', 'Գլխավոր', 'pages'),
('pages.about', 'en', 'About', 'pages'),
('pages.about', 'ru', 'О себе', 'pages'),
('pages.about', 'am', 'Իմ մասին', 'pages'),
('pages.blog', 'en', 'Blog', 'pages'),
('pages.blog', 'ru', 'Блог', 'pages'),
('pages.blog', 'am', 'Բլոգ', 'pages'),
('pages.contact', 'en', 'Contact', 'pages'),
('pages.contact', 'ru', 'Контакты', 'pages'),
('pages.contact', 'am', 'Կապ', 'pages')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- New page navigation keys
INSERT INTO public.translations (key, language, value, category) VALUES
('pages.education', 'en', 'Education', 'pages'),
('pages.education', 'ru', 'Образование', 'pages'),
('pages.education', 'am', 'Կրթություն', 'pages'),
('pages.skills', 'en', 'Skills', 'pages'),
('pages.skills', 'ru', 'Навыки', 'pages'),
('pages.skills', 'am', 'Հմտություններ', 'pages'),
('pages.sections', 'en', 'Sections', 'pages'),
('pages.sections', 'ru', 'Разделы', 'pages'),
('pages.sections', 'am', 'Բաժիններ', 'pages')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- NAVIGATION CATEGORY
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('nav.edit', 'en', 'Edit', 'nav'),
('nav.edit', 'ru', 'Редактировать', 'nav'),
('nav.edit', 'am', 'Խմբագրել', 'nav')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- STATISTICS CATEGORY
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('statistics.title', 'en', 'Impact Through Numbers', 'statistics'),
('statistics.title', 'ru', 'Влияние в цифрах', 'statistics'),
('statistics.title', 'am', 'Թվերով ազդեցություն', 'statistics'),
('statistics.subtitle', 'en', 'Measurable results across projects and platforms', 'statistics'),
('statistics.subtitle', 'ru', 'Измеримые результаты в проектах и платформах', 'statistics'),
('statistics.subtitle', 'am', 'Չափելի արդյունքներ նախագծերում և հարթակներում', 'statistics'),
('statistics.experienceDescription', 'en', 'Years specializing in deterministic test automation', 'statistics'),
('statistics.experienceDescription', 'ru', 'Годы специализации в детерминированной автоматизации тестов', 'statistics'),
('statistics.experienceDescription', 'am', 'Տարիներ՝ կանխատեսելի թեստերի ավտոմատացում', 'statistics'),
('statistics.projectsDescription', 'en', 'Delivered with measurable quality improvements', 'statistics'),
('statistics.projectsDescription', 'ru', 'С измеримыми улучшениями качества', 'statistics'),
('statistics.projectsDescription', 'am', 'Չափելի որակի բարելավումներով', 'statistics'),
('statistics.testsDescription', 'en', 'Playwright, PyTest, XCUITest, AWS CodeBuild, PostgreSQL', 'statistics'),
('statistics.testsDescription', 'ru', 'Playwright, PyTest, XCUITest, AWS CodeBuild, PostgreSQL', 'statistics'),
('statistics.testsDescription', 'am', 'Playwright, PyTest, XCUITest, AWS CodeBuild, PostgreSQL', 'statistics'),
('statistics.expertiseDescription', 'en', 'UI & API Automation, CI/CD Integration, Data-Driven Testing', 'statistics'),
('statistics.expertiseDescription', 'ru', 'UI и API автоматизация, интеграция CI/CD, Data-Driven тестирование', 'statistics'),
('statistics.expertiseDescription', 'am', 'UI և API ավտոմատացում, CI/CD ինտեգրում, տվյալահիմն թեստավորում', 'statistics')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- PORTFOLIO NAVIGATION CATEGORY
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('portfolioNav.learnMore', 'en', 'Learn more', 'portfolioNav'),
('portfolioNav.learnMore', 'ru', 'Подробнее', 'portfolioNav'),
('portfolioNav.learnMore', 'am', 'Ավելին', 'portfolioNav')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- FOOTER CATEGORY
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('footer.about', 'en', 'About', 'footer'),
('footer.about', 'ru', 'О сайте', 'footer'),
('footer.about', 'am', 'Մեր մասին', 'footer'),
('footer.aboutDescription', 'en', 'Dedicated QA Engineer with a passion for ensuring software excellence through comprehensive testing and quality control.', 'footer'),
('footer.aboutDescription', 'ru', 'Инженер по обеспечению качества, увлеченный обеспечением качества ПО с помощью комплексного тестирования.', 'footer'),
('footer.aboutDescription', 'am', 'QA ինժեներ՝ ծրագրային ապահովման որակի ապահովման նկատմամբ կիրքով։', 'footer'),
('footer.contact', 'en', 'Contact', 'footer'),
('footer.contact', 'ru', 'Контакты', 'footer'),
('footer.contact', 'am', 'Կապ', 'footer'),
('footer.location', 'en', 'Armenia Kapan, Syunik', 'footer'),
('footer.location', 'ru', 'Армения, Капан, Сюник', 'footer'),
('footer.location', 'am', 'Հայաստան, Կապան, Սյունիք', 'footer'),
('footer.quickLinks', 'en', 'Quick Links', 'footer'),
('footer.quickLinks', 'ru', 'Быстрые ссылки', 'footer'),
('footer.quickLinks', 'am', 'Արագ հղումներ', 'footer'),
('footer.connect', 'en', 'Connect', 'footer'),
('footer.connect', 'ru', 'Связаться', 'footer'),
('footer.connect', 'am', 'Կապ հաստատել', 'footer'),
('footer.privacy', 'en', 'Privacy Policy', 'footer'),
('footer.privacy', 'ru', 'Политика конфиденциальности', 'footer'),
('footer.privacy', 'am', 'Գաղտնիության քաղաքականություն', 'footer'),
('footer.terms', 'en', 'Terms of Service', 'footer'),
('footer.terms', 'ru', 'Условия обслуживания', 'footer'),
('footer.terms', 'am', 'Ծառայության պայմաններ', 'footer')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- ABOUT CATEGORY - BASIC INFO
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('about.portraitAlt', 'en', 'Gor Papyan', 'about'),
('about.portraitAlt', 'ru', 'Гор Папян', 'about'),
('about.portraitAlt', 'am', 'Գոր Պապյան', 'about'),
('about.headline', 'en', 'Mid-level QA Automation Engineer specializing in Playwright and CI/CD', 'about'),
('about.headline', 'ru', 'Мидл QA Automation инженер, специализация Playwright и CI/CD', 'about'),
('about.headline', 'am', 'Միջին մակարդակի QA ավտոմատացման ինժեներ՝ Playwright և CI/CD', 'about'),
('about.professionalJourney.content', 'en', 'QA Automation Engineer delivering reliable UI and API automation with Playwright, embedded in Agile teams since October 2022. I build frameworks, integrate them into CI/CD (AWS CodeBuild/CodeArtifact), and use data isolation and tuned timeouts to stabilize regressions and cut runtime.', 'about'),
('about.professionalJourney.content', 'ru', 'QA Automation инженер: надежная автоматизация UI и API на Playwright с 2022. Строю фреймворки, интегрирую в CI/CD (AWS CodeBuild/CodeArtifact), изоляция данных и тайм-ауты для стабильности.', 'about'),
('about.professionalJourney.content', 'am', 'QA ավտոմատացման ինժեներ՝ Playwright-ով UI և API ավտոմատացում, 2022-ից։ Կառուցում եմ շրջանակներ, ինտեգրում CI/CD, տվյալների մեկուսացում և ժամանակային սահմանաչափեր՝ կայունության համար։', 'about'),
('about.philosophy.content', 'en', 'Quality isn''t only finding bugs—it''s enabling confident, fast delivery. Every test is a design decision: make it readable, deterministic, and valuable to developers and users alike.', 'about'),
('about.philosophy.content', 'ru', 'Качество — это не только баги, а уверенная и быстрая поставка. Каждый тест — это решение дизайна: читаемый, детерминированный и полезный.', 'about'),
('about.philosophy.content', 'am', 'Որակը միայն սխալներ գտնելը չէ՝ այն վստահ, արագ թողարկումն է։ Ամեն թեստ դիզայնի որոշում է՝ ընթեռնելի, կանխատեսելի ու արժեքավոր։', 'about'),
('about.toolbox.content', 'en', 'Playwright (TypeScript), PyTest, XCUITest; REST, Postman, Mountebank; PostgreSQL; Git; AWS CodeBuild & CodeArtifact; TestRail; Jira.', 'about'),
('about.toolbox.content', 'ru', 'Playwright (TypeScript), PyTest, XCUITest; REST, Postman, Mountebank; PostgreSQL; Git; AWS CodeBuild & CodeArtifact; TestRail; Jira.', 'about'),
('about.toolbox.content', 'am', 'Playwright (TypeScript), PyTest, XCUITest; REST, Postman, Mountebank; PostgreSQL; Git; AWS CodeBuild & CodeArtifact; TestRail; Jira.', 'about')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- ABOUT CATEGORY - KEY RESULTS (Previously EN-only, adding RU/AM)
-- ============================================================================

-- Key Results section title
INSERT INTO public.translations (key, language, value, category) VALUES
('about.keyResults.title', 'ru', 'Ключевые результаты', 'about'),
('about.keyResults.title', 'am', 'Հիմնական արդյունքներ', 'about')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Key Results items
INSERT INTO public.translations (key, language, value, category) VALUES
('about.keyResults.1', 'ru', 'Время ручного регрессионного тестирования сокращено на −40% благодаря стабильным наборам Playwright и целевым интеграционным тестам.', 'about'),
('about.keyResults.1', 'am', 'Ձեռքով ռեգրեսիոն թեստավորման ժամանակը կրճատվել է −40%-ով՝ շնորհիվ Playwright կայուն հավաքածուների և թիրախային ինտեգրման թեստերի։', 'about'),
('about.keyResults.2', 'ru', 'Нестабильность тестов снижена на −70% за счет стабилизации тестовых данных, контроля сети/таймаутов и изоляции спецификаций.', 'about'),
('about.keyResults.2', 'am', 'Անկայուն թեստերի մակարդակը նվազել է −70%-ով՝ կայունացնելով թեստային տվյալները, վերահսկելով ցանցը/ժամանակային սահմանները և մեկուսացնելով սպեցիֆիկացիաները։', 'about'),
('about.keyResults.3', 'ru', 'Время выполнения CI сокращено за счет параллельных/фрагментированных запусков Playwright, а также повторного использования аутентификации (storageState).', 'about'),
('about.keyResults.3', 'am', 'CI-ի կատարման ժամանակը կրճատվել է զուգահեռ/բաժանված Playwright աշխատեցումների և նաև նույնականացման կրկնակի օգտագործման (storageState) միջոցով։', 'about')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- ABOUT CATEGORY - LANGUAGES (Previously EN-only, adding RU/AM)
-- ============================================================================

-- Languages section title
INSERT INTO public.translations (key, language, value, category) VALUES
('about.languages.title', 'ru', 'Языки', 'about'),
('about.languages.title', 'am', 'Լեզուներ', 'about')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Language proficiency items
INSERT INTO public.translations (key, language, value, category) VALUES
('about.languages.1', 'ru', 'Армянский (Родной)', 'about'),
('about.languages.1', 'am', 'Հայերեն (Մայրենի)', 'about'),
('about.languages.2', 'ru', 'Русский (Свободный)', 'about'),
('about.languages.2', 'am', 'Ռուսերեն (Քաղաքավարի)', 'about'),
('about.languages.3', 'ru', 'Английский (Средний)', 'about'),
('about.languages.3', 'am', 'Անգլերեն (Միջին)', 'about')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EXPERIENCE CATEGORY - GENERAL (2 NEW KEYS)
-- ============================================================================

-- General experience section keys
INSERT INTO public.translations (key, language, value, category) VALUES
('experience.title', 'en', 'Experience', 'experience'),
('experience.title', 'ru', 'Опыт', 'experience'),
('experience.title', 'am', 'Փորձ', 'experience'),
('experience.keyAchievements', 'en', 'Key Achievements', 'experience'),
('experience.keyAchievements', 'ru', 'Ключевые достижения', 'experience'),
('experience.keyAchievements', 'am', 'Հիմնական ձեռքբերումներ', 'experience')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EXPERIENCE CATEGORY - ZEALOUS COMPANY (22 NEW KEYS)
-- ============================================================================

-- Zealous company basic information
INSERT INTO public.translations (key, language, value, category) VALUES
('experience.zealous.role', 'en', 'QA Automation Engineer', 'experience'),
('experience.zealous.role', 'ru', 'Инженер по автоматизации тестирования', 'experience'),
('experience.zealous.role', 'am', 'QA ավտոմատացման ինժեներ', 'experience'),
('experience.zealous.company', 'en', 'Zealous', 'experience'),
('experience.zealous.company', 'ru', 'Zealous', 'experience'),
('experience.zealous.company', 'am', 'Zealous', 'experience'),
('experience.zealous.period', 'en', 'Oct 2022 – Present', 'experience'),
('experience.zealous.period', 'ru', 'Окт 2022 – Настоящее время', 'experience'),
('experience.zealous.period', 'am', 'Հոկ 2022 – Ներկա', 'experience'),
('experience.zealous.description', 'en', 'Built and owned Playwright-based UI/API automation from scratch; embedded in Agile teams, integrated suites into AWS CI/CD, and stabilized regressions.', 'experience'),
('experience.zealous.description', 'ru', 'Создал и управлял автоматизацией UI/API на базе Playwright с нуля; работал в Agile командах, интегрировал наборы в AWS CI/CD и стабилизировал регрессии.', 'experience'),
('experience.zealous.description', 'am', 'Կառուցել և կառավարել է Playwright-ի վրա հիմնված UI/API ավտոմատացումը զրոյից; աշխատել է Agile թիմերում, ինտեգրել հավաքածուները AWS CI/CD-ում և կայունացրել ռեգրեսիաները։', 'experience')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Zealous achievements (9 items)
INSERT INTO public.translations (key, language, value, category) VALUES
('experience.zealous.achievements.1', 'en', 'Studied and analyzed specs; collaborated with developers/PM to create test plans and test cases (Agile/Scrum).', 'experience'),
('experience.zealous.achievements.1', 'ru', 'Изучал и анализировал спецификации; сотрудничал с разработчиками/PM для создания тест-планов и тест-кейсов (Agile/Scrum).', 'experience'),
('experience.zealous.achievements.1', 'am', 'Ուսումնասիրել և վերլուծել է սպեցիֆիկացիաները; համագործակցել է ծրագրավորողների/PM-ի հետ թեստային պլանների և թեստային դեպքերի ստեղծման համար (Agile/Scrum)։', 'experience'),

('experience.zealous.achievements.2', 'en', 'Built Playwright automation frameworks from scratch for UI & API (page objects/components, fixtures, env configs, tracing).', 'experience'),
('experience.zealous.achievements.2', 'ru', 'Построил фреймворки автоматизации Playwright с нуля для UI и API (page objects/компоненты, fixtures, конфигурации окружения, трассировка).', 'experience'),
('experience.zealous.achievements.2', 'am', 'Կառուցել է Playwright ավտոմատացման շրջանակներ զրոյից UI և API-ի համար (էջի օբյեկտներ/բաղադրիչներ, fixtures, միջավայրի կոնֆիգուրացիաներ, հետագծում)։', 'experience'),

('experience.zealous.achievements.3', 'en', 'Executed manual and automated suites; analyzed results and evaluated product behavior against documentation.', 'experience'),
('experience.zealous.achievements.3', 'ru', 'Выполнял ручные и автоматизированные наборы; анализировал результаты и оценивал поведение продукта в соответствии с документацией.', 'experience'),
('experience.zealous.achievements.3', 'am', 'Իրականացրել է ձեռքով և ավտոմատացված հավաքածուներ; վերլուծել արդյունքները և գնահատել արտադրանքի վարքագիծը՝ համեմատելով փաստաթղթերի հետ։', 'experience'),

('experience.zealous.achievements.4', 'en', 'Logged defects with clear steps, logs, and traces; reported to developers and helped troubleshoot.', 'experience'),
('experience.zealous.achievements.4', 'ru', 'Регистрировал дефекты с четкими шагами, логами и трассировками; сообщал разработчикам и помогал устранять неполадки.', 'experience'),
('experience.zealous.achievements.4', 'am', 'Գրանցել է սխալները հստակ քայլերով, մատյաններով և հետագծումներով; հաղորդել է ծրագրավորողներին և օգնել խնդիրների լուծման համար։', 'experience'),

('experience.zealous.achievements.5', 'en', 'Ran post‑release/integration testing and maintained regression cycles.', 'experience'),
('experience.zealous.achievements.5', 'ru', 'Проводил пост-релизное/интеграционное тестирование и поддерживал регрессионные циклы.', 'experience'),
('experience.zealous.achievements.5', 'am', 'Իրականացրել է թողարկումից հետո/ինտեգրման թեստավորում և պահպանել ռեգրեսիոն ցիկլերը։', 'experience'),

('experience.zealous.achievements.6', 'en', 'UI: E2E + integration tests in AWS CodeBuild; dependencies via AWS CodeArtifact; smoke/regression gates.', 'experience'),
('experience.zealous.achievements.6', 'ru', 'UI: E2E + интеграционные тесты в AWS CodeBuild; зависимости через AWS CodeArtifact; smoke/regression gates.', 'experience'),
('experience.zealous.achievements.6', 'am', 'UI: E2E + ինտեգրման թեստեր AWS CodeBuild-ում; կախվածություններ AWS CodeArtifact-ի միջոցով; smoke/regression gates։', 'experience'),

('experience.zealous.achievements.7', 'en', 'API: Suites for an Enrichment Service to verify OpenSearch query enrichment; contract + functional checks in CI.', 'experience'),
('experience.zealous.achievements.7', 'ru', 'API: Наборы для Enrichment Service для проверки обогащения запросов OpenSearch; контрактные + функциональные проверки в CI.', 'experience'),
('experience.zealous.achievements.7', 'am', 'API: Հավաքածուներ Enrichment Service-ի համար՝ OpenSearch հարցումների հարստացման ստուգման համար; պայմանագրային + ֆունկցիոնալ ստուգումներ CI-ում։', 'experience'),

('experience.zealous.achievements.8', 'en', 'Reduced runtime with parallel workers, sharding, and authentication reuse (storageState); improved stability via isolation and calibrated timeouts.', 'experience'),
('experience.zealous.achievements.8', 'ru', 'Сократил время выполнения с помощью параллельных воркеров, шардинга и повторного использования аутентификации (storageState); улучшил стабильность через изоляцию и калиброванные таймауты.', 'experience'),
('experience.zealous.achievements.8', 'am', 'Կրճատել է կատարման ժամանակը զուգահեռ աշխատողների, բաժանման և նույնականացման կրկնակի օգտագործման (storageState) միջոցով; բարելավել կայունությունը մեկուսացման և կարգավորված ժամանակային սահմանների միջոցով։', 'experience'),

('experience.zealous.achievements.9', 'en', 'iOS automation with XCUITest; service virtualization with Mountebank for deterministic end‑to‑end flows.', 'experience'),
('experience.zealous.achievements.9', 'ru', 'iOS автоматизация с XCUITest; виртуализация сервисов с Mountebank для детерминированных end-to-end потоков.', 'experience'),
('experience.zealous.achievements.9', 'am', 'iOS ավտոմատացում XCUITest-ով; ծառայությունների վիրտուալացում Mountebank-ով՝ դետերմինիստական end-to-end հոսքերի համար։', 'experience')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Summary of translations added by category and language
SELECT
    category,
    language,
    COUNT(*) as translation_count
FROM public.translations
WHERE key IN (
    -- Pages category
    'pages.home', 'pages.about', 'pages.blog', 'pages.contact',
    'pages.education', 'pages.skills', 'pages.sections',
    -- Navigation
    'nav.edit',
    -- Statistics
    'statistics.title', 'statistics.subtitle', 'statistics.experienceDescription',
    'statistics.projectsDescription', 'statistics.testsDescription', 'statistics.expertiseDescription',
    -- Portfolio Navigation
    'portfolioNav.learnMore',
    -- Footer
    'footer.about', 'footer.aboutDescription', 'footer.contact', 'footer.location',
    'footer.quickLinks', 'footer.connect', 'footer.privacy', 'footer.terms',
    -- About - Basic
    'about.portraitAlt', 'about.headline', 'about.professionalJourney.content',
    'about.philosophy.content', 'about.toolbox.content',
    -- About - Key Results
    'about.keyResults.title', 'about.keyResults.1', 'about.keyResults.2', 'about.keyResults.3',
    -- About - Languages
    'about.languages.title', 'about.languages.1', 'about.languages.2', 'about.languages.3',
    -- Experience - General
    'experience.title', 'experience.keyAchievements',
    -- Experience - Zealous
    'experience.zealous.role', 'experience.zealous.company', 'experience.zealous.period', 'experience.zealous.description',
    'experience.zealous.achievements.1', 'experience.zealous.achievements.2', 'experience.zealous.achievements.3',
    'experience.zealous.achievements.4', 'experience.zealous.achievements.5', 'experience.zealous.achievements.6',
    'experience.zealous.achievements.7', 'experience.zealous.achievements.8', 'experience.zealous.achievements.9'
)
GROUP BY category, language
ORDER BY category, language;

-- Check for any missing translations (should return no rows)
WITH expected_keys AS (
    SELECT unnest(ARRAY[
        -- Pages
        'pages.home', 'pages.about', 'pages.blog', 'pages.contact',
        'pages.education', 'pages.skills', 'pages.sections',
        -- Navigation
        'nav.edit',
        -- Statistics
        'statistics.title', 'statistics.subtitle', 'statistics.experienceDescription',
        'statistics.projectsDescription', 'statistics.testsDescription', 'statistics.expertiseDescription',
        -- Portfolio Navigation
        'portfolioNav.learnMore',
        -- Footer
        'footer.about', 'footer.aboutDescription', 'footer.contact', 'footer.location',
        'footer.quickLinks', 'footer.connect', 'footer.privacy', 'footer.terms',
        -- About - Basic
        'about.portraitAlt', 'about.headline', 'about.professionalJourney.content',
        'about.philosophy.content', 'about.toolbox.content',
        -- About - Key Results
        'about.keyResults.title', 'about.keyResults.1', 'about.keyResults.2', 'about.keyResults.3',
        -- About - Languages
        'about.languages.title', 'about.languages.1', 'about.languages.2', 'about.languages.3',
        -- Experience
        'experience.title', 'experience.keyAchievements',
        'experience.zealous.role', 'experience.zealous.company', 'experience.zealous.period', 'experience.zealous.description',
        'experience.zealous.achievements.1', 'experience.zealous.achievements.2', 'experience.zealous.achievements.3',
        'experience.zealous.achievements.4', 'experience.zealous.achievements.5', 'experience.zealous.achievements.6',
        'experience.zealous.achievements.7', 'experience.zealous.achievements.8', 'experience.zealous.achievements.9'
    ]) as key
),
expected_languages AS (
    SELECT unnest(ARRAY['en', 'ru', 'am']) as language
),
expected AS (
    SELECT ek.key, el.language
    FROM expected_keys ek
    CROSS JOIN expected_languages el
)
SELECT e.key, e.language, 'MISSING' as status
FROM expected e
LEFT JOIN public.translations t ON e.key = t.key AND e.language = t.language
WHERE t.key IS NULL
ORDER BY e.key, e.language;

-- Total count verification (should be 145 translations)
-- Breakdown: 46 keys × 3 languages (138) + 8 keys × 2 languages RU/AM only (16) = 154
-- Note: about.keyResults and about.languages only add RU/AM (EN already exists)
SELECT
    'Total translations for this migration' as metric,
    COUNT(*) as count,
    CASE WHEN COUNT(*) >= 145 THEN '✓ CORRECT' ELSE '✗ ERROR' END as status
FROM public.translations
WHERE key IN (
    'pages.home', 'pages.about', 'pages.blog', 'pages.contact',
    'pages.education', 'pages.skills', 'pages.sections',
    'nav.edit',
    'statistics.title', 'statistics.subtitle', 'statistics.experienceDescription',
    'statistics.projectsDescription', 'statistics.testsDescription', 'statistics.expertiseDescription',
    'portfolioNav.learnMore',
    'footer.about', 'footer.aboutDescription', 'footer.contact', 'footer.location',
    'footer.quickLinks', 'footer.connect', 'footer.privacy', 'footer.terms',
    'about.portraitAlt', 'about.headline', 'about.professionalJourney.content',
    'about.philosophy.content', 'about.toolbox.content',
    'about.keyResults.title', 'about.keyResults.1', 'about.keyResults.2', 'about.keyResults.3',
    'about.languages.title', 'about.languages.1', 'about.languages.2', 'about.languages.3',
    'experience.title', 'experience.keyAchievements',
    'experience.zealous.role', 'experience.zealous.company', 'experience.zealous.period', 'experience.zealous.description',
    'experience.zealous.achievements.1', 'experience.zealous.achievements.2', 'experience.zealous.achievements.3',
    'experience.zealous.achievements.4', 'experience.zealous.achievements.5', 'experience.zealous.achievements.6',
    'experience.zealous.achievements.7', 'experience.zealous.achievements.8', 'experience.zealous.achievements.9'
);
