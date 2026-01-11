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
('admin.blog.lastUpdated', 'en', 'Last updated', 'admin'),
('admin.blog.created', 'en', 'Created', 'admin'),
('admin.blog.createdOn', 'en', ' on ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Summary
-- Total new keys added: ~28
-- Categories: error, admin
-- Languages: English (EN) - Russian (RU) and Armenian (AM) can be added later
