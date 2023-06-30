import { render, screen } from "@testing-library/react";
import { AddEstablishment } from "./AddEstablishment";

describe("AddEstablishment", () => {
  test("Test render ", () => {
    render(<AddEstablishment onClose={() => ({})} />);
    expect(screen.getByTestId("addestablishment")).toBeInTheDocument();
  });
});
