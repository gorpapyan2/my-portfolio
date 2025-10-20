-- Clean up duplicate experiences and keep only the latest one
-- First, let's see what we have
-- SELECT id, role, company, created_at FROM experiences ORDER BY created_at;

-- Delete all QA Automation Engineer at zealous records
DELETE FROM experiences 
WHERE role = 'QA Automation Engineer' 
  AND company LIKE '%zealous%';

-- Insert a single clean record with the updated achievements
INSERT INTO experiences (role, company, period, description, achievements, order_index)
VALUES (
  'QA Automation Engineer',
  'zealous',
  'Oct 2022 – Present',
  'Built and owned Playwright-based UI/API automation from scratch; embedded in Agile teams, integrated suites into AWS CI/CD, and stabilized regressions.',
  ARRAY[
    'Studied and analyzed specs; collaborated with developers/PM to create test plans and test cases (Agile/Scrum).',
    'Built Playwright automation frameworks from scratch for UI & API (page objects/components, fixtures, env configs, tracing).',
    'Executed manual and automated suites; analyzed results and evaluated product behavior against documentation.',
    'Logged defects with clear steps, logs, and traces; reported to developers and helped troubleshoot.',
    'Ran post‑release/integration testing and maintained regression cycles.',
    'UI: E2E + integration tests in AWS CodeBuild; dependencies via AWS CodeArtifact; smoke/regression gates.',
    'API: Suites for an Enrichment Service to verify OpenSearch query enrichment; contract + functional checks in CI.',
    'Reduced runtime with parallel workers, sharding, and authentication reuse (storageState); improved stability via isolation and calibrated timeouts.',
    'iOS automation with XCUITest; service virtualization with Mountebank for deterministic end‑to‑end flows.'
  ],
  0
);

-- Verify the result
SELECT id, role, company, period FROM experiences ORDER BY order_index;

