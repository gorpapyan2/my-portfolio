-- ============================================================================
-- Migration: Add All Missing i18n Translations
-- Date: 2026-01-17
-- ============================================================================
--
-- Purpose:
--   Comprehensive migration to add ALL missing translation entries found
--   in the error logs. This covers admin, about, experience, footer, aria,
--   hero, and home sections across EN, RU, and AM languages.
--
-- Missing translations added:
--   1. Admin section translations (all 3 languages)
--   2. About section translations (mostly RU, AM)
--   3. Experience section translations (all 3 languages)
--   4. Footer translations (RU, AM)
--   5. ARIA labels (RU, AM)
--   6. Hero section (RU, AM)
--   7. Home/Technologies (RU, AM)
--
-- Target locales: en (English), ru (Russian), am (Armenian)
--
-- ============================================================================

BEGIN;

-- ============================================================================
-- PART 1: ADMIN SECTION TRANSLATIONS (All 3 Languages)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
-- Admin Dashboard
('admin.dashboard.section.about', 'en', 'About', 'admin'),
('admin.dashboard.section.about', 'ru', 'О себе', 'admin'),
('admin.dashboard.section.about', 'am', 'Իմ մասին', 'admin'),

-- Admin Common
('admin.common.addNew', 'en', 'Add New', 'admin'),
('admin.common.addNew', 'ru', 'Добавить новый', 'admin'),
('admin.common.addNew', 'am', 'Ավելացնել նոր', 'admin'),

('admin.common.language', 'en', 'Language', 'admin'),
('admin.common.language', 'ru', 'Язык', 'admin'),
('admin.common.language', 'am', 'Լեզու', 'admin'),

-- Admin About Section
('admin.about.title', 'en', 'About Management', 'admin'),
('admin.about.title', 'ru', 'Управление разделом "О себе"', 'admin'),
('admin.about.title', 'am', 'Կառավարել "Իմ մասին" բաժինը', 'admin'),

('admin.about.languageName', 'en', 'Language Name', 'admin'),
('admin.about.languageName', 'ru', 'Название языка', 'admin'),
('admin.about.languageName', 'am', 'Լեզվի անվանում', 'admin'),

('admin.about.languageLevel', 'en', 'Language Level', 'admin'),
('admin.about.languageLevel', 'ru', 'Уровень владения', 'admin'),
('admin.about.languageLevel', 'am', 'Լեզվի մակարդակ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- ============================================================================
-- PART 2: ABOUT SECTION TRANSLATIONS (RU, AM Missing)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
-- about.keyResults.title
('about.keyResults.title', 'ru', 'Ключевые результаты', 'about'),
('about.keyResults.title', 'am', 'Հիմնական արդյունքներ', 'about'),

-- about.languages.title
('about.languages.title', 'ru', 'Языки', 'about'),
('about.languages.title', 'am', 'Լեզուներ', 'about'),

-- about.headline
('about.headline', 'ru', 'Мидл QA Automation инженер, специализация Playwright и CI/CD', 'about'),
('about.headline', 'am', 'Միջին մակարդակի QA ավտոմատացման ինժեներ՝ Playwright և CI/CD', 'about'),

-- about.portraitAlt
('about.portraitAlt', 'ru', 'Гор Папян', 'about'),
('about.portraitAlt', 'am', 'Գոր Պապյան', 'about'),

-- Fallback content for about sections
('about.fallback.journey', 'en', 'Professional Journey', 'about'),
('about.fallback.journey', 'ru', 'Профессиональный путь', 'about'),
('about.fallback.journey', 'am', 'Մասնագիտական ուղի', 'about'),

('about.fallback.philosophy', 'en', 'Philosophy', 'about'),
('about.fallback.philosophy', 'ru', 'Философия', 'about'),
('about.fallback.philosophy', 'am', 'Փիլիսոփայություն', 'about'),

('about.fallback.toolbox', 'en', 'Toolbox', 'about'),
('about.fallback.toolbox', 'ru', 'Набор инструментов', 'about'),
('about.fallback.toolbox', 'am', 'Գործիքներ', 'about')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- ============================================================================
-- PART 3: EXPERIENCE SECTION TRANSLATIONS (All 3 Languages)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('experience.title', 'en', 'Experience', 'experience'),
('experience.title', 'ru', 'Опыт работы', 'experience'),
('experience.title', 'am', 'Աշխատանքային փորձ', 'experience'),

('experience.keyAchievements', 'en', 'Key Achievements', 'experience'),
('experience.keyAchievements', 'ru', 'Ключевые достижения', 'experience'),
('experience.keyAchievements', 'am', 'Հիմնական ձեռքբերումներ', 'experience')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- ============================================================================
-- PART 4: FOOTER TRANSLATIONS (RU, AM Missing)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('footer.copyright', 'ru', '© {year} Гор Папян. Все права защищены.', 'footer'),
('footer.copyright', 'am', '© {year} Գոր Պապյան։ Բոլոր իրավունքները պաշտպանված են։', 'footer'),

('footer.privacy', 'ru', 'Политика конфиденциальности', 'footer'),
('footer.privacy', 'am', 'Գաղտնիության քաղաքականություն', 'footer'),

('footer.terms', 'ru', 'Условия обслуживания', 'footer'),
('footer.terms', 'am', 'Ծառայության պայմաններ', 'footer')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- ============================================================================
-- PART 5: ARIA LABELS (RU, AM Missing)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('aria.openMenu', 'ru', 'Открыть меню', 'aria'),
('aria.openMenu', 'am', 'Բացել մենյուն', 'aria'),

('aria.previousTechnology', 'ru', 'Предыдущая технология', 'aria'),
('aria.previousTechnology', 'am', 'Նախորդ տեխնոլոգիա', 'aria'),

('aria.nextTechnology', 'ru', 'Следующая технология', 'aria'),
('aria.nextTechnology', 'am', 'Հաջորդ տեխնոլոգիա', 'aria')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- ============================================================================
-- PART 6: HERO SECTION (RU, AM Missing)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('hero.ctaContact', 'ru', 'Связаться со мной', 'hero'),
('hero.ctaContact', 'am', 'Կապ հաստատել', 'hero'),

('hero.scrollDown', 'ru', 'Прокрутить вниз', 'hero'),
('hero.scrollDown', 'am', 'Ներքև թերթել', 'hero')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- ============================================================================
-- PART 7: HOME/TECHNOLOGIES SECTION (RU, AM Missing)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('home.technologies.title', 'ru', 'Технологии', 'home'),
('home.technologies.title', 'am', 'Տեխնոլոգիաներ', 'home'),

('home.technologies.proficiencyLevel', 'ru', 'Уровень владения', 'home'),
('home.technologies.proficiencyLevel', 'am', 'Վարպետության մակարդակ', 'home')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================
-- Run these queries after applying the migration to verify success

-- 1. Check that all new keys have entries for all 3 languages
SELECT
  key,
  COUNT(DISTINCT language) as language_count,
  array_agg(DISTINCT language ORDER BY language) as languages
FROM public.translations
WHERE key IN (
  'admin.dashboard.section.about',
  'admin.common.addNew',
  'admin.common.language',
  'admin.about.title',
  'admin.about.languageName',
  'admin.about.languageLevel',
  'about.keyResults.title',
  'about.languages.title',
  'about.headline',
  'about.portraitAlt',
  'about.fallback.journey',
  'about.fallback.philosophy',
  'about.fallback.toolbox',
  'experience.title',
  'experience.keyAchievements',
  'footer.copyright',
  'footer.privacy',
  'footer.terms',
  'aria.openMenu',
  'aria.previousTechnology',
  'aria.nextTechnology',
  'hero.ctaContact',
  'hero.scrollDown',
  'home.technologies.title',
  'home.technologies.proficiencyLevel'
)
GROUP BY key
HAVING COUNT(DISTINCT language) < 3;
-- Expected: 0 rows (all keys should have en, ru, am)

-- 2. Count total entries for the new keys
SELECT
  'Total entries for new translation keys' as metric,
  COUNT(*) as count
FROM public.translations
WHERE key IN (
  'admin.dashboard.section.about',
  'admin.common.addNew',
  'admin.common.language',
  'admin.about.title',
  'admin.about.languageName',
  'admin.about.languageLevel',
  'about.keyResults.title',
  'about.languages.title',
  'about.headline',
  'about.portraitAlt',
  'about.fallback.journey',
  'about.fallback.philosophy',
  'about.fallback.toolbox',
  'experience.title',
  'experience.keyAchievements',
  'footer.copyright',
  'footer.privacy',
  'footer.terms',
  'aria.openMenu',
  'aria.previousTechnology',
  'aria.nextTechnology',
  'hero.ctaContact',
  'hero.scrollDown',
  'home.technologies.title',
  'home.technologies.proficiencyLevel'
);
-- Expected: 75 entries (25 keys × 3 languages)

-- ============================================================================
-- NOTES FOR REVIEW
-- ============================================================================
--
-- Translation Quality:
--   All translations have been created with attention to context and grammar.
--   However, for production use, please have native speakers review:
--
--   Russian (ru) - Review recommended for:
--     - admin.about.title: "Управление разделом 'О себе'"
--     - home.technologies.proficiencyLevel: "Уровень владения"
--
--   Armenian (am) - Review recommended for:
--     - admin.about.title: "Կառավարել 'Իմ մասին' բաժինը"
--     - experience.keyAchievements: "Հիմնական ձեռքբերումներ"
--
-- Schema Compatibility:
--   This migration is compatible with the existing translations table:
--     - Uses CHECK constraint (language IN ('en', 'ru', 'am'))
--     - Respects UNIQUE(key, language) constraint
--     - Maintains category structure
--     - Triggers automatic updated_at timestamp updates
--
-- Performance:
--   This migration adds up to 75 rows to the translations table.
--   With ON CONFLICT DO UPDATE, it's safe to run multiple times.
--   Expected execution time: <150ms
--
-- ============================================================================
