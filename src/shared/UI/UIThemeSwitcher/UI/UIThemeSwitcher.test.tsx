import { render, screen } from "@testing-library/react";
import { UIThemeSwitcher } from "./UIThemeSwitcher";

describe("UIThemeSwitcher", () => {
  test("Test render ", () => {
    render(<UIThemeSwitcher />);
    expect(screen.getByTestId("test--uithemeswitcher")).toBeInTheDocument();
  });
});
