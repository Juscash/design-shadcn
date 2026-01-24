---
type: agent
name: Feature Developer
description: Implementa novas features e componentes
agentType: feature-developer
phases: [P, E]
generated: 2026-01-24
status: filled
scaffoldVersion: "2.0.0"
requires:
  docs:
    - architecture.md
    - development-workflow.md
    - glossary.md
    - component-workflow.md
  skills:
    - feature-breakdown
    - figma-component-intake
    - shadcn-component-authoring
    - showcase-creation
    - test-generation
    - documentation
---

# Playbook do Feature Developer (design-shadcn)

## Missao

Entregar features prontas para producao no pacote de UI (`packages/ui`) criando novos componentes, variantes e extensoes de API de forma consistente com o estilo shadcn deste repositorio (React + TypeScript + Tailwind + cva + `cn`).

Use este agente quando:

- voce pedir para criar um componente novo em `@juscash/ui`
- voce pedir para adicionar variantes/tamanhos/props em um componente existente
- voce pedir para integrar um componente no app demo (`apps/web`) e no Storybook

## Onde trabalhar

- Componentes: `packages/ui/src/components/`
- Referencia de padrao: `packages/ui/src/components/button/button.tsx`
- Demo web: `apps/web/src/App.tsx`

## Simbolos-chave

- `ButtonProps` em `packages/ui/src/components/button/button.tsx` (padrao de como exportar `*Props` como API publica)

## Fluxo obrigatorio: criar componente novo (JusCash)

1) Entrada (sempre perguntar)

- Nome do componente (ex.: `Badge`, `EmptyState`, `Alert`).
- Existe link do Figma do componente?

2) Se houver Figma

- Usar `figma-desktop_get_design_context` para extrair estrutura e propriedades.
- Quando necessario: `figma-desktop_get_variable_defs` (tokens) e `figma-desktop_get_screenshot` (validacao rapida).

3) Confirmar especificacao antes de codar

- Variantes (ex.: `default`, `secondary`, `destructive`...)
- Tamanhos (ex.: `sm`, `default`, `lg`...)
- Estados (hover/focus/disabled/loading/erro/sucesso)
- Props publicas esperadas e acessibilidade (semantica, aria, teclado)

4) Implementar no padrao do repo (shadcn)

- Criar pasta: `packages/ui/src/components/<componente>/`
- Criar implementacao: `packages/ui/src/components/<componente>/<componente>.tsx`
- Criar export do modulo: `packages/ui/src/components/<componente>/index.ts`
- Exportar API publica:
  - `export interface <ComponentName>Props ...` ou `export type <ComponentName>Props = ...`
  - `export { <ComponentName> }`
- Preferir `React.forwardRef` quando for componente interativo/que precisa de ref.
- Usar `cva` + `VariantProps` + `cn` para variantes/tamanhos quando fizer sentido (igual `Button`).

5) Exports do pacote

- Atualizar `packages/ui/src/components/index.ts` para exportar o novo componente.

6) Showcase obrigatorio

- Storybook:
  - Criar `packages/ui/src/components/<componente>/<componente>.stories.tsx`.
  - Incluir variacoes principais (variantes/tamanhos/estados).
- App demo:
  - Atualizar `apps/web/src/App.tsx` adicionando uma secao do componente no mesmo estilo do `Button`.

7) Validar

- Rodar build/test quando aplicavel:
  - `npm run build:ui`
  - `npm run test:ui`
  - `npm run storybook` (validacao visual)

## Fluxo: estender componente existente

- Manter compatibilidade: props novas preferencialmente opcionais.
- Nao renomear/remover props/exportacoes sem pedido explicito.
- Atualizar stories e demo do `App.tsx` para cobrir o novo comportamento.

## Definicao de pronto

- Compila sem erros de TypeScript.
- Exporta `*Props` como contrato publico.
- Tem Storybook atualizado.
- Tem demo em `apps/web/src/App.tsx`.

## Recursos relacionados

- `.context/docs/component-workflow.md`
- `.context/docs/development-workflow.md`
- `.context/docs/architecture.md`
