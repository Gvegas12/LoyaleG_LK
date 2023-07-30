/* eslint-disable i18next/no-literal-string */ /* TODO */
import React from "react";
import clsx from "clsx";

import UI from "@/shared/UI";

import styles from "./Statistics.module.scss";
import { CustomerService } from "@/entities/customers";
import {
  Establishment,
  EstablishmentsService,
} from "@/entities/establishments";
import { Cards } from "../Cards/Cards";
import { NotEstablishments } from "../NotEstablishments/NotEstablishments";

export interface IStatisticsProps {
  className?: string;
}

export const Statistics: React.FC<IStatisticsProps> = ({ className }) => {
  const [establishments, setEstablishments] = React.useState<Establishment[]>(
    []
  );
  const [amountSales, setAmountSales] = React.useState(0);
  const [amountCustomers, setAmountCustomers] = React.useState(0);

  React.useEffect(() => {
    EstablishmentsService.getAll()
      .then((data) => {
        setEstablishments(data);
        data.map(({ sales, customers }) => {
          setAmountSales((prev) => prev + sales.length);
          setAmountCustomers((prev) => prev + customers.length);
        });
      })
      .catch((err) => console.log("estb", err));
  }, []);

  return (
    <div
      data-testid="statistics"
      className={clsx(styles.Statistics, className)}
    >
      {!establishments.length ? (
        <NotEstablishments />
      ) : (
        <Cards sales={amountSales} customers={amountCustomers} />
      )}

      <UI.LineChart />
    </div>
  );
};
