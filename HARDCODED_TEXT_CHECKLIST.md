# Hardcoded Text Migration Checklist

Quick reference checklist for migrating hardcoded text to translation keys.

---

## 📋 Pre-Migration Setup

- [ ] Review `HARDCODED_TEXT_AUDIT.md` for complete details
- [ ] Review `TRANSLATION_KEYS_TO_ADD.md` for SQL script
- [ ] Backup current database
- [ ] Create feature branch: `git checkout -b fix/hardcoded-text-migration`

---

## 🗄️ Database Setup

### Step 1: Add Translation Keys

- [ ] Open Supabase SQL Editor
- [ ] Run SQL script from `TRANSLATION_KEYS_TO_ADD.md`
- [ ] Verify ~100 new keys added: `SELECT COUNT(*) FROM translations WHERE language = 'en' AND category IN ('error', 'admin', 'auth', 'aria');`
- [ ] Test translation service loads new keys

---

## 🚨 Phase 1: Critical Fixes (User-Facing)

### Error Screens (4 files)

- [ ] **src/context/LanguageContext.tsx**
  - [ ] Replace `title="Unable to Load Your Language"` → `title={t('error.languageLoadFailed.title')}`
  - [ ] Replace `message="We couldn't load..."` → `message={t('error.languageLoadFailed.message')}`
  - [ ] Replace `retryText="Try Again"` → `retryText={t('error.retry')}`

- [ ] **src/components/loading/ErrorScreen.tsx**
  - [ ] Update default props to use translation keys
  - [ ] Replace hardcoded subtitle text
  - [ ] Replace "Go Home" button text
  - [ ] Replace "Technical Details" text

- [ ] **src/components/ErrorBoundary.tsx**
  - [ ] Replace `<h1>Something went wrong!</h1>` → `<h1>{t('error.boundary.title')}</h1>`
  - [ ] Replace "Error Details" → `{t('error.boundary.details')}`
  - [ ] Replace "Try Again" → `{t('error.retry')}`
  - [ ] Add `useLanguage()` hook

- [ ] **src/components/auth/ProtectedRoute.tsx**
  - [ ] Replace "Checking authentication..." → `{t('auth.checkingAuthentication')}`

### 404 Page (1 file)

- [ ] **src/pages/NotFoundPage.tsx**
  - [ ] Replace "Page Not Found" → `<TranslationText translationKey="pages.notFound.title" />`
  - [ ] Replace message paragraph → `<TranslationText translationKey="pages.notFound.message" />`
  - [ ] Replace "Go Home" → `<TranslationText translationKey="pages.notFound.goHome" />`
  - [ ] Replace "Go Back" → `<TranslationText translationKey="pages.notFound.goBack" />`
  - [ ] Replace "Popular Pages" → `<TranslationText translationKey="pages.notFound.popularPages" />`

### Section Unavailable (1 file)

- [ ] **src/pages/WorkPage/index.tsx**
  - [ ] Replace "Section Unavailable" → `{t('pages.sectionUnavailable.title')}`
  - [ ] Replace "This section is currently unavailable." → `{t('pages.sectionUnavailable.message')}`

### Author Information (2 files)

- [ ] **src/pages/BlogPage/BlogViewPage.tsx**
  - [ ] Replace `<span>Gor Papyan</span>` → `<span>{t('author.name')}</span>`

- [ ] **src/components/AuthorBio.tsx**
  - [ ] Replace name → `{t('author.name')}`
  - [ ] Replace bio paragraph → `{t('author.bio')}`
  - [ ] Replace "QA Engineer" → `{t('author.role')}`
  - [ ] Replace "Remote" → `{t('author.location')}`
  - [ ] Replace "5+ years experience" → `{t('author.experience')}`
  - [ ] Replace "GP" initials → `{t('author.initials')}`

### Testing Phase 1

- [ ] Test error screens in all 3 languages
- [ ] Test 404 page navigation in all 3 languages
- [ ] Test section unavailable message
- [ ] Test blog author display
- [ ] Verify shimmer loading works for missing translations

---

## 🔐 Phase 2: Admin Interface

### Admin Login (1 file)

- [ ] **src/pages/AdminLoginPage.tsx**
  - [ ] Replace `<h1>Admin Login</h1>` → `<h1>{t('admin.login.title')}</h1>`
  - [ ] Replace subtitle → `{t('admin.login.subtitle')}`
  - [ ] Replace "Email Address" label → `{t('admin.login.emailLabel')}`
  - [ ] Replace email placeholder → `{t('admin.login.emailPlaceholder')}`
  - [ ] Replace "Password" label → `{t('admin.login.passwordLabel')}`
  - [ ] Replace password placeholder → `{t('admin.login.passwordPlaceholder')}`
  - [ ] Replace "Signing In..." → `{t('admin.login.signingIn')}`
  - [ ] Replace "Sign In" → `{t('admin.login.signIn')}`
  - [ ] Replace "← Back to Portfolio" → `{t('admin.login.backToPortfolio')}`

### Admin Dashboard Home (1 file)

- [ ] **src/pages/AdminDashboard/index.tsx**
  - [ ] Replace "Admin Dashboard" → `{t('admin.dashboard.title')}`
  - [ ] Replace "Welcome back, {user?.email}" → `{t('admin.dashboard.welcomeBack')}, {user?.email}`
  - [ ] Replace "Content Management" → `{t('admin.dashboard.contentManagement')}`

### Blog Admin (1 file)

- [ ] **src/pages/AdminDashboard/BlogAdmin.tsx**
  - [ ] Replace "Blog Management" → `{t('admin.blog.title')}`
  - [ ] Replace "Blog Posts" → `{t('admin.blog.postsTitle')}`
  - [ ] Replace "No blog posts yet" → `{t('admin.blog.noPosts')}`
  - [ ] Replace "Get started by creating..." → `{t('admin.blog.getStarted')}`
  - [ ] Replace "Edit post" title → `{t('admin.blog.editPost')}`
  - [ ] Replace "Delete post" title → `{t('admin.blog.deletePost')}`

### Translation Manager (1 file)

- [ ] **src/pages/AdminDashboard/TranslationManager.tsx**
  - [ ] Replace "Translation Management" → `{t('admin.translations.title')}`

### Feature Flags Admin (1 file)

- [ ] **src/pages/AdminDashboard/FeatureFlagAdmin.tsx**
  - [ ] Replace title → `{t('admin.featureFlags.title')}`
  - [ ] Replace subtitle → `{t('admin.featureFlags.subtitle')}`
  - [ ] Replace filter options:
    - [ ] "All Types" → `{t('admin.featureFlags.filter.all')}`
    - [ ] "Sections" → `{t('admin.featureFlags.filter.sections')}`
    - [ ] "Blog Posts" → `{t('admin.featureFlags.filter.blogPosts')}`
    - [ ] "Projects" → `{t('admin.featureFlags.filter.projects')}`
  - [ ] Replace table headers:
    - [ ] "Flag Key" → `{t('admin.featureFlags.table.flagKey')}`
    - [ ] "Type" → `{t('admin.featureFlags.table.type')}`
    - [ ] "Description" → `{t('admin.featureFlags.table.description')}`
    - [ ] "Status" → `{t('admin.featureFlags.table.status')}`
    - [ ] "Actions" → `{t('admin.featureFlags.table.actions')}`
  - [ ] Replace modal titles:
    - [ ] "Create Feature Flag" → `{t('admin.featureFlags.create')}`
    - [ ] "Edit Feature Flag" → `{t('admin.featureFlags.edit')}`
    - [ ] "Delete Feature Flag" → `{t('admin.featureFlags.delete')}`

### Other Admin Panels (5 files)

- [ ] **src/pages/AdminDashboard/ProjectAdmin.tsx**
  - [ ] Replace "Project Management" → `{t('admin.projects.title')}`
  - [ ] Replace "Add a tag" placeholder → `{t('admin.projects.addTag')}`

- [ ] **src/pages/AdminDashboard/SkillsAdmin.tsx**
  - [ ] Replace "Skills Management" → `{t('admin.skills.title')}`

- [ ] **src/pages/AdminDashboard/EducationAdmin.tsx**
  - [ ] Replace "Education Management" → `{t('admin.education.title')}`
  - [ ] Replace placeholder → `{t('admin.education.additionalDetails')}`

- [ ] **src/pages/AdminDashboard/ExperienceAdmin.tsx**
  - [ ] Replace "Experience Management" → `{t('admin.experience.title')}`
  - [ ] Replace "Add an achievement" → `{t('admin.experience.addAchievement')}`

### Forms & Validation (3 files)

- [ ] **src/pages/SettingsPage/ValidationPanel.tsx**
  - [ ] Replace "All translations are present" → `{t('settings.validation.allPresent')}`
  - [ ] Replace "No empty values found" → `{t('settings.validation.noEmpty')}`
  - [ ] Replace "Total issues:" → `{t('settings.validation.totalIssues')}:`
  - [ ] Replace "Re-validate" → `{t('settings.validation.revalidate')}`

- [ ] **src/components/admin/ImageUpload.tsx**
  - [ ] Replace "Drag and drop..." → `{t('admin.imageUpload.dragDrop')}`
  - [ ] Replace "JPEG, PNG..." → `{t('admin.imageUpload.fileTypes')}`
  - [ ] Replace "Uploading..." → `{t('admin.imageUpload.uploading')}`
  - [ ] Replace "Remove preview" title → `{t('admin.imageUpload.removePreview')}`

- [ ] **src/components/admin/MarkdownEditor.tsx**
  - [ ] Replace keyboard shortcuts help → `{t('admin.markdown.help.keyboardShortcuts')}`
  - [ ] Replace text size help → `{t('admin.markdown.help.textSize')}`
  - [ ] Replace markdown syntax help → `{t('admin.markdown.help.markdownSyntax')}`
  - [ ] Replace image upload help → `{t('admin.markdown.help.imageUpload')}`
  - [ ] Replace "Toggle Preview" title → `{t('admin.markdown.togglePreview')}`
  - [ ] Replace "Toggle Fullscreen" title → `{t('admin.markdown.toggleFullscreen')}`

### Testing Phase 2

- [ ] Test admin login in all 3 languages
- [ ] Test all admin panels in all 3 languages
- [ ] Test form validation messages
- [ ] Test image upload component
- [ ] Test markdown editor help text

---

## ✨ Phase 3: Polish & Accessibility

### UI Components (5 files)

- [ ] **src/components/home/Technologies/index.tsx**
  - [ ] Replace "Technical Expertise" → `{t('home.technologies.title')}`

- [ ] **src/components/home/Technologies/TechnologyCard.tsx**
  - [ ] Replace "Proficiency Level" → `{t('home.technologies.proficiencyLevel')}`

- [ ] **src/components/markdown/Toc.tsx**
  - [ ] Replace "On this page" (both instances) → `{t('blog.toc.title')}`

- [ ] **src/components/TableOfContents.tsx**
  - [ ] Replace "Table of Contents" → `{t('blog.tableOfContents')}`

- [ ] **src/components/shared/TranslationComparisonView.tsx**
  - [ ] Replace "No changes" → `{t('settings.comparison.noChanges')}`
  - [ ] Replace "Characters rearranged" → `{t('settings.comparison.rearranged')}`

### Accessibility Labels (6 files)

- [ ] **src/components/Header/MobileMenu.tsx**
  - [ ] Replace `aria-label="Open menu"` → `aria-label={t('aria.openMenu')}`
  - [ ] Replace `aria-label="Close menu"` → `aria-label={t('aria.closeMenu')}`

- [ ] **src/components/home/Technologies/TechnologiesCarousel.tsx**
  - [ ] Replace `aria-label="Previous technology"` → `aria-label={t('aria.previousTechnology')}`
  - [ ] Replace `aria-label="Next technology"` → `aria-label={t('aria.nextTechnology')}`

- [ ] **src/pages/BlogPage/BlogViewPage.tsx**
  - [ ] Replace `aria-label="Table of contents sidebar"` → `aria-label={t('aria.tableOfContentsSidebar')}`

- [ ] **src/components/markdown/Toc.tsx**
  - [ ] Replace `aria-label="Table of contents"` → `aria-label={t('aria.tableOfContents')}`

- [ ] **src/components/ui/Popup.tsx**
  - [ ] Replace `aria-label="Close notification"` → `aria-label={t('aria.closeNotification')}`

- [ ] **src/components/skeletons/SkeletonCard.tsx**
  - [ ] Replace `aria-label="Loading image"` → `aria-label={t('aria.loadingImage')}`
  - [ ] Replace `aria-label="Loading title"` → `aria-label={t('aria.loadingTitle')}`
  - [ ] Replace `aria-label="Loading tag"` → `aria-label={t('aria.loadingTag')}`

### Error Messages (3 files)

- [ ] **src/components/about/Skills/index.tsx**
  - [ ] Replace "Failed to load skills: {error}" → `{t('error.loadFailed.skills')}: {error}`

- [ ] **src/components/about/Education/EducationList.tsx**
  - [ ] Replace "Failed to load education: {error}" → `{t('error.loadFailed.education')}: {error}`

- [ ] **src/pages/AdminDashboard/FeatureFlagAdmin.tsx**
  - [ ] Replace "Error loading feature flags: {error}" → `{t('error.loadFailed.featureFlags')}: {error}`

### Testing Phase 3

- [ ] Test all UI components in all 3 languages
- [ ] Test screen reader with ARIA labels in all 3 languages
- [ ] Test error messages display correctly
- [ ] Verify no hardcoded text remains (search codebase)

---

## 🌍 Add Translations for RU & AM

### Russian Translations

- [ ] Add all ~100 keys with Russian translations
- [ ] Test admin interface in Russian
- [ ] Test public pages in Russian
- [ ] Get native speaker review

### Armenian Translations

- [ ] Add all ~100 keys with Armenian translations
- [ ] Test admin interface in Armenian
- [ ] Test public pages in Armenian
- [ ] Get native speaker review

---

## ✅ Final Verification

### Code Quality

- [ ] Run linter: `npm run lint`
- [ ] Fix any linting errors
- [ ] Run type check: `npx tsc --noEmit`
- [ ] Fix any TypeScript errors

### Testing

- [ ] Test all pages in English
- [ ] Test all pages in Russian
- [ ] Test all pages in Armenian
- [ ] Test language switching works everywhere
- [ ] Test shimmer loading for missing translations
- [ ] Test error states in all languages

### Search for Remaining Hardcoded Text

- [ ] Search for common hardcoded patterns:
  ```bash
  # Search for hardcoded English text in JSX
  grep -r ">[A-Z][a-z]+ [A-Za-z]" src/ --include="*.tsx"
  
  # Search for hardcoded labels
  grep -r 'label="[A-Z]' src/ --include="*.tsx"
  
  # Search for hardcoded placeholders
  grep -r 'placeholder="[A-Z]' src/ --include="*.tsx"
  ```

### Documentation

- [ ] Update README.md with new translation keys
- [ ] Document new translation categories
- [ ] Update translation seeding guide
- [ ] Add migration notes to CHANGELOG

---

## 🚀 Deployment

### Pre-Deployment

- [ ] Commit all changes: `git add . && git commit -m "fix: migrate all hardcoded text to translations"`
- [ ] Push to remote: `git push origin fix/hardcoded-text-migration`
- [ ] Create pull request
- [ ] Get code review

### Database Migration

- [ ] Run SQL script on production Supabase
- [ ] Verify all keys added successfully
- [ ] Test production site in all languages

### Post-Deployment

- [ ] Monitor error logs for missing translations
- [ ] Check user feedback
- [ ] Add any missing translations discovered

---

## 📊 Progress Tracking

### Overall Progress

```
Phase 1: Critical Fixes     [ ] 0/7 files
Phase 2: Admin Interface    [ ] 0/12 files
Phase 3: Polish             [ ] 0/11 files
RU Translations             [ ] 0/100 keys
AM Translations             [ ] 0/100 keys
```

### Estimated Time

- Phase 1: 1-2 days
- Phase 2: 2-3 days
- Phase 3: 1 day
- Translations: 2-3 days
- **Total: 6-9 days**

---

## 🎯 Success Criteria

- [ ] Zero hardcoded English text in user-facing components
- [ ] All pages render correctly in EN, RU, AM
- [ ] Error messages display in user's language
- [ ] Admin interface fully internationalized
- [ ] Accessibility labels translated
- [ ] No console warnings for missing translations
- [ ] Shimmer loading works for all new keys
- [ ] Code passes linting and type checks

---

**Ready to start?** Begin with Phase 1 and work through the checklist systematically!
