import { render, screen } from "@testing-library/react";
import { UISelect, UISelectOptionType } from "./UISelect";

describe("UISelect", () => {
  test("Test render ", () => {
    const options: UISelectOptionType[] = [
      {
        id: 1,
        text: "test",
      },
    ];

    render(<UISelect options={options} />);
    expect(screen.getByTestId("uiselect")).toBeInTheDocument();
  });
});
