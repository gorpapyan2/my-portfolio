-- Translation keys table migration
-- Adds canonical list of translation keys for detecting missing languages

CREATE TABLE IF NOT EXISTS translation_keys (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL DEFAULT 'common',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_translation_keys_key ON translation_keys(key);
CREATE INDEX IF NOT EXISTS idx_translation_keys_category ON translation_keys(category);

ALTER TABLE translation_keys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for translation_keys" ON translation_keys
  FOR SELECT USING (true);

CREATE POLICY "Authenticated write access for translation_keys" ON translation_keys
  FOR ALL USING (auth.role() = 'authenticated');

CREATE TRIGGER update_translation_keys_updated_at
  BEFORE UPDATE ON translation_keys
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE FUNCTION sync_translation_key()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO translation_keys (key, category)
  VALUES (NEW.key, COALESCE(NEW.category, 'common'))
  ON CONFLICT (key) DO UPDATE
    SET category = EXCLUDED.category,
        updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS sync_translation_keys ON translations;
CREATE TRIGGER sync_translation_keys
  AFTER INSERT OR UPDATE OF key, category ON translations
  FOR EACH ROW
  EXECUTE FUNCTION sync_translation_key();

INSERT INTO translation_keys (key, category)
SELECT key, MAX(category) AS category
FROM translations
GROUP BY key
ON CONFLICT (key) DO UPDATE
  SET category = EXCLUDED.category,
      updated_at = NOW();

ALTER TABLE translations
  ADD CONSTRAINT translations_key_fkey
  FOREIGN KEY (key)
  REFERENCES translation_keys (key)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;
