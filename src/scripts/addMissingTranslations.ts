import { supabase } from '../lib/supabase';

interface Translation {
  key: string;
  language: 'en' | 'ru' | 'am';
  value: string;
  category: string;
}

async function addMissingTranslations() {
  try {
    console.log('Starting to add missing translations...');

    const translations: Translation[] = [
      // ========== ADMIN SECTION ==========
      // Admin Dashboard
      { key: 'admin.dashboard.section.about', language: 'en', value: 'About', category: 'admin' },
      { key: 'admin.dashboard.section.about', language: 'ru', value: 'О себе', category: 'admin' },
      { key: 'admin.dashboard.section.about', language: 'am', value: 'Իմ մասին', category: 'admin' },

      // Admin Common
      { key: 'admin.common.addNew', language: 'en', value: 'Add New', category: 'admin' },
      { key: 'admin.common.addNew', language: 'ru', value: 'Добавить новый', category: 'admin' },
      { key: 'admin.common.addNew', language: 'am', value: 'Ավելացնել նոր', category: 'admin' },

      { key: 'admin.common.language', language: 'en', value: 'Language', category: 'admin' },
      { key: 'admin.common.language', language: 'ru', value: 'Язык', category: 'admin' },
      { key: 'admin.common.language', language: 'am', value: 'Լեզու', category: 'admin' },

      // Admin About Section
      { key: 'admin.about.title', language: 'en', value: 'About Management', category: 'admin' },
      { key: 'admin.about.title', language: 'ru', value: 'Управление разделом "О себе"', category: 'admin' },
      { key: 'admin.about.title', language: 'am', value: 'Կառավարել "Իմ մասին" բաժինը', category: 'admin' },

      { key: 'admin.about.languageName', language: 'en', value: 'Language Name', category: 'admin' },
      { key: 'admin.about.languageName', language: 'ru', value: 'Название языка', category: 'admin' },
      { key: 'admin.about.languageName', language: 'am', value: 'Լեզվի անվանում', category: 'admin' },

      { key: 'admin.about.languageLevel', language: 'en', value: 'Language Level', category: 'admin' },
      { key: 'admin.about.languageLevel', language: 'ru', value: 'Уровень владения', category: 'admin' },
      { key: 'admin.about.languageLevel', language: 'am', value: 'Լեզվի մակարդակ', category: 'admin' },

      // ========== ABOUT SECTION ==========
      { key: 'about.keyResults.title', language: 'ru', value: 'Ключевые результаты', category: 'about' },
      { key: 'about.keyResults.title', language: 'am', value: 'Հիմնական արդյունքներ', category: 'about' },

      { key: 'about.languages.title', language: 'ru', value: 'Языки', category: 'about' },
      { key: 'about.languages.title', language: 'am', value: 'Լեզուներ', category: 'about' },

      { key: 'about.headline', language: 'ru', value: 'Мидл QA Automation инженер, специализация Playwright и CI/CD', category: 'about' },
      { key: 'about.headline', language: 'am', value: 'Միջին մակարդակի QA ավտոմատացման ինժեներ՝ Playwright և CI/CD', category: 'about' },

      { key: 'about.portraitAlt', language: 'ru', value: 'Гор Папян', category: 'about' },
      { key: 'about.portraitAlt', language: 'am', value: 'Գոր Պապյան', category: 'about' },

      // Fallback content
      { key: 'about.fallback.journey', language: 'en', value: 'Professional Journey', category: 'about' },
      { key: 'about.fallback.journey', language: 'ru', value: 'Профессиональный путь', category: 'about' },
      { key: 'about.fallback.journey', language: 'am', value: 'Մասնագիտական ուղի', category: 'about' },

      { key: 'about.fallback.philosophy', language: 'en', value: 'Philosophy', category: 'about' },
      { key: 'about.fallback.philosophy', language: 'ru', value: 'Философия', category: 'about' },
      { key: 'about.fallback.philosophy', language: 'am', value: 'Փիլիսոփայություն', category: 'about' },

      { key: 'about.fallback.toolbox', language: 'en', value: 'Toolbox', category: 'about' },
      { key: 'about.fallback.toolbox', language: 'ru', value: 'Набор инструментов', category: 'about' },
      { key: 'about.fallback.toolbox', language: 'am', value: 'Գործիքներ', category: 'about' },

      // ========== EXPERIENCE SECTION ==========
      { key: 'experience.title', language: 'en', value: 'Experience', category: 'experience' },
      { key: 'experience.title', language: 'ru', value: 'Опыт работы', category: 'experience' },
      { key: 'experience.title', language: 'am', value: 'Աշխատանքային փորձ', category: 'experience' },

      { key: 'experience.keyAchievements', language: 'en', value: 'Key Achievements', category: 'experience' },
      { key: 'experience.keyAchievements', language: 'ru', value: 'Ключевые достижения', category: 'experience' },
      { key: 'experience.keyAchievements', language: 'am', value: 'Հիմնական ձեռքբերումներ', category: 'experience' },

      // ========== FOOTER ==========
      { key: 'footer.copyright', language: 'ru', value: '© {year} Гор Папян. Все права защищены.', category: 'footer' },
      { key: 'footer.copyright', language: 'am', value: '© {year} Գոր Պապյան։ Բոլոր իրավունքները պաշտպանված են։', category: 'footer' },

      { key: 'footer.privacy', language: 'ru', value: 'Политика конфиденциальности', category: 'footer' },
      { key: 'footer.privacy', language: 'am', value: 'Գաղտնիության քաղաքականություն', category: 'footer' },

      { key: 'footer.terms', language: 'ru', value: 'Условия обслуживания', category: 'footer' },
      { key: 'footer.terms', language: 'am', value: 'Ծառայության պայմաններ', category: 'footer' },

      // ========== ARIA LABELS ==========
      { key: 'aria.openMenu', language: 'ru', value: 'Открыть меню', category: 'aria' },
      { key: 'aria.openMenu', language: 'am', value: 'Բացել մենյուն', category: 'aria' },

      { key: 'aria.previousTechnology', language: 'ru', value: 'Предыдущая технология', category: 'aria' },
      { key: 'aria.previousTechnology', language: 'am', value: 'Նախորդ տեխնոլոգիա', category: 'aria' },

      { key: 'aria.nextTechnology', language: 'ru', value: 'Следующая технология', category: 'aria' },
      { key: 'aria.nextTechnology', language: 'am', value: 'Հաջորդ տեխնոլոգիա', category: 'aria' },

      // ========== HERO SECTION ==========
      { key: 'hero.ctaContact', language: 'ru', value: 'Связаться со мной', category: 'hero' },
      { key: 'hero.ctaContact', language: 'am', value: 'Կապ հաստատել', category: 'hero' },

      { key: 'hero.scrollDown', language: 'ru', value: 'Прокрутить вниз', category: 'hero' },
      { key: 'hero.scrollDown', language: 'am', value: 'Ներքև թերթել', category: 'hero' },

      // ========== HOME/TECHNOLOGIES ==========
      { key: 'home.technologies.title', language: 'ru', value: 'Технологии', category: 'home' },
      { key: 'home.technologies.title', language: 'am', value: 'Տեխնոլոգիաներ', category: 'home' },

      { key: 'home.technologies.proficiencyLevel', language: 'ru', value: 'Уровень владения', category: 'home' },
      { key: 'home.technologies.proficiencyLevel', language: 'am', value: 'Վարպետության մակարդակ', category: 'home' },
    ];

    console.log(`Prepared ${translations.length} translations for insertion`);

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
    console.log(`Skipping ${translations.length - toInsert.length} existing translations`);

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
      if (languages && languages.size === 3) {
        complete++;
        console.log(`✅ ${key}: 3/3 languages (${Array.from(languages).join(', ')})`);
      } else {
        incomplete++;
        const langList = languages ? Array.from(languages).join(', ') : 'none';
        console.log(`⚠️  ${key}: ${languages?.size || 0}/3 languages (${langList})`);
      }
    });

    console.log(`\n=== Summary ===`);
    console.log(`Total keys: ${keysToCheck.length}`);
    console.log(`Complete: ${complete}`);
    console.log(`Incomplete: ${incomplete}`);

    if (incomplete === 0) {
      console.log('\n✅ All translations added successfully!');
    } else {
      console.log(`\n⚠️  ${incomplete} keys still need attention`);
    }

  } catch (error) {
    console.error('Error adding translations:', error);
    throw error;
  }
}

// Run the script
addMissingTranslations()
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Failed:', error);
    process.exit(1);
  });
