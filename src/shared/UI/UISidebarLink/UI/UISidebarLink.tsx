import React from "react";
import clsx from "clsx";
import { NavLink, Pathname, useMatch } from "react-router-dom";

import UI from "@/shared/UI";
import { useNavbarTitle } from "@/shared/providers/NavbarProvider";
import { useChangeSVGTheme } from "@/shared/lib/hooks";

import styles from "./UISidebarLink.module.scss";

export interface IUISidebarLinkProps {
  link: {
    to: Pathname;
    text: string;
  };
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  badge?: number;
}

export const UISidebarLink: React.FC<IUISidebarLinkProps> = React.memo(
  ({ IconComponent, link, badge }) => {
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
          clsx(styles.UISidebarLink, isActive && styles.active)
        }
        to={link.to}
      >
        <IconComponent />
        <div className={styles.textWrapper}>
          <p>{link.text}</p>
          {Boolean(badge) && <UI.Badge>{badge}</UI.Badge>}
        </div>
      </NavLink>
    );
  }
);
