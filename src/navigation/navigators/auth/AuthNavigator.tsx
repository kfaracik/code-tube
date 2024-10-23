import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "@features/auth";
import type { AuthNavigatorParams } from "@navigation/types";
import { Screens } from "@navigation/constants";

const { Navigator, Screen } = createNativeStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={Screens.SignIn} component={SignInScreen} />
    </Navigator>
  );
};
