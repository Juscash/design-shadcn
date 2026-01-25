import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "neutral", "outline", "ghost", "destructive"],
    },
    size: {
      control: "select",
      options: ["m", "s", "xs"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    asChild: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

type Variant = "primary" | "secondary" | "neutral" | "outline" | "ghost" | "destructive"
type Size = "m" | "s" | "xs"

const variants: Variant[] = ["primary", "secondary", "neutral", "outline", "ghost", "destructive"]
const sizes: Size[] = ["m", "s", "xs"]

const hoverClasses: Record<Variant, string> = {
  primary: "bg-[var(--button-brand-hover)]",
  secondary: "bg-[var(--button-secondary-hover)]",
  neutral: "bg-[var(--button-neutral-hover)] text-[hsl(var(--neutral-50))]",
  outline: "bg-[hsl(var(--neutral-100))]",
  ghost: "bg-[hsl(var(--neutral-100))]",
  destructive: "bg-[var(--button-destructive-hover)]",
}

const focusClass = "ring-[3px] ring-border ring-offset-0"

const stateRows = [
  { id: "default", label: "Default" },
  { id: "hover", label: "Hover & Active" },
  { id: "disabled", label: "Disabled" },
  { id: "focus", label: "Focus" },
  { id: "loading", label: "Loading" },
] as const

export const Default: Story = {
  args: {
    variant: "primary",
    size: "m",
    children: "Label",
  },
}

export const Matrix: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div className="flex flex-col gap-4" key={size}>
          <div className="text-sm font-medium uppercase">{size}</div>
          {stateRows.map((row) => (
            <div className="flex items-center gap-4" key={row.id}>
              <div className="w-[120px] text-xs text-muted-foreground">{row.label}</div>
              <div className="flex flex-wrap gap-3">
                {variants.map((variant) => (
                  <Button
                    key={`${size}-${row.id}-${variant}`}
                    size={size}
                    variant={variant}
                    disabled={row.id === "disabled"}
                    loading={row.id === "loading"}
                    className={
                      row.id === "hover"
                        ? hoverClasses[variant]
                        : row.id === "focus"
                          ? focusClass
                          : undefined
                    }
                  >
                    Label
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const Examples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" size="m">
          Entrar com o e-mail
        </Button>
        <Button variant="secondary" size="m">
          Enviar processo
        </Button>
        <Button variant="primary" size="m">
          Adicionar cliente
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="neutral" size="m">
          Editar
        </Button>
        <Button variant="destructive" size="m">
          Excluir
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" size="m">
          Anterior
        </Button>
        <Button variant="outline" size="m">
          Proximo
        </Button>
      </div>
    </div>
  ),
}

export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <a href="/">Button como link</a>
    </Button>
  ),
}
