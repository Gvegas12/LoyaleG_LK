import React from "react";
import clsx from "clsx";

import UI from "@/shared/UI";
import StatisticsCard from "@/shared/UI/UIStatisticsCard";
import type { SelectOptionType } from "@/shared/UI/UISelect";

import styles from "./AddEstablishment.module.scss";

export interface IAddEstablishmentProps {
  className?: string;
  onClose?: () => void;
}

const options: SelectOptionType[] = [
  {
    id: 1,
    text: "test 1",
  },
  {
    id: 2,
    text: "test 2",
  },
  {
    id: 3,
    text: "test 3",
  },
];
export const AddEstablishment: React.FC<IAddEstablishmentProps> = ({
  className,
  onClose,
}) => (
  <UI.Box
    data-testid="addestablishment"
    className={clsx(styles.AddEstablishment, className)}
  >
    <div className={styles.form}>
      {/* <UI.Input required label={{ children: "Название", required: true }} /> */}
      <UI.Select
        options={options}
        label={{ children: "Сфера бизнеса", required: true }}
      />
      <p className={styles.title}>Геопозиция</p>
      {/* <UI.Input required label={{ children: "Страна", required: true }} /> */}
      {/* <UI.Input required label={{ children: "Город", required: true }} /> */}
      {/* <UI.Input required label={{ children: "Улица", required: true }} /> */}
      {/* <UI.Input required label={{ children: "Дом", required: true }} /> */}
    </div>
    <div className={styles.uploadImg}>
      <p className={styles.title}>Фотографии торговой точки (опционально)</p>
      <div>
        <StatisticsCard.Body className={styles.uploadImgBtnMain} addNew />
        <div className={styles.uploadImgBtnSmall}>
          <StatisticsCard.Body
            className={styles.uploadImgBtnSmallElement}
            addNew
          />
          <StatisticsCard.Body
            className={styles.uploadImgBtnSmallElement}
            addNew
          />
          <StatisticsCard.Body
            className={styles.uploadImgBtnSmallElement}
            addNew
          />
        </div>
      </div>
      <div className={styles.btns}>
        <UI.Button onClick={onClose} theme="outline" size="medium">
          Отмена
        </UI.Button>
        <UI.Button size="large">Продолжить</UI.Button>
      </div>
    </div>
  </UI.Box>
);
