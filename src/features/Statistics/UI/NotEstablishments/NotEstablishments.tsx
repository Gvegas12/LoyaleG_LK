import React from "react";

import { Link } from "react-router-dom";
import styles from "./NotEstablishments.module.scss";
import UI from "@/shared/UI";
import { authRoutePaths } from "@/shared/config/routes";

export const NotEstablishments: React.FC = () => (
  <UI.Box className={styles.NotEstablishments}>
    <p className={styles.title}>У вас нет добавленных торговых точек</p>
    <Link to={authRoutePaths.establishments}>
      <UI.Button size="large">Добавить торговую точку</UI.Button>
    </Link>
  </UI.Box>
);
