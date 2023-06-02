import { render, screen } from "@testing-library/react";
import { EntityPage } from "./EntityPage";
import type { EntityPageItemType } from "../types";

describe("EntityPage", () => {
  test("Test render ", () => {
    const data: Array<EntityPageItemType> = [
      {
        navItem: "Посещаемые места",
        Component: () => <div>Посещаемые места Component</div>,
      },
    ];

    render(<EntityPage data={data} />);
    expect(screen.getByText("Посещаемые места")).toBeInTheDocument();
  });
});
