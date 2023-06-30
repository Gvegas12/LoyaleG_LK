import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import UI, { InputType } from "@/shared/UI";
import {
  SignupByEmailForm,
  SignupByEmailFormData,
  SignupByEmailService,
  SignupQueryParams,
  signupByEmailValidationSchema,
} from "@/features/Auth/SignupByEmailForm";
import { useParseURLSearchParams } from "@/shared/lib/hooks";
import { authRoutePaths } from "@/shared/config/routes";

import styles from "./SignupByEmail.module.scss";

export const SignupByEmail: React.FC = () => {
  const queryParams = useParseURLSearchParams<Partial<SignupQueryParams>>();
  const navigate = useNavigate();
  console.log(queryParams);

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

  if (!queryParams.secret) {
    return null;
  }

  const onSubmitHandler = (data: SignupByEmailFormData) => {
    SignupByEmailService.signup({
      secret: queryParams.secret,
      ...data,
    })
      .then(() => {
        navigate(authRoutePaths.home, { replace: true });
      })
      .catch((err) => {
        // if (
        //   err.response.data.description === CustomerInactiveApiError.description
        // ) {
        //   navigate(publicRoutePaths.confirm_email, {
        //     state: { ...data } as ConfirmEmailLocationState,
        //   });
        // }
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <UI.Box className={styles.formWrapper}>
        <h3 className={styles.title}>Регистрация (Только для админов)</h3>
        <SignupByEmailForm inputs={inputs} />
      </UI.Box>
    </form>
  );
};
