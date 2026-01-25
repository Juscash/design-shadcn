import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "./textarea"

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "focus", "error", "error focus", "disabled"],
    },
    label: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

const stateRows = [
  { id: "empty", label: "Empty" },
  { id: "placeholder", label: "Placeholder" },
  { id: "value", label: "Value" },
  { id: "focus", label: "Focus" },
  { id: "error", label: "Error" },
  { id: "error focus", label: "Error Focus" },
  { id: "disabled", label: "Disabled" },
] as const

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Type your message here.",
  },
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {stateRows.map((row) => (
        <div className="flex items-start gap-4" key={row.id}>
          <div className="w-[120px] text-xs text-muted-foreground">{row.label}</div>
          <div className="w-[320px]">
            <Textarea
              label="Label"
              helperText="Helper text"
              placeholder={row.id === "placeholder" ? "Type your message here." : undefined}
              defaultValue={row.id === "value" || row.id === "focus" || row.id === "error" || row.id === "error focus" || row.id === "disabled" ? "Value" : undefined}
              state={
                row.id === "focus"
                  ? "focus"
                  : row.id === "error"
                    ? "error"
                    : row.id === "error focus"
                      ? "error focus"
                      : row.id === "disabled"
                        ? "disabled"
                        : "default"
              }
            />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const Example: Story = {
  render: () => (
    <div className="w-[320px]">
      <Textarea label="Conteudo*" placeholder="Type your message here." />
    </div>
  ),
}
