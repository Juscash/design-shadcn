---
type: doc
name: development-workflow
description: Day-to-day engineering processes, branching, and contribution guidelines
category: workflow
generated: 2026-01-24
status: filled
scaffoldVersion: "2.0.0"
---

## Workflow de Desenvolvimento

Este repositorio segue um workflow de "mudancas pequenas, alta frequencia" otimizado para pacote UI (`packages/ui`). O objetivo e manter `main` em estado releasavel enquanto permite iteracao rapida em componentes e utilitarios.

Processo dia a dia:

1. **Escolher unidade de trabalho scoped**
   - Preferir PRs pequenas (uma feature/fix + testes/docs) ao inves de branches longas.
   - Se o trabalho for grande, dividir em PRs incrementais que mantenham o sistema verde.

2. **Criar branch curta**
   - Branch do ultimo `main`.
   - Manter mudancas focadas: componentes UI (ex.: `Button`) devem permanecer desacoplados e reutilizaveis entre consumidores.

3. **Desenvolver localmente com feedback rapido**
   - Rodar Storybook para validação visual de componentes.
   - Rodar testes unitarios para os pacotes tocados (especialmente comportamento de componentes e utilitarios como `cn`).

4. **Adicionar/ajustar testes e stories**
   - Se comportamento de componente mudar, atualizar:
     - Testes unitarios (ex.: `packages/ui/src/components/button/button.test.tsx`)
     - Stories do Storybook quando aplicavel (ex.: `button.stories.tsx`)
   - Manter testes focados em comportamento publico e props suportadas (ex.: `ButtonProps` exportado).

5. **Abrir PR cedo**
   - Usar Draft PRs para feedback inicial.
   - Incluir contexto, screenshots (se UI) e instrucoes para reviewers.

6. **Review, iterar, merge**
   - Responder feedback rapidamente.
   - Garantir CI verde antes de final approval.
   - Merge para `main` (prefer squash merge a menos que repo exija outro).

7. **Release (quando aplicavel)**
   - Releases sao produzidas de `main` e tagueadas (veja "Branching & Releases").

## Branching & Releases

- **Modelo de branching:** Trunk-based development
  - `main` e a unica fonte de verdade e deve permanecer deployavel/releasavel.
  - Branches de feature sao curtas e mergadas via PR.
- **Convencoes de nomes de branch (recomendadas):**
  - `feat/<scope>-<short-description>` (ex.: `feat/button-loading-state`)
  - `fix/<scope>-<short-description>` (ex.: `fix/cn-merge-classes`)
  - `chore/<scope>-<short-description>` (ex.: `chore/update-tooling`)
  - `docs/<short-description>` (ex.: `docs/dev-workflow`)
- **Cadencia de release:** Sob demanda (dirigida por mudancas mergadas em `main`)
  - Mudancas no pacote UI devem ser releaseadas quando introduzirem mudancas visiveis, novos componentes ou fixes para consumidores.
- **Convencoes de tagging (recomendadas):**
  - Usar tags semantico version: `vX.Y.Z` (ex.: `v1.4.0`)
  - Se repo usa workspace packages, garantir que release notes chamem mudancas em `packages/ui`.
- **O que qualifica para release:**
  - Mudancas em API publica (ex.: `ButtonProps` exportado)
  - Mudancas de comportamento ou estilo em componentes compartilhados
  - Mudancas em utilitarios (ex.: `cn`) que afetem merge de classes e CSS output

## Desenvolvimento Local

- **Instalar dependencias:**
  ```bash
  npm install
  ```

- **Rodar Storybook para validação visual:**
  ```bash
  npm run storybook
  ```

- **Build para distribuicao (library):**
  ```bash
  npm run build
  ```

- **Rodar testes (recomendado antes de PR):**
  ```bash
  npm test
  ```
  Se tooling suportar, preferir testes scoped ao pacote mudado (ex.: testes do pacote UI) para feedback rapido.

- **Type checking:**
  ```bash
  npm run typecheck
  ```

> Nota: Nomes exatos de scripts podem variar por workspace. Se comandos falharem, checar scripts em `package.json` na root e pacotes workspace (comumente `packages/ui`).

## Expectativas de Code Review

Code review e requerido para todas mudancas mergadas em `main`. Reviews focam em corretude, manutenibilidade e consistencia com convencoes do repositorio.

**O que reviewers vao checar:**

- **Scope & design**
  - Mudanca bate com descricao do PR e esta scoped adequadamente.
  - Mudancas em API publica (ex.: `ButtonProps`) sao intencionais e documentadas.
- **Qualidade de codigo**
  - Nomes claros e estrutura legivel.
  - Sem acoplamento desnecessario entre componentes e utilitarios (componentes podem depender de `packages/ui/src/lib`, nao contrario).
  - Utilitarios como `cn` permanecem estaveis e amplamente aplicaveis.
- **Testes**
  - Novo comportamento inclui testes e/ou updates de stories.
  - Mudancas nao quebram testes existentes.
  - Seguir guidelines em [`testing-strategy.md`](./testing-strategy.md).
- **Impacto user-facing**
  - Mudancas UI incluem screenshots ou notas breves de impacto visual.
  - Consideracoes de acessibilidade abordadas quando relevante (focus states, ARIA attributes, interacoes teclado).
- **Tooling & padroes**
  - Formatting/linting passa de acordo com [`tooling.md`](./tooling.md).
  - Sem churn acidental de lockfile ou refators nao relacionados.

**Aprovals & colaboracao**
- Pelo menos **uma review aprovadora** recomendada antes de merge; mudancas high-impact (API publica, refators amplos) devem ter **duas**.
- Se usando coding agents ou pair-programming, seguir guidance de colaboracao em **AGENTS.md** (especialmente scoping de tarefas, higiene de PR e manter mudancas reviewaveis).

## Tarefas de Onboarding (opcional)

Para novos contribuidores, o caminho mais rapido para produtivo e:

- **Setup do repositorio local** usando comandos em "Desenvolvimento Local".
- **Comecar com mudancas low-risk**:
  - Fixes de documentacao em `docs/`
  - Pequenos bug fixes ou melhorias de testes em `packages/ui`
  - Melhorias de stories para componentes existentes (ex.: `Button`)
- **Itens de trabalho "starter" sugeridos**
  - Adicionar/expandir testes ao redor de props e estados de componentes (ex.: `disabled`, loading states, variantes).
  - Melhorar cobertura de utilitarios (ex.: edge cases para `cn`).
  - Alinhar padroes de componentes across `packages/ui/src/components/**` (nomes de props consistentes e convencoes de estilo).

Se team rastreia trabalho em issue tracker, procurar labels como **good first issue**, **starter**, ou **help wanted**, e preferir itens que toquem apenas o pacote `packages/ui` ate familiarizar com estrutura de workspace.

## Recursos Relacionados

- [testing-strategy.md](./testing-strategy.md)
- [tooling.md](./tooling.md)