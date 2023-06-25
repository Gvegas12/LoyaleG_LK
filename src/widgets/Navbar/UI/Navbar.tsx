import React from "react";
import clsx from "clsx";

import { UserButton } from "@/entities/user";
import { useNavbarTitle } from "@/shared/providers/NavbarProvider";
import { NavbarAddOwnerButton } from "./components/NavbarAddOwnerButton/NavbarAddOwnerButton";

import styles from "./Navbar.module.scss";

export interface INavbarProps {
  className?: string;
}

const isAdmin = true;

export const Navbar: React.FC<INavbarProps> = React.memo(({ className }) => {
  const { title } = useNavbarTitle();

  const userElementsWrapper = isAdmin ? (
    <div className={styles.userElementsWrapper}>
      <NavbarAddOwnerButton />
      <UserButton />
    </div>
  ) : (
    <UserButton />
  );

  return (
    <div data-testid="navbar" className={clsx(styles.Navbar, className)}>
      <div className={styles.pageName}>{title}</div>
      {userElementsWrapper}
    </div>
  );
});
