import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const textFieldVariants = cva(
  "flex w-full items-center gap-2 border bg-[var(--neutral-50)] px-3 py-2 transition-colors focus-within:outline-none",
  {
    variants: {
      size: {
        l: "h-[40px] min-h-[36px] rounded-[8px]",
        m: "h-[36px] min-h-[36px] rounded-[8px]",
        s: "h-[32px] min-h-[32px] rounded-[8px]",
        xs: "h-[24px] min-h-[24px] rounded-[4px]",
      },
    },
    defaultVariants: {
      size: "m",
    },
  },
)

export type TextFieldState =
  | "empty"
  | "placeholder"
  | "value"
  | "focus"
  | "error"
  | "error focus"
  | "disabled"

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof textFieldVariants> {
  label?: string
  helperText?: string
  errorText?: string
  leftDecoration?: React.ReactNode
  rightDecoration?: React.ReactNode
  state?: TextFieldState
  inputClassName?: string
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      inputClassName,
      label,
      helperText,
      errorText,
      leftDecoration,
      rightDecoration,
      size,
      state,
      disabled,
      id,
      required,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    const helperId = helperText || errorText ? `${inputId}-helper` : undefined

    const hasError = state === "error" || state === "error focus" || Boolean(errorText)
    const isDisabled = state === "disabled" || Boolean(disabled)
    const isFocused = state === "focus" || state === "error focus"

    const focusClass = hasError
      ? "focus-within:ring-[3px] focus-within:ring-[rgba(210,25,11,0.4)] focus-within:ring-offset-0"
      : "focus-within:ring-[3px] focus-within:ring-[var(--neutral-300)] focus-within:ring-offset-0"

    const forcedFocusClass = isFocused
      ? hasError
        ? "ring-[3px] ring-[rgba(210,25,11,0.4)] ring-offset-0"
        : "ring-[3px] ring-[var(--neutral-300)] ring-offset-0"
      : ""

    const borderClass = hasError
      ? "border-[var(--feedback-red-500)]"
      : isDisabled
        ? "border-[var(--neutral-200)]"
        : "border-[var(--neutral-300)]"

    const inputTextClass = cn(
      "flex-1 bg-transparent outline-none placeholder:text-[var(--neutral-500)]",
      size === "xs" ? "text-[13px] leading-[1.2]" : "text-[16px] leading-[1.2]",
      isDisabled
        ? "text-[var(--neutral-400)] placeholder:text-[var(--neutral-400)]"
        : "text-[var(--neutral-800)]",
      state === "placeholder" && !isDisabled ? "text-[var(--neutral-500)]" : "",
      inputClassName,
    )

    const helperTextColor = hasError
      ? "text-[var(--feedback-red-500)]"
      : "text-[var(--neutral-500)]"

    return (
      <div className={cn("flex w-full flex-col gap-2", className)}>
        {label ? (
          <label
            htmlFor={inputId}
            className={cn(
              "text-[16px] font-normal leading-[1.2] text-[var(--neutral-800)]",
              isDisabled && "text-[var(--neutral-400)]",
            )}
          >
            {label}
            {required ? <span className="text-[var(--feedback-red-500)]">*</span> : null}
          </label>
        ) : null}
        <div
          className={cn(
            textFieldVariants({ size }),
            borderClass,
            focusClass,
            forcedFocusClass,
            isDisabled && "cursor-not-allowed",
          )}
        >
          {leftDecoration ? (
            <span
              className={cn(
                "flex size-5 items-center justify-center text-[var(--neutral-800)]",
                isDisabled && "text-[var(--neutral-400)]",
              )}
            >
              {leftDecoration}
            </span>
          ) : null}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={hasError || undefined}
            aria-describedby={helperId}
            disabled={isDisabled}
            className={inputTextClass}
            required={required}
            {...props}
          />
          {rightDecoration ? (
            <span
              className={cn(
                "flex size-5 items-center justify-center text-[var(--neutral-800)]",
                isDisabled && "text-[var(--neutral-400)]",
              )}
            >
              {rightDecoration}
            </span>
          ) : null}
        </div>
        {helperId ? (
          <p id={helperId} className={cn("text-[13px] font-normal leading-[1.2]", helperTextColor)}>
            {hasError ? errorText : helperText}
          </p>
        ) : null}
      </div>
    )
  },
)

TextField.displayName = "TextField"

export { TextField, textFieldVariants }
