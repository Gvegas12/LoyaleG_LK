import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useParams } from "react-router-dom";
import UI, { InputType } from "@/shared/UI";
import { goodValidationSchema } from "../../model/services/validationSchema/goodValidationSchema";
import { CreateGoodFormData } from "../../model/types";

import styles from "./AddNewGoodModal.module.scss";
import { GoodsService } from "../../model/services/GoodsService/GoodsService";

interface IAddNewGoodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewGoodModal: React.FC<IAddNewGoodModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { control, handleSubmit } = useForm<CreateGoodFormData>({
    resolver: zodResolver(goodValidationSchema),
    mode: "onChange",
  });
  const { id } = useParams<{ id: string }>();

  const inputs = React.useMemo<InputType<CreateGoodFormData>[]>(
    () => [
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Имя",
        controller: {
          name: "name",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Цена",
        controller: {
          name: "price",
          control,
        },
      },
    ],
    [control]
  );

  const onSubmitHandler = (data: CreateGoodFormData) => {
    GoodsService.create(Number(id), data);
    onClose();
  };

  return (
    <UI.Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
        {inputs.map((input, i) => (
          <UI.Input key={i} {...input} />
        ))}
        <UI.Button className={styles.field} size="fullwidth">
          Сохранить
        </UI.Button>
      </form>
    </UI.Modal>
  );
};

export default AddNewGoodModal;
