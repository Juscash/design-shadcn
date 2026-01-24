---
type: doc
name: testing-strategy
description: Testing strategy and quality assurance guidelines
category: testing
generated: 2026-01-24
status: filled
scaffoldVersion: "2.0.0"
---

# Testing Strategy

This repository maintains quality through a layered approach that combines fast feedback (unit/component tests), confidence-building integration checks, and optional end-to-end verification for user-critical flows. The goal is to keep the UI package (`packages/ui`) stable as a reusable library while ensuring the consuming app (`apps/web`) behaves correctly when composed with shared components and utilities.

Key principles:

- **Shift-left**: Most regressions should be caught by **unit/component tests** close to the source (e.g., `packages/ui/src/components/**`).
- **Test public behavior, not implementation details**: Prefer asserting rendered output, accessibility attributes, and user interactions over internal state.
- **Consistency across packages**: Use the same conventions for test naming, structure, and utilities so tests are discoverable and maintainable.
- **Quality gates before merge**: A change is considered ready only after tests pass, linting/formatting are clean, and coverage expectations are met.
- **Focus areas in this codebase**
  - **UI components** (e.g., `Button`): verify rendering, variants/classes, disabled states, and event handling.
  - **Utilities** (e.g., `cn`): verify className composition rules and edge cases.

Cross-reference: see [development-workflow.md](./development-workflow.md) for day-to-day contribution flow (branching, PR expectations, and local setup).

---

## Test Types

- **Unit (Utilities)**
  - **Framework**: Jest *(or the repo’s configured unit runner; verify via `package.json` scripts)*
  - **Where**: `packages/ui/src/lib/**`
  - **Naming**: `*.test.ts`
  - **Tooling**:
    - TypeScript
    - Coverage provider configured by the test runner
  - **Typical scenarios**:
    - `cn` class composition: handles strings, arrays, conditional values, falsy values, duplicates (as applicable)

- **Component / Unit (UI components)**
  - **Framework**: Jest + React Testing Library *(recommended for component behavior testing)*
  - **Where**: `packages/ui/src/components/**`
  - **Naming**: `*.test.tsx` (example present: `packages/ui/src/components/button/button.test.tsx`)
  - **Tooling**:
    - `@testing-library/react`
    - `@testing-library/jest-dom`
    - `jsdom` test environment
    - Optional: `@testing-library/user-event` for interactions
  - **Typical scenarios**:
    - Render smoke test (component mounts)
    - Props mapping (e.g., `ButtonProps`)
    - Accessibility checks (role/name, disabled state)
    - Interaction (click triggers handler, disabled prevents action)
    - Class/variant output (ensure `cn`/variant logic produces expected classes)

- **Integration**
  - **Framework**: Jest + React Testing Library *(or equivalent configured runner)*
  - **Where**: Typically in the consuming app (`apps/web/src/**`) or dedicated `__tests__/integration/**`
  - **Naming**: `*.integration.test.ts(x)` *(recommended)*
  - **Tooling**:
    - Same as component tests
    - Mocking network boundaries as needed (MSW recommended if API calls exist)
  - **Typical scenarios**:
    - App page/component composes multiple UI components correctly
    - Routing boundaries, providers, and shared state wiring
    - Verifying that `apps/web` imports `packages/ui` and renders expected UI (e.g., `apps/web/src/main.tsx` bootstrapping)

- **E2E (End-to-End)**
  - **Framework**: Playwright *(recommended)* or Cypress *(if already configured)*
  - **Where**: `e2e/**` or `apps/web/e2e/**`
  - **Naming**: `*.spec.ts`
  - **Tooling**:
    - A running dev server or preview build (CI should use a deterministic build)
    - Browser install step in CI (Playwright)
  - **Typical scenarios**:
    - Critical user journeys across real browser behavior
    - Visual regressions (optional) and accessibility checks (optional)

---

## Running Tests

> Exact commands depend on the scripts defined in the repository `package.json`. The following commands reflect the standard expected interface; adjust to match the actual scripts if they differ.

- **All tests**
  ```bash
  npm run test
  ```

- **Watch mode**
  ```bash
  npm run test -- --watch
  ```

- **Coverage**
  ```bash
  npm run test -- --coverage
  ```

- **Run a single test file (example)**
  ```bash
  npm run test -- packages/ui/src/components/button/button.test.tsx
  ```

- **Run tests related to changed files (if supported by runner)**
  ```bash
  npm run test -- --onlyChanged
  ```

- **E2E (if configured)**
  ```bash
  npm run test:e2e
  ```
  *(If there is no `test:e2e` script yet, add one aligned with the chosen runner, e.g., `playwright test`.)*

---

## Quality Gates

- **Tests must pass**
  - All unit/component/integration tests must be green before merge.
  - No skipped tests in PRs unless explicitly approved and tracked.

- **Coverage expectations (minimums)**
  - **Global minimums (recommended)**:
    - Statements: **80%**
    - Branches: **75%**
    - Functions: **80%**
    - Lines: **80%**
  - **For `packages/ui` (recommended stricter target)**:
    - Statements/Lines: **85%**
    - Branches: **80%**
  - New or significantly changed modules should include tests for:
    - happy path
    - edge cases
    - error/disabled states (where applicable)

- **Linting and formatting**
  - Lint must pass before merge:
    ```bash
    npm run lint
    ```
  - Formatting must be enforced (either by CI or pre-commit):
    ```bash
    npm run format
    ```
  - If using TypeScript strictness checks, ensure typecheck passes:
    ```bash
    npm run typecheck
    ```

- **PR expectations**
  - Include/adjust tests for behavior changes to public APIs (e.g., `ButtonProps`) and shared utilities (e.g., `cn`).
  - Avoid snapshot-only tests for components unless snapshots are small, stable, and reviewed carefully.
  - Tests should be deterministic: no reliance on real time, random values, or network without mocking.

---

## Troubleshooting

Common issues and fixes:

- **Tests fail due to DOM APIs missing**
  - Ensure the test environment is **jsdom** for React component tests.
  - If a component uses `window.matchMedia`, `ResizeObserver`, etc., provide a test polyfill/mock in the test setup file.

- **Flaky interaction tests**
  - Prefer `@testing-library/user-event` over manually firing low-level events.
  - Await async UI updates:
    - `await user.click(...)`
    - `await screen.findBy...`
    - `await waitFor(...)`

- **CSS / className assertions are brittle**
  - Assert on **meaningful classes** only (e.g., variant base class) or prefer behavioral checks (disabled state, role/name).
  - If `cn` logic changes, update tests to validate the intended output rather than exact ordering unless ordering is part of the contract.

- **Long-running suites**
  - Split heavy integration tests from unit tests (e.g., use `*.integration.test.tsx`).
  - Avoid unnecessary full renders; keep tests focused and minimal.

---

## Related Resources

- [development-workflow.md](./development-workflow.md)
