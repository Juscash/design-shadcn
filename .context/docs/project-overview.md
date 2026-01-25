## Project Overview

This repository is a focused UI component library built with shadcn-style patterns. It provides a comprehensive design system with reusable, typed components that teams can integrate across multiple applications. The project emphasizes consistency, accessibility, and developer experience through comprehensive testing and interactive documentation.

At a glance: `packages/ui` provides UI components (starting with `Button`) and shared utilities (like `cn` for class name composition), with Storybook serving as the primary environment for component exploration and validation.

## Codebase Reference

> **Detailed Analysis**: For complete symbol counts, architecture layers, and dependency graphs, see [`codebase-map.json`](./codebase-map.json).

## Quick Facts

- Root: `C:\projetos\design-shadcn`
- Languages: TypeScript/TSX (see [`codebase-map.json`](./codebase-map.json) for exact file counts)
- Key workspace:
  - UI package: `packages/ui`
- Notable public API (sample): `ButtonProps`, `cn` (full list in [`codebase-map.json`](./codebase-map.json))
- Full analysis: [`codebase-map.json`](./codebase-map.json)

## Entry Points

- Storybook development server: `npm run storybook` (configured at `.storybook/main.ts`)
- UI Button component: [`packages/ui/src/components/button/button.tsx`](../packages/ui/src/components/button/button.tsx)
- UI utilities (`cn`): [`packages/ui/src/lib/utils.ts`](../packages/ui/src/lib/utils.ts)

## Key Exports

For the complete export surface, refer to [`codebase-map.json`](./codebase-map.json). Commonly used exports include:

- `ButtonProps` — UI component props contract (exported from [`packages/ui/src/components/button/button.tsx`](../packages/ui/src/components/button/button.tsx))
- `cn` — utility to compose/merge class names (exported from [`packages/ui/src/lib/utils.ts`](../packages/ui/src/lib/utils.ts))

## File Structure & Code Organization

- `packages/` — reusable libraries meant to be consumed by external applications
  - `packages/ui/` — design system / UI component library
    - `src/components/` — component implementations (e.g., `button/`)
    - `src/lib/` — shared utilities used by components (e.g., `utils.ts` with `cn`)
    - `src/styles/` — CSS tokens and compiled styles
- `.storybook/` — Storybook configuration for interactive component documentation
- `storybook-static/` — built Storybook static site
- `docs/` — project documentation (this file, plus architecture/workflow/tooling docs)
- Component collateral (inside component folders):
  - `*.test.tsx` — automated tests (example: Button tests)
  - `*.stories.tsx` — Storybook stories (example: Button stories)

## Technology Stack Summary

This is a TypeScript-first UI component library organized around modern React development patterns:

- **Runtime/platform**: JavaScript/TypeScript targeting the browser with React components
- **UI library layer**: `packages/ui` provides reusable components plus shared utilities
- **Testing & documentation hooks**:
  - Component tests live alongside components (e.g., `button.test.tsx`)
  - Story definitions exist for interactive component exploration (e.g., `button.stories.tsx`)
- **Build/tooling conventions**: The repo follows modern TypeScript/React library conventions with Storybook for documentation and Vitest for testing. For the authoritative inventory of tooling/config files and dependency relationships, see [`codebase-map.json`](./codebase-map.json) and the guides linked below.

## Core Framework Stack (optional)

- **Frontend framework**: React (implied by `.tsx` usage and component patterns)
- **Component architecture**: "Components depend on utils" layering:
  - Components: `packages/ui/src/components/**`
  - Utils: `packages/ui/src/lib/**`  
  This keeps component code thin and encourages reuse of shared helpers such as `cn`.

For more architectural detail (and how boundaries are enforced), see [architecture.md](./architecture.md).

## UI & Interaction Libraries (optional)

- The UI package is structured in a shadcn-like way: components are implemented as source you own and can modify, with utilities in `src/lib` and component implementations under `src/components`.
- Storybook stories (`*.stories.tsx`) provide a developer-friendly, interactive way to review variants and expected behavior for components such as `Button`.

If your team cares about consistency and accessibility, this repo's structure supports that naturally: shared utilities and centralized components make it easier to apply theming, class naming conventions, and a11y improvements in one place.

## Development Tools Overview (optional)

Day-to-day work primarily focuses on the UI package lifecycle:

- **Component development loop**: implement/update components in `packages/ui`, run tests, and review in Storybook.
- **Documentation loop**: iterate on component stories and documentation to ensure clear usage examples.

For the exact commands and scripts supported by this repository, see:
- [development-workflow.md](./development-workflow.md)
- [tooling.md](./tooling.md)

## Getting Started Checklist

1. Install dependencies at the repo root:
   - `npm install`
2. Start Storybook to explore components:
   - `npm run storybook` and navigate to `http://localhost:6006`
3. Validate the UI package in isolation:
   - Open the `Button` component at [`packages/ui/src/components/button/button.tsx`](../packages/ui/src/components/button/button.tsx) and locate its tests/stories alongside it.
4. Run checks to build confidence before making changes:
   - Execute the repository's test and/or typecheck scripts (documented in [development-workflow.md](./development-workflow.md)).
5. Use the docs to orient yourself:
   - Read [architecture.md](./architecture.md) for boundaries and layering, then keep [`codebase-map.json`](./codebase-map.json) handy for "what depends on what".

## Next Steps (optional)

If you're evaluating this repo for adoption, the best next step is to pick one component (the `Button` is a good starting point), identify the variants you need, and confirm the workflow supports:
- adding variants safely (tests),
- demonstrating behavior (stories),
- and validating usage through Storybook.

From there, expand `packages/ui/src/components` with additional primitives, keeping shared logic in `packages/ui/src/lib` to maintain the "components depend on utils" layering described in [architecture.md](./architecture.md).

## Related Resources

- [architecture.md](./architecture.md)
- [development-workflow.md](./development-workflow.md)
- [tooling.md](./tooling.md)
- [codebase-map.json](./codebase-map.json)