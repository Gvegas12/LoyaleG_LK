import { render, screen } from "@testing-library/react";
import { EntityPage } from "./EntityPage";
import type { EntityPageItemType } from "../types";

describe("EntityPage", () => {
  test("Test render ", () => {
    /* TODO */
    const data: Array<EntityPageItemType> = [
      {
        navItem: "Транзакции",
        Component: () => <div>Транзакции Component</div>,
      },
      {
        navItem: "Посещаемые места",
        Component: () => <div>Посещаемые места Component</div>,
      },
      {
        navItem: "Акция",
        Component: () => <div>Акция Component</div>,
      },
    ];

    render(<EntityPage data={data}>Test</EntityPage>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
