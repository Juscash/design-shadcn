import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup, RadioGroupItem } from "./radio";

const meta = {
  title: "Components/Radio",
  component: RadioGroupItem,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["m", "s"],
    },
    state: {
      control: "select",
      options: ["default", "focus", "error", "error focus", "disabled"],
    },
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof RadioGroupItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const checkedStates = [
  { id: "unchecked", label: "Not checked", value: "none" },
  { id: "checked", label: "Checked", value: "checked" },
] as const;

const stateRows = [
  { id: "default", label: "Default", state: "default" },
  { id: "focus", label: "Focus", state: "focus" },
  { id: "error", label: "Error", state: "error" },
  { id: "error-focus", label: "Error Focus", state: "error focus" },
  { id: "disabled", label: "Disabled", state: "disabled" },
] as const;

export const Default: Story = {
  render: () => (
    <RadioGroup>
      <RadioGroupItem value="one" label="Radio" />
    </RadioGroup>
  ),
};

export const Matrix: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 pl-[120px] text-xs text-muted-foreground">
        {checkedStates.map((item) => (
          <div className="w-[120px] text-center" key={item.id}>
            {item.label}
          </div>
        ))}
      </div>
      {stateRows.map((row) => (
        <div className="flex items-center gap-6" key={row.id}>
          <div className="w-[120px] text-xs text-muted-foreground">{row.label}</div>
          {checkedStates.map((item) => (
            <div className="w-[120px] flex justify-center" key={`${row.id}-${item.id}`}>
              <RadioGroup value={item.value === "checked" ? "one" : "none"}>
                <RadioGroupItem
                  value="one"
                  state={row.state}
                  disabled={row.state === "disabled"}
                />
              </RadioGroup>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  argTypes: { size: { control: false }, state: { control: false } },
};

export const RadioGroupInline: Story = {
  render: () => (
    <RadioGroup className="flex items-center gap-2">
      <RadioGroupItem value="one" label="Label" />
    </RadioGroup>
  ),
  argTypes: { size: { control: false }, state: { control: false } },
};

export const RadioGroupList: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="text-[13px] text-[var(--neutral-800)]">Label</div>
      <RadioGroup className="flex flex-col gap-2">
        <RadioGroupItem value="one" label="Label" />
        <RadioGroupItem value="two" label="Label" />
        <RadioGroupItem value="three" label="Label" />
        <RadioGroupItem value="four" label="Label" />
      </RadioGroup>
    </div>
  ),
  argTypes: { size: { control: false }, state: { control: false } },
};

export const RichRadioGroup: Story = {
  render: () => (
    <RadioGroup className="flex flex-col gap-4" defaultValue="checked">
      <label className="flex items-start gap-2">
        <RadioGroupItem className="mt-[2.5px]" value="unchecked" />
        <div className="flex flex-col leading-[1.2]">
          <span className="text-[13px] text-[var(--neutral-800)]">Label</span>
          <span className="text-[10px] text-[var(--neutral-500)]">Secondary text</span>
        </div>
      </label>
      <label className="flex items-start gap-2">
        <RadioGroupItem className="mt-[2.5px]" value="checked" />
        <div className="flex flex-col leading-[1.2]">
          <span className="text-[13px] text-[var(--neutral-800)]">Label</span>
          <span className="text-[10px] text-[var(--neutral-500)]">Secondary text</span>
        </div>
      </label>
    </RadioGroup>
  ),
  argTypes: { size: { control: false }, state: { control: false } },
};
