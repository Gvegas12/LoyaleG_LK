import React from "react";
import clsx from "clsx";

import Logo from "@/shared/assets/img/Logo.svg";
import { useChangeSVGTheme } from "@/shared/hooks/useChangeSVGTheme";

export interface IUILogoProps {
  className?: string;
}

export const UILogo: React.FC<IUILogoProps> = ({ className }) => {
  useChangeSVGTheme();

  return <Logo className={clsx(className)} />;
};
