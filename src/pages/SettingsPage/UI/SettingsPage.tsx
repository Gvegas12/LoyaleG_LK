import React from "react";

import styles from "./SettingsPage.module.scss";
import UI from "@/shared/UI";

const SettingsPage: React.FC = () => (
  <div className={styles.SettingsPage}>
    <div className={styles.field}>
      {/* <UI.Input
        min={1}
        type="number"
        label={{ children: "Чашек до бесплатной" }}
      /> */}
      <UI.Button size="small">OK</UI.Button>
    </div>
    <div className={styles.field}>
      {/* <UI.Input label={{ children: "Email" }} /> */}
      <UI.Button size="small">OK</UI.Button>
    </div>
    <div className={styles.field}>
      {/* <UI.Input label={{ children: "Имя" }} /> */}
      <UI.Button size="small">OK</UI.Button>
    </div>
    <div className={styles.field}>
      {/* <UI.Input label={{ children: "Фамилия" }} /> */}
      <UI.Button size="small">OK</UI.Button>
    </div>
    <UI.Button className={styles.changePasswordBtn} size="large">
      Поменять пароль
    </UI.Button>
  </div>
);

export default SettingsPage;
