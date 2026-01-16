-- Migration: Add missing translation keys for hardcoded text
-- Date: 2026-01-15
-- Description: Adds missing translation keys that are used in components but don't exist in database
-- This migration is idempotent (safe to run multiple times)

-- Error Screen (keys exist in add_hardcoded_text_translations.sql, but adding here for completeness)
INSERT INTO public.translations (key, language, value, category) VALUES
('error.unexpected.subtitle', 'en', 'Don''t worry, this happens sometimes. Please check your connection and try again.', 'error'),
('error.goHome', 'en', 'Go Home', 'error'),
('error.technicalDetails', 'en', 'Technical Details', 'error')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Blog Post Form
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.editPostTitle', 'en', 'Edit Blog Post', 'admin'),
('admin.blog.createPostTitle', 'en', 'Create New Blog Post', 'admin'),
('admin.blog.editPostSubtitle', 'en', 'Update your blog post content and settings', 'admin'),
('admin.blog.createPostSubtitle', 'en', 'Write and publish a new blog post', 'admin'),
('admin.blog.saving', 'en', 'Saving...', 'admin'),
('admin.blog.saved', 'en', 'Saved', 'admin'),
('admin.blog.savedAt', 'en', ' at ', 'admin'),
('admin.blog.basicInformation', 'en', 'Basic Information', 'admin'),
('admin.blog.titleLabel', 'en', 'Title *', 'admin'),
('admin.blog.titlePlaceholder', 'en', 'Enter blog post title...', 'admin'),
('admin.blog.slugLabel', 'en', 'URL Slug *', 'admin'),
('admin.blog.slugPlaceholder', 'en', 'url-friendly-slug', 'admin'),
('admin.blog.updatePost', 'en', 'Update Post', 'admin'),
('admin.blog.createPost', 'en', 'Create Post', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Image Upload
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.imageUpload.uploadInfo', 'en', 'Image will be uploaded to your blog and inserted as markdown: ![filename](url)', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Common Admin Actions
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.common.cancel', 'en', 'Cancel', 'admin'),
('admin.common.addFlag', 'en', 'Add Flag', 'admin'),
('admin.common.loading', 'en', 'Loading...', 'admin'),
('admin.common.title', 'en', 'Title', 'admin'),
('admin.common.orderIndex', 'en', 'Order Index', 'admin'),
('admin.common.close', 'en', 'Close', 'admin'),
('admin.common.language', 'en', 'Language:', 'admin'),
('admin.common.description', 'en', 'Description', 'admin'),
('admin.common.add', 'en', 'Add', 'admin'),
('admin.blog.lastUpdated', 'en', 'Last updated', 'admin'),
('admin.blog.created', 'en', 'Created', 'admin'),
('admin.blog.createdOn', 'en', ' on ', 'admin'),
('admin.blog.excerpt', 'en', 'Excerpt *', 'admin'),
('admin.blog.excerptPlaceholder', 'en', 'Write a brief description of your blog post...', 'admin'),
('admin.blog.content', 'en', 'Content', 'admin'),
('admin.blog.contentSectionTitle', 'en', 'Content', 'admin'),
('admin.blog.contentPlaceholder', 'en', 'Write your blog post content here... Use markdown formatting for better presentation.', 'admin'),
('admin.blog.mediaSettings', 'en', 'Media & Settings', 'admin'),
('admin.blog.mediaSettingsSectionTitle', 'en', 'Media & Settings', 'admin'),
('admin.blog.featuredImage', 'en', 'Featured Image', 'admin'),
('admin.blog.readTime', 'en', 'Read Time *', 'admin'),
('admin.blog.readTimeLabel', 'en', 'Read Time *', 'admin'),
('admin.blog.readTimePlaceholder', 'en', 'e.g., 5 min read', 'admin'),
('admin.blog.usingCustom', 'en', 'Using Custom', 'admin'),
('admin.blog.readTimeUsingCustom', 'en', 'Using Custom', 'admin'),
('admin.blog.autoClickOverride', 'en', 'Auto (Click to override)', 'admin'),
('admin.blog.readTimeAutoOverride', 'en', 'Auto (Click to override)', 'admin'),
('admin.blog.publicationStatus', 'en', 'Publication Status', 'admin'),
('admin.blog.publishImmediately', 'en', 'Publish immediately', 'admin'),
('admin.blog.public', 'en', 'Public', 'admin'),
('admin.blog.words', 'en', 'Words:', 'admin'),
('admin.blog.characters', 'en', 'Characters:', 'admin'),
('admin.blog.readingTime', 'en', 'Reading time:', 'admin'),
('admin.experience.role', 'en', 'Role', 'admin'),
('admin.experience.company', 'en', 'Company', 'admin'),
('admin.experience.period', 'en', 'Period', 'admin'),
('admin.experience.periodPlaceholder', 'en', 'e.g., Oct 2022 – Present', 'admin'),
('admin.experience.achievements', 'en', 'Achievements', 'admin'),
('admin.experience.addAchievement', 'en', 'Add an achievement', 'admin'),
('admin.education.degree', 'en', 'Degree', 'admin'),
('admin.education.degreePlaceholder', 'en', 'e.g., B.Sc. in Information Technology', 'admin'),
('admin.education.school', 'en', 'School', 'admin'),
('admin.education.schoolPlaceholder', 'en', 'e.g., National Polytechnic University of Armenia', 'admin'),
('admin.education.year', 'en', 'Year', 'admin'),
('admin.education.yearPlaceholder', 'en', 'e.g., Graduated May 2024', 'admin'),
('admin.projects.liveUrl', 'en', 'Live URL', 'admin'),
('admin.projects.githubUrl', 'en', 'GitHub URL', 'admin'),
('admin.projects.tags', 'en', 'Tags', 'admin'),
('admin.projects.addTagPlaceholder', 'en', 'Add a tag', 'admin'),
('admin.featureFlags.contentType', 'en', 'Content Type', 'admin'),
('admin.featureFlags.contentId', 'en', 'Content ID (Optional)', 'admin'),
('admin.featureFlags.searchPlaceholder', 'en', 'Search flags...', 'admin'),
('admin.featureFlags.flagKeyPlaceholder', 'en', 'e.g., blog_section', 'admin'),
('admin.featureFlags.contentIdPlaceholder', 'en', 'UUID for specific content item', 'admin'),
('admin.featureFlags.descriptionPlaceholder', 'en', 'Describe what this flag controls', 'admin'),
('admin.featureFlags.enabled', 'en', 'Enabled', 'admin'),
('admin.featureFlags.disabled', 'en', 'Disabled', 'admin'),
('admin.featureFlags.flagKey', 'en', 'Flag Key', 'admin'),
('admin.featureFlags.noFlagsFound', 'en', 'No feature flags found', 'admin'),
('admin.skills.icon', 'en', 'Icon', 'admin'),
('admin.skills.level', 'en', 'Level (0-100%)', 'admin'),
('admin.skills.updateSkill', 'en', 'Update Skill', 'admin'),
('admin.skills.createSkill', 'en', 'Create Skill', 'admin'),
('admin.skills.addSkill', 'en', 'Add Skill', 'admin'),
('admin.skills.titleCount', 'en', 'Skills', 'admin'),
('admin.skills.proficiency', 'en', 'Proficiency', 'admin'),
('admin.projects.featuredProject', 'en', 'Featured Project', 'admin'),
('admin.projects.updateProject', 'en', 'Update Project', 'admin'),
('admin.projects.createProject', 'en', 'Create Project', 'admin'),
('admin.projects.addProject', 'en', 'Add Project', 'admin'),
('admin.projects.titleCount', 'en', 'Projects', 'admin'),
('admin.experience.updateExperience', 'en', 'Update Experience', 'admin'),
('admin.experience.createExperience', 'en', 'Create Experience', 'admin'),
('admin.experience.addExperience', 'en', 'Add Experience', 'admin'),
('admin.experience.titleCount', 'en', 'Experiences', 'admin'),
('admin.experience.orderLabel', 'en', 'Order:', 'admin'),
('admin.experience.createdLabel', 'en', 'Created:', 'admin'),
('admin.experience.atLabel', 'en', ' at ', 'admin'),
('admin.education.updateEducation', 'en', 'Update Education', 'admin'),
('admin.education.createEducation', 'en', 'Create Education', 'admin'),
('admin.education.addEducation', 'en', 'Add Education', 'admin'),
('admin.education.titleCount', 'en', 'Education', 'admin'),
('admin.common.update', 'en', 'Update', 'admin'),
('admin.common.create', 'en', 'Create', 'admin'),
('admin.error.deleteFailed', 'en', 'Failed to delete', 'admin'),
('admin.error.saveFailed', 'en', 'Failed to save', 'admin'),
('admin.error.importFailed', 'en', 'Failed to import', 'admin'),
('admin.confirm.deleteSkill', 'en', 'Are you sure you want to delete this skill?', 'admin'),
('admin.confirm.deleteProject', 'en', 'Are you sure you want to delete this project?', 'admin'),
('admin.confirm.deleteExperience', 'en', 'Are you sure you want to delete this experience?', 'admin'),
('admin.confirm.deleteEducation', 'en', 'Are you sure you want to delete this education entry?', 'admin'),
('admin.confirm.deleteTranslation', 'en', 'Are you sure you want to delete this translation?', 'admin'),
('admin.confirm.deleteBlogPost', 'en', 'Are you sure you want to delete this blog post?', 'admin'),
('admin.confirm.deleteFeatureFlag', 'en', 'Are you sure you want to delete the feature flag', 'admin'),
('admin.confirm.deleteFeatureFlagAction', 'en', 'This action cannot be undone.', 'admin'),
('admin.featureFlags.deleteButton', 'en', 'Delete', 'admin'),
('admin.skills.proficiency', 'en', 'Proficiency', 'admin'),
('blog.dateUnavailable', 'en', 'Date unavailable', 'blog'),
('blog.unknownDate', 'en', 'Unknown date', 'blog'),
('markdown.copyCode', 'en', 'Copy code', 'markdown'),
('markdown.copied', 'en', 'Copied!', 'markdown'),
('admin.blog.published', 'en', 'Published', 'admin'),
('admin.blog.draft', 'en', 'Draft', 'admin'),
('admin.blog.slugRequired', 'en', 'Slug is required', 'admin'),
('admin.blog.slugFormatError', 'en', 'Slug must be lowercase alphanumeric with hyphens', 'admin'),
('admin.blog.slugAvailable', 'en', 'Slug is available', 'admin'),
('admin.blog.slugExists', 'en', 'Slug already exists', 'admin'),
('admin.blog.slugValidationError', 'en', 'Could not validate slug', 'admin'),
('admin.translations.editTranslation', 'en', 'Edit Translation', 'admin'),
('admin.translations.addTranslation', 'en', 'Add Translation', 'admin'),
('admin.translations.language', 'en', 'Language', 'admin'),
('admin.translations.key', 'en', 'Key *', 'admin'),
('admin.translations.category', 'en', 'Category *', 'admin'),
('admin.translations.value', 'en', 'Value *', 'admin'),
('admin.translations.keyPlaceholder', 'en', 'e.g., hero.title', 'admin'),
('admin.translations.categoryPlaceholder', 'en', 'e.g., hero', 'admin'),
('admin.translations.valuePlaceholder', 'en', 'Enter translation text', 'admin'),
('admin.translations.allFieldsRequired', 'en', 'All fields are required', 'admin'),
('admin.translations.saveFailed', 'en', 'Failed to save translation', 'admin'),
('admin.translations.saving', 'en', 'Saving...', 'admin'),
('admin.translations.save', 'en', 'Save', 'admin'),
('admin.translations.noTranslationsFound', 'en', 'No translations found', 'admin'),
('admin.translations.actions', 'en', 'Actions', 'admin'),
('admin.translations.empty', 'en', 'Empty', 'admin'),
('settings.export', 'en', 'Export', 'settings'),
('settings.import', 'en', 'Import', 'settings'),
('settings.importFailed', 'en', 'Import failed: Invalid JSON format or validation failed', 'settings'),
('settings.importDuplicate', 'en', 'One or more translations already exist. Existing translations will be updated with the new values.', 'settings'),
('settings.importInvalidJson', 'en', 'Invalid JSON format. Please check your file and try again.', 'settings'),
('settings.importValidationFailed', 'en', 'Validation failed. Ensure file follows the template format with "en", "ru", "am" language keys.', 'settings')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Hero Section
INSERT INTO public.translations (key, language, value, category) VALUES
('hero.ctaWork', 'en', 'View Work', 'hero'),
('hero.ctaContact', 'en', 'Contact Me', 'hero'),
('hero.scrollDown', 'en', 'Scroll Down', 'hero')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Loading Messages
INSERT INTO public.translations (key, language, value, category) VALUES
('loading.welcome', 'en', 'Welcome! Getting everything ready for you...', 'common'),
('loading.settingUp', 'en', 'Just a moment, we''re setting things up...', 'common'),
('loading.preparing', 'en', 'Almost ready! Preparing your experience...', 'common'),
('loading.patience', 'en', 'Thanks for your patience...', 'common'),
('loading.loadingLanguage', 'en', 'Please wait while we load your preferred language...', 'common'),
('loading.moment', 'en', 'Just a moment, please...', 'common'),
('loading.almostReady', 'en', 'Almost ready!', 'common'),
('loading.gettingReady', 'en', 'Getting things ready for you...', 'common')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Share Button
INSERT INTO public.translations (key, language, value, category) VALUES
('share.title', 'en', 'Share this article', 'common'),
('share.share', 'en', 'Share', 'common'),
('share.twitter', 'en', 'Twitter', 'common'),
('share.linkedin', 'en', 'LinkedIn', 'common'),
('share.copyLink', 'en', 'Copy Link', 'common'),
('share.copied', 'en', 'Copied!', 'common'),
('share.checkOutArticle', 'en', 'Check out this article: {title}', 'common')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Markdown Editor
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.markdown.decreaseTextSize', 'en', 'Decrease Text Size (Ctrl+-)', 'admin'),
('admin.markdown.increaseTextSize', 'en', 'Increase Text Size (Ctrl+=)', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Mobile Menu
INSERT INTO public.translations (key, language, value, category) VALUES
('mobile.menu', 'en', 'Menu', 'nav')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Pages
INSERT INTO public.translations (key, language, value, category) VALUES
('pages.about.ariaLabel', 'en', 'About page', 'pages')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Summary
-- Total new keys added: ~138
-- Categories: error, admin, settings, hero, common, nav, pages
-- Languages: English (EN) - Russian (RU) and Armenian (AM) can be added later
