import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchVideoScreen } from "@features/search";
import type { SearchNavigatorParams } from "@navigation/types";
import { Screens } from "@navigation/constants";

const { Navigator, Screen } =
  createNativeStackNavigator<SearchNavigatorParams>();

export const SearchNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={Screens.SearchVideo} component={SearchVideoScreen} />
    </Navigator>
  );
};
