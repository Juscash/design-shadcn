import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"

import { TextField } from "./text-field"

describe("TextField", () => {
  it("renders label and input", () => {
    render(<TextField label="Name" />)
    expect(screen.getByText("Name")).toBeTruthy()
    expect(screen.getByRole("textbox")).toBeTruthy()
  })

  it("renders size variants", () => {
    render(<TextField size="xs" label="XS" />)
    const input = screen.getByRole("textbox")
    expect(input.parentElement?.className).toContain("h-[24px]")
  })

  it("renders focus state class", () => {
    render(<TextField state="focus" label="Focus" defaultValue="Value" />)
    const input = screen.getByRole("textbox")
    expect(input.parentElement?.className).toContain("ring-[3px]")
  })

  it("renders error helper text and aria-invalid", () => {
    render(<TextField label="Email" errorText="Helper text" />)
    const input = screen.getByRole("textbox")
    expect(input.getAttribute("aria-invalid")).toBe("true")
    const helper = screen.getByText("Helper text")
    expect(helper.className).toContain("text-[var(--feedback-red-500)]")
  })

  it("can be disabled", () => {
    render(<TextField label="Disabled" disabled />)
    const input = screen.getByRole("textbox") as HTMLInputElement
    expect(input.disabled).toBe(true)
  })
})
