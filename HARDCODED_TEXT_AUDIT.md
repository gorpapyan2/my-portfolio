# Hardcoded Text Audit Report

**Date:** 2026-01-11  
**Project:** Gor Papyan Portfolio  
**Scope:** Complete codebase scan for hardcoded UI text that should be in translations

---

## Executive Summary

This audit identifies **all hardcoded text strings** in the portfolio that should be moved to the translation system (`public.translations` table). The application claims to be fully internationalized, but significant hardcoded English text remains across multiple components.

### Key Findings

- **30+ files** contain hardcoded text
- **150+ individual text strings** need translation keys
- **Critical areas affected:** Admin panels, error screens, forms, validation messages
- **User-facing impact:** Non-English users see English fallbacks in many areas

---

## 1. Error & Loading Screens

### 1.1 `src/context/LanguageContext.tsx`
**Lines 55-58**

```typescript
<ErrorScreen
  title="Unable to Load Your Language"
  message="We couldn't load your preferred language settings. This might be a temporary issue."
  onRetry={() => window.location.reload()}
  retryText="Try Again"
/>
```

**Hardcoded strings:**
- `"Unable to Load Your Language"`
- `"We couldn't load your preferred language settings. This might be a temporary issue."`
- `"Try Again"`

**Suggested keys:**
- `error.languageLoadFailed.title`
- `error.languageLoadFailed.message`
- `error.retry`

---

### 1.2 `src/components/loading/ErrorScreen.tsx`
**Lines 12-15, 86, 114, 126-127**

```typescript
title = "Oops! Something unexpected happened"
retryText = "Try Again"
// Line 86:
<p className="text-sm text-white/50">
  Don't worry, this happens sometimes. Please check your connection and try again.
</p>
// Line 114:
<button>Go Home</button>
// Line 126:
<summary>Technical Details</summary>
```

**Hardcoded strings:**
- `"Oops! Something unexpected happened"`
- `"Don't worry, this happens sometimes. Please check your connection and try again."`
- `"Go Home"`
- `"Technical Details"`

**Suggested keys:**
- `error.unexpected.title`
- `error.unexpected.subtitle`
- `error.goHome`
- `error.technicalDetails`

---

### 1.3 `src/components/auth/ProtectedRoute.tsx`
**Line 17**

```typescript
<p className="text-white">Checking authentication...</p>
```

**Hardcoded strings:**
- `"Checking authentication..."`

**Suggested keys:**
- `auth.checkingAuthentication`

---

### 1.4 `src/components/ErrorBoundary.tsx`
**Lines 39-41, 58**

```typescript
<h1>Something went wrong!</h1>
<summary>Error Details</summary>
<button>Try Again</button>
```

**Hardcoded strings:**
- `"Something went wrong!"`
- `"Error Details"`
- `"Try Again"`

**Suggested keys:**
- `error.boundary.title`
- `error.boundary.details`
- `error.retry`

---

## 2. Admin Authentication

### 2.1 `src/pages/AdminLoginPage.tsx`
**Lines 43-44, 56, 71, 81, 104, 109, 121**

```typescript
<h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
<p className="text-gray-400">Sign in to access the admin dashboard</p>

<label htmlFor="email">Email Address</label>
<input placeholder="admin@example.com" />

<label htmlFor="password">Password</label>
<input placeholder="Enter your password" />

<>Signing In...</>
<>Sign In</>

<button>← Back to Portfolio</button>
```

**Hardcoded strings:**
- `"Admin Login"`
- `"Sign in to access the admin dashboard"`
- `"Email Address"`
- `"admin@example.com"` (placeholder)
- `"Password"`
- `"Enter your password"` (placeholder)
- `"Signing In..."`
- `"Sign In"`
- `"← Back to Portfolio"`

**Suggested keys:**
- `admin.login.title`
- `admin.login.subtitle`
- `admin.login.emailLabel`
- `admin.login.emailPlaceholder`
- `admin.login.passwordLabel`
- `admin.login.passwordPlaceholder`
- `admin.login.signingIn`
- `admin.login.signIn`
- `admin.login.backToPortfolio`

---

## 3. Admin Dashboard

### 3.1 `src/pages/AdminDashboard/index.tsx`
**Lines 81-82, 99**

```typescript
<h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
<p className="text-gray-400">Welcome back, {user?.email}</p>

<h2 className="text-lg font-semibold text-white mb-4">Content Management</h2>
```

**Hardcoded strings:**
- `"Admin Dashboard"`
- `"Welcome back, {user?.email}"`
- `"Content Management"`

**Suggested keys:**
- `admin.dashboard.title`
- `admin.dashboard.welcomeBack`
- `admin.dashboard.contentManagement`

---

### 3.2 `src/pages/AdminDashboard/BlogAdmin.tsx`
**Lines 84, 110, 128-129**

```typescript
<h2 className="text-2xl font-semibold text-white">Blog Management</h2>
<h3 className="text-xl font-semibold text-white">Blog Posts</h3>

<h3 className="text-lg font-medium text-white mb-2">No blog posts yet</h3>
<p className="text-gray-400 mb-4">Get started by creating your first blog post</p>
```

**Hardcoded strings:**
- `"Blog Management"`
- `"Blog Posts"`
- `"No blog posts yet"`
- `"Get started by creating your first blog post"`

**Suggested keys:**
- `admin.blog.title`
- `admin.blog.postsTitle`
- `admin.blog.noPosts`
- `admin.blog.getStarted`

---

### 3.3 `src/pages/AdminDashboard/TranslationManager.tsx`
**Line 49**

```typescript
<h2 className="text-2xl font-semibold text-white">Translation Management</h2>
```

**Hardcoded strings:**
- `"Translation Management"`

**Suggested keys:**
- `admin.translations.title`

---

### 3.4 `src/pages/AdminDashboard/FeatureFlagAdmin.tsx`
**Lines 167-168, 201-204, 216-224, 296, 321-323, 392, 416-418, 486**

```typescript
<h2 className="text-2xl font-bold text-white">Feature Flags</h2>
<p className="text-gray-400">Manage content visibility and availability</p>

<option value="all">All Types</option>
<option value="section">Sections</option>
<option value="blog_post">Blog Posts</option>
<option value="project">Projects</option>

<th>Flag Key</th>
<th>Type</th>
<th>Description</th>
<th>Status</th>
<th>Actions</th>

<h3>Create Feature Flag</h3>
<h3>Edit Feature Flag</h3>
<h3>Delete Feature Flag</h3>
```

**Hardcoded strings:**
- `"Feature Flags"`
- `"Manage content visibility and availability"`
- `"All Types"`, `"Sections"`, `"Blog Posts"`, `"Projects"`
- `"Flag Key"`, `"Type"`, `"Description"`, `"Status"`, `"Actions"`
- `"Create Feature Flag"`, `"Edit Feature Flag"`, `"Delete Feature Flag"`

**Suggested keys:**
- `admin.featureFlags.title`
- `admin.featureFlags.subtitle`
- `admin.featureFlags.filter.*`
- `admin.featureFlags.table.*`
- `admin.featureFlags.create`, `admin.featureFlags.edit`, `admin.featureFlags.delete`

---

### 3.5 `src/pages/AdminDashboard/ProjectAdmin.tsx`
**Line 120**

```typescript
<h2 className="text-2xl font-semibold text-white">Project Management</h2>
```

**Hardcoded strings:**
- `"Project Management"`

**Suggested keys:**
- `admin.projects.title`

---

### 3.6 `src/pages/AdminDashboard/SkillsAdmin.tsx`
**Line 97**

```typescript
<h2 className="text-2xl font-semibold text-white">Skills Management</h2>
```

**Hardcoded strings:**
- `"Skills Management"`

**Suggested keys:**
- `admin.skills.title`

---

### 3.7 `src/pages/AdminDashboard/EducationAdmin.tsx`
**Line 91**

```typescript
<h2 className="text-2xl font-semibold text-white">Education Management</h2>
```

**Hardcoded strings:**
- `"Education Management"`

**Suggested keys:**
- `admin.education.title`

---

### 3.8 `src/pages/AdminDashboard/ExperienceAdmin.tsx`
**Line 113**

```typescript
<h2 className="text-2xl font-semibold text-white">Experience Management</h2>
```

**Hardcoded strings:**
- `"Experience Management"`

**Suggested keys:**
- `admin.experience.title`

---

## 4. Forms & Validation

### 4.1 `src/pages/SettingsPage/ValidationPanel.tsx`
**Lines 81, 109, 126, 132**

```typescript
<span className="text-sm">All translations are present</span>
<span className="text-sm">No empty values found</span>
<div>Total issues: {count}</div>
<button>Re-validate</button>
```

**Hardcoded strings:**
- `"All translations are present"`
- `"No empty values found"`
- `"Total issues: {count}"`
- `"Re-validate"`

**Suggested keys:**
- `settings.validation.allPresent`
- `settings.validation.noEmpty`
- `settings.validation.totalIssues`
- `settings.validation.revalidate`

---

### 4.2 `src/components/admin/ImageUpload.tsx`
**Lines 182-183**

```typescript
<p className="text-sm text-white font-medium">Drag and drop or click to upload</p>
<p className="text-xs text-gray-500">JPEG, PNG, GIF, or WebP up to 5MB</p>
```

**Hardcoded strings:**
- `"Drag and drop or click to upload"`
- `"JPEG, PNG, GIF, or WebP up to 5MB"`

**Suggested keys:**
- `admin.imageUpload.dragDrop`
- `admin.imageUpload.fileTypes`

---

### 4.3 `src/components/admin/MarkdownEditor.tsx`
**Lines 366-370**

```typescript
<p><strong>Keyboard shortcuts:</strong> Ctrl+B (bold), Ctrl+I (italic), Ctrl+H (heading), Ctrl+K (link)</p>
<p><strong>Text size:</strong> Ctrl+= (increase), Ctrl+- (decrease), Ctrl+0 (reset)</p>
<p><strong>Markdown syntax:</strong> **bold**, *italic*, # heading, - list, > quote, `code`, [link](url), ![alt](url)</p>
<p><strong>Image upload:</strong> Use the Image button in toolbar or drag-drop into image upload component</p>
```

**Hardcoded strings:**
- `"Keyboard shortcuts:"` + shortcuts description
- `"Text size:"` + size controls
- `"Markdown syntax:"` + syntax examples
- `"Image upload:"` + upload instructions

**Suggested keys:**
- `admin.markdown.help.keyboardShortcuts`
- `admin.markdown.help.textSize`
- `admin.markdown.help.markdownSyntax`
- `admin.markdown.help.imageUpload`

---

### 4.4 Form Placeholders

**Multiple files contain hardcoded placeholders:**

- `src/pages/AdminDashboard/FeatureFlagAdmin.tsx:349`: `"Describe what this flag controls"`
- `src/pages/AdminDashboard/ProjectAdmin.tsx:227`: `"Add a tag"`
- `src/pages/AdminDashboard/EducationAdmin.tsx:170`: `"Additional details about the education"`
- `src/pages/AdminDashboard/ExperienceAdmin.tsx:210`: `"Add an achievement"`
- `src/components/shared/UnifiedTranslationModal.tsx:133`: `"Enter translation text"`

**Suggested keys:**
- `admin.form.placeholder.*`

---

## 5. Public-Facing Content

### 5.1 `src/pages/NotFoundPage.tsx`
**Lines 45, 54, 69, 77, 88**

```typescript
<h2>Page Not Found</h2>
<p>Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
<button>Go Home</button>
<button>Go Back</button>
<p>Popular Pages</p>
```

**Hardcoded strings:**
- `"Page Not Found"`
- `"Oops! The page you're looking for doesn't exist. It might have been moved or deleted."`
- `"Go Home"`
- `"Go Back"`
- `"Popular Pages"`

**Suggested keys:**
- `pages.notFound.title`
- `pages.notFound.message`
- `pages.notFound.goHome`
- `pages.notFound.goBack`
- `pages.notFound.popularPages`

---

### 5.2 `src/pages/WorkPage/index.tsx`
**Lines 23-24**

```typescript
<h2 className="text-2xl font-bold text-white mb-4">Section Unavailable</h2>
<p className="text-gray-400">This section is currently unavailable.</p>
```

**Hardcoded strings:**
- `"Section Unavailable"`
- `"This section is currently unavailable."`

**Suggested keys:**
- `pages.sectionUnavailable.title`
- `pages.sectionUnavailable.message`

---

### 5.3 `src/pages/BlogPage/BlogViewPage.tsx`
**Line 197**

```typescript
<span>Gor Papyan</span>
```

**Hardcoded strings:**
- `"Gor Papyan"` (author name)

**Suggested keys:**
- `author.name` (should be configurable)

---

### 5.4 `src/components/AuthorBio.tsx`
**Lines 15-19, 24, 28, 32**

```typescript
<h3>Gor Papyan</h3>
<p>
  Senior QA Engineer & Test Automation Specialist with expertise in Playwright, 
  Selenium, and modern testing frameworks. Passionate about creating robust, 
  maintainable test suites and sharing knowledge with the community.
</p>
<span>QA Engineer</span>
<span>Remote</span>
<span>5+ years experience</span>
```

**Hardcoded strings:**
- `"Gor Papyan"`
- Full bio paragraph
- `"QA Engineer"`
- `"Remote"`
- `"5+ years experience"`

**Suggested keys:**
- `author.name`
- `author.bio`
- `author.role`
- `author.location`
- `author.experience`

---

## 6. UI Components

### 6.1 `src/components/home/Technologies/index.tsx`
**Line 32**

```typescript
<span className="text-sm font-medium text-lime-400 uppercase tracking-wider">Technical Expertise</span>
```

**Hardcoded strings:**
- `"Technical Expertise"`

**Suggested keys:**
- `home.technologies.title`

---

### 6.2 `src/components/home/Technologies/TechnologyCard.tsx`
**Line 74**

```typescript
<span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Proficiency Level</span>
```

**Hardcoded strings:**
- `"Proficiency Level"`

**Suggested keys:**
- `home.technologies.proficiencyLevel`

---

### 6.3 `src/components/markdown/Toc.tsx`
**Lines 214, 223**

```typescript
<span>On this page</span>
<h3 className="text-white font-semibold text-sm">On this page</h3>
```

**Hardcoded strings:**
- `"On this page"`

**Suggested keys:**
- `blog.toc.title`

---

### 6.4 `src/components/TableOfContents.tsx`
**Line 71**

```typescript
<span className="font-medium">Table of Contents</span>
```

**Hardcoded strings:**
- `"Table of Contents"`

**Suggested keys:**
- `blog.tableOfContents`

---

### 6.5 `src/components/shared/TranslationComparisonView.tsx`
**Lines 51, 114**

```typescript
<span className="text-gray-500">No changes</span>
<p className="text-gray-400">Characters rearranged</p>
```

**Hardcoded strings:**
- `"No changes"`
- `"Characters rearranged"`

**Suggested keys:**
- `settings.comparison.noChanges`
- `settings.comparison.rearranged`

---

### 6.6 Error Messages

**Multiple files contain hardcoded error messages:**

- `src/components/about/Skills/index.tsx:86`: `"Failed to load skills: {error}"`
- `src/components/about/Education/EducationList.tsx:22`: `"Failed to load education: {error}"`
- `src/pages/AdminDashboard/FeatureFlagAdmin.tsx:153`: `"Error loading feature flags: {error}"`

**Suggested keys:**
- `error.loadFailed.*`

---

## 7. Demo & Development Pages

### 7.1 `src/pages/MarkdownDemo.tsx`
**Lines 124, 147**

```typescript
<h1 className="text-3xl font-bold text-white">Enhanced Markdown Editor</h1>
<h2 className="text-2xl font-bold text-white mb-4">Rendered Output</h2>
```

**Note:** This is a demo page, but should still be translatable for consistency.

**Suggested keys:**
- `demo.markdown.title`
- `demo.markdown.output`

---

## 8. Accessibility Labels

**Multiple files contain hardcoded `aria-label` attributes:**

- `src/pages/BlogPage/BlogViewPage.tsx:260`: `"Table of contents sidebar"`
- `src/components/Header/MobileMenu.tsx:76`: `"Open menu"`
- `src/components/Header/MobileMenu.tsx:107`: `"Close menu"`
- `src/components/home/Technologies/TechnologiesCarousel.tsx:94`: `"Previous technology"`
- `src/components/home/Technologies/TechnologiesCarousel.tsx:102`: `"Next technology"`
- `src/components/markdown/Toc.tsx:205`: `"Table of contents"`
- `src/components/ui/Popup.tsx:28`: `"Close notification"`

**Suggested keys:**
- `aria.*` (dedicated namespace for accessibility labels)

---

## 9. Button & Action Labels

**Hardcoded button text across multiple files:**

- `"Edit post"`, `"Delete post"` (BlogAdmin)
- `"Remove preview"` (ImageUpload)
- `"Share this article"` (ShareButton)
- `"Toggle Preview"`, `"Toggle Fullscreen"` (MarkdownEditor)
- `"Add a tag"`, `"Add an achievement"` (various admin forms)

**Suggested keys:**
- `admin.actions.*`

---

## Summary by Category

| Category | Files Affected | Strings Count | Priority |
|----------|---------------|---------------|----------|
| **Admin Panels** | 10 | ~60 | High |
| **Error Screens** | 4 | ~15 | Critical |
| **Forms & Validation** | 8 | ~30 | High |
| **Public Content** | 5 | ~20 | Critical |
| **UI Components** | 7 | ~15 | Medium |
| **Accessibility** | 6 | ~10 | High |
| **Demo Pages** | 1 | ~5 | Low |

**Total:** ~155 hardcoded strings across 30+ files

---

## Recommended Action Plan

### Phase 1: Critical (User-Facing)
1. Error screens and messages
2. 404 page
3. Author bio and blog metadata
4. Section unavailable messages

### Phase 2: High Priority (Admin)
1. Admin login page
2. Admin dashboard titles
3. Form labels and placeholders
4. Validation messages

### Phase 3: Medium Priority (UX)
1. Accessibility labels
2. Button tooltips
3. Help text
4. UI component labels

### Phase 4: Low Priority
1. Demo pages
2. Development-only content

---

## Implementation Notes

1. **Translation Key Convention:**
   - Use dot notation: `category.subcategory.key`
   - Keep keys descriptive: `admin.blog.noPosts` not `admin.blog.msg1`

2. **Fallback Strategy:**
   - All new keys should have English defaults
   - Russian and Armenian can be added incrementally

3. **Testing:**
   - Test each page in all three languages
   - Verify shimmer loading works for new keys
   - Check responsive layouts with longer translations

4. **Migration Pattern:**
   ```typescript
   // Before
   <h1>Admin Dashboard</h1>
   
   // After
   <h1><TranslationText translationKey="admin.dashboard.title" shimmerWidth="200px" /></h1>
   ```

---

## Files Requiring Updates

### Critical Priority
- `src/context/LanguageContext.tsx`
- `src/components/loading/ErrorScreen.tsx`
- `src/pages/NotFoundPage.tsx`
- `src/pages/WorkPage/index.tsx`
- `src/pages/BlogPage/BlogViewPage.tsx`
- `src/components/AuthorBio.tsx`

### High Priority
- `src/pages/AdminLoginPage.tsx`
- `src/pages/AdminDashboard/index.tsx`
- `src/pages/AdminDashboard/BlogAdmin.tsx`
- `src/pages/AdminDashboard/TranslationManager.tsx`
- `src/pages/AdminDashboard/FeatureFlagAdmin.tsx`
- `src/pages/AdminDashboard/ProjectAdmin.tsx`
- `src/pages/AdminDashboard/SkillsAdmin.tsx`
- `src/pages/AdminDashboard/EducationAdmin.tsx`
- `src/pages/AdminDashboard/ExperienceAdmin.tsx`
- `src/pages/SettingsPage/ValidationPanel.tsx`
- `src/components/admin/ImageUpload.tsx`
- `src/components/admin/MarkdownEditor.tsx`

### Medium Priority
- `src/components/home/Technologies/index.tsx`
- `src/components/home/Technologies/TechnologyCard.tsx`
- `src/components/markdown/Toc.tsx`
- `src/components/TableOfContents.tsx`
- `src/components/shared/TranslationComparisonView.tsx`
- `src/components/about/Skills/index.tsx`
- `src/components/about/Education/EducationList.tsx`
- `src/components/auth/ProtectedRoute.tsx`
- `src/components/ErrorBoundary.tsx`

### Low Priority
- `src/pages/MarkdownDemo.tsx`

---

**End of Report**
