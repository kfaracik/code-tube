import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_KEY = "isAuthenticated";

class AuthStore {
  private static instance: AuthStore;

  private constructor() {}

  public static getInstance(): AuthStore {
    if (!AuthStore.instance) {
      AuthStore.instance = new AuthStore();
    }
    return AuthStore.instance;
  }

  public async isAuthenticated(): Promise<boolean> {
    const storedValue = await AsyncStorage.getItem(AUTH_KEY);
    return storedValue === "true";
  }

  public async login(): Promise<void> {
    await AsyncStorage.setItem(AUTH_KEY, "true");
  }

  public async logout(): Promise<void> {
    await AsyncStorage.removeItem(AUTH_KEY);
  }
}

export const authStore = AuthStore.getInstance();
