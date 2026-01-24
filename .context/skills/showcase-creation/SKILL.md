---
type: skill
name: Showcase Creation
description: Criar e atualizar showcases (Storybook + App demo) para componentes do Design System
skillSlug: showcase-creation
phases: [E]
generated: 2026-01-24
status: filled
scaffoldVersion: "2.0.0"
---

# Showcase Creation

## Quando usar

Use esta skill quando um componente novo for criado ou quando um componente existente ganhar novas variantes/tamanhos/estados.

## Objetivo

Garantir que todo componente tenha exemplos consistentes em:

- Storybook (variacoes isoladas)
- App demo (`apps/web/src/App.tsx`) no mesmo estilo do `Button`

## Checklist (Storybook)

1) Criar/atualizar `packages/ui/src/components/<componente>/<componente>.stories.tsx`.
2) `title` no formato `Components/<ComponentName>`.
3) Incluir `argTypes` para props relevantes (ex.: `variant`, `size`).
4) Criar stories:

- `Default`
- Uma story por variante (se existirem)
- Uma story por tamanho (se existirem)
- Uma story de estado (ex.: disabled/loading) quando aplicavel

## Checklist (App demo)

1) Atualizar `apps/web/src/App.tsx`.
2) Adicionar uma secao para o componente:

- `h2` com nome do componente
- Um bloco com exemplos de variantes
- Um bloco com exemplos de tamanhos

3) Manter o layout atual (sem criar novas rotas).

## Validacao rapida

- `npm run storybook`
- `npm run dev`
