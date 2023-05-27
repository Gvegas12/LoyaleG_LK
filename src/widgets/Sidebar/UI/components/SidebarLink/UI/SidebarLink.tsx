import React from "react";
import { NavLink, Pathname } from "react-router-dom";

import clsx from "clsx";
import { useChangeSVGTheme } from "@/shared/hooks/useChangeSVGTheme";

import styles from "./SidebarLink.module.scss";

export interface ISidebarLinkProps {
  to: Pathname;
  text: string;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarLink: React.FC<ISidebarLinkProps> = ({
  IconComponent,
  text,
  to,
}) => {
  useChangeSVGTheme();
  return (
    <NavLink
      className={({ isActive }): string =>
        clsx(styles.SidebarLink, isActive && styles.active)
      }
      to={to}
    >
      <IconComponent />
      <p>{text}</p>
    </NavLink>
  );
};
