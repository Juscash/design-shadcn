import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const textareaVariants = cva(
  "w-full resize-y rounded-[8px] border border-[var(--neutral-300)] bg-[var(--neutral-50)] px-2 py-2 text-[16px] leading-[1.2] text-[var(--neutral-800)] placeholder:text-[var(--neutral-500)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--neutral-300)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:text-[var(--neutral-400)] disabled:placeholder:text-[var(--neutral-400)]",
  {
    variants: {
      size: {
        m: "min-h-[76px]",
      },
    },
    defaultVariants: {
      size: "m",
    },
  },
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string
  helperText?: string
  state?: "default" | "focus" | "error" | "error focus" | "disabled"
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      size,
      label,
      helperText,
      state = "default",
      error,
      disabled,
      ...props
    },
    ref,
  ) => {
    const autoId = React.useId()
    const needsId = Boolean(label || helperText)
    const textareaId = needsId ? (props.id ?? autoId) : props.id
    const helperId = helperText ? `${textareaId}-helper` : undefined

    const isDisabled = disabled || state === "disabled"
    const hasError = !isDisabled && (error || state === "error" || state === "error focus")
    const isFocused = state === "focus" || state === "error focus"

    const stateClass = cn(
      hasError && "border-[var(--feedback-red-500)]",
      hasError && "focus-visible:ring-[rgba(210,25,11,0.4)]",
      isFocused &&
        (hasError
          ? "ring-[3px] ring-[rgba(210,25,11,0.4)] ring-offset-0"
          : "ring-[3px] ring-[var(--neutral-300,#d4d4d4)] ring-offset-0"),
    )

    const labelClass = cn(
      "text-[16px] font-normal leading-[1.2] text-[var(--neutral-800)]",
      isDisabled && "text-[var(--neutral-400)]",
    )

    const helperClass = cn(
      "text-[13px] font-normal leading-[1.2] text-[var(--neutral-500)]",
      hasError && "text-[var(--feedback-red-500)]",
    )

    return (
      <div className="flex flex-col gap-2">
        {label ? (
          <label className={labelClass} htmlFor={textareaId}>
            {label}
          </label>
        ) : null}
        <textarea
          ref={ref}
          className={cn(textareaVariants({ size, className }), stateClass)}
          id={textareaId}
          aria-describedby={helperId}
          data-invalid={hasError ? true : undefined}
          aria-invalid={hasError || undefined}
          disabled={isDisabled}
          {...props}
        />
        {helperText ? (
          <p className={helperClass} id={helperId}>
            {helperText}
          </p>
        ) : null}
      </div>
    )
  },
)

Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
