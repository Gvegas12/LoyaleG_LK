import { render, screen } from "@testing-library/react";
import { UIBadge } from "./UIBadge";

describe("UIBadge", () => {
  test("Test render ", () => {
    render(<UIBadge>Test</UIBadge>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
