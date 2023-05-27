import { render, screen } from "@testing-library/react";
import { UIModal } from "./UIModal";

describe("UIModal", () => {
  test("Test render ", () => {
    render(<UIModal>Test</UIModal>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
