# Translation Seeding - Quick Reference Card

## 🚀 Quick Commands

```bash
# Seed all translations (TypeScript)
npm run seed:translations

# Seed via SQL (Supabase CLI)
supabase db execute --file supabase/migrations/seed_translations.sql

# Seed everything
npm run seed:all
```

## 📊 By The Numbers

- **Total Keys**: 129
- **Total Records**: 387 (129 × 3 languages)
- **Languages**: English (en), Russian (ru), Armenian (am)
- **Categories**: 16

## 📁 Key Files

| File | Purpose |
|------|---------|
| `supabase/migrations/seed_translations.sql` | SQL seeding script |
| `supabase/migrations/README_SEED_TRANSLATIONS.md` | Full documentation |
| `src/scripts/seedTranslations.ts` | TypeScript seeding script |
| `TRANSLATION_SEEDING_SUMMARY.md` | Overview & summary |

## 🗂️ Translation Categories

```
nav          → Navigation (7 keys)
hero         → Hero section (6 keys)
common       → Shared UI (12 keys)
language     → Language names (3 keys)
pages        → Page titles (12 keys)
blog         → Blog UI (16 keys)
portfolioNav → Portfolio nav (8 keys)
statistics   → Statistics (5 keys)
about        → About page (8 keys)
skills       → Skills (12 keys)
contact      → Contact form (10 keys)
footer       → Footer (2 keys)
settings     → Settings UI (20 keys)
technologies → Tech section (6 keys)
projects     → Projects UI (3 keys)
errors       → Error messages (2 keys)
```

## ✅ Verification Query

```sql
SELECT 
  category, 
  COUNT(*) as total,
  COUNT(DISTINCT key) as keys,
  COUNT(DISTINCT language) as langs
FROM translations
GROUP BY category
ORDER BY category;
```

**Expected**: 16 rows, 387 total, 129 unique keys, 3 languages each

## 🔍 Useful Queries

```sql
-- Count all translations
SELECT COUNT(*) FROM translations;

-- Find missing translations
SELECT key, language 
FROM translations 
WHERE value = '' OR value IS NULL;

-- Check specific key
SELECT * FROM translations WHERE key = 'nav.about';

-- List all keys in a category
SELECT DISTINCT key FROM translations WHERE category = 'nav';

-- Find untranslated keys (missing languages)
SELECT key, COUNT(DISTINCT language) as lang_count
FROM translations
GROUP BY key
HAVING COUNT(DISTINCT language) < 3;
```

## 🎯 Common Translation Keys

### Navigation
```
nav.about    nav.work     nav.blog
nav.contact  nav.admin    nav.settings
```

### Hero
```
hero.title       hero.subtitle    hero.downloadCV
hero.proof1      hero.proof2      hero.proof3
```

### Common
```
loading    error      success
save       cancel     delete
edit       add        close
```

### Pages
```
pages.home.title              pages.about.title
pages.work.title              pages.blog.title
pages.contact.title           pages.home.featuredProjects
pages.home.latestArticles
```

## 🛠️ Adding New Translations

### SQL Method
```sql
INSERT INTO translations (key, language, value, category) VALUES
  ('new.key', 'en', 'English Value', 'category'),
  ('new.key', 'ru', 'Russian Value', 'category'),
  ('new.key', 'am', 'Armenian Value', 'category')
ON CONFLICT (key, language) 
DO UPDATE SET 
  value = EXCLUDED.value,
  updated_at = NOW();
```

### TypeScript Method
```typescript
// Add to src/translations/en.ts, ru.ts, am.ts
'new.key': 'Translation value',

// Then run
npm run seed:translations
```

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Duplicate key error | Use `ON CONFLICT` clause |
| Permission denied | Use service role key |
| Table doesn't exist | Run initial migration first |
| Translations not showing | Clear cache, check service |

## 📝 Translation Naming Convention

```
category.subcategory.item
│        │           │
│        │           └─ Specific item
│        └─────────────── Subcategory (optional)
└──────────────────────── Main category
```

**Examples**:
- `nav.about` → Navigation → About
- `hero.proof1` → Hero → Proof point 1
- `pages.home.title` → Pages → Home → Title
- `blog.error.retry` → Blog → Error → Retry button

## 🌐 Language Codes

| Code | Language | Native Name |
|------|----------|-------------|
| `en` | English | English |
| `ru` | Russian | Русский |
| `am` | Armenian | Հայերեն |

## 🔐 Database Schema

```sql
CREATE TABLE translations (
  id UUID PRIMARY KEY,
  key TEXT NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('en', 'ru', 'am')),
  value TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(key, language)
);
```

## 🎨 Usage in Components

```typescript
// Using the translation hook
import { useLanguage } from '@/context/LanguageContext';

const { t } = useLanguage();

// In JSX
<h1>{t('hero.title')}</h1>
<button>{t('common.save')}</button>
```

## 📦 Seeding Order

```bash
1. npm run seed:translations  # First - UI text
2. npm run seed:blog          # Blog posts
3. npm run seed:projects      # Projects
4. npm run seed:experiences   # Work history
5. npm run seed:education     # Education
6. npm run seed:skills        # Skills
7. npm run seed:flags         # Feature flags
```

Or all at once:
```bash
npm run seed:all
```

## 🚨 Important Notes

- ✅ Script is **idempotent** (safe to run multiple times)
- ✅ Uses **transactions** (all-or-nothing)
- ✅ Automatically updates `updated_at` timestamp
- ⚠️ Requires **service role key** for seeding
- ⚠️ Always **backup** before running on production

## 📞 Support

- **Email**: gorpapyan2@gmail.com
- **Docs**: [README.md](README.md)
- **Supabase**: [Dashboard](https://supabase.com/dashboard)

---

**Version**: 1.0.0 | **Last Updated**: January 2026
