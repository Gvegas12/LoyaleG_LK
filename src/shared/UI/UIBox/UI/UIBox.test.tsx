import { render, screen } from "@testing-library/react";
import { UIBox } from "./UIBox";

describe("UIBox", () => {
  test("Test render ", () => {
    render(<UIBox>Test</UIBox>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
