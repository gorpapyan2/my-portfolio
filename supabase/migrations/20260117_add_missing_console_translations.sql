-- ============================================================================
-- Migration: Add Missing Console-Reported i18n Translations
-- Date: 2026-01-17
-- ============================================================================
--
-- Purpose:
--   Add all missing translation entries found in browser console logs
--   These translations are actively being requested but missing from database
--
-- Missing translations for:
--   - Russian (ru): 23 entries
--   - Armenian (am): 15 entries
--   - English (en): 11 entries
--
-- Total: 49 translation entries
--
-- ============================================================================

BEGIN;

-- ============================================================================
-- PART 1: RUSSIAN (RU) TRANSLATIONS
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
-- ARIA Labels (RU)
('aria.openMenu', 'ru', 'Открыть меню', 'aria'),
('aria.closeMenu', 'ru', 'Закрыть меню', 'aria'),
('aria.previousTechnology', 'ru', 'Предыдущая технология', 'aria'),
('aria.nextTechnology', 'ru', 'Следующая технология', 'aria'),

-- Hero Section (RU)
('hero.ctaContact', 'ru', 'Связаться со мной', 'hero'),
('hero.scrollDown', 'ru', 'Прокрутить вниз', 'hero'),

-- Home/Technologies (RU)
('home.technologies.title', 'ru', 'Технологии', 'home'),
('home.technologies.proficiencyLevel', 'ru', 'Уровень владения', 'home'),

-- Footer (RU)
('footer.copyright', 'ru', '© {year} Гор Папян. Все права защищены.', 'footer'),
('footer.privacy', 'ru', 'Политика конфиденциальности', 'footer'),
('footer.terms', 'ru', 'Условия обслуживания', 'footer'),

-- Mobile (RU)
('mobile.menu', 'ru', 'Меню', 'mobile'),

-- Pages (RU)
('pages.about.ariaLabel', 'ru', 'О себе', 'pages'),

-- Experience (RU)
('experience.title', 'ru', 'Опыт работы', 'experience'),
('experience.keyAchievements', 'ru', 'Ключевые достижения', 'experience'),

-- About Section (RU)
('about.fallback.journey', 'ru', 'Профессиональный путь', 'about'),
('about.fallback.philosophy', 'ru', 'Философия', 'about'),
('about.fallback.toolbox', 'ru', 'Набор инструментов', 'about'),
('about.portraitAlt', 'ru', 'Гор Папян', 'about'),
('about.headline', 'ru', 'Мидл QA Automation инженер, специализация Playwright и CI/CD', 'about'),
('about.keyResults.title', 'ru', 'Ключевые результаты', 'about'),
('about.languages.title', 'ru', 'Языки', 'about')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- ============================================================================
-- PART 2: ARMENIAN (AM) TRANSLATIONS
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
-- ARIA Labels (AM)
('aria.openMenu', 'am', 'Բացել մենյուն', 'aria'),
('aria.closeMenu', 'am', 'Փակել մենյուն', 'aria'),

-- Mobile (AM)
('mobile.menu', 'am', 'Մենյու', 'mobile'),

-- Pages (AM)
('pages.about.ariaLabel', 'am', 'Իմ մասին', 'pages'),

-- Experience (AM)
('experience.title', 'am', 'Աշխատանքային փորձ', 'experience'),
('experience.keyAchievements', 'am', 'Հիմնական ձեռքբերումներ', 'experience'),

-- About Section (AM)
('about.fallback.journey', 'am', 'Մասնագիտական ուղի', 'about'),
('about.fallback.philosophy', 'am', 'Փիլիսոփայություն', 'about'),
('about.fallback.toolbox', 'am', 'Գործիքներ', 'about'),
('about.portraitAlt', 'am', 'Գոր Պապյան', 'about'),
('about.headline', 'am', 'Միջին մակարդակի QA ավտոմատացման ինժեներ՝ Playwright և CI/CD', 'about'),
('about.keyResults.title', 'am', 'Հիմնական արդյունքներ', 'about'),
('about.languages.title', 'am', 'Լեզուներ', 'about'),

-- Footer (AM)
('footer.privacy', 'am', 'Գաղտնիության քաղաքականություն', 'footer'),
('footer.terms', 'am', 'Ծառայության պայմաններ', 'footer')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- ============================================================================
-- PART 3: ENGLISH (EN) TRANSLATIONS
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
-- Experience (EN)
('experience.title', 'en', 'Experience', 'experience'),
('experience.keyAchievements', 'en', 'Key Achievements', 'experience'),

-- About Section (EN)
('about.fallback.journey', 'en', 'Professional Journey', 'about'),
('about.fallback.philosophy', 'en', 'Philosophy', 'about'),
('about.fallback.toolbox', 'en', 'Toolbox', 'about'),
('about.portraitAlt', 'en', 'Gor Papyan', 'about'),
('about.headline', 'en', 'Mid-level QA Automation Engineer specializing in Playwright and CI/CD', 'about'),
('about.keyResults.title', 'en', 'Key Results', 'about'),
('about.languages.title', 'en', 'Languages', 'about'),

-- Footer (EN)
('footer.copyright', 'en', '© {year} Gor Papyan. All rights reserved.', 'footer'),
('footer.terms', 'en', 'Terms of Service', 'footer')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Check all new translations were inserted
SELECT
  language,
  COUNT(*) as translation_count
FROM public.translations
WHERE key IN (
  'aria.openMenu', 'aria.closeMenu', 'aria.previousTechnology', 'aria.nextTechnology',
  'hero.ctaContact', 'hero.scrollDown',
  'home.technologies.title', 'home.technologies.proficiencyLevel',
  'footer.copyright', 'footer.privacy', 'footer.terms',
  'mobile.menu', 'pages.about.ariaLabel',
  'experience.title', 'experience.keyAchievements',
  'about.fallback.journey', 'about.fallback.philosophy', 'about.fallback.toolbox',
  'about.portraitAlt', 'about.headline', 'about.keyResults.title', 'about.languages.title'
)
GROUP BY language
ORDER BY language;

-- Expected output:
-- am | 15
-- en | 11
-- ru | 23

-- Check for any keys still missing translations across all 3 languages
SELECT
  key,
  COUNT(DISTINCT language) as language_count,
  array_agg(DISTINCT language ORDER BY language) as languages_present
FROM public.translations
WHERE key IN (
  'aria.openMenu', 'aria.closeMenu', 'aria.previousTechnology', 'aria.nextTechnology',
  'hero.ctaContact', 'hero.scrollDown',
  'home.technologies.title', 'home.technologies.proficiencyLevel',
  'footer.copyright', 'footer.privacy', 'footer.terms',
  'mobile.menu', 'pages.about.ariaLabel',
  'experience.title', 'experience.keyAchievements',
  'about.fallback.journey', 'about.fallback.philosophy', 'about.fallback.toolbox',
  'about.portraitAlt', 'about.headline', 'about.keyResults.title', 'about.languages.title'
)
GROUP BY key
HAVING COUNT(DISTINCT language) < 3
ORDER BY key;

-- Expected: 0 rows (all keys should have en, ru, am)

-- ============================================================================
-- NOTES
-- ============================================================================
--
-- Translation Coverage by Section:
--
-- ARIA (Accessibility):
--   - aria.openMenu: ru, am
--   - aria.closeMenu: ru, am
--   - aria.previousTechnology: ru only
--   - aria.nextTechnology: ru only
--
-- Hero:
--   - hero.ctaContact: ru only
--   - hero.scrollDown: ru only
--
-- Home/Technologies:
--   - home.technologies.title: ru only
--   - home.technologies.proficiencyLevel: ru only
--
-- Footer:
--   - footer.copyright: en, ru
--   - footer.privacy: ru, am
--   - footer.terms: en, ru, am
--
-- Mobile:
--   - mobile.menu: ru, am
--
-- Pages:
--   - pages.about.ariaLabel: ru, am
--
-- Experience:
--   - experience.title: en, ru, am (all 3)
--   - experience.keyAchievements: en, ru, am (all 3)
--
-- About:
--   - about.fallback.journey: en, ru, am (all 3)
--   - about.fallback.philosophy: en, ru, am (all 3)
--   - about.fallback.toolbox: en, ru, am (all 3)
--   - about.portraitAlt: en, ru, am (all 3)
--   - about.headline: en, ru, am (all 3)
--   - about.keyResults.title: en, ru, am (all 3)
--   - about.languages.title: en, ru, am (all 3)
--
-- Performance:
--   - Total insertions: 49 rows
--   - Expected execution time: <100ms
--   - Safe to run multiple times (ON CONFLICT DO UPDATE)
--
-- ============================================================================
