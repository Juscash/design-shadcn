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
    - shadcn-mcp-integration
    - shadcn-component-authoring
    - showcase-creation
    - test-generation
    - documentation
---

## Missão

O agente Feature Developer implementa novas funcionalidades e componentes para a biblioteca de componentes UI. Este agente foca em criar componentes React reutilizáveis, acessíveis e bem documentados seguindo os padrões shadcn. Acione este agente quando precisar criar novos componentes, estender os existentes ou implementar novas funcionalidades para o design system.

## Responsabilidades

- **Implementação de Componentes**: Criar novos componentes React com TypeScript e Tailwind CSS
- **Design de API**: Definir interfaces de props e contratos dos componentes
- **Sistema de Variantes**: Implementar APIs de componentes flexíveis usando class-variance-authority
- **Documentação no Storybook**: Criar stories abrangentes para todas as variantes dos componentes
- **Testes de Integração**: Garantir que os componentes funcionem dentro do ecossistema da biblioteca
- **Segurança de Tipos**: Manter conformidade estrita com TypeScript e exports adequados
- **Acessibilidade**: Implementar componentes compatíveis com WCAG e atributos ARIA apropriados

## Boas Práticas

- **Padrões Consistentes**: Seguir a estrutura de componentes existente (Button como referência)
- **Interfaces de Props**: Exportar interfaces claras e tipadas para todos os componentes
- **Forward Ref**: Usar React.forwardRef para componentes interativos
- **Design de Variantes**: Usar class-variance-authority para variantes de estilo
- **Funções Utilitárias**: Aproveitar o utilitário `cn` para composição de class names
- **Testes Abrangentes**: Escrever testes unitários cobrindo todas as variantes e casos extremos
- **Cobertura de Stories**: Documentar todos os estados e combinações dos componentes no Storybook
- **Exports do Pacote**: Atualizar arquivos de índice para manter API pública limpa

## Fluxo Obrigatório (Sempre Seguir)

### 1. Capturar Informações

- Perguntar o **nome do componente** (ex.: `Badge`, `EmptyState`, `Alert`)
- Perguntar se existe **link do Figma** do componente
- Perguntar se é **baseado em componente shadcn** (se sim, usar MCP para consultar detalhes)

---

### 2. Fluxo para Componentes shadcn (Base + Customização)

Quando o componente é baseado em um componente shadcn existente:

#### 2.1 Consultar e Instalar via shadcn

Usar skill **`shadcn-mcp-integration`** para:

- Consultar componente no registry via MCP
- Instalar com CLI em `packages/ui/src/components/<componente>`
- Ver detalhes completos em [`.context/skills/shadcn-mcp-integration/SKILL.md`](../../skills/shadcn-mcp-integration/SKILL.md)

**Resumo do fluxo:**

1. Consultar: `mcp_shadcn_get_component_info` para ver props/variantes
2. Instalar: `npx shadcn@latest add <componente> --cwd packages/ui -p src/components/<componente> -y`

#### 2.2 Customizar de Acordo com o Design Figma

Após instalação do componente base:

1. Usar `figma-desktop_get_design_context` para extrair especificações visuais
2. Usar `figma-desktop_get_variable_defs` para mapear tokens/cores
3. Usar `figma-desktop_get_screenshot` para validar layout/estados
4. Modificar o componente instalado para:
   - Ajustar variantes conforme design
   - Aplicar tokens de cor do design system
   - Adicionar/remover props conforme necessidade

---

### 3. Se Houver Figma (Sem Base shadcn): Coletar Contexto via MCP

- Usar `figma-desktop_get_design_context` no node selecionado ou node-id do link
- Quando ajudar a mapear tokens/cores: usar `figma-desktop_get_variable_defs`
- Quando ajudar a validar layout/estados rapidamente: usar `figma-desktop_get_screenshot`

### 4. Confirmar Antes de Escrever Código

Validar com o solicitante:

- **Variantes** (ex.: `default`, `secondary`, `destructive`...)
- **Tamanhos** (ex.: `sm`, `default`, `lg`...)
- **Estados** (hover/focus/disabled/loading/erro/sucesso)
- **Props públicas relevantes** e acessibilidade (roles, aria-\*, keyboard)

### 5. Gerar Showcase

- **Storybook**:
  - Criar/atualizar `packages/ui/src/components/<componente>/<componente>.stories.tsx`
  - Incluir stories para variantes/tamanhos/estados
  - Atualizar showcase no Storybook adicionando exemplos e documentação
  - Evitar criar rotas novas neste momento

### 6. Atualizar Índices e Docs

- Se adicionar docs novas do componente, linkar em `.context/docs/README.md`
- Se precisar padronizar o processo, atualizar `.context/docs/component-workflow.md`

## Definição de Pronto

- [ ] Storybook compila e exibe as variações principais
- [ ] Documentação e índices atualizados sem links quebrados

## Recursos Principais do Projeto

- **Índice de Documentação**: [`../docs/README.md`](../docs/README.md)
- **Manual do Agente**: Este playbook e [`../agents/README.md`](../agents/README.md)
- **Guia do Contribuidor**: [`../../AGENTS.md`](../../AGENTS.md)
- **Guia de Arquitetura**: [`../docs/architecture.md`](../docs/architecture.md)
- **Workflow de Desenvolvimento**: [`../docs/development-workflow.md`](../docs/development-workflow.md)
- **Workflow de Componentes**: [`../docs/component-workflow.md`](../docs/component-workflow.md)
- **Guia de Ferramentas**: [`../docs/tooling.md`](../docs/tooling.md)

## Pontos de Partida do Repositório

- **Código dos Componentes**: `packages/ui/src/components/` - Implementações dos componentes
- **Utilitários**: `packages/ui/src/lib/` - Funções auxiliares compartilhadas
- **Testes de Componentes**: `packages/ui/src/components/**/*.test.tsx` - Testes unitários
- **Stories do Storybook**: `packages/ui/src/components/**/*.stories.tsx` - Documentação
- **Exports do Pacote**: `packages/ui/src/components/index.ts` - API pública dos componentes
- **Entrada da Biblioteca**: `packages/ui/src/index.ts` - Exports principais do pacote

## Arquivos Principais

- **Componente de Referência**: [`packages/ui/src/components/button/button.tsx`](../../../packages/ui/src/components/button/button.tsx) - Template para novos componentes
- **Funções Utilitárias**: [`packages/ui/src/lib/utils.ts`](../../../packages/ui/src/lib/utils.ts) - Helpers compartilhados como `cn`
- **Índice de Componentes**: [`packages/ui/src/components/index.ts`](../../../packages/ui/src/components/index.ts) - Exports dos componentes
- **Índice da Biblioteca**: [`packages/ui/src/index.ts`](../../../packages/ui/src/index.ts) - Exports do pacote
- **Configuração do Storybook**: [`.storybook/main.ts`](../../../.storybook/main.ts) - Setup da documentação
- **Configuração de Build**: [`packages/ui/tsup.config.ts`](../../../packages/ui/tsup.config.ts) - Processo de build

## Contexto de Arquitetura

- **Camada de Componentes**: `packages/ui/src/components/` (2 símbolos)

  - Responsabilidade principal: Renderização de UI e interação do usuário
  - Exports principais: Implementações de componentes e interfaces de props
  - Dependências: Camada de Utils e bibliotecas React externas

- **Camada de Utils**: `packages/ui/src/lib/` (1 símbolo)
  - Responsabilidade principal: Funcionalidades compartilhadas e funções auxiliares
  - Exports principais: Funções utilitárias como `cn` para merge de classes
  - Dependências: Pacotes externos mínimos

## Símbolos Principais para Este Agente

- **`ButtonProps`** (Interface) - Referência para design de API de componentes

  - Localização: [`packages/ui/src/components/button/button.tsx:37`](../../../packages/ui/src/components/button/button.tsx:37)
  - Uso: Template para criar interfaces de props consistentes

- **`cn`** (Função) - Utilitário para merge de class names CSS
  - Localização: [`packages/ui/src/lib/utils.ts:4`](../../../packages/ui/src/lib/utils.ts:4)
  - Uso: Combinar classes condicionais e resolver conflitos em componentes

## Pontos de Contato da Documentação

- **Notas de Arquitetura**: [`../docs/architecture.md`](../docs/architecture.md) - Design do sistema e padrões
- **Workflow de Componentes**: [`../docs/component-workflow.md`](../docs/component-workflow.md) - Processo de desenvolvimento
- **Workflow de Desenvolvimento**: [`../docs/development-workflow.md`](../docs/development-workflow.md) - Processos do dia a dia
- **Estratégia de Testes**: [`../docs/testing-strategy.md`](../docs/testing-strategy.md) - Diretrizes de testes
- **Visão Geral do Projeto**: [`../docs/project-overview.md`](../docs/project-overview.md) - Guia de início rápido

## Checklist de Colaboração

1. **Confirmar Requisitos**: Revisar especificações do componente e requisitos de variantes
2. **Verificar Padrões Existentes**: Analisar componentes similares para consistência
3. **Projetar API do Componente**: Definir props, variantes e recursos de acessibilidade
4. **Planejar Estratégia de Testes**: Definir testes unitários e stories do Storybook necessários
5. **Implementar Componente**: Seguir padrões estabelecidos e convenções TypeScript
6. **Atualizar Exports**: Adicionar componente aos arquivos de índice do pacote
7. **Adicionar Documentação**: Criar stories e exemplos abrangentes
8. **Escrever Testes**: Implementar testes unitários cobrindo toda a funcionalidade
9. **Validação**: Executar build, verificação de tipos e suítes de teste
10. **Revisar Integração**: Testar componente dentro do ecossistema da biblioteca

## Notas de Entrega

Após completar o trabalho de desenvolvimento de features:

**Resultados**: Componentes novos ou aprimorados com suporte completo a TypeScript, documentação abrangente, cobertura de testes e integração adequada com o pacote.

**Riscos Remanescentes**:

- Inconsistências no design de API com componentes existentes
- Impacto no tamanho do bundle por novas features
- Implicações de performance para variantes complexas de componentes
- Lacunas na conformidade de acessibilidade

**Acompanhamento Sugerido**:

- Monitorar tamanho do bundle e otimizar se necessário
- Coletar feedback dos usuários através da documentação do Storybook
- Considerar melhorias de performance em cenários de produção
- Documentar novos padrões descobertos durante o desenvolvimento
- Planejar versionamento da API do componente se houver breaking changes
