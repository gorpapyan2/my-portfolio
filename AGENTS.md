# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React app (components, pages, hooks, contexts, services, and styles).
- `src/components/` holds UI components; feature sections live under `src/components/home/`.
- `src/pages/` contains routed pages (e.g., `HomePage.tsx`, `WorkPage/`).
- `src/styles/` contains global CSS, tokens, and utility layers.
- `public/` stores static assets (favicons, images, `404.html`).
- `tests/` includes Playwright UI tests and snapshots.
- `supabase/` holds SQL migrations and seed scripts.

## Build, Test, and Development Commands
- `npm run dev`: start the Vite dev server.
- `npm run build`: build the production bundle.
- `npm run preview`: serve the built bundle locally.
- `npm run lint`: run ESLint across the project.
- `npm run test:ui`: run Playwright tests.
- `npm run test:tokens`: validate design tokens via `scripts/verify-design-tokens.mjs`.

## Coding Style & Naming Conventions
- TypeScript + React; formatting follows ESLint defaults in `eslint.config.js`.
- Components and pages use PascalCase (`HeroContent.tsx`, `HomePage.tsx`).
- Hooks use `useX` naming (`useScrollPosition.ts`).
- CSS uses custom properties and Tailwind utility classes; spacing uses `--space-*` tokens.

## Testing Guidelines
- UI tests are Playwright-based (`tests/*.spec.ts`).
- Snapshot images live under `tests/*-snapshots/`.
- Use descriptive spec names and keep tests focused on user-facing behavior.

## Commit & Pull Request Guidelines
- Recent history primarily follows Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`), with occasional ad‑hoc messages.
- Prefer Conventional Commits for consistency.
- PRs should include: clear summary, test evidence (commands run or screenshots for UI), and linked issues if applicable.

## Configuration & Environment
- Vite is configured in `vite.config.ts`.
- Supabase migrations and seed scripts live under `supabase/` and `src/scripts/`.
- Environment flags and translations are managed in `src/lib/services/` and `src/translations/`.

## Design Tokens & UI Guidelines
- Global tokens live in `src/styles/tokens.css` and are referenced as `var(--space-*)`, `var(--font-*)`, `var(--bg-*)`.
- Shared styling conventions are defined in `src/styles/base.css`, `src/styles/components.css`, and `src/styles/utilities.css`.
- Prefer tokens over hard-coded values; when creating new components, reuse existing utilities and `Card`/`Section` patterns.
