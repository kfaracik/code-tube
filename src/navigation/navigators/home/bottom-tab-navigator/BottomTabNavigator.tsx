import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "../home";
import { SearchNavigator } from "../search";
import type { BottomTabNavigatorParams } from "@navigation/types";
import { BottomTabs } from "@navigation/constants";
import { useTranslation } from "react-i18next";

const { Navigator, Screen } =
  createBottomTabNavigator<BottomTabNavigatorParams>();

export const BottomTabNavigator = () => {
  const { t } = useTranslation();

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
          title: t("bottomBar.home"),
        }}
      />
      <Screen
        name={BottomTabs.Search}
        component={SearchNavigator}
        options={{
          title: t("bottomBar.search"),
        }}
      />
    </Navigator>
  );
};
