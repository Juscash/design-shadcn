"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const segmentedGroupVariants = cva("inline-flex items-center", {
  variants: {
    size: {
      m: "gap-[8px]",
      s: "gap-[4px]",
      xs: "gap-[4px]",
    },
  },
  defaultVariants: {
    size: "m",
  },
});

const segmentedItemVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--neutral-300)] focus-visible:ring-offset-0 text-[var(--neutral-800)] hover:bg-[var(--neutral-100)] data-[state=on]:bg-[var(--neutral-50)] data-[state=on]:shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.1)] data-[state=on]:font-bold disabled:pointer-events-none disabled:text-[var(--neutral-400)] disabled:bg-[var(--neutral-50)] disabled:shadow-none",
  {
    variants: {
      size: {
        m: "min-h-[28px] min-w-[32px] px-[12px] py-[4px] gap-[8px] rounded-[8px] text-[13px] font-normal leading-[1.2]",
        s: "min-h-[24px] min-w-[29px] px-[12px] py-[4px] gap-[4px] rounded-[8px] text-[13px] font-normal leading-[1.2]",
        xs: "min-h-[16px] min-w-[20px] px-[8px] py-[4px] gap-[4px] rounded-[4px] text-[10px] font-normal leading-[1.2]",
      },
    },
    defaultVariants: {
      size: "m",
    },
  },
);

type SegmentedContextValue = VariantProps<typeof segmentedItemVariants>;

const SegmentedContext = React.createContext<SegmentedContextValue>({
  size: "m",
});

export interface SegmentedProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>,
      "type" | "value" | "defaultValue" | "onValueChange"
    >,
    VariantProps<typeof segmentedGroupVariants> {
  type?: "single";
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const Segmented = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  SegmentedProps
>(({ className, size, children, type = "single", ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    type={type}
    className={cn(segmentedGroupVariants({ size, className }))}
    {...props}
  >
    <SegmentedContext.Provider value={{ size }}>{children}</SegmentedContext.Provider>
  </ToggleGroupPrimitive.Root>
));

Segmented.displayName = "Segmented";

export interface SegmentedItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    VariantProps<typeof segmentedItemVariants> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  counter?: number | string;
  showIcon?: boolean;
  showLabel?: boolean;
}

const SegmentedItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  SegmentedItemProps
>(
  (
    {
      className,
      children,
      size,
      icon,
      label,
      counter,
      showIcon = true,
      showLabel = true,
      ...props
    },
    ref,
  ) => {
    const context = React.useContext(SegmentedContext);
    const resolvedSize = context.size || size || "m";

    const iconClassName = cn(
      "shrink-0 text-current",
      resolvedSize === "m" ? "size-[16px]" : "size-[12px]",
    );

    const defaultContent = (
      <>
        {showIcon && icon ? <span className={iconClassName}>{icon}</span> : null}
        {showLabel && label ? <span>{label}</span> : null}
        {counter !== undefined && counter !== null ? (
          <span className="inline-flex items-center justify-center h-[16px] min-w-[16px] px-[4px] rounded-full bg-[var(--feedback-red-500)] text-[var(--neutral-50)] text-[10px] leading-[1.2]">
            {counter}
          </span>
        ) : null}
      </>
    );

    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(
          segmentedItemVariants({ size: resolvedSize }),
          className,
        )}
        {...props}
      >
        {children ?? defaultContent}
      </ToggleGroupPrimitive.Item>
    );
  },
);

SegmentedItem.displayName = "SegmentedItem";

export { Segmented, SegmentedItem, segmentedGroupVariants, segmentedItemVariants };
