import { render, screen } from "@testing-library/react";
import { Select } from "./UISelect";
import type { SelectOptionType } from "../types";

describe("UISelect", () => {
  test("Test render ", () => {
    const options: SelectOptionType[] = [
      {
        id: 1,
        text: "test",
      },
    ];

    render(<Select options={options} />);
    expect(screen.getByTestId("uiselect")).toBeInTheDocument();
  });
});
