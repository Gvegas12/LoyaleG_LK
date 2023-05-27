import { render, screen } from "@testing-library/react";
import { Statistics } from "./Statistics";

describe("Statistics", () => {
  test("Test render ", () => {
    render(<Statistics />);
    expect(screen.getByTestId("statistics")).toBeInTheDocument();
  });
});
