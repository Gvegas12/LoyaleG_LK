import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, subscribeWithSelector } from "zustand/middleware";

import { storeShallowHOC } from "@/shared/lib/store";
import type { IUserSchema, User } from "../types";

const store = create(
  devtools(
    subscribeWithSelector(
      immer<IUserSchema>((set) => ({
        user: {} as User,
        authCodeData: [],
        setUser: (data) =>
          set((state) => void (state.user = { ...state.user, ...data })),
        setAuthCodeData: (data) =>
          set((state) => void (state.authCodeData = [...data])),
      }))
    )
  )
);

const useUserStore = storeShallowHOC(store);

export { useUserStore, store as UserStore };
