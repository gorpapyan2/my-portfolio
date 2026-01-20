# Database Localization Setup & Missing Translation Keys Fix

## Overview

This document describes the database-driven localization system and the fixes applied to address missing Quick Facts translation keys on the About page.

## Problem Statement

The portfolio uses a **database-driven localization system** where all translations are stored in Supabase. However, certain translation keys were only present in static fallback files (`src/translations/*.ts`) but missing from the database, causing `[MISSING:...]` placeholders to appear on the frontend.

### Missing Translation Keys

The following keys were missing from the database:

1. `about.quickFacts.title` - "Quick Facts" section title
2. `about.quickFacts.location` - Location label
3. `about.quickFacts.experience` - Experience label
4. `about.quickFacts.focus` - Focus label
5. `about.quickFacts.availability` - Availability label
6. `about.quickFacts.availabilityStatus` - Default availability status text

## Solution Implemented

### 1. Database Migration Created

**File:** `supabase/migrations/20260120_add_quick_facts_translations.sql`

This migration adds all 6 missing Quick Facts translation keys across all 3 supported languages (English, Russian, Armenian), totaling 18 new database entries.

**Migration Features:**
- ✅ Idempotent (safe to run multiple times)
- ✅ Uses `ON CONFLICT DO UPDATE` for upsert behavior
- ✅ Includes verification queries
- ✅ Fully documented with rollback instructions

### 2. Seed Script Fixed

**File:** `src/scripts/seedTranslations.ts`

**Changes Made:**
- ✅ Fixed environment variable access for Node.js context
- ✅ Added main execution block to enable direct script execution
- ✅ Updated both `seedTranslations()` and `clearTranslations()` functions

**Before:**
```typescript
const serviceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || supabaseConfig.anonKey;
```

**After:**
```typescript
const serviceRoleKey = (typeof process !== 'undefined' && process.env?.VITE_SUPABASE_SERVICE_ROLE_KEY) || supabaseConfig.anonKey;
```

## How to Apply the Changes

You have **two options** to seed the missing translation keys into your Supabase database:

### Option 1: Run the Migration SQL Directly (Recommended)

1. **Via Supabase Dashboard:**
   ```bash
   # 1. Go to your Supabase project dashboard
   # 2. Navigate to: SQL Editor
   # 3. Copy the contents of: supabase/migrations/20260120_add_quick_facts_translations.sql
   # 4. Paste into the SQL editor
   # 5. Click "Run"
   ```

2. **Via Supabase CLI** (if you have it installed):
   ```bash
   # Apply the migration
   supabase db push

   # Or execute the specific migration file
   psql <your-connection-string> < supabase/migrations/20260120_add_quick_facts_translations.sql
   ```

### Option 2: Run the Seed Script

```bash
# Ensure environment variables are set
export VITE_SUPABASE_URL="your-supabase-url"
export VITE_SUPABASE_ANON_KEY="your-anon-key"

# Run the seeding script
npm run seed:translations
```

**Note:** The seed script will sync ALL translations from your static files to the database, not just the Quick Facts keys.

## Verification

After applying the migration, run these queries in Supabase SQL Editor to verify:

### 1. Check that all Quick Facts keys have 3 languages

```sql
SELECT
  key,
  COUNT(DISTINCT language) as language_count,
  array_agg(DISTINCT language ORDER BY language) as languages
FROM public.translations
WHERE key LIKE 'about.quickFacts.%'
GROUP BY key
HAVING COUNT(DISTINCT language) < 3;
```

**Expected Result:** 0 rows (all keys should have en, ru, am)

### 2. List all Quick Facts translations

```sql
SELECT
  key,
  language,
  value,
  category
FROM public.translations
WHERE key LIKE 'about.quickFacts.%'
ORDER BY key, language;
```

**Expected Result:** 18 rows (6 keys × 3 languages)

## Translation System Architecture

### Database Schema

```sql
CREATE TABLE translations (
  id UUID PRIMARY KEY,
  key TEXT NOT NULL,
  language TEXT CHECK (language IN ('en', 'ru', 'am')),
  value TEXT NOT NULL,
  category TEXT DEFAULT 'common',
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(key, language)
);
```

### How It Works

1. **Primary Source:** Supabase `translations` table (single source of truth)
2. **Fallback:** Static files in `src/translations/` (for development/offline)
3. **Admin Management:** `Admin > Translations` section in dashboard
4. **Frontend Access:** Via `useLanguage()` hook and `t(key)` function

### Key Components

```
src/
├── translations/           # Static fallback files
│   ├── en.ts              # English translations
│   ├── ru.ts              # Russian translations
│   ├── am.ts              # Armenian translations
│   └── index.ts           # Export all translations
├── context/
│   └── LanguageContext.tsx  # Language provider & t() function
├── lib/
│   └── services/
│       └── useTranslationService.ts  # DB fetching & CRUD
├── components/
│   └── shared/
│       └── TranslationText.tsx  # Smart shimmer component
└── scripts/
    └── seedTranslations.ts  # Database seeding script
```

## Managing Translations

### Via Admin Dashboard

1. Navigate to `Admin > Translations`
2. Use the **search & filter** features to find keys
3. **Add, edit, or delete** translations directly in the UI
4. **Import/Export** for bulk operations
5. **Validation panel** checks for missing or incomplete translations

### Via Static Files

1. Edit `src/translations/en.ts`, `ru.ts`, or `am.ts`
2. Run `npm run seed:translations` to sync to database
3. Changes appear immediately after seeding

### Adding New Translation Keys

**Best Practice:**

1. Add the key to all 3 static translation files:
   ```typescript
   // en.ts
   'your.new.key': 'English value',

   // ru.ts
   'your.new.key': 'Русское значение',

   // am.ts
   'your.new.key': 'Հայերեն արժեք',
   ```

2. Run the seed script to sync to database:
   ```bash
   npm run seed:translations
   ```

3. **OR** create a migration file (recommended for production):
   ```sql
   INSERT INTO translations (key, language, value, category) VALUES
     ('your.new.key', 'en', 'English value', 'category'),
     ('your.new.key', 'ru', 'Русское значение', 'category'),
     ('your.new.key', 'am', 'Հայերեն արժեք', 'category')
   ON CONFLICT (key, language) DO UPDATE SET
     value = EXCLUDED.value,
     updated_at = NOW();
   ```

## Troubleshooting

### Issue: `[MISSING:key]` appears on frontend

**Cause:** Translation key exists in code but not in database

**Solution:**
1. Check if key exists in static files (`src/translations/`)
2. If yes, run `npm run seed:translations`
3. If no, add it to static files first, then seed

### Issue: Seed script fails with network error

**Cause:** Cannot connect to Supabase from current environment

**Solution:**
- Use Option 1 (SQL migration) instead
- Run the SQL directly in Supabase dashboard

### Issue: Translations not updating after seeding

**Cause:** Frontend caching or stale data

**Solution:**
1. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
2. Clear browser cache
3. Restart development server

## Additional Resources

- **Translation Keys Reference:** See `src/translations/en.ts` for all available keys
- **Admin Dashboard:** `/admin/translations`
- **Database Migrations:** `supabase/migrations/`
- **Seed Scripts:** `src/scripts/seed*.ts`

## Current Translation Coverage

- **Total Keys:** 565+ across all categories
- **Languages:** 3 (English, Russian, Armenian)
- **Categories:** nav, hero, pages, about, blog, projects, contact, footer, settings, errors, etc.

## Recent Changes

- ✅ **2026-01-20:** Added Quick Facts translation keys (6 keys × 3 languages = 18 entries)
- ✅ **2026-01-20:** Fixed `seedTranslations.ts` to work in Node.js context
- ✅ **2026-01-20:** Added main execution block to seed script for direct execution

---

**Need Help?** Check the Admin > Translations section for a list of all available translation keys and their current values across all languages.
