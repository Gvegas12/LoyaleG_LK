import type { TdType, ThType } from "../../types";

export const getTableHeadKeys = (tbody: TdType[]): ThType[] => {
  const result: string[] = [];
  const set = new Set<string>();

  tbody.map((item) => Object.keys(item).map((k) => set.add(k)));
  set.forEach((item) => result.push(item));

  return result;
};
