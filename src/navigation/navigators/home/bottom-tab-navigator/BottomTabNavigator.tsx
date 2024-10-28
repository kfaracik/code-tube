import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "../home";
import { SearchNavigator } from "../search";
import type { BottomTabNavigatorParams } from "@navigation/types";
import { BottomTabs } from "@navigation/constants";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { Text } from "react-native-paper";

const { Navigator, Screen } = createBottomTabNavigator<BottomTabNavigatorParams>();

export const BottomTabNavigator = () => {
  const { t } = useTranslation();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2B2D42",
        tabBarInactiveTintColor: "#FFF",
        tabBarStyle: {
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
