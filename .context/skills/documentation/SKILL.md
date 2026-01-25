---
type: skill
name: Documentation
description: Gerar e atualizar documentacao tecnica
skillSlug: documentation
phases: [P, C]
generated: 2026-01-24
status: filled
scaffoldVersion: "2.0.0"
---

# Documentation

## Quando usar

Use esta skill quando:

- houver mudanca de API publica (props/exportacoes)
- for criado um novo componente
- for necessario atualizar indices/navegacao em `.context/docs/README.md` e `.context/agents/README.md`

## Regras gerais

- Preferir PT-BR nos docs do Design System (quando forem parte do fluxo atual).
- Manter docs curtas, orientadas a tarefas ("Como fazer").
- Sempre linkar paths reais do repo.

## Checklist (Design System / Componentes)

1) Processo e guias

- Atualizar `.context/docs/component-workflow.md` quando o processo mudar.
- Manter `.context/docs/development-workflow.md` coerente com scripts reais do `package.json`.

2) Indices

- Linkar novos docs em `.context/docs/README.md`.
- Manter o roteamento de agentes em `.context/agents/README.md`.

3) O que documentar para um componente

- Nome e objetivo do componente
- Props publicas relevantes (`variant`, `size`, etc.)
- Variantes/tamanhos/estados suportados
- Boas praticas de acessibilidade (quando aplicavel)
- Onde ver exemplos:
  - Storybook (`packages/ui/src/components/<componente>/*.stories.tsx`)