import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import UI from "@/shared/UI";
import {
  SubscriptionCard,
  ISubscriptionCardProps,
} from "../SubscriptionCard/SubscriptionCard";
import { SubscriptionsService } from "@/entities/subscriptions";
import { publicRoutePaths } from "@/shared/config/routes";
import { SessionStorageKeysEnum } from "@/shared/lib/constants";

import styles from "./SelectSubscription.module.scss";

interface ISelectSubscriptionProps {
  className?: string;
}

export const SelectSubscription: React.FC<ISelectSubscriptionProps> = ({
  className,
}) => {
  const { register } = useForm({ mode: "onChange" });

  const [radioInputs, setRadioInputs] = React.useState<
    ISubscriptionCardProps[]
  >([]);
  const [checked, setChecked] = React.useState("1");

  React.useEffect(() => {
    sessionStorage.setItem(SessionStorageKeysEnum.SUBSCRIPTION_ID, checked);
  }, [checked]);

  React.useEffect(() => {
    SubscriptionsService.getAll()
      .then((data) =>
        setRadioInputs(
          data.map((item) => ({
            img: "/img/single.png",
            title: item.name,
            type: "radio",
            value: String(item.id),
            name: "subscriptionId",
            register,
            checked: String(item.id) === checked,
            onChange: () => setChecked(String(item.id)),
          }))
        )
      )
      .then((err) => /* Произошла непредвиденная ошибка */ "");
  }, [checked, register]);

  return (
    <div className={clsx(styles.SelectSubscription, className)}>
      <h3 className={styles.title}>Выберите тип подписки</h3>
      <div className={styles.cards}>
        {radioInputs?.length &&
          radioInputs.map((item, i) => <SubscriptionCard {...item} key={i} />)}
      </div>
      <Link to={publicRoutePaths.auth}>
        <UI.Button
          // onClick={(e) => {
          //   e.preventDefault();
          //   navigate();
          // }}
          size="fullwidth"
          className={styles.btn}
        >
          Отмена
        </UI.Button>
      </Link>
    </div>
  );
};
