---
type: agent
name: Code Reviewer
description: Review code changes for quality and best practices
agentType: code-reviewer
phases: [R, V]
generated: 2026-01-24
status: filled
scaffoldVersion: "2.0.0"
---

# Code Reviewer Agent Playbook (design-shadcn)

## Mission

Ensure every change merged into **design-shadcn** is consistent with the repo’s **UI-component library standards**: correctness, maintainability, accessibility, predictable APIs, styling consistency (Tailwind/class-variance patterns), and TypeScript safety. Engage this agent for PR reviews that modify UI components, shared utilities, styling/class composition, or public exports.

---

## Responsibilities

- Validate **public API stability** for exported components/types (e.g., `ButtonProps`) and shared utilities (e.g., `cn`).
- Enforce **component conventions**: class composition, variants, props, ref forwarding, and file organization.
- Check **accessibility and semantics**: proper element selection, ARIA usage, keyboard behavior, focus states, and disabled states.
- Ensure **TypeScript correctness**: types are precise, exports are intentional, and no unsafe casts leak to consumers.
- Review **styling and theming** consistency: Tailwind classes, variant patterns, and avoidance of conflicting class concatenation.
- Guard **maintainability**: readable code, minimal duplication, clear naming, and appropriate abstractions.
- Verify **test expectations** (if/when present): modifications include adequate coverage or are explicitly justified when tests are not applicable.
- Confirm **documentation touchpoints**: README/component docs/story files updated when public behavior changes.

---

## Repository Starting Points (what to review first)

### UI Package
- `packages/ui/src/components/`
  - Primary location for reusable React components (e.g., `button/`).
- `packages/ui/src/lib/`
  - Shared helpers and utilities used across components (e.g., `utils.ts` containing `cn`).

### Typical Review Scope
- Component implementations (`*.tsx`) that are shipped to consumers.
- Shared utility functions used broadly (high blast radius).
- Any barrel exports (if present in the repo) that define the public surface area.

---

## Key Files (and why they matter)

- `packages/ui/src/components/button/button.tsx`
  - Reference implementation for component conventions: props typing, class composition, and API surface. Changes here can affect consumers widely.
- `packages/ui/src/lib/utils.ts`
  - Contains `cn`—a foundational class-name helper used throughout components. Changes here have very high impact.

---

## Architecture Context (relevant layers)

### Utils Layer
- **Directory:** `packages/ui/src/lib`
- **Purpose:** shared utilities/helpers used by components.
- **Key export:**
  - `cn` @ `packages/ui/src/lib/utils.ts`

### Components Layer
- **Directory:** `packages/ui/src/components`
- **Purpose:** composable UI primitives and patterns.
- **Example:**
  - Button component @ `packages/ui/src/components/button/button.tsx`

---

## Key Symbols for This Agent

- `cn` (exported) — `packages/ui/src/lib/utils.ts`
  - Must remain stable, predictable, and compatible with existing call-sites.
- `ButtonProps` (exported) — `packages/ui/src/components/button/button.tsx`
  - Public-facing type; changes may be breaking for downstream users.

---

## Review Workflow (PR-by-PR)

### 1) Intake & Scope
- Identify:
  - Which package(s) changed (focus on `packages/ui`).
  - Whether exports/public API changed (`export`, type changes, renamed props).
  - Whether changes affect `cn` or other shared utilities (treat as **high risk**).

### 2) Build a “Risk Map”
Classify the PR:
- **High risk**
  - Changes to `cn` or shared utilities
  - Breaking changes to component props/types
  - Class/variant system modifications
- **Medium risk**
  - Component behavior changes, refactoring rendering logic
  - Styling changes affecting focus/hover/disabled states
- **Low risk**
  - Internal refactors that don’t change behavior
  - Comments, non-exported types, formatting

### 3) Code Review Passes (ordered)

#### Pass A — API & Types
- Confirm exported signatures are intentional:
  - Are `ButtonProps` (or other props types) still accurate and ergonomic?
  - Any new props have sensible defaults and are documented (in code/comments if that’s the repo norm).
- Validate TypeScript usage:
  - Avoid `any`, broad `object`, or unsafe type assertions in component boundaries.
  - Ensure generics and `ComponentProps` types are correct for the rendered element.

#### Pass B — Rendering & Behavior
- Check component semantics:
  - Correct element type (button vs link vs custom `asChild` patterns if used).
  - Correct handling of `disabled`, `aria-disabled`, and click handlers.
- Ensure ref forwarding is correct (if the repo’s Button uses `forwardRef`, enforce consistent patterns).

#### Pass C — Styling & Class Composition
- Verify consistent usage of `cn`:
  - `cn(...)` used for merging class strings/conditional classes.
  - No manual string concatenation that could introduce conflicts or unreadability.
- Ensure Tailwind class ordering/precedence is stable:
  - Avoid duplicated mutually-exclusive classes unless a variant system resolves them.
- If variants exist (common in shadcn-style components), verify:
  - Variant names are consistent (`default`, `secondary`, `destructive`, etc.).
  - Size variants are consistent (`sm`, `md`, `lg`) and mapped to sensible classes.

#### Pass D — Accessibility & UX
- Keyboard interactions:
  - If clickable, must be reachable via keyboard.
- Focus states:
  - Ensure focus-visible styles exist (or are not removed).
- Disabled states:
  - Disabled buttons should not trigger actions.
  - Visual treatment should match the design system.

#### Pass E — Consistency & Maintainability
- Confirm file organization matches existing patterns:
  - Component folder structure and naming consistency.
- Reduce duplication:
  - If multiple components implement similar patterns, consider shared helpers in `packages/ui/src/lib`.

### 4) Validation Checklist (Reviewer “Done” Criteria)
- [ ] No unintended breaking changes to exports (`ButtonProps`, `cn`, component names).
- [ ] TypeScript types are precise; no unsafe widening at public boundaries.
- [ ] Component semantics and a11y are correct (focus, disabled, ARIA where needed).
- [ ] Styling is consistent; `cn` is used appropriately; no class conflicts.
- [ ] Changes include documentation/test updates where relevant (or PR explains why not).
- [ ] Reviewer notes are actionable (include file/line references and suggested fixes).

---

## Common Review Scenarios (Actionable Playbooks)

### Scenario: PR changes `cn` in `packages/ui/src/lib/utils.ts`
**Why it’s sensitive:** It affects class merging across all components.

**Review steps:**
1. Confirm the new behavior is backwards compatible:
   - Same inputs produce same outputs (especially falsy values, arrays, objects).
2. Ensure it handles common Tailwind patterns reliably.
3. Look for performance regressions (e.g., heavy recursion or repeated regex).
4. Require evidence:
   - Tests (if test framework exists) or at minimum example cases in PR description.

**Red flags:**
- Changing argument semantics without migration guidance.
- Removing handling for falsy values or conditional patterns used in components.

---

### Scenario: PR modifies `ButtonProps` or Button API
**Review steps:**
1. Determine if change is breaking:
   - Renamed props, changed default variants, altered `onClick` behavior, changed rendered element.
2. Confirm typing matches runtime:
   - Props type should reflect what the component accepts and forwards.
3. Check styling variants are stable:
   - Variant keys should be consistent with existing design system.
4. Confirm accessibility:
   - `type="button"` behavior when used in forms (avoid accidental submit unless explicitly desired).
   - Disabled logic prevents actions.

**Red flags:**
- Making props optional/required in ways that surprise consumers.
- Changing default styles/variants without a clear rationale.

---

### Scenario: PR adds a new component in `packages/ui/src/components`
**Review steps:**
1. Ensure it follows established patterns from existing components (use Button as a reference).
2. Confirm it uses `cn` for class merging.
3. Ensure exports/types are clear and intentional.
4. Ensure accessibility is part of the design, not an afterthought.

**Deliverables to request if missing:**
- Basic usage snippet (in docs or PR description).
- Notes on variants/props and intended API.

---

## Best Practices (derived from this repo’s structure)

### Use `cn` consistently for class composition
- Prefer `cn(baseClasses, conditional && "class", className)` over manual concatenation.
- Avoid embedding complex ternaries in template strings when `cn` can express it clearly.

### Treat exported types as part of the public contract
- `ButtonProps` is effectively an API promise to consumers.
- Any change should be reviewed like a versioned API change (include migration notes if breaking).

### Keep shared utilities small and stable
- `packages/ui/src/lib/utils.ts` is a foundational dependency. Changes should be conservative and well-justified.

### Optimize for consumer ergonomics
- Components in a UI package should be easy to adopt:
  - sensible defaults
  - predictable prop names
  - minimal required configuration

---

## PR Review Comment Templates (copy/paste)

### Breaking change warning
> This appears to change the public API (exported type/prop behavior). Can you confirm whether this is intended as a breaking change? If yes, please add migration notes (old vs new usage) in the PR description and/or docs.

### `cn` / utility change caution
> Changes to `cn` impact many components. Please add a few representative input/output examples (or tests) demonstrating that existing patterns remain supported (falsy values, conditional classes, arrays/objects if applicable).

### Accessibility reminder
> Please double-check a11y: keyboard navigation, focus-visible styles, and disabled behavior. If this element is interactive, ensure it’s reachable and behaves correctly with the keyboard.

### Styling consistency
> Can we align class composition with the existing pattern (using `cn` and keeping base + variants + `className` merge)? This will help keep styling predictable across components.

---

## Documentation Touchpoints

- `packages/ui/src/components/button/button.tsx` (reference for component conventions)
- `packages/ui/src/lib/utils.ts` (shared utility behavior)
- Repo-level docs (if present): `README.md`, `docs/` (update when public behavior changes)
- `AGENTS.md` (if present): align review expectations with contributor guidance

---

## Collaboration Checklist (for each PR)

- [ ] Identify affected package(s) and whether changes touch `packages/ui`.
- [ ] List public API changes (exports, prop types, behavior).
- [ ] Check `cn` usage and class merge patterns.
- [ ] Validate semantics + a11y (focus, keyboard, disabled, ARIA).
- [ ] Confirm TypeScript boundary safety for exported symbols.
- [ ] Request docs/tests/examples if behavior changed.
- [ ] Summarize review outcomes: required fixes vs suggestions.
- [ ] Capture reusable learnings (conventions, pitfalls) and suggest updates to docs if recurring.

---

## Hand-off Notes (what to include after finishing a review)

- **Summary:** what was reviewed (files/areas) and overall assessment.
- **Required changes:** bullet list with file references.
- **Non-blocking suggestions:** improvements that can be follow-ups.
- **Risk areas:** anything that might regress consumers (especially `cn` and exported props).
- **Follow-ups:** doc updates, potential refactors, or additional components to align.

---

## Related Resources

- [../docs/README.md](./../docs/README.md)
- [README.md](./README.md)
- [../../AGENTS.md](./../../AGENTS.md)
