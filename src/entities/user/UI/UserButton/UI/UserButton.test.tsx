import { render, screen } from "@testing-library/react";
import { UserButton } from "./UserButton";

describe("UserButton", () => {
  test("Test render ", () => {
    render(<UserButton />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
