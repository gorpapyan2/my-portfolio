-- Seed full profile data for About + Experience + Education + Skills
-- Idempotent: fixed UUIDs + upserts

BEGIN;

-- ---------------------------------------------------------------------------
-- Translation keys (required for translations FK)
-- ---------------------------------------------------------------------------
INSERT INTO public.translation_keys (key, category) VALUES
  ('about.summary.1', 'about'),
  ('about.summary.2', 'about'),
  ('about.summary.3', 'about'),
  ('about.keyResults.1', 'about'),
  ('about.keyResults.2', 'about'),
  ('about.keyResults.3', 'about'),
  ('about.languages.1', 'about'),
  ('about.languages.2', 'about'),
  ('about.languages.3', 'about')
ON CONFLICT (key) DO UPDATE SET
  category = EXCLUDED.category,
  updated_at = NOW();

-- ---------------------------------------------------------------------------
-- Translations: Professional Summary, Key Results, Languages (EN + RU/AM duplicates)
-- ---------------------------------------------------------------------------
INSERT INTO public.translations (key, language, value, category) VALUES
  ('about.summary.1', 'en', 'QA Automation Engineer with 4+ years building and scaling UI/API automation in microservice environments.', 'about'),
  ('about.summary.1', 'ru', 'QA Automation Engineer with 4+ years building and scaling UI/API automation in microservice environments.', 'about'),
  ('about.summary.1', 'am', 'QA Automation Engineer with 4+ years building and scaling UI/API automation in microservice environments.', 'about'),

  ('about.summary.2', 'en', 'Deep Playwright (TypeScript) expertise with deterministic testing, data isolation, and CI/CD optimization in AWS CodeBuild.', 'about'),
  ('about.summary.2', 'ru', 'Deep Playwright (TypeScript) expertise with deterministic testing, data isolation, and CI/CD optimization in AWS CodeBuild.', 'about'),
  ('about.summary.2', 'am', 'Deep Playwright (TypeScript) expertise with deterministic testing, data isolation, and CI/CD optimization in AWS CodeBuild.', 'about'),

  ('about.summary.3', 'en', 'Experienced in event-driven validation (Kafka), service virtualization, and mentoring engineers to raise quality standards.', 'about'),
  ('about.summary.3', 'ru', 'Experienced in event-driven validation (Kafka), service virtualization, and mentoring engineers to raise quality standards.', 'about'),
  ('about.summary.3', 'am', 'Experienced in event-driven validation (Kafka), service virtualization, and mentoring engineers to raise quality standards.', 'about'),

  ('about.keyResults.1', 'en', 'Reduced manual regression effort by 40%, freeing 15+ hours per month for exploratory testing and feature work.', 'about'),
  ('about.keyResults.1', 'ru', 'Reduced manual regression effort by 40%, freeing 15+ hours per month for exploratory testing and feature work.', 'about'),
  ('about.keyResults.1', 'am', 'Reduced manual regression effort by 40%, freeing 15+ hours per month for exploratory testing and feature work.', 'about'),

  ('about.keyResults.2', 'en', 'Decreased critical flaky test rate by 70% by standardizing test data management and enforcing isolation/cleanup patterns.', 'about'),
  ('about.keyResults.2', 'ru', 'Decreased critical flaky test rate by 70% by standardizing test data management and enforcing isolation/cleanup patterns.', 'about'),
  ('about.keyResults.2', 'am', 'Decreased critical flaky test rate by 70% by standardizing test data management and enforcing isolation/cleanup patterns.', 'about'),

  ('about.keyResults.3', 'en', 'Cut average build-to-deploy time by 35% by introducing sharding and parallel workers in AWS CodeBuild.', 'about'),
  ('about.keyResults.3', 'ru', 'Cut average build-to-deploy time by 35% by introducing sharding and parallel workers in AWS CodeBuild.', 'about'),
  ('about.keyResults.3', 'am', 'Cut average build-to-deploy time by 35% by introducing sharding and parallel workers in AWS CodeBuild.', 'about'),

  ('about.languages.1', 'en', 'Armenian (Native)', 'about'),
  ('about.languages.1', 'ru', 'Armenian (Native)', 'about'),
  ('about.languages.1', 'am', 'Armenian (Native)', 'about'),

  ('about.languages.2', 'en', 'Russian (Proficient)', 'about'),
  ('about.languages.2', 'ru', 'Russian (Proficient)', 'about'),
  ('about.languages.2', 'am', 'Russian (Proficient)', 'about'),

  ('about.languages.3', 'en', 'English (Intermediate)', 'about'),
  ('about.languages.3', 'ru', 'English (Intermediate)', 'about'),
  ('about.languages.3', 'am', 'English (Intermediate)', 'about')
ON CONFLICT (key, language) DO UPDATE SET
  value = EXCLUDED.value,
  category = EXCLUDED.category,
  updated_at = NOW();

-- ---------------------------------------------------------------------------
-- About: Professional Journey
-- ---------------------------------------------------------------------------
INSERT INTO public.about_professional_journey (id, order_index) VALUES
  ('01be597c-d14c-4333-a6ad-05c7d7ff5784', 1),
  ('413a5f32-d5f3-434b-a4e9-6f7520d8ebd3', 2),
  ('2f9a3b2d-24d5-4e39-83a1-d2875cece700', 3)
ON CONFLICT (id) DO UPDATE SET
  order_index = EXCLUDED.order_index,
  updated_at = NOW();

INSERT INTO public.about_professional_journey_translations (journey_id, language, text) VALUES
  ('01be597c-d14c-4333-a6ad-05c7d7ff5784', 'en', 'QA Automation Engineer with 4+ years building and scaling UI/API automation in microservice environments, with Playwright (TypeScript) as the core stack and strong test architecture patterns (POM, fixtures, workflow drivers).'),
  ('01be597c-d14c-4333-a6ad-05c7d7ff5784', 'ru', 'QA Automation Engineer with 4+ years building and scaling UI/API automation in microservice environments, with Playwright (TypeScript) as the core stack and strong test architecture patterns (POM, fixtures, workflow drivers).'),
  ('01be597c-d14c-4333-a6ad-05c7d7ff5784', 'am', 'QA Automation Engineer with 4+ years building and scaling UI/API automation in microservice environments, with Playwright (TypeScript) as the core stack and strong test architecture patterns (POM, fixtures, workflow drivers).'),

  ('413a5f32-d5f3-434b-a4e9-6f7520d8ebd3', 'en', 'At zealous (Oct 2022 - Present), own the Playwright framework and quality strategy, driving stability through deterministic setup, data isolation/cleanup, and service virtualization for reliable release gates.'),
  ('413a5f32-d5f3-434b-a4e9-6f7520d8ebd3', 'ru', 'At zealous (Oct 2022 - Present), own the Playwright framework and quality strategy, driving stability through deterministic setup, data isolation/cleanup, and service virtualization for reliable release gates.'),
  ('413a5f32-d5f3-434b-a4e9-6f7520d8ebd3', 'am', 'At zealous (Oct 2022 - Present), own the Playwright framework and quality strategy, driving stability through deterministic setup, data isolation/cleanup, and service virtualization for reliable release gates.'),

  ('2f9a3b2d-24d5-4e39-83a1-d2875cece700', 'en', 'Deliver CI acceleration and confidence by adding Kafka-based event validations, OpenSearch enrichment checks, and parallelized CodeBuild pipelines.'),
  ('2f9a3b2d-24d5-4e39-83a1-d2875cece700', 'ru', 'Deliver CI acceleration and confidence by adding Kafka-based event validations, OpenSearch enrichment checks, and parallelized CodeBuild pipelines.'),
  ('2f9a3b2d-24d5-4e39-83a1-d2875cece700', 'am', 'Deliver CI acceleration and confidence by adding Kafka-based event validations, OpenSearch enrichment checks, and parallelized CodeBuild pipelines.')
ON CONFLICT (journey_id, language) DO UPDATE SET
  text = EXCLUDED.text,
  updated_at = NOW();

-- ---------------------------------------------------------------------------
-- About: Philosophy
-- ---------------------------------------------------------------------------
INSERT INTO public.about_philosophy (id, order_index) VALUES
  ('c8731b7d-33d9-4f00-97eb-9640eb390815', 1),
  ('59003b4e-5f99-42f7-b945-54fcac7b2187', 2)
ON CONFLICT (id) DO UPDATE SET
  order_index = EXCLUDED.order_index,
  updated_at = NOW();

INSERT INTO public.about_philosophy_translations (philosophy_id, language, text) VALUES
  ('c8731b7d-33d9-4f00-97eb-9640eb390815', 'en', 'Quality is an accelerator: reliable tests are design assets that make delivery faster. Every test should be deterministic, readable, and actionable.'),
  ('c8731b7d-33d9-4f00-97eb-9640eb390815', 'ru', 'Quality is an accelerator: reliable tests are design assets that make delivery faster. Every test should be deterministic, readable, and actionable.'),
  ('c8731b7d-33d9-4f00-97eb-9640eb390815', 'am', 'Quality is an accelerator: reliable tests are design assets that make delivery faster. Every test should be deterministic, readable, and actionable.'),

  ('59003b4e-5f99-42f7-b945-54fcac7b2187', 'en', 'I balance speed and rigor by focusing on high-signal coverage, resilient data handling, and fast failure visibility via logs, traces, and metrics.'),
  ('59003b4e-5f99-42f7-b945-54fcac7b2187', 'ru', 'I balance speed and rigor by focusing on high-signal coverage, resilient data handling, and fast failure visibility via logs, traces, and metrics.'),
  ('59003b4e-5f99-42f7-b945-54fcac7b2187', 'am', 'I balance speed and rigor by focusing on high-signal coverage, resilient data handling, and fast failure visibility via logs, traces, and metrics.')
ON CONFLICT (philosophy_id, language) DO UPDATE SET
  text = EXCLUDED.text,
  updated_at = NOW();

-- ---------------------------------------------------------------------------
-- About: Toolbox
-- ---------------------------------------------------------------------------
INSERT INTO public.about_toolbox_items (id, order_index) VALUES
  ('8ba59095-33bb-4f7a-874a-100dda549c2f', 1),
  ('f8d96cdc-3fe6-4ae2-ada5-c698b99e2480', 2),
  ('9a90b032-6100-4a10-b577-c1420556dbe0', 3),
  ('425484ce-9588-4d06-b691-a4c50ff90ff8', 4),
  ('209fca11-6f73-4a5e-a958-1cf7791c63e9', 5),
  ('4f11cbc6-b9e7-42fb-984f-1e97098a2df5', 6),
  ('67d8ddf3-58f7-4310-b1ae-4ebd7b5f87d7', 7),
  ('be97885c-0dd8-4849-8105-3cf1c2c19622', 8),
  ('e62cc7d7-bc80-4476-98a3-fcfb08651614', 9),
  ('14426b50-4ca8-476c-b042-4dd335606a15', 10),
  ('74954094-bfcb-4dfa-8b71-502e0700d5f4', 11),
  ('89f26fd9-49ca-4073-bd7a-222940455c55', 12),
  ('40e8b805-a37d-4096-9f31-8cc3b3db678d', 13)
ON CONFLICT (id) DO UPDATE SET
  order_index = EXCLUDED.order_index,
  updated_at = NOW();

INSERT INTO public.about_toolbox_translations (toolbox_item_id, language, label) VALUES
  ('8ba59095-33bb-4f7a-874a-100dda549c2f', 'en', 'Playwright (TypeScript)'),
  ('8ba59095-33bb-4f7a-874a-100dda549c2f', 'ru', 'Playwright (TypeScript)'),
  ('8ba59095-33bb-4f7a-874a-100dda549c2f', 'am', 'Playwright (TypeScript)'),

  ('f8d96cdc-3fe6-4ae2-ada5-c698b99e2480', 'en', 'PyTest (Python)'),
  ('f8d96cdc-3fe6-4ae2-ada5-c698b99e2480', 'ru', 'PyTest (Python)'),
  ('f8d96cdc-3fe6-4ae2-ada5-c698b99e2480', 'am', 'PyTest (Python)'),

  ('9a90b032-6100-4a10-b577-c1420556dbe0', 'en', 'XCUITest (Swift)'),
  ('9a90b032-6100-4a10-b577-c1420556dbe0', 'ru', 'XCUITest (Swift)'),
  ('9a90b032-6100-4a10-b577-c1420556dbe0', 'am', 'XCUITest (Swift)'),

  ('425484ce-9588-4d06-b691-a4c50ff90ff8', 'en', 'AWS CodeBuild'),
  ('425484ce-9588-4d06-b691-a4c50ff90ff8', 'ru', 'AWS CodeBuild'),
  ('425484ce-9588-4d06-b691-a4c50ff90ff8', 'am', 'AWS CodeBuild'),

  ('209fca11-6f73-4a5e-a958-1cf7791c63e9', 'en', 'AWS CodeArtifact'),
  ('209fca11-6f73-4a5e-a958-1cf7791c63e9', 'ru', 'AWS CodeArtifact'),
  ('209fca11-6f73-4a5e-a958-1cf7791c63e9', 'am', 'AWS CodeArtifact'),

  ('4f11cbc6-b9e7-42fb-984f-1e97098a2df5', 'en', 'Kafka'),
  ('4f11cbc6-b9e7-42fb-984f-1e97098a2df5', 'ru', 'Kafka'),
  ('4f11cbc6-b9e7-42fb-984f-1e97098a2df5', 'am', 'Kafka'),

  ('67d8ddf3-58f7-4310-b1ae-4ebd7b5f87d7', 'en', 'Kubernetes (K8S)'),
  ('67d8ddf3-58f7-4310-b1ae-4ebd7b5f87d7', 'ru', 'Kubernetes (K8S)'),
  ('67d8ddf3-58f7-4310-b1ae-4ebd7b5f87d7', 'am', 'Kubernetes (K8S)'),

  ('be97885c-0dd8-4849-8105-3cf1c2c19622', 'en', 'Datadog'),
  ('be97885c-0dd8-4849-8105-3cf1c2c19622', 'ru', 'Datadog'),
  ('be97885c-0dd8-4849-8105-3cf1c2c19622', 'am', 'Datadog'),

  ('e62cc7d7-bc80-4476-98a3-fcfb08651614', 'en', 'Mountebank'),
  ('e62cc7d7-bc80-4476-98a3-fcfb08651614', 'ru', 'Mountebank'),
  ('e62cc7d7-bc80-4476-98a3-fcfb08651614', 'am', 'Mountebank'),

  ('14426b50-4ca8-476c-b042-4dd335606a15', 'en', 'PostgreSQL'),
  ('14426b50-4ca8-476c-b042-4dd335606a15', 'ru', 'PostgreSQL'),
  ('14426b50-4ca8-476c-b042-4dd335606a15', 'am', 'PostgreSQL'),

  ('74954094-bfcb-4dfa-8b71-502e0700d5f4', 'en', 'Postman'),
  ('74954094-bfcb-4dfa-8b71-502e0700d5f4', 'ru', 'Postman'),
  ('74954094-bfcb-4dfa-8b71-502e0700d5f4', 'am', 'Postman'),

  ('89f26fd9-49ca-4073-bd7a-222940455c55', 'en', 'Charles Proxy'),
  ('89f26fd9-49ca-4073-bd7a-222940455c55', 'ru', 'Charles Proxy'),
  ('89f26fd9-49ca-4073-bd7a-222940455c55', 'am', 'Charles Proxy'),

  ('40e8b805-a37d-4096-9f31-8cc3b3db678d', 'en', 'REST/HTTP APIs'),
  ('40e8b805-a37d-4096-9f31-8cc3b3db678d', 'ru', 'REST/HTTP APIs'),
  ('40e8b805-a37d-4096-9f31-8cc3b3db678d', 'am', 'REST/HTTP APIs')
ON CONFLICT (toolbox_item_id, language) DO UPDATE SET
  label = EXCLUDED.label,
  updated_at = NOW();

-- ---------------------------------------------------------------------------
-- About: Key Results
-- ---------------------------------------------------------------------------
INSERT INTO public.about_key_results (id, order_index) VALUES
  ('8b12c734-09ad-4fa5-9396-4e007147fdb4', 1),
  ('695b0aec-b82e-4411-9084-55d0834f2e4a', 2),
  ('a572e75c-c9ad-480b-b2ab-665b0be1c348', 3)
ON CONFLICT (id) DO UPDATE SET
  order_index = EXCLUDED.order_index,
  updated_at = NOW();

INSERT INTO public.about_key_result_translations (key_result_id, language, summary) VALUES
  ('8b12c734-09ad-4fa5-9396-4e007147fdb4', 'en', 'Reduced manual regression effort by 40%, freeing 15+ hours per month for exploratory testing and feature work.'),
  ('8b12c734-09ad-4fa5-9396-4e007147fdb4', 'ru', 'Reduced manual regression effort by 40%, freeing 15+ hours per month for exploratory testing and feature work.'),
  ('8b12c734-09ad-4fa5-9396-4e007147fdb4', 'am', 'Reduced manual regression effort by 40%, freeing 15+ hours per month for exploratory testing and feature work.'),

  ('695b0aec-b82e-4411-9084-55d0834f2e4a', 'en', 'Decreased critical flaky test rate by 70% by standardizing test data management and enforcing isolation/cleanup patterns.'),
  ('695b0aec-b82e-4411-9084-55d0834f2e4a', 'ru', 'Decreased critical flaky test rate by 70% by standardizing test data management and enforcing isolation/cleanup patterns.'),
  ('695b0aec-b82e-4411-9084-55d0834f2e4a', 'am', 'Decreased critical flaky test rate by 70% by standardizing test data management and enforcing isolation/cleanup patterns.'),

  ('a572e75c-c9ad-480b-b2ab-665b0be1c348', 'en', 'Cut average build-to-deploy time by 35% by introducing sharding and parallel workers in AWS CodeBuild.'),
  ('a572e75c-c9ad-480b-b2ab-665b0be1c348', 'ru', 'Cut average build-to-deploy time by 35% by introducing sharding and parallel workers in AWS CodeBuild.'),
  ('a572e75c-c9ad-480b-b2ab-665b0be1c348', 'am', 'Cut average build-to-deploy time by 35% by introducing sharding and parallel workers in AWS CodeBuild.')
ON CONFLICT (key_result_id, language) DO UPDATE SET
  summary = EXCLUDED.summary,
  updated_at = NOW();

-- ---------------------------------------------------------------------------
-- About: Languages
-- ---------------------------------------------------------------------------
INSERT INTO public.about_languages (id, order_index) VALUES
  ('bef22608-956a-487f-b430-538e0d966b74', 1),
  ('35d80592-dbd7-4173-a4fa-d46af70dc98f', 2),
  ('cf0a74c3-8ef2-435a-9721-dbe5f20b08c2', 3)
ON CONFLICT (id) DO UPDATE SET
  order_index = EXCLUDED.order_index,
  updated_at = NOW();

INSERT INTO public.about_language_translations (about_language_id, language, name, level) VALUES
  ('bef22608-956a-487f-b430-538e0d966b74', 'en', 'Armenian', 'Native'),
  ('bef22608-956a-487f-b430-538e0d966b74', 'ru', 'Armenian', 'Native'),
  ('bef22608-956a-487f-b430-538e0d966b74', 'am', 'Armenian', 'Native'),

  ('35d80592-dbd7-4173-a4fa-d46af70dc98f', 'en', 'Russian', 'Proficient'),
  ('35d80592-dbd7-4173-a4fa-d46af70dc98f', 'ru', 'Russian', 'Proficient'),
  ('35d80592-dbd7-4173-a4fa-d46af70dc98f', 'am', 'Russian', 'Proficient'),

  ('cf0a74c3-8ef2-435a-9721-dbe5f20b08c2', 'en', 'English', 'Intermediate'),
  ('cf0a74c3-8ef2-435a-9721-dbe5f20b08c2', 'ru', 'English', 'Intermediate'),
  ('cf0a74c3-8ef2-435a-9721-dbe5f20b08c2', 'am', 'English', 'Intermediate')
ON CONFLICT (about_language_id, language) DO UPDATE SET
  name = EXCLUDED.name,
  level = EXCLUDED.level,
  updated_at = NOW();

-- ---------------------------------------------------------------------------
-- Experience
-- ---------------------------------------------------------------------------
INSERT INTO public.experiences (id, role, company, period, description, achievements, order_index) VALUES
  (
    '4595e224-00c6-4c7f-96bd-b7927f52af7a',
    'QA Automation Engineer',
    'zealous',
    'Oct 2022 - Present',
    'Own and evolve the Playwright automation framework and quality strategy across web and microservice workflows.',
    ARRAY[
      'Established maintainable automation standards (POM, reusable workflow drivers, fixtures).',
      'Improved stability through deterministic setup, isolated data, and automated cleanup.',
      'Implemented Kafka-based validations to verify async event flow and data integrity.',
      'Optimized AWS CodeBuild with parallelization, sharding, and storageState authentication reuse (35% build-time reduction).',
      'Owned E2E quality for an Enrichment Service via API contract and functional checks for OpenSearch validation.',
      'Standardized service virtualization with Mountebank to make iOS XCUITest flows deterministic.',
      'Led test strategy for new features and aligned acceptance criteria with Engineering and Product.',
      'Mentored junior engineers on defect reporting, RCA, and efficient test execution.'
    ],
    1
  )
ON CONFLICT (id) DO UPDATE SET
  role = EXCLUDED.role,
  company = EXCLUDED.company,
  period = EXCLUDED.period,
  description = EXCLUDED.description,
  achievements = EXCLUDED.achievements,
  order_index = EXCLUDED.order_index,
  updated_at = NOW();

INSERT INTO public.experience_translations (experience_id, language, role, company, period, description, achievements) VALUES
  (
    '4595e224-00c6-4c7f-96bd-b7927f52af7a',
    'en',
    'QA Automation Engineer',
    'zealous',
    'Oct 2022 - Present',
    'Own and evolve the Playwright automation framework and quality strategy across web and microservice workflows.',
    ARRAY[
      'Established maintainable automation standards (POM, reusable workflow drivers, fixtures).',
      'Improved stability through deterministic setup, isolated data, and automated cleanup.',
      'Implemented Kafka-based validations to verify async event flow and data integrity.',
      'Optimized AWS CodeBuild with parallelization, sharding, and storageState authentication reuse (35% build-time reduction).',
      'Owned E2E quality for an Enrichment Service via API contract and functional checks for OpenSearch validation.',
      'Standardized service virtualization with Mountebank to make iOS XCUITest flows deterministic.',
      'Led test strategy for new features and aligned acceptance criteria with Engineering and Product.',
      'Mentored junior engineers on defect reporting, RCA, and efficient test execution.'
    ]
  ),
  (
    '4595e224-00c6-4c7f-96bd-b7927f52af7a',
    'ru',
    'QA Automation Engineer',
    'zealous',
    'Oct 2022 - Present',
    'Own and evolve the Playwright automation framework and quality strategy across web and microservice workflows.',
    ARRAY[
      'Established maintainable automation standards (POM, reusable workflow drivers, fixtures).',
      'Improved stability through deterministic setup, isolated data, and automated cleanup.',
      'Implemented Kafka-based validations to verify async event flow and data integrity.',
      'Optimized AWS CodeBuild with parallelization, sharding, and storageState authentication reuse (35% build-time reduction).',
      'Owned E2E quality for an Enrichment Service via API contract and functional checks for OpenSearch validation.',
      'Standardized service virtualization with Mountebank to make iOS XCUITest flows deterministic.',
      'Led test strategy for new features and aligned acceptance criteria with Engineering and Product.',
      'Mentored junior engineers on defect reporting, RCA, and efficient test execution.'
    ]
  ),
  (
    '4595e224-00c6-4c7f-96bd-b7927f52af7a',
    'am',
    'QA Automation Engineer',
    'zealous',
    'Oct 2022 - Present',
    'Own and evolve the Playwright automation framework and quality strategy across web and microservice workflows.',
    ARRAY[
      'Established maintainable automation standards (POM, reusable workflow drivers, fixtures).',
      'Improved stability through deterministic setup, isolated data, and automated cleanup.',
      'Implemented Kafka-based validations to verify async event flow and data integrity.',
      'Optimized AWS CodeBuild with parallelization, sharding, and storageState authentication reuse (35% build-time reduction).',
      'Owned E2E quality for an Enrichment Service via API contract and functional checks for OpenSearch validation.',
      'Standardized service virtualization with Mountebank to make iOS XCUITest flows deterministic.',
      'Led test strategy for new features and aligned acceptance criteria with Engineering and Product.',
      'Mentored junior engineers on defect reporting, RCA, and efficient test execution.'
    ]
  )
ON CONFLICT (experience_id, language) DO UPDATE SET
  role = EXCLUDED.role,
  company = EXCLUDED.company,
  period = EXCLUDED.period,
  description = EXCLUDED.description,
  achievements = EXCLUDED.achievements,
  updated_at = NOW();

-- ---------------------------------------------------------------------------
-- Education
-- ---------------------------------------------------------------------------
INSERT INTO public.education (id, degree, school, year, description, order_index) VALUES
  (
    '80f09967-6927-4df2-810a-a7ae6605292d',
    'B.Sc., Information Technology',
    'National Polytechnic University of Armenia',
    '2024',
    'Graduated May 2024.',
    1
  )
ON CONFLICT (id) DO UPDATE SET
  degree = EXCLUDED.degree,
  school = EXCLUDED.school,
  year = EXCLUDED.year,
  description = EXCLUDED.description,
  order_index = EXCLUDED.order_index,
  updated_at = NOW();

INSERT INTO public.education_translations (education_id, language, degree, school, year, description) VALUES
  (
    '80f09967-6927-4df2-810a-a7ae6605292d',
    'en',
    'B.Sc., Information Technology',
    'National Polytechnic University of Armenia',
    '2024',
    'Graduated May 2024.'
  ),
  (
    '80f09967-6927-4df2-810a-a7ae6605292d',
    'ru',
    'B.Sc., Information Technology',
    'National Polytechnic University of Armenia',
    '2024',
    'Graduated May 2024.'
  ),
  (
    '80f09967-6927-4df2-810a-a7ae6605292d',
    'am',
    'B.Sc., Information Technology',
    'National Polytechnic University of Armenia',
    '2024',
    'Graduated May 2024.'
  )
ON CONFLICT (education_id, language) DO UPDATE SET
  degree = EXCLUDED.degree,
  school = EXCLUDED.school,
  year = EXCLUDED.year,
  description = EXCLUDED.description,
  updated_at = NOW();

-- ---------------------------------------------------------------------------
-- Skills
-- ---------------------------------------------------------------------------
INSERT INTO public.skills (id, title, description, icon, category, level, order_index) VALUES
  -- Automation
  ('ce1e8d92-8263-4711-934e-22f61c8db2cc', 'Playwright (TypeScript)', 'E2E UI/API automation with fixtures and deterministic flows.', 'Workflow', 'Automation', 92, 1),
  ('2eab2238-75b2-46e0-ba35-65921fc4ad39', 'PyTest (Python)', 'API and backend automation with stable assertions.', 'Workflow', 'Automation', 75, 2),
  ('e27a72ea-2a63-4e12-8085-071b91a70cbf', 'XCUITest (Swift)', 'Deterministic iOS automation with virtualization.', 'Workflow', 'Automation', 70, 3),
  ('95dd74bc-78bc-42f9-a272-f248edde1370', 'UI & API Automation', 'Cross-layer automation strategies.', 'Workflow', 'Automation', 88, 4),

  -- Platforms & Integration
  ('304a757e-caa5-41a0-9cbf-abe845c74bdf', 'AWS CodeBuild', 'Parallelized, sharded CI execution.', 'Globe', 'Platforms & Integration', 85, 5),
  ('c95f3d42-22bc-4d58-b4af-d2d2326a6f25', 'AWS CodeArtifact', 'Artifact management for CI pipelines.', 'Globe', 'Platforms & Integration', 75, 6),
  ('4218c4f1-886a-4163-90cb-e4050be52cd2', 'Kubernetes (K8S)', 'Test orchestration in microservice environments.', 'Globe', 'Platforms & Integration', 65, 7),
  ('7798edc4-a086-4301-9057-c9b3c92faa3d', 'Datadog', 'Observability for test and service health.', 'Globe', 'Platforms & Integration', 70, 8),
  ('87cbd42c-ed20-4126-b6e5-22baa34ec211', 'Kafka', 'Event-driven validation across services.', 'Globe', 'Platforms & Integration', 75, 9),

  -- APIs & Tools
  ('3f46257f-f6d4-4a68-adef-1875defd6628', 'REST/HTTP APIs', 'Contract and functional checks.', 'Bug', 'APIs & Tools', 85, 10),
  ('239ac8e5-815c-4da8-b617-56cc47b549e5', 'Postman', 'API test authoring and validation.', 'Bug', 'APIs & Tools', 80, 11),
  ('80f577fd-4431-47dc-9041-a530bf671118', 'Browser DevTools', 'Network and UI diagnostics for tests.', 'Bug', 'APIs & Tools', 75, 12),
  ('1126cac9-a68f-466d-9668-6964fbbba5f8', 'Charles Proxy', 'Traffic inspection for debugging.', 'Bug', 'APIs & Tools', 70, 13),
  ('a012bd7d-01fd-4e3f-a0eb-4952f681b66d', 'Mountebank', 'Service virtualization for deterministic tests.', 'Bug', 'APIs & Tools', 80, 14),

  -- Data
  ('f833628f-3d34-4aeb-a3a9-f0d090a46c1f', 'PostgreSQL', 'Data setup and verification.', 'Database', 'Data', 75, 15),
  ('0266cb6a-4105-466a-910a-53041df17893', 'SQL Scripting', 'Test data management and validation.', 'Database', 'Data', 78, 16),

  -- Process
  ('0b1ce4e4-f506-4215-9c4d-3cb13d1d4f1c', 'Agile/Scrum', 'Iterative planning and delivery.', 'Kanban', 'Process', 85, 17),
  ('8f394cf5-356e-4d2a-a92b-27a9fb4f23e8', 'TestRail', 'Test case management and reporting.', 'Kanban', 'Process', 80, 18),
  ('330f89c8-c661-4786-9758-cbdf1801b52e', 'Jira (JQL)', 'Defect tracking and workflow management.', 'Kanban', 'Process', 85, 19),
  ('e5d4c0b0-c4c4-434b-ac15-f2260b6acba5', 'Cross-functional Collaboration', 'Engineering and Product alignment.', 'Kanban', 'Process', 90, 20),
  ('2444b139-a1a3-4294-a106-713c24f3830f', 'Mentoring', 'Coaching on quality and automation.', 'Kanban', 'Process', 80, 21)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  category = EXCLUDED.category,
  level = EXCLUDED.level,
  order_index = EXCLUDED.order_index,
  updated_at = NOW();

INSERT INTO public.skill_translations (skill_id, language, title, description) VALUES
  -- Automation
  ('ce1e8d92-8263-4711-934e-22f61c8db2cc', 'en', 'Playwright (TypeScript)', 'E2E UI/API automation with fixtures and deterministic flows.'),
  ('ce1e8d92-8263-4711-934e-22f61c8db2cc', 'ru', 'Playwright (TypeScript)', 'E2E UI/API automation with fixtures and deterministic flows.'),
  ('ce1e8d92-8263-4711-934e-22f61c8db2cc', 'am', 'Playwright (TypeScript)', 'E2E UI/API automation with fixtures and deterministic flows.'),

  ('2eab2238-75b2-46e0-ba35-65921fc4ad39', 'en', 'PyTest (Python)', 'API and backend automation with stable assertions.'),
  ('2eab2238-75b2-46e0-ba35-65921fc4ad39', 'ru', 'PyTest (Python)', 'API and backend automation with stable assertions.'),
  ('2eab2238-75b2-46e0-ba35-65921fc4ad39', 'am', 'PyTest (Python)', 'API and backend automation with stable assertions.'),

  ('e27a72ea-2a63-4e12-8085-071b91a70cbf', 'en', 'XCUITest (Swift)', 'Deterministic iOS automation with virtualization.'),
  ('e27a72ea-2a63-4e12-8085-071b91a70cbf', 'ru', 'XCUITest (Swift)', 'Deterministic iOS automation with virtualization.'),
  ('e27a72ea-2a63-4e12-8085-071b91a70cbf', 'am', 'XCUITest (Swift)', 'Deterministic iOS automation with virtualization.'),

  ('95dd74bc-78bc-42f9-a272-f248edde1370', 'en', 'UI & API Automation', 'Cross-layer automation strategies.'),
  ('95dd74bc-78bc-42f9-a272-f248edde1370', 'ru', 'UI & API Automation', 'Cross-layer automation strategies.'),
  ('95dd74bc-78bc-42f9-a272-f248edde1370', 'am', 'UI & API Automation', 'Cross-layer automation strategies.'),

  -- Platforms & Integration
  ('304a757e-caa5-41a0-9cbf-abe845c74bdf', 'en', 'AWS CodeBuild', 'Parallelized, sharded CI execution.'),
  ('304a757e-caa5-41a0-9cbf-abe845c74bdf', 'ru', 'AWS CodeBuild', 'Parallelized, sharded CI execution.'),
  ('304a757e-caa5-41a0-9cbf-abe845c74bdf', 'am', 'AWS CodeBuild', 'Parallelized, sharded CI execution.'),

  ('c95f3d42-22bc-4d58-b4af-d2d2326a6f25', 'en', 'AWS CodeArtifact', 'Artifact management for CI pipelines.'),
  ('c95f3d42-22bc-4d58-b4af-d2d2326a6f25', 'ru', 'AWS CodeArtifact', 'Artifact management for CI pipelines.'),
  ('c95f3d42-22bc-4d58-b4af-d2d2326a6f25', 'am', 'AWS CodeArtifact', 'Artifact management for CI pipelines.'),

  ('4218c4f1-886a-4163-90cb-e4050be52cd2', 'en', 'Kubernetes (K8S)', 'Test orchestration in microservice environments.'),
  ('4218c4f1-886a-4163-90cb-e4050be52cd2', 'ru', 'Kubernetes (K8S)', 'Test orchestration in microservice environments.'),
  ('4218c4f1-886a-4163-90cb-e4050be52cd2', 'am', 'Kubernetes (K8S)', 'Test orchestration in microservice environments.'),

  ('7798edc4-a086-4301-9057-c9b3c92faa3d', 'en', 'Datadog', 'Observability for test and service health.'),
  ('7798edc4-a086-4301-9057-c9b3c92faa3d', 'ru', 'Datadog', 'Observability for test and service health.'),
  ('7798edc4-a086-4301-9057-c9b3c92faa3d', 'am', 'Datadog', 'Observability for test and service health.'),

  ('87cbd42c-ed20-4126-b6e5-22baa34ec211', 'en', 'Kafka', 'Event-driven validation across services.'),
  ('87cbd42c-ed20-4126-b6e5-22baa34ec211', 'ru', 'Kafka', 'Event-driven validation across services.'),
  ('87cbd42c-ed20-4126-b6e5-22baa34ec211', 'am', 'Kafka', 'Event-driven validation across services.'),

  -- APIs & Tools
  ('3f46257f-f6d4-4a68-adef-1875defd6628', 'en', 'REST/HTTP APIs', 'Contract and functional checks.'),
  ('3f46257f-f6d4-4a68-adef-1875defd6628', 'ru', 'REST/HTTP APIs', 'Contract and functional checks.'),
  ('3f46257f-f6d4-4a68-adef-1875defd6628', 'am', 'REST/HTTP APIs', 'Contract and functional checks.'),

  ('239ac8e5-815c-4da8-b617-56cc47b549e5', 'en', 'Postman', 'API test authoring and validation.'),
  ('239ac8e5-815c-4da8-b617-56cc47b549e5', 'ru', 'Postman', 'API test authoring and validation.'),
  ('239ac8e5-815c-4da8-b617-56cc47b549e5', 'am', 'Postman', 'API test authoring and validation.'),

  ('80f577fd-4431-47dc-9041-a530bf671118', 'en', 'Browser DevTools', 'Network and UI diagnostics for tests.'),
  ('80f577fd-4431-47dc-9041-a530bf671118', 'ru', 'Browser DevTools', 'Network and UI diagnostics for tests.'),
  ('80f577fd-4431-47dc-9041-a530bf671118', 'am', 'Browser DevTools', 'Network and UI diagnostics for tests.'),

  ('1126cac9-a68f-466d-9668-6964fbbba5f8', 'en', 'Charles Proxy', 'Traffic inspection for debugging.'),
  ('1126cac9-a68f-466d-9668-6964fbbba5f8', 'ru', 'Charles Proxy', 'Traffic inspection for debugging.'),
  ('1126cac9-a68f-466d-9668-6964fbbba5f8', 'am', 'Charles Proxy', 'Traffic inspection for debugging.'),

  ('a012bd7d-01fd-4e3f-a0eb-4952f681b66d', 'en', 'Mountebank', 'Service virtualization for deterministic tests.'),
  ('a012bd7d-01fd-4e3f-a0eb-4952f681b66d', 'ru', 'Mountebank', 'Service virtualization for deterministic tests.'),
  ('a012bd7d-01fd-4e3f-a0eb-4952f681b66d', 'am', 'Mountebank', 'Service virtualization for deterministic tests.'),

  -- Data
  ('f833628f-3d34-4aeb-a3a9-f0d090a46c1f', 'en', 'PostgreSQL', 'Data setup and verification.'),
  ('f833628f-3d34-4aeb-a3a9-f0d090a46c1f', 'ru', 'PostgreSQL', 'Data setup and verification.'),
  ('f833628f-3d34-4aeb-a3a9-f0d090a46c1f', 'am', 'PostgreSQL', 'Data setup and verification.'),

  ('0266cb6a-4105-466a-910a-53041df17893', 'en', 'SQL Scripting', 'Test data management and validation.'),
  ('0266cb6a-4105-466a-910a-53041df17893', 'ru', 'SQL Scripting', 'Test data management and validation.'),
  ('0266cb6a-4105-466a-910a-53041df17893', 'am', 'SQL Scripting', 'Test data management and validation.'),

  -- Process
  ('0b1ce4e4-f506-4215-9c4d-3cb13d1d4f1c', 'en', 'Agile/Scrum', 'Iterative planning and delivery.'),
  ('0b1ce4e4-f506-4215-9c4d-3cb13d1d4f1c', 'ru', 'Agile/Scrum', 'Iterative planning and delivery.'),
  ('0b1ce4e4-f506-4215-9c4d-3cb13d1d4f1c', 'am', 'Agile/Scrum', 'Iterative planning and delivery.'),

  ('8f394cf5-356e-4d2a-a92b-27a9fb4f23e8', 'en', 'TestRail', 'Test case management and reporting.'),
  ('8f394cf5-356e-4d2a-a92b-27a9fb4f23e8', 'ru', 'TestRail', 'Test case management and reporting.'),
  ('8f394cf5-356e-4d2a-a92b-27a9fb4f23e8', 'am', 'TestRail', 'Test case management and reporting.'),

  ('330f89c8-c661-4786-9758-cbdf1801b52e', 'en', 'Jira (JQL)', 'Defect tracking and workflow management.'),
  ('330f89c8-c661-4786-9758-cbdf1801b52e', 'ru', 'Jira (JQL)', 'Defect tracking and workflow management.'),
  ('330f89c8-c661-4786-9758-cbdf1801b52e', 'am', 'Jira (JQL)', 'Defect tracking and workflow management.'),

  ('e5d4c0b0-c4c4-434b-ac15-f2260b6acba5', 'en', 'Cross-functional Collaboration', 'Engineering and Product alignment.'),
  ('e5d4c0b0-c4c4-434b-ac15-f2260b6acba5', 'ru', 'Cross-functional Collaboration', 'Engineering and Product alignment.'),
  ('e5d4c0b0-c4c4-434b-ac15-f2260b6acba5', 'am', 'Cross-functional Collaboration', 'Engineering and Product alignment.'),

  ('2444b139-a1a3-4294-a106-713c24f3830f', 'en', 'Mentoring', 'Coaching on quality and automation.'),
  ('2444b139-a1a3-4294-a106-713c24f3830f', 'ru', 'Mentoring', 'Coaching on quality and automation.'),
  ('2444b139-a1a3-4294-a106-713c24f3830f', 'am', 'Mentoring', 'Coaching on quality and automation.')
ON CONFLICT (skill_id, language) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  updated_at = NOW();

COMMIT;
