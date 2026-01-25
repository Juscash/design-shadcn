import type { Meta, StoryObj } from "@storybook/react"
import { Heart } from "lucide-react"

import { TextField } from "./text-field"

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["l", "m", "s", "xs"],
    },
    state: {
      control: "select",
      options: ["empty", "placeholder", "value", "focus", "error", "error focus", "disabled"],
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

type Size = "l" | "m" | "s" | "xs"
type State = "empty" | "placeholder" | "value" | "focus" | "error" | "error focus" | "disabled"

const sizes: Size[] = ["l", "m", "s", "xs"]
const states: State[] = ["empty", "placeholder", "value", "focus", "error", "error focus", "disabled"]

const stateLabels: Record<State, string> = {
  empty: "Empty",
  placeholder: "Placeholder",
  value: "Value",
  focus: "Focus",
  error: "Error",
  "error focus": "Error Focus",
  disabled: "Disabled",
}

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Value",
    size: "m",
  },
}

export const Matrix: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div className="flex flex-col gap-4" key={size}>
          <div className="text-sm font-medium uppercase">{size}</div>
          {states.map((state) => {
            const isPlaceholder = state === "placeholder"
            const isValue = state === "value" || state === "focus" || state === "error" || state === "error focus"
            const isDisabled = state === "disabled"
            const isError = state === "error" || state === "error focus"

            return (
              <div className="flex items-center gap-4" key={`${size}-${state}`}>
                <div className="w-[120px] text-xs text-muted-foreground">{stateLabels[state]}</div>
                <div className="w-[260px]">
                  <TextField
                    size={size}
                    state={state}
                    label="Label"
                    placeholder={isPlaceholder || isDisabled ? "Value" : undefined}
                    defaultValue={isValue ? "Value" : undefined}
                    disabled={isDisabled}
                    helperText={isError ? undefined : "Helper text"}
                    errorText={isError ? "Helper text" : undefined}
                  />
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  ),
}

export const WithDecorations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextField
        label="Label"
        placeholder="Placeholder"
        leftDecoration={<Heart className="h-4 w-4" />}
      />
      <TextField
        label="Label"
        defaultValue="Value"
        rightDecoration={<Heart className="h-4 w-4" />}
      />
      <TextField
        label="Campo obrigatorio"
        placeholder="Placeholder"
        required
        leftDecoration={<Heart className="h-4 w-4" />}
      />
    </div>
  ),
}
