-- ============================================================================
-- Seed Translations for Portfolio Application
-- ============================================================================
-- This script seeds all translations for three languages (en, ru, am)
-- Safe to run multiple times - uses UPSERT pattern (INSERT ... ON CONFLICT)
-- 
-- Usage:
--   Run via Supabase CLI: supabase db reset
--   Or execute directly in SQL editor
-- ============================================================================

BEGIN;

-- ============================================================================
-- NAVIGATION TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('nav.about', 'en', 'About', 'nav'),
  ('nav.about', 'ru', 'О себе', 'nav'),
  ('nav.about', 'am', 'Իմ մասին', 'nav'),
  
  ('nav.work', 'en', 'Work', 'nav'),
  ('nav.work', 'ru', 'Работы', 'nav'),
  ('nav.work', 'am', 'Աշխատանքներ', 'nav'),
  
  ('nav.experience', 'en', 'Experience', 'nav'),
  ('nav.experience', 'ru', 'Опыт', 'nav'),
  ('nav.experience', 'am', 'Փորձ', 'nav'),
  
  ('nav.blog', 'en', 'Blog', 'nav'),
  ('nav.blog', 'ru', 'Блог', 'nav'),
  ('nav.blog', 'am', 'Բլոգ', 'nav'),
  
  ('nav.contact', 'en', 'Contact', 'nav'),
  ('nav.contact', 'ru', 'Контакты', 'nav'),
  ('nav.contact', 'am', 'Կապ', 'nav'),
  
  ('nav.settings', 'en', 'Settings', 'nav'),
  ('nav.settings', 'ru', 'Настройки', 'nav'),
  ('nav.settings', 'am', 'Կարգավորումներ', 'nav'),
  
  ('nav.admin', 'en', 'Admin', 'nav'),
  ('nav.admin', 'ru', 'Админ', 'nav'),
  ('nav.admin', 'am', 'Ադմին', 'nav')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- HERO SECTION TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('hero.title', 'en', 'QA Automation Specialist', 'hero'),
  ('hero.title', 'ru', 'Специалист по автоматизации QA', 'hero'),
  ('hero.title', 'am', 'QA Ավտոմատացման Մասնագետ', 'hero'),
  
  ('hero.subtitle', 'en', 'I help teams ship faster with fewer bugs. Deterministic test suites, CI/CD integration, and strategic quality automation.', 'hero'),
  ('hero.subtitle', 'ru', 'Я помогаю командам быстрее выпускать продукт с меньшим количеством ошибок. Детерминированные тестовые наборы, интеграция CI/CD и стратегическая автоматизация качества.', 'hero'),
  ('hero.subtitle', 'am', 'Ես օգնում եմ թիմերին ավելի արագ թողարկել ավելի քիչ սխալներով: Որոշ թեստային հավաքածուներ, CI/CD ինտեգրացիա և ռազմավարական որակի ավտոմատացում:', 'hero'),
  
  ('hero.downloadCV', 'en', 'Download CV', 'hero'),
  ('hero.downloadCV', 'ru', 'Скачать резюме', 'hero'),
  ('hero.downloadCV', 'am', 'Ներբեռնել CV', 'hero'),
  
  ('hero.proof1', 'en', 'Flaky rate ↓ ~70% via data isolation & timeout tuning', 'hero'),
  ('hero.proof1', 'ru', 'Уровень нестабильности ↓ ~70% благодаря изоляции данных и настройке таймаутов', 'hero'),
  ('hero.proof1', 'am', 'Անկայուն մակարդակ ↓ ~70% տվյալների մեկուսացման և timeout կարգավորման միջոցով', 'hero'),
  
  ('hero.proof2', 'en', 'Regression time ↓ ~40% through robust Playwright suites', 'hero'),
  ('hero.proof2', 'ru', 'Время регрессии ↓ ~40% благодаря надежным наборам Playwright', 'hero'),
  ('hero.proof2', 'am', 'Ռեգրեսիայի ժամանակ ↓ ~40% Playwright հուսալի հավաքածուների միջոցով', 'hero'),
  
  ('hero.proof3', 'en', 'CI time ↓ with parallel workers, sharding & storageState', 'hero'),
  ('hero.proof3', 'ru', 'Время CI ↓ с помощью параллельных работников, шардирования и storageState', 'hero'),
  ('hero.proof3', 'am', 'CI ժամանակ ↓ զուգահեռ աշխատողների, sharding-ի և storageState-ի միջոցով', 'hero')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- COMMON TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('language', 'en', 'Language', 'common'),
  ('language', 'ru', 'Язык', 'common'),
  ('language', 'am', 'Լեզու', 'common'),
  
  ('theme', 'en', 'Theme', 'common'),
  ('theme', 'ru', 'Тема', 'common'),
  ('theme', 'am', 'Թեման', 'common'),
  
  ('loading', 'en', 'Loading...', 'common'),
  ('loading', 'ru', 'Загрузка...', 'common'),
  ('loading', 'am', 'Բեռնվում է...', 'common'),
  
  ('error', 'en', 'Error', 'common'),
  ('error', 'ru', 'Ошибка', 'common'),
  ('error', 'am', 'Սխալ', 'common'),
  
  ('success', 'en', 'Success', 'common'),
  ('success', 'ru', 'Успех', 'common'),
  ('success', 'am', 'Հաջողություն', 'common'),
  
  ('save', 'en', 'Save', 'common'),
  ('save', 'ru', 'Сохранить', 'common'),
  ('save', 'am', 'Պահպանել', 'common'),
  
  ('cancel', 'en', 'Cancel', 'common'),
  ('cancel', 'ru', 'Отмена', 'common'),
  ('cancel', 'am', 'Չեղարկել', 'common'),
  
  ('delete', 'en', 'Delete', 'common'),
  ('delete', 'ru', 'Удалить', 'common'),
  ('delete', 'am', 'Ջնջել', 'common'),
  
  ('edit', 'en', 'Edit', 'common'),
  ('edit', 'ru', 'Редактировать', 'common'),
  ('edit', 'am', 'Խմբագրել', 'common'),
  
  ('add', 'en', 'Add', 'common'),
  ('add', 'ru', 'Добавить', 'common'),
  ('add', 'am', 'Ավելացնել', 'common'),
  
  ('close', 'en', 'Close', 'common'),
  ('close', 'ru', 'Закрыть', 'common'),
  ('close', 'am', 'Փակել', 'common'),
  
  ('viewAll', 'en', 'View all', 'common'),
  ('viewAll', 'ru', 'Посмотреть все', 'common'),
  ('viewAll', 'am', 'Տեսնել բոլորը', 'common'),
  
  ('proficiency', 'en', 'Proficiency', 'common'),
  ('proficiency', 'ru', 'Уровень владения', 'common'),
  ('proficiency', 'am', 'Տիրապետման մակարդակ', 'common')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- LANGUAGE NAMES
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('language.en', 'en', 'English', 'language'),
  ('language.en', 'ru', 'Английский', 'language'),
  ('language.en', 'am', 'Անգլերեն', 'language'),
  
  ('language.ru', 'en', 'Russian', 'language'),
  ('language.ru', 'ru', 'Русский', 'language'),
  ('language.ru', 'am', 'Ռուսերեն', 'language'),
  
  ('language.am', 'en', 'Armenian', 'language'),
  ('language.am', 'ru', 'Армянский', 'language'),
  ('language.am', 'am', 'Հայերեն', 'language')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- PAGE TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('pages.home.title', 'en', 'Home', 'pages'),
  ('pages.home.title', 'ru', 'Главная', 'pages'),
  ('pages.home.title', 'am', 'Գլխավոր', 'pages'),
  
  ('pages.home.featuredProjects', 'en', 'Featured Projects', 'pages'),
  ('pages.home.featuredProjects', 'ru', 'Рекомендуемые проекты', 'pages'),
  ('pages.home.featuredProjects', 'am', 'Առաջարկվող նախագծեր', 'pages'),
  
  ('pages.home.latestArticles', 'en', 'Latest Articles', 'pages'),
  ('pages.home.latestArticles', 'ru', 'Последние статьи', 'pages'),
  ('pages.home.latestArticles', 'am', 'Վերջին հոդվածներ', 'pages'),
  
  ('pages.about.title', 'en', 'About Me', 'pages'),
  ('pages.about.title', 'ru', 'О себе', 'pages'),
  ('pages.about.title', 'am', 'Իմ մասին', 'pages'),
  
  ('pages.about.subtitle', 'en', 'QA Automation Specialist | Deterministic Testing | CI/CD Integration', 'pages'),
  ('pages.about.subtitle', 'ru', 'Специалист по автоматизации QA | Детерминированное тестирование | Интеграция CI/CD', 'pages'),
  ('pages.about.subtitle', 'am', 'QA Ավտոմատացման Մասնագետ | Որոշ թեստավորում | CI/CD ինտեգրացիա', 'pages'),
  
  ('pages.about.philosophy', 'en', 'I build reliable test automation that engineers trust. My approach: isolate data, make flows deterministic, minimize flakiness, and surface useful failure signals.', 'pages'),
  ('pages.about.philosophy', 'ru', 'Я создаю надежную автоматизацию тестирования, которой доверяют инженеры. Мой подход: изолировать данные, делать потоки детерминированными, минимизировать нестабильность и выявлять полезные сигналы об ошибках.', 'pages'),
  ('pages.about.philosophy', 'am', 'Ես կառուցում եմ հուսալի թեստավորման ավտոմատացում, որին վստահում են ինժեներները: Իմ մոտեցումը՝ մեկուսացնել տվյալները, որոշ հոսքեր անել, նվազագույն անկայունություն և օգտակար ձախողման ազդանշաններ:', 'pages'),
  
  ('pages.work.title', 'en', 'My Work', 'pages'),
  ('pages.work.title', 'ru', 'Мои работы', 'pages'),
  ('pages.work.title', 'am', 'Իմ աշխատանքները', 'pages'),
  
  ('pages.work.subtitle', 'en', 'A showcase of test automation frameworks and quality assurance projects', 'pages'),
  ('pages.work.subtitle', 'ru', 'Витрина фреймворков автоматизации тестирования и проектов обеспечения качества', 'pages'),
  ('pages.work.subtitle', 'am', 'Թեստավորման ավտոմատացման շրջանակների և որակի ապահովման նախագծերի ցուցադրություն', 'pages'),
  
  ('pages.blog.title', 'en', 'Blog', 'pages'),
  ('pages.blog.title', 'ru', 'Блог', 'pages'),
  ('pages.blog.title', 'am', 'Բլոգ', 'pages'),
  
  ('pages.blog.subtitle', 'en', 'Insights and thoughts on software testing and quality assurance', 'pages'),
  ('pages.blog.subtitle', 'ru', 'Идеи и мысли о тестировании программного обеспечения и обеспечении качества', 'pages'),
  ('pages.blog.subtitle', 'am', 'Պատկերացումներ և մտքեր ծրագրային ապահովման թեստավորման և որակի ապահովման մասին', 'pages'),
  
  ('pages.contact.title', 'en', 'Contact Me', 'pages'),
  ('pages.contact.title', 'ru', 'Связаться со мной', 'pages'),
  ('pages.contact.title', 'am', 'Կապ հաստատել ինձ հետ', 'pages'),
  
  ('pages.contact.subtitle', 'en', 'Let''s discuss how I can help ensure the quality of your software', 'pages'),
  ('pages.contact.subtitle', 'ru', 'Давайте обсудим, как я могу помочь обеспечить качество вашего программного обеспечения', 'pages'),
  ('pages.contact.subtitle', 'am', 'Եկեք քննարկենք, թե ինչպես կարող եմ օգնել ապահովել ձեր ծրագրային ապահովման որակը', 'pages')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- BLOG TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('blog.unavailableTitle', 'en', 'Section Unavailable', 'blog'),
  ('blog.unavailableTitle', 'ru', 'Раздел недоступен', 'blog'),
  ('blog.unavailableTitle', 'am', 'Բաժինը անհասանելի է', 'blog'),
  
  ('blog.unavailableBody', 'en', 'This section is currently unavailable.', 'blog'),
  ('blog.unavailableBody', 'ru', 'Этот раздел в настоящее время недоступен.', 'blog'),
  ('blog.unavailableBody', 'am', 'Այս բաժինը ներկայումս անհասանելի է:', 'blog'),
  
  ('blog.empty', 'en', 'No blog posts available yet.', 'blog'),
  ('blog.empty', 'ru', 'Пока нет доступных постов в блоге.', 'blog'),
  ('blog.empty', 'am', 'Դեռևս բլոգի գրառումներ չկան:', 'blog'),
  
  ('blog.readMore', 'en', 'Read More', 'blog'),
  ('blog.readMore', 'ru', 'Читать далее', 'blog'),
  ('blog.readMore', 'am', 'Կարդալ ավելին', 'blog'),
  
  ('blog.back', 'en', 'Back to Blog', 'blog'),
  ('blog.back', 'ru', 'Вернуться к блогу', 'blog'),
  ('blog.back', 'am', 'Վերադառնալ բլոգ', 'blog'),
  
  ('blog.notFound.title', 'en', 'Blog Post Not Found', 'blog'),
  ('blog.notFound.title', 'ru', 'Пост блога не найден', 'blog'),
  ('blog.notFound.title', 'am', 'Բլոգի գրառումը չի գտնվել', 'blog'),
  
  ('blog.notFound.description', 'en', 'The blog post you''re looking for doesn''t exist or has been removed.', 'blog'),
  ('blog.notFound.description', 'ru', 'Пост блога, который вы ищете, не существует или был удален.', 'blog'),
  ('blog.notFound.description', 'am', 'Ձեր փնտրած բլոգի գրառումը գոյություն չունի կամ հեռացվել է:', 'blog'),
  
  ('blog.error.title', 'en', 'Failed to Load Blog Post', 'blog'),
  ('blog.error.title', 'ru', 'Не удалось загрузить пост блога', 'blog'),
  ('blog.error.title', 'am', 'Չհաջողվեց բեռնել բլոգի գրառումը', 'blog'),
  
  ('blog.error.description', 'en', 'We encountered an error while loading this post.', 'blog'),
  ('blog.error.description', 'ru', 'Мы столкнулись с ошибкой при загрузке этого поста.', 'blog'),
  ('blog.error.description', 'am', 'Մենք բախվեցինք սխալի այս գրառումը բեռնելիս:', 'blog'),
  
  ('blog.error.retry', 'en', 'Try Again', 'blog'),
  ('blog.error.retry', 'ru', 'Попробовать снова', 'blog'),
  ('blog.error.retry', 'am', 'Փորձել կրկին', 'blog'),
  
  ('blog.error.retrying', 'en', 'Retrying...', 'blog'),
  ('blog.error.retrying', 'ru', 'Повторная попытка...', 'blog'),
  ('blog.error.retrying', 'am', 'Կրկին փորձում...', 'blog'),
  
  ('blog.noContent', 'en', 'No content available for this post.', 'blog'),
  ('blog.noContent', 'ru', 'Нет доступного контента для этого поста.', 'blog'),
  ('blog.noContent', 'am', 'Այս գրառման համար բովանդակություն չկա:', 'blog'),
  
  ('blog.publishedOn', 'en', 'Published on', 'blog'),
  ('blog.publishedOn', 'ru', 'Опубликовано', 'blog'),
  ('blog.publishedOn', 'am', 'Հրապարակված է', 'blog'),
  
  ('blog.related.title', 'en', 'Related Articles', 'blog'),
  ('blog.related.title', 'ru', 'Связанные статьи', 'blog'),
  ('blog.related.title', 'am', 'Կապված հոդվածներ', 'blog'),
  
  ('blog.related.subtitle', 'en', 'Continue exploring more articles', 'blog'),
  ('blog.related.subtitle', 'ru', 'Продолжайте изучать больше статей', 'blog'),
  ('blog.related.subtitle', 'am', 'Շարունակեք ուսումնասիրել ավելի շատ հոդվածներ', 'blog')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- PORTFOLIO NAVIGATION TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('portfolioNav.title', 'en', 'Explore My Portfolio', 'portfolioNav'),
  ('portfolioNav.title', 'ru', 'Исследуйте мое портфолио', 'portfolioNav'),
  ('portfolioNav.title', 'am', 'Ուսումնասիրեք իմ պորտֆոլիոն', 'portfolioNav'),
  
  ('portfolioNav.subtitle', 'en', 'Navigate through different sections to learn about my experience, projects, and insights', 'portfolioNav'),
  ('portfolioNav.subtitle', 'ru', 'Перемещайтесь по различным разделам, чтобы узнать о моем опыте, проектах и идеях', 'portfolioNav'),
  ('portfolioNav.subtitle', 'am', 'Նավարկեք տարբեր բաժինների միջով՝ իմանալու իմ փորձի, նախագծերի և պատկերացումների մասին', 'portfolioNav'),
  
  ('portfolioNav.aboutTitle', 'en', 'About Me', 'portfolioNav'),
  ('portfolioNav.aboutTitle', 'ru', 'О себе', 'portfolioNav'),
  ('portfolioNav.aboutTitle', 'am', 'Իմ մասին', 'portfolioNav'),
  
  ('portfolioNav.aboutDesc', 'en', 'Learn about my background, experience, and the skills I''ve developed as a QA automation specialist.', 'portfolioNav'),
  ('portfolioNav.aboutDesc', 'ru', 'Узнайте о моем опыте, образовании и навыках, которые я развил как специалист по автоматизации QA.', 'portfolioNav'),
  ('portfolioNav.aboutDesc', 'am', 'Իմացեք իմ ֆոնի, փորձի և հմտությունների մասին, որոնք ես զարգացրել եմ որպես QA ավտոմատացման մասնագետ:', 'portfolioNav'),
  
  ('portfolioNav.workTitle', 'en', 'My Work', 'portfolioNav'),
  ('portfolioNav.workTitle', 'ru', 'Мои работы', 'portfolioNav'),
  ('portfolioNav.workTitle', 'am', 'Իմ աշխատանքները', 'portfolioNav'),
  
  ('portfolioNav.workDesc', 'en', 'Explore my portfolio of test automation frameworks, quality assurance projects, and technical expertise.', 'portfolioNav'),
  ('portfolioNav.workDesc', 'ru', 'Исследуйте мое портфолио фреймворков автоматизации тестирования, проектов обеспечения качества и технической экспертизы.', 'portfolioNav'),
  ('portfolioNav.workDesc', 'am', 'Ուսումնասիրեք իմ թեստավորման ավտոմատացման շրջանակների, որակի ապահովման նախագծերի և տեխնիկական փորձի պորտֆոլիոն:', 'portfolioNav'),
  
  ('portfolioNav.blogTitle', 'en', 'Blog', 'portfolioNav'),
  ('portfolioNav.blogTitle', 'ru', 'Блог', 'portfolioNav'),
  ('portfolioNav.blogTitle', 'am', 'Բլոգ', 'portfolioNav'),
  
  ('portfolioNav.blogDesc', 'en', 'Read my latest articles and insights on software testing, automation, and quality assurance practices.', 'portfolioNav'),
  ('portfolioNav.blogDesc', 'ru', 'Читайте мои последние статьи и идеи о тестировании программного обеспечения, автоматизации и практиках обеспечения качества.', 'portfolioNav'),
  ('portfolioNav.blogDesc', 'am', 'Կարդացեք իմ վերջին հոդվածներն ու պատկերացումները ծրագրային ապահովման թեստավորման, ավտոմատացման և որակի ապահովման պրակտիկաների մասին:', 'portfolioNav'),
  
  ('portfolioNav.contactTitle', 'en', 'Get in Touch', 'portfolioNav'),
  ('portfolioNav.contactTitle', 'ru', 'Связаться', 'portfolioNav'),
  ('portfolioNav.contactTitle', 'am', 'Կապ հաստատել', 'portfolioNav'),
  
  ('portfolioNav.contactDesc', 'en', 'Have a question or project in mind? Let''s connect and discuss how I can help you.', 'portfolioNav'),
  ('portfolioNav.contactDesc', 'ru', 'Есть вопрос или проект в голове? Давайте свяжемся и обсудим, как я могу вам помочь.', 'portfolioNav'),
  ('portfolioNav.contactDesc', 'am', 'Հարց կամ նախագիծ ունե՞ք մտքում: Եկեք կապվենք և քննարկենք, թե ինչպես կարող եմ օգնել ձեզ:', 'portfolioNav')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- STATISTICS TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('statistics.experience', 'en', 'Years of Experience', 'statistics'),
  ('statistics.experience', 'ru', 'Лет опыта', 'statistics'),
  ('statistics.experience', 'am', 'Տարիների փորձ', 'statistics'),
  
  ('statistics.projects', 'en', 'Projects Delivered', 'statistics'),
  ('statistics.projects', 'ru', 'Проектов доставлено', 'statistics'),
  ('statistics.projects', 'am', 'Կատարված նախագծեր', 'statistics'),
  
  ('statistics.tests', 'en', 'Core Stacks', 'statistics'),
  ('statistics.tests', 'ru', 'Основные стеки', 'statistics'),
  ('statistics.tests', 'am', 'Հիմնական ստեքեր', 'statistics'),
  
  ('statistics.expertise', 'en', 'Impact Domains', 'statistics'),
  ('statistics.expertise', 'ru', 'Области воздействия', 'statistics'),
  ('statistics.expertise', 'am', 'Ազդեցության ոլորտներ', 'statistics'),
  
  ('statistics.areas', 'en', 'UI & API Automation, CI/CD Pipeline Integration, Deterministic Test Architecture', 'statistics'),
  ('statistics.areas', 'ru', 'UI и API автоматизация, интеграция CI/CD конвейера, детерминированная архитектура тестирования', 'statistics'),
  ('statistics.areas', 'am', 'UI և API ավտոմատացում, CI/CD խողովակի ինտեգրում, դետերմինացված թեստավորման ճարտարապետություն', 'statistics')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- ABOUT SECTION TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('about.professionalJourney', 'en', 'Professional Journey', 'about'),
  ('about.professionalJourney', 'ru', 'Профессиональный путь', 'about'),
  ('about.professionalJourney', 'am', 'Մասնագիտական ուղի', 'about'),
  
  ('about.philosophy', 'en', 'Philosophy', 'about'),
  ('about.philosophy', 'ru', 'Философия', 'about'),
  ('about.philosophy', 'am', 'Փիլիսոփայություն', 'about'),
  
  ('about.toolbox', 'en', 'Toolbox', 'about'),
  ('about.toolbox', 'ru', 'Набор инструментов', 'about'),
  ('about.toolbox', 'am', 'Գործիքների հավաքածու', 'about'),
  
  ('about.experience.title', 'en', 'Experience', 'about'),
  ('about.experience.title', 'ru', 'Опыт', 'about'),
  ('about.experience.title', 'am', 'Փորձ', 'about'),
  
  ('about.experience.subtitle', 'en', 'A journey through my professional career in software quality assurance', 'about'),
  ('about.experience.subtitle', 'ru', 'Путешествие по моей профессиональной карьере в обеспечении качества программного обеспечения', 'about'),
  ('about.experience.subtitle', 'am', 'Ճանապարհորդություն իմ մասնագիտական կարիերայով ծրագրային ապահովման որակի ապահովման մեջ', 'about'),
  
  ('about.education.title', 'en', 'Education', 'about'),
  ('about.education.title', 'ru', 'Образование', 'about'),
  ('about.education.title', 'am', 'Կրթություն', 'about'),
  
  ('about.education.subtitle', 'en', 'Academic background and continuous learning', 'about'),
  ('about.education.subtitle', 'ru', 'Академическое образование и непрерывное обучение', 'about'),
  ('about.education.subtitle', 'am', 'Ակադեմիական ֆոն և շարունակական ուսուցում', 'about'),
  
  ('about.skills.title', 'en', 'Skills & Expertise', 'about'),
  ('about.skills.title', 'ru', 'Навыки и экспертиза', 'about'),
  ('about.skills.title', 'am', 'Հմտություններ և փորձառություն', 'about'),
  
  ('about.skills.subtitle', 'en', 'Advanced proficiencies across test automation, CI/CD, and quality engineering', 'about'),
  ('about.skills.subtitle', 'ru', 'Продвинутые навыки в автоматизации тестирования, CI/CD и инженерии качества', 'about'),
  ('about.skills.subtitle', 'am', 'Առաջադեմ հմտություններ թեստավորման ավտոմատացման, CI/CD և որակի ինժեներիայի մեջ', 'about')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- SKILLS TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('skills.testAutomation', 'en', 'Test Automation', 'skills'),
  ('skills.testAutomation', 'ru', 'Автоматизация тестирования', 'skills'),
  ('skills.testAutomation', 'am', 'Թեստավորման ավտոմատացում', 'skills'),
  
  ('skills.manualTesting', 'en', 'Manual & Exploratory Testing', 'skills'),
  ('skills.manualTesting', 'ru', 'Ручное и исследовательское тестирование', 'skills'),
  ('skills.manualTesting', 'am', 'Ձեռքով և հետազոտական թեստավորում', 'skills'),
  
  ('skills.apiTesting', 'en', 'API Testing', 'skills'),
  ('skills.apiTesting', 'ru', 'Тестирование API', 'skills'),
  ('skills.apiTesting', 'am', 'API թեստավորում', 'skills'),
  
  ('skills.cicdDevops', 'en', 'CI/CD & DevOps', 'skills'),
  ('skills.cicdDevops', 'ru', 'CI/CD и DevOps', 'skills'),
  ('skills.cicdDevops', 'am', 'CI/CD և DevOps', 'skills'),
  
  ('skills.versionControl', 'en', 'Version Control', 'skills'),
  ('skills.versionControl', 'ru', 'Контроль версий', 'skills'),
  ('skills.versionControl', 'am', 'Տարբերակների վերահսկում', 'skills'),
  
  ('skills.crossBrowser', 'en', 'Cross-browser & Web', 'skills'),
  ('skills.crossBrowser', 'ru', 'Кросс-браузерное и веб-тестирование', 'skills'),
  ('skills.crossBrowser', 'am', 'Խաչաձև բրաուզեր և վեբ', 'skills'),
  
  ('skills.mobileAutomation', 'en', 'Mobile Automation', 'skills'),
  ('skills.mobileAutomation', 'ru', 'Мобильная автоматизация', 'skills'),
  ('skills.mobileAutomation', 'am', 'Բջջային ավտոմատացում', 'skills'),
  
  ('skills.testManagement', 'en', 'Test Management & Agile', 'skills'),
  ('skills.testManagement', 'ru', 'Управление тестированием и Agile', 'skills'),
  ('skills.testManagement', 'am', 'Թեստավորման կառավարում և Agile', 'skills'),
  
  ('skills.sqlData', 'en', 'SQL & Data', 'skills'),
  ('skills.sqlData', 'ru', 'SQL и данные', 'skills'),
  ('skills.sqlData', 'am', 'SQL և տվյալներ', 'skills'),
  
  ('skills.advanced', 'en', 'Advanced', 'skills'),
  ('skills.advanced', 'ru', 'Продвинутый', 'skills'),
  ('skills.advanced', 'am', 'Առաջադեմ', 'skills'),
  
  ('skills.intermediate', 'en', 'Intermediate', 'skills'),
  ('skills.intermediate', 'ru', 'Средний', 'skills'),
  ('skills.intermediate', 'am', 'Միջին', 'skills'),
  
  ('skills.familiar', 'en', 'Familiar', 'skills'),
  ('skills.familiar', 'ru', 'Знаком', 'skills'),
  ('skills.familiar', 'am', 'Ծանոթ', 'skills')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- CONTACT TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('contact.getInTouch', 'en', 'Get in Touch', 'contact'),
  ('contact.getInTouch', 'ru', 'Связаться', 'contact'),
  ('contact.getInTouch', 'am', 'Կապ հաստատել', 'contact'),
  
  ('contact.name', 'en', 'Name', 'contact'),
  ('contact.name', 'ru', 'Имя', 'contact'),
  ('contact.name', 'am', 'Անուն', 'contact'),
  
  ('contact.email', 'en', 'Email', 'contact'),
  ('contact.email', 'ru', 'Электронная почта', 'contact'),
  ('contact.email', 'am', 'Էլ. փոստ', 'contact'),
  
  ('contact.message', 'en', 'Message', 'contact'),
  ('contact.message', 'ru', 'Сообщение', 'contact'),
  ('contact.message', 'am', 'Հաղորդագրություն', 'contact'),
  
  ('contact.sendMessage', 'en', 'Send Message', 'contact'),
  ('contact.sendMessage', 'ru', 'Отправить сообщение', 'contact'),
  ('contact.sendMessage', 'am', 'Ուղարկել հաղորդագրություն', 'contact'),
  
  ('contact.sending', 'en', 'Sending...', 'contact'),
  ('contact.sending', 'ru', 'Отправка...', 'contact'),
  ('contact.sending', 'am', 'Ուղարկում...', 'contact'),
  
  ('contact.successMessage', 'en', 'Thank you! Your message has been sent successfully. I''ll get back to you soon.', 'contact'),
  ('contact.successMessage', 'ru', 'Спасибо! Ваше сообщение было успешно отправлено. Я свяжусь с вами в ближайшее время.', 'contact'),
  ('contact.successMessage', 'am', 'Շնորհակալություն! Ձեր հաղորդագրությունը հաջողությամբ ուղարկվել է: Ես շուտով կկապվեմ ձեզ հետ:', 'contact'),
  
  ('contact.errorMessage', 'en', 'Oops! Something went wrong. Please try again later.', 'contact'),
  ('contact.errorMessage', 'ru', 'Упс! Что-то пошло не так. Пожалуйста, попробуйте позже.', 'contact'),
  ('contact.errorMessage', 'am', 'Վայ! Ինչ-որ բան սխալ է եղել: Խնդրում ենք փորձել ավելի ուշ:', 'contact'),
  
  ('contact.validationError', 'en', 'Please check the form for errors and try again.', 'contact'),
  ('contact.validationError', 'ru', 'Пожалуйста, проверьте форму на наличие ошибок и попробуйте снова.', 'contact'),
  ('contact.validationError', 'am', 'Խնդրում ենք ստուգել ձևը սխալների համար և կրկին փորձել:', 'contact'),
  
  ('contact.phone', 'en', 'Phone', 'contact'),
  ('contact.phone', 'ru', 'Телефон', 'contact'),
  ('contact.phone', 'am', 'Հեռախոս', 'contact'),
  
  ('contact.location', 'en', 'Location', 'contact'),
  ('contact.location', 'ru', 'Местоположение', 'contact'),
  ('contact.location', 'am', 'Տեղադրություն', 'contact')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- FOOTER TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('footer.copyright', 'en', '© 2024 Gor Papyan. All rights reserved.', 'footer'),
  ('footer.copyright', 'ru', '© 2024 Гор Папян. Все права защищены.', 'footer'),
  ('footer.copyright', 'am', '© 2024 Գոր Պապյան: Բոլոր իրավունքները պաշտպանված են:', 'footer'),
  
  ('footer.builtWith', 'en', 'Built with React & Vite', 'footer'),
  ('footer.builtWith', 'ru', 'Создано с помощью React и Vite', 'footer'),
  ('footer.builtWith', 'am', 'Կառուցված է React-ով և Vite-ով', 'footer')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- SETTINGS TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('settings.title', 'en', 'Settings', 'settings'),
  ('settings.title', 'ru', 'Настройки', 'settings'),
  ('settings.title', 'am', 'Կարգավորումներ', 'settings'),
  
  ('settings.translations', 'en', 'Translation Management', 'settings'),
  ('settings.translations', 'ru', 'Управление переводами', 'settings'),
  ('settings.translations', 'am', 'Թարգմանությունների կառավարում', 'settings'),
  
  ('settings.selectLanguage', 'en', 'Select Language to Edit', 'settings'),
  ('settings.selectLanguage', 'ru', 'Выберите язык для редактирования', 'settings'),
  ('settings.selectLanguage', 'am', 'Ընտրեք լեզուն խմբագրման համար', 'settings'),
  
  ('settings.addTranslation', 'en', 'Add Translation', 'settings'),
  ('settings.addTranslation', 'ru', 'Добавить перевод', 'settings'),
  ('settings.addTranslation', 'am', 'Ավելացնել թարգմանություն', 'settings'),
  
  ('settings.editTranslation', 'en', 'Edit Translation', 'settings'),
  ('settings.editTranslation', 'ru', 'Редактировать перевод', 'settings'),
  ('settings.editTranslation', 'am', 'Խմբագրել թարգմանությունը', 'settings'),
  
  ('settings.deleteTranslation', 'en', 'Delete Translation', 'settings'),
  ('settings.deleteTranslation', 'ru', 'Удалить перевод', 'settings'),
  ('settings.deleteTranslation', 'am', 'Ջնջել թարգմանությունը', 'settings'),
  
  ('settings.searchPlaceholder', 'en', 'Search translations...', 'settings'),
  ('settings.searchPlaceholder', 'ru', 'Поиск переводов...', 'settings'),
  ('settings.searchPlaceholder', 'am', 'Փնտրել թարգմանություններ...', 'settings'),
  
  ('settings.filterByCategory', 'en', 'Filter by Category', 'settings'),
  ('settings.filterByCategory', 'ru', 'Фильтр по категории', 'settings'),
  ('settings.filterByCategory', 'am', 'Զտել ըստ կատեգորիայի', 'settings'),
  
  ('settings.allCategories', 'en', 'All Categories', 'settings'),
  ('settings.allCategories', 'ru', 'Все категории', 'settings'),
  ('settings.allCategories', 'am', 'Բոլոր կատեգորիաները', 'settings'),
  
  ('settings.importExport', 'en', 'Import / Export', 'settings'),
  ('settings.importExport', 'ru', 'Импорт / Экспорт', 'settings'),
  ('settings.importExport', 'am', 'Ներմուծում / Արտահանում', 'settings'),
  
  ('settings.exportTranslations', 'en', 'Export Translations', 'settings'),
  ('settings.exportTranslations', 'ru', 'Экспортировать переводы', 'settings'),
  ('settings.exportTranslations', 'am', 'Արտահանել թարգմանություններ', 'settings'),
  
  ('settings.importTranslations', 'en', 'Import Translations', 'settings'),
  ('settings.importTranslations', 'ru', 'Импортировать переводы', 'settings'),
  ('settings.importTranslations', 'am', 'Ներմուծել թարգմանություններ', 'settings'),
  
  ('settings.downloadTemplate', 'en', 'Download Template', 'settings'),
  ('settings.downloadTemplate', 'ru', 'Скачать шаблон', 'settings'),
  ('settings.downloadTemplate', 'am', 'Ներբեռնել ձևանմուշ', 'settings'),
  
  ('settings.validation', 'en', 'Validation', 'settings'),
  ('settings.validation', 'ru', 'Валидация', 'settings'),
  ('settings.validation', 'am', 'Վավերացում', 'settings'),
  
  ('settings.missingTranslations', 'en', 'Missing Translations', 'settings'),
  ('settings.missingTranslations', 'ru', 'Отсутствующие переводы', 'settings'),
  ('settings.missingTranslations', 'am', 'Բացակայող թարգմանություններ', 'settings'),
  
  ('settings.emptyValues', 'en', 'Empty Values', 'settings'),
  ('settings.emptyValues', 'ru', 'Пустые значения', 'settings'),
  ('settings.emptyValues', 'am', 'Դատարկ արժեքներ', 'settings'),
  
  ('settings.key', 'en', 'Key', 'settings'),
  ('settings.key', 'ru', 'Ключ', 'settings'),
  ('settings.key', 'am', 'Բանալի', 'settings'),
  
  ('settings.value', 'en', 'Value', 'settings'),
  ('settings.value', 'ru', 'Значение', 'settings'),
  ('settings.value', 'am', 'Արժեք', 'settings'),
  
  ('settings.deleteError', 'en', 'Failed to delete translation', 'settings'),
  ('settings.deleteError', 'ru', 'Не удалось удалить перевод', 'settings'),
  ('settings.deleteError', 'am', 'Չհաջողվեց ջնջել թարգմանությունը', 'settings'),
  
  ('settings.saveError', 'en', 'Failed to save translation', 'settings'),
  ('settings.saveError', 'ru', 'Не удалось сохранить перевод', 'settings'),
  ('settings.saveError', 'am', 'Չհաջողվեց պահպանել թարգմանությունը', 'settings'),
  
  ('settings.importError', 'en', 'Failed to import translations', 'settings'),
  ('settings.importError', 'ru', 'Не удалось импортировать переводы', 'settings'),
  ('settings.importError', 'am', 'Չհաջողվեց ներմուծել թարգմանություններ', 'settings')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- TECHNOLOGIES TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('technologies.title', 'en', 'Technologies & Tools', 'technologies'),
  ('technologies.title', 'ru', 'Технологии и инструменты', 'technologies'),
  ('technologies.title', 'am', 'Տեխնոլոգիաներ և գործիքներ', 'technologies'),
  
  ('technologies.subtitle', 'en', 'Leveraging modern tools and technologies to ensure software quality', 'technologies'),
  ('technologies.subtitle', 'ru', 'Использование современных инструментов и технологий для обеспечения качества программного обеспечения', 'technologies'),
  ('technologies.subtitle', 'am', 'Ժամանակակից գործիքների և տեխնոլոգիաների օգտագործում՝ ծրագրային ապահովման որակն ապահովելու համար', 'technologies'),
  
  ('technologies.testing', 'en', 'Testing Frameworks', 'technologies'),
  ('technologies.testing', 'ru', 'Фреймворки тестирования', 'technologies'),
  ('technologies.testing', 'am', 'Թեստավորման շրջանակներ', 'technologies'),
  
  ('technologies.cicd', 'en', 'CI/CD Tools', 'technologies'),
  ('technologies.cicd', 'ru', 'Инструменты CI/CD', 'technologies'),
  ('technologies.cicd', 'am', 'CI/CD գործիքներ', 'technologies'),
  
  ('technologies.versionControl', 'en', 'Version Control', 'technologies'),
  ('technologies.versionControl', 'ru', 'Контроль версий', 'technologies'),
  ('technologies.versionControl', 'am', 'Տարբերակների վերահսկում', 'technologies'),
  
  ('technologies.projectManagement', 'en', 'Project Management', 'technologies'),
  ('technologies.projectManagement', 'ru', 'Управление проектами', 'technologies'),
  ('technologies.projectManagement', 'am', 'Նախագծի կառավարում', 'technologies')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- PROJECT TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('projects.liveDemo', 'en', 'Live Demo', 'projects'),
  ('projects.liveDemo', 'ru', 'Демо', 'projects'),
  ('projects.liveDemo', 'am', 'Կենդանի դեմո', 'projects'),
  
  ('projects.sourceCode', 'en', 'Source Code', 'projects'),
  ('projects.sourceCode', 'ru', 'Исходный код', 'projects'),
  ('projects.sourceCode', 'am', 'Սկզբնական կոդ', 'projects'),
  
  ('projects.none', 'en', 'No projects available at the moment.', 'projects'),
  ('projects.none', 'ru', 'На данный момент проектов нет.', 'projects'),
  ('projects.none', 'am', 'Այս պահին նախագծեր չկան:', 'projects')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ============================================================================
-- ERROR TRANSLATIONS
-- ============================================================================
INSERT INTO translations (key, language, value, category) VALUES
  ('errors.projectsLoadFailed', 'en', 'Failed to load projects', 'errors'),
  ('errors.projectsLoadFailed', 'ru', 'Не удалось загрузить проекты', 'errors'),
  ('errors.projectsLoadFailed', 'am', 'Չհաջողվեց բեռնել նախագծերը', 'errors'),
  
  ('errors.blogLoadFailed', 'en', 'Failed to load blog posts', 'errors'),
  ('errors.blogLoadFailed', 'ru', 'Не удалось загрузить посты блога', 'errors'),
  ('errors.blogLoadFailed', 'am', 'Չհաջողվեց բեռնել բլոգի գրառումները', 'errors')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

COMMIT;

-- ============================================================================
-- VERIFICATION QUERY
-- ============================================================================
-- Run this to verify the seeding was successful:
-- SELECT 
--   category, 
--   COUNT(*) as total_translations,
--   COUNT(DISTINCT key) as unique_keys,
--   COUNT(DISTINCT language) as languages
-- FROM translations
-- GROUP BY category
-- ORDER BY category;
