import { render, screen } from "@testing-library/react";
import { Table } from "./UITable";

const body = [
  {
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
  {
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
  {
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
  {
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
  {
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
];

const head = [
  "Name",
  "Telegram",
  "Phone",
  "B-day",
  "Current cups",
  "Cups for given",
];

describe("UITable", () => {
  test("Test render without thead", () => {
    render(<Table body={body} />);
    expect(screen.getByTestId("uitable")).toBeInTheDocument();
  });
  test("Test render with thead", () => {
    render(<Table body={body} head={head} />);
    expect(screen.getByTestId("uitable")).toBeInTheDocument();
  });
});
