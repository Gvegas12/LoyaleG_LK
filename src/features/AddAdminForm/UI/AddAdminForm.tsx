import React from "react";
import UI, { InputType } from "@/shared/UI";
import { SignupByEmailFormData } from "@/features/Auth/SignupByEmailForm";

import styles from "./AddAdminForm.module.scss";

interface IAddAdminFormProps {
  inputs: InputType<SignupByEmailFormData>[];
  onBack: () => void;
  onSubmit: () => void;
}

export const AddAdminForm: React.FC<IAddAdminFormProps> = ({
  inputs,
  onBack,
  onSubmit,
}) => (
  <div className={styles.AddAdminForm}>
    <div>
      <h3 className={styles.title}>Добавить админа</h3>
      <div className={styles.inputs}>
        {inputs.map((props) => (
          <UI.Input key={props.label} {...props} />
        ))}
      </div>
    </div>
    <div className={styles.btns}>
      <UI.Button onClick={onBack} className={styles.btn} size="fullwidth">
        Назад
      </UI.Button>
      <UI.Button onClick={onSubmit} className={styles.btn} size="fullwidth">
        Завершить
      </UI.Button>
    </div>
  </div>
);
