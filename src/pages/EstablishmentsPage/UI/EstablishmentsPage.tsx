import React from "react";
import StatisticsCard from "@/shared/UI/UIStatisticsCard";
import { AddEstablishment } from "@/features/AddEstablishment";

import styles from "./EstablishmentsPage.module.scss";

const EstablishmentsPage: React.FC = () => {
  const [addNew, setAddNew] = React.useState(false);

  const onAddNew = (): void => {
    setAddNew(true);
  };

  if (addNew) {
    return <AddEstablishment onClose={(): void => setAddNew(false)} />;
  }

  return (
    <div className={styles.EstablishmentsPage}>
      <StatisticsCard.Body title="Choize Coffee">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body title="Choize Coffee">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body title="Choize Coffee">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body title="Choize Coffee">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body title="Choize Coffee">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body title="Choize Coffee">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body title="Choize Coffee">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body onClick={onAddNew} addNew />
    </div>
  );
};

export default EstablishmentsPage;
