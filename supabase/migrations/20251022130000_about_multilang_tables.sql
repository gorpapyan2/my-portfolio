-- About content sections with translations per language
create table if not exists public.about_professional_journey (
  id uuid primary key default gen_random_uuid(),
  order_index integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.about_professional_journey_translations (
  id uuid primary key default gen_random_uuid(),
  journey_id uuid not null references public.about_professional_journey(id) on delete cascade,
  language text not null,
  text text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (journey_id, language)
);

create table if not exists public.about_philosophy (
  id uuid primary key default gen_random_uuid(),
  order_index integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.about_philosophy_translations (
  id uuid primary key default gen_random_uuid(),
  philosophy_id uuid not null references public.about_philosophy(id) on delete cascade,
  language text not null,
  text text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (philosophy_id, language)
);

create table if not exists public.about_toolbox_items (
  id uuid primary key default gen_random_uuid(),
  order_index integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.about_toolbox_translations (
  id uuid primary key default gen_random_uuid(),
  toolbox_item_id uuid not null references public.about_toolbox_items(id) on delete cascade,
  language text not null,
  label text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (toolbox_item_id, language)
);

create table if not exists public.about_key_results (
  id uuid primary key default gen_random_uuid(),
  order_index integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.about_key_result_translations (
  id uuid primary key default gen_random_uuid(),
  key_result_id uuid not null references public.about_key_results(id) on delete cascade,
  language text not null,
  summary text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (key_result_id, language)
);

create table if not exists public.about_languages (
  id uuid primary key default gen_random_uuid(),
  order_index integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.about_language_translations (
  id uuid primary key default gen_random_uuid(),
  about_language_id uuid not null references public.about_languages(id) on delete cascade,
  language text not null,
  name text not null,
  level text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (about_language_id, language)
);

-- Translations for existing tables
create table if not exists public.education_translations (
  id uuid primary key default gen_random_uuid(),
  education_id uuid not null references public.education(id) on delete cascade,
  language text not null,
  degree text not null,
  school text not null,
  year text not null,
  description text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (education_id, language)
);

create table if not exists public.experience_translations (
  id uuid primary key default gen_random_uuid(),
  experience_id uuid not null references public.experiences(id) on delete cascade,
  language text not null,
  role text not null,
  company text not null,
  period text not null,
  description text not null,
  achievements text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (experience_id, language)
);

create table if not exists public.skill_translations (
  id uuid primary key default gen_random_uuid(),
  skill_id uuid not null references public.skills(id) on delete cascade,
  language text not null,
  title text not null,
  description text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (skill_id, language)
);

-- Indexes to speed up per-language lookups
create index if not exists about_professional_journey_order_idx on public.about_professional_journey (order_index);
create index if not exists about_philosophy_order_idx on public.about_philosophy (order_index);
create index if not exists about_toolbox_order_idx on public.about_toolbox_items (order_index);
create index if not exists about_key_results_order_idx on public.about_key_results (order_index);
create index if not exists about_languages_order_idx on public.about_languages (order_index);
create index if not exists education_translations_lang_idx on public.education_translations (language);
create index if not exists experience_translations_lang_idx on public.experience_translations (language);
create index if not exists skill_translations_lang_idx on public.skill_translations (language);

-- RLS for public read and authenticated management
alter table public.about_professional_journey enable row level security;
alter table public.about_professional_journey_translations enable row level security;
alter table public.about_philosophy enable row level security;
alter table public.about_philosophy_translations enable row level security;
alter table public.about_toolbox_items enable row level security;
alter table public.about_toolbox_translations enable row level security;
alter table public.about_key_results enable row level security;
alter table public.about_key_result_translations enable row level security;
alter table public.about_languages enable row level security;
alter table public.about_language_translations enable row level security;
alter table public.education_translations enable row level security;
alter table public.experience_translations enable row level security;
alter table public.skill_translations enable row level security;

create policy "Public read about professional journey"
  on public.about_professional_journey
  for select
  to anon
  using (true);

create policy "Public read about professional journey translations"
  on public.about_professional_journey_translations
  for select
  to anon
  using (true);

create policy "Public read about philosophy"
  on public.about_philosophy
  for select
  to anon
  using (true);

create policy "Public read about philosophy translations"
  on public.about_philosophy_translations
  for select
  to anon
  using (true);

create policy "Public read about toolbox"
  on public.about_toolbox_items
  for select
  to anon
  using (true);

create policy "Public read about toolbox translations"
  on public.about_toolbox_translations
  for select
  to anon
  using (true);

create policy "Public read about key results"
  on public.about_key_results
  for select
  to anon
  using (true);

create policy "Public read about key result translations"
  on public.about_key_result_translations
  for select
  to anon
  using (true);

create policy "Public read about languages"
  on public.about_languages
  for select
  to anon
  using (true);

create policy "Public read about language translations"
  on public.about_language_translations
  for select
  to anon
  using (true);

create policy "Public read education translations"
  on public.education_translations
  for select
  to anon
  using (true);

create policy "Public read experience translations"
  on public.experience_translations
  for select
  to anon
  using (true);

create policy "Public read skill translations"
  on public.skill_translations
  for select
  to anon
  using (true);

create policy "Authenticated manage about professional journey"
  on public.about_professional_journey
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage about professional journey translations"
  on public.about_professional_journey_translations
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage about philosophy"
  on public.about_philosophy
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage about philosophy translations"
  on public.about_philosophy_translations
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage about toolbox"
  on public.about_toolbox_items
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage about toolbox translations"
  on public.about_toolbox_translations
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage about key results"
  on public.about_key_results
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage about key result translations"
  on public.about_key_result_translations
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage about languages"
  on public.about_languages
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage about language translations"
  on public.about_language_translations
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage education translations"
  on public.education_translations
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage experience translations"
  on public.experience_translations
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated manage skill translations"
  on public.skill_translations
  for all
  to authenticated
  using (true)
  with check (true);
