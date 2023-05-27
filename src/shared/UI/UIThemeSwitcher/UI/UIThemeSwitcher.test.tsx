import { render, screen } from "@testing-library/react";
import { UIThemeSwitcher } from "./UIThemeSwitcher";

describe("UIThemeSwitcher", () => {
  test("Test render ", () => {
    render(<UIThemeSwitcher>Test</UIThemeSwitcher>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
