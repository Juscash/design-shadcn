import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./checkbox"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["m", "s"]
    },
    state: {
      control: "select",
      options: ["default", "focus", "error", "disabled"]
    },
    checked: {
      control: "boolean"
    },
    error: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: "m",
    state: "default",
    label: "Checkbox"
  }
}

export const Small: Story = {
  args: {
    size: "s",
    label: "Small Checkbox"
  }
}

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked"
  }
}

export const Indeterminate: Story = {
  args: {
    checked: "indeterminate",
    label: "Indeterminate"
  }
}

export const Error: Story = {
  args: {
    error: true,
    label: "Error State"
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled"
  }
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Checkbox size="m" label="Medium" />
      <Checkbox size="s" label="Small" />
    </div>
  ),
  argTypes: { size: { control: false } }
}

export const AllStates: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium">Default</div>
        <Checkbox label="Default" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium">Checked</div>
        <Checkbox checked label="Checked" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium">Indeterminate</div>
        <Checkbox checked="indeterminate" label="Indeterminate" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium">Error</div>
        <Checkbox error label="Error" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium">Disabled</div>
        <Checkbox disabled label="Disabled" />
      </div>
    </div>
  ),
  argTypes: { size: { control: false }, state: { control: false } }
}

export const InteractiveDemo: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false)
    const [indeterminate, setIndeterminate] = React.useState(false)
    
    return (
      <div className="flex flex-col gap-4">
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Toggle me"
        />
        <Checkbox
          checked={indeterminate ? "indeterminate" : checked}
          onCheckedChange={(val) => {
            if (val === "indeterminate") {
              setIndeterminate(true)
            } else {
              setIndeterminate(false)
              setChecked(val)
            }
          }}
          label="Indeterminate demo"
        />
      </div>
    )
  }
}