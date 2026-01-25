# Agentes (AI Context)

Este diretório contém os playbooks dos agentes. Use este índice para saber qual agente usar em cada tipo de pedido.

## Roteamento (como escolher o agente)

- `criar componente novo` (ou "adicionar componente") -> `feature-developer`
  - Implementa o componente em `packages/ui` no padrão shadcn deste repo (cva/cn/forwardRef).
  - Gera showcase obrigatório:
    - Storybook (`*.stories.tsx`)
    - Documentação interativa no Storybook com exemplos de variantes e estados.
  - Se você fornecer link do Figma, o fluxo deve usar `figma-desktop_*` para extrair contexto e confirmar variantes/tamanhos/estados antes de codar.

- `documentar/showcase de componente` (sem mexer na implementação) -> `component-docs-agent`
  - Cria/atualiza stories no Storybook.
  - Atualiza índices/navegação e docs relacionadas ao design system.

- `desenvolvimento frontend` -> `frontend-specialist`
  - Implementa interfaces de usuário e experiência visual.
  - Foca em acessibilidade, responsividade e performance.

- `revisao de codigo` -> `code-reviewer`
  - Analisa qualidade do código e conformidade com padrões.

- `arquitetura` -> `architect-specialist`
  - Define estruturas de sistema e padrões arquiteturais.

## Lista de agentes

- `feature-developer` -> `.context/agents/feature-developer.md`
- `component-docs-agent` -> `.context/agents/component-docs-agent.md`
- `frontend-specialist` -> `.context/agents/frontend-specialist.md`
- `code-reviewer` -> `.context/agents/code-reviewer.md`
- `architect-specialist` -> `.context/agents/architect-specialist.md`