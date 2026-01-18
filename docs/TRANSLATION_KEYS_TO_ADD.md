# Translation Keys to Add

This document lists all translation keys that need to be added to the `public.translations` table to eliminate hardcoded text.

---

## 1. Error Messages

### General Errors
```
error.unexpected.title = "Oops! Something unexpected happened"
error.unexpected.subtitle = "Don't worry, this happens sometimes. Please check your connection and try again."
error.retry = "Try Again"
error.goHome = "Go Home"
error.technicalDetails = "Technical Details"
```

### Language Loading Errors
```
error.languageLoadFailed.title = "Unable to Load Your Language"
error.languageLoadFailed.message = "We couldn't load your preferred language settings. This might be a temporary issue."
```

### Error Boundary
```
error.boundary.title = "Something went wrong!"
error.boundary.details = "Error Details"
```

### Load Failures
```
error.loadFailed.skills = "Failed to load skills"
error.loadFailed.education = "Failed to load education"
error.loadFailed.featureFlags = "Error loading feature flags"
```

---

## 2. Authentication

### Admin Login
```
admin.login.title = "Admin Login"
admin.login.subtitle = "Sign in to access the admin dashboard"
admin.login.emailLabel = "Email Address"
admin.login.emailPlaceholder = "admin@example.com"
admin.login.passwordLabel = "Password"
admin.login.passwordPlaceholder = "Enter your password"
admin.login.signingIn = "Signing In..."
admin.login.signIn = "Sign In"
admin.login.backToPortfolio = "← Back to Portfolio"
```

### Auth Status
```
auth.checkingAuthentication = "Checking authentication..."
```

---

## 3. Admin Dashboard

### Dashboard Home
```
admin.dashboard.title = "Admin Dashboard"
admin.dashboard.welcomeBack = "Welcome back"
admin.dashboard.contentManagement = "Content Management"
```

### Blog Management
```
admin.blog.title = "Blog Management"
admin.blog.postsTitle = "Blog Posts"
admin.blog.noPosts = "No blog posts yet"
admin.blog.getStarted = "Get started by creating your first blog post"
admin.blog.editPost = "Edit post"
admin.blog.deletePost = "Delete post"
admin.blog.slug = "Slug"
admin.blog.readTime = "Read time"
admin.blog.created = "Created"
```

### Translation Management
```
admin.translations.title = "Translation Management"
```

### Feature Flags
```
admin.featureFlags.title = "Feature Flags"
admin.featureFlags.subtitle = "Manage content visibility and availability"
admin.featureFlags.filter.all = "All Types"
admin.featureFlags.filter.sections = "Sections"
admin.featureFlags.filter.blogPosts = "Blog Posts"
admin.featureFlags.filter.projects = "Projects"
admin.featureFlags.table.flagKey = "Flag Key"
admin.featureFlags.table.type = "Type"
admin.featureFlags.table.description = "Description"
admin.featureFlags.table.status = "Status"
admin.featureFlags.table.actions = "Actions"
admin.featureFlags.create = "Create Feature Flag"
admin.featureFlags.edit = "Edit Feature Flag"
admin.featureFlags.delete = "Delete Feature Flag"
```

### Project Management
```
admin.projects.title = "Project Management"
admin.projects.addTag = "Add a tag"
```

### Skills Management
```
admin.skills.title = "Skills Management"
```

### Education Management
```
admin.education.title = "Education Management"
admin.education.additionalDetails = "Additional details about the education"
```

### Experience Management
```
admin.experience.title = "Experience Management"
admin.experience.addAchievement = "Add an achievement"
```

---

## 4. Forms & Validation

### Validation Panel
```
settings.validation.allPresent = "All translations are present"
settings.validation.noEmpty = "No empty values found"
settings.validation.totalIssues = "Total issues"
settings.validation.revalidate = "Re-validate"
```

### Comparison View
```
settings.comparison.noChanges = "No changes"
settings.comparison.rearranged = "Characters rearranged"
```

### Image Upload
```
admin.imageUpload.dragDrop = "Drag and drop or click to upload"
admin.imageUpload.fileTypes = "JPEG, PNG, GIF, or WebP up to 5MB"
admin.imageUpload.uploading = "Uploading..."
admin.imageUpload.removePreview = "Remove preview"
```

### Markdown Editor
```
admin.markdown.help.keyboardShortcuts = "Keyboard shortcuts: Ctrl+B (bold), Ctrl+I (italic), Ctrl+H (heading), Ctrl+K (link)"
admin.markdown.help.textSize = "Text size: Ctrl+= (increase), Ctrl+- (decrease), Ctrl+0 (reset)"
admin.markdown.help.markdownSyntax = "Markdown syntax: **bold**, *italic*, # heading, - list, > quote, `code`, [link](url), ![alt](url)"
admin.markdown.help.imageUpload = "Use the Image button in toolbar or drag-drop into image upload component"
admin.markdown.togglePreview = "Toggle Preview"
admin.markdown.toggleFullscreen = "Toggle Fullscreen"
admin.markdown.copyShortcuts = "Copy keyboard shortcuts"
```

### Form Placeholders
```
admin.form.placeholder.enterTranslation = "Enter translation text"
admin.form.placeholder.describeFlagControl = "Describe what this flag controls"
```

---

## 5. Public Pages

### 404 Not Found
```
pages.notFound.title = "Page Not Found"
pages.notFound.message = "Oops! The page you're looking for doesn't exist. It might have been moved or deleted."
pages.notFound.goHome = "Go Home"
pages.notFound.goBack = "Go Back"
pages.notFound.popularPages = "Popular Pages"
```

### Section Unavailable
```
pages.sectionUnavailable.title = "Section Unavailable"
pages.sectionUnavailable.message = "This section is currently unavailable."
```

---

## 6. Author & Bio

### Author Information
```
author.name = "Gor Papyan"
author.bio = "Senior QA Engineer & Test Automation Specialist with expertise in Playwright, Selenium, and modern testing frameworks. Passionate about creating robust, maintainable test suites and sharing knowledge with the community."
author.role = "QA Engineer"
author.location = "Remote"
author.experience = "5+ years experience"
author.initials = "GP"
```

---

## 7. Blog Components

### Table of Contents
```
blog.toc.title = "On this page"
blog.tableOfContents = "Table of Contents"
```

### Blog Metadata
```
blog.author = "Author"
blog.readTime = "Read time"
blog.publishedDate = "Published"
blog.share = "Share this article"
```

---

## 8. Home Page Components

### Technologies Section
```
home.technologies.title = "Technical Expertise"
home.technologies.proficiencyLevel = "Proficiency Level"
```

---

## 9. Accessibility Labels

### Navigation
```
aria.openMenu = "Open menu"
aria.closeMenu = "Close menu"
aria.previousTechnology = "Previous technology"
aria.nextTechnology = "Next technology"
aria.closeNotification = "Close notification"
```

### Content
```
aria.tableOfContentsSidebar = "Table of contents sidebar"
aria.tableOfContents = "Table of contents"
aria.loadingImage = "Loading image"
aria.loadingTitle = "Loading title"
aria.loadingTag = "Loading tag"
```

---

## 10. Demo Pages (Optional)

### Markdown Demo
```
demo.markdown.title = "Enhanced Markdown Editor"
demo.markdown.output = "Rendered Output"
```

---

## Implementation SQL

Here's a SQL script to add all these keys (English only, RU/AM can be added later):

```sql
-- Error Messages
INSERT INTO public.translations (key, language, value, category) VALUES
('error.unexpected.title', 'en', 'Oops! Something unexpected happened', 'error'),
('error.unexpected.subtitle', 'en', 'Don''t worry, this happens sometimes. Please check your connection and try again.', 'error'),
('error.retry', 'en', 'Try Again', 'error'),
('error.goHome', 'en', 'Go Home', 'error'),
('error.technicalDetails', 'en', 'Technical Details', 'error'),
('error.languageLoadFailed.title', 'en', 'Unable to Load Your Language', 'error'),
('error.languageLoadFailed.message', 'en', 'We couldn''t load your preferred language settings. This might be a temporary issue.', 'error'),
('error.boundary.title', 'en', 'Something went wrong!', 'error'),
('error.boundary.details', 'en', 'Error Details', 'error'),
('error.loadFailed.skills', 'en', 'Failed to load skills', 'error'),
('error.loadFailed.education', 'en', 'Failed to load education', 'error'),
('error.loadFailed.featureFlags', 'en', 'Error loading feature flags', 'error')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Authentication
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.login.title', 'en', 'Admin Login', 'admin'),
('admin.login.subtitle', 'en', 'Sign in to access the admin dashboard', 'admin'),
('admin.login.emailLabel', 'en', 'Email Address', 'admin'),
('admin.login.emailPlaceholder', 'en', 'admin@example.com', 'admin'),
('admin.login.passwordLabel', 'en', 'Password', 'admin'),
('admin.login.passwordPlaceholder', 'en', 'Enter your password', 'admin'),
('admin.login.signingIn', 'en', 'Signing In...', 'admin'),
('admin.login.signIn', 'en', 'Sign In', 'admin'),
('admin.login.backToPortfolio', 'en', '← Back to Portfolio', 'admin'),
('auth.checkingAuthentication', 'en', 'Checking authentication...', 'auth')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Admin Dashboard
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.dashboard.title', 'en', 'Admin Dashboard', 'admin'),
('admin.dashboard.welcomeBack', 'en', 'Welcome back', 'admin'),
('admin.dashboard.contentManagement', 'en', 'Content Management', 'admin'),
('admin.blog.title', 'en', 'Blog Management', 'admin'),
('admin.blog.postsTitle', 'en', 'Blog Posts', 'admin'),
('admin.blog.noPosts', 'en', 'No blog posts yet', 'admin'),
('admin.blog.getStarted', 'en', 'Get started by creating your first blog post', 'admin'),
('admin.blog.editPost', 'en', 'Edit post', 'admin'),
('admin.blog.deletePost', 'en', 'Delete post', 'admin'),
('admin.blog.slug', 'en', 'Slug', 'admin'),
('admin.blog.readTime', 'en', 'Read time', 'admin'),
('admin.blog.created', 'en', 'Created', 'admin'),
('admin.translations.title', 'en', 'Translation Management', 'admin'),
('admin.featureFlags.title', 'en', 'Feature Flags', 'admin'),
('admin.featureFlags.subtitle', 'en', 'Manage content visibility and availability', 'admin'),
('admin.featureFlags.filter.all', 'en', 'All Types', 'admin'),
('admin.featureFlags.filter.sections', 'en', 'Sections', 'admin'),
('admin.featureFlags.filter.blogPosts', 'en', 'Blog Posts', 'admin'),
('admin.featureFlags.filter.projects', 'en', 'Projects', 'admin'),
('admin.featureFlags.table.flagKey', 'en', 'Flag Key', 'admin'),
('admin.featureFlags.table.type', 'en', 'Type', 'admin'),
('admin.featureFlags.table.description', 'en', 'Description', 'admin'),
('admin.featureFlags.table.status', 'en', 'Status', 'admin'),
('admin.featureFlags.table.actions', 'en', 'Actions', 'admin'),
('admin.featureFlags.create', 'en', 'Create Feature Flag', 'admin'),
('admin.featureFlags.edit', 'en', 'Edit Feature Flag', 'admin'),
('admin.featureFlags.delete', 'en', 'Delete Feature Flag', 'admin'),
('admin.projects.title', 'en', 'Project Management', 'admin'),
('admin.projects.addTag', 'en', 'Add a tag', 'admin'),
('admin.skills.title', 'en', 'Skills Management', 'admin'),
('admin.education.title', 'en', 'Education Management', 'admin'),
('admin.education.additionalDetails', 'en', 'Additional details about the education', 'admin'),
('admin.experience.title', 'en', 'Experience Management', 'admin'),
('admin.experience.addAchievement', 'en', 'Add an achievement', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Forms & Validation
INSERT INTO public.translations (key, language, value, category) VALUES
('settings.validation.allPresent', 'en', 'All translations are present', 'settings'),
('settings.validation.noEmpty', 'en', 'No empty values found', 'settings'),
('settings.validation.totalIssues', 'en', 'Total issues', 'settings'),
('settings.validation.revalidate', 'en', 'Re-validate', 'settings'),
('settings.comparison.noChanges', 'en', 'No changes', 'settings'),
('settings.comparison.rearranged', 'en', 'Characters rearranged', 'settings'),
('admin.imageUpload.dragDrop', 'en', 'Drag and drop or click to upload', 'admin'),
('admin.imageUpload.fileTypes', 'en', 'JPEG, PNG, GIF, or WebP up to 5MB', 'admin'),
('admin.imageUpload.uploading', 'en', 'Uploading...', 'admin'),
('admin.imageUpload.removePreview', 'en', 'Remove preview', 'admin'),
('admin.markdown.help.keyboardShortcuts', 'en', 'Keyboard shortcuts: Ctrl+B (bold), Ctrl+I (italic), Ctrl+H (heading), Ctrl+K (link)', 'admin'),
('admin.markdown.help.textSize', 'en', 'Text size: Ctrl+= (increase), Ctrl+- (decrease), Ctrl+0 (reset)', 'admin'),
('admin.markdown.help.markdownSyntax', 'en', 'Markdown syntax: **bold**, *italic*, # heading, - list, > quote, `code`, [link](url), ![alt](url)', 'admin'),
('admin.markdown.help.imageUpload', 'en', 'Use the Image button in toolbar or drag-drop into image upload component', 'admin'),
('admin.markdown.togglePreview', 'en', 'Toggle Preview', 'admin'),
('admin.markdown.toggleFullscreen', 'en', 'Toggle Fullscreen', 'admin'),
('admin.markdown.copyShortcuts', 'en', 'Copy keyboard shortcuts', 'admin'),
('admin.form.placeholder.enterTranslation', 'en', 'Enter translation text', 'admin'),
('admin.form.placeholder.describeFlagControl', 'en', 'Describe what this flag controls', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Public Pages
INSERT INTO public.translations (key, language, value, category) VALUES
('pages.notFound.title', 'en', 'Page Not Found', 'pages'),
('pages.notFound.message', 'en', 'Oops! The page you''re looking for doesn''t exist. It might have been moved or deleted.', 'pages'),
('pages.notFound.goHome', 'en', 'Go Home', 'pages'),
('pages.notFound.goBack', 'en', 'Go Back', 'pages'),
('pages.notFound.popularPages', 'en', 'Popular Pages', 'pages'),
('pages.sectionUnavailable.title', 'en', 'Section Unavailable', 'pages'),
('pages.sectionUnavailable.message', 'en', 'This section is currently unavailable.', 'pages')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Author & Bio
INSERT INTO public.translations (key, language, value, category) VALUES
('author.name', 'en', 'Gor Papyan', 'author'),
('author.bio', 'en', 'Senior QA Engineer & Test Automation Specialist with expertise in Playwright, Selenium, and modern testing frameworks. Passionate about creating robust, maintainable test suites and sharing knowledge with the community.', 'author'),
('author.role', 'en', 'QA Engineer', 'author'),
('author.location', 'en', 'Remote', 'author'),
('author.experience', 'en', '5+ years experience', 'author'),
('author.initials', 'en', 'GP', 'author')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Blog Components
INSERT INTO public.translations (key, language, value, category) VALUES
('blog.toc.title', 'en', 'On this page', 'blog'),
('blog.tableOfContents', 'en', 'Table of Contents', 'blog'),
('blog.author', 'en', 'Author', 'blog'),
('blog.share', 'en', 'Share this article', 'blog')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Home Page Components
INSERT INTO public.translations (key, language, value, category) VALUES
('home.technologies.title', 'en', 'Technical Expertise', 'home'),
('home.technologies.proficiencyLevel', 'en', 'Proficiency Level', 'home')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Accessibility Labels
INSERT INTO public.translations (key, language, value, category) VALUES
('aria.openMenu', 'en', 'Open menu', 'aria'),
('aria.closeMenu', 'en', 'Close menu', 'aria'),
('aria.previousTechnology', 'en', 'Previous technology', 'aria'),
('aria.nextTechnology', 'en', 'Next technology', 'aria'),
('aria.closeNotification', 'en', 'Close notification', 'aria'),
('aria.tableOfContentsSidebar', 'en', 'Table of contents sidebar', 'aria'),
('aria.tableOfContents', 'en', 'Table of contents', 'aria'),
('aria.loadingImage', 'en', 'Loading image', 'aria'),
('aria.loadingTitle', 'en', 'Loading title', 'aria'),
('aria.loadingTag', 'en', 'Loading tag', 'aria')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Demo Pages (Optional)
INSERT INTO public.translations (key, language, value, category) VALUES
('demo.markdown.title', 'en', 'Enhanced Markdown Editor', 'demo'),
('demo.markdown.output', 'en', 'Rendered Output', 'demo')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;
```

---

## Summary

- **Total Keys:** ~100 new translation keys
- **Categories:** 10 (error, admin, auth, settings, pages, author, blog, home, aria, demo)
- **Priority:** Critical keys marked in audit report
- **Languages:** English provided, Russian and Armenian to be added later

---

## Next Steps

1. **Add keys to database:** Run the SQL script above
2. **Update components:** Replace hardcoded text with `t()` calls or `<TranslationText>`
3. **Test:** Verify all pages render correctly
4. **Translate:** Add RU and AM translations for all keys
5. **Document:** Update README with new translation key conventions
