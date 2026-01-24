---
type: doc
name: project-overview
description: Project overview and getting started guide
category: general
generated: 2026-01-24
status: filled
scaffoldVersion: "2.0.0"
---

## Project Overview

This repository is a small, focused monorepo for building and showcasing a reusable UI package (with shadcn-style patterns) alongside a web app that consumes it. It’s meant to help teams ship consistent UI components faster—designers get a predictable design system surface area, and developers get typed, testable components they can reuse across apps.

At a glance: the `packages/ui` workspace provides components (starting with `Button`) and shared utilities (like `cn` for class name composition), while `apps/web` acts as a real consumer to run and validate the UI in a browser.

## Codebase Reference

> **Detailed Analysis**: For complete symbol counts, architecture layers, and dependency graphs, see [`codebase-map.json`](./codebase-map.json).

## Quick Facts

- Root: `C:\projetos\design-shadcn`
- Languages: TypeScript/TSX (see [`codebase-map.json`](./codebase-map.json) for exact file counts)
- Key workspaces:
  - UI package: `packages/ui`
  - Web app: `apps/web`
- Notable public API (sample): `ButtonProps`, `cn` (full list in [`codebase-map.json`](./codebase-map.json))
- Full analysis: [`codebase-map.json`](./codebase-map.json)

## Entry Points

- Web app bootstrap: [`apps/web/src/main.tsx`](../apps/web/src/main.tsx)
- UI Button component: [`packages/ui/src/components/button/button.tsx`](../packages/ui/src/components/button/button.tsx)
- UI utilities (`cn`): [`packages/ui/src/lib/utils.ts`](../packages/ui/src/lib/utils.ts)

## Key Exports

For the complete export surface, refer to [`codebase-map.json`](./codebase-map.json). Commonly used exports include:

- `ButtonProps` — UI component props contract (exported from [`packages/ui/src/components/button/button.tsx`](../packages/ui/src/components/button/button.tsx))
- `cn` — utility to compose/merge class names (exported from [`packages/ui/src/lib/utils.ts`](../packages/ui/src/lib/utils.ts))

## File Structure & Code Organization

- `apps/` — runnable applications in the monorepo
  - `apps/web/` — the web app that imports and exercises the UI package (e.g., app entry at `src/main.tsx`)
- `packages/` — reusable libraries meant to be consumed by apps (and potentially published)
  - `packages/ui/` — the design system / UI component library
    - `src/components/` — component implementations (e.g., `button/`)
    - `src/lib/` — shared utilities used by components (e.g., `utils.ts` with `cn`)
- `docs/` — project documentation (this file, plus architecture/workflow/tooling docs)
- Component collateral (inside component folders):
  - `*.test.tsx` — automated tests (example: Button tests)
  - `*.stories.tsx` — Storybook stories (example: Button stories)

## Technology Stack Summary

This is a TypeScript-first monorepo organized around an “app consumes package” workflow:

- **Runtime/platform**: JavaScript/TypeScript targeting the browser (React-style entrypoint in `apps/web/src/main.tsx`)
- **UI library layer**: `packages/ui` provides reusable components plus shared utilities
- **Testing & documentation hooks**:
  - Component tests live alongside components (e.g., `button.test.tsx`)
  - Story definitions exist for interactive component exploration (e.g., `button.stories.tsx`)
- **Build/tooling conventions**: The repo follows common modern TS/React monorepo conventions (workspace packages, app entrypoints, co-located tests/stories). For the authoritative inventory of tooling/config files and dependency relationships, see [`codebase-map.json`](./codebase-map.json) and the guides linked below.

## Core Framework Stack (optional)

- **Frontend framework**: React (implied by `.tsx` usage and `main.tsx` entrypoint)
- **Component architecture**: “Components depend on utils” layering:
  - Components: `packages/ui/src/components/**`
  - Utils: `packages/ui/src/lib/**`  
  This keeps component code thin and encourages reuse of shared helpers such as `cn`.

For more architectural detail (and how boundaries are enforced), see [architecture.md](./architecture.md).

## UI & Interaction Libraries (optional)

- The UI package is structured in a shadcn-like way: components are implemented as source you own and can modify, with utilities in `src/lib` and component implementations under `src/components`.
- Storybook stories (`*.stories.tsx`) provide a developer-friendly, interactive way to review variants and expected behavior for components such as `Button`.

If your team cares about consistency and accessibility, this repo’s structure supports that naturally: shared utilities and centralized components make it easier to apply theming, class naming conventions, and a11y improvements in one place.

## Development Tools Overview (optional)

Day-to-day work typically splits into two loops:

- **Package loop (UI library)**: implement/update components in `packages/ui`, run tests, and review in stories.
- **Consumer loop (web app)**: run `apps/web` to see real integration behavior and catch breaking changes early.

For the exact commands and scripts supported by this repository, see:
- [development-workflow.md](./development-workflow.md)
- [tooling.md](./tooling.md)

## Getting Started Checklist

1. Install dependencies at the repo root (monorepo workspace install):
   - `npm install`
2. Start the web app and confirm it boots:
   - Run the dev script defined by the repo (see [tooling.md](./tooling.md)); the web entrypoint is [`apps/web/src/main.tsx`](../apps/web/src/main.tsx).
3. Validate the UI package in isolation:
   - Open the `Button` component at [`packages/ui/src/components/button/button.tsx`](../packages/ui/src/components/button/button.tsx) and locate its tests/stories alongside it.
4. Run checks to build confidence before making changes:
   - Execute the repository’s test and/or lint scripts (documented in [development-workflow.md](./development-workflow.md)).
5. Use the docs to orient yourself:
   - Read [architecture.md](./architecture.md) for boundaries and layering, then keep [`codebase-map.json`](./codebase-map.json) handy for “what depends on what”.

## Next Steps (optional)

If you’re evaluating this repo for adoption, the best next step is to pick one component (the `Button` is a good starting point), identify the variants you need, and confirm the workflow supports:
- adding variants safely (tests),
- demonstrating behavior (stories),
- and validating real usage (web app integration).

From there, expand `packages/ui/src/components` with additional primitives, keeping shared logic in `packages/ui/src/lib` to maintain the “components depend on utils” layering described in [architecture.md](./architecture.md).

## Related Resources

- [architecture.md](./architecture.md)
- [development-workflow.md](./development-workflow.md)
- [tooling.md](./tooling.md)
- [codebase-map.json](./codebase-map.json)
