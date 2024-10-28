import { resetStores } from "@lib/zustand";
import { useAuthStore } from "../store";

export const useAuthStatus = () => {
  const isAuthenticated = useAuthStore.use.isAuthenticated;
  const login = useAuthStore.use.login();
  const logOut = useAuthStore.use.login();

  const logout = () => {
    logOut();
    resetStores(["session"]); // TODO: reset this store
  };

  return { isSigned: isAuthenticated, login, logout };
};
