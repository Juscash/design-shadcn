# Text Field component from Figma Plan

> Create a Text Field component faithful to the provided Figma design, following Feature Developer workflow and project conventions.

## Task Snapshot
- **Primary goal:** Implement `TextField` in `packages/ui/src/components/text-field` with API, styles, and states matching the Figma node `4048:10668` from https://www.figma.com/design/T99YkskqvWdGJbiYI3f7VZ/Design-System-Juscash?node-id=4048-10668&m=dev.
- **In scope:** Component source, styles via CSS tokens/Tailwind classes, Storybook stories, unit tests, and package exports updates.
- **Out of scope:** New tokens, changes to global styles, new Storybook routes, or refactors to unrelated components.
- **Success signal:** Storybook renders all required variants/states from Figma, tests pass, and `packages/ui/src/components/index.ts` and `packages/ui/src/index.ts` export the component.
- **Key references:**
  - `.context/docs/component-workflow.md`
  - `.context/agents/feature-developer.md`
  - `packages/ui/src/components/button/button.tsx` (API and cva pattern reference)

## Codebase Context
- **Architecture layers:** Components depend on Utils (`cn`).
- **Entry points:** `packages/ui/src/components/index.ts`, `packages/ui/src/index.ts`.

### Known Design Inputs
- Figma: `Text Field` node `4048:10668` (link provided by requester).
- Tokens: use CSS variables from `packages/ui/src/styles/tokens.css` as referenced in similar components (e.g., `button.tsx`).

## Agent Lineup
| Agent | Role in this plan | Playbook | First responsibility focus |
| --- | --- | --- | --- |
| Feature Developer | Own component design + implementation | [Feature Developer](../agents/feature-developer.md) | Extract Figma specs, implement component, update exports |
| Test Writer | Add unit tests for variants/states | [Test Writer](../agents/test-writer.md) | Ensure coverage for focus/disabled/error and sizing |
| Documentation Writer | Storybook stories and usage notes | [Documentation Writer](../agents/documentation-writer.md) | Storybook stories aligned with Figma variants |
| Code Reviewer | Validate API consistency and style rules | [Code Reviewer](../agents/code-reviewer.md) | Check against button/checkbox patterns and a11y |

## Documentation Touchpoints
| Guide | File | Primary Inputs |
| --- | --- | --- |
| Component Workflow | `.context/docs/component-workflow.md` | Use shadcn integration flow if applicable; story/test checklist |
| Testing Strategy | `.context/docs/testing-strategy.md` | Required unit test expectations for UI components |
| Docs Index | `.context/docs/README.md` | Add link only if a new doc page is created |

## Risk Assessment

### Identified Risks
| Risk | Probability | Impact | Mitigation Strategy | Owner |
| --- | --- | --- | --- | --- |
| Figma variants/states not fully specified | Medium | High | Capture variants/sizes/states before coding; confirm with requester | Feature Developer |
| Token mismatch with design | Medium | Medium | Map tokens via `figma-desktop_get_variable_defs` and align with existing CSS vars | Feature Developer |
| A11y gaps (labels, errors) | Low | High | Ensure `aria-*`, label association, and error text roles | Code Reviewer |

### Dependencies
- **Internal:** `packages/ui/src/styles/tokens.css` for color/spacing tokens.
- **External:** Figma desktop MCP access for design inspection.
- **Technical:** `class-variance-authority` + `cn` for class composition.

### Assumptions
- The Text Field is either a new component or based on shadcn `input` or `textarea` patterns; decision required before implementation.
- Tokens referenced in Figma are already present in `tokens.css` or can be mapped to existing variables.

## Resource Estimation

### Time Allocation
| Phase | Estimated Effort | Calendar Time | Team Size |
| --- | --- | --- | --- |
| Phase 1 - Discovery | 0.5 day | 1 day | 1 |
| Phase 2 - Implementation | 1 day | 1-2 days | 1 |
| Phase 3 - Validation | 0.5 day | 1 day | 1 |
| **Total** | **2 days** | **3-4 days** | **1** |

### Required Skills
- React + TypeScript component authoring
- Tailwind/CSS variables + cva
- Storybook stories and basic testing with Jest

## Working Phases
### Phase 1 — Discovery & Alignment (P)
**Objective:** Capture all Figma requirements and define API/variants before coding.

**Steps**
1. Use `figma-desktop_get_design_context` on node `4048:10668` to capture layout, typography, spacing, and states.
2. Use `figma-desktop_get_variable_defs` to map colors/tokens.
3. Decide whether to base on shadcn component (input/textarea) and document mapping.
4. Define variants, sizes, and states (hover, focus, disabled, error, success, helper text, icon slots).

**Deliverables**
- Written spec in plan notes for variants/sizes/states.
- Confirmed component name: `TextField` (folder: `packages/ui/src/components/text-field`).

**Commit Checkpoint**
- `chore(plan): complete text field discovery`

### Phase 2 — Implementation & Iteration (E)
**Objective:** Build component, tests, and stories aligned to Figma.

**Steps**
1. If shadcn-based, add via CLI and customize; else implement from scratch using `cva` + `cn`.
2. Implement `TextField` with `forwardRef`, props typed for size/variant/state, and label/helper/error slots.
3. Add Storybook stories for all variants/sizes/states in `packages/ui/src/components/text-field/text-field.stories.tsx`.
4. Add tests in `packages/ui/src/components/text-field/text-field.test.tsx` covering state rendering and a11y attributes.
5. Export component from `packages/ui/src/components/index.ts` and `packages/ui/src/index.ts`.

**Deliverables**
- Component code + stories + tests + exports updated.

**Commit Checkpoint**
- `feat(ui): add text field component`

### Phase 3 — Validation & Handoff (V)
**Objective:** Validate behavior and visual fidelity.

**Steps**
1. Run `npm run test` and fix any failures.
2. Verify Storybook renders all stories and matches Figma spacing/typography.
3. Capture evidence (screenshots or notes) for matching states/variants.

**Deliverables**
- Test output logs and Storybook confirmation notes.

**Commit Checkpoint**
- `chore(plan): complete text field validation`

## Success Criteria
- `TextField` matches Figma dimensions, typography, colors, and state styling.
- All requested variants, sizes, and states are represented in Storybook.
- Unit tests cover default, disabled, focus, and error scenarios.
- Exports updated and TypeScript types verified.

## Rollback Plan
### Rollback Triggers
- Visual regressions or a11y regressions detected in QA.
- Failing tests in CI related to the new component.

### Rollback Procedures
- Revert the component, stories, and tests commits; remove exports from `packages/ui/src/components/index.ts` and `packages/ui/src/index.ts`.
- No data migration required.

## Evidence & Follow-up
- Figma snapshot references or notes from MCP outputs.
- Storybook screenshots of all states.
- `npm run test` output summary.
