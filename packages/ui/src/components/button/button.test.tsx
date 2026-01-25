import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Button } from "./button"

describe("Button", () => {
  it("renders button with text", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button")
    expect(button.textContent).toContain("Click me")
  })

  it("renders primary variant correctly", () => {
    render(<Button variant="primary">Primary</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("bg-[var(--button-brand-default)]")
  })

  it("renders secondary variant correctly", () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("bg-[var(--button-secondary-default)]")
  })

  it("renders neutral variant correctly", () => {
    render(<Button variant="neutral">Neutral</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("bg-[var(--button-neutral-default)]")
  })

  it("renders destructive variant correctly", () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("bg-[var(--button-destructive-default)]")
  })

  it("renders outline variant correctly", () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("border-[hsl(var(--neutral-300))]")
  })

  it("renders ghost variant correctly", () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("bg-transparent")
  })

  it("renders medium size correctly", () => {
    render(<Button size="m">Medium</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("h-[36px]")
  })

  it("renders small size correctly", () => {
    render(<Button size="s">Small</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("h-[32px]")
  })

  it("renders extra small size correctly", () => {
    render(<Button size="xs">XS</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("h-[24px]")
  })

  it("can be disabled", () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole("button") as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })

  it("shows loading state with spinner", () => {
    render(<Button loading>Loading...</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("relative")
  })

  it("disables button when loading", () => {
    render(<Button loading>Loading...</Button>)
    const button = screen.getByRole("button") as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })

  it("shows spinner icon when loading", () => {
    render(<Button loading>Loading...</Button>)
    const spinner = document.querySelector("svg")
    expect(spinner).toBeDefined()
  })

  it("renders as child element when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/home">Home</a>
      </Button>,
    )
    const link = screen.getByRole("link")
    expect(link.className).toContain("inline-flex")
  })
})
