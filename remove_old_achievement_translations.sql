-- Remove old achievement translations for zealous experience
-- This will allow the page to use the achievements from the experiences table instead

-- First, let's see what translation keys exist for zealous achievements
SELECT key, language, value 
FROM translations 
WHERE key LIKE 'experience.zealous.achievements%'
ORDER BY key, language;

-- Delete all old achievement translations for zealous
DELETE FROM translations 
WHERE key LIKE 'experience.zealous.achievements%';

-- Verify they're gone
SELECT key, language 
FROM translations 
WHERE key LIKE 'experience.zealous.achievements%';

-- Expected result: 0 rows (empty result means success)

