import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, subscribeWithSelector } from "zustand/middleware";

import { storeShallowHOC } from "@/shared/lib/store";
import type { IAuthSchema } from "../types/auth";

const store = create(
  devtools(
    subscribeWithSelector(
      immer<IAuthSchema>((set) => ({
        isAuth: false,
        setIsAuth: (newState) => set((state) => void (state.isAuth = newState)),
        logout: () => {
          set((state) => void (state.isAuth = false));
        },
      }))
    )
  )
);

const useAuthStore = storeShallowHOC(store);

export { useAuthStore, store as authStore };
