import React from "react";
import { useNavigate } from "react-router-dom";

import { OnClickEventArgs, Table } from "@/shared/UI/UITable";
// import { authRoutePaths } from "@/shared/config/routes";

import styles from "./CustomerTransactions.module.scss";
import UI from "@/shared/UI";

type MockDataItemType = {
  id: number;
  total: number;
  products: React.ReactElement;
  establishment: string;
  transactionCreatedAt: string;
  manager: string;
  feedback: string;
};

const data: MockDataItemType[] = [
  {
    id: 1,
    total: 1000,
    products: (
      <UI.Button color="black" size="small" variant="select">
        Показать
      </UI.Button>
    ),
    // products: ["Каппучино", "Латте"],
    establishment: "Choize Coffe 1",
    transactionCreatedAt: "18.19.1929 1",
    manager: "Manager 1111",
    feedback: "",
  },
  {
    id: 2,
    total: 2000,
    products: <UI.Button>Показать</UI.Button>,
    // products: ["Каппучино"],
    establishment: "Choize Coffe 2",
    transactionCreatedAt: "18.19.1929 2",
    manager: "Manager 2222",
    feedback: "Мб было ок",
  },
  {
    id: 3,
    total: 3000,
    products: <UI.Button>Показать</UI.Button>,
    // products: ["Каппучино", "Латте", "Раф"],
    establishment: "Choize Coffe 3",
    transactionCreatedAt: "18.19.1929 3",
    manager: "Manager 3333",
    feedback: "Не всё было ок",
  },
  {
    id: 4,
    total: 4000,
    products: <UI.Button>Показать</UI.Button>,
    // products: ["Латте"],
    establishment: "Choize Coffe 4",
    transactionCreatedAt: "18.19.1929 4",
    manager: "Manager 4444",
    feedback: "Всё было ок",
  },
  {
    id: 5,
    total: 5000,
    products: <UI.Button>Показать</UI.Button>,
    // products: ["Каппучино", "Латте"],
    establishment: "Choize Coffe 5",
    transactionCreatedAt: "18.19.1929 5",
    manager: "Manager 5555",
    feedback: "",
  },
];

export const CustomerTransactions: React.FC = () => {
  const navigate = useNavigate();

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
        body={data}
      />
    </div>
  );
};
