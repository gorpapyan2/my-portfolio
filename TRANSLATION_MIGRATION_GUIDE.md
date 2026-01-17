# Translation Migration Guide

This guide explains the i18n translation migration process for adding missing translations and migrating from 'am' to 'hy' language code.

## Background

### Language Code Issue

The application currently uses `am` as the language code for Armenian, but the ISO 639-1 standard code for Armenian is `hy`. This causes a discrepancy when querying for missing translations.

**Current Schema:**
- `en` - English
- `ru` - Russian
- `am` - Armenian (non-standard)

**After Migration:**
- `en` - English
- `ru` - Russian
- `am` - Armenian (legacy, maintained for compatibility)
- `hy` - Armenian (ISO 639-1 standard, preferred)

## Migration Files

### 1. SQL Migrations

#### `20260117_add_all_missing_i18n_translations.sql`
- Adds 61 missing translation entries
- Covers admin, about, experience, footer, aria, hero, and home sections
- Works with existing 'am' language code

#### `20260117_add_hy_language_support.sql`
- Updates database schema to support 'hy' language code
- Modifies CHECK constraints on all translation tables
- Adds comments explaining language codes
- **Run this FIRST before data migration**

### 2. TypeScript Migration Scripts

#### `src/scripts/addMissingTranslations.ts`
- Adds all missing translations programmatically
- Uses Supabase client
- Includes duplicate detection and verification
- Run with: `pnpm run migration:add-missing`

#### `src/scripts/addLanguageCodeHy.ts`
- Migrates 'am' translations to 'hy' language code
- Copies all existing 'am' entries to 'hy'
- Includes progress tracking and verification
- Run with: `pnpm run migration:add-hy-language`

## Migration Steps

### Option A: Quick Fix (Keep 'am' code)

If you want to keep using 'am' and just add missing translations:

```bash
# 1. Apply missing translations SQL migration
psql -d your_database -f supabase/migrations/20260117_add_all_missing_i18n_translations.sql

# OR use TypeScript script
pnpm run migration:add-missing
```

### Option B: Full Migration (Migrate to 'hy')

If you want to adopt the ISO standard 'hy' code:

```bash
# 1. First, update the database schema
psql -d your_database -f supabase/migrations/20260117_add_hy_language_support.sql

# 2. Then, migrate data from 'am' to 'hy'
pnpm run migration:add-hy-language

# 3. Add any missing translations
pnpm run migration:add-missing

# 4. Update application code to use 'hy' (see below)
```

## Code Updates for 'hy' Support

After running the migrations, update your TypeScript code:

### 1. Update Type Definitions

```typescript
// Before
type Language = 'en' | 'ru' | 'am';

// After
type Language = 'en' | 'ru' | 'am' | 'hy';
// Or prefer 'hy' only:
type Language = 'en' | 'ru' | 'hy';
```

### 2. Update Language Context

```typescript
// src/lib/contexts/LanguageContext.tsx
const SUPPORTED_LANGUAGES = ['en', 'ru', 'hy'] as const;
```

### 3. Update Translation Services

```typescript
// src/lib/services/useTranslationService.ts
const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({
  en: {},
  ru: {},
  hy: {} // Changed from 'am'
});
```

### 4. Update Seed Scripts

```typescript
// src/scripts/seedTranslations.ts
interface TranslationSeed {
  key: string;
  language: 'en' | 'ru' | 'hy'; // Changed from 'am'
  value: string;
  category: string;
}
```

## Verification

After migration, verify success:

```sql
-- Check language distribution
SELECT language, COUNT(*) as count
FROM translations
GROUP BY language
ORDER BY language;

-- Expected output:
-- en  | 250+
-- ru  | 250+
-- am  | 250+ (if keeping legacy)
-- hy  | 250+ (new standard)

-- Check for missing translations
SELECT key, language
FROM (
  SELECT DISTINCT key FROM translations
) keys
CROSS JOIN (SELECT unnest(ARRAY['en', 'ru', 'hy']) as language) languages
WHERE NOT EXISTS (
  SELECT 1 FROM translations t
  WHERE t.key = keys.key AND t.language = languages.language
);
```

## Rollback

### Rollback Schema Changes

```sql
-- Remove 'hy' support
ALTER TABLE public.translations
  DROP CONSTRAINT translations_language_check,
  ADD CONSTRAINT translations_language_check
  CHECK (language IN ('en', 'ru', 'am'));

-- Repeat for other tables:
-- blog_post_translations
-- technology_translations
-- technology_category_translations
```

### Remove 'hy' Data

```sql
-- CAUTION: This deletes all 'hy' translations
DELETE FROM translations WHERE language = 'hy';
DELETE FROM blog_post_translations WHERE language = 'hy';
DELETE FROM technology_translations WHERE language = 'hy';
DELETE FROM technology_category_translations WHERE language = 'hy';
```

## Troubleshooting

### Issue: "language" violates check constraint

**Cause:** Trying to insert 'hy' before running schema migration

**Solution:** Run the schema migration SQL first:
```bash
psql -d your_database -f supabase/migrations/20260117_add_hy_language_support.sql
```

### Issue: Duplicate key violation

**Cause:** Translation already exists for that key/language combination

**Solution:** The migration scripts handle this automatically with duplicate detection. If using raw SQL, use `ON CONFLICT DO UPDATE`.

### Issue: Missing translations still showing

**Cause:** Application code may still be looking for 'am' translations

**Solution:** Update application code to use 'hy' (see Code Updates section above)

## Best Practices

1. **Backup First**: Always backup your database before running migrations
2. **Test in Staging**: Run migrations in a staging environment first
3. **Gradual Rollout**: Consider keeping both 'am' and 'hy' during transition period
4. **Update Docs**: Update API documentation to reflect new language codes
5. **Monitor**: Check application logs for missing translation warnings after migration

## Future Deprecation of 'am'

Once fully migrated to 'hy', you can deprecate 'am':

1. Remove 'am' from CHECK constraints (6-12 months after migration)
2. Delete 'am' translations
3. Remove 'am' from TypeScript types
4. Update documentation

## Questions?

For issues or questions about the migration:
- Check the migration script comments
- Review verification queries in SQL files
- Check application logs for translation errors
