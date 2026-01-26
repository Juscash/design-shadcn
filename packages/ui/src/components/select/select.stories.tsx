import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  type SelectState,
} from "./select";

const meta = {
  title: "Components/Select",
  component: SelectTrigger,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["l", "m", "s", "xs"],
    },
    state: {
      control: "select",
      options: ["placeholder", "value", "focus", "error", "disabled"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof SelectTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

type Size = "l" | "m" | "s" | "xs";

const sizes: Size[] = ["l", "m", "s", "xs"];
const states: SelectState[] = ["placeholder", "value", "focus", "error", "disabled"];

const stateLabels: Record<SelectState, string> = {
  placeholder: "Placeholder",
  value: "Value",
  focus: "Focus",
  error: "Error",
  disabled: "Disabled",
};

const SelectFieldPreview = ({ size, state }: { size: Size; state: SelectState }) => {
  const id = React.useId();
  const isPlaceholder = state === "placeholder" || state === "disabled";
  const hasValue = state === "value" || state === "focus" || state === "error";
  const isDisabled = state === "disabled";
  const isError = state === "error";

  const helperTextColor = isError
    ? "text-[var(--feedback-red-500)]"
    : "text-[var(--neutral-500)]";

  return (
    <div className="flex w-[260px] flex-col gap-2">
      <label
        htmlFor={id}
        className={
          isDisabled
            ? "text-[16px] font-normal leading-[1.2] text-[var(--neutral-400)]"
            : "text-[16px] font-normal leading-[1.2] text-[var(--neutral-800)]"
        }
      >
        Label
      </label>
      <Select defaultValue={hasValue ? "option-1" : undefined} disabled={isDisabled}>
        <SelectTrigger id={id} size={size} state={state}>
          <SelectValue placeholder={isPlaceholder ? "Selecione um item" : undefined} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="option-1">Option 1</SelectItem>
            <SelectItem value="option-2">Option 2</SelectItem>
            <SelectItem value="option-3">Option 3</SelectItem>
            <SelectItem value="option-4">Option 4</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className={`text-[13px] font-normal leading-[1.2] ${helperTextColor}`}>
        Helper text
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <div className="w-[260px]">
      <Select defaultValue="option-1">
        <SelectTrigger>
          <SelectValue placeholder="Selecione um item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group label</SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
            <SelectItem value="option-2">Option 2</SelectItem>
            <SelectItem value="option-3">Option 3</SelectItem>
            <SelectItem value="option-4">Option 4</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Matrix: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div className="flex flex-col gap-4" key={size}>
          <div className="text-sm font-medium uppercase">{size}</div>
          {states.map((state) => (
            <div className="flex items-center gap-4" key={`${size}-${state}`}>
              <div className="w-[120px] text-xs text-[var(--neutral-500)]">
                {stateLabels[state]}
              </div>
              <SelectFieldPreview size={size} state={state} />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
