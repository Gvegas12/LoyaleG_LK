import { useLocation } from "react-router-dom";

export const useParseURLSearchParams = <T>(): T => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return Object.fromEntries(searchParams) as T;
};
