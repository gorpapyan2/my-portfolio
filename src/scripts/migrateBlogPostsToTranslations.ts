/**
 * Migration script to move existing blog post content to blog_post_translations table
 * Run this once to populate the translations table with existing English content
 * 
 * Usage:
 * npm run tsx src/scripts/migrateBlogPostsToTranslations.ts
 */

import { supabase } from '../lib/supabase';

const blogPostsData = [
  {
    id: "094a9770-587d-4509-8287-38a7117ce379",
    title: "Playwright at Scale: From Flaky to Fast",
    slug: "playwright-at-scale-from-flaky-to-fast",
    excerpt: "How I cut flaky tests by ~70% and manual regressions by ~40% using resilient Playwright patterns: isolation, deterministic data, auth reuse, sharding, and actionable traces.",
    content: `## Content

Shipping quickly is easy. Shipping **confidently** is hard—until your test suite respects isolation, data determinism, and CI ergonomics. Here's the Playwright blueprint I've used to turn flakiness into signal and shave minutes off every run.

### 1) Stable foundations (Projects, Fixtures, POM)
- **Projects** express browsers/environments cleanly.
- **Fixtures** encapsulate setup/teardown and shared resources.
- **Page Objects (POM)** reduce selector churn and enable component-level reuse.

\`\`\`typescript title="playwright.config.ts"
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { open: 'never' }], ['list']],
  timeout: 30_000,
  expect: { timeout: 5_000 },
  use: { trace: 'on-first-retry', video: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } }
  ],
  fullyParallel: true,
  workers: '50%',
});
\`\`\`
\`\`\`typescript title="tests/fixtures.ts"
import {test as base } from '@playwright/test';

type AppFixtures = { seedUser: { email: string; token: string } };

export const test = base.extend<AppFixtures>({
    seedUser: async ({}, use) => {
    await use(seed);
  }
});
export const expect = test.expect
\`\`\`

### 2) Kill brittle sleeps with resilient waits

Prefer locator-driven waits and network idling to magic timeouts.

\`\`\`
await page.getByRole('button', { name: 'Save' }).click();
await expect(page.getByText('Saved')).toBeVisible(); // not page.waitForTimeout()
\`\`\`

### 3) Reuse authentication (goodbye login tax)

A one-time login + storageState can eliminate dozens of login flows.

\`\`\`typescript title="tests/auth.setup.ts"
import { test } from '@playwright/test';

test('create storageState', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', process.env.QA_USER!);
  await page.fill('#password', process.env.QA_PASS!);
  await page.click('text=Sign in');
  await page.waitForURL('**/dashboard');
  await page.context().storageState({ path: 'storage/auth.json' });
});
\`\`\`

\`\`\`typescript title="playwright.config.ts"
use: { storageState: 'storage/auth.json' }
\`\`\`

### 4) Isolate test data
- Use ***unique IDs*** (**Date.now()**, UUID) to avoid collisions.
- Seed predictable fixtures via API/DB scripts.
- Clean side effects (API or SQL teardown).

### 5) Parallelize safely (shards + workers)

- Enable fullyParallel and shard in CI to scale horizontally.
- Ensure tests don't share state (cookies, users, temp files).
\`\`\`bash title="CLI"
npx playwright test --shard=\${SHARD_INDEX}/\${SHARD_TOTAL}
\`\`\`

### 6) Trace only when it helps

- *trace: 'on-first-retry'* keeps artifacts small but useful.
- Include **network and console** logs for quick root-cause.

### 7) Make flakiness visible

- Tag unstable specs with *@flaky* and quarantine to a nightly suite.
- Track failures by test title and error signature, not just file.

### CI ergonomics

- Warm caches, prebuild assets, and skip login cost with *storageState*.
- Fail **fast** on critical areas; run broader checks on schedule.

### Example "happy path" test using POM

\`\`\`typescript title="src/pages/DashboardPage.ts"
export class DashboardPage {
  constructor(private page) {}
  createItem = async (name: string) => {
    await this.page.getByRole('button', { name: 'New Item' }).click();
    await this.page.getByPlaceholder('Name').fill(name);
    await this.page.getByRole('button', { name: 'Create' }).click();
    await this.page.getByRole('row', { name }).waitFor();
  };
}
\`\`\`

\`\`\`typescript title="tests/items.spec.ts"
import { test, expect } from './fixtures';
import { DashboardPage } from '../pages/DashboardPage';

test('user can create an item', async ({ page, seedUser }) => {
  await page.goto('/dashboard');
  const dash = new DashboardPage(page);
  await dash.createItem(\`Item-\${Date.now()}\`);
  await expect(page.getByText('Created successfully')).toBeVisible();
});
\`\`\`

**Takeaway**: isolation + deterministic data + smart CI sharding = stability at speed.`,
    image: "https://lfbemjnghstybysdemys.supabase.co/storage/v1/object/public/images/blog-images/1760705619273-uplxwo.jpg",
    read_time: "7 min read"
  },
  {
    id: "6dbd1324-7579-43aa-89c1-7a340eb4c832",
    title: "Test Data as Code: PostgreSQL Recipes for Reliable QA",
    slug: "test-data-as-code-postgresql-recipes",
    excerpt: "Deterministic data fuels reliable tests. Here are compact SQL + Node recipes to seed, query, and clean Postgres for spec isolation.",
    content: `# Content
When tests fail because yesterday's data changed, it's not a test—it's a lottery. Treat test data like code: explicit, versioned, and reversible.

## Seed & clean helpers
\`\`\`typescript title="db.ts"
import { Client } from 'pg';

export async function withDb<T>(fn: (c: Client) => Promise<T>) {
  const c = new Client({ connectionString: process.env.PG_URL });
  await c.connect();
  try { return await fn(c); } finally { await c.end(); }
}
\`\`\`

\`\`\`typescript title="seeds.ts"
import { withDb } from './db';
export async function seedUser(email: string) {
  return withDb(async c => {
    const { rows } = await c.query(
      \`insert into users(email, role) values($1, 'tester') returning id\`, [email]
    );
    return rows[0].id as number;
  });
}
export async function cleanupUser(email: string) {
  return withDb(c => c.query(\`delete from users where email = $1\`, [email]));
}
\`\`\`

\`\`\`typescript title="tests/user.spec.ts"
import { test, expect } from '@playwright/test';
import { seedUser, cleanupUser } from '../db/seeds';

test('profile loads with seeded user', async ({ page }) => {
  const email = \`qa+\${Date.now()}@example.com\`;
  const id = await seedUser(email);
  await page.goto(\`/profile/\${id}\`);
  await expect(page.getByText(email)).toBeVisible();
  await cleanupUser(email);
});
\`\`\`

## Rules of thumb
- Treat seeds like migrations: reviewed and versioned.
- Prefer idempotent cleanup (delete by key).
- Keep minimal data needed for the test—no more.`,
    image: "https://lfbemjnghstybysdemys.supabase.co/storage/v1/object/public/images/blog-images/1760801896300-6mo7f2.png",
    read_time: "5 min read"
  },
  {
    id: "8110d00c-08e3-4410-b90f-d47f7a1a8cb9",
    title: "CI for QA: Playwright + AWS CodeBuild (with Sharding and Caching)",
    slug: "ci-qa-playwright-aws-codebuild",
    excerpt: "A pragmatic buildspec that runs Playwright fast in AWS CodeBuild, reuses artifacts with CodeArtifact, shards across workers, and keeps traces only when useful.",
    content: `## Content
CI should be boring-fast. Here's a minimal yet scalable CodeBuild setup I've used for Playwright suites.

\`\`\`yaml title="buildspec.yml"
version: 0.2
phases:
  install:
    runtime-versions: { nodejs: 20 }
    commands:
      - npm config set //\${CODEARTIFACT_DOMAIN}-\${AWS_ACCOUNT_ID}.d.codeartifact.\${AWS_REGION}.amazonaws.com/npm/\${REPO}/:always-auth=true
      - npm config set //\${...}/:username=aws
      - npm config set //\${...}/:_password=$(aws codeartifact get-authorization-token --domain $CODEARTIFACT_DOMAIN --domain-owner $AWS_ACCOUNT_ID --query authorizationToken --output text | base64)
      - npm ci
  pre_build:
    commands:
      - npx playwright install --with-deps
  build:
    commands:
      - |
        TOTAL_SHARDS=4
        for i in $(seq 1 $TOTAL_SHARDS); do
          SHARD_INDEX=$i SHARD_TOTAL=$TOTAL_SHARDS \\
          npx playwright test --reporter=line,html --shard=$i/$TOTAL_SHARDS &
        done
        wait
  post_build:
    commands:
      - mv playwright-report /tmp/report || true
artifacts:
  files:
    - '/tmp/report/**/*'

\`\`\`

### Notes
- Use --shard to parallelize across containers.
- Keep traces on first retry to cut artifact bloat.
- Cache node_modules and browser binaries between builds when possible (CodeBuild local cache or S3).

### Health signals
- Track median runtime and fail-on-new-flake metrics.
- Gate merges with a fast smoke; run full regs on schedule.

**Outcome**: quicker feedback, fewer flaky reruns, and reports devs actually open.`,
    image: "https://lfbemjnghstybysdemys.supabase.co/storage/v1/object/public/images/blog-images/1760801529099-lififc.png",
    read_time: "7 min read"
  },
  {
    id: "8f16c5d5-9b1c-4784-9854-18602bdc26b0",
    title: "iOS UI Testing with XCUITest: A Practical Starter Kit",
    slug: "ios-ui-testing-xcuitest-starter",
    excerpt: "A concise guide to building maintainable XCUITest suites—page objects, stable locators, test data, and CI: everything needed to automate critical iOS flows.",
    content: `## Content 
XCUITest gives you native-speed automation for iOS, but stability comes from structure: page objects, data isolation, and predictable waits.

### Project setup
\`\`\`swift 
import XCTest

final class LoginScreen {
    let app: XCUIApplication
    init(_ app: XCUIApplication) { self.app = app }

    var email: XCUIElement { app.textFields["email"] }
    var password: XCUIElement { app.secureTextFields["password"] }
    var signIn: XCUIElement { app.buttons["Sign in"] }
}

final class LoginTests: XCTestCase {
    var app: XCUIApplication!

    override func setUp() {
        continueAfterFailure = false
        app = XCUIApplication()
        app.launchArguments += ["-uiTest","1"]
        app.launch()
    }

    func testUserCanSignIn() {
        let login = LoginScreen(app)
        login.email.tap(); login.email.typeText("qa@example.com")
        login.password.tap(); login.password.typeText("hunter2")
        login.signIn.tap()
        XCTAssertTrue(app.staticTexts["Dashboard"].waitForExistence(timeout: 5))
    }
}
\`\`\`

### Tips
- Prefer accessibility identifiers over text matching.
- Use launch arguments and mock servers to keep data predictable.
- Run on real devices nightly; simulators on PRs for speed.`,
    image: "https://lfbemjnghstybysdemys.supabase.co/storage/v1/object/public/images/blog-images/1760801319635-va7z9k.png",
    read_time: "6-7"
  },
  {
    id: "efafcff2-fb46-411b-a038-f631cba4b4ac",
    title: "Contract-Friendly API Testing with Playwright (and Zod)",
    slug: "contract-friendly-api-testing-with-playwright-and-zod",
    excerpt: "Use Playwright's request context plus runtime schema validation to test endpoints like an enrichment service—fast, language-agnostic, and CI-ready.",
    content: `### Content

We often think "Playwright = UI," but its API testing story is excellent: shared auth, consistent reporters, parallel orchestration. Pair it with a schema validator so your tests fail when the contract drifts, not just when fields disappear.

**Setup a request context with auth**
\`\`\`
import { test, expect, request } from '@playwright/test';

test('enrichment returns expected schema', async () => {
  const ctx = await request.newContext({
    baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders: { Authorization: \`Bearer \${process.env.API_TOKEN}\` }
  });

  const res = await ctx.post('/enrichment/search', { data: { query: 'laptop' } });
  expect(res.ok()).toBeTruthy();
  const body = await res.json();
  // we'll validate \`body\` next
});
\`\`\`
**Validate responses with Zod**
\`\`\`
import { z } from 'zod';

const EnrichmentHit = z.object({
  id: z.string(),
  score: z.number().nonnegative(),
  fields: z.object({
    title: z.string(),
    price: z.number().optional(),
    brand: z.string().optional()
  }).passthrough()
});

const EnrichmentResponse = z.object({
  tookMs: z.number(),
  hits: z.array(EnrichmentHit)
});

test('contract: enrichment schema', async () => {
  const ctx = await request.newContext({ baseURL: process.env.API_BASE_URL });
  const res = await ctx.post('/enrichment/search', { data: { query: 'wireless' } });
  const json = await res.json();
  const parsed = EnrichmentResponse.parse(json); // throws if contract drifts
  expect(parsed.hits.length).toBeGreaterThan(0);
});
\`\`\`

**Make failures actionable**
- Print which field failed and why.
- Keep a "breaking-change" checklist for the backend: versioned fields, deprecation window, and comms.
\`\`\`
try {
  EnrichmentResponse.parse(json);
} catch (e: any) {
  console.error('Schema mismatch:', e.errors);
  throw e;
}
\`\`\`

**Tips**
- Add contract-only tests (fast, always-on) and functional tests (slower, nightly).
- For search-like services (e.g., OpenSearch enrichers), validate shape + invariants (non-negative scores, essential fields present).`,
    image: "https://lfbemjnghstybysdemys.supabase.co/storage/v1/object/public/images/blog-images/1760800237501-mwuunw.jpg",
    read_time: "6 min read"
  },
  {
    id: "f04d80ee-7ebf-47d7-9632-3c3cd8345340",
    title: "Service Virtualization with Mountebank: Deterministic E2E Without Test Data Drama",
    slug: "service-virtualization-mountebank-deterministic-e2e",
    excerpt: "When dependencies are flaky, slow, or expensive, Mountebank stubs unblock development and stabilize end-to-end tests—no tangled test data or brittle timeouts.",
    content: `## Content
Real systems depend on APIs you don't control. When they're rate-limited, noisy, or hard to seed, end-to-end tests become roulette. **Service virtualization** gives you a fake yet faithful dependency so UI and integration tests stay deterministic.

### Why Mountebank
- Language-agnostic HTTP imposters.
- Predicates & responses configurable via JSON.
- Works well in CI containers.

**Minimal imposter**
\`\`\`json
{
  "port": 4545,
  "protocol": "http",
  "stubs": [
    {
      "predicates": [{ "equals": { "path": "/enrich", "method": "POST" } }],
      "responses": [
        {
          "is": {
            "statusCode": 200,
            "headers": { "Content-Type": "application/json" },
            "body": { "tookMs": 12, "hits": [{ "id": "abc", "score": 0.91, "fields": { "title": "Sample" } }] }
          }
        }
      ]
    }
  ]
}
\`\`\`

\`\`\`bash title="Running in CI"
npx mb start --config imposters.json --loglevel warn &
# Run Playwright against http://localhost:4545
\`\`\`

### Patterns that scale
- Scenario endpoints: /enrich?variant=empty|slow|error.
- Data templating: Build responses with handlebars-like templates for dynamic IDs.
- Latency control: Simulate slowness to exercise timeouts and skeleton loaders.

### Result
determinism, faster pipelines, and fewer "works on my machine" bugs.
`,
    image: "https://lfbemjnghstybysdemys.supabase.co/storage/v1/object/public/images/blog-images/1760800689376-bfy4t0.png",
    read_time: "6 min read"
  }
];

async function migrateBlogPosts() {
  console.log('🚀 Starting blog posts migration to translations...\n');

  try {
    // Step 1: Check if blog_post_translations table exists
    console.log('📋 Checking blog_post_translations table...');
    const { error: tableCheckError } = await supabase
      .from('blog_post_translations')
      .select('id')
      .limit(1);

    if (tableCheckError && tableCheckError.message.includes('does not exist')) {
      console.error('❌ Error: blog_post_translations table does not exist.');
      console.error('   Please run the migration first: 20251020110000_blog_post_translations.sql');
      return;
    }

    // Step 2: For each blog post, create English translation
    console.log(`\n📝 Migrating ${blogPostsData.length} blog posts...\n`);

    for (const post of blogPostsData) {
      console.log(`Processing: ${post.title}`);

      // Check if post exists
      const { data: existingPost, error: postError } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('id', post.id)
        .single();

      if (postError || !existingPost) {
        console.log(`  ⚠️  Post not found in database, skipping...`);
        continue;
      }

      // Check if translation already exists
      const { data: existingTranslation } = await supabase
        .from('blog_post_translations')
        .select('id')
        .eq('blog_post_id', post.id)
        .eq('language', 'en')
        .single();

      if (existingTranslation) {
        console.log(`  ✓ English translation already exists, skipping...`);
        continue;
      }

      // Create English translation
      const { error: translationError } = await supabase
        .from('blog_post_translations')
        .insert({
          blog_post_id: post.id,
          language: 'en',
          title: post.title,
          excerpt: post.excerpt,
          content: post.content
        });

      if (translationError) {
        console.error(`  ❌ Error creating translation: ${translationError.message}`);
        continue;
      }

      console.log(`  ✓ English translation created`);
    }

    console.log('\n✅ Migration completed successfully!');
    console.log('\n💡 Next steps:');
    console.log('   1. Add Russian (ru) and Armenian (am) translations via Admin Dashboard');
    console.log('   2. Test language switching on the Blog page');
    console.log('   3. Update blog post creation forms to include all languages\n');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
}

// Run migration
migrateBlogPosts()
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Migration failed:', error);
    process.exit(1);
  });

