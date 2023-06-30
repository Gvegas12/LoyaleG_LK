import React from "react";
import { Link } from "react-router-dom";
import { publicRoutePaths } from "@/shared/config/routes";
import UI, { InputType } from "@/shared/UI";
import { SigninByEmailFormData } from "../model/types";

import styles from "./SigninByEmailForm.module.scss";

interface ISigninByEmailFormProps {
  inputs: InputType<SigninByEmailFormData>[];
}

export const SigninByEmailForm: React.FC<ISigninByEmailFormProps> = ({
  inputs,
}) => (
  <>
    {inputs.map((props) => (
      <UI.Input key={props.label} {...props} />
    ))}
    {/* <div className={styles.saveMe}>
          <UI.Checkbox active />
          Запомнить данные для повторного входа
        </div> */}
    <UI.Button className={styles.btn} type="submit" size="fullwidth">
      Войти
    </UI.Button>
    <Link to={publicRoutePaths.signup}>
      <UI.Button
        className={styles.btn}
        // onClick={(e) => {
        //   e.preventDefault();
        //   navigate();
        // }}
        size="fullwidth"
        theme="outline"
      >
        Регистрация
      </UI.Button>
    </Link>
  </>
);
