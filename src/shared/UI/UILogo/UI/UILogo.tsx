import React from "react";
import clsx from "clsx";

import Logo from "@/shared/assets/img/Logo.svg";

export interface IUILogoProps {
  className?: string;
}

export const UILogo: React.FC<IUILogoProps> = ({ className }) => {
  React.useEffect(() => {
    // eslint-disable-next-line quotes, @typescript-eslint/quotes
    document.querySelectorAll('[fill="app-theme"]').forEach((HTMLElement) => {
      HTMLElement.setAttribute("fill", "var(--primary-color)");
    });
  }, []);

  return <Logo data-testid="test--uilogo" className={clsx(className)} />;
};
