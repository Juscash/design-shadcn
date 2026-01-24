import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "neutral", "destructive", "outline", "ghost"]
    },
    size: {
      control: "select",
      options: ["m", "s", "xs"]
    },
    loading: {
      control: "boolean"
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "m",
    children: "Primary Button"
  }
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "m",
    children: "Secondary"
  }
}

export const Neutral: Story = {
  args: {
    variant: "neutral",
    size: "m",
    children: "Neutral"
  }
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "m",
    children: "Destructive"
  }
}

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "m",
    children: "Outline"
  }
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "m",
    children: "Ghost"
  }
}

export const SizeM: Story = {
  args: {
    variant: "primary",
    size: "m",
    children: "Medium"
  }
}

export const SizeS: Story = {
  args: {
    variant: "primary",
    size: "s",
    children: "Small"
  }
}

export const SizeXS: Story = {
  args: {
    variant: "primary",
    size: "xs",
    children: "Extra Small"
  }
}

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "m",
    loading: true,
    children: "Loading..."
  }
}

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "m",
    disabled: true,
    children: "Disabled"
  }
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 items-end">
      <Button variant="primary" size="m">Primary</Button>
      <Button variant="secondary" size="m">Secondary</Button>
      <Button variant="neutral" size="m">Neutral</Button>
      <Button variant="destructive" size="m">Destructive</Button>
      <Button variant="outline" size="m">Outline</Button>
      <Button variant="ghost" size="m">Ghost</Button>
    </div>
  ),
  argTypes: { variant: { control: false }, size: { control: false } }
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-end">
      <Button variant="primary" size="m">Medium</Button>
      <Button variant="primary" size="s">Small</Button>
      <Button variant="primary" size="xs">XS</Button>
    </div>
  ),
  argTypes: { variant: { control: false }, size: { control: false } }
}

export const AllStates: Story = {
  render: () => (
    <div className="flex gap-4">
      <div>
        <div className="mb-2 text-sm font-medium">Default</div>
        <Button variant="primary" size="m">Button</Button>
      </div>
      <div>
        <div className="mb-2 text-sm font-medium">Loading</div>
        <Button variant="primary" size="m" loading>Button</Button>
      </div>
      <div>
        <div className="mb-2 text-sm font-medium">Disabled</div>
        <Button variant="primary" size="m" disabled>Button</Button>
      </div>
    </div>
  ),
  argTypes: { variant: { control: false }, size: { control: false } }
}
