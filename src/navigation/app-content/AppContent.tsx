import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator, AuthNavigator } from "../navigators";
import { useAuthStatus } from "@shared/hooks";

export const AppContent = () => {
  const { isSigned } = useAuthStatus();


  return (
    <NavigationContainer>
      {isSigned ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
