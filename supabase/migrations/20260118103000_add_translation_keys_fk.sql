-- Add foreign key from translations.key to translation_keys.key

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'translations_key_fkey'
  ) THEN
    ALTER TABLE translations
      ADD CONSTRAINT translations_key_fkey
      FOREIGN KEY (key)
      REFERENCES translation_keys (key)
      ON UPDATE CASCADE
      ON DELETE RESTRICT;
  END IF;
END $$;
