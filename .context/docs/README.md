# Documentation Hub (`docs/README.md`)

This folder contains the repository’s developer documentation. Use it as the entry point to understand the project, its architecture, how to develop locally, and how to test and ship changes.

---

## What this documentation is for

- **Onboarding**: learn the workspace layout (apps vs packages) and how pieces fit together.
- **Daily development**: find workflows (scripts, conventions, branching/PR expectations).
- **Architecture & decisions**: understand boundaries, dependencies, and key patterns.
- **Quality & safety**: testing strategy, security notes, and tooling guidance.

---

## Quick links (core guides)

Start here:

- [Project Overview](./project-overview.md)
- [Architecture Notes](./architecture.md)
- [Development Workflow](./development-workflow.md)
- [Testing Strategy](./testing-strategy.md)
- [Glossary & Domain Concepts](./glossary.md)
- [Data Flow & Integrations](./data-flow.md)
- [Security & Compliance Notes](./security.md)
- [Tooling & Productivity Guide](./tooling.md)
- [Component Workflow](./component-workflow.md)

---

## Repository snapshot (what you’ll see at the root)

Typical top-level structure:

- `apps/` — runnable applications (e.g., the web app).
- `packages/` — shared workspace packages/modules (e.g., UI components).
- `README.md` — high-level repository readme (often “how to run” + overview).
- `package.json`, `package-lock.json` — workspace scripts and dependency lockfile.
- `tsconfig.json` — TypeScript configuration.
- `vitest.config.ts`, `vitest.setup.ts` — test runner configuration and setup.

---

## How the codebase is organized (high-level)

This repo is a workspace/monorepo with at least:

- **Apps** (consumer side)
  - Example entrypoint: `apps/web/src/main.tsx`
- **Packages** (shared libraries)
  - UI library: `packages/ui`

### UI package layout

- **Utilities**: `packages/ui/src/lib`
  - Public utility export: `cn` in `packages/ui/src/lib/utils.ts`
- **Components**: `packages/ui/src/components`
  - Example component: `Button` in `packages/ui/src/components/button/button.tsx`
  - Components typically depend on utilities from `src/lib`

### Public API (not exhaustive)

- `cn` — utility function exported from `packages/ui/src/lib/utils.ts`
- `ButtonProps` — exported interface from `packages/ui/src/components/button/button.tsx`

Related developer artifacts:
- Storybook story: `packages/ui/src/components/button/button.stories.tsx`
- Tests: `packages/ui/src/components/button/button.test.tsx`

---

## Where to look next (common developer tasks)

### “How do I run the web app?”
Go to:
- [Development Workflow](./development-workflow.md) (scripts, local setup, environment variables)
- Also check root `README.md` for “getting started” commands.

### “How are UI components built and consumed?”
Go to:
- [Architecture Notes](./architecture.md) (package boundaries, dependency rules)
- UI package sources:
  - `packages/ui/src/components/…`
  - `packages/ui/src/lib/utils.ts` (`cn`)

### “How do I test changes?”
Go to:
- [Testing Strategy](./testing-strategy.md)
- Then inspect:
  - `vitest.config.ts`, `vitest.setup.ts`
  - Component tests under `packages/ui/src/components/**/**/*.test.tsx`

### “Where do shared terms and concepts live?”
Go to:
- [Glossary & Domain Concepts](./glossary.md)

---

## Contributing to documentation

When adding or updating docs:

- Prefer **task-oriented** sections (“How to…”, “Troubleshooting”, “FAQ”).
- Link to relevant code locations (files and directories) where helpful.
- Keep docs **close to the source of truth**:
  - developer workflows in `development-workflow.md`
  - architecture and boundaries in `architecture.md`
  - testing rules and patterns in `testing-strategy.md`
- If you add a new guide, add it to the **Quick links** list above so it’s discoverable.

---

## Document map (what each guide is meant to cover)

| Guide | File | What it should answer |
| --- | --- | --- |
| Project Overview | `project-overview.md` | What is this repo? Who is it for? What are the main packages/apps? |
| Architecture Notes | `architecture.md` | How modules depend on each other, boundaries, patterns, conventions |
| Development Workflow | `development-workflow.md` | Setup, scripts, branching, PR expectations, release flow |
| Testing Strategy | `testing-strategy.md` | Test types, what to test, how to run tests, CI expectations |
| Glossary & Domain Concepts | `glossary.md` | Shared terminology and domain rules |
| Data Flow & Integrations | `data-flow.md` | How data moves through the system and external integrations |
| Security & Compliance Notes | `security.md` | Auth/secrets, compliance constraints, secure defaults |
| Tooling & Productivity Guide | `tooling.md` | IDE setup, recommended extensions, automation tips |

---
