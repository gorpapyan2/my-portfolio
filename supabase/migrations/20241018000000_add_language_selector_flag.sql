-- Add language_selector feature flag
-- This flag controls the visibility of the language selector in the header and mobile menu

INSERT INTO feature_flags (flag_key, content_type, description, enabled) 
VALUES ('language_selector', 'section', 'Controls visibility of the language selector in header and mobile menu', true)
ON CONFLICT (flag_key) DO NOTHING;

