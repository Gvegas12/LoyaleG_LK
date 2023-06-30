import React from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import UI, { InputType } from "@/shared/UI";
import StatisticsCard from "@/shared/UI/UIStatisticsCard";
import type { SelectOptionType } from "@/shared/UI/UISelect";
import { EstablishmentFormDataProps } from "@/entities/establishment/model/types";
import {
  EstablishmentsService,
  establishmentValidationSchema,
} from "@/entities/establishment";

import styles from "./AddEstablishment.module.scss";

export interface IAddEstablishmentProps {
  className?: string;
  onClose: () => void;
}

const options: SelectOptionType[] = [
  {
    id: 1,
    text: "test 1",
  },
  {
    id: 2,
    text: "test 2",
  },
  {
    id: 3,
    text: "test 3",
  },
];
export const AddEstablishment: React.FC<IAddEstablishmentProps> = ({
  className,
  onClose,
}) => {
  const { control, handleSubmit } = useForm<EstablishmentFormDataProps>({
    resolver: zodResolver(establishmentValidationSchema),
    mode: "onChange",
  });

  const inputs = React.useMemo<InputType<EstablishmentFormDataProps>[]>(
    () => [
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Город",
        controller: {
          name: "city",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Страна",
        controller: {
          name: "country",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Дом",
        controller: {
          name: "house",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Улица",
        controller: {
          name: "street",
          control,
        },
      },
      {
        className: styles.field,
        required: true,
        size: "fullwidth",
        label: "Название",
        controller: {
          name: "name",
          control,
        },
      },
    ],
    [control]
  );

  const onSubmitHandler = (data: EstablishmentFormDataProps) => {
    EstablishmentsService.create(data);
  };

  return (
    <UI.Box
      data-testid="addestablishment"
      className={clsx(styles.AddEstablishment, className)}
    >
      <div className={styles.form}>
        {/* <UI.Select
          size="fullwidth"
          options={options}
          label={{ children: "Сфера бизнеса", required: true }}
        /> */}
        <p className={styles.title}>Геопозиция</p>
        <div className={styles.inputs}>
          {inputs.map((props) => (
            <UI.Input key={props.label} {...props} />
          ))}
        </div>
      </div>
      <div className={styles.uploadImg}>
        <p className={styles.title}>Фотографии торговой точки (опционально)</p>
        <div>
          <StatisticsCard.Body className={styles.uploadImgBtnMain} addNew />
        </div>
        <div className={styles.btns}>
          <UI.Button onClick={onClose} theme="outline" size="medium">
            Отмена
          </UI.Button>
          <UI.Button onClick={handleSubmit(onSubmitHandler)} size="large">
            Продолжить
          </UI.Button>
        </div>
      </div>
    </UI.Box>
  );
};
