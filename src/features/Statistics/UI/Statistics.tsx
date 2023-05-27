/* eslint-disable i18next/no-literal-string */ /* TODO */
import React from "react";
import clsx from "clsx";
import StatisticsCard from "@/shared/UI/UIStatisticsCard";

import styles from "./Statistics.module.scss";
import UI from "@/shared/UI";

export interface IStatisticsProps {
  className?: string;
}

export const Statistics: React.FC<IStatisticsProps> = ({ className }) => (
  <div data-testid="statistics" className={clsx(styles.Statistics, className)}>
    <h3 className={styles.title}>Статистика</h3>
    <p className={styles.description}>За последние 7 дней</p>
    <div className={styles.cards}>
      <StatisticsCard.Body title="Посетители">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body title="Продано">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
      <StatisticsCard.Body title="Подарено">
        <StatisticsCard.MiddleChildren>92,680</StatisticsCard.MiddleChildren>
        <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
      </StatisticsCard.Body>
    </div>
    <div className={styles.chart} />
  </div>
);
