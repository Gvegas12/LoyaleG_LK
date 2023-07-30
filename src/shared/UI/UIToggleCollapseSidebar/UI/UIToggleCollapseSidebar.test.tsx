import { render, screen } from "@testing-library/react";
import { UIToggleCollapseSidebar } from "./UIToggleCollapseSidebar";

describe("UIToggleCollapseSidebar", () => {
  test("Test render ", () => {
    render(<UIToggleCollapseSidebar>Test</UIToggleCollapseSidebar>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
