import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreens, Screens } from "@navigation/constants";
import type { HomeNavigatorParams } from "@navigation/types";
import { HomeScreen, SettingsScreen } from "@features/home";

const { Navigator, Screen } = createNativeStackNavigator<HomeNavigatorParams>();

export const HomeNavigator = () => {
  return (
    <Navigator initialRouteName={HomeScreens.Home}>
      <Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={Screens.Settings}
        component={SettingsScreen}
        options={{
          headerShown: true,
        }}
      />
    </Navigator>
  );
};
