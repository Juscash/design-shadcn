---
type: doc
name: component-workflow
description: Processo padrão para criar e documentar componentes do Design System
category: workflow
generated: 2026-01-24
status: filled
scaffoldVersion: "2.0.0"
version: "2.1.0"
---

# Workflow: Criar Componente Shadcn (CSS Pré-compilado)

## Visão Geral

Este guia descreve o processo de criação de componentes usando uma abordagem de CSS pré-compilado, focando em componentização modular e reutilizável, com ênfase na simplicidade de consumo.

## Novidades na Versão 2.1

- 🆕 CSS pré-compilado incluído na biblioteca
- 🚀 Importação simplificada de estilos
- 🎨 Tokens de design pré-configurados

## Pré-requisitos

- Conhecimento de React
- Familiaridade com Tailwind CSS
- Compreensão de design systems

## Fluxo de Trabalho Detalhado

### 1. Preparação e Análise

- Definir escopo do componente
- Analisar variantes e estados necessários
- Revisar designs no Figma (se aplicável)

### 2. Configuração de Componente

#### Estrutura de Diretório Atualizada

```
packages/ui/src/
├── styles/
│   ├── tokens.css      # Variáveis de design globais
│   └── index.css       # Configuração Tailwind e tokens
└── components/<componente>/
    ├── index.ts        # Exports principais
    └── <componente>.tsx  # Implementação
```

### 3. Implementação de Componente

#### Novos Padrões

- **Variantes**: `cva` para gerenciar variantes de componente
- **Estilização**: Importação automática de CSS pré-compilado
- **Tokens**: Variáveis CSS definidas centralmente
- **Consumo**: Simples importação `@juscash/ui/styles.css`

#### Exemplo de Implementação

```typescript
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center", 
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof buttonVariants> {
  // Propriedades adicionais específicas
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
)
```

### 4. Configuração de CSS

- Tokens definidos em `packages/ui/src/styles/tokens.css`
- Arquivo de entrada `index.css` importa tokens
- Build automatizado gera `styles.css`

### 5. Validação e Testes

```bash
npm run build:ui      # Compilar pacote UI
npm run test:ui       # Executar testes
npm run dev           # Testar no projeto web
```

## Consumo no Projeto

```tsx
// Importação única de estilos
import "@juscash/ui/styles.css"
import { Button } from "@juscash/ui"

function App() {
  return <Button>Clique Aqui</Button>
}
```

## Boas Práticas

- Manter componentes agnósticos de dados
- Documentar claramente contrato de props
- Usar variáveis CSS para personalização
- Garantir acessibilidade

## Definição de Pronto

- [ ] Componente implementado
- [ ] Variantes/estados cobertos
- [ ] Testes criados
- [ ] CSS pré-compilado gerado
- [ ] Documentação atualizada