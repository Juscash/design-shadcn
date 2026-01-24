# @juscash/ui - UI Component Library

Uma biblioteca de componentes React acessível e customizável baseada no shadcn/ui.

## Estrutura do Projeto

```
design-shadcn/
├── packages/
│   └── ui/                # Biblioteca de componentes
├── apps/
│   └── web/               # Aplicação web (Vite + React) para documentação
├── .github/
│   └── workflows/         # GitHub Actions
├── .changeset/            # Configuração do Changesets
└── .storybook/            # Configuração do Storybook
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia o app web

# Build
npm run build            # Build de todos os workspaces
npm run build:ui         # Build apenas da biblioteca

# Testes
npm run test             # Executa testes no modo watch
npm run test:ui          # Executa testes uma vez

# Storybook
npm run storybook        # Inicia o Storybook
npm run build:storybook  # Build do Storybook

# Versionamento e Publicação
npm run version:patch    # Nova versão patch (correções)
npm run version:minor    # Nova versão minor (novas features)
npm run version:major    # Nova versão major (breaking changes)
npm run version:publish  # Push da tag para publicar no GitHub Packages
```

## Publicação no GitHub Packages

1. Faça suas alterações
2. Execute um dos scripts de versão:
   - `npm run version:patch` (correções)
   - `npm run version:minor` (novas features)
   - `npm run version:major` (breaking changes)
3. Execute `npm run version:publish` para subir a tag

O workflow de publicação será acionado automaticamente ao fazer push de uma tag.

## Deploy da Documentação

O site de documentação é publicado automaticamente no GitHub Pages sempre que houver um push ou merge na branch `main`.

## Desenvolvimento

### Adicionar um novo componente

1. Crie o componente em `packages/ui/src/components/seu-componente/`
2. Adicione testes e stories
3. Exporte em `packages/ui/src/components/index.ts`
4. Use no app web em `apps/web/src/App.tsx`

### Rodar localmente

```bash
npm install
npm run dev
```

## Licença

MIT
