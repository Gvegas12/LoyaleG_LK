import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputType } from "@/shared/UI";
import { authRoutePaths } from "@/shared/config/routes";
import {
  SigninByEmailForm,
  SigninByEmailFormData,
  SigninByEmailService,
  signinByEmailValidationSchema,
} from "@/features/Auth/SigninByEmailForm";
import { AuthForm } from "@/features/Auth/AuthForm";

import styles from "./SigninByEmail.module.scss";

export const SigninByEmail: React.FC = () => {
  const [passwordRecoveryOnShow, setPasswordRecoveryOnShow] =
    React.useState(false);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<SigninByEmailFormData>({
    resolver: zodResolver(signinByEmailValidationSchema),
    mode: "onChange",
  });

  const inputs = React.useMemo<InputType<SigninByEmailFormData>[]>(
    () => [
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
        labelProps: {
          buttonText: "Забыли пароль?",
          buttonOnClick: () => {
            setPasswordRecoveryOnShow(true);
          },
        },
        controller: {
          name: "password",
          control,
        },
      },
    ],
    [control]
  );

  const onSubmitHandler = (data: SigninByEmailFormData) => {
    SigninByEmailService.signin(data)
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
    <AuthForm
      onSubmit={handleSubmit(onSubmitHandler)}
      title="Вход в личный кабинет"
      data-testid="SigninByEmail"
    >
      <SigninByEmailForm inputs={inputs} />
    </AuthForm>
  );
};
