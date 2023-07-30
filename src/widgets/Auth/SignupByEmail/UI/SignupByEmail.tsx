import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import UI, { InputType } from "@/shared/UI";
import {
  SignupByEmailForm,
  SignupByEmailService,
  SignupByEmailFormData,
  signupByEmailValidationSchema,
} from "@/features/Auth/SignupByEmailForm";
import { authRoutePaths } from "@/shared/config/routes";
import { SelectSubscription } from "@/features/Auth/SelectSubscription";
import { SessionStorageKeysEnum } from "@/shared/lib/constants";

import styles from "./SignupByEmail.module.scss";

export const SignupByEmail: React.FC = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<SignupByEmailFormData>({
    resolver: zodResolver(signupByEmailValidationSchema),
  });

  const inputs = React.useMemo<InputType<SignupByEmailFormData>[]>(
    () => [
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Имя",
        controller: {
          name: "firstname",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Фамилия",
        controller: {
          name: "lastname",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Email",
        controller: {
          name: "email",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Пароль",
        type: "password",
        controller: {
          name: "password",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Телефон",
        controller: {
          name: "phone",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Дата рождения",
        controller: {
          name: "birthDay",
          control,
        },
      },
    ],
    [control]
  );

  React.useEffect(
    () => () =>
      sessionStorage.removeItem(SessionStorageKeysEnum.SUBSCRIPTION_ID),
    []
  );

  const onSubmitHandler = (data: SignupByEmailFormData) => {
    SignupByEmailService.signup({
      ...data,
      subscriptionId: Number(
        sessionStorage.getItem(SessionStorageKeysEnum.SUBSCRIPTION_ID)
      ),
    })
      .then(() => {
        navigate(authRoutePaths.home, { replace: true });
      })
      .catch(() => {
        ("");
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <UI.Box className={styles.formWrapper}>
        <UI.Slider>
          <UI.SliderItem>
            <SelectSubscription />
          </UI.SliderItem>
          <UI.SliderItem>
            <SignupByEmailForm inputs={inputs} />
          </UI.SliderItem>
        </UI.Slider>
      </UI.Box>
    </form>
  );
};
