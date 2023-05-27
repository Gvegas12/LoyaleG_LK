import React from "react";
import clsx from "clsx";

import styles from "./Navbar.module.scss";
import UserButton from "@/entities/user";

export interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => (
  <div data-testid="navbar" className={clsx(styles.Navbar, className)}>
    <div className={styles.pageName}>Панель управления</div>
    <UserButton />
  </div>
);
