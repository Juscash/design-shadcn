import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const typographyVariants = cva("font-normal font-sans text-[var(--neutral-800)]", {
  variants: {
    variant: {
      "heading-1": "text-heading-1",
      "heading-2": "text-heading-2",
      "heading-3": "text-heading-3",
      "heading-4": "text-heading-4",
      "heading-5": "text-heading-5",
      "heading-6": "text-heading-6",
      "body-1": "text-body-1",
      "body-2": "text-body-2",
      "caption-1": "text-caption-1",
    },
    tone: {
      default: "text-[var(--neutral-800)]",
      soft: "text-[var(--neutral-500)]",
      muted: "text-[var(--neutral-70)]",
      disabled: "text-[var(--neutral-400)]",
    },
  },
  defaultVariants: {
    variant: "body-1",
    tone: "default",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, tone, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "p"
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, tone, className }))}
        {...props}
      />
    )
  },
)

Typography.displayName = "Typography"

export { Typography, typographyVariants }
