---
status: approved
generated: 2026-01-24
agents:
  - type: "frontend-specialist"
    role: "Implementar mudancas de build CSS e configuracao da biblioteca"
  - type: "architect-specialist"
    role: "Garantir que a arquitetura de exports e bundle esta correta"
  - type: "documentation-writer"
    role: "Atualizar docs e skills com novas instrucoes de uso"
  - type: "test-writer"
    role: "Validar que componentes funcionam com novo setup"
docs:
  - "architecture.md"
  - "component-workflow.md"
  - "tooling.md"
phases:
  - id: "phase-1"
    name: "Preparacao - Mover CSS para biblioteca"
    prevc: "P"
  - id: "phase-2"
    name: "Implementacao - Build CSS e exports"
    prevc: "E"
  - id: "phase-3"
    name: "Validacao - Testar no consumidor"
    prevc: "V"
---

# Biblioteca UI Auto-Suficiente (CSS Pre-compilado)

> Modificar a biblioteca @juscash/ui para ser auto-suficiente, incluindo CSS pre-compilado com Tailwind, para que consumidores nao precisem instalar Tailwind ou configurar CSS.

## Task Snapshot

- **Primary goal:** Tornar `@juscash/ui` auto-suficiente, exportando CSS pre-compilado para que consumidores apenas importem `@juscash/ui/styles.css` e usem os componentes.
- **Success signal:** App em `apps/web` funciona SEM Tailwind instalado, apenas com `import "@juscash/ui/styles.css"`.
- **Key references:**
  - [Architecture](../docs/architecture.md)
  - [Component Workflow](../docs/component-workflow.md)
  - [Shadcn Component Authoring Skill](../skills/shadcn-component-authoring/SKILL.md)

## Problema Atual

| Aspecto | Situacao Atual | Problema |
|---------|----------------|----------|
| CSS Tokens | Definidos em `apps/web/src/index.css` | Consumidor precisa copiar/configurar |
| Tailwind | `devDependency` em ambos packages | Consumidor precisa instalar e configurar |
| Config | `tailwind.config.ts` duplicado | Manutencao duplicada |
| Imports | Consumidor configura tudo manualmente | Experiencia ruim de DX |

## Arquitetura Proposta

```
packages/ui/
├── src/
│   ├── styles/
│   │   ├── tokens.css       # CSS Variables (design tokens)
│   │   └── index.css        # Entry point (@tailwind + tokens)
│   ├── components/
│   └── index.ts
├── dist/
│   ├── index.js             # Componentes JS
│   ├── index.d.ts           # Types
│   └── styles.css           # CSS PRE-COMPILADO
└── package.json             # exports: { "./styles.css": ... }
```

## Experiencia do Consumidor (Apos)

```tsx
// Apenas 2 imports!
import "@juscash/ui/styles.css"
import { Button } from "@juscash/ui"

function App() {
  return <Button>Click me</Button>
}
```

## Agent Lineup

| Agent | Role in this plan | First responsibility |
| --- | --- | --- |
| Frontend Specialist | Implementar mudancas de build e configuracao | Criar estrutura CSS e configurar tsup/scripts |
| Architect Specialist | Validar arquitetura de exports | Revisar package.json exports e sideEffects |
| Documentation Writer | Atualizar documentacao | Atualizar docs com instrucoes de uso |
| Test Writer | Validar funcionamento | Testar que componentes renderizam corretamente |

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
| --- | --- | --- | --- |
| CSS bundle grande | Media | Baixo | Usar `--minify`, PurgeCSS se necessario |
| Conflitos CSS com Tailwind do consumidor | Baixa | Media | Documentar; compatibilidade retroativa mantida |
| Build mais lento | Baixa | Baixo | Cache de Tailwind, builds paralelos |

### Dependencies

- **Internal:** Nenhuma - mudancas isoladas em `packages/ui`
- **External:** `tailwindcss` CLI (ja instalado)
- **Technical:** Node.js, npm workspaces funcionando

### Assumptions

- Design tokens atuais em `apps/web/src/index.css` estao corretos e completos
- Consumidores usarao o tema padrao JusCash (sem customizacao)
- Compatibilidade retroativa: quem quiser usar Tailwind proprio ainda pode

## Working Phases

### Phase 1 — Preparacao (Mover CSS para biblioteca)

**Steps**

1. Criar pasta `packages/ui/src/styles/`
2. Criar `packages/ui/src/styles/tokens.css` com todos os CSS variables de `apps/web/src/index.css`
3. Criar `packages/ui/src/styles/index.css` como entry point (@tailwind + tokens)
4. Atualizar `packages/ui/tailwind.config.ts` para incluir `./src/styles/**/*.css` no content

**Arquivos criados:**
- `packages/ui/src/styles/tokens.css`
- `packages/ui/src/styles/index.css`

**Commit Checkpoint**
```
feat(ui): add CSS styles structure with design tokens
```

### Phase 2 — Implementacao (Build CSS e exports)

**Steps**

1. Adicionar script `build:css` ao `packages/ui/package.json`:
   ```
   "build:css": "tailwindcss -i ./src/styles/index.css -o ./dist/styles.css --minify"
   ```
2. Modificar script `build` para incluir CSS:
   ```
   "build": "npm run build:css && tsup"
   ```
3. Adicionar export `./styles.css` ao package.json:
   ```json
   "./styles.css": "./dist/styles.css"
   ```
4. Adicionar `"sideEffects": ["*.css"]` ao package.json
5. Adicionar `dist/styles.css` ao array `files`

**Arquivos modificados:**
- `packages/ui/package.json`

**Commit Checkpoint**
```
feat(ui): add pre-compiled CSS build and export
```

### Phase 3 — Validacao (Testar no consumidor)

**Steps**

1. Remover dependencias desnecessarias de `apps/web/package.json`:
   - `tailwindcss`
   - `autoprefixer`
   - `postcss`
2. Remover arquivos de config de `apps/web/`:
   - `tailwind.config.ts`
   - `postcss.config.js`
3. Modificar `apps/web/src/main.tsx`:
   - Trocar `import "./index.css"` por `import "@juscash/ui/styles.css"`
4. Remover `apps/web/src/index.css`
5. Executar build completo e validar:
   ```
   npm run build
   npm run dev
   ```

**Arquivos removidos:**
- `apps/web/tailwind.config.ts`
- `apps/web/postcss.config.js`
- `apps/web/src/index.css`

**Arquivos modificados:**
- `apps/web/package.json`
- `apps/web/src/main.tsx`

**Commit Checkpoint**
```
feat(web): use pre-compiled CSS from @juscash/ui

BREAKING CHANGE: apps/web no longer requires Tailwind configuration
```

## Rollback Plan

### Rollback Triggers
- Estilos nao aplicados corretamente
- Build falha
- Componentes quebrados visualmente

### Rollback Procedures

#### Phase 1-2 Rollback
- Action: `git checkout HEAD -- packages/ui/`
- Data Impact: Nenhum
- Estimated Time: < 5 minutos

#### Phase 3 Rollback
- Action: Restaurar `apps/web/` configs e reinstalar deps
- Data Impact: Nenhum
- Estimated Time: < 15 minutos

## Evidence & Follow-up

**Artifacts to collect:**
- [ ] Screenshot do app funcionando com novo CSS
- [ ] Output do build mostrando `styles.css` gerado
- [ ] Tamanho do arquivo `dist/styles.css`

**Documentation updates:**
- [ ] `.context/docs/architecture.md` - Secao sobre CSS bundling
- [ ] `.context/docs/component-workflow.md` - Atualizar imports
- [ ] `.context/skills/shadcn-component-authoring/SKILL.md` - Regras de estilo
