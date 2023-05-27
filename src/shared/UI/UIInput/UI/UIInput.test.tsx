import { render, screen } from "@testing-library/react";
import { UIInput } from "./UIInput";

describe("UIInput", () => {
  test("Test render ", () => {
    render(<UIInput />);
    expect(screen.getByTestId("uiinput")).toBeInTheDocument();
  });
});
