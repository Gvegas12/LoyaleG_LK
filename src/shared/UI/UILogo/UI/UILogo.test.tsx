import { render, screen } from "@testing-library/react";
import { UILogo } from "./UILogo";

describe("UILogo", () => {
  test("Test render ", () => {
    render(<UILogo>Test</UILogo>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
