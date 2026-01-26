import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"

import { Typography } from "./typography"

describe("Typography", () => {
  it("renders default body text", () => {
    render(<Typography>Texto</Typography>)
    const text = screen.getByText("Texto")
    expect(text.className).toContain("text-body-1")
  })

  it("renders heading variant", () => {
    render(<Typography variant="heading-3">Heading</Typography>)
    const text = screen.getByText("Heading")
    expect(text.className).toContain("text-heading-3")
  })
})
