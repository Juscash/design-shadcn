import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Segmented, SegmentedItem } from "./segmented";

describe("Segmented", () => {
  it("renders item with label", () => {
    render(
      <Segmented>
        <SegmentedItem value="one" label="Label" />
      </Segmented>,
    );

    expect(screen.getByText("Label")).toBeDefined();
  });

  it("applies size classes", () => {
    render(
      <Segmented size="xs">
        <SegmentedItem value="one" label="Label" />
      </Segmented>,
    );

    const button = screen.getByRole("radio");
    expect(button.className).toContain("min-h-[16px]");
  });

  it("marks selected item", () => {
    render(
      <Segmented value="one">
        <SegmentedItem value="one" label="Label" />
        <SegmentedItem value="two" label="Label" />
      </Segmented>,
    );

    const button = screen.getAllByRole("radio")[0];
    expect(button.getAttribute("data-state")).toBe("on");
  });

  it("supports disabled state", () => {
    render(
      <Segmented>
        <SegmentedItem value="one" label="Label" disabled />
      </Segmented>,
    );

    const button = screen.getByRole("radio");
    expect(button.getAttribute("data-disabled")).toBeDefined();
  });
});
