import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const checkboxVariants = cva(
  "inline-flex items-center justify-center border border-[#d4d4d4] bg-[#fafafa] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        m: "h-[16px] w-[16px] rounded-[4px]",
        s: "h-[14px] w-[14px] rounded-[4px]",
      },
      state: {
        default: "border-[#d4d4d4]",
        focus: "ring-2 ring-ring ring-offset-2",
        error: "border-[#d2190b]",
        disabled: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "m",
      state: "default",
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "checked">,
    VariantProps<typeof checkboxVariants> {
  checked?: boolean | "indeterminate";
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  label?: string;
  error?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, size, state, checked, onCheckedChange, label, error, disabled, ...props },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState<
      boolean | "indeterminate"
    >(checked || false);

    React.useEffect(() => {
      if (checked !== undefined) {
        setInternalChecked(checked);
      }
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      setInternalChecked(newChecked);
      if (onCheckedChange) {
        onCheckedChange(newChecked);
      }
    };

    // Determine the effective state
    const effectiveState = React.useMemo(() => {
      if (disabled) return "disabled";
      if (error) return "error";
      return state || "default";
    }, [disabled, error, state]);

    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className={cn(
            checkboxVariants({ size, state: effectiveState, className }),
            "appearance-none relative cursor-pointer"
          )}
          ref={ref}
          checked={internalChecked === "indeterminate" ? false : internalChecked}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={error}
          {...props}
        />
        {internalChecked === "indeterminate" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[10px] h-[2px] bg-[#262626] rounded-sm"></div>
          </div>
        )}
        {internalChecked === true && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-[12px] h-[12px] text-[#008633]"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 3.5L5.25004 9.91667L2.33337 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        {label && (
          <label
            className={cn(
              "text-sm font-medium text-[#262626]",
              disabled ? "text-[#a3a3a3] cursor-not-allowed" : "cursor-pointer"
            )}
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };