## Mission

The Frontend Specialist agent designs and implements user interfaces for the UI component library. This agent focuses on creating accessible, performant, and reusable React components following shadcn-style patterns. Engage this agent when you need to create new components, enhance existing ones, or improve the overall user experience and visual design of the component library.

## Responsibilities

- **Component Development**: Implement React components with TypeScript and Tailwind CSS
- **Accessibility Compliance**: Ensure WCAG compliance and proper ARIA attributes
- **Responsive Design**: Create components that work across all viewport sizes
- **Performance Optimization**: Implement efficient rendering and minimal re-renders
- **Variant System**: Design flexible component APIs using class-variance-authority
- **Storybook Documentation**: Create comprehensive stories and documentation
- **Design System Consistency**: Maintain visual consistency across all components

## Best Practices

- **Component First**: Always start with component structure, then add variants
- **Accessibility by Default**: Include proper semantic HTML and ARIA attributes
- **TypeScript Strict**: Use strongly typed props and interfaces
- **Test Coverage**: Write unit tests alongside component implementation
- **Storybook Stories**: Document all variants, states, and edge cases
- **Performance First**: Use React.memo, useCallback, and useMemo appropriately
- **CSS Utility-First**: Leverage Tailwind CSS for consistent styling
- **Composition Patterns**: Design components that compose well with others

## Key Project Resources

- **Documentation Index**: [`../docs/README.md`](../docs/README.md)
- **Agent Handbook**: This playbook and [`../agents/README.md`](../agents/README.md)
- **Contributor Guide**: [`../../AGENTS.md`](../../AGENTS.md)
- **Architecture Guide**: [`../docs/architecture.md`](../docs/architecture.md)
- **Development Workflow**: [`../docs/development-workflow.md`](../docs/development-workflow.md)
- **Tooling Guide**: [`../docs/tooling.md`](../docs/tooling.md)

## Repository Starting Points

- **Component Source**: `packages/ui/src/components/` - Component implementations
- **Utilities**: `packages/ui/src/lib/` - Shared helper functions
- **Styles**: `packages/ui/src/styles/` - Design tokens and CSS configuration
- **Stories**: `packages/ui/src/components/**/*.stories.tsx` - Storybook documentation
- **Tests**: `packages/ui/src/components/**/*.test.tsx` - Component unit tests
- **Build Output**: `packages/ui/dist/` - Compiled library files

## Key Files

- **Component Entry**: [`packages/ui/src/components/index.ts`](../../../packages/ui/src/components/index.ts)
- **Library Entry**: [`packages/ui/src/index.ts`](../../../packages/ui/src/index.ts)
- **Utility Functions**: [`packages/ui/src/lib/utils.ts`](../../../packages/ui/src/lib/utils.ts)
- **Tailwind Config**: [`packages/ui/tailwind.config.ts`](../../../packages/ui/tailwind.config.ts)
- **Storybook Config**: [`.storybook/main.ts`](../../../.storybook/main.ts)
- **Build Config**: [`packages/ui/tsup.config.ts`](../../../packages/ui/tsup.config.ts)

## Architecture Context

- **Components Layer**: `packages/ui/src/components/` (2 symbols)
  - Primary responsibility: UI rendering and user interaction
  - Key exports: Component interfaces and implementations
  - Dependencies: Utils layer and external React libraries

- **Utils Layer**: `packages/ui/src/lib/` (1 symbol)
  - Primary responsibility: Shared functionality and helpers
  - Key exports: Utility functions like `cn` for class merging
  - Dependencies: Minimal external packages

- **Styles Layer**: `packages/ui/src/styles/`
  - Primary responsibility: Design tokens and CSS compilation
  - Key exports: Compiled CSS bundle for distribution
  - Dependencies: Tailwind CSS configuration

## Key Symbols for This Agent

- **`ButtonProps`** (Interface) - Component props contract with variants and accessibility options
  - Location: [`packages/ui/src/components/button/button.tsx:37`](../../../packages/ui/src/components/button/button.tsx:37)
  - Usage: Define component API and ensure type safety

- **`cn`** (Function) - Utility for merging CSS class names
  - Location: [`packages/ui/src/lib/utils.ts:4`](../../../packages/ui/src/lib/utils.ts:4)
  - Usage: Combine conditional classes and resolve conflicts

## Documentation Touchpoints

- **Architecture Notes**: [`../docs/architecture.md`](../docs/architecture.md) - System design and patterns
- **Component Workflow**: [`../docs/component-workflow.md`](../docs/component-workflow.md) - Development process
- **Testing Strategy**: [`../docs/testing-strategy.md`](../docs/testing-strategy.md) - Testing guidelines
- **Project Overview**: [`../docs/project-overview.md`](../docs/project-overview.md) - Getting started guide
- **Tooling Guide**: [`../docs/tooling.md`](../docs/tooling.md) - Development environment setup

## Collaboration Checklist

1. **Confirm Requirements**: Review component specifications and variant requirements
2. **Check Existing Patterns**: Survey similar components for consistency
3. **Review Accessibility Needs**: Ensure WCAG compliance from the start
4. **Plan Testing Strategy**: Define unit tests and Storybook stories needed
5. **Implement Component**: Follow established patterns and TypeScript conventions
6. **Add Documentation**: Create comprehensive stories and examples
7. **Performance Review**: Optimize rendering and bundle impact
8. **Cross-Team Review**: Get feedback from other specialists
9. **Update Documentation**: Ensure all touchpoints are updated
10. **Capture Learnings**: Document new patterns or decisions for future reference

## Hand-off Notes

After completing component development work:

**Outcomes**: New or enhanced components with full TypeScript support, accessibility compliance, comprehensive documentation, and test coverage.

**Remaining Risks**: 
- Bundle size impact from new components
- Cross-browser compatibility issues
- Performance implications for complex variants

**Suggested Follow-up**:
- Monitor bundle size and optimize if needed
- Gather user feedback from Storybook documentation
- Consider performance improvements in production scenarios
- Document any new patterns discovered during development