import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import UI, { InputType } from "@/shared/UI";
import { ownerFormValidationSchema as validationSchema } from "../../model/services/validationSchema";
import type { OwnerFormData } from "../../model/types";

import styles from "./OwnerFormModal.module.scss";

interface IOwnerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerFormModal: React.FC<IOwnerFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [onCloseModal, setOnCloseModal] = React.useState(false);

  const { control, handleSubmit } = useForm<OwnerFormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmitHandler = async (data: OwnerFormData) => {
    // AuthByEmailService.login(data).then(() => {
    //   console.log(data);
    // });
    console.log(data);
  };

  const inputs = React.useMemo<InputType<OwnerFormData>[]>(
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

  return (
    <UI.Modal className={styles.OwnerForm} isOpen={isOpen} onClose={onClose}>
      {inputs.map((props) => (
        <UI.Input key={props.label} {...props} />
      ))}
    </UI.Modal>
  );
};
