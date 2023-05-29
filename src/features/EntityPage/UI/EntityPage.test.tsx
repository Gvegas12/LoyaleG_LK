import { render, screen } from "@testing-library/react";
import { EntityPage } from "./EntityPage";

describe("EntityPage", () => {
  test("Test render ", () => {
    render(<EntityPage>Test</EntityPage>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
