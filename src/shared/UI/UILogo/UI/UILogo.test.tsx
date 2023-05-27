import { render, screen } from "@testing-library/react";
import { UILogo } from "./UILogo";

describe("UILogo", () => {
  test("Test render ", () => {
    render(<UILogo />);
    expect(screen.getByTestId("test--uilogo")).toBeInTheDocument();
  });
});
