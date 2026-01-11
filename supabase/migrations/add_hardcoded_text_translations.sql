-- Migration: Add translation keys for hardcoded text
-- Date: 2026-01-11
-- Description: Adds ~100 translation keys to eliminate all hardcoded English text
-- This migration is idempotent (safe to run multiple times)

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
('admin.dashboard.section.blog', 'en', 'Blog Posts', 'admin'),
('admin.dashboard.section.projects', 'en', 'Projects', 'admin'),
('admin.dashboard.section.translations', 'en', 'Translations', 'admin'),
('admin.dashboard.section.experiences', 'en', 'Experience', 'admin'),
('admin.dashboard.section.education', 'en', 'Education', 'admin'),
('admin.dashboard.section.skills', 'en', 'Skills', 'admin'),
('admin.dashboard.section.featureFlags', 'en', 'Feature Flags', 'admin'),
('admin.blog.title', 'en', 'Blog Management', 'admin'),
('admin.blog.postsTitle', 'en', 'Blog Posts', 'admin'),
('admin.blog.subtitle', 'en', 'Manage your blog content and publications', 'admin'),
('admin.blog.noPosts', 'en', 'No blog posts yet', 'admin'),
('admin.blog.getStarted', 'en', 'Get started by creating your first blog post', 'admin'),
('admin.blog.addNew', 'en', 'Add New Post', 'admin'),
('admin.blog.createFirst', 'en', 'Create First Post', 'admin'),
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
('admin.markdown.help.imageUpload', 'en', 'Image upload: Use the Image button in toolbar or drag-drop into image upload component', 'admin'),
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

-- Accessibility Labels (Optional - can be kept in English for screen readers)
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

-- Summary
-- Total keys added: ~100
-- Categories: error, admin, auth, settings, pages, author, blog, home, aria
-- Languages: English (EN) - Russian (RU) and Armenian (AM) to be added later
