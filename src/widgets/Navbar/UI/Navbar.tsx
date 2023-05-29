import React from "react";
import clsx from "clsx";

import UserButton from "@/entities/user";
import { useNavbarTitle } from "@/shared/providers/NavbarProvider";

import styles from "./Navbar.module.scss";

export interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const { title } = useNavbarTitle();

  return (
    <div data-testid="navbar" className={clsx(styles.Navbar, className)}>
      <div className={styles.pageName}>{title}</div>
      <UserButton />
    </div>
  );
};
