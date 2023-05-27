import { screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { componentRender } from "@/shared/lib/tests";

describe("Sidebar", () => {
  test("Test render ", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
