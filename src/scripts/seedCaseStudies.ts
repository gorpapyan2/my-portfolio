import { createClient } from '@supabase/supabase-js';
import { config } from '../lib/config';

const supabase = createClient(config.supabase.url, config.supabase.anonKey);

const caseStudies = [
  {
    title: 'Stabilized UI E2E for a SaaS Web App',
    slug: 'stabilized-ui-e2e-saas',
    excerpt: 'Reduced flaky test rate by ~70% through deterministic data isolation, resilient waits, and parallel execution. Improved release confidence and cut regression cycle time.',
    content: `# Stabilized UI E2E for a SaaS Web App

## Problem
Frequent flaky E2E failures were blocking releases. The team had low confidence in regression testing, leading to manual verification and delayed deployments.

## Actions
I introduced a systematic approach to stabilize the suite:

### Data Isolation
- Seeded deterministic test data via PostgreSQL before each run
- Isolated test environments to prevent cross-test pollution
- Versioned fixtures for reproducibility

### Resilient Waits
- Replaced hard sleeps with \`waitForSelector\` with configurable timeouts
- Used \`waitForNavigation()\` instead of fixed delays
- Implemented \`waitForLoadState('networkidle')\` for dynamic content

### Execution Strategy
- Split suites into smoke (fast) and deeper (parallel) checks
- Used Playwright's \`storageState\` for auth reuse across tests
- Enabled parallel execution with worker sharding

### CI/CD Integration
- Integrated into AWS CodeBuild with trace-on-fail for debugging
- Configured retry logic with exponential backoff
- Added console and network logs to failure reports

## Result
- **Flaky rate ↓ ~70%** in 3 months
- **Regression confidence ↑** — team no longer skips E2E in prod hotfixes
- **CI time ↓** from 18min to 8min with parallelism
- **Manual verification time** → near zero

## Stack
- **Playwright** (TypeScript, v1.40+)
- **AWS CodeBuild** for CI orchestration
- **PostgreSQL** for seed data & verification queries
- **GitHub Actions** for workflow orchestration
- **TestRail** for test case documentation

## Key Takeaways
1. Data isolation is the foundation of deterministic testing
2. Replace explicit waits with proper synchronization primitives
3. Parallelism + sharding cuts run time dramatically
4. Trace-on-fail transforms debugging from 10min to 30sec
5. Invest in suite architecture early; refactoring under pressure is costly`,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f3?w=800',
    read_time: 6,
    published: true,
  },
  {
    title: 'Deterministic End-to-End via Service Virtualization',
    slug: 'deterministic-e2e-service-virtualization',
    excerpt: 'Eliminated upstream API flakiness by introducing Mountebank stubs. Separated contract tests from functional tests, stabilized CI with actionable traces.',
    content: `# Deterministic End-to-End via Service Virtualization

## Problem
Upstream APIs were unreliable. E2E tests failed randomly due to:
- Slow API responses (>30s)
- Intermittent 5xx errors from third-party services
- Rate-limit flakiness during peak hours

Test failures became impossible to diagnose—was it our code or the service?

## Actions

### Service Virtualization with Mountebank
I introduced Mountebank as a local HTTP/HTTPS stub server:

\`\`\`typescript
// Mountebank stubs for predictable E2E
// - Mock payment gateway with fixed response times
// - Stub search API with seeded results
// - Simulate error scenarios (4xx, 5xx) deterministically
\`\`\`

### Test Separation
- **Contract Tests** → CI on every push (validates API contracts)
- **Functional Tests** → E2E with stubs (validates business logic)
- **Integration Tests** → Nightly runs against staging (validates real dependencies)

### Trace Collection
- Captured network calls, response times, and error codes
- Stored traces for failed runs in S3
- Added visual timeline of request/response sequence
- Made failure diagnosis nearly automatic

## Result
- **CI stabilized** — 0 flaky failures in 2 months
- **Debugging time** ↓ from 20min to 2min (traces included full context)
- **Test confidence ↑** — team trusts E2E results without manual checks
- **False positives** reduced by 95%

## Stack
- **Playwright** (TypeScript)
- **Mountebank** for HTTP/HTTPS stubs
- **Postman** for API documentation & validation
- **AWS S3** for trace storage
- **GitHub Actions** for CI orchestration

## Lessons
1. Mock external dependencies to own your test reliability
2. Separate contract validation from functional testing
3. Traces are gold — invest in rich logging
4. Nightly integration tests catch real-world issues early
5. Document stub behavior in comments for future maintainers`,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    read_time: 7,
    published: true,
  },
  {
    title: 'Integration Tests for Enrichment Service',
    slug: 'integration-tests-enrichment-service',
    excerpt: 'Built deterministic API + functional tests for a search enrichment service. Used SQL seeding for spec data and added error-focused reporting.',
    content: `# Integration Tests for Enrichment Service

## Problem
A critical search enrichment service was prone to regressions. Without comprehensive test coverage:
- Search results occasionally missing enrichment data
- Slow query performance went unnoticed
- Developers hesitated to refactor

## Actions

### Test Architecture

#### Contract Tests
Validated API schema and response structure:
\`\`\`typescript
// Verify response schema matches OpenAPI spec
// Verify status codes and headers
// Validate error responses
\`\`\`

#### Functional Tests
Tested business logic with seeded database:
\`\`\`sql
-- Seed spec data before each test
INSERT INTO search_data (query, metadata) VALUES (...);
INSERT INTO enrichment_config (rule, enabled) VALUES (...);

-- Test: verify enrichment applied correctly
-- Test: verify cache behavior
-- Test: verify error handling
\`\`\`

### Data-Driven Testing
- Parameterized tests across 50+ search scenarios
- Used PyTest fixtures for database setup/teardown
- Versioned test data schemas (v1, v2, v3)

### Error-Focused Reporting
- Grouped failures by root cause (schema, logic, performance)
- Included diffs of expected vs. actual
- Added performance metrics for slow queries

## Result
- **Regression escapes ↓** by 80% in first quarter
- **Triage time ↓** from 15min to 3min (developers pinpoint issues instantly)
- **Refactoring confidence ↑** — safe to optimize without manual testing
- **Deployment safety** — green suite = safe to prod

## Stack
- **PyTest** (Python, request context for API calls)
- **PostgreSQL** for seeded test data & verification
- **AWS CodeBuild** for CI orchestration
- **Allure Reports** for test reporting with trends

## Principles
1. Seed realistic data, not mocks (for integration tests)
2. Parameterize tests to cover edge cases systematically
3. Error reporting should guide debugging, not just report pass/fail
4. Version your test data schemas alongside application schemas
5. Performance assertions prevent silent degradation`,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    read_time: 7,
    published: true,
  },
];

async function seedCaseStudies() {
  console.log('🌱 Seeding case study blog posts...');

  for (const study of caseStudies) {
    try {
      // Check if already exists
      const { data: existing } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', study.slug)
        .single();

      if (existing) {
        console.log(`✓ Case study "${study.title}" already exists`);
        continue;
      }

      // Insert new case study
      const { error } = await supabase
        .from('blog_posts')
        .insert({
          title: study.title,
          slug: study.slug,
          excerpt: study.excerpt,
          content: study.content,
          image: study.image,
          read_time: study.read_time,
          published: study.published,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

      if (error) {
        console.error(`✗ Failed to insert "${study.title}":`, error.message);
      } else {
        console.log(`✓ Seeded case study: "${study.title}"`);
      }
    } catch (err) {
      console.error(`✗ Error processing "${study.title}":`, err);
    }
  }

  console.log('✅ Case study seeding complete');
}

seedCaseStudies();
