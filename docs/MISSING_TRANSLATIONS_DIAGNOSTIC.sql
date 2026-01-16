-- Diagnostic Query: Find Missing Translations
-- Run this in Supabase SQL Editor to identify which keys are missing RU/AM translations

-- 1. Find all keys that have EN but missing RU or AM
SELECT
    key,
    category,
    COUNT(CASE WHEN language = 'en' THEN 1 END) as has_en,
    COUNT(CASE WHEN language = 'ru' THEN 1 END) as has_ru,
    COUNT(CASE WHEN language = 'am' THEN 1 END) as has_am
FROM translations
WHERE category = 'admin'
GROUP BY key, category
HAVING
    COUNT(CASE WHEN language = 'en' THEN 1 END) = 1
    AND (
        COUNT(CASE WHEN language = 'ru' THEN 1 END) = 0
        OR COUNT(CASE WHEN language = 'am' THEN 1 END) = 0
    )
ORDER BY key;

-- 2. Count missing translations by pattern
SELECT
    SPLIT_PART(key, '.', 1) || '.' || SPLIT_PART(key, '.', 2) as key_prefix,
    COUNT(*) as missing_count
FROM (
    SELECT key
    FROM translations
    WHERE category = 'admin' AND language = 'en'
    AND key NOT IN (
        SELECT key FROM translations WHERE language = 'ru'
    )
) as missing_keys
GROUP BY key_prefix
ORDER BY missing_count DESC;

-- 3. List exact keys missing RU translations
SELECT key
FROM translations
WHERE category = 'admin' AND language = 'en'
AND key NOT IN (
    SELECT key FROM translations WHERE language = 'ru'
)
ORDER BY key;

-- 4. List exact keys missing AM translations
SELECT key
FROM translations
WHERE category = 'admin' AND language = 'en'
AND key NOT IN (
    SELECT key FROM translations WHERE language = 'am'
)
ORDER BY key;
