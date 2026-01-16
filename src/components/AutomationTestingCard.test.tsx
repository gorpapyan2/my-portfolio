import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { Code2 } from "lucide-react";
import { AutomationTestingCard } from "./AutomationTestingCard";

const baseProps = {
  icon: Code2,
  category: "Testing",
  title: "Automation Testing",
  description: "Framework-first approach to robust UI/API automation with traceable results.",
  tags: ["Playwright", "PyTest"],
  proficiency: 90,
  details: [
    "Playwright (TypeScript): E2E + integration tests with page objects and fixtures.",
    "PyTest: Fast, modular automation for API layers.",
  ],
  impactDescription: "Shipped suites integrated with CI/CD; regression time reduced.",
};

describe("AutomationTestingCard", () => {
  it("renders heading, progress bar, and value output", () => {
    render(<AutomationTestingCard {...baseProps} />);

    expect(screen.getByRole("heading", { name: "Automation Testing" })).toBeInTheDocument();

    const progress = screen.getByRole("progressbar", { name: /proficiency level/i });
    expect(progress).toHaveAttribute("aria-valuenow", "90");

    const output = screen.getByText("90%");
    expect(output.tagName.toLowerCase()).toBe("output");
    expect(progress).toHaveAttribute("aria-describedby", output.getAttribute("id"));
  });

  it("renders keyboard-focusable chips with focus ring classes", async () => {
    render(<AutomationTestingCard {...baseProps} />);

    const chip = screen.getByRole("button", { name: "Playwright" });
    expect(chip).toHaveClass("focus-visible:ring-2");

    await userEvent.tab();
    expect(chip).toHaveFocus();
  });

  it("includes responsive grid and stacked layout classes", () => {
    const { container } = render(<AutomationTestingCard {...baseProps} />);
    const grid = container.querySelector(".grid");

    expect(grid).toHaveClass("lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]");

    const aside = container.querySelector("aside");
    expect(aside).toHaveClass("border-t");
    expect(aside).toHaveClass("lg:border-l");
  });
});
