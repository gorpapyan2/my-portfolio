# Claude Code Subagents Registry

This repository uses specialized Claude Code subagents to handle specific workflows. Each agent has minimal tool permissions and a focused purpose.

## Agent Overview

| Agent | Purpose | Trigger | Tools |
|-------|---------|---------|-------|
| **build-validator** | Validates Vite build and TypeScript compilation | PROACTIVELY after code changes affecting build | Bash, Read, Grep |
| **lint-enforcer** | Runs ESLint and reports/fixes linting issues | PROACTIVELY after code changes | Bash, Edit, Read, Grep |
| **playwright-tester** | Executes E2E tests and interprets results | MUST BE USED before deployments | Bash, Read, Grep, Glob |
| **supabase-seeder** | Manages database seeding for content types | When updating schemas or seeding data | Bash, Read, Grep, Glob |
| **deploy-guardian** | Handles GitHub Pages deployment and verification | MUST BE USED when deploying | Bash, Read, Grep |
| **analysis-reporter** | Runs code analysis tools and generates quality reports | PROACTIVELY for code quality insights | Bash, Read, Grep, Glob |
| **component-inspector** | Analyzes React component architecture and dependencies | When understanding or refactoring components | Read, Grep, Glob |
| **i18n-validator** | Validates translation coverage and identifies gaps | PROACTIVELY after adding UI strings | Read, Grep, Glob, Bash |

## Usage Guidelines

### When Claude Code Should Auto-Delegate

Claude Code should automatically invoke these agents when:

1. **build-validator** - After modifying TypeScript files, components, or build config
2. **lint-enforcer** - After creating/modifying source files
3. **playwright-tester** - Before user says "deploy" or "ready for production"
4. **deploy-guardian** - When user requests deployment
5. **analysis-reporter** - When user asks about code quality or before major refactoring
6. **component-inspector** - When user asks "how does [component] work" or plans refactoring
7. **i18n-validator** - After adding new UI components with user-facing text

### Workflow Examples

#### Pre-Deployment Checklist
```bash
1. lint-enforcer (auto-fix issues)
2. build-validator (verify types and build)
3. playwright-tester (run E2E tests)
4. deploy-guardian (execute deployment)
```

#### New Feature Development
```bash
1. component-inspector (understand existing architecture)
2. [user makes changes]
3. lint-enforcer (check code quality)
4. build-validator (verify compilation)
5. i18n-validator (check translations)
```

#### Code Quality Review
```bash
1. analysis-reporter (run full analysis)
2. [review findings]
3. lint-enforcer (fix style issues)
4. build-validator (verify changes)
```

## Agent Files

All agent definitions are located in `.claude/agents/`:

- `build-validator.md` - Build and type checking
- `lint-enforcer.md` - ESLint integration
- `playwright-tester.md` - E2E testing
- `supabase-seeder.md` - Database seeding
- `deploy-guardian.md` - GitHub Pages deployment
- `analysis-reporter.md` - Code quality analysis
- `component-inspector.md` - Component architecture
- `i18n-validator.md` - Translation validation

## Tool Permissions

Agents follow least-privilege principles:

- **Read-only agents**: component-inspector, i18n-validator (no modifications)
- **Limited edit**: lint-enforcer (only auto-fixable lint issues)
- **Bash execution**: build-validator, lint-enforcer, playwright-tester, supabase-seeder, deploy-guardian, analysis-reporter, i18n-validator
- **No Edit permission**: build-validator, playwright-tester, supabase-seeder, deploy-guardian, analysis-reporter (report issues only)

## Repository Context

- **Type**: React + TypeScript portfolio website
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Testing**: Playwright (E2E)
- **Linting**: ESLint
- **Deployment**: GitHub Pages via gh-pages
- **CI/CD**: GitHub Actions (.github/workflows/)

## Extending Agents

To add new agents:

1. Create `.claude/agents/your-agent.md` with YAML frontmatter
2. Define minimal tool permissions
3. Write clear responsibilities and examples
4. Update this registry table
5. Test agent invocation

## Notes

- Agents DO NOT modify application source code outside their specific mandates
- Agents operate only within their designated directories
- All agents provide file:line references for issues found
- Agents prioritize reporting over auto-fixing complex issues
