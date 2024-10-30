import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator, AuthNavigator } from "../navigators";
import { useAuth } from "@shared/hooks";

export const AppContent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
