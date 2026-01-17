-- Public read access for about translations
alter table public.translations enable row level security;

create policy "Public read translations"
  on public.translations
  for select
  to anon
  using (true);

create index if not exists translations_cat_key_lang_idx
  on public.translations (category, key, language);
