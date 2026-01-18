# Phase 1 Migration Instructions

## 🎯 Goal
Add Russian and Armenian translations for 35 existing English-only translation keys.

---

## 📋 Prerequisites

- Access to Supabase Dashboard at https://supabase.com
- Project URL: `https://ocsoqppieozakfmjrrsh.supabase.co`

---

## 🚀 Step-by-Step Instructions

### Step 1: Open Supabase Dashboard

1. Go to https://supabase.com and log in
2. Select your project: `ocsoqppieozakfmjrrsh`

### Step 2: Navigate to SQL Editor

1. In the left sidebar, click on **SQL Editor** (icon looks like `</>`)
2. Click **New Query** button (top right)

### Step 3: Copy the Migration SQL

Open the file: **`supabase/migrations/20260115_add_missing_ru_am_translations.sql`**

You have two options:

**Option A: Copy the entire file** (Recommended)
```bash
# From your terminal, cat the file:
cat supabase/migrations/20260115_add_missing_ru_am_translations.sql
```

**Option B: Use the SQL directly** (see Step 4)

### Step 4: Paste and Run the SQL

1. Paste the SQL from the migration file into the SQL Editor
2. Click **Run** (or press `Ctrl+Enter` / `Cmd+Enter`)
3. Wait for execution to complete (should take 2-3 seconds)

**Expected Output:**
```
Success. No rows returned.
```

OR

```
INSERT 0 70
```

This means 70 translations were inserted (35 keys × 2 languages: RU + AM)

### Step 5: Verify the Migration

Run this verification query in the SQL Editor:

```sql
-- Count translations per language for the migrated keys
SELECT language, COUNT(*) as count
FROM translations
WHERE key LIKE 'admin.login.%'
   OR key = 'auth.checkingAuthentication'
   OR key LIKE 'error.%'
   OR key LIKE 'pages.notFound.%'
   OR key LIKE 'pages.sectionUnavailable.%'
   OR key LIKE 'author.%'
GROUP BY language
ORDER BY language;
```

**Expected Output:**
| language | count |
|----------|-------|
| am       | 35    |
| en       | 35    |
| ru       | 35    |

✅ If you see all three languages with 35 records each, the migration was successful!

### Step 6: Check for Missing Translations (Optional)

Run this query to ensure no keys are missing any language:

```sql
-- Find keys that don't have all 3 languages
SELECT key,
       COUNT(*) as language_count,
       STRING_AGG(language, ', ' ORDER BY language) as languages_present
FROM translations
WHERE key LIKE 'admin.login.%'
   OR key = 'auth.checkingAuthentication'
   OR key LIKE 'error.%'
   OR key LIKE 'pages.notFound.%'
   OR key LIKE 'pages.sectionUnavailable.%'
   OR key LIKE 'author.%'
GROUP BY key
HAVING COUNT(*) < 3
ORDER BY key;
```

**Expected Output:**
```
0 rows
```

✅ If you get 0 rows, all keys have all 3 languages!

---

## 🧪 Testing the Migration

### Test 1: Admin Login Page

1. Open your app: https://ocsoqppieozakfmjrrsh.supabase.co (or your deployed URL)
2. Navigate to `/admin/login`
3. Switch to Russian (RU) - you should see "Вход для администратора"
4. Switch to Armenian (AM) - you should see "Ադմինի մուտք"

### Test 2: Error Messages

1. Disconnect your internet or trigger an error
2. You should see error messages in the selected language

### Test 3: 404 Page

1. Navigate to a non-existent page (e.g., `/this-does-not-exist`)
2. Switch languages - title should change:
   - EN: "Page Not Found"
   - RU: "Страница не найдена"
   - AM: "Էջը չի գտնվել"

### Test 4: Author Bio

1. Go to a blog post page
2. Switch languages - author name should change:
   - EN: "Gor Papyan"
   - RU: "Гор Папян"
   - AM: "Գոր Պապյան"

---

## ⚠️ Troubleshooting

### Issue: "Duplicate key value violates unique constraint"

**Cause:** Some translations already exist
**Solution:** This is fine! The migration uses `ON CONFLICT ... DO UPDATE`, so it will update existing records. Just continue.

### Issue: "Permission denied for table translations"

**Cause:** Your database user doesn't have write permissions
**Solution:** Make sure you're running the query in the Supabase Dashboard (which uses the service role key automatically)

### Issue: "Translations not showing in the app"

**Possible causes:**
1. **Browser cache** - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **App not fetching from DB** - Check browser console for errors
3. **Translation service error** - Check if translations are actually in the DB using the verification queries

---

## 📊 What Was Added?

### Summary

- **Total Records Added:** 70
  - Russian (ru): 35 translations
  - Armenian (am): 35 translations

### By Category

| Category | Keys | Description |
|----------|------|-------------|
| admin | 9 | Admin login page (title, subtitle, labels, buttons) |
| auth | 1 | Authentication status message |
| error | 12 | Error messages (unexpected, retry, go home, language load failed, etc.) |
| pages | 7 | 404 page + section unavailable messages |
| author | 6 | Author bio (name, role, location, experience, bio text) |
| **Total** | **35** | **Unique keys** |

### Sample Keys Added

**Admin Login:**
- `admin.login.title`: "Вход для администратора" (RU), "Ադմինի մուտք" (AM)
- `admin.login.signIn`: "Войти" (RU), "Մուտք գործել" (AM)

**Errors:**
- `error.unexpected.title`: "Упс! Произошла непредвиденная ошибка" (RU), "Վայ! Անսպասելի սխալ է տեղի ունեցել" (AM)
- `error.retry`: "Попробовать снова" (RU), "Փորձել կրկին" (AM)

**404 Page:**
- `pages.notFound.title`: "Страница не найдена" (RU), "Էջը չի գտնվել" (AM)

**Author:**
- `author.name`: "Гор Папян" (RU), "Գոր Պապյան" (AM)

---

## ✅ Success Criteria

After completing this migration:

- [ ] SQL ran without errors in Supabase Dashboard
- [ ] Verification queries show 35 records for each language (en, ru, am)
- [ ] Admin login page displays in RU/AM when language is switched
- [ ] Error messages appear in RU/AM
- [ ] 404 page is localized
- [ ] Author bio shows localized name and bio

---

## 🎯 Next Steps After Migration

Once Phase 1 is complete, we can move to:

**Phase 2:** Refactor ErrorScreen.tsx to use translation keys (1-2 hours)
**Phase 3:** Migrate Admin Dashboard (2-3 days)
**Phase 4:** Migrate UI Components (1-2 days)

---

## 📞 Need Help?

If you encounter any issues:

1. Check the Supabase Dashboard logs
2. Run the verification queries to see what's in the database
3. Check browser console for JavaScript errors
4. Let me know and I can help debug!

---

**Migration Status:** ⏳ Ready to Execute
**Risk Level:** ✅ Very Low (read-only tables not affected, idempotent)
**Estimated Time:** ⏱️ 5 minutes
