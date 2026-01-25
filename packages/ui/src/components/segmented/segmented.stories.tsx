import type { Meta, StoryObj } from "@storybook/react"
import { Heart } from "lucide-react"

import { Segmented, SegmentedItem } from "./segmented"

const meta = {
  title: "Components/Segmented",
  component: Segmented,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["m", "s", "xs"],
    },
  },
} satisfies Meta<typeof Segmented>

export default meta
type Story = StoryObj<typeof meta>

const sizes = ["m", "s", "xs"] as const

const hoverClass = "bg-[var(--neutral-100)]"
const focusClass = "ring-[3px] ring-[var(--neutral-300)] ring-offset-0"

export const Default: Story = {
  render: () => (
    <Segmented defaultValue="one">
      <SegmentedItem value="one" icon={<Heart />} label="Label" />
      <SegmentedItem value="two" icon={<Heart />} label="Label" />
      <SegmentedItem value="three" icon={<Heart />} label="Label" />
    </Segmented>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {sizes.map((size) => (
        <Segmented key={size} size={size} defaultValue="one">
          <SegmentedItem value="one" icon={<Heart />} label="Label" />
          <SegmentedItem value="two" icon={<Heart />} label="Label" />
          <SegmentedItem value="three" icon={<Heart />} label="Label" />
          <SegmentedItem value="four" icon={<Heart />} label="Label" />
        </Segmented>
      ))}
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div className="flex flex-col gap-4" key={size}>
          <div className="text-sm font-medium uppercase">{size}</div>
          <div className="flex flex-col gap-3">
            <Segmented size={size}>
              <SegmentedItem value="inactive" icon={<Heart />} label="Label" />
            </Segmented>
            <Segmented size={size}>
              <SegmentedItem
                value="inactive-hover"
                icon={<Heart />}
                label="Label"
                className={hoverClass}
              />
            </Segmented>
            <Segmented size={size}>
              <SegmentedItem
                value="inactive-focus"
                icon={<Heart />}
                label="Label"
                className={focusClass}
              />
            </Segmented>
            <Segmented size={size} defaultValue="active">
              <SegmentedItem value="active" icon={<Heart />} label="Label" />
            </Segmented>
            <Segmented size={size} defaultValue="active-focus">
              <SegmentedItem
                value="active-focus"
                icon={<Heart />}
                label="Label"
                className={focusClass}
              />
            </Segmented>
            <Segmented size={size}>
              <SegmentedItem value="disabled" icon={<Heart />} label="Label" disabled />
            </Segmented>
          </div>
        </div>
      ))}
    </div>
  ),
}

export const Examples: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Segmented defaultValue="all">
        <SegmentedItem value="all" label="Todos" />
        <SegmentedItem value="active" label="Ativos" />
        <SegmentedItem value="paused" label="Pausados" />
      </Segmented>
      <Segmented defaultValue="one" size="s">
        <SegmentedItem value="one" icon={<Heart />} label="Label" counter={1} />
        <SegmentedItem value="two" icon={<Heart />} label="Label" />
        <SegmentedItem value="three" icon={<Heart />} label="Label" />
      </Segmented>
      <Segmented defaultValue="favorite" size="xs">
        <SegmentedItem value="favorite" icon={<Heart />} showLabel={false} />
        <SegmentedItem value="recent" icon={<Heart />} showLabel={false} />
        <SegmentedItem value="saved" icon={<Heart />} showLabel={false} />
      </Segmented>
    </div>
  ),
}
