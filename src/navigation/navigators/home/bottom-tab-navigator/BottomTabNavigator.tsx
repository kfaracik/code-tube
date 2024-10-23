import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "../home";
import { SearchNavigator } from "../search";
import type { BottomTabNavigatorParams } from "@navigation/types";
import { BottomTabs } from "@navigation/constants";

const { Navigator, Screen } =
  createBottomTabNavigator<BottomTabNavigatorParams>();

export const BottomTabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name={BottomTabs.Home}
        component={HomeNavigator}
        options={{
          title: "Home",
        }}
      />
      <Screen
        name={BottomTabs.Search}
        component={SearchNavigator}
        options={{
          title: "Search",
        }}
      />
    </Navigator>
  );
};
