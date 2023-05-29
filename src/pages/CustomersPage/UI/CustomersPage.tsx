import React from "react";

import { useNavigate } from "react-router-dom";
import UI from "@/shared/UI";
import type { OnClickEventArgs } from "@/shared/UI/UITable";
import { authRoutePaths } from "@/shared/config/routes";

type DataItemType = {
  id: number;
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
    name: "Jack 1",
    telegram: "t.me@jackkk 1",
    phone: "888888888 1",
    "b-day": "18.19.1929 1",
    "current cups": 21,
    "cups for given": 31,
  },
  {
    id: 2,
    name: "Jack 2",
    telegram: "t.me@jackkk 2",
    phone: "888888888 2",
    "b-day": "18.19.1929 2",
    "current cups": 22,
    "cups for given": 32,
  },
  {
    id: 3,
    name: "Jack 3",
    telegram: "t.me@jackkk 3",
    phone: "888888888 3",
    "b-day": "18.19.1929 3",
    "current cups": 23,
    "cups for given": 33,
  },
  {
    id: 4,
    name: "Jack 4",
    telegram: "t.me@jackkk 4",
    phone: "888888888 4",
    "b-day": "18.19.1929 4",
    "current cups": 24,
    "cups for given": 34,
  },
  {
    id: 5,
    name: "Jack 5",
    telegram: "t.me@jackkk 5",
    phone: "888888888 5",
    "b-day": "18.19.1929 5",
    "current cups": 25,
    "cups for given": 35,
  },
];

const CustomersPage: React.FC = () => {
  const navigate = useNavigate();
  const onClickHandler = (args: OnClickEventArgs<DataItemType>): void => {
    navigate(`${authRoutePaths.customers}/${args.selectedItemData.id}`);
  };

  return (
    <div>
      <UI.Table onClickTd={onClickHandler} tbody={data} omit={["id"]} />
    </div>
  );
};

export default CustomersPage;
