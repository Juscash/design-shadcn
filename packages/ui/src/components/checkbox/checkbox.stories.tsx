import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
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
    checked: {
      control: "select",
      options: [false, true, "indeterminate"],
    },
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

type CheckedState = false | true | "indeterminate";

const checkedStates: { id: string; value: CheckedState; label: string }[] = [
  { id: "unchecked", value: false, label: "Not checked" },
  { id: "checked", value: true, label: "Checked" },
  { id: "indeterminate", value: "indeterminate", label: "Indeterminate" },
];

const stateRows = [
  { id: "default", label: "Default", state: "default" },
  { id: "focus", label: "Focus", state: "focus" },
  { id: "error", label: "Error", state: "error" },
  { id: "error-focus", label: "Error Focus", state: "error focus" },
  { id: "disabled", label: "Disabled", state: "disabled" },
] as const;

export const Default: Story = {
  args: {
    size: "m",
    state: "default",
    label: "Checkbox",
  },
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
              <Checkbox
                checked={item.value}
                state={row.state}
                disabled={row.state === "disabled"}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  argTypes: { size: { control: false }, state: { control: false } },
};

export const CheckboxGroupInline: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox label="Label" />
    </div>
  ),
  argTypes: { size: { control: false }, state: { control: false } },
};

export const CheckboxGroupList: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="text-[13px] text-[var(--neutral-800)]">Label</div>
      <div className="flex flex-col gap-2">
        <Checkbox label="Label" />
        <Checkbox label="Label" />
        <Checkbox label="Label" />
        <Checkbox label="Label" />
      </div>
    </div>
  ),
  argTypes: { size: { control: false }, state: { control: false } },
};

export const RichCheckboxGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <label className="flex items-start gap-2">
        <Checkbox className="mt-[2.5px]" />
        <div className="flex flex-col leading-[1.2]">
          <span className="text-[13px] text-[var(--neutral-800)]">Label</span>
          <span className="text-[10px] text-[var(--neutral-500)]">Secondary text</span>
        </div>
      </label>
      <label className="flex items-start gap-2">
        <Checkbox className="mt-[2.5px]" checked />
        <div className="flex flex-col leading-[1.2]">
          <span className="text-[13px] text-[var(--neutral-800)]">Label</span>
          <span className="text-[10px] text-[var(--neutral-500)]">Secondary text</span>
        </div>
      </label>
    </div>
  ),
  argTypes: { size: { control: false }, state: { control: false } },
};
