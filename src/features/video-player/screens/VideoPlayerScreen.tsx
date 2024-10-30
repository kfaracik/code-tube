import React, { useState } from "react";
import { ScreenContainer } from "@shared/components";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Notes, VideoDetails, VideoPlayer } from "../components";
import { Avatar, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import type { SearchNavigatorParams } from "@navigation/types";
import { SearchScreens } from "@navigation/constants";
import { useTranslation } from "react-i18next";

type VideoPlayerScreenRouteProp = RouteProp<
  SearchNavigatorParams,
  SearchScreens.VideoPlayer
>;

export const VideoPlayerScreen = () => {
  const { t } = useTranslation();
  const route = useRoute<VideoPlayerScreenRouteProp>();
  const { video } = route.params;
  const [activeTab, setActiveTab] = useState<"details" | "notes">("details");
  const [currentTime, setCurrentTime] = useState(0);
  const videoId = video?.id.videoId;
  const channelName = video?.channelName;
  const title = video?.snippet.title;
  const description = video?.snippet.description;
  const views = video?.popularity;
  const likes = video?.popularity;

  if (!video || !videoId) {
    return <Text>{t("videoPlayer.noData")}</Text>;
  }

  return (
    <ScreenContainer style={styles.screenContainer}>
      <VideoPlayer onProgress={setCurrentTime} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.avatarContainer}>
        <Avatar.Icon
          size={48}
          style={styles.avatar}
          icon={() => <Ionicons name="person-outline" size={20} color="#fff" />}
        />
        <Text style={styles.channelName}>{channelName}</Text>
      </View>
      <View style={styles.tabContainer}>
        <View style={styles.tabHeader}>
          <TouchableOpacity
            onPress={() => setActiveTab("details")}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "details" && styles.activeTabText,
              ]}
            >
              {t("videoPlayer.details")}
            </Text>
            {activeTab === "details" && <View style={styles.activeLine} />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("notes")}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "notes" && styles.activeTabText,
              ]}
            >
              {t("videoPlayer.notes")}
            </Text>
            {activeTab === "notes" && <View style={styles.activeLine} />}
          </TouchableOpacity>
        </View>
        <View style={styles.tabContent}>
          {activeTab === "details" ? (
            <VideoDetails
              description={description}
              views={views}
              likes={likes}
            />
          ) : (
            <Notes videoId={videoId} currentTime={currentTime} />
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginLeft: 24,
    marginTop: 20,
    marginBottom: 16,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
    marginBottom: 19,
    marginLeft: 24,
  },
  avatar: {
    backgroundColor: "#2B2D42",
  },
  channelName: {
    fontSize: 14,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 24,
  },
  tabHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  tab: {
    alignItems: "center",
    flex: 1,
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    fontWeight: "bold",
    color: "#000",
  },
  activeLine: {
    marginTop: 4,
    height: 2,
    backgroundColor: "#000",
    width: "100%",
  },
  tabContent: {
    flex: 1,
  },
});
