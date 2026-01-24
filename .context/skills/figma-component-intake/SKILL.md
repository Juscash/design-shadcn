---
type: skill
name: Figma Component Intake
description: Coletar especificacao de componentes a partir de Figma e confirmar variacoes antes de implementar
skillSlug: figma-component-intake
phases: [P, E]
generated: 2026-01-24
status: filled
scaffoldVersion: "2.0.0"
---

# Figma Component Intake

## Quando usar

Use quando o solicitante fornecer um link do Figma para um componente (novo ou existente) e a implementacao precisa refletir o design.

## Entrada obrigatoria

- Nome do componente
- Link do Figma (quando existir)

## Procedimento

1) Perguntar se existe link do Figma.
2) Se existir, extrair `node-id` do link.
3) Usar MCP figma-desktop:

- `figma-desktop_get_design_context` (principal)
- `figma-desktop_get_variable_defs` (quando houver tokens/variaveis)
- `figma-desktop_get_screenshot` (quando precisar validar estados/frames)

4) A partir do contexto, montar uma lista para confirmar com o solicitante:

- Variantes (nomes e valores)
- Tamanhos (nomes e valores)
- Estados (disabled/loading/erro/sucesso/focus/hover)
- Props esperadas (ex.: `variant`, `size`, `icon`, `asChild`)
- Regras de acessibilidade (semantica, aria, teclado)

5) So iniciar implementacao depois de confirmar as variacoes e estados.

## Saida esperada

- Uma especificacao curta (bullets) com variantes/tamanhos/estados.
- Decisao clara de como isso vira props do componente.
