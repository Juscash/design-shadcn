import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Button } from "./button"

describe("Button", () => {
  it("renders button with text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button")).toHaveTextContent("Click me")
  })

  it("applies variant classes correctly", () => {
    const { container } = render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-destructive")
  })

  it("applies size classes correctly", () => {
    const { container } = render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("h-11")
  })

  it("can be disabled", () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })
})
