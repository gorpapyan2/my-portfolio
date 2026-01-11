# Hardcoded Text Identification - Executive Summary

**Date:** January 11, 2026  
**Analyst:** AI Assistant  
**Project:** Gor Papyan Portfolio

---

## Overview

Despite the portfolio's claim of being fully internationalized with a Supabase-backed translation system, **significant hardcoded English text remains** throughout the codebase.

---

## Key Statistics

| Metric | Count |
|--------|-------|
| **Files with hardcoded text** | 30+ |
| **Total hardcoded strings** | ~155 |
| **Translation keys needed** | ~100 |
| **Categories affected** | 10 |
| **Critical user-facing strings** | ~35 |

---

## Impact Assessment

### User Experience Impact: **HIGH**

- **Non-English users** see English text in critical areas:
  - Error messages
  - 404 page
  - Admin login
  - Section unavailable messages
  
### Internationalization Completeness: **60%**

- ✅ **Working well:** Navigation, hero, blog content, footer
- ⚠️ **Partially working:** Admin panels (titles only)
- ❌ **Not working:** Error screens, forms, validation, author bio

---

## Critical Issues (Must Fix)

### 1. Error Screens (4 files)
**User sees English errors even when language is set to RU/AM**

Files:
- `src/context/LanguageContext.tsx` - "Unable to Load Your Language"
- `src/components/loading/ErrorScreen.tsx` - "Oops! Something unexpected happened"
- `src/components/ErrorBoundary.tsx` - "Something went wrong!"
- `src/components/auth/ProtectedRoute.tsx` - "Checking authentication..."

Impact: Users can't understand error messages in their language.

---

### 2. 404 Page
**Entire 404 page is hardcoded in English**

File: `src/pages/NotFoundPage.tsx`

Hardcoded:
- "Page Not Found"
- "Oops! The page you're looking for doesn't exist..."
- "Go Home" / "Go Back"
- "Popular Pages"

Impact: Lost users can't navigate back in their language.

---

### 3. Author Information (2 files)
**Author name and bio are hardcoded**

Files:
- `src/pages/BlogPage/BlogViewPage.tsx` - Author name
- `src/components/AuthorBio.tsx` - Full bio, role, location

Hardcoded:
- "Gor Papyan"
- Full biography paragraph
- "QA Engineer"
- "Remote"
- "5+ years experience"

Impact: Bio is only in English, limiting international appeal.

---

### 4. Section Unavailable Messages
**Feature flag disabled messages are hardcoded**

File: `src/pages/WorkPage/index.tsx`

Hardcoded:
- "Section Unavailable"
- "This section is currently unavailable."

Impact: Users don't understand why content is hidden.

---

## High Priority Issues (Should Fix)

### 5. Admin Login Page (1 file)
**Entire login form is hardcoded**

File: `src/pages/AdminLoginPage.tsx`

Hardcoded: 9 strings including:
- "Admin Login"
- "Email Address" / "Password"
- "Sign In" / "Signing In..."
- Placeholders

Impact: Admin users must know English to log in.

---

### 6. Admin Dashboard (9 files)
**All admin panel titles and messages are hardcoded**

Files:
- `src/pages/AdminDashboard/index.tsx` - "Admin Dashboard", "Welcome back"
- `src/pages/AdminDashboard/BlogAdmin.tsx` - "Blog Management", "No blog posts yet"
- `src/pages/AdminDashboard/FeatureFlagAdmin.tsx` - All table headers, filters
- `src/pages/AdminDashboard/TranslationManager.tsx` - "Translation Management"
- `src/pages/AdminDashboard/ProjectAdmin.tsx` - "Project Management"
- `src/pages/AdminDashboard/SkillsAdmin.tsx` - "Skills Management"
- `src/pages/AdminDashboard/EducationAdmin.tsx` - "Education Management"
- `src/pages/AdminDashboard/ExperienceAdmin.tsx` - "Experience Management"

Impact: Admin interface is English-only.

---

### 7. Forms & Validation (8 files)
**Form labels, placeholders, and validation messages are hardcoded**

Key files:
- `src/pages/SettingsPage/ValidationPanel.tsx` - "All translations are present", etc.
- `src/components/admin/ImageUpload.tsx` - "Drag and drop or click to upload"
- `src/components/admin/MarkdownEditor.tsx` - Help text and shortcuts
- Various admin forms - Placeholders like "Add a tag", "Add an achievement"

Impact: Forms are confusing for non-English users.

---

## Medium Priority Issues (Nice to Fix)

### 8. UI Components (7 files)
- `src/components/home/Technologies/index.tsx` - "Technical Expertise"
- `src/components/home/Technologies/TechnologyCard.tsx` - "Proficiency Level"
- `src/components/markdown/Toc.tsx` - "On this page"
- `src/components/TableOfContents.tsx` - "Table of Contents"
- `src/components/shared/TranslationComparisonView.tsx` - "No changes"

Impact: Minor UX inconsistency.

---

### 9. Accessibility Labels (6 files)
**ARIA labels are hardcoded**

Examples:
- "Open menu" / "Close menu"
- "Previous technology" / "Next technology"
- "Table of contents sidebar"
- "Close notification"

Impact: Screen readers announce in English only.

---

## Low Priority Issues

### 10. Demo Pages (1 file)
- `src/pages/MarkdownDemo.tsx` - Demo page titles

Impact: Development/demo only, minimal user impact.

---

## Breakdown by Category

```
Admin Panels     ████████████████████ 60 strings (39%)
Error Screens    ████████ 15 strings (10%)
Forms/Validation ████████████ 30 strings (19%)
Public Content   ████████ 20 strings (13%)
UI Components    ██████ 15 strings (10%)
Accessibility    ████ 10 strings (6%)
Demo Pages       ██ 5 strings (3%)
```

---

## Recommended Approach

### Phase 1: Critical Fixes (1-2 days)
**Goal:** Fix user-facing errors and 404 page

1. Add ~20 translation keys for errors
2. Update 4 error screen components
3. Fix 404 page
4. Fix section unavailable messages
5. Fix author bio

**Impact:** Users can navigate and understand errors in their language.

---

### Phase 2: Admin Interface (2-3 days)
**Goal:** Internationalize admin panels

1. Add ~60 translation keys for admin
2. Update 10 admin panel components
3. Fix all form labels and placeholders
4. Fix validation messages

**Impact:** Admin interface fully internationalized.

---

### Phase 3: Polish (1 day)
**Goal:** Complete internationalization

1. Add ~20 translation keys for UI/accessibility
2. Update remaining components
3. Add Russian and Armenian translations
4. Test all pages in all languages

**Impact:** 100% internationalization coverage.

---

## Files Requiring Changes

### Immediate Priority (7 files)
1. `src/context/LanguageContext.tsx`
2. `src/components/loading/ErrorScreen.tsx`
3. `src/components/ErrorBoundary.tsx`
4. `src/pages/NotFoundPage.tsx`
5. `src/pages/WorkPage/index.tsx`
6. `src/pages/BlogPage/BlogViewPage.tsx`
7. `src/components/AuthorBio.tsx`

### High Priority (12 files)
8. `src/pages/AdminLoginPage.tsx`
9. `src/pages/AdminDashboard/index.tsx`
10. `src/pages/AdminDashboard/BlogAdmin.tsx`
11. `src/pages/AdminDashboard/TranslationManager.tsx`
12. `src/pages/AdminDashboard/FeatureFlagAdmin.tsx`
13. `src/pages/AdminDashboard/ProjectAdmin.tsx`
14. `src/pages/AdminDashboard/SkillsAdmin.tsx`
15. `src/pages/AdminDashboard/EducationAdmin.tsx`
16. `src/pages/AdminDashboard/ExperienceAdmin.tsx`
17. `src/pages/SettingsPage/ValidationPanel.tsx`
18. `src/components/admin/ImageUpload.tsx`
19. `src/components/admin/MarkdownEditor.tsx`

### Medium Priority (11 files)
20-30. Various UI components and accessibility labels

---

## Deliverables

✅ **HARDCODED_TEXT_AUDIT.md** - Detailed audit with code examples  
✅ **TRANSLATION_KEYS_TO_ADD.md** - Complete list of keys + SQL script  
✅ **HARDCODED_TEXT_SUMMARY.md** - This executive summary  

---

## Next Steps

1. **Review** these documents with the team
2. **Prioritize** which phases to implement
3. **Run SQL script** to add translation keys to database
4. **Update components** to use translation keys
5. **Test** in all three languages (EN, RU, AM)
6. **Add RU/AM translations** for all new keys

---

## Conclusion

The portfolio has a **solid translation infrastructure** in place (Supabase-backed, loading screens, TranslationText component), but **implementation is incomplete**. Approximately **40% of user-visible text** remains hardcoded in English.

**Effort to fix:** 4-6 days of focused development  
**Benefit:** True multi-language support, professional international presence  
**Risk of not fixing:** Non-English users have poor experience, especially in error states

---

**Report prepared by:** AI Assistant  
**For questions:** See detailed audit in `HARDCODED_TEXT_AUDIT.md`
