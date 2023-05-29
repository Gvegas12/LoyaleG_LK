import { createContext } from "react";

export interface NavbarContextProps {
  title?: string;
  setTitle?: (title: string) => void;
}

export const NavbarContext = createContext<NavbarContextProps>({});
