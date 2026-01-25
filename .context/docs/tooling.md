## Tooling & Productivity Guide

This repository uses a modern TypeScript/React toolchain optimized for UI component development and documentation. The tooling emphasizes fast feedback loops, comprehensive testing, and excellent developer experience.

## Required Tooling

- **Node.js** (v18+): Runtime environment for JavaScript/TypeScript
- **npm** (v9+): Package manager for dependencies and scripts
- **TypeScript** (v5.4+): Type-safe development with strict mode
- **Git**: Version control with conventional commit support

## Key Technologies

- **React** (v19): UI component framework with modern hooks and patterns
- **Tailwind CSS** (v3.4+): Utility-first CSS framework for styling
- **Storybook** (v10+): Component documentation and interactive development
- **Vitest** (v1.6+): Fast unit testing framework
- **tsup** (v8+): TypeScript bundling and library building

## Recommended Automation

### Package Management Scripts

The root `package.json` includes these key commands:

```bash
# Development and Documentation
npm run dev              # Start Storybook for component development
npm run storybook        # Alias for Storybook development server
npm run build:storybook  # Build static Storybook for deployment

# Building and Publishing  
npm run build            # Build all packages and Storybook
npm run build:ui         # Build only the UI package

# Testing and Quality
npm run test             # Run tests in watch mode
npm run test:ui          # Run tests once for CI
npm run typecheck         # Type checking without compilation

# Release Management
npm run version:patch     # Create patch release with changesets
npm run version:minor     # Create minor release with changesets
npm run version:major     # Create major release with changesets
npm run version:publish   # Push tags to remote
```

### UI Package Scripts

The `packages/ui/package.json` provides these specialized commands:

```bash
npm run build            # Build TypeScript and CSS for distribution
npm run build:css        # Compile and minify Tailwind CSS
npm run dev              # Watch mode for development builds
npm run typecheck        # TypeScript type checking
npm run clean            # Remove dist/ directory
```

### Pre-commit Quality Checks

While not explicitly configured, the workflow recommends these pre-commit checks:

1. **Type checking**: `npm run typecheck` to catch type errors
2. **Test suite**: `npm run test:ui` to ensure component behavior
3. **Linting**: Format and lint code (ESLint/Prettier if configured)
4. **Build verification**: `npm run build:ui` to ensure distributable output

## IDE / Editor Setup

### VS Code Extensions (Recommended)

- **TypeScript Importer**: Auto-import TypeScript modules
- **Tailwind CSS IntelliSense**: Class name completion and preview
- **Auto Rename Tag**: Rename paired HTML/XML tags
- **GitLens**: Enhanced Git capabilities
- **ES7+ React/Redux/React-Native snippets**: React code snippets

### Workspace Configuration

**.vscode/settings.json** (recommendation):
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

## Testing Automation

### Vitest Configuration

- **Config file**: `vitest.config.ts`
- **Test environment**: jsdom for React component testing
- **Coverage**: Configured for component directories
- **Watch mode**: Default for development (`npm test`)

### Test Organization

```
packages/ui/src/components/
├── button/
│   ├── button.tsx          # Component implementation
│   ├── button.test.tsx     # Unit tests
│   └── button.stories.tsx  # Storybook stories
```

## Storybook Integration

### Development Workflow

1. **Start Storybook**: `npm run storybook` (runs on :6006)
2. **Component isolation**: Each component has dedicated stories
3. **Hot reload**: Changes to components reflect immediately
4. **Documentation**: Auto-generated from JSDoc comments

### Storybook Configuration

- **Config files**: `.storybook/main.ts` and `.storybook/preview.ts`
- **Framework**: React with Vite for fast builds
- **Addons**: Essentials (controls, actions, docs, viewport)
- **Stories location**: `packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)`

## Build and Deployment

### Library Distribution

The UI package builds to `packages/ui/dist/` with:
- **JavaScript**: ESM modules with type definitions
- **CSS**: Compiled Tailwind styles with design tokens
- **Types**: Full TypeScript declarations

### Storybook Deployment

- **Static build**: `npm run build:storybook`
- **Output**: `storybook-static/` directory
- **Deployment ready**: Can be hosted on any static hosting service

## Productivity Tips

### Development Shortcuts

```bash
# Quick iteration cycle
npm run storybook    # Start once, keep running
npm run test         # Run tests in watch mode in separate terminal
npm run build:ui     # Quick build check before commits
```

### Component Development Workflow

1. Create component directory under `packages/ui/src/components/`
2. Implement component with TypeScript and Tailwind
3. Add comprehensive tests (`.test.tsx`)
4. Create Storybook stories (`.stories.tsx`)
5. Update exports in index files
6. Run type checking and build verification

### Changesets for Releases

- **Install**: Already included as dev dependency
- **Usage**: `changeset` command to document breaking changes
- **Version**: Automated with `version:*` scripts
- **Publish**: Integrated with GitHub Packages

## Environment Variables

### Required for Production

No required environment variables for library usage.

### Optional for Development

- **NODE_ENV**: Set to `development` for enhanced debugging
- **STORYBOOK_ENV**: Automatically managed by Storybook

## Related Resources

- [development-workflow.md](./development-workflow.md)
- [testing-strategy.md](./testing-strategy.md)