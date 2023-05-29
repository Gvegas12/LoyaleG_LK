import { render, screen } from "@testing-library/react";
import { UITable } from "./UITable";

const tbody = [
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

const thead = [
  "Name",
  "Telegram",
  "Phone",
  "B-day",
  "Current cups",
  "Cups for given",
];

describe("UITable", () => {
  test("Test render without thead", () => {
    render(<UITable tbody={tbody} />);
    expect(screen.getByTestId("uitable")).toBeInTheDocument();
  });
  test("Test render with thead", () => {
    render(<UITable tbody={tbody} thead={thead} />);
    expect(screen.getByTestId("uitable")).toBeInTheDocument();
  });
});
