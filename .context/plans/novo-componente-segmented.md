---
status: filled
generated: 2026-01-25
updated: 2026-01-25
agents:
  - type: "feature-developer"
    role: "Implementar o componente Segmented baseado em shadcn toggle-group"
  - type: "test-writer"
    role: "Cobrir selecao unica, estados e acessibilidade"
  - type: "documentation-writer"
    role: "Documentar stories e referencias de uso"
  - type: "code-reviewer"
    role: "Revisar consistencia com button/checkbox e contratos de API"
docs:
  - "component-workflow.md"
  - "testing-strategy.md"
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

# Criar componente Segmented Plan

> Criar o componente Segmented baseado em `toggle-group` do shadcn, alinhado ao Figma, com selecao unica.

## Task Snapshot
- **Primary goal:** Entregar `Segmented` e `SegmentedItem` com API tipada, estilos e estados do Figma, exportados pela biblioteca.
- **Success signal:** Stories completos, testes passando, e uso pronto em apps (exports em `packages/ui/src/index.ts`).
- **Key references:**
  - [Documentation Index](../docs/README.md)
  - [Agent Handbook](../agents/README.md)
  - [Plans Index](./README.md)

## Codebase Context
- **Architecture layers:** Utils, Components
- **Entry points:** `packages/ui/src/index.ts`, `packages/ui/src/components/index.ts`
- **Reference component:** `packages/ui/src/components/button/button.tsx`
- **Utility:** `packages/ui/src/lib/utils.ts` (`cn`)

### Design Context (Figma)
- **Comportamento:** selecao unica (descricao no Figma).
- **Tamanhos:** `xs` (h16, radius md, text 10), `s` (h24), `m` (h28, radius xl).
- **Estados:** inactive, inactive hover, inactive focus, active, active focus, disabled.
- **Tokens principais:** `color/text/dark #262626`, `color/text/disabled #a3a3a3`, `color/neutral/50 #fafafa`, `radius/xl 8`, `radius/md 4`, `shadow/s`.
- **Elementos opcionais:** icon, label, badge/contador.

## Agent Lineup
| Agent | Role in this plan | Playbook | First responsibility focus |
| --- | --- | --- | --- |
| Feature Developer | Criar o componente e integrar com shadcn. | [Feature Developer](../agents/feature-developer.md) | Implementacao do componente e variantes | 
| Test Writer | Garantir cobertura de estados e acessibilidade. | [Test Writer](../agents/test-writer.md) | Testes unitarios e interacoes | 
| Documentation Writer | Documentar Storybook e uso. | [Documentation Writer](../agents/documentation-writer.md) | Stories e notas de uso | 
| Code Reviewer | Validar consistencia com padroes. | [Code Reviewer](../agents/code-reviewer.md) | Revisao de API e estilos | 

## Documentation Touchpoints
| Guide | File | Primary Inputs |
| --- | --- | --- |
| Component Workflow | [component-workflow.md](../docs/component-workflow.md) | Fluxo de criacao e instalacao via shadcn |
| Testing Strategy | [testing-strategy.md](../docs/testing-strategy.md) | Cobertura de casos e interacoes | 
| Tooling | [tooling.md](../docs/tooling.md) | Comandos shadcn/Storybook | 

## Risk Assessment
### Identified Risks
| Risk | Probability | Impact | Mitigation Strategy | Owner |
| --- | --- | --- | --- | --- |
| Divergencia visual do Figma | Medium | Medium | Conferir estados/tamanhos com tokens e screenshot | Feature Developer |
| Lacunas de acessibilidade | Low | Medium | Revisar aria e navegação por teclado | Test Writer |

### Dependencies
- **Internal:** utilitario `cn`, padroes de `button`.
- **External:** registry `@shadcn` (toggle-group).
- **Technical:** instalacao shadcn no `packages/ui`.

### Assumptions
- O comportamento desejado e selecao unica (conforme Figma).
- Tokens definidos no Figma correspondem ao tema atual.

## Resource Estimation
### Time Allocation
| Phase | Estimated Effort | Calendar Time | Team Size |
| --- | --- | --- | --- |
| Phase 1 - Discovery | 0.5 dia | 0.5 dia | 1 | 
| Phase 2 - Implementation | 1-2 dias | 1-2 dias | 1-2 | 
| Phase 3 - Validation | 0.5 dia | 0.5 dia | 1 | 
| **Total** | **2-3 dias** | **2-3 dias** | **-** |

### Required Skills
- React + TypeScript + Tailwind
- Acessibilidade (ARIA)
- Storybook + testes

## Working Phases
### Phase 1 — Discovery & Alignment
**Steps**
1. Revisar `toggle-group` no registry e mapear API base.
2. Confirmar props publicas (size, value, onValueChange, icon, label, counter, disabled).
3. Documentar matriz de estados alinhada ao Figma.

**Commit Checkpoint**
- `chore(plan): complete phase 1 discovery`

### Phase 2 — Implementation & Iteration
**Steps**
1. Instalar `toggle-group` via shadcn e mover para `packages/ui/src/components/segmented`.
2. Criar `Segmented`/`SegmentedItem` com variantes de tamanho e estados.
3. Atualizar exports em `packages/ui/src/components/index.ts` e `packages/ui/src/index.ts`.
4. Criar stories cobrindo estados, tamanhos e combinacoes (icon/label/badge).
5. Implementar testes de selecao unica, disabled e teclado.

**Commit Checkpoint**
- `feat(ui): add segmented component`

### Phase 3 — Validation & Handoff
**Steps**
1. Executar `npm run test` e validar resultados.
2. Verificar Storybook para consistencia visual.
3. Atualizar docs se necessario.

**Commit Checkpoint**
- `chore(ui): validate segmented component`

## Rollback Plan
### Rollback Triggers
- Quebra de acessibilidade
- Divergencia visual critica
- Falhas em testes ou build

### Rollback Procedures
#### Phase 2 Rollback
- Action: reverter commits do componente e remover exports.
- Data Impact: nenhum.
- Estimated Time: < 1 hora.

## Evidence & Follow-up
- Link do Figma com node-id e screenshot.
- Logs de testes (`npm run test`).
- Stories publicados para `Segmented`.
