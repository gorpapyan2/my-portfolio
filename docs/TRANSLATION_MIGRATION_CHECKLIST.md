# Translation Migration Checklist

Use this checklist when setting up translations for the first time or migrating to a new environment.

## Pre-Migration

### ✅ Prerequisites

- [ ] Supabase project created
- [ ] Database connection established
- [ ] Service role key obtained (for seeding)
- [ ] `.env` file configured with credentials
- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)

### ✅ Environment Setup

```bash
# Check environment variables
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

- [ ] `VITE_SUPABASE_URL` set correctly
- [ ] `VITE_SUPABASE_ANON_KEY` set correctly
- [ ] `VITE_SUPABASE_SERVICE_ROLE_KEY` set correctly (for seeding)

### ✅ Database Schema

- [ ] Initial schema migration run (`20241014225600_initial_schema.sql`)
- [ ] `translations` table exists
- [ ] Indexes created on `key`, `language`, `category`
- [ ] RLS policies enabled
- [ ] `updated_at` trigger created

**Verify with**:
```sql
SELECT EXISTS (
  SELECT FROM information_schema.tables 
  WHERE table_schema = 'public' 
  AND table_name = 'translations'
);
```

## Migration Steps

### Step 1: Backup (Production Only)

- [ ] Export existing translations (if any)
  ```sql
  COPY translations TO '/tmp/translations_backup.csv' CSV HEADER;
  ```
- [ ] Save backup file to safe location
- [ ] Document backup timestamp and location

### Step 2: Choose Seeding Method

**Option A: SQL Script (Recommended)**
- [ ] Locate `supabase/migrations/seed_translations.sql`
- [ ] Review script contents
- [ ] Run via Supabase CLI:
  ```bash
  supabase db execute --file supabase/migrations/seed_translations.sql
  ```
- [ ] Or run via Supabase Dashboard SQL Editor

**Option B: TypeScript Script**
- [ ] Locate `src/scripts/seedTranslations.ts`
- [ ] Review script contents
- [ ] Run via npm:
  ```bash
  npm run seed:translations
  ```

**Option C: Manual Import**
- [ ] Export translations to JSON
- [ ] Use Settings page import feature
- [ ] Upload JSON file

### Step 3: Verify Seeding

- [ ] Check total count (should be 387):
  ```sql
  SELECT COUNT(*) FROM translations;
  ```

- [ ] Verify all categories present (should be 16):
  ```sql
  SELECT DISTINCT category FROM translations ORDER BY category;
  ```

- [ ] Check language distribution (should be 129 each):
  ```sql
  SELECT language, COUNT(*) FROM translations GROUP BY language;
  ```

- [ ] Find missing translations (should return 0 rows):
  ```sql
  SELECT key, COUNT(DISTINCT language) as lang_count
  FROM translations
  GROUP BY key
  HAVING COUNT(DISTINCT language) < 3;
  ```

### Step 4: Test Application

- [ ] Start development server (`npm run dev`)
- [ ] Navigate to homepage
- [ ] Check all navigation links display correctly
- [ ] Switch between languages (EN/RU/AM)
- [ ] Verify no `[missing:key]` text appears
- [ ] Check browser console for errors
- [ ] Test all major pages:
  - [ ] Home page
  - [ ] About page
  - [ ] Work page
  - [ ] Blog page
  - [ ] Contact page
  - [ ] Settings page (if admin)

### Step 5: Admin Interface Test

- [ ] Log in as admin
- [ ] Navigate to Settings page (`/settings`)
- [ ] Verify translations load correctly
- [ ] Test search functionality
- [ ] Test category filtering
- [ ] Try editing a translation
- [ ] Try adding a new translation
- [ ] Try deleting a translation (optional)
- [ ] Export translations to JSON
- [ ] Verify export file is valid

## Post-Migration

### ✅ Documentation

- [ ] Update team documentation with new translation keys
- [ ] Document any custom translations added
- [ ] Update README if needed
- [ ] Share migration results with team

### ✅ Monitoring

- [ ] Set up error monitoring for translation failures
- [ ] Monitor `useTranslationService` errors in logs
- [ ] Check for `[missing:key]` in production
- [ ] Set up alerts for translation API failures

### ✅ Cleanup

- [ ] Remove backup files (after verification)
- [ ] Clear any temporary files
- [ ] Update git repository with any changes
- [ ] Tag release if applicable

## Rollback Plan

If something goes wrong, follow these steps:

### Emergency Rollback

1. **Stop the application** (if in production)
   ```bash
   # Stop the server
   ```

2. **Restore from backup**
   ```sql
   -- Delete current translations
   DELETE FROM translations;
   
   -- Restore from backup
   COPY translations FROM '/tmp/translations_backup.csv' CSV HEADER;
   ```

3. **Verify restoration**
   ```sql
   SELECT COUNT(*) FROM translations;
   ```

4. **Restart application**

5. **Investigate issue**
   - Check error logs
   - Review migration script
   - Test in development environment

## Troubleshooting

### Issue: "Table doesn't exist"

**Solution**:
```bash
# Run initial schema migration
supabase db execute --file supabase/migrations/20241014225600_initial_schema.sql
```

### Issue: "Permission denied"

**Solution**:
- Ensure using service role key (not anon key)
- Check RLS policies allow authenticated writes
- Verify user has admin privileges

### Issue: "Duplicate key violation"

**Solution**:
- Script should handle this with `ON CONFLICT`
- If error persists, check for old version of script
- Manually delete duplicates:
  ```sql
  DELETE FROM translations a USING translations b
  WHERE a.id > b.id AND a.key = b.key AND a.language = b.language;
  ```

### Issue: "Translations not appearing in app"

**Solution**:
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R)
3. Check browser console for errors
4. Verify `useTranslationService` is fetching correctly
5. Check network tab for API calls
6. Verify RLS policies allow public read

### Issue: "Wrong language displayed"

**Solution**:
1. Check localStorage for saved language preference
2. Clear localStorage: `localStorage.clear()`
3. Verify language selector is working
4. Check `LanguageContext` state

## Validation Queries

Run these queries to ensure everything is correct:

### 1. Total Count
```sql
SELECT COUNT(*) as total FROM translations;
-- Expected: 387
```

### 2. Category Breakdown
```sql
SELECT 
  category, 
  COUNT(*) as total,
  COUNT(DISTINCT key) as unique_keys,
  COUNT(DISTINCT language) as languages
FROM translations
GROUP BY category
ORDER BY category;
-- Expected: 16 categories, 3 languages each
```

### 3. Language Distribution
```sql
SELECT 
  language, 
  COUNT(*) as count 
FROM translations 
GROUP BY language;
-- Expected: en=129, ru=129, am=129
```

### 4. Missing Translations
```sql
SELECT key, COUNT(DISTINCT language) as lang_count
FROM translations
GROUP BY key
HAVING COUNT(DISTINCT language) < 3;
-- Expected: 0 rows
```

### 5. Empty Values
```sql
SELECT * FROM translations 
WHERE value = '' OR value IS NULL;
-- Expected: 0 rows
```

### 6. Recent Updates
```sql
SELECT key, language, updated_at 
FROM translations 
ORDER BY updated_at DESC 
LIMIT 10;
-- Check if timestamps are recent
```

## Performance Checks

### Query Performance
```sql
EXPLAIN ANALYZE
SELECT value FROM translations 
WHERE key = 'nav.about' AND language = 'en';
-- Should use index, execution time < 1ms
```

### Index Usage
```sql
SELECT 
  schemaname,
  tablename,
  indexname,
  idx_scan as index_scans
FROM pg_stat_user_indexes
WHERE tablename = 'translations';
-- Verify indexes are being used
```

## Success Criteria

Migration is successful when:

- ✅ All 387 translations seeded correctly
- ✅ All 16 categories present
- ✅ All 3 languages have equal counts (129 each)
- ✅ No missing or empty translations
- ✅ Application displays all text correctly
- ✅ Language switching works smoothly
- ✅ No `[missing:key]` errors in console
- ✅ Admin interface loads and functions properly
- ✅ Performance is acceptable (< 100ms for translation lookups)

## Sign-Off

- [ ] Migration completed successfully
- [ ] All verification checks passed
- [ ] Application tested and working
- [ ] Team notified of completion
- [ ] Documentation updated

**Migrated By**: _________________  
**Date**: _________________  
**Environment**: [ ] Development [ ] Staging [ ] Production  
**Notes**: 

---

## Quick Reference

**Seed Command**: `npm run seed:translations`  
**Verify Count**: `SELECT COUNT(*) FROM translations;` (expect 387)  
**Check Categories**: `SELECT DISTINCT category FROM translations;` (expect 16)  
**Test App**: `npm run dev` → Check all pages → Switch languages

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Status**: ✅ Ready for Use
