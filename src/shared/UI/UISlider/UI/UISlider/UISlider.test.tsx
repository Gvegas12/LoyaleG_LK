import { render, screen } from "@testing-library/react";
import { UISlider } from "./UISlider";

describe("UISlider", () => {
  test("Test render ", () => {
    render(<UISlider>Test</UISlider>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
