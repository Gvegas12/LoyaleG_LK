import React from "react";
import clsx from "clsx";
import StatisticsCard, {
  IUIStatisticsCardProps,
} from "@/shared/UI/UIStatisticsCard";

import styles from "./EstablishmentCard.module.scss";

export interface IEstablishmentCardProps
  extends Omit<IUIStatisticsCardProps, "children"> {
  middle?: string;
  filter?: string;
}

export const EstablishmentCard: React.FC<IEstablishmentCardProps> = ({
  className,
  title,
  middle,
  filter,
  ...props
}) => (
  <div>
    <StatisticsCard.Body
      {...props}
      className={clsx(styles.EstablishmentCard, className)}
      title={title}
    >
      <StatisticsCard.MiddleChildren>{middle}</StatisticsCard.MiddleChildren>
      <StatisticsCard.Filter>{filter}</StatisticsCard.Filter>
    </StatisticsCard.Body>
  </div>
);
