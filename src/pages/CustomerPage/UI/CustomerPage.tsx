import React from "react";
import { useParams } from "react-router-dom";

import { useNavbarTitle } from "@/shared/providers/NavbarProvider";
import { EntityPage, EntityPageItemType } from "@/features/EntityPage";
import { CustomerTransactions, CustomerVisited } from "@/entities/customer";

const entityPageData: Array<EntityPageItemType> = [
  {
    navItem: "Транзакции",
    Component: () => <CustomerTransactions />,
  },
  {
    navItem: "Посещаемые места",
    Component: () => <CustomerVisited />,
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
  }, [id, setTitle]);

  return (
    <div>
      <EntityPage data={entityPageData} />
    </div>
  );
};

export default CustomerPage;
