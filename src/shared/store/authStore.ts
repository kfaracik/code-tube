import { createSelectors } from "@lib/zustand";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const initialState = {
  isAuthenticated: false,
};

export const authStore = create<AuthState>()(
  persist(
    (set) => ({
      ...initialState,
      login: () => {
        set({ isAuthenticated: true });
      },
      logout: () => {
        set({ isAuthenticated: false });
      },
    }),
    {
      name: "auth",
    }
  )
);

export const useAuthStore = createSelectors(authStore);
