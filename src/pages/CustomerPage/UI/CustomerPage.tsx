/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { useParams } from "react-router-dom";

import { useNavbarTitle } from "@/shared/providers/NavbarProvider";
import { EntityPage, EntityPageItemType } from "@/features/EntityPage";
import {
  Customer,
  CustomerService,
  CustomerTransactions,
  CustomerVisited,
} from "@/entities/customers";
import { useUserStore } from "@/entities/user";

const CustomerPage: React.FC = () => {
  const [customer, setCustomer] = React.useState<Customer>(null);
  const { user } = useUserStore((state) => state);
  const { setTitle } = useNavbarTitle();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    setTitle(`Покупатель с id: ${id}`);
  }, [id, setTitle]);

  React.useEffect(() => {
    CustomerService.getOne(Number(id), user.id)
      .then(setCustomer)
      .catch(console.error);
  }, [id, user.id]);

  const entityPageData: Array<EntityPageItemType> = React.useMemo(
    () => [
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
    ],
    []
  );

  return <EntityPage data={entityPageData} />;
};

export default CustomerPage;
