import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("Test render", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
