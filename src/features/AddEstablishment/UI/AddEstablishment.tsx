import React from "react";
import clsx from "clsx";

import UI from "@/shared/UI";

import styles from "./AddEstablishment.module.scss";
import { UISelectOptionType } from "@/shared/UI/UISelect";

export interface IAddEstablishmentProps {
  className?: string;
}

const options: UISelectOptionType[] = [
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
}) => (
  <UI.Box
    data-testid="addestablishment"
    className={clsx(styles.AddEstablishment, className)}
  >
    <div className={styles.form}>
      <UI.Input required label={{ children: "Label", required: true }} />
      <UI.Select
        options={options}
        label={{ children: "Label", required: true }}
      />
      <UI.Input required label={{ children: "Label" }} />
      <UI.Input required label={{ children: "Label" }} />
    </div>
  </UI.Box>
);
