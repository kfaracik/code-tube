import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Switch, Divider, Text } from "react-native-paper";
import { ScreenContainer } from "@shared/components";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const userName = "John Doe"; // Default user
  const notificationTime = "12:00"; // Default time

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <ScreenContainer>
      <View style={styles.avatarContainer}>
        <Avatar.Icon
          size={48}
          style={styles.avatar}
          icon={() => <Ionicons name="person-outline" size={20} color="#fff" />}
        />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.titleContainer}>
        <Ionicons name="notifications-outline" size={20} color="#2B2D42" />
        <Text style={styles.title}>{t("settings.reminderTitle")}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.reminderText}>
          {t("settings.reminderFrequency")}
        </Text>
        <Ionicons name="time-outline" size={20} color="#2B2D42" />
        <Text style={styles.reminderText}>{notificationTime}</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={toggleSwitch}
          thumbColor="lightgray"
          trackColor={{ true: "#2B2D42", false: "#999" }}
        />
      </View>
      <Text style={styles.infoText}>{t("settings.reminderMessage")}</Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginTop: 44,
    marginBottom: 41,
  },
  avatar: {
    backgroundColor: "#2B2D42",
  },
  userName: {
    fontSize: 14,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
    marginLeft: 27,
  },
  title: {
    fontSize: 14,
    lineHeight: 24,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 17,
    paddingLeft: 33,
    paddingRight: 24,
  },
  reminderText: {
    fontSize: 12,
    lineHeight: 24,
  },
  infoText: {
    marginTop: 12,
    marginLeft: 33,
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 24,
  },
  divider: {
    height: 2,
    backgroundColor: "#2B2D42",
  },
});
