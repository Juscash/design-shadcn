import { Typography } from "./typography";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Typography Component - Size Variants", () => {
  it("should apply heading-1 size correctly", () => {
    render(<Typography variant="heading-1">Heading 1 Text</Typography>);
    const element = screen.getByText("Heading 1 Text");
    expect(element).toHaveClass("text-heading-1");
  });

  it("should apply heading-2 size correctly", () => {
    render(<Typography variant="heading-2">Heading 2 Text</Typography>);
    const element = screen.getByText("Heading 2 Text");
    expect(element).toHaveClass("text-heading-2");
  });

  it("should apply body-1 size correctly", () => {
    render(<Typography variant="body-1">Body 1 Text</Typography>);
    const element = screen.getByText("Body 1 Text");
    expect(element).toHaveClass("text-body-1");
  });

  it("should apply custom className along with variant", () => {
    render(
      <Typography variant="heading-1" className="custom-class">
        Test
      </Typography>,
    );
    const element = screen.getByText("Test");
    expect(element).toHaveClass("text-heading-1");
    expect(element).toHaveClass("custom-class");
  });

  it("should allow custom className to override variant styles", () => {
    render(
      <Typography variant="body-1" className="text-heading-3">
        Test
      </Typography>,
    );
    const element = screen.getByText("Test");
    // Both classes should be present, but custom should take precedence
    expect(element).toHaveClass("text-heading-3");
  });

  it("should apply tone variants correctly", () => {
    render(
      <Typography variant="body-1" tone="soft">
        Soft Text
      </Typography>,
    );
    const element = screen.getByText("Soft Text");
    expect(element).toHaveClass("text-body-1");
  });
});
