---
type: doc
name: component-authoring-guide
description: Guia definitivo para criação de componentes no Design System
category: development
generated: 2026-01-24
status: draft
scaffoldVersion: "2.0.0"
---

# Guia de Criação de Componentes

## Filosofia de Design de Componentes

### Princípios Fundamentais
- **Reutilizabilidade**: Cada componente deve ser altamente flexível e reutilizável.
- **Consistência**: Manter padrões visuais e de interação consistentes.
- **Performance**: Componentes devem ser leves e otimizados.

## Estrutura de um Componente

### Arquivos Essenciais
```
packages/ui/src/components/meu-componente/
├── meu-componente.tsx        # Implementação do componente React
├── meu-componente.css        # Estilos pré-compilados
├── meu-componente.stories.tsx # Documentação e casos de uso
├── meu-componente.test.tsx   # Testes unitários
└── index.ts                  # Ponto de exportação
```

## Diretrizes de Implementação

### Estilos
- Use CSS pré-compilado com suporte a variantes
- Utilize variáveis de tema para cores, espaçamentos
- Suporte temas claro/escuro via variáveis CSS

### Props e Tipagem
- Definir interface `*Props` com tipagem forte
- Usar `React.forwardRef` para suportar refs
- Utilizar `cva` para gerenciar variantes de estilo

### Exemplo de Implementação

```typescript
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva('base-button', {
  variants: {
    variant: {
      default: 'btn-default',
      primary: 'btn-primary',
      secondary: 'btn-secondary'
    },
    size: {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg'
    }
  }
})

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  // Propriedades adicionais específicas
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    )
  }
)
```

## Melhores Práticas

- Minimizar dependências externas
- Documentar todos os casos de uso no Storybook
- Cobrir componente com testes unitários e de snapshot
- Garantir acessibilidade (ARIA, keyboard navigation)

## Processo de Revisão

- Todos os componentes passam por revisão de design
- Verificação de consistência com diretrizes do Design System
- Testes de performance e acessibilidade