import React from "react";
import { useNavigate } from "react-router-dom";

import { OnClickEventArgs, Table } from "@/shared/UI/UITable";
import { authRoutePaths } from "@/shared/config/routes";
import { Customer, CustomerService } from "@/entities/customers";
import { useUserStore } from "@/entities/user";

const CustomersPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserStore((state) => state);

  const [customers, setCustomers] = React.useState<Customer[]>([]);

  React.useEffect(() => {
    CustomerService.getAll(user.id)
      .then((data2) => setCustomers(data2))
      .catch(console.error);
  }, [user.id]);

  const onClickTableItemHandler = (args: OnClickEventArgs<Customer>) => {
    navigate(`${authRoutePaths.customers}/${args.selectedItemData.id}`);
  };

  return (
    <Table
      trStyles={{ cursor: "pointer" }}
      onClickItem={onClickTableItemHandler}
      head={["chatId", "createdAt", "updatedAt"]}
      body={customers}
      omit={["id", "establishments", "purchases", "active"]}
    />
  );
};

export default CustomersPage;
