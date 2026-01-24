# Agentes (AI Context)

Este diretório contém os playbooks dos agentes. Use este índice para saber qual agente usar em cada tipo de pedido.

## Roteamento (como escolher o agente)

- `criar componente novo` (ou “adicionar componente”) -> `feature-developer`
  - Implementa o componente em `packages/ui` no padrão shadcn deste repo (cva/cn/forwardRef).
  - Gera showcase obrigatório:
    - Storybook (`*.stories.tsx`)
    - Demo no app (`apps/web/src/App.tsx`) no mesmo formato do `Button`.
  - Se você fornecer link do Figma, o fluxo deve usar `figma-desktop_*` para extrair contexto e confirmar variantes/tamanhos/estados antes de codar.

- `documentar/showcase de componente` (sem mexer na implementação) -> `component-docs-agent`
  - Cria/atualiza stories e o showcase em `apps/web/src/App.tsx`.
  - Atualiza índices/navegação e docs relacionadas ao design system.

## Lista de agentes

- `feature-developer` -> `.context/agents/feature-developer.md`
- `component-docs-agent` -> `.context/agents/component-docs-agent.md`
- `code-reviewer` -> `.context/agents/code-reviewer.md`
- `architect-specialist` -> `.context/agents/architect-specialist.md`
