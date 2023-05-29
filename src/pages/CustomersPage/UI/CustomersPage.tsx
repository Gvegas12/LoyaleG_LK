import React from "react";
import UI from "@/shared/UI";
import { OnClickEventArgs } from "@/shared/UI/UITable";

type DataItemType = {
  name: string;
  telegram: string;
  phone: string;
  "b-day": string;
  "current cups": number;
  "cups for given": number;
};
const data = [
  {
    id: 1,
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
  {
    id: 2,
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
  {
    id: 3,
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
  {
    id: 4,
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
  {
    id: 5,
    name: "Jack",
    telegram: "t.me@jackkk",
    phone: "888888888",
    "b-day": "18.19.1929",
    "current cups": 2,
    "cups for given": 3,
  },
];

const CustomersPage: React.FC = () => {
  const onClickHandler = (args: OnClickEventArgs<DataItemType>): void => {
    console.log(args);
  };

  return (
    <div>
      <UI.Table onClickTD={onClickHandler} tbody={data} omit={["id"]} />
    </div>
  );
};

export default CustomersPage;
