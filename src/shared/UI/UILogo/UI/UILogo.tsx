import React from "react";
import clsx from "clsx";

import Logo from "@/shared/assets/img/Logo.svg";
import { useChangeSVGTheme } from "@/shared/lib/hooks/useChangeSVGTheme";
import { authRoutePaths } from "@/shared/config/routes";

import styles from "./UILogo.module.scss";

export interface IUILogoProps {
  className?: string;
}

export const UILogo: React.FC<IUILogoProps> = ({ className }) => {
  useChangeSVGTheme();

  return (
    <a className={clsx(className)} href={authRoutePaths.home}>
      <Logo className={styles.UILogo} />
    </a>
  );
};
