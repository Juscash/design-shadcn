import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Textarea } from "./textarea"

describe("Textarea", () => {
  it("renders label and helper text", () => {
    render(<Textarea label="Label" helperText="Helper text" />)
    expect(screen.getByText("Label")).toBeDefined()
    expect(screen.getByText("Helper text")).toBeDefined()
  })

  it("renders placeholder", () => {
    render(<Textarea placeholder="Type your message here." />)
    expect(screen.getByPlaceholderText("Type your message here.")).toBeDefined()
  })

  it("supports error state", () => {
    render(<Textarea state="error" />)
    const textarea = screen.getByRole("textbox")
    expect(textarea.className).toContain("border-[var(--feedback-red-500)]")
  })

  it("supports focus state", () => {
    render(<Textarea state="focus" />)
    const textarea = screen.getByRole("textbox")
    expect(textarea.className).toContain("ring-[3px]")
  })

  it("can be disabled", () => {
    render(<Textarea state="disabled" />)
    const textarea = screen.getByRole("textbox")
    expect(textarea.getAttribute("disabled")).toBeDefined()
  })
})
