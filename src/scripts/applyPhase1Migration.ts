#!/usr/bin/env node

/**
 * Phase 1 Migration Script: Add RU/AM translations for existing EN-only keys
 *
 * This script adds Russian and Armenian translations for 35 existing English-only keys:
 * - admin.login.* (10 keys)
 * - auth.* (1 key)
 * - error.* (12 keys)
 * - pages.notFound.* (5 keys)
 * - pages.sectionUnavailable.* (2 keys)
 * - author.* (6 keys)
 *
 * Total: 35 keys × 2 languages = 70 new translation records
 */

import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from '../lib/config.js';

interface Translation {
  key: string;
  language: 'en' | 'ru' | 'am';
  value: string;
  category: string;
}

const translations: Translation[] = [
  // ============================================================================
  // AUTHENTICATION & LOGIN (10 keys × 2 languages = 20 records)
  // ============================================================================

  // Russian - Admin Login
  { key: 'admin.login.title', language: 'ru', value: 'Вход для администратора', category: 'admin' },
  { key: 'admin.login.subtitle', language: 'ru', value: 'Войдите, чтобы получить доступ к панели администратора', category: 'admin' },
  { key: 'admin.login.emailLabel', language: 'ru', value: 'Адрес электронной почты', category: 'admin' },
  { key: 'admin.login.emailPlaceholder', language: 'ru', value: 'admin@example.com', category: 'admin' },
  { key: 'admin.login.passwordLabel', language: 'ru', value: 'Пароль', category: 'admin' },
  { key: 'admin.login.passwordPlaceholder', language: 'ru', value: 'Введите ваш пароль', category: 'admin' },
  { key: 'admin.login.signingIn', language: 'ru', value: 'Вход...', category: 'admin' },
  { key: 'admin.login.signIn', language: 'ru', value: 'Войти', category: 'admin' },
  { key: 'admin.login.backToPortfolio', language: 'ru', value: '← Назад к портфолио', category: 'admin' },
  { key: 'auth.checkingAuthentication', language: 'ru', value: 'Проверка аутентификации...', category: 'auth' },

  // Armenian - Admin Login
  { key: 'admin.login.title', language: 'am', value: 'Ադմինի մուտք', category: 'admin' },
  { key: 'admin.login.subtitle', language: 'am', value: 'Մուտք գործեք՝ ադմինի վահանակ մտնելու համար', category: 'admin' },
  { key: 'admin.login.emailLabel', language: 'am', value: 'Էլ. փոստի հասցե', category: 'admin' },
  { key: 'admin.login.emailPlaceholder', language: 'am', value: 'admin@example.com', category: 'admin' },
  { key: 'admin.login.passwordLabel', language: 'am', value: 'Գաղտնաբառ', category: 'admin' },
  { key: 'admin.login.passwordPlaceholder', language: 'am', value: 'Մուտքագրեք ձեր գաղտնաբառը', category: 'admin' },
  { key: 'admin.login.signingIn', language: 'am', value: 'Մուտք...', category: 'admin' },
  { key: 'admin.login.signIn', language: 'am', value: 'Մուտք գործել', category: 'admin' },
  { key: 'admin.login.backToPortfolio', language: 'am', value: '← Վերադառնալ պորտֆոլիո', category: 'admin' },
  { key: 'auth.checkingAuthentication', language: 'am', value: 'Նույնականացման ստուգում...', category: 'auth' },

  // ============================================================================
  // ERROR MESSAGES (12 keys × 2 languages = 24 records)
  // ============================================================================

  // Russian - Errors
  { key: 'error.unexpected.title', language: 'ru', value: 'Упс! Произошла непредвиденная ошибка', category: 'error' },
  { key: 'error.unexpected.subtitle', language: 'ru', value: 'Не волнуйтесь, такое иногда случается. Проверьте подключение и попробуйте снова.', category: 'error' },
  { key: 'error.retry', language: 'ru', value: 'Попробовать снова', category: 'error' },
  { key: 'error.goHome', language: 'ru', value: 'На главную', category: 'error' },
  { key: 'error.technicalDetails', language: 'ru', value: 'Технические детали', category: 'error' },
  { key: 'error.languageLoadFailed.title', language: 'ru', value: 'Не удалось загрузить язык', category: 'error' },
  { key: 'error.languageLoadFailed.message', language: 'ru', value: 'Мы не смогли загрузить настройки вашего языка. Это может быть временной проблемой.', category: 'error' },
  { key: 'error.boundary.title', language: 'ru', value: 'Что-то пошло не так!', category: 'error' },
  { key: 'error.boundary.details', language: 'ru', value: 'Детали ошибки', category: 'error' },
  { key: 'error.loadFailed.skills', language: 'ru', value: 'Не удалось загрузить навыки', category: 'error' },
  { key: 'error.loadFailed.education', language: 'ru', value: 'Не удалось загрузить образование', category: 'error' },
  { key: 'error.loadFailed.featureFlags', language: 'ru', value: 'Ошибка загрузки флагов функций', category: 'error' },

  // Armenian - Errors
  { key: 'error.unexpected.title', language: 'am', value: 'Վայ! Անսպասելի սխալ է տեղի ունեցել', category: 'error' },
  { key: 'error.unexpected.subtitle', language: 'am', value: 'Մի անհանգստացեք, սա երբեմն պատահում է: Ստուգեք կապը և փորձեք կրկին:', category: 'error' },
  { key: 'error.retry', language: 'am', value: 'Փորձել կրկին', category: 'error' },
  { key: 'error.goHome', language: 'am', value: 'Գլխավոր էջ', category: 'error' },
  { key: 'error.technicalDetails', language: 'am', value: 'Տեխնիկական մանրամասներ', category: 'error' },
  { key: 'error.languageLoadFailed.title', language: 'am', value: 'Լեզուն բեռնել չհաջողվեց', category: 'error' },
  { key: 'error.languageLoadFailed.message', language: 'am', value: 'Ձեր նախընտրած լեզվի կարգավորումները բեռնել չհաջողվեց: Սա կարող է լինել ժամանակավոր խնդիր:', category: 'error' },
  { key: 'error.boundary.title', language: 'am', value: 'Ինչ-որ բան սխալ է գնացել!', category: 'error' },
  { key: 'error.boundary.details', language: 'am', value: 'Սխալի մանրամասներ', category: 'error' },
  { key: 'error.loadFailed.skills', language: 'am', value: 'Չհաջողվեց բեռնել հմտությունները', category: 'error' },
  { key: 'error.loadFailed.education', language: 'am', value: 'Չհաջողվեց բեռնել կրթությունը', category: 'error' },
  { key: 'error.loadFailed.featureFlags', language: 'am', value: 'Սխալ՝ ֆունկցիաների դրոշակներ բեռնելիս', category: 'error' },

  // ============================================================================
  // 404 PAGE (5 keys × 2 languages = 10 records)
  // ============================================================================

  // Russian - 404
  { key: 'pages.notFound.title', language: 'ru', value: 'Страница не найдена', category: 'pages' },
  { key: 'pages.notFound.message', language: 'ru', value: 'Упс! Страница, которую вы ищете, не существует. Возможно, она была перемещена или удалена.', category: 'pages' },
  { key: 'pages.notFound.goHome', language: 'ru', value: 'На главную', category: 'pages' },
  { key: 'pages.notFound.goBack', language: 'ru', value: 'Назад', category: 'pages' },
  { key: 'pages.notFound.popularPages', language: 'ru', value: 'Популярные страницы', category: 'pages' },

  // Armenian - 404
  { key: 'pages.notFound.title', language: 'am', value: 'Էջը չի գտնվել', category: 'pages' },
  { key: 'pages.notFound.message', language: 'am', value: 'Վայ! Էջը, որը դուք փնտրում եք, գոյություն չունի: Հնարավոր է՝ այն տեղափոխվել կամ ջնջվել է:', category: 'pages' },
  { key: 'pages.notFound.goHome', language: 'am', value: 'Գլխավոր էջ', category: 'pages' },
  { key: 'pages.notFound.goBack', language: 'am', value: 'Հետ', category: 'pages' },
  { key: 'pages.notFound.popularPages', language: 'am', value: 'Հայտնի էջեր', category: 'pages' },

  // ============================================================================
  // SECTION UNAVAILABLE (2 keys × 2 languages = 4 records)
  // ============================================================================

  // Russian - Section Unavailable
  { key: 'pages.sectionUnavailable.title', language: 'ru', value: 'Раздел недоступен', category: 'pages' },
  { key: 'pages.sectionUnavailable.message', language: 'ru', value: 'Этот раздел в настоящее время недоступен.', category: 'pages' },

  // Armenian - Section Unavailable
  { key: 'pages.sectionUnavailable.title', language: 'am', value: 'Բաժինը հասանելի չէ', category: 'pages' },
  { key: 'pages.sectionUnavailable.message', language: 'am', value: 'Այս բաժինը ներկայումս հասանելի չէ:', category: 'pages' },

  // ============================================================================
  // AUTHOR BIO (6 keys × 2 languages = 12 records)
  // ============================================================================

  // Russian - Author
  { key: 'author.name', language: 'ru', value: 'Гор Папян', category: 'author' },
  { key: 'author.bio', language: 'ru', value: 'Старший QA инженер и специалист по автоматизации тестирования с опытом работы с Playwright, Selenium и современными фреймворками. Увлечен созданием надежных, поддерживаемых тестовых наборов и обменом знаниями с сообществом.', category: 'author' },
  { key: 'author.role', language: 'ru', value: 'QA Инженер', category: 'author' },
  { key: 'author.location', language: 'ru', value: 'Удаленно', category: 'author' },
  { key: 'author.experience', language: 'ru', value: '5+ лет опыта', category: 'author' },
  { key: 'author.initials', language: 'ru', value: 'ГП', category: 'author' },

  // Armenian - Author
  { key: 'author.name', language: 'am', value: 'Գոր Պապյան', category: 'author' },
  { key: 'author.bio', language: 'am', value: 'Ավագ QA ինժեներ և թեստավորման ավտոմատացման մասնագետ՝ Playwright, Selenium և ժամանակակից շրջանակների փորձով: Կիրքով զբաղվում եմ հուսալի, պահպանելի թեստային հավաքածուների ստեղծմամբ և գիտելիքների փոխանակմամբ համայնքի հետ:', category: 'author' },
  { key: 'author.role', language: 'am', value: 'QA Ինժեներ', category: 'author' },
  { key: 'author.location', language: 'am', value: 'Հեռավար', category: 'author' },
  { key: 'author.experience', language: 'am', value: '5+ տարի փորձ', category: 'author' },
  { key: 'author.initials', language: 'am', value: 'ԳՊ', category: 'author' },
];

async function runMigration() {
  try {
    console.log('🚀 Starting Phase 1 Migration: Add RU/AM translations');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Use service role key for migration (bypasses RLS) or fall back to anon key
    const serviceRoleKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || supabaseConfig.anonKey;
    const client = createClient(supabaseConfig.url, serviceRoleKey);

    console.log(`📊 Total translations to add: ${translations.length}`);
    console.log(`   - Russian (ru): ${translations.filter(t => t.language === 'ru').length}`);
    console.log(`   - Armenian (am): ${translations.filter(t => t.language === 'am').length}\n`);

    // Group translations by category for better logging
    const byCategory = translations.reduce((acc, t) => {
      if (!acc[t.category]) acc[t.category] = [];
      acc[t.category].push(t);
      return acc;
    }, {} as Record<string, Translation[]>);

    console.log('📦 By Category:');
    Object.entries(byCategory).forEach(([cat, items]) => {
      console.log(`   - ${cat}: ${items.length} translations`);
    });
    console.log('');

    // Process in batches
    const batchSize = 50;
    let inserted = 0;
    let updated = 0;
    let skipped = 0;

    for (let i = 0; i < translations.length; i += batchSize) {
      const batch = translations.slice(i, i + batchSize);
      const batchNum = Math.floor(i / batchSize) + 1;
      const totalBatches = Math.ceil(translations.length / batchSize);

      console.log(`\n📤 Processing batch ${batchNum}/${totalBatches} (${batch.length} items)...`);

      for (const translation of batch) {
        // Check if translation already exists
        const { data: existing, error: fetchError } = await client
          .from('translations')
          .select('id, value')
          .eq('key', translation.key)
          .eq('language', translation.language)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
          // PGRST116 = not found, which is expected for new records
          console.error(`   ❌ Error checking ${translation.key} (${translation.language}):`, fetchError.message);
          continue;
        }

        if (existing) {
          // Update existing translation if value changed
          if (existing.value !== translation.value) {
            const { error: updateError } = await client
              .from('translations')
              .update({
                value: translation.value,
                category: translation.category,
                updated_at: new Date().toISOString()
              })
              .eq('key', translation.key)
              .eq('language', translation.language);

            if (updateError) {
              console.error(`   ❌ Error updating ${translation.key} (${translation.language}):`, updateError.message);
            } else {
              console.log(`   ✏️  Updated: ${translation.key} (${translation.language})`);
              updated++;
            }
          } else {
            skipped++;
          }
        } else {
          // Insert new translation
          const { error: insertError } = await client
            .from('translations')
            .insert({
              key: translation.key,
              language: translation.language,
              value: translation.value,
              category: translation.category
            });

          if (insertError) {
            console.error(`   ❌ Error inserting ${translation.key} (${translation.language}):`, insertError.message);
          } else {
            console.log(`   ✅ Inserted: ${translation.key} (${translation.language})`);
            inserted++;
          }
        }
      }
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📈 Migration Summary:');
    console.log(`   ✅ Inserted: ${inserted}`);
    console.log(`   ✏️  Updated: ${updated}`);
    console.log(`   ⏭️  Skipped: ${skipped} (already exists with same value)`);
    console.log(`   📊 Total processed: ${inserted + updated + skipped}/${translations.length}`);

    // Verification
    console.log('\n🔍 Verifying migration...');

    const uniqueKeys = [...new Set(translations.map(t => t.key))];
    console.log(`   Checking ${uniqueKeys.length} unique keys...`);

    for (const key of uniqueKeys) {
      const { data, error } = await client
        .from('translations')
        .select('language')
        .eq('key', key)
        .in('language', ['en', 'ru', 'am']);

      if (error) {
        console.error(`   ❌ Error verifying ${key}:`, error.message);
        continue;
      }

      const languages = data.map(d => d.language);
      const hasEN = languages.includes('en');
      const hasRU = languages.includes('ru');
      const hasAM = languages.includes('am');

      if (!hasEN || !hasRU || !hasAM) {
        console.warn(`   ⚠️  ${key}: Missing languages (EN: ${hasEN}, RU: ${hasRU}, AM: ${hasAM})`);
      }
    }

    console.log('   ✅ Verification complete!');

    console.log('\n🎉 Phase 1 Migration completed successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('📋 Next Steps:');
    console.log('   1. Test the login page in RU and AM languages');
    console.log('   2. Verify error messages display correctly');
    console.log('   3. Check 404 page translations');
    console.log('   4. Confirm author bio appears in all languages\n');

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
runMigration();
