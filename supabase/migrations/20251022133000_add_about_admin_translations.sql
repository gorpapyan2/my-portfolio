-- Add missing admin/about localization keys for new About content tooling
INSERT INTO translations (key, language, value, category) VALUES
  ('admin.dashboard.section.about', 'en', 'About Content', 'admin'),
  ('admin.dashboard.section.about', 'ru', 'About Content', 'admin'),
  ('admin.dashboard.section.about', 'am', 'About Content', 'admin'),

  ('admin.about.title', 'en', 'About Content', 'admin'),
  ('admin.about.title', 'ru', 'About Content', 'admin'),
  ('admin.about.title', 'am', 'About Content', 'admin'),

  ('admin.about.languageName', 'en', 'Language name', 'admin'),
  ('admin.about.languageName', 'ru', 'Language name', 'admin'),
  ('admin.about.languageName', 'am', 'Language name', 'admin'),

  ('admin.about.languageLevel', 'en', 'Proficiency level', 'admin'),
  ('admin.about.languageLevel', 'ru', 'Proficiency level', 'admin'),
  ('admin.about.languageLevel', 'am', 'Proficiency level', 'admin'),

  ('admin.common.language', 'en', 'Language', 'admin'),
  ('admin.common.language', 'ru', 'Language', 'admin'),
  ('admin.common.language', 'am', 'Language', 'admin'),

  ('admin.common.addNew', 'en', 'Add new', 'admin'),
  ('admin.common.addNew', 'ru', 'Add new', 'admin'),
  ('admin.common.addNew', 'am', 'Add new', 'admin'),

  ('about.fallback.journey', 'en', 'Add your professional journey highlights.', 'about'),
  ('about.fallback.journey', 'ru', 'Add your professional journey highlights.', 'about'),
  ('about.fallback.journey', 'am', 'Add your professional journey highlights.', 'about'),

  ('about.fallback.philosophy', 'en', 'Share your guiding principles.', 'about'),
  ('about.fallback.philosophy', 'ru', 'Share your guiding principles.', 'about'),
  ('about.fallback.philosophy', 'am', 'Share your guiding principles.', 'about'),

  ('about.fallback.toolbox', 'en', 'Add tools you use.', 'about'),
  ('about.fallback.toolbox', 'ru', 'Add tools you use.', 'about'),
  ('about.fallback.toolbox', 'am', 'Add tools you use.', 'about'),

  ('about.fallback.error', 'en', 'About content unavailable.', 'about'),
  ('about.fallback.error', 'ru', 'About content unavailable.', 'about'),
  ('about.fallback.error', 'am', 'About content unavailable.', 'about')
ON CONFLICT (key, language) DO UPDATE
  SET value = EXCLUDED.value,
      category = EXCLUDED.category;
