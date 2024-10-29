import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchVideoScreen } from "@features/search";
import type { SearchNavigatorParams } from "@navigation/types";
import { SearchScreens } from "@navigation/constants";
import { VideoPlayerScreen } from "features/video-player";

const { Navigator, Screen } =
  createNativeStackNavigator<SearchNavigatorParams>();

export const SearchNavigator = () => {
  return (
    <Navigator initialRouteName={SearchScreens.SearchVideo}>
      <Screen
        name={SearchScreens.SearchVideo}
        component={SearchVideoScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={SearchScreens.VideoPlayer}
        component={VideoPlayerScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
