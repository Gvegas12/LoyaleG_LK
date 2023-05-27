import { render, screen } from "@testing-library/react";
import { UITriangle } from "./UITriangle";

describe("UITriangle", () => {
  test("Test render ", () => {
    render(<UITriangle />);
    expect(screen.getByTestId("test--uitriangle")).toBeInTheDocument();
  });
});
