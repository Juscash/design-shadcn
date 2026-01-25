import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"

import { RadioGroup, RadioGroupItem } from "./radio"

describe("Radio", () => {
  it("renders radio with label", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="one" label="Accept terms" />
      </RadioGroup>,
    )
    expect(screen.getByText("Accept terms")).toBeDefined()
  })

  it("renders medium size correctly", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="one" size="m" />
      </RadioGroup>,
    )
    const radio = screen.getByRole("radio")
    expect(radio.className).toContain("h-4")
  })

  it("renders small size correctly", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="one" size="s" />
      </RadioGroup>,
    )
    const radio = screen.getByRole("radio")
    expect(radio.className).toContain("h-[14px]")
  })

  it("can be disabled", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="one" disabled />
      </RadioGroup>,
    )
    const radio = screen.getByRole("radio")
    expect(radio.getAttribute("data-disabled")).toBeDefined()
  })

  it("shows error state", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="one" error />
      </RadioGroup>,
    )
    const radio = screen.getByRole("radio")
    expect(radio.className).toContain("border-[var(--feedback-red-500,#d2190b)]")
  })

  it("handles checked state", () => {
    render(
      <RadioGroup value="one">
        <RadioGroupItem value="one" />
        <RadioGroupItem value="two" />
      </RadioGroup>,
    )
    const radio = screen.getAllByRole("radio")[0]
    expect(radio.getAttribute("data-state")).toBe("checked")
  })
})
