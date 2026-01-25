---
title: Segmented Review (Architecture)
status: draft
generated: 2026-01-25
phase: R
---

# Segmented Review (Architecture)

## Scope
- New Segmented component in `packages/ui` aligned to Figma.
- Base on shadcn `toggle-group` (single selection) with custom styling.

## Architectural Fit
- Location: `packages/ui/src/components/segmented` matches existing component layout.
- Exports: `packages/ui/src/components/index.ts` and `packages/ui/src/index.ts` keep public API consistent.
- Styling: use `cn` utility and `cva` for size/state variants; avoid hard-coded hex unless token missing.

## Component Strategy
- Treat shadcn `toggle-group` as primitive and wrap for DS-specific props (icon, label, counter).
- Use `forwardRef` for interactive parts and keep props stable (`value`, `onValueChange`, `defaultValue`).
- Enforce single selection (radio-like) to match Figma description.

## A11y Notes
- Use appropriate roles from `toggle-group` (Radix) and verify keyboard navigation.
- Ensure disabled state prevents selection and communicates via aria.

## Risks
- Visual drift from Figma if variants do not map 1:1 to states.
- Token mismatch if required colors are not mapped to theme vars.

## Mitigations
- Map states directly to Figma tokens and add Storybook states for visual review.
- Confirm focus ring uses `color/neutral/300` spread (per Figma focus effect).
