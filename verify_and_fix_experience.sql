-- First, let's check what's actually in the database
SELECT id, role, company, array_length(achievements, 1) as achievement_count, achievements 
FROM experiences 
WHERE role = 'QA Automation Engineer';

-- If the above shows 7 achievements (old data), run this UPDATE to fix it:
UPDATE experiences
SET achievements = ARRAY[
  'Studied and analyzed specs; collaborated with developers/PM to create test plans and test cases (Agile/Scrum).',
  'Built Playwright automation frameworks from scratch for UI & API (page objects/components, fixtures, env configs, tracing).',
  'Executed manual and automated suites; analyzed results and evaluated product behavior against documentation.',
  'Logged defects with clear steps, logs, and traces; reported to developers and helped troubleshoot.',
  'Ran post‑release/integration testing and maintained regression cycles.',
  'UI: E2E + integration tests in AWS CodeBuild; dependencies via AWS CodeArtifact; smoke/regression gates.',
  'API: Suites for an Enrichment Service to verify OpenSearch query enrichment; contract + functional checks in CI.',
  'Reduced runtime with parallel workers, sharding, and authentication reuse (storageState); improved stability via isolation and calibrated timeouts.',
  'iOS automation with XCUITest; service virtualization with Mountebank for deterministic end‑to‑end flows.'
]
WHERE id = '4103c003-018f-4b6f-9e73-2098cca8be05';

-- Verify the update
SELECT id, role, company, array_length(achievements, 1) as achievement_count
FROM experiences 
WHERE role = 'QA Automation Engineer';

