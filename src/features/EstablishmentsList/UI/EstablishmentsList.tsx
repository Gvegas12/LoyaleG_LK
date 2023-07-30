import React from "react";
import clsx from "clsx";

import { useNavigate, Link } from "react-router-dom";
import StatisticsCard from "@/shared/UI/UIStatisticsCard";
import {
  Establishment,
  EstablishmentCard,
  EstablishmentsService,
  IEstablishmentCardProps,
} from "@/entities/establishments";

import styles from "./EstablishmentsList.module.scss";
import { authRoutePaths } from "@/shared/config/routes";
import { useUserStore } from "@/entities/user";

interface IEstablishmentsListProps {
  className?: string;
}

export const EstablishmentsList: React.FC<IEstablishmentsListProps> = ({
  className,
}) => {
  const navigate = useNavigate();
  const [isLimit, setIsLimit] = React.useState(false);
  const {
    user: {
      subscription: { max_establishments },
    },
  } = useUserStore((state) => state);
  const [estbCardsProps, setEstbCardsProps] = React.useState<Establishment[]>(
    []
  );

  React.useEffect(() => {
    EstablishmentsService.getAll()
      .then((data) => {
        if (data.length >= max_establishments) {
          setIsLimit(true);
        }
        setEstbCardsProps(() => [...data]);
      })
      .catch(console.log);
  }, [max_establishments]);

  return (
    <div className={clsx(styles.EstablishmentsList, className)}>
      {estbCardsProps.map(({ id, name }) => (
        <Link key={id} to={`${authRoutePaths.establishments}/${id}`}>
          <EstablishmentCard title={name} />
        </Link>
      ))}
      {!isLimit && (
        <StatisticsCard.Body
          key="/zc/x.x23u6,cs"
          onClick={() => navigate(authRoutePaths.add_establishment)}
          addNew
        />
      )}
    </div>
  );
};
