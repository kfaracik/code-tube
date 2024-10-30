import { useEffect, useState, useCallback } from "react";
import { authStore } from "shared/store";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const checkAuth = useCallback(async () => {
    const authenticated = await authStore.isAuthenticated();
    setIsLoggedIn(authenticated);
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = useCallback(async () => {
    await authStore.login();
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(async () => {
    await authStore.logout();
    setIsLoggedIn(false);
  }, []);

  return { isLoggedIn, login, logout };
};
