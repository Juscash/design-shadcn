import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-normal leading-[1.2] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-border focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--button-brand-default)] text-[hsl(var(--neutral-50))] hover:bg-[var(--button-brand-hover)] disabled:bg-[var(--button-brand-disabled)] disabled:text-[hsl(var(--neutral-400))]",
        secondary:
          "bg-[var(--button-secondary-default)] text-[hsl(var(--neutral-50))] hover:bg-[var(--button-secondary-hover)] disabled:bg-[var(--button-secondary-disabled)] disabled:text-[hsl(var(--neutral-400))]",
        neutral:
          "bg-[var(--button-neutral-default)] text-[hsl(var(--neutral-800))] hover:bg-[var(--button-neutral-hover)] hover:text-[hsl(var(--neutral-50))] disabled:bg-[var(--button-neutral-disabled)] disabled:text-[hsl(var(--neutral-400))]",
        destructive:
          "bg-[var(--button-destructive-default)] text-[hsl(var(--neutral-50))] hover:bg-[var(--button-destructive-hover)] disabled:bg-[var(--button-destructive-disabled)] disabled:text-[hsl(var(--neutral-400))]",
        outline:
          "border border-[hsl(var(--neutral-300))] bg-transparent text-[hsl(var(--neutral-800))] hover:bg-[hsl(var(--neutral-100))] disabled:border-[hsl(var(--neutral-200))] disabled:text-[hsl(var(--neutral-400))]",
        ghost:
          "bg-transparent text-[hsl(var(--neutral-800))] hover:bg-[hsl(var(--neutral-100))] disabled:text-[hsl(var(--neutral-400))]",
      },
      size: {
        m: "h-[36px] px-3 py-2 rounded-[8px] text-[13px]",
        s: "h-[32px] px-3 py-2 rounded-[8px] text-[13px]",
        xs: "h-[24px] px-2 py-1 rounded-[4px] text-[10px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "m",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading, asChild = false, disabled, children, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";
    const isDisabled = disabled || loading;
    return (
      <Component
        className={cn(
          buttonVariants({ variant, size, className }),
          loading ? "relative" : "",
        )}
        ref={ref}
        disabled={asChild ? undefined : isDisabled}
        aria-disabled={asChild && isDisabled ? true : undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-[13px] w-[13px] text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-0V8a8 8 0 00-8 0v4z"
              />
            </svg>
          </span>
        ) : (
          children
        )}
      </Component>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
