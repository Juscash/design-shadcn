import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const checkboxVariants = cva(
  "grid place-content-center shrink-0 rounded-[4px] border bg-[var(--neutral-50)] text-[var(--neutral-50)] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--neutral-300)] focus-visible:ring-offset-0 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
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

export interface CheckboxProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      "checked" | "defaultChecked" | "onCheckedChange"
    >,
    VariantProps<typeof checkboxVariants> {
  checked?: boolean | "indeterminate";
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  label?: string;
  state?: "default" | "focus" | "error" | "error focus" | "disabled";
  error?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      size,
      state = "default",
      checked,
      onCheckedChange,
      label,
      error,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = React.useState<
      boolean | "indeterminate"
    >(checked ?? false);

    React.useEffect(() => {
      if (checked !== undefined) {
        setInternalChecked(checked);
      }
    }, [checked]);

    const handleCheckedChange = (nextChecked: boolean | "indeterminate") => {
      setInternalChecked(nextChecked);
      onCheckedChange?.(nextChecked);
    };

    const isChecked = internalChecked === true;
    const isIndeterminate = internalChecked === "indeterminate";
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
      isChecked || isIndeterminate
        ? `bg-[var${
            hasError
              ? "(--feedback-red-500,#d2190b)"
              : "(--button-brand-default)"
          }] `
        : "",
      isDisabled &&
        (isChecked || isIndeterminate
          ? "bg-[var(--button-brand-disabled)] border-[var(--button-brand-disabled)] text-[var(--neutral-400)]"
          : "border-[var(--neutral-200)] bg-[var(--neutral-50)] text-[var(--neutral-400)]"),
    );

    const Wrapper: React.ElementType = label ? "label" : "div";

    return (
      <Wrapper
        className={cn(
          "flex items-center gap-2",
          label && (isDisabled ? "cursor-not-allowed" : "cursor-pointer"),
        )}
      >
        <CheckboxPrimitive.Root
          ref={ref}
          checked={internalChecked}
          onCheckedChange={handleCheckedChange}
          className={cn(checkboxVariants({ size, className }), stateClass)}
          data-invalid={hasError ? true : undefined}
          aria-invalid={hasError || undefined}
          aria-checked={isIndeterminate ? "mixed" : undefined}
          disabled={isDisabled}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="grid place-content-center text-current">
            {isIndeterminate ? (
              <Minus className="h-[10px] w-[10px]" />
            ) : isChecked ? (
              <Check className="h-[10px] w-[10px]" />
            ) : null}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <span
            className={cn(
              "text-[13px] font-normal text-[var(--neutral-800)]",
              isDisabled && "text-[var(--neutral-400)]",
            )}
          >
            {label}
          </span>
        )}
      </Wrapper>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
