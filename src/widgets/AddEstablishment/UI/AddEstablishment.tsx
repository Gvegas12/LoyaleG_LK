import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import UI, { InputType } from "@/shared/UI";
import {
  EstablishmentFormData,
  EstablishmentsService,
  establishmentValidationSchema,
} from "@/entities/establishments";
import {
  SignupByEmailFormData,
  signupByEmailValidationSchema,
} from "@/features/Auth/SignupByEmailForm";
import { AddAdminForm } from "@/features/AddAdminForm";
import { authRoutePaths } from "@/shared/config/routes";
import { AddEstablishmentForm } from "@/features/AddEstablishmentForm";

import styles from "./AddEstablishment.module.scss";

export const AddEstablishment: React.FC = () => {
  const navigate = useNavigate();
  const [showAddAdmin, setShowAddAdmin] = React.useState(false);

  const estbFormData = useForm<EstablishmentFormData>({
    resolver: zodResolver(establishmentValidationSchema),
    mode: "onChange",
  });
  const adminFormData = useForm<SignupByEmailFormData>({
    resolver: zodResolver(signupByEmailValidationSchema),
    mode: "onChange",
  });

  const estb_inputs = React.useMemo<InputType<EstablishmentFormData>[]>(
    () => [
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Страна",
        controller: {
          name: "country",
          control: estbFormData.control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Город",
        controller: {
          name: "city",
          control: estbFormData.control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Дом",
        controller: {
          name: "house",
          control: estbFormData.control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Улица",
        controller: {
          name: "street",
          control: estbFormData.control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Название",
        controller: {
          name: "name",
          control: estbFormData.control,
        },
      },
    ],
    [estbFormData.control]
  );

  const admin_inputs = React.useMemo<InputType<SignupByEmailFormData>[]>(
    () => [
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Имя",
        controller: {
          name: "firstname",
          control: adminFormData.control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Фамилия",
        controller: {
          name: "lastname",
          control: adminFormData.control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Email",
        controller: {
          name: "email",
          control: adminFormData.control,
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
          control: adminFormData.control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Телефон",
        controller: {
          name: "phone",
          control: adminFormData.control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Дата рождения",
        controller: {
          name: "birthDay",
          control: adminFormData.control,
        },
      },
    ],
    [adminFormData.control]
  );

  const onSubmitHandler = () => {
    EstablishmentsService.create({
      establishment: estbFormData.watch(),
      admin: adminFormData.watch(),
    })
      .then(console.log)
      .catch(console.warn);
    console.log({
      establishment: estbFormData.watch(),
      admin: adminFormData.watch(),
    });
  };

  return (
    <UI.Box
      data-testid="addestablishmentForm"
      className={styles.AddEstablishment}
    >
      {showAddAdmin ? (
        <AddAdminForm
          onSubmit={onSubmitHandler}
          onBack={() => setShowAddAdmin(false)}
          inputs={admin_inputs}
        />
      ) : (
        <AddEstablishmentForm
          inputs={estb_inputs}
          onContinue={() => setShowAddAdmin(true)}
          onClose={() => navigate(authRoutePaths.establishments)}
        />
      )}
    </UI.Box>
  );
};
