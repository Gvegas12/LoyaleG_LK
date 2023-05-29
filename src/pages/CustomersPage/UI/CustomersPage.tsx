import React from "react";
import UI from "@/shared/UI";

// const thead = [
//   "Name",
//   "Telegram",
//   "Phone",
//   "B-day",
//   "Current cups",
//   "Cups for given",
// ];

const data = [
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

const CustomersPage: React.FC = () => (
  <div>
    <UI.Table tbody={data} />
  </div>
);

export default CustomersPage;
