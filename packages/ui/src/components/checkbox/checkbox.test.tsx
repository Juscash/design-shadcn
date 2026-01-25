import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Checkbox } from "./checkbox"

describe("Checkbox", () => {
  it("renders checkbox with label", () => {
    render(<Checkbox label="Accept terms" />)
    expect(screen.getByText("Accept terms")).toBeDefined()
  })

  it("renders medium size correctly", () => {
    render(<Checkbox size="m" />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox.className).toContain("h-4")
  })

  it("renders small size correctly", () => {
    render(<Checkbox size="s" />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox.className).toContain("h-[14px]")
  })

  it("can be disabled", () => {
    render(<Checkbox disabled />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox.getAttribute("data-disabled")).toBeDefined()
  })

  it("shows error state", () => {
    render(<Checkbox error />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox.className).toContain("border-[var(--feedback-red-500,#d2190b)]")
  })

  it("handles checked state", () => {
    render(<Checkbox checked />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox.getAttribute("data-state")).toBe("checked")
  })

  it("handles indeterminate state", () => {
    render(<Checkbox checked="indeterminate" />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox.getAttribute("aria-checked")).toBe("mixed")
  })
})
