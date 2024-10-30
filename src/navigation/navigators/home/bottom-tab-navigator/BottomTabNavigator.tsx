import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "../home";
import { SearchNavigator } from "../search";
import type { BottomTabNavigatorParams } from "@navigation/types";
import { BottomTabs, Screens } from "@navigation/constants";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native-paper";
import {
  useNavigationState,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

const { Navigator, Screen } =
  createBottomTabNavigator<BottomTabNavigatorParams>();

const HIDDEN_BOTTOM_TABS = [Screens.Settings, Screens.VideoPlayer];
type HiddenBottomTabScreensType = (typeof HIDDEN_BOTTOM_TABS)[number];

const getActiveScreenName = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
  return routeName;
};

export const BottomTabNavigator = () => {
  const { t } = useTranslation();

  const currentRouteName =
    useNavigationState((state) => {
      if (!state?.routes) return "";
      const route = state.routes[state.index];
      return getActiveScreenName(route);
    }) ?? "";

  const shouldShowBottomTabs = !HIDDEN_BOTTOM_TABS.includes(
    currentRouteName as HiddenBottomTabScreensType
  );

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2B2D42",
        tabBarInactiveTintColor: "#FFF",
        tabBarStyle: {
          display: shouldShowBottomTabs ? "flex" : "none",
          backgroundColor: "#8D99AE",
          height: 72,
        },
      }}
    >
      <Screen
        name={BottomTabs.Home}
        component={HomeNavigator}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={[styles.text, { color }]}>{t("bottomBar.home")}</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={32} color={color} />
          ),
        }}
      />
      <Screen
        name={BottomTabs.Search}
        component={SearchNavigator}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={[styles.text, { color }]}>
              {t("bottomBar.search")}
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={32} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});
