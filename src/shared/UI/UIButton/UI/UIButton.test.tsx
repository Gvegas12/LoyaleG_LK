import { render, screen } from "@testing-library/react";
import { UIButton } from "./UIButton";

describe("UIButton", () => {
  test("Test render ", () => {
    render(<UIButton>Test</UIButton>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
