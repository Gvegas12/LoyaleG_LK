import { render, screen } from "@testing-library/react";
import { UILabel } from "./UILabel";

describe("UILabel", () => {
  test("Test render ", () => {
    render(<UILabel>Test</UILabel>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
