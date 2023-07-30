import React from "react";

import UI, { InputType } from "@/shared/UI";
import StatisticsCard from "@/shared/UI/UIStatisticsCard";
import { EstablishmentFormData } from "@/entities/establishments";

import styles from "./AddEstablishmentForm.module.scss";

export interface IAddEstablishmentFormProps {
  className?: string;
  onClose: () => void;
  onContinue: () => void;
  inputs: InputType<EstablishmentFormData>[];
}

export const AddEstablishmentForm: React.FC<IAddEstablishmentFormProps> = ({
  inputs,
  onClose,
  onContinue,
}) => (
  <div className={styles.AddEstablishmentForm}>
    <div className={styles.form}>
      {/* <UI.Select
          size="fullwidth"
          options={options}
          label={{ children: "Сфера бизнеса", required: true }}
        /> */}
      <p className={styles.title}>Геопозиция</p>
      <div className={styles.inputs}>
        {inputs.map((props) => (
          <UI.Input key={props.label} {...props} />
        ))}
      </div>
    </div>
    <div className={styles.uploadImg}>
      <p className={styles.title}>Фотографии торговой точки (опционально)</p>
      <div>
        <StatisticsCard.Body className={styles.uploadImgBtnMain} addNew />
      </div>
      <div className={styles.btns}>
        <UI.Button onClick={onClose} theme="outline" size="medium">
          Отмена
        </UI.Button>
        <UI.Button onClick={onContinue} size="large">
          Продолжить
        </UI.Button>
      </div>
    </div>
  </div>
);
