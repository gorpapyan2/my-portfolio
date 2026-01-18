-- Add foreign key from translations.key to translation_keys.key

ALTER TABLE translations
  ADD CONSTRAINT translations_key_fkey
  FOREIGN KEY (key)
  REFERENCES translation_keys (key)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;
