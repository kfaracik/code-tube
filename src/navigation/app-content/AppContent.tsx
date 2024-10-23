import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator, AuthNavigator } from "../navigators";

export const AppContent = () => {
  const isLogged = false;

  return (
    <NavigationContainer>
      {isLogged ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
