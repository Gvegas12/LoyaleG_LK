import React from "react";
import { Link } from "react-router-dom";

import type { InputType } from "@/shared/UI";
import type { SignupByEmailFormData } from "../model/types";
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
    <div className={styles.inputs}>
      {inputs.map((props) => (
        <UI.Input key={props.label} {...props} />
      ))}
    </div>
    <div className={styles.btns}>
      <Link className={styles.btn} to={publicRoutePaths.signup}>
        <UI.Button
          // onClick={(e) => {
          //   e.preventDefault();
          //   navigate();
          // }}
          size="fullwidth"
        >
          Регистрация
        </UI.Button>
      </Link>
    </div>
  </>
);
