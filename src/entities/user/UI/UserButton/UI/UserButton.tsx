import React from "react";
import clsx from "clsx";

import MockAvatar from "./icons/mock-avatar.svg";

import styles from "./UserButton.module.scss";
import UI from "@/shared/UI";
import { useChangeSVGTheme } from "@/shared/hooks/useChangeSVGTheme";

export interface IUserButtonProps {
  className?: string;
}

export const UserButton: React.FC<IUserButtonProps> = ({ className }) => {
  useChangeSVGTheme();

  return (
    <div className={clsx(styles.UserButton, className)}>
      <MockAvatar />
      <div>
        <p className={styles.welcome}>Добро пожаловать</p>
        <button className={styles.showBtn}>
          <p className={styles.name}>
            <span>Daniel Estasmos</span>
            <UI.Triangle className={styles.triangle} />
          </p>
        </button>
      </div>
    </div>
  );
};
