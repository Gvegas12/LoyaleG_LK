import React from "react";
import clsx from "clsx";

import StatisticsCard from "@/shared/UI/UIStatisticsCard";
import {
  AddEstablishment,
  EstablishmentCard,
  EstablishmentsService,
  IEstablishmentCardProps,
} from "@/entities/establishment";

import styles from "./EstablishmentsList.module.scss";

interface IEstablishmentsListProps {
  className?: string;
}

export const EstablishmentsList: React.FC<IEstablishmentsListProps> = ({
  className,
}) => {
  const [addNew, setAddNew] = React.useState(false);
  const [estbCardsProps, setEstbCardsProps] = React.useState<
    IEstablishmentCardProps[]
  >([]);

  React.useEffect(() => {
    EstablishmentsService.getAll()
      .then((data) => {
        setEstbCardsProps(() => [
          ...data.map(
            ({ name }): IEstablishmentCardProps => ({
              title: name,
            })
          ),
        ]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (addNew) {
    return (
      <AddEstablishment
        onClose={() => {
          setAddNew(false);
          console.log("onClose");
        }}
      />
    );
  }

  return (
    <div className={clsx(styles.EstablishmentsList, className)}>
      {estbCardsProps.map(({ title }, i) => (
        <EstablishmentCard key={i} title={title} />
      ))}
      <StatisticsCard.Body
        key="/zc/x.x23u6,cs"
        onClick={() => setAddNew(true)}
        addNew
      />
    </div>
  );
};
// EstablishmentCard
