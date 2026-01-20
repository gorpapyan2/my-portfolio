# Claude Code Subagents Registry

This repository uses specialized Claude Code subagents to handle specific workflows. Each agent has minimal tool permissions following least-privilege principles.

## Agent Overview

| Agent | Purpose | Trigger | Tools |
|-------|---------|---------|-------|
| **build-validator** | Validates Vite build and TypeScript compilation | PROACTIVELY after code changes | Bash |
| **lint-enforcer** | Runs ESLint and applies auto-fixes | PROACTIVELY after code changes | Bash, Edit |
| **test-runner** | Executes Playwright E2E tests | MUST BE USED before deployments | Bash |
| **supabase-seeder** | Manages database seeding operations | When seeding content or updating schemas | Bash |
| **deploy-guardian** | Handles GitHub Pages deployment | MUST BE USED when deploying | Bash |
| **code-analyzer** | Analyzes code quality (automated tools) and component architecture | PROACTIVELY for refactoring or quality insights | Bash, Read, Grep, Glob |
| **i18n-manager** | Validates translation coverage and identifies gaps | PROACTIVELY after adding UI strings | Read, Grep, Glob |
| **repo-onboarding** | Teaches newcomers the repository architecture | When onboarding developers or explaining structure | Read, Grep, Glob |

## Key Improvements

### Reduced Overlap
- **Merged**: `analysis-reporter` + `component-inspector` → `code-analyzer`
  - Handles both automated analysis (madge, jscpd, ts-prune) and manual component exploration
  - Single agent for all code structure questions

### Tightened Permissions
- **Bash-only agents** (no file reading needed, work with command output):
  - build-validator, test-runner, supabase-seeder, deploy-guardian
- **Limited Edit** (only for auto-fixes):
  - lint-enforcer (Bash + Edit)
- **Read-only agents** (exploration without modification):
  - i18n-manager, repo-onboarding
- **Analysis agent** (needs to read reports and code):
  - code-analyzer (Bash + Read + Grep + Glob)

## Usage Guidelines

### When Claude Code Should Auto-Delegate

Claude Code should automatically invoke these agents when:

1. **build-validator** - After modifying TypeScript files, components, or build config
2. **lint-enforcer** - After creating/modifying source files
3. **test-runner** - Before user says "deploy" or "ready for production"
4. **deploy-guardian** - When user requests deployment
5. **code-analyzer** - When user asks about code quality, architecture, or component structure
6. **i18n-manager** - After adding new UI components with user-facing text
7. **repo-onboarding** - When user asks "how does this work" or needs architectural overview

### Workflow Examples

#### Pre-Deployment Checklist
```bash
1. lint-enforcer (auto-fix issues)
2. build-validator (verify types and build)
3. test-runner (run E2E tests)
4. deploy-guardian (execute deployment)
```

#### New Feature Development
```bash
1. code-analyzer (understand existing architecture)
2. [user makes changes]
3. lint-enforcer (check code quality)
4. build-validator (verify compilation)
5. i18n-manager (check translations)
6. test-runner (verify user flows)
```

#### Onboarding New Developer
```bash
1. repo-onboarding (architectural overview)
2. code-analyzer (explore specific components)
3. [developer makes changes]
4. lint-enforcer (ensure code quality)
```

#### Code Quality Review
```bash
1. code-analyzer (run automated analysis)
2. [review findings]
3. lint-enforcer (fix style issues)
4. build-validator (verify changes)
```

## Agent Details

### build-validator
**Purpose**: Validates Vite build and TypeScript compilation
**Tools**: Bash only
**What it does**: Runs `tsc --noEmit` and `npm run build`, parses output for type errors
**What it doesn't**: Read files directly (works with compiler output)

### lint-enforcer
**Purpose**: Enforces ESLint code quality standards
**Tools**: Bash, Edit
**What it does**: Runs `npm run lint`, applies auto-fixes with Edit tool
**What it doesn't**: Fix semantic issues (only safe auto-fixes)

### test-runner
**Purpose**: Executes Playwright E2E tests
**Tools**: Bash only
**What it does**: Runs `npm run test:ui`, parses test results from output
**What it doesn't**: Read test files (works with test runner output)

### supabase-seeder
**Purpose**: Manages database seeding operations
**Tools**: Bash only
**What it does**: Runs `npm run seed:*` scripts, reports success/failure
**What it doesn't**: Read seed scripts or data files

### deploy-guardian
**Purpose**: Deploys to GitHub Pages
**Tools**: Bash only
**What it does**: Runs `npm run deploy`, verifies with `git status` and `ls`
**What it doesn't**: Read config files (uses command output)

### code-analyzer
**Purpose**: Analyzes code quality and architecture
**Tools**: Bash, Read, Grep, Glob
**What it does**:
- Automated mode: Runs `npm run analysis:all`, reads `reports/analysis.json`
- Component mode: Explores React components, traces dependencies, maps architecture
**What it doesn't**: Modify code (analysis only)
**Replaces**: Previous `analysis-reporter` and `component-inspector` agents

### i18n-manager
**Purpose**: Validates translation coverage
**Tools**: Read, Grep, Glob
**What it does**: Reads translation files, greps for usage, identifies missing/unused keys
**What it doesn't**: Modify translations or run commands (pure exploration)

### repo-onboarding
**Purpose**: Teaches repository architecture to newcomers
**Tools**: Read, Grep, Glob
**What it does**: Explores structure, reads key files, explains patterns and conventions
**What it doesn't**: Modify anything (read-only guide)

## Agent Files

All agent definitions are located in `.claude/agents/`:

- `build-validator.md` - Build and type checking
- `lint-enforcer.md` - ESLint integration
- `test-runner.md` - E2E testing
- `supabase-seeder.md` - Database seeding
- `deploy-guardian.md` - GitHub Pages deployment
- `code-analyzer.md` - Code quality and component analysis
- `i18n-manager.md` - Translation validation
- `repo-onboarding.md` - Architecture guide

## Repository Context

- **Type**: React + TypeScript portfolio website
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, auth, storage)
- **Testing**: Playwright (E2E)
- **Linting**: ESLint
- **Deployment**: GitHub Pages via gh-pages
- **CI/CD**: GitHub Actions (.github/workflows/)
- **Analysis**: Custom tools (madge, jscpd, ts-prune, depcheck)

## Tool Permission Matrix

| Agent | Bash | Edit | Read | Grep | Glob | Rationale |
|-------|------|------|------|------|------|-----------|
| build-validator | ✓ | - | - | - | - | Command output only |
| lint-enforcer | ✓ | ✓ | - | - | - | Auto-fix capability |
| test-runner | ✓ | - | - | - | - | Test output only |
| supabase-seeder | ✓ | - | - | - | - | Seed command only |
| deploy-guardian | ✓ | - | - | - | - | Deploy command only |
| code-analyzer | ✓ | - | ✓ | ✓ | ✓ | Needs to read code/reports |
| i18n-manager | - | - | ✓ | ✓ | ✓ | Pure exploration |
| repo-onboarding | - | - | ✓ | ✓ | ✓ | Pure exploration |

## Design Principles

1. **Least Privilege**: Agents only get tools they absolutely need
2. **Single Responsibility**: Each agent has one clear purpose
3. **No Overlap**: Agent responsibilities don't overlap or duplicate
4. **Report First**: Agents report issues rather than auto-fixing complex problems
5. **Bash-Only Default**: If agent only needs command output, it only gets Bash
6. **Progressive Disclosure**: Start with least permissions, add only when necessary

## Extending Agents

To add new agents:

1. Create `.claude/agents/your-agent.md` with YAML frontmatter
2. Define **minimal** tool permissions (start with least, add only if needed)
3. Write clear responsibilities and examples
4. Update this registry table
5. Test agent invocation
6. Document in tool permission matrix

## Notes

- Agents DO NOT modify application source code outside their specific mandates
- Agents operate only within their designated directories
- All agents provide file:line references for issues found
- Agents prioritize reporting over auto-fixing complex issues
- Permission tightening: Agents can only use tools explicitly listed in their frontmatter
