# Correção do Componente Typography

## Problema Relatado

O componente Typography não estava alterando o tamanho quando modificado no playbook/Storybook.

## Causa Raiz

Foram identificados 3 problemas:

### 1. className estava sendo passada incorretamente

**Antes:**

```typescript
className={cn(typographyVariants({ variant, tone, className }))}
```

**Depois:**

```typescript
className={cn(typographyVariants({ variant, tone }), className)}
```

className não é uma variante, então não deve ser passada dentro do objeto de variantes.

### 2. Conflito entre classes de tamanho e cor

**Antes:**

```typescript
const typographyVariants = cva(
  "font-normal font-sans text-[var(--neutral-800)]",
  {
    // ...
    tone: {
      default: "text-[var(--neutral-800)]",
      // ...
    },
  },
);
```

O prefixo `text-[var(--...)]` pode conflitar com classes de font-size como `text-heading-1`.

**Depois:**

```typescript
const typographyVariants = cva("font-normal font-sans", {
  // ...
  tone: {
    default: "text-neutral-800",
    soft: "text-neutral-500",
    // ...
  },
});
```

### 3. Cores neutral não estavam configuradas no Tailwind

Adiconadas as cores neutral ao `tailwind.config.ts`:

```typescript
colors: {
  neutral: {
    0: "var(--neutral-0)",
    50: "var(--neutral-50)",
    70: "var(--neutral-70)",
    // ... até 900
  },
  // ...
}
```

## Resultado

Agora o componente Typography:

- ✅ Aplica corretamente os tamanhos (heading-1 até caption-1)
- ✅ Aplica corretamente as cores/tones (default, soft, muted, disabled)
- ✅ Permite className customizada sem conflitos
- ✅ Funciona perfeitamente no Storybook/playbook

## Teste

Para testar, abra o Storybook em `http://localhost:6006` e navegue até:
**Foundations → Typography → Default**

Altere o controle "variant" e observe que o tamanho muda corretamente.
Altere o controle "tone" e observe que a cor muda corretamente.
