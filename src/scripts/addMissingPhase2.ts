import { supabase } from '../lib/supabase';

interface Translation {
  key: string;
  language: 'en' | 'ru' | 'am';
  value: string;
  category: string;
}

async function addMissingPhase2Translations() {
  try {
    console.log('Starting Phase 2: Adding missing EN, RU, AM translations...\n');

    const translations: Translation[] = [
      // ========== ABOUT SECTION (EN Missing) ==========
      { key: 'about.keyResults.1', language: 'en', value: 'Manual regression time −40% via stable Playwright suites and targeted integration tests.', category: 'about' },
      { key: 'about.keyResults.2', language: 'en', value: 'Flaky test rate −70% by stabilizing test data, controlling network/timeouts, and isolating specs.', category: 'about' },
      { key: 'about.keyResults.3', language: 'en', value: 'CI runtime reduced via parallel/sharded Playwright runs, as well as authentication reuse (storageState).', category: 'about' },
      { key: 'about.keyResults.title', language: 'en', value: 'Key Results', category: 'about' },
      { key: 'about.languages.1', language: 'en', value: 'Armenian (Native)', category: 'about' },
      { key: 'about.languages.2', language: 'en', value: 'Russian (Proficient)', category: 'about' },
      { key: 'about.languages.3', language: 'en', value: 'English (Intermediate)', category: 'about' },
      { key: 'about.languages.title', language: 'en', value: 'Languages', category: 'about' },

      // ========== ARIA LABELS (RU, AM) ==========
      { key: 'aria.closeMenu', language: 'ru', value: 'Закрыть меню', category: 'aria' },
      { key: 'aria.closeMenu', language: 'am', value: 'Փակել մենյուն', category: 'aria' },
      { key: 'aria.closeNotification', language: 'ru', value: 'Закрыть уведомление', category: 'aria' },
      { key: 'aria.closeNotification', language: 'am', value: 'Փակել ծանուցումը', category: 'aria' },
      { key: 'aria.loadingImage', language: 'ru', value: 'Загрузка изображения', category: 'aria' },
      { key: 'aria.loadingImage', language: 'am', value: 'Նկարի բեռնում', category: 'aria' },
      { key: 'aria.loadingTag', language: 'ru', value: 'Загрузка тега', category: 'aria' },
      { key: 'aria.loadingTag', language: 'am', value: 'Թեգի բեռնում', category: 'aria' },
      { key: 'aria.loadingTitle', language: 'ru', value: 'Загрузка заголовка', category: 'aria' },
      { key: 'aria.loadingTitle', language: 'am', value: 'Վերնագրի բեռնում', category: 'aria' },
      { key: 'aria.tableOfContents', language: 'ru', value: 'Содержание', category: 'aria' },
      { key: 'aria.tableOfContents', language: 'am', value: 'Բովանդակություն', category: 'aria' },
      { key: 'aria.tableOfContentsSidebar', language: 'ru', value: 'Боковая панель содержания', category: 'aria' },
      { key: 'aria.tableOfContentsSidebar', language: 'am', value: 'Բովանդակության կողային վահանակ', category: 'aria' },

      // ========== BLOG (RU, AM) ==========
      { key: 'blog.author', language: 'ru', value: 'Автор', category: 'blog' },
      { key: 'blog.author', language: 'am', value: 'Հեղինակ', category: 'blog' },
      { key: 'blog.share', language: 'ru', value: 'Поделиться', category: 'blog' },
      { key: 'blog.share', language: 'am', value: 'Կիսվել', category: 'blog' },
      { key: 'blog.tableOfContents', language: 'ru', value: 'Содержание', category: 'blog' },
      { key: 'blog.tableOfContents', language: 'am', value: 'Բովանդակություն', category: 'blog' },
      { key: 'blog.toc.title', language: 'ru', value: 'Содержание', category: 'blog' },
      { key: 'blog.toc.title', language: 'am', value: 'Բովանդակություն', category: 'blog' },

      // ========== DEMO (RU, AM) ==========
      { key: 'demo.markdown.output', language: 'ru', value: 'Вывод', category: 'demo' },
      { key: 'demo.markdown.output', language: 'am', value: 'Արդյունք', category: 'demo' },
      { key: 'demo.markdown.title', language: 'ru', value: 'Демо Markdown', category: 'demo' },
      { key: 'demo.markdown.title', language: 'am', value: 'Markdown դեմո', category: 'demo' },

      // ========== HERO (RU, AM) ==========
      { key: 'hero.ctaWork', language: 'ru', value: 'Мои проекты', category: 'hero' },
      { key: 'hero.ctaWork', language: 'am', value: 'Նախագծերս', category: 'hero' },

      // ========== LOADING (RU, AM) ==========
      { key: 'loading.almostReady', language: 'ru', value: 'Почти готово', category: 'loading' },
      { key: 'loading.almostReady', language: 'am', value: 'Գրեթե պատրաստ է', category: 'loading' },
      { key: 'loading.gettingReady', language: 'ru', value: 'Подготовка', category: 'loading' },
      { key: 'loading.gettingReady', language: 'am', value: 'Պատրաստվում է', category: 'loading' },
      { key: 'loading.loadingLanguage', language: 'ru', value: 'Загрузка языка', category: 'loading' },
      { key: 'loading.loadingLanguage', language: 'am', value: 'Լեզվի բեռնում', category: 'loading' },
      { key: 'loading.moment', language: 'ru', value: 'Минутку', category: 'loading' },
      { key: 'loading.moment', language: 'am', value: 'Մի պահ', category: 'loading' },
      { key: 'loading.patience', language: 'ru', value: 'Пожалуйста, подождите', category: 'loading' },
      { key: 'loading.patience', language: 'am', value: 'Խնդրում ենք սպասել', category: 'loading' },
      { key: 'loading.preparing', language: 'ru', value: 'Подготовка', category: 'loading' },
      { key: 'loading.preparing', language: 'am', value: 'Պատրաստվում է', category: 'loading' },
      { key: 'loading.settingUp', language: 'ru', value: 'Настройка', category: 'loading' },
      { key: 'loading.settingUp', language: 'am', value: 'Կարգավորում', category: 'loading' },
      { key: 'loading.welcome', language: 'ru', value: 'Добро пожаловать', category: 'loading' },
      { key: 'loading.welcome', language: 'am', value: 'Բարի գալուստ', category: 'loading' },

      // ========== MARKDOWN (EN) ==========
      { key: 'markdown.copied', language: 'en', value: 'Copied!', category: 'markdown' },

      // ========== MOBILE (RU, AM) ==========
      { key: 'mobile.menu', language: 'ru', value: 'Меню', category: 'mobile' },
      { key: 'mobile.menu', language: 'am', value: 'Մենյու', category: 'mobile' },

      // ========== PAGES (RU, AM) ==========
      { key: 'pages.about.ariaLabel', language: 'ru', value: 'О себе', category: 'pages' },
      { key: 'pages.about.ariaLabel', language: 'am', value: 'Իմ մասին', category: 'pages' },

      // ========== SETTINGS (RU, AM) ==========
      { key: 'settings.comparison.noChanges', language: 'ru', value: 'Изменений нет', category: 'settings' },
      { key: 'settings.comparison.noChanges', language: 'am', value: 'Փոփոխություններ չկան', category: 'settings' },
      { key: 'settings.comparison.rearranged', language: 'ru', value: 'Переупорядочено', category: 'settings' },
      { key: 'settings.comparison.rearranged', language: 'am', value: 'Վերադասավորված', category: 'settings' },
      { key: 'settings.importDuplicate', language: 'ru', value: 'Дубликат при импорте', category: 'settings' },
      { key: 'settings.importDuplicate', language: 'am', value: 'Կրկնօրինակ ներմուծման ժամանակ', category: 'settings' },
      { key: 'settings.importFailed', language: 'ru', value: 'Ошибка импорта', category: 'settings' },
      { key: 'settings.importFailed', language: 'am', value: 'Ներմուծման սխալ', category: 'settings' },
      { key: 'settings.importInvalidJson', language: 'ru', value: 'Некорректный JSON', category: 'settings' },
      { key: 'settings.importInvalidJson', language: 'am', value: 'Անվավեր JSON', category: 'settings' },
      { key: 'settings.importValidationFailed', language: 'ru', value: 'Ошибка валидации при импорте', category: 'settings' },
      { key: 'settings.importValidationFailed', language: 'am', value: 'Վավերացման սխալ ներմուծման ժամանակ', category: 'settings' },
      { key: 'settings.validation.allPresent', language: 'ru', value: 'Все переводы присутствуют', category: 'settings' },
      { key: 'settings.validation.allPresent', language: 'am', value: 'Բոլոր թարգմանություններն առկա են', category: 'settings' },
      { key: 'settings.validation.noEmpty', language: 'ru', value: 'Пустые значения отсутствуют', category: 'settings' },
      { key: 'settings.validation.noEmpty', language: 'am', value: 'Դատարկ արժեքներ չկան', category: 'settings' },
      { key: 'settings.validation.totalIssues', language: 'ru', value: 'Всего проблем', category: 'settings' },
      { key: 'settings.validation.totalIssues', language: 'am', value: 'Ընդհանուր խնդիրներ', category: 'settings' },

      // ========== SHARE (RU, AM) ==========
      { key: 'share.checkOutArticle', language: 'ru', value: 'Посмотрите эту статью', category: 'share' },
      { key: 'share.checkOutArticle', language: 'am', value: 'Նայեք այս հոդվածը', category: 'share' },
      { key: 'share.copyLink', language: 'ru', value: 'Копировать ссылку', category: 'share' },
      { key: 'share.copyLink', language: 'am', value: 'Պատճենել հղումը', category: 'share' },
    ];

    console.log(`Prepared ${translations.length} translations for insertion\n`);

    // Fetch existing translations to avoid duplicates
    const keys = [...new Set(translations.map(t => t.key))];
    const { data: existing, error: fetchError } = await supabase
      .from('translations')
      .select('key, language')
      .in('key', keys);

    if (fetchError) {
      console.error('Error fetching existing translations:', fetchError);
      throw fetchError;
    }

    // Create a set of existing (key, language) pairs
    const existingSet = new Set(
      (existing || []).map((r: { key: string; language: string }) => `${r.key}::${r.language}`)
    );

    // Filter out existing translations
    const toInsert = translations.filter(
      t => !existingSet.has(`${t.key}::${t.language}`)
    );

    console.log(`Found ${toInsert.length} new translations to insert`);
    console.log(`Skipping ${translations.length - toInsert.length} existing translations\n`);

    if (toInsert.length > 0) {
      // Insert in batches
      const batchSize = 50;
      for (let i = 0; i < toInsert.length; i += batchSize) {
        const batch = toInsert.slice(i, i + batchSize);
        const { error: insertError } = await supabase
          .from('translations')
          .insert(batch);

        if (insertError) {
          console.error('Error inserting batch:', insertError);
          throw insertError;
        }

        console.log(`Inserted batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(toInsert.length / batchSize)}`);
      }
    }

    // Verification
    console.log('\n=== Verification ===');
    const keysToCheck = [...new Set(translations.map(t => t.key))];
    const { data: verification, error: verifyError } = await supabase
      .from('translations')
      .select('key, language')
      .in('key', keysToCheck);

    if (verifyError) {
      console.error('Error during verification:', verifyError);
      throw verifyError;
    }

    // Group by key
    const keyMap = new Map<string, Set<string>>();
    (verification || []).forEach((row: { key: string; language: string }) => {
      if (!keyMap.has(row.key)) {
        keyMap.set(row.key, new Set());
      }
      keyMap.get(row.key)!.add(row.language);
    });

    let complete = 0;
    let incomplete = 0;

    keysToCheck.forEach(key => {
      const languages = keyMap.get(key);
      const expectedCount = translations.filter(t => t.key === key).map(t => t.language).length;
      const actualCount = languages?.size || 0;

      if (actualCount > 0) {
        complete++;
        console.log(`✅ ${key}: ${actualCount} translations`);
      } else {
        incomplete++;
        console.log(`⚠️  ${key}: missing`);
      }
    });

    console.log(`\n=== Summary ===`);
    console.log(`Total keys: ${keysToCheck.length}`);
    console.log(`With translations: ${complete}`);
    console.log(`Missing: ${incomplete}`);
    console.log(`Total translations added: ${toInsert.length}`);

    if (incomplete === 0) {
      console.log('\n✅ All Phase 2 translations added successfully!');
    } else {
      console.log(`\n⚠️  ${incomplete} keys still need attention`);
    }

  } catch (error) {
    console.error('Error adding translations:', error);
    throw error;
  }
}

// Run the script
addMissingPhase2Translations()
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Failed:', error);
    process.exit(1);
  });
