import React from "react";
import clsx from "clsx";

import UI from "@/shared/UI";
import MockAvatar from "./icons/mock-avatar.svg";
import { useChangeSVGTheme } from "@/shared/lib/hooks";
import { AuthService } from "@/entities/auth";

import styles from "./UserButton.module.scss";

export interface IUserButtonProps {
  className?: string;
}

export const UserButton: React.FC<IUserButtonProps> = ({ className }) => {
  useChangeSVGTheme();

  const [showTooltip, setShowTooltip] = React.useState(false);
  const onLogout = () => {
    AuthService.logout();
  };

  return (
    <div
      onClick={() => setShowTooltip(!showTooltip)}
      className={clsx(styles.UserButton, className)}
    >
      <MockAvatar />
      <div>
        <p className={styles.welcome}>Добро пожаловать</p>
        <div className={styles.name}>
          <span>Daniel Estasmos</span>
          <UI.Triangle className={styles.triangle} />
        </div>
      </div>
      {showTooltip && (
        <UI.Box className={styles.btns}>
          <button onClick={onLogout} className={styles.btn}>
            Выйти
          </button>
        </UI.Box>
      )}
    </div>
  );
};
