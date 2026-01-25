---
type: skill
name: Shadcn MCP Integration
description: Consultar e instalar componentes shadcn via MCP + CLI
skillSlug: shadcn-mcp-integration
phases: [P, E]
version: "1.0.0"
generated: 2026-01-25
status: filled
scaffoldVersion: "2.0.0"
---

# Skill: Shadcn MCP Integration

## Visão Geral

Esta skill descreve como usar o **MCP shadcn** para consultar componentes no registry e instalá-los via CLI com paths customizados.

## 🎯 Quando Usar

Use esta skill quando:

- Precisar criar um componente baseado em shadcn/ui
- Quiser consultar componentes disponíveis no registry
- Precisar instalar componentes com paths customizados

## 🔧 Ferramentas MCP Disponíveis

O MCP shadcn fornece as seguintes ferramentas:

```
mcp_shadcn_list_components
  → Lista todos os componentes disponíveis no registry

mcp_shadcn_search_components
  → Busca componentes por nome ou funcionalidade

mcp_shadcn_get_component_info
  → Obtém detalhes de um componente específico
```

## 📋 Fluxo Completo

### 1. Consultar Componente via MCP

**Exemplos de prompts:**

- "Show me all available components in the shadcn registry"
- "Get details for the button component"
- "Search for form components"

**O que você obtém:**

- Props disponíveis
- Variantes padrão
- Dependências necessárias
- Exemplos de uso

### 2. Instalar Componente via CLI

Após consultar o componente, instale-o com o comando:

```bash
npx shadcn@latest add <componente> --cwd packages/ui -p src/components/<componente> -y
```

**Opções do CLI:**

| Opção                            | Descrição                                                      |
| -------------------------------- | -------------------------------------------------------------- |
| `--cwd packages/ui`              | Define o diretório de trabalho (onde está o `components.json`) |
| `-p src/components/<componente>` | Define o caminho exato onde o componente será criado           |
| `-y`                             | Pula confirmação (modo não-interativo)                         |
| `-o`                             | Sobrescreve arquivos existentes se necessário                  |

**Exemplos:**

```bash
# Instalar Button
npx shadcn@latest add button --cwd packages/ui -p src/components/button -y

# Instalar Badge
npx shadcn@latest add badge --cwd packages/ui -p src/components/badge -y

# Instalar Dialog
npx shadcn@latest add dialog --cwd packages/ui -p src/components/dialog -y
```

### 3. Customizar Componente

Após instalação, o componente base estará em `packages/ui/src/components/<componente>/`.

**Customizações comuns:**

- Ajustar variantes conforme design system
- Aplicar tokens de cor personalizados
- Adicionar/remover props específicas
- Integrar com Figma (se houver design)

## 🔍 Configuração Necessária

O MCP shadcn requer:

1. **`opencode.json`** na raiz do projeto:

```json
{
  "mcp": {
    "shadcn": {
      "command": ["npx", "shadcn@latest", "mcp"],
      "enabled": true
    }
  }
}
```

2. **`components.json`** em `packages/ui/`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## 🚨 Troubleshooting

### MCP não responde

1. Verificar se `opencode.json` está configurado
2. Reiniciar OpenCode
3. Verificar logs do MCP (View → Output → MCP)

### Componente não instala

1. Verificar se `components.json` existe em `packages/ui`
2. Confirmar que path aliases estão no `tsconfig.json`
3. Verificar se diretório `packages/ui/src/components` existe

### "No tools or prompts"

1. Limpar cache: `npx clear-npx-cache`
2. Re-habilitar MCP shadcn no OpenCode
3. Verificar logs para erros

## 📚 Referências

- [Documentação MCP shadcn](https://ui.shadcn.com/docs/mcp)
- [shadcn CLI](https://ui.shadcn.com/docs/cli)
- [Configuração OpenCode](opencode.json)
