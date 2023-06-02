import React from "react";
import UI from "@/shared/UI";
import { OnClickEventArgs, Table } from "@/shared/UI/UITable";

import styles from "./CustomerVisited.module.scss";

type MockDataItemType = {
  id: number;
  telegram: string;
  fullname: string;
  phone: string;
  given: number;
  current: number;
  to_given: number;
};

const tableData: MockDataItemType[] = [
  {
    id: 1,
    telegram: "alexHost1",
    fullname: "Александр Покупателев1",
    phone: "89999999992",
    given: 1,
    current: 2,
    to_given: 3,
  },
  {
    id: 2,
    telegram: "alexHost1",
    fullname: "Александр Покупателев1",
    phone: "89999999992",
    given: 1,
    current: 2,
    to_given: 3,
  },
  {
    id: 3,
    telegram: "alexHost1",
    fullname: "Александр Покупателев1",
    phone: "89999999992",
    given: 1,
    current: 2,
    to_given: 3,
  },
  {
    id: 4,
    telegram: "alexHost1",
    fullname: "Александр Покупателев1",
    phone: "89999999992",
    given: 1,
    current: 2,
    to_given: 3,
  },
  {
    id: 5,
    telegram: "alexHost1",
    fullname: "Александр Покупателев1",
    phone: "89999999992",
    given: 1,
    current: 2,
    to_given: 3,
  },
];

interface ICustomerVisitedProps {}

export const CustomerVisited: React.FC<ICustomerVisitedProps> = () => {
  const onClickTableItemHandler = (
    args: OnClickEventArgs<MockDataItemType>
  ): void => {
    console.log(args);

    // navigate(`${authRoutePaths.customers}/${args.selectedItemData.id}`);
  };

  return (
    <div>
      <Table
        className={styles.table}
        onClickItem={onClickTableItemHandler}
        body={tableData}
        omit={["id"]}
      />
    </div>
  );
};
