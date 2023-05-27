import { render, screen } from "@testing-library/react";
import { UITooltip } from "./UITooltip";

describe("UITooltip", () => {
  test("Test render ", () => {
    render(<UITooltip>Test</UITooltip>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
