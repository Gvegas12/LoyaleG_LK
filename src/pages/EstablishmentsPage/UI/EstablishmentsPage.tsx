import React from "react";
import StatisticsCard from "@/shared/UI/UIStatisticsCard";
import { AddEstablishment } from "@/features/AddEstablishment";

const EstablishmentsPage: React.FC = () => {
  const [addNew, setAddNew] = React.useState(false);

  const onAddNew = (): void => {
    setAddNew(true);
  };

  if (addNew) {
    return <AddEstablishment />;
  }

  return (
    <div>
      <StatisticsCard.Body onClick={onAddNew} addNew />
    </div>
  );
};

export default EstablishmentsPage;
