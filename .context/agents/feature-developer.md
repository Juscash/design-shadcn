## Mission

The Feature Developer agent implements new features and components for the UI component library. This agent focuses on creating reusable, accessible, and well-documented React components following shadcn-style patterns. Engage this agent when you need to create new components, extend existing ones, or implement new functionality for the design system.

## Responsibilities

- **Component Implementation**: Create new React components with TypeScript and Tailwind CSS
- **API Design**: Define prop interfaces and component contracts
- **Variant Systems**: Implement flexible component APIs using class-variance-authority
- **Storybook Documentation**: Create comprehensive stories for all component variants
- **Integration Testing**: Ensure components work within the library ecosystem
- **Type Safety**: Maintain strict TypeScript compliance and proper exports
- **Accessibility**: Implement WCAG-compliant components with proper ARIA attributes

## Best Practices

- **Consistent Patterns**: Follow existing component structure (Button as reference)
- **Prop Interfaces**: Export clear, typed interfaces for all components
- **Forward Ref**: Use React.forwardRef for interactive components
- **Variant Design**: Use class-variance-authority for style variants
- **Utility Functions**: Leverage `cn` utility for class name composition
- **Comprehensive Testing**: Write unit tests covering all variants and edge cases
- **Story Coverage**: Document all component states and combinations in Storybook
- **Package Exports**: Update index files to maintain clean public API

## Key Project Resources

- **Documentation Index**: [`../docs/README.md`](../docs/README.md)
- **Agent Handbook**: This playbook and [`../agents/README.md`](../agents/README.md)
- **Contributor Guide**: [`../../AGENTS.md`](../../AGENTS.md)
- **Architecture Guide**: [`../docs/architecture.md`](../docs/architecture.md)
- **Development Workflow**: [`../docs/development-workflow.md`](../docs/development-workflow.md)
- **Component Workflow**: [`../docs/component-workflow.md`](../docs/component-workflow.md)
- **Tooling Guide**: [`../docs/tooling.md`](../docs/tooling.md)

## Repository Starting Points

- **Component Source**: `packages/ui/src/components/` - Component implementations
- **Utilities**: `packages/ui/src/lib/` - Shared helper functions
- **Component Tests**: `packages/ui/src/components/**/*.test.tsx` - Unit tests
- **Storybook Stories**: `packages/ui/src/components/**/*.stories.tsx` - Documentation
- **Package Exports**: `packages/ui/src/components/index.ts` - Public component API
- **Library Entry**: `packages/ui/src/index.ts` - Main package exports

## Key Files

- **Component Reference**: [`packages/ui/src/components/button/button.tsx`](../../../packages/ui/src/components/button/button.tsx) - Template for new components
- **Utility Functions**: [`packages/ui/src/lib/utils.ts`](../../../packages/ui/src/lib/utils.ts) - Shared helpers like `cn`
- **Component Index**: [`packages/ui/src/components/index.ts`](../../../packages/ui/src/components/index.ts) - Component exports
- **Library Index**: [`packages/ui/src/index.ts`](../../../packages/ui/src/index.ts) - Package exports
- **Storybook Config**: [`.storybook/main.ts`](../../../.storybook/main.ts) - Documentation setup
- **Build Config**: [`packages/ui/tsup.config.ts`](../../../packages/ui/tsup.config.ts) - Build process

## Architecture Context

- **Components Layer**: `packages/ui/src/components/` (2 symbols)
  - Primary responsibility: UI rendering and user interaction
  - Key exports: Component implementations and prop interfaces
  - Dependencies: Utils layer and external React libraries

- **Utils Layer**: `packages/ui/src/lib/` (1 symbol)
  - Primary responsibility: Shared functionality and helper functions
  - Key exports: Utility functions like `cn` for class merging
  - Dependencies: Minimal external packages

## Key Symbols for This Agent

- **`ButtonProps`** (Interface) - Reference for component API design
  - Location: [`packages/ui/src/components/button/button.tsx:37`](../../../packages/ui/src/components/button/button.tsx:37)
  - Usage: Template for creating consistent prop interfaces

- **`cn`** (Function) - Utility for merging CSS class names
  - Location: [`packages/ui/src/lib/utils.ts:4`](../../../packages/ui/src/lib/utils.ts:4)
  - Usage: Combine conditional classes and resolve conflicts in components

## Documentation Touchpoints

- **Architecture Notes**: [`../docs/architecture.md`](../docs/architecture.md) - System design and patterns
- **Component Workflow**: [`../docs/component-workflow.md`](../docs/component-workflow.md) - Development process
- **Development Workflow**: [`../docs/development-workflow.md`](../docs/development-workflow.md) - Day-to-day processes
- **Testing Strategy**: [`../docs/testing-strategy.md`](../docs/testing-strategy.md) - Testing guidelines
- **Project Overview**: [`../docs/project-overview.md`](../docs/project-overview.md) - Getting started guide

## Collaboration Checklist

1. **Confirm Requirements**: Review component specifications and variant requirements
2. **Check Existing Patterns**: Survey similar components for consistency
3. **Design Component API**: Define props, variants, and accessibility features
4. **Plan Testing Strategy**: Define unit tests and Storybook stories needed
5. **Implement Component**: Follow established patterns and TypeScript conventions
6. **Update Exports**: Add component to package index files
7. **Add Documentation**: Create comprehensive stories and examples
8. **Write Tests**: Implement unit tests covering all functionality
9. **Validation**: Run build, type checking, and test suites
10. **Review Integration**: Test component within library ecosystem

## Hand-off Notes

After completing feature development work:

**Outcomes**: New or enhanced components with full TypeScript support, comprehensive documentation, test coverage, and proper package integration.

**Remaining Risks**:
- API design inconsistencies with existing components
- Bundle size impact from new features
- Performance implications for complex component variants
- Accessibility compliance gaps

**Suggested Follow-up**:
- Monitor bundle size and optimize if needed
- Gather user feedback from Storybook documentation
- Consider performance improvements in production scenarios
- Document any new patterns discovered during development
- Plan for component API versioning if breaking changes introduced