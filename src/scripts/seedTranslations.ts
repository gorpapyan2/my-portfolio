import { createClient } from '@supabase/supabase-js';
import { translations as staticTranslations } from '../translations';
import { supabaseConfig } from '../lib/config';

export interface TranslationSeed {
  key: string;
  language: 'en' | 'ru' | 'am';
  value: string;
  category: string;
}

export async function seedTranslations(): Promise<void> {
  try {
    console.log('Starting translation seeding...');
    
    const translationsToSeed: TranslationSeed[] = [];
    // Use service role key for seeding (bypasses RLS) or fall back to anon key
    const serviceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || supabaseConfig.anonKey;
    const sb = createClient(supabaseConfig.url, serviceRoleKey);
    
    // Convert static translations to Supabase format
    Object.entries(staticTranslations).forEach(([language, langTranslations]) => {
      Object.entries(langTranslations).forEach(([key, value]) => {
        const category = key.split('.')[0] || 'common';
        translationsToSeed.push({
          key,
          language: language as 'en' | 'ru' | 'am',
          value,
          category
        });
      });
    });

    // Minimal additional keys required by DB-only refactor (seed if missing)
    const minimalKeys: (Omit<TranslationSeed, 'language' | 'value'> & { values: Record<'en'|'ru'|'am', string> })[] = [
      { key: 'language.en', category: 'language', values: { en: 'English', ru: 'Английский', am: 'Անգլերեն' } },
      { key: 'language.ru', category: 'language', values: { en: 'Russian', ru: 'Русский', am: 'Ռուսերեն' } },
      { key: 'language.am', category: 'language', values: { en: 'Armenian', ru: 'Армянский', am: 'Հայերեն' } },
      { key: 'nav.admin', category: 'nav', values: { en: 'Admin', ru: 'Админ', am: 'Ադմին' } },
      { key: 'nav.edit', category: 'nav', values: { en: 'Edit', ru: 'Редактировать', am: 'Խմբագրել' } },
      { key: 'nav.editOn', category: 'nav', values: { en: 'Edit ON', ru: 'Режим редактирования', am: 'Խմբագրումն ON' } },
      { key: 'nav.about', category: 'nav', values: { en: 'About', ru: 'О себе', am: 'Իմ մասին' } },
      { key: 'nav.work', category: 'nav', values: { en: 'Work', ru: 'Проекты', am: 'Նախագծեր' } },
      { key: 'nav.blog', category: 'nav', values: { en: 'Blog', ru: 'Блог', am: 'Բլոգ' } },
      { key: 'nav.contact', category: 'nav', values: { en: 'Contact', ru: 'Контакты', am: 'Կապ' } },
      { key: 'pages.home', category: 'pages', values: { en: 'Home', ru: 'Главная', am: 'Գլխավոր' } },
      { key: 'pages.about', category: 'pages', values: { en: 'About', ru: 'О себе', am: 'Իմ մասին' } },
      { key: 'pages.about.title', category: 'pages', values: { en: 'About Me', ru: 'Обо мне', am: 'Իմ մասին' } },
      { key: 'pages.about.subtitle', category: 'pages', values: { en: 'Who I am and how I work', ru: 'Кто я и как работаю', am: 'Ես ով եմ և ինչպես եմ աշխատում' } },
      { key: 'pages.about.philosophy', category: 'pages', values: { en: 'Quality as an enabler of speed and confidence.', ru: 'Качество как инструмент скорости и уверенности.', am: 'Որակը՝ արագության և վստահության նախապայման։' } },
      { key: 'pages.blog', category: 'pages', values: { en: 'Blog', ru: 'Блог', am: 'Բլոգ' } },
      { key: 'pages.work', category: 'pages', values: { en: 'Work', ru: 'Проекты', am: 'Նախագծեր' } },
      { key: 'pages.work.title', category: 'pages', values: { en: 'Projects', ru: 'Проекты', am: 'Նախագծեր' } },
      { key: 'pages.work.subtitle', category: 'pages', values: { en: 'Selected projects and results', ru: 'Выбранные проекты и результаты', am: 'Ընտրված նախագծեր և արդյունքներ' } },
      { key: 'pages.contact', category: 'pages', values: { en: 'Contact', ru: 'Контакты', am: 'Կապ' } },
      { key: 'pages.home.featuredProjects', category: 'pages', values: { en: 'Featured Projects', ru: 'Избранные проекты', am: 'Թոփ նախագծեր' } },
      { key: 'pages.home.latestArticles', category: 'pages', values: { en: 'Latest Articles', ru: 'Свежие статьи', am: 'Վերջին հոդվածներ' } },
      { key: 'viewAll', category: 'pages', values: { en: 'View all', ru: 'Показать все', am: 'Դիտել բոլորը' } },
      { key: 'hero.title', category: 'hero', values: { en: 'Quality Assurance Engineer', ru: 'Инженер по контролю качества', am: 'Որակի ապահովման ինժեներ' } },
      { key: 'hero.subtitle', category: 'hero', values: { en: 'I help teams ship faster with fewer bugs.', ru: 'Помогаю командам выпускать быстрее с меньшим количеством ошибок.', am: 'Օգնում եմ թիմերին ավելի արագ ու ավելի քիչ սխալներով թողարկել։' } },
      { key: 'hero.proof1', category: 'hero', values: { en: 'Stable UI and API automation', ru: 'Стабильная автоматизация UI и API', am: 'Կայուն UI և API ավտոմատացում' } },
      { key: 'hero.proof2', category: 'hero', values: { en: 'Deterministic tests and CI integration', ru: 'Детерминированные тесты и интеграция с CI', am: 'Դետերմինացված թեստեր և CI ինտեգրում' } },
      { key: 'hero.proof3', category: 'hero', values: { en: 'Data isolation and tuned timeouts', ru: 'Изоляция данных и настроенные тайм-ауты', am: 'Տվյալների մեկուսացում և ճշգրտված ժամանակափակումներ' } },
      { key: 'hero.ctaWork', category: 'hero', values: { en: 'See My Work', ru: 'Мои проекты', am: 'Նախագծերս' } },
      { key: 'hero.ctaContact', category: 'hero', values: { en: 'Contact Me', ru: 'Связаться со мной', am: 'Կապ հաստատել' } },
      { key: 'hero.downloadCV', category: 'hero', values: { en: 'Download CV', ru: 'Скачать резюме', am: 'Ներբեռնել ութ. թերթ' } },
      { key: 'about.headline', category: 'about', values: { en: 'Mid-level QA Automation Engineer specializing in Playwright and CI/CD', ru: 'Мидл QA Automation инженер, специализация Playwright и CI/CD', am: 'Միջին մակարդակի QA ավտոմատացման ինժեներ՝ Playwright և CI/CD' } },
      { key: 'about.portraitAlt', category: 'about', values: { en: 'Gor Papyan', ru: 'Гор Папян', am: 'Գոր Պապյան' } },
      { key: 'about.professionalJourney', category: 'about', values: { en: 'Professional Journey', ru: 'Профессиональный путь', am: 'Մասնագիտական ուղի' } },
      { key: 'about.professionalJourney.content', category: 'about', values: { en: 'QA Automation Engineer delivering reliable UI and API automation with Playwright, embedded in Agile teams since October 2022. I build frameworks, integrate them into CI/CD (AWS CodeBuild/CodeArtifact), and use data isolation and tuned timeouts to stabilize regressions and cut runtime.', ru: 'QA Automation инженер: надежная автоматизация UI и API на Playwright с 2022. Строю фреймворки, интегрирую в CI/CD (AWS CodeBuild/CodeArtifact), изоляция данных и тайм-ауты для стабильности.', am: 'QA ավտոմատացման ինժեներ՝ Playwright-ով UI և API ավտոմատացում, 2022-ից։ Կառուցում եմ շրջանակներ, ինտեգրում CI/CD, տվյալների մեկուսացում և ժամանակային սահմանաչափեր՝ կայունության համար։' } },
      { key: 'about.philosophy', category: 'about', values: { en: 'Philosophy', ru: 'Философия', am: 'Փիլիսոփայություն' } },
      { key: 'about.philosophy.content', category: 'about', values: { en: "Quality isn't only finding bugs—it's enabling confident, fast delivery. Every test is a design decision: make it readable, deterministic, and valuable to developers and users alike.", ru: 'Качество — это не только баги, а уверенная и быстрая поставка. Каждый тест — это решение дизайна: читаемый, детерминированный и полезный.', am: 'Որակը միայն սխալներ գտնելը չէ՝ այն վստահ, արագ թողարկումն է։ Ամեն թեստ դիզայնի որոշում է՝ ընթեռնելի, կանխատեսելի ու արժեքավոր։' } },
      { key: 'about.toolbox', category: 'about', values: { en: 'Toolbox', ru: 'Набор инструментов', am: 'Գործիքապահ' } },
      { key: 'about.toolbox.content', category: 'about', values: { en: 'Playwright (TypeScript), PyTest, XCUITest; REST, Postman, Mountebank; PostgreSQL; Git; AWS CodeBuild & CodeArtifact; TestRail; Jira.', ru: 'Playwright (TypeScript), PyTest, XCUITest; REST, Postman, Mountebank; PostgreSQL; Git; AWS CodeBuild & CodeArtifact; TestRail; Jira.', am: 'Playwright (TypeScript), PyTest, XCUITest; REST, Postman, Mountebank; PostgreSQL; Git; AWS CodeBuild & CodeArtifact; TestRail; Jira.' } },
      { key: 'portfolioNav.learnMore', category: 'portfolioNav', values: { en: 'Learn more', ru: 'Подробнее', am: 'Ավելին' } },
      { key: 'portfolioNav.title', category: 'portfolioNav', values: { en: 'Explore the Portfolio', ru: 'Исследуйте портфолио', am: 'Ուսումնասիրեք պորտֆոլիոն' } },
      { key: 'portfolioNav.subtitle', category: 'portfolioNav', values: { en: 'Jump to a section below', ru: 'Перейдите к разделам ниже', am: 'Անցեք ստորև բաժիններին' } },
      { key: 'portfolioNav.aboutTitle', category: 'portfolioNav', values: { en: 'About', ru: 'О себе', am: 'Իմ մասին' } },
      { key: 'portfolioNav.aboutDesc', category: 'portfolioNav', values: { en: 'Background, philosophy and toolbox', ru: 'Опыт, философия и инструменты', am: 'Փորձ, փիլիսոփայություն և գործիքներ' } },
      { key: 'portfolioNav.workTitle', category: 'portfolioNav', values: { en: 'Work', ru: 'Проекты', am: 'Նախագծեր' } },
      { key: 'portfolioNav.workDesc', category: 'portfolioNav', values: { en: 'Selected projects and case studies', ru: 'Выбранные проекты и кейсы', am: 'Ընտրված նախագծեր և դեպք-ուսումնասիրություններ' } },
      { key: 'portfolioNav.blogTitle', category: 'portfolioNav', values: { en: 'Blog', ru: 'Блог', am: 'Բլոգ' } },
      { key: 'portfolioNav.blogDesc', category: 'portfolioNav', values: { en: 'Articles and technical notes', ru: 'Статьи и заметки', am: 'Հոդվածներ և տեխնիկ. նշումներ' } },
      { key: 'portfolioNav.contactTitle', category: 'portfolioNav', values: { en: 'Contact', ru: 'Контакты', am: 'Կապ' } },
      { key: 'portfolioNav.contactDesc', category: 'portfolioNav', values: { en: 'Ways to reach out', ru: 'Как связаться', am: 'Կապ հաստատելու եղանակներ' } },
      { key: 'statistics.title', category: 'statistics', values: { en: 'Impact Through Numbers', ru: 'Влияние в цифрах', am: 'Թվերով ազդեցություն' } },
      { key: 'statistics.subtitle', category: 'statistics', values: { en: 'Measurable results across projects and platforms', ru: 'Измеримые результаты в проектах и платформах', am: 'Չափելի արդյունքներ նախագծերում և հարթակներում' } },
      { key: 'statistics.experience', category: 'statistics', values: { en: 'Years Experience', ru: 'Лет опыта', am: 'Տարեթիվ փորձ' } },
      { key: 'statistics.experienceDescription', category: 'statistics', values: { en: 'Years specializing in deterministic test automation', ru: 'Годы специализации в детерминированной автоматизации тестов', am: 'Տարիներ՝ կանխատեսելի թեստերի ավտոմատացում' } },
      { key: 'statistics.projects', category: 'statistics', values: { en: 'Projects Delivered', ru: 'Проектов доставлено', am: 'Կատարված նախագծեր' } },
      { key: 'statistics.projectsDescription', category: 'statistics', values: { en: 'Delivered with measurable quality improvements', ru: 'С измеримыми улучшениями качества', am: 'Չափելի որակի բարելավումներով' } },
      { key: 'statistics.tests', category: 'statistics', values: { en: 'Core Competencies', ru: 'Ключевые компетенции', am: 'Հիմնական հմտություններ' } },
      { key: 'statistics.testsDescription', category: 'statistics', values: { en: 'Playwright, PyTest, XCUITest, AWS CodeBuild, PostgreSQL', ru: 'Playwright, PyTest, XCUITest, AWS CodeBuild, PostgreSQL', am: 'Playwright, PyTest, XCUITest, AWS CodeBuild, PostgreSQL' } },
      { key: 'statistics.expertise', category: 'statistics', values: { en: 'Focus Areas', ru: 'Области фокуса', am: 'Կիրառման ոլորտներ' } },
      { key: 'statistics.expertiseDescription', category: 'statistics', values: { en: 'UI & API Automation, CI/CD Integration, Data-Driven Testing', ru: 'UI и API автоматизация, интеграция CI/CD, Data-Driven тестирование', am: 'UI և API ավտոմատացում, CI/CD ինտեգրում, տվյալահիմն թեստավորում' } },
      { key: 'statistics.areas', category: 'statistics', values: { en: 'UI & API Automation • CI/CD • Data-Driven Testing', ru: 'UI и API автоматизация • CI/CD • Data-Driven тестирование', am: 'UI և API ավտոմատացում • CI/CD • Տվյալահիմն թեստավորում' } },
      { key: 'projects.liveDemo', category: 'projects', values: { en: 'Live Demo', ru: 'Демо', am: 'Դեմո' } },
      { key: 'projects.sourceCode', category: 'projects', values: { en: 'Source Code', ru: 'Исходный код', am: 'Աղբյուր կոդ' } },
      { key: 'projects.none', category: 'projects', values: { en: 'No projects available at the moment.', ru: 'Пока нет доступных проектов.', am: 'Նախագծեր առայժմ չկան։' } },
      { key: 'errors.projectsLoadFailed', category: 'errors', values: { en: 'Failed to load projects', ru: 'Не удалось загрузить проекты', am: 'Չհաջողվեց բեռնել նախագծերը' } },
      { key: 'errors.blogLoadFailed', category: 'errors', values: { en: 'Failed to load blog posts', ru: 'Не удалось загрузить посты', am: 'Չհաջողվեց բեռնել բլոգի գրառումները' } },
      { key: 'footer.about', category: 'footer', values: { en: 'About', ru: 'О сайте', am: 'Մեր մասին' } },
      { key: 'footer.aboutDescription', category: 'footer', values: { en: 'Dedicated QA Engineer with a passion for ensuring software excellence through comprehensive testing and quality control.', ru: 'Инженер по обеспечению качества, увлеченный обеспечением качества ПО с помощью комплексного тестирования.', am: 'QA ինժեներ՝ ծրագրային ապահովման որակի ապահովման նկատմամբ կիրքով։' } },
      { key: 'footer.contact', category: 'footer', values: { en: 'Contact', ru: 'Контакты', am: 'Կապ' } },
      { key: 'footer.location', category: 'footer', values: { en: 'Armenia Kapan, Syunik', ru: 'Армения, Капан, Сюник', am: 'Հայաստան, Կապան, Սյունիք' } },
      { key: 'footer.quickLinks', category: 'footer', values: { en: 'Quick Links', ru: 'Быстрые ссылки', am: 'Արագ հղումներ' } },
      { key: 'footer.connect', category: 'footer', values: { en: 'Connect', ru: 'Связаться', am: 'Կապ հաստատել' } },
      { key: 'footer.privacy', category: 'footer', values: { en: 'Privacy Policy', ru: 'Политика конфиденциальности', am: 'Գաղտնիության քաղաքականություն' } },
      { key: 'footer.terms', category: 'footer', values: { en: 'Terms of Service', ru: 'Условия обслуживания', am: 'Ծառայության պայմաններ' } },
      { key: 'footer.copyright', category: 'footer', values: { en: '© {year} Gor Papyan. All rights reserved.', ru: '© {year} Гор Папян. Все права защищены.', am: '© {year} Գոր Պապյան։ Բոլոր իրավունքները պաշտպանված են։' } },
    ];

    minimalKeys.forEach(({ key, category, values }) => {
      (['en','ru','am'] as const).forEach((lang) => {
        translationsToSeed.push({ key, category, language: lang, value: values[lang] });
      });
    });

    // About page EN-only seeds (RU/AM intentionally left missing)
    const aboutEnOnly: TranslationSeed[] = [
      { key: 'about.summary.title', language: 'en', value: 'Professional Summary', category: 'about' },
      { key: 'about.keyResults.title', language: 'en', value: 'Key Results', category: 'about' },
      { key: 'about.languages.title', language: 'en', value: 'Languages', category: 'about' },
      { key: 'about.summary.1', language: 'en', value: 'QA Automation Engineer (mid-level) with deep Playwright (TypeScript) across UI/API tests.', category: 'about' },
      { key: 'about.summary.2', language: 'en', value: 'Built frameworks and integrated them into CI/CD (AWS CodeBuild) to accelerate releases and harden regressions; strong communicator, rapid learner of new tools and stacks.', category: 'about' },
      { key: 'about.keyResults.1', language: 'en', value: 'Manual regression time −40% via stable Playwright suites and targeted integration tests.', category: 'about' },
      { key: 'about.keyResults.2', language: 'en', value: 'Flaky test rate −70% by stabilizing test data, controlling network/timeouts, and isolating specs.', category: 'about' },
      { key: 'about.keyResults.3', language: 'en', value: 'CI runtime reduced via parallel/sharded Playwright runs, as well as authentication reuse (storageState).', category: 'about' },
      { key: 'about.languages.1', language: 'en', value: 'Armenian (Native)', category: 'about' },
      { key: 'about.languages.2', language: 'en', value: 'Russian (Proficient)', category: 'about' },
      { key: 'about.languages.3', language: 'en', value: 'English (Intermediate)', category: 'about' }
    ];

    translationsToSeed.push(...aboutEnOnly);

    console.log(`Prepared ${translationsToSeed.length} translations for seeding`);

    // Insert/Update in batches to avoid overwhelming the database
    const batchSize = 50;
    for (let i = 0; i < translationsToSeed.length; i += batchSize) {
      const batch = translationsToSeed.slice(i, i + batchSize);

      // Fetch existing keys for this batch
      const keys = batch.map(b => b.key);
      const languages = batch.map(b => b.language);
      const { data: existing, error: fetchErr } = await sb
        .from('translations')
        .select('key, language')
        .in('key', keys)
        .in('language', languages);
      if (fetchErr) throw fetchErr;

      const existingSet = new Set((existing as { key: string; language: string }[] || []).map(r => `${r.key}::${r.language}`));
      const toInsert = batch.filter(r => !existingSet.has(`${r.key}::${r.language}`));
      const toUpdate = batch.filter(r => existingSet.has(`${r.key}::${r.language}`));

      if (toInsert.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { error: insertErr } = await sb
          .from('translations')
          .insert(toInsert as any);
        if (insertErr) throw insertErr; 
      }

      for (const rec of toUpdate) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { error: updateErr } = await sb
          .from('translations')
          .update({ value: rec.value, category:  rec.category } as any)
          .eq('key', rec.key)
          .eq('language', rec.language);
        if (updateErr) throw updateErr;
      }

      console.log(`Seeded batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(translationsToSeed.length / batchSize)}`);
    }

    console.log('Translation seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding translations:', error);
    throw error;
  }
}

export async function clearTranslations(): Promise<void> {
  try {
    console.log('Clearing existing translations...');
    
    // Use service role key for clearing (bypasses RLS) or fall back to anon key
    const serviceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || supabaseConfig.anonKey;
    const sb = createClient(supabaseConfig.url, serviceRoleKey);
    const { error } = await sb
      .from('translations')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows

    if (error) {
      console.error('Error clearing translations:', error);
      throw error;
    }

    console.log('Translations cleared successfully!');
  } catch (err) {
    console.error('Error clearing translations:', err);
    throw err;
  }
}

export async function resetTranslations(): Promise<void> {
  try {
    await clearTranslations();
    await seedTranslations();
    console.log('Translation reset completed successfully!');
  } catch (error) {
    console.error('Error resetting translations:', error);
    throw error;
  }
}

// Utility function to export current translations to JSON
export function exportTranslationsToJSON(translations: Record<string, Record<string, string>>): string {
  return JSON.stringify(translations, null, 2);
}

// Utility function to import translations from JSON
export function parseTranslationsFromJSON(jsonString: string): Record<string, Record<string, string>> {
  try {
    return JSON.parse(jsonString);
  } catch {
    throw new Error('Invalid JSON format');
  }
}
