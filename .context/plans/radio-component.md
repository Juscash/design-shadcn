---
status: ready
generated: 2026-01-25
agents:
  - type: "code-reviewer"
    role: "Review code changes for quality, style, and best practices"
  - type: "bug-fixer"
    role: "Analyze bug reports and error messages"
  - type: "feature-developer"
    role: "Implement new features according to specifications"
  - type: "refactoring-specialist"
    role: "Identify code smells and improvement opportunities"
  - type: "test-writer"
    role: "Write comprehensive unit and integration tests"
  - type: "documentation-writer"
    role: "Create clear, comprehensive documentation"
  - type: "performance-optimizer"
    role: "Identify performance bottlenecks"
  - type: "security-auditor"
    role: "Identify security vulnerabilities"
  - type: "backend-specialist"
    role: "Design and implement server-side architecture"
  - type: "frontend-specialist"
    role: "Design and implement user interfaces"
  - type: "architect-specialist"
    role: "Design overall system architecture and patterns"
  - type: "devops-specialist"
    role: "Design and maintain CI/CD pipelines"
  - type: "database-specialist"
    role: "Design and optimize database schemas"
  - type: "mobile-specialist"
    role: "Develop native and cross-platform mobile applications"
docs:
  - "project-overview.md"
  - "architecture.md"
  - "development-workflow.md"
  - "testing-strategy.md"
  - "glossary.md"
  - "data-flow.md"
  - "security.md"
  - "tooling.md"
phases:
  - id: "phase-1"
    name: "Discovery & Alignment"
    prevc: "P"
  - id: "phase-2"
    name: "Implementation & Iteration"
    prevc: "E"
  - id: "phase-3"
    name: "Validation & Handoff"
    prevc: "V"
---

# Criar componente Radio Plan

> Planejar implementação do componente Radio conforme Figma e padrões do design system.

## Task Snapshot
- **Primary goal:** Criar o componente `Radio` alinhado ao Figma, com API consistente, variantes, acessibilidade e integração ao pacote UI.
- **Success signal:** Componente `Radio` entregue com stories, testes e exports atualizados, com estados/variantes validados com o node Figma `4062:4957`.
- **Key references:**
  - [Documentation Index](../docs/README.md)
  - [Agent Handbook](../agents/README.md)
  - [Plans Index](./README.md)
  - Figma: https://www.figma.com/design/T99YkskqvWdGJbiYI3f7VZ/Design-System-Juscash?node-id=4062-4957&m=dev

## Codebase Context
- **Total files analyzed:** 65
- **Total symbols discovered:** 111
- **Architecture layers:** Utils, Components
- **Entry points:** packages\ui\src\index.ts, packages\ui\src\components\index.ts, packages\ui\src\components\segmented\index.ts (+2 more)

### Key Components

**Key Interfaces:**
- `SegmentedProps` — C:\projetos\design-shadcn\packages\ui\src\components\segmented\segmented.tsx:44
- `CheckboxProps` — C:\projetos\design-shadcn\packages\ui\src\components\checkbox\checkbox.tsx:23
- `ButtonProps` — C:\projetos\design-shadcn\packages\ui\src\components\button\button.tsx:38
## Agent Lineup
| Agent | Role in this plan | Playbook | First responsibility focus |
| --- | --- | --- | --- |
| Feature Developer | Agente principal para criar o componente. | [Feature Developer](../agents/feature-developer.md) | Definir API, variantes, estrutura e integracao ao pacote |
| Frontend Specialist | Garantir UI e interacoes alinhadas ao Figma. | [Frontend Specialist](../agents/frontend-specialist.md) | Ajustar layout, tokens e estados visuais |
| Test Writer | Cobrir estados e interacoes. | [Test Writer](../agents/test-writer.md) | Testes unitarios e acessibilidade |
| Documentation Writer | Documentacao e Storybook. | [Documentation Writer](../agents/documentation-writer.md) | Stories e links de docs |
| Code Reviewer | Revisao final de qualidade. | [Code Reviewer](../agents/code-reviewer.md) | Validar padroes e consistencia da API |

## Documentation Touchpoints
| Guide | File | Primary Inputs |
| --- | --- | --- |
| Component Workflow | [component-workflow.md](../docs/component-workflow.md) | Passos para criacao/atualizacao de componentes |
| Development Workflow | [development-workflow.md](../docs/development-workflow.md) | Fluxo de desenvolvimento e comandos |
| Testing Strategy | [testing-strategy.md](../docs/testing-strategy.md) | Diretrizes de testes do pacote |
| Project Overview | [project-overview.md](../docs/project-overview.md) | Contexto do design system |
| Tooling & Productivity Guide | [tooling.md](../docs/tooling.md) | Ferramentas e scripts do repo |

## Risk Assessment
Identificar bloqueios, dependencias e mitigacao.

### Identified Risks
| Risk | Probability | Impact | Mitigation Strategy | Owner |
| --- | --- | --- | --- | --- |
| Tokens ou estados no Figma nao existirem no DS | Medium | Medium | Validar tokens via MCP e alinhar com maintainers | Feature Developer |
| Divergencia de API com componentes existentes | Medium | Medium | Comparar com `checkbox` e `segmented` e revisar | Code Reviewer |
| Acessibilidade incompleta (aria/keyboard) | Low | High | Revisao focada em WCAG e testes | Test Writer |

### Dependencies
- **Internal:** Estrutura `packages/ui/src/components/` e utilitario `cn`
- **External:** Acesso ao Figma e tokens do design system

### Assumptions
- Figma inclui estados/variantes necessarios do Radio.
- Tokens usados no Figma existem no DS e podem ser mapeados para Tailwind.

## Resource Estimation

### Time Allocation
| Phase | Estimated Effort | Calendar Time | Team Size |
| --- | --- | --- | --- |
| Phase 1 - Discovery | 0.5 dia | 1 dia | 1 |
| Phase 2 - Implementation | 1-2 dias | 2-3 dias | 1-2 |
| Phase 3 - Validation | 0.5 dia | 1 dia | 1 |
| **Total** | **2-3 dias** | **3-5 dias** | **-** |

### Required Skills
- React + TypeScript
- Tailwind + class-variance-authority
- Acessibilidade (ARIA, keyboard)

### Resource Availability
- **Available:** 1 dev com suporte pontual de QA/documentacao
- **Blocked:** N/A
- **Escalation:** Maintainer do design system

## Working Phases
### Phase 1 — Discovery & Alignment (P)
**Steps**
1. Coletar especificacoes do Figma via MCP (contexto, tokens, screenshot) e listar estados/variantes.
2. Verificar se o Radio deriva de componente shadcn e mapear API base.
3. Definir API publica (props, tamanhos, estados) comparando com `checkbox` e `segmented`.
4. Registrar decisoes de tokens/estados e abrir questoes pendentes.

**Deliverables**
- Resumo do Figma (tokens, estados, variacoes)
- API proposta do Radio

**Commit Checkpoint**
- `chore(plan): complete phase 1 discovery`

### Phase 2 — Implementation & Iteration (E)
**Steps**
1. Criar `packages/ui/src/components/radio/` com `radio.tsx` e variantes via CVA.
2. Implementar acessibilidade (input radio, keyboard, aria-checked/disabled, foco visivel).
3. Criar stories em `radio.stories.tsx` cobrindo variantes/estados.
4. Criar testes em `radio.test.tsx` alinhados a `checkbox.test.tsx`.
5. Atualizar exports em `packages/ui/src/components/index.ts` e `packages/ui/src/index.ts`.

**Deliverables**
- Componente Radio implementado
- Stories e testes
- Exports atualizados

**Commit Checkpoint**
- `feat(ui): add radio component`

### Phase 3 — Validation & Handoff (V)
**Steps**
1. Validar layout/estados com Figma (capturas se necessario).
2. Rodar `npm run test` e `npm run build` (se aplicavel).
3. Registrar evidencias (logs, screenshots, notas de validacao).

**Deliverables**
- Evidencias de validacao
- Checklist de pronto concluido

**Commit Checkpoint**
- `chore(plan): complete phase 3 validation`

## Rollback Plan
Documentar como reverter mudancas caso haja problema.

### Rollback Triggers
- Falha em testes/build
- Regressao visual em componentes relacionados
- Problemas de acessibilidade reportados

### Rollback Procedures
#### Phase 1 Rollback
- Action: Reverter alteracoes de docs/planos caso necessario
- Data Impact: Nenhum
- Estimated Time: < 1 hora

#### Phase 2 Rollback
- Action: Reverter commits do componente Radio e remover exports
- Data Impact: Nenhum
- Estimated Time: 1-2 horas

#### Phase 3 Rollback
- Action: Reverter ajustes finais e restaurar versao anterior
- Data Impact: Nenhum
- Estimated Time: < 1 hora

### Post-Rollback Actions
1. Registrar motivo da reversao
2. Alinhar correcoes necessarias
3. Atualizar plano com licoes aprendidas

## Evidence & Follow-up

- Capturas do Figma vs Storybook
- Logs de `npm run test` e `npm run build`
- Checklist de estados/variantes do Radio
