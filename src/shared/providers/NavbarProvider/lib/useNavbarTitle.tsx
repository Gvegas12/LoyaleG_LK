import React from "react";
import { NavbarContext } from "./NavbarContext";

interface useNavbarTitleResult {
  title: string;
  setTitle: (title: string) => void;
}

export function useNavbarTitle(): useNavbarTitleResult {
  const { title, setTitle } = React.useContext(NavbarContext);

  return {
    title,
    setTitle,
  };
}
