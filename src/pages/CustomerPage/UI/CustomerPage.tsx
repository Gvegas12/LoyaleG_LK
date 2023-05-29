import React from "react";
import { useParams } from "react-router-dom";

import { useNavbarTitle } from "@/shared/providers/NavbarProvider";

const CustomerPage: React.FC = () => {
  const { setTitle } = useNavbarTitle();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    setTitle(`Покупатель с id: ${id}`);
  }, []);

  return <div>CustomerPage</div>;
};

export default CustomerPage;
