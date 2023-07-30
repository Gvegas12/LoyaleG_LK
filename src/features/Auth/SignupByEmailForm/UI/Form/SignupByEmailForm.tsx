import React from "react";
import { Link } from "react-router-dom";

import type { InputType } from "@/shared/UI";
import type { SignupByEmailFormData } from "../../model/types";
import UI from "@/shared/UI";
import { publicRoutePaths } from "@/shared/config/routes";

import styles from "./SignupByEmailForm.module.scss";

interface ISignupByEmailFormProps {
  inputs: InputType<SignupByEmailFormData>[];
}

export const SignupByEmailForm: React.FC<ISignupByEmailFormProps> = ({
  inputs,
}) => (
  <>
    <h3 className={styles.title}>Регистрация</h3>
    <div className={styles.inputs}>
      {inputs.map((props) => (
        <UI.Input key={props.label} {...props} />
      ))}
    </div>
    <UI.Button type="submit" className={styles.btn} size="fullwidth">
      Регистрация
    </UI.Button>
  </>
);
