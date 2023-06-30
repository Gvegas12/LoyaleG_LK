import React from "react";

import { EstablishmentsList } from "@/features/EstablishmentsList";
import { AddEstablishment, Establishment } from "@/entities/establishment";

import styles from "./EstablishmentsPage.module.scss";

const EstablishmentsPage: React.FC = () => {
  const [addNew, setAddNew] = React.useState(false);
  const [establishments, setEstablishments] = React.useState<Establishment[]>(
    []
  );

  const onAddNew = (): void => {
    setAddNew(true);
  };

  if (addNew) {
    return <AddEstablishment onClose={(): void => setAddNew(false)} />;
  }

  return <EstablishmentsList />;
};

export default EstablishmentsPage;
