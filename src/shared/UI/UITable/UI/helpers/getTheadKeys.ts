import type { TbodyType, TheadType } from "../../types";

export const getTheadKeys = (tbody: TbodyType[]): TheadType[] => {
  const result: string[] = [];
  const set = new Set<string>();

  tbody.map((item) => Object.keys(item).map((k) => set.add(k)));
  set.forEach((item) => result.push(item));

  return result;
};
