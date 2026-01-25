---
type: skill
name: Showcase Creation
description: Criar e atualizar showcases (Storybook) para componentes do Design System
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

Garantir que todo componente tenha exemplos consistentes em Storybook para documentação interativa e desenvolvimento visual.

## Checklist (Storybook)

1) Criar/atualizar `packages/ui/src/components/<componente>/<componente>.stories.tsx`.
2) `title` no formato `Components/<ComponentName>`.
3) Incluir `argTypes` para props relevantes (ex.: `variant`, `size`).
4) Criar stories:

- `Default`
- Uma story por variante (se existirem)
- Uma story por tamanho (se existirem)
- Uma story de estado (ex.: disabled/loading) quando aplicável

## Diretrizes para Stories

- **Variants**: Demonstrar todas as variantes visuais (primary, secondary, destructive, etc.)
- **Tamanhos**: Mostrar todos os tamanhos disponíveis (sm, md, lg, etc.)
- **Estados**: Documentar estados interativos (hover, focus, disabled, loading)
- **Acessibilidade**: Incluir exemplos de uso com ARIA attributes
- **Controles**: Configurar controles interativos para exploração no Storybook

## Validação Rápida

- `npm run storybook` para visualizar as stories
- Verificar se todas as variantes estão documentadas
- Testar interatividade dos controles do Storybook

## Exemplo de Estrutura

```typescript
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive"],
    },
    size: {
      control: "select", 
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
}

export default meta
```

## Boas Práticas

- **Documentação Completa**: Cada story deve ter descrição clara do seu propósito
- **Cobertura Total**: Documentar todas as combinações possíveis de props
- **Exemplos Reais**: Usar textos e contextos realistas nas demonstrações
- **Performance**: Manter stories simples para carregamento rápido no Storybook