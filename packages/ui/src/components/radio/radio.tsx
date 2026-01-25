import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const radioGroupVariants = cva("grid gap-2");

const radioItemVariants = cva(
  "relative shrink-0 rounded-full border bg-[var(--neutral-50)] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--neutral-300)] focus-visible:ring-offset-0 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
  {
    variants: {
      size: {
        m: "h-4 w-4",
        s: "h-[14px] w-[14px]",
      },
    },
    defaultVariants: {
      size: "m",
    },
  },
);

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn(radioGroupVariants(), className)}
    {...props}
  />
));

RadioGroup.displayName = "RadioGroup";

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioItemVariants> {
  label?: string;
  state?: "default" | "focus" | "error" | "error focus" | "disabled";
  error?: boolean;
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      className,
      size,
      label,
      state = "default",
      error,
      disabled,
      ...props
    },
    ref,
  ) => {
    const hasError = error || state === "error" || state === "error focus";
    const isDisabled = disabled || state === "disabled";
    const isFocused = state === "focus" || state === "error focus";

    const stateClass = cn(
      hasError
        ? "border-[var(--feedback-red-500,#d2190b)]"
        : "border-[var(--neutral-300)]",
      isFocused &&
        (hasError
          ? "ring-[3px] ring-[rgba(210,25,11,0.4)] ring-offset-0"
          : "ring-[3px] ring-[var(--neutral-300)] ring-offset-0"),
      isDisabled && "border-[var(--neutral-200)] bg-[var(--neutral-50)]",
    );

    const indicatorClass = cn(
      "rounded-full",
      size === "s" ? "h-[6px] w-[6px]" : "h-2 w-2",
      hasError
        ? "bg-[var(--feedback-red-500,#d2190b)]"
        : isDisabled
          ? "bg-[var(--button-brand-disabled)]"
          : "bg-[var(--button-brand-default)]",
    );

    const Wrapper: React.ElementType = label ? "label" : "div";

    return (
      <Wrapper
        className={cn(
          "flex items-center gap-2",
          label && (isDisabled ? "cursor-not-allowed" : "cursor-pointer"),
        )}
      >
        <RadioGroupPrimitive.Item
          ref={ref}
          className={cn(radioItemVariants({ size, className }), stateClass)}
          data-invalid={hasError ? true : undefined}
          aria-invalid={hasError || undefined}
          disabled={isDisabled}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <div className={indicatorClass} />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label ? (
          <span
            className={cn(
              "text-[13px] font-normal text-[var(--neutral-800)]",
              isDisabled && "text-[var(--neutral-400)]",
            )}
          >
            {label}
          </span>
        ) : null}
      </Wrapper>
    );
  },
);

RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem, radioGroupVariants, radioItemVariants };
