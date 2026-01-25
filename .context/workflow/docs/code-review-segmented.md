---
title: Segmented Review (Code)
status: draft
generated: 2026-01-25
phase: R
---

# Segmented Review (Code)

## Review Focus
- Confirm `toggle-group` is used as base and wrapper only extends API.
- Validate `cva` usage for size/state; no duplicated class strings.
- Ensure `cn` is used for class composition.
- Check exports in `packages/ui/src/components/index.ts` and `packages/ui/src/index.ts`.
- Verify props naming (`value`, `onValueChange`, `defaultValue`, `disabled`).

## A11y Checks
- Keyboard navigation and focus ring visible.
- Disabled items not selectable and have aria-disabled when applicable.

## Testing Expectations
- Unit tests cover selection, disabled, and keyboard.
- Stories cover sizes and states for visual QA.
