# Translation Seeding Guide

## Overview

This guide explains how to seed translations for the portfolio application using the SQL seeding script. The script is designed following best practices for database seeding:

- **Idempotent**: Safe to run multiple times without creating duplicates
- **Transactional**: All changes wrapped in a transaction (all-or-nothing)
- **UPSERT Pattern**: Uses `INSERT ... ON CONFLICT` to update existing records
- **Comprehensive**: Seeds all 129+ translation keys across 3 languages (en, ru, am)
- **Well-Organized**: Grouped by category for easy maintenance

## Files

- `seed_translations.sql` - Main SQL seeding script
- This README - Usage instructions

## Translation Categories

The script seeds translations for the following categories:

1. **Navigation** (`nav.*`) - Header navigation links
2. **Hero** (`hero.*`) - Hero section content
3. **Common** (`common`) - Shared UI elements (buttons, labels)
4. **Languages** (`language.*`) - Language names
5. **Pages** (`pages.*`) - Page titles and subtitles
6. **Blog** (`blog.*`) - Blog-specific UI text
7. **Portfolio Navigation** (`portfolioNav.*`) - Portfolio section navigation
8. **Statistics** (`statistics.*`) - Statistics section
9. **About** (`about.*`) - About page sections
10. **Skills** (`skills.*`) - Skills categories and levels
11. **Contact** (`contact.*`) - Contact form and messages
12. **Footer** (`footer.*`) - Footer content
13. **Settings** (`settings.*`) - Settings page UI
14. **Technologies** (`technologies.*`) - Technologies section
15. **Projects** (`projects.*`) - Project-related UI
16. **Errors** (`errors.*`) - Error messages

## Usage Methods

### Method 1: Via Supabase CLI (Recommended)

If you have Supabase CLI installed and configured:

```bash
# Run all migrations including seed script
supabase db reset

# Or run just the seed script
supabase db execute --file supabase/migrations/seed_translations.sql
```

### Method 2: Via Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy the contents of `seed_translations.sql`
5. Paste into the editor
6. Click **Run** or press `Ctrl+Enter`

### Method 3: Via npm Script (Recommended for Development)

We've added a convenient npm script:

```bash
# Seed translations using the TypeScript seeding utility
npm run seed:translations

# Or use the direct SQL approach (if configured)
npm run db:seed:translations
```

### Method 4: Programmatic (TypeScript)

Use the existing TypeScript seeding utility:

```bash
npx tsx src/scripts/seedTranslations.ts
```

## What Gets Seeded

The script seeds **387 translation records** (129 keys × 3 languages):

- **English (en)**: 129 translations
- **Russian (ru)**: 129 translations
- **Armenian (am)**: 129 translations

### Sample Translations

```sql
-- Navigation
'nav.about' → 'About' / 'О себе' / 'Իմ մասին'
'nav.work' → 'Work' / 'Работы' / 'Աշխատանքներ'

-- Hero
'hero.title' → 'QA Automation Specialist' / 'Специалист по автоматизации QA' / 'QA Ավտոմատացման Մասնագետ'

-- Common
'loading' → 'Loading...' / 'Загрузка...' / 'Բեռնվում է...'
'save' → 'Save' / 'Сохранить' / 'Պահպանել'
```

## Verification

After running the script, verify the seeding was successful:

```sql
-- Check total translations by category
SELECT 
  category, 
  COUNT(*) as total_translations,
  COUNT(DISTINCT key) as unique_keys,
  COUNT(DISTINCT language) as languages
FROM translations
GROUP BY category
ORDER BY category;

-- Expected output:
-- category       | total_translations | unique_keys | languages
-- about          | 24                 | 8           | 3
-- blog           | 48                 | 16          | 3
-- common         | 36                 | 12          | 3
-- contact        | 30                 | 10          | 3
-- errors         | 6                  | 2           | 3
-- footer         | 6                  | 2           | 3
-- hero           | 18                 | 6           | 3
-- language       | 9                  | 3           | 3
-- nav            | 21                 | 7           | 3
-- pages          | 36                 | 12          | 3
-- portfolioNav   | 24                 | 8           | 3
-- projects       | 9                  | 3           | 3
-- settings       | 60                 | 20          | 3
-- skills         | 36                 | 12          | 3
-- statistics     | 15                 | 5           | 3
-- technologies   | 18                 | 6           | 3
```

```sql
-- Check for missing translations (should return 0 rows)
WITH all_keys AS (
  SELECT DISTINCT key FROM translations
),
all_languages AS (
  SELECT unnest(ARRAY['en', 'ru', 'am']) as language
)
SELECT 
  ak.key,
  al.language
FROM all_keys ak
CROSS JOIN all_languages al
LEFT JOIN translations t ON t.key = ak.key AND t.language = al.language
WHERE t.id IS NULL;
```

## Updating Translations

### Adding New Translations

To add new translation keys:

1. Add the new keys to the SQL script in the appropriate category section
2. Follow the existing pattern:
   ```sql
   INSERT INTO translations (key, language, value, category) VALUES
     ('new.key', 'en', 'English Value', 'category'),
     ('new.key', 'ru', 'Russian Value', 'category'),
     ('new.key', 'am', 'Armenian Value', 'category')
   ON CONFLICT (key, language) 
   DO UPDATE SET 
     value = EXCLUDED.value,
     category = EXCLUDED.category,
     updated_at = NOW();
   ```
3. Re-run the script (it's idempotent, so safe to run multiple times)

### Modifying Existing Translations

1. Update the values in the SQL script
2. Re-run the script - the `ON CONFLICT` clause will update existing records
3. The `updated_at` timestamp will be automatically updated

## Best Practices

1. **Always use transactions**: The script wraps everything in `BEGIN...COMMIT`
2. **Test locally first**: Run on a development database before production
3. **Backup before seeding**: Take a database backup before running on production
4. **Version control**: Keep the SQL script in version control
5. **Document changes**: Add comments when modifying the script
6. **Verify after seeding**: Always run verification queries after seeding

## Troubleshooting

### Error: "duplicate key value violates unique constraint"

This shouldn't happen with the current script (uses `ON CONFLICT`), but if it does:
- Check if you're running an old version of the script
- Ensure the `ON CONFLICT` clause is present

### Error: "permission denied for table translations"

- Ensure you're using the service role key (for seeding scripts)
- Check RLS policies allow authenticated users to write

### Error: "relation translations does not exist"

- Run the initial schema migration first: `20241014225600_initial_schema.sql`
- Ensure the `translations` table exists

### Translations not appearing in the app

1. Check the database:
   ```sql
   SELECT * FROM translations WHERE key = 'nav.about';
   ```
2. Clear the app cache and reload
3. Check browser console for errors
4. Verify the `useTranslationService` hook is fetching correctly

## Integration with TypeScript Seeding

The SQL script complements the TypeScript seeding utility (`src/scripts/seedTranslations.ts`):

- **SQL Script**: Fast, direct database seeding (recommended for initial setup)
- **TypeScript Script**: Programmatic seeding with validation (recommended for development)

Both methods are idempotent and produce the same result.

## Related Documentation

- [README.md](../../README.md) - Main project documentation
- [Translation Management](../../README.md#-translation-management) - Admin interface guide
- [i18n Architecture](../../README.md#-i18n-architecture-db-only) - Translation system overview

## Support

For issues or questions:
- Check the [main README](../../README.md)
- Review the [Supabase documentation](https://supabase.com/docs)
- Contact: gorpapyan2@gmail.com
