# Phase 3 - Stage 1: Common Admin Strings Migration

## 🎯 Goal
Add 29 reusable translation keys that will be used across ALL admin pages.

**Impact:** Once complete, ~30% of admin hardcoded strings can use these common keys!

---

## 📊 What's Being Added

| Category | Keys | Examples |
|----------|------|----------|
| **Buttons & Actions** | 8 | Cancel, Add, Create, Update, Delete, Save, Edit, Close |
| **States** | 5 | Loading..., Saving..., Saved, Uploading..., Processing... |
| **Form Labels** | 4 | Title, Description, Order Index, Required |
| **Messages** | 11 | Delete confirmations, error messages, success messages |
| **Dashboard** | 1 | Logout |
| **TOTAL** | **29 keys** | **87 translations** (29 × 3 languages) |

---

## 🚀 Apply Migration (Same as Phase 1)

### Step 1: Open Supabase Dashboard
1. Go to https://supabase.com
2. Select your project: `ocsoqppieozakfmjrrsh`

### Step 2: Open SQL Editor
1. Click **SQL Editor** in left sidebar
2. Click **New Query**

### Step 3: Copy & Run SQL
```bash
# View the SQL file:
cat supabase/migrations/20260115_add_common_admin_strings.sql

# Then paste into Supabase SQL Editor and click "Run"
```

### Step 4: Verify Success
Run this query:
```sql
SELECT language, COUNT(*) as count
FROM translations
WHERE key LIKE 'admin.common.%'
GROUP BY language
ORDER BY language;
```

**Expected Result:**
| language | count |
|----------|-------|
| am       | 29    |
| en       | 29    |
| ru       | 29    |

✅ **Success!** All common admin strings are in place.

---

## 📋 Common Keys Reference

### Buttons & Actions
```typescript
t('admin.common.cancel')    // "Cancel" / "Отмена" / "Չեղարկել"
t('admin.common.add')       // "Add" / "Добавить" / "Ավելացնել"
t('admin.common.create')    // "Create" / "Создать" / "Ստեղծել"
t('admin.common.update')    // "Update" / "Обновить" / "Թարմացնել"
t('admin.common.delete')    // "Delete" / "Удалить" / "Ջնջել"
t('admin.common.save')      // "Save" / "Сохранить" / "Պահպանել"
t('admin.common.edit')      // "Edit" / "Редактировать" / "Խմբագրել"
t('admin.common.close')     // "Close" / "Закрыть" / "Փակել"
```

### States
```typescript
t('admin.common.loading')     // "Loading..." / "Загрузка..." / "Բեռնում..."
t('admin.common.saving')      // "Saving..." / "Сохранение..." / "Պահպանում..."
t('admin.common.saved')       // "Saved" / "Сохранено" / "Պահպանված է"
t('admin.common.uploading')   // "Uploading..." / "Загрузка файла..." / "Վերբեռնում..."
t('admin.common.processing')  // "Processing..." / "Обработка..." / "Մշակում..."
```

### Form Labels
```typescript
t('admin.common.form.title')        // "Title" / "Название" / "Վերնագիր"
t('admin.common.form.description')  // "Description" / "Описание" / "Նկարագրություն"
t('admin.common.form.orderIndex')   // "Order Index" / "Порядковый номер" / "Հերթական համար"
t('admin.common.form.required')     // "Required" / "Обязательное" / "Պարտադիր"
```

### Messages
```typescript
// Confirmations
t('admin.common.confirm.delete')
// "Are you sure you want to delete this item?"

t('admin.common.confirm.unsavedChanges')
// "You have unsaved changes. Are you sure you want to leave?"

// Errors
t('admin.common.error.deleteFailed')  // "Failed to delete item"
t('admin.common.error.saveFailed')    // "Failed to save changes"
t('admin.common.error.loadFailed')    // "Failed to load data"

// Success
t('admin.common.success.saved')    // "Changes saved successfully"
t('admin.common.success.deleted')  // "Item deleted successfully"
t('admin.common.success.created')  // "Item created successfully"
```

### Dashboard
```typescript
t('admin.common.logout')  // "Logout" / "Выйти" / "Դուրս գալ"
```

---

## 🎯 Usage Examples

### Example 1: Cancel Button
```tsx
// BEFORE
<button onClick={onCancel}>Cancel</button>

// AFTER
<button onClick={onCancel}>{t('admin.common.cancel')}</button>
```

### Example 2: Loading State
```tsx
// BEFORE
{isLoading && <div>Loading...</div>}

// AFTER
{isLoading && <div>{t('admin.common.loading')}</div>}
```

### Example 3: Delete Confirmation
```tsx
// BEFORE
if (confirm("Are you sure you want to delete this item?")) {
  deleteItem();
}

// AFTER
if (confirm(t('admin.common.confirm.delete'))) {
  deleteItem();
}
```

### Example 4: Form Label
```tsx
// BEFORE
<label>Title</label>

// AFTER
<label>{t('admin.common.form.title')}</label>
```

---

## ⏭️ Next Steps After Migration

Once this migration is complete:

1. ✅ **Verify** translations are in database
2. 🔧 **Refactor** one admin page to use these keys (recommended: SkillsAdmin.tsx)
3. 📝 **Apply pattern** to remaining admin pages
4. 🧪 **Test** admin interface in all 3 languages

---

## 📦 What Gets Unlocked

After applying these common strings, you'll be able to migrate admin pages MUCH faster because:
- **Cancel buttons** already localized (used in every form)
- **Loading states** already localized (used in every page)
- **Form labels** already localized (Title, Description, Order Index)
- **Error messages** already localized (delete failed, save failed)
- **Confirmation dialogs** already localized (delete confirmation)

This creates a **reusable foundation** for all admin page migrations! 🎉

---

**Ready?** Apply this migration in Supabase Dashboard, then we'll refactor one admin page together!
