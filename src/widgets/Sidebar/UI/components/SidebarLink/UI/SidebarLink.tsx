import React from "react";
import clsx from "clsx";
import { NavLink, Pathname, useMatch } from "react-router-dom";

import { useNavbarTitle } from "@/shared/providers/NavbarProvider";
import { useChangeSVGTheme } from "@/shared/lib/hooks";

import styles from "./SidebarLink.module.scss";

export interface ISidebarLinkProps {
  link: {
    to: Pathname;
    text: string;
  };
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarLink: React.FC<ISidebarLinkProps> = React.memo(
  ({ IconComponent, link }) => {
    useChangeSVGTheme();

    const { setTitle } = useNavbarTitle();
    const match = useMatch(link.to);

    React.useEffect(() => {
      if (match?.pathname && link.to === match.pathname) {
        setTitle(link.text);
      }
    }, [link.text, link.to, match?.pathname, setTitle]);

    return (
      <NavLink
        className={({ isActive }): string =>
          clsx(styles.SidebarLink, isActive && styles.active)
        }
        to={link.to}
      >
        <IconComponent />
        <p>{link.text}</p>
      </NavLink>
    );
  }
);
