import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "@navigation/constants";
import type { HomeNavigatorParams } from "@navigation/types";
import { HomeScreen } from "@features/home";

const { Navigator, Screen } = createNativeStackNavigator<HomeNavigatorParams>();

export const HomeNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={Screens.Home} component={HomeScreen} />
    </Navigator>
  );
};
