import React from "react";
import { useParams } from "react-router-dom";

import { useNavbarTitle } from "@/shared/providers/NavbarProvider";
import { EntityPage, EntityPageItemType } from "@/features/EntityPage";
import { CustomerTransactions } from "@/entities/customer";

const data: Array<EntityPageItemType> = [
  {
    navItem: "Транзакции",
    Component: () => <CustomerTransactions />,
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

const CustomerPage: React.FC = () => {
  const { setTitle } = useNavbarTitle();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    setTitle(`Покупатель с id: ${id}`);
  }, []);

  return (
    <div>
      <EntityPage data={data} />
    </div>
  );
};

export default CustomerPage;
