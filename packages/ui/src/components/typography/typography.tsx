import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const typographyVariants = cva("font-normal font-sans", {
  variants: {
    variant: {
      "heading-1": "text-[61px] leading-[1.2]",
      "heading-2": "text-[49px] leading-[1.2]",
      "heading-3": "text-[39px] leading-[1.2]",
      "heading-4": "text-[31px] leading-[1.2]",
      "heading-5": "text-[25px] leading-[1.2]",
      "heading-6": "text-[20px] leading-[1.2]",
      "body-1": "text-[16px] leading-[1.2]",
      "body-2": "text-[13px] leading-[1.2]",
      "caption-1": "text-[10px] leading-[1.2]",
    },
    tone: {
      default: "text-neutral-800",
      soft: "text-neutral-500",
      muted: "text-neutral-70",
      disabled: "text-neutral-400",
    },
  },
  defaultVariants: {
    variant: "body-1",
    tone: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, tone, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "p";
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, tone, className }))}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
