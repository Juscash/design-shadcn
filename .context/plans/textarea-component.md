# Implement Textarea component from Figma Plan

> Use Figma specs to implement a Textarea component in packages/ui, add stories/tests/exports per project conventions.

## Task Snapshot
- **Primary goal:** Create a Textarea component that matches the Figma node `4059:2085`, with variants/states mirrored in Storybook and a typed public API.
- **Success signal:** Storybook stories render for all defined variants/states, tests pass for the Textarea behavior, and the component is exported from the UI package.
- **Key references:**
  - [Documentation Index](../docs/README.md)
  - [Component Workflow](../docs/component-workflow.md)
  - [Development Workflow](../docs/development-workflow.md)
  - [Testing Strategy](../docs/testing-strategy.md)

## Codebase Context
- **Component patterns:** `packages/ui/src/components/button/button.tsx` (props + variants), `packages/ui/src/components/checkbox/checkbox.tsx` (a11y patterns)
- **Utilities:** `packages/ui/src/lib/utils.ts` (`cn` helper)
- **Exports:** `packages/ui/src/components/index.ts`, `packages/ui/src/index.ts`

## Agent Lineup
| Agent | Role in this plan | Playbook | First responsibility focus |
| --- | --- | --- | --- |
| Feature Developer | Implement the component and API design. | [Feature Developer](../agents/feature-developer.md) | Build Textarea, align with Figma tokens and states |
| Test Writer | Ensure behavior and states are covered. | [Test Writer](../agents/test-writer.md) | Write unit tests for sizing, error, disabled, and focus |
| Documentation Writer | Ensure Storybook and docs are complete. | [Documentation Writer](../agents/documentation-writer.md) | Add stories and usage notes |
| Code Reviewer | Quality guardrails before merge. | [Code Reviewer](../agents/code-reviewer.md) | Review API consistency and styling fidelity |

## Documentation Touchpoints
| Guide | File | Primary Inputs |
| --- | --- | --- |
| Component Workflow | [component-workflow.md](../docs/component-workflow.md) | Component structure, stories and tests checklist |
| Development Workflow | [development-workflow.md](../docs/development-workflow.md) | Branching, scripts, local verification |
| Testing Strategy | [testing-strategy.md](../docs/testing-strategy.md) | Test scope and naming conventions |
| Documentation Index | [README.md](../docs/README.md) | Link new docs if a dedicated doc page is added |

## Risk Assessment
### Identified Risks
| Risk | Probability | Impact | Mitigation Strategy | Owner |
| --- | --- | --- | --- | --- |
| Figma token names do not map 1:1 to existing Tailwind tokens | Medium | Medium | Extract variable defs and align to current tokens; document mapping | Feature Developer |
| Existing Textarea component already exists with conflicting API | Low | Medium | Search components directory first; align naming with existing patterns | Feature Developer |

### Dependencies
- **Internal:** Existing component conventions in `packages/ui/src/components/`
- **External:** Figma access for node `4059:2085`
- **Technical:** Storybook configured for component stories

### Assumptions
- Assume design tokens used by Textarea are already present in Tailwind config.
- If tokens are missing, use closest existing tokens and record in notes.

## Resource Estimation
### Time Allocation
| Phase | Estimated Effort | Calendar Time | Team Size |
| --- | --- | --- | --- |
| Phase 1 - Discovery | 1-2 hours | Same day | 1 |
| Phase 2 - Implementation | 3-5 hours | Same day | 1 |
| Phase 3 - Validation | 1-2 hours | Same day | 1 |
| **Total** | **5-9 hours** | **1 day** | **1** |

### Required Skills
- React + TypeScript component authoring
- Tailwind/CVA usage in shadcn-style components
- Basic a11y patterns for form fields

### Resource Availability
- **Available:** Single developer workflow
- **Blocked:** None anticipated
- **Escalation:** Project maintainer if Figma access is blocked

## Working Phases
### Phase 1 — Discovery & Alignment (P)
**Steps**
1. Inspect `packages/ui/src/components/` for existing Textarea or similar Input components.
2. Extract Figma layout, colors, and states from node `4059:2085` via MCP tools.
3. Define public props, variants, sizes, and states (hover, focus, disabled, error).

**Commit Checkpoint**
- Capture notes in the plan and proceed without commit (plan-only change).

### Phase 2 — Implementation & Iteration (E)
**Steps**
1. Implement `Textarea` component with `forwardRef`, typed props, and CVA variants.
2. Add Storybook stories for variants, sizes, and states in `packages/ui/src/components/textarea/`.
3. Add unit tests mirroring Storybook coverage.
4. Export from `packages/ui/src/components/index.ts` and `packages/ui/src/index.ts`.

**Commit Checkpoint**
- Proposed commit message: `feat(textarea): add design-system textarea component`.

### Phase 3 — Validation & Handoff (V)
**Steps**
1. Run `npm run test` and fix any failures.
2. Run Storybook locally to verify visual parity with Figma.
3. Record evidence (story screenshots and relevant diffs).

**Commit Checkpoint**
- Record validation evidence before requesting review.

## Rollback Plan
### Rollback Triggers
- Component causes regressions in Storybook or tests
- API conflicts with existing inputs

### Rollback Procedures
#### Phase 2 Rollback
- Action: Revert Textarea component files and remove exports from `packages/ui/src/components/index.ts` and `packages/ui/src/index.ts`.
- Data Impact: None
- Estimated Time: < 30 minutes

#### Phase 3 Rollback
- Action: Revert Storybook/test changes if failures block CI.
- Data Impact: None
- Estimated Time: < 30 minutes

## Evidence & Follow-up
- Figma node `4059:2085` references and screenshots
- Storybook story URLs or screenshots
- Test output for new Textarea tests
- Any token mapping notes if substitutions were required
