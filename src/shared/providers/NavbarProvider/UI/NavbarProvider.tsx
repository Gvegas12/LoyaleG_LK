import React from "react";
import { NavbarContext } from "../lib/NavbarContext";

interface NavbarProviderProps {
  children: React.ReactNode;
  value?: string;
}

const NavbarProvider: React.FC<NavbarProviderProps> = ({ children, value }) => {
  const [title, setTitle] = React.useState<string>(value);

  // TODO why useMemo
  const defaultTitle = React.useMemo(() => ({ title, setTitle }), [title]);

  return (
    <NavbarContext.Provider value={defaultTitle}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
