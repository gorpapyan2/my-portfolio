create table if not exists public.site_assets (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  url text not null,
  storage_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists site_assets_key_idx on public.site_assets (key);

alter table public.site_assets enable row level security;

create policy "Public read site assets"
  on public.site_assets
  for select
  to anon
  using (true);

create policy "Authenticated manage site assets"
  on public.site_assets
  for all
  to authenticated
  using (true)
  with check (true);
