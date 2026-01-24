---
status: planned
generated: 2026-01-24
agents:
  - type: "frontend-specialist"
    role: "Implement Tailwind configuration changes"
  - type: "designer"
    role: "Verify matches with Figma"
title: Update Tailwind Config from Figma
summary: Update Tailwind configuration in packages/ui to match Figma Design System tokens (Colors, Typography, Shadows, Borders, etc.)
---

# Update Tailwind Config from Figma

## Goal

Synchronize `packages/ui/tailwind.config.ts` with the JusCash Design System in Figma.
Node IDs:

- Colors: 4001:2405
- Typography: 4002:5004
- Shadows: 4001:441
- Borders: 4031:1960
- Breakpoints: 4001:690
- Grids: 4001:711
- Spacing: 4026:3185

## Phases

### 1. Configuration Update

- **Objective**: Update `tailwind.config.ts` with all tokens.
- **Steps**:
  1.  Define Colors (Neutral, Brand Primary/Secondary, Feedback).
  2.  Define Typography (Heading 01-06, Body 01-02, Caption 01).
  3.  Define Shadows (xs, s, m, l, xl, focus).
  4.  Define Border Radius (md, xl, 2xl, 3xl, full).
  5.  Define Breakpoints (xs, sm, l, xl).

### 2. Verification

- **Objective**: Ensure build passes and types are correct.
- **Steps**:
  1. Run `npm run typecheck` or `build`.
  2. Verify config module export.

## Success Criteria

- `tailwind.config.ts` reflects all Figma values.
- No build errors.
