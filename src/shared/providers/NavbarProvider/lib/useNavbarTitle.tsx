import React from "react";
import { NavbarContext, NavbarContextProps } from "./NavbarContext";

export function useNavbarTitle(): Required<NavbarContextProps> {
  const { title, setTitle } = React.useContext(NavbarContext);

  return {
    title,
    setTitle,
  };
}
