import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-[#008633] text-white hover:bg-[#005c12] disabled:bg-[#d4d4d4]",
        secondary:
          "bg-[#0d4897] text-white hover:bg-[#093671] disabled:bg-[#d4d4d4]",
        neutral:
          "bg-[#e5e5e5] text-[#262626] hover:bg-[#a3a3a3] hover:text-white disabled:bg-[#d4d4d4] disabled:text-[#a3a3a3]",
        destructive:
          "bg-[#d2190b] text-white hover:bg-[#9d231c] disabled:bg-[#d4d4d4]",
        outline:
          "border border-[#d4d4d4] bg-transparent hover:bg-[#e5e5e5] hover:text-[#262626] disabled:border-[#e5e5e5] disabled:text-[#a3a3a3]",
        ghost:
          "bg-transparent hover:bg-[#e5e5e5] hover:text-[#262626] disabled:text-[#a3a3a3]",
      },
      size: {
        m: "h-[36px] px-3 py-2 rounded-[8px]",
        s: "h-[32px] px-3 py-2 rounded-[8px] text-xs",
        xs: "h-[24px] px-2 py-1 rounded-[4px] text-xs",
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
    { className, variant, size, loading, disabled, children, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          loading ? "relative" : "",
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-4 w-4 text-current"
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
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
