import React from "react";

import StatisticsCard from "@/shared/UI/UIStatisticsCard";

import styles from "./Cards.module.scss";

interface ICardsProps {
  sales: number;
  customers: number;
}

export const Cards: React.FC<ICardsProps> = ({ sales, customers }) => (
  <div>
    <h3 className={styles.title}>Статистика</h3>
    {/* <p className={styles.description}>За последние 7 дней</p> */}
    <div className={styles.cards}>
      <StatisticsCard.Body title="Посетители">
        <StatisticsCard.MiddleChildren>
          {customers}
        </StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body title="Продано">
        <StatisticsCard.MiddleChildren>{sales}</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
    </div>
  </div>
);
