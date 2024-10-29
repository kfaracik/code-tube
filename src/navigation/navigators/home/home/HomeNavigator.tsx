import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreens } from "@navigation/constants";
import type { HomeNavigatorParams } from "@navigation/types";
import { HomeScreen, SettingsScreen } from "@features/home";
import { VideoPlayerScreen } from "features/video-player";

const { Navigator, Screen } = createNativeStackNavigator<HomeNavigatorParams>();

export const HomeNavigator = () => {
  return (
    <Navigator initialRouteName={HomeScreens.Home}>
      <Screen
        name={HomeScreens.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={HomeScreens.Settings}
        component={SettingsScreen}
        options={{
          headerShown: true,
        }}
      />
      <Screen
        name={HomeScreens.VideoPlayer}
        component={VideoPlayerScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
