import React, { useEffect, useState } from "react";
import { ScreenContainer, TextInput } from "@shared/components";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { fetchVideosForCategory, Video } from "@shared/api";
import { VideoSection } from "../components";
import { BottomTabs, Screens } from "@navigation/constants";
import type { BottomTabNavigatorParams } from "@navigation/types";
import { useTranslation } from "react-i18next";

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParams, BottomTabs.Home>,
  NativeStackNavigationProp<any>
>;

export const HomeScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const categories = ["React Native", "React", "Javascript", "Typescript"];
  const [videos, setVideos] = useState<{ [key: string]: Video[] }>({});

  useEffect(() => {
    categories.forEach(async (category) => {
      const data = await fetchVideosForCategory(category);
      setVideos((prevVideos) => ({
        ...prevVideos,
        [category]: data,
      }));
    });
  }, []);

  const handleShowMore = (category: string) => {
    // navigation.navigate(Screens.SearchVideo, { query: category });
    navigation.jumpTo(BottomTabs.Search);
  };

  const handleVideoPress = (video: Video) => {
    // navigation.navigate("VideoPlayer", { video });
  };

  const onSearchPress = () => {
    navigation.jumpTo(BottomTabs.Search);
  };

  const onLogoutPress = () => {
    navigation.navigate(Screens.Settings);
  };

  return (
    <ScreenContainer scrollView>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={onSearchPress} style={styles.search}>
          <TextInput value="" />
        </TouchableOpacity>
        <IconButton
          onPress={onLogoutPress}
          icon={() => <Ionicons name="settings-outline" size={32} />}
        />
      </View>
      {Object.keys(videos).map((category) => (
        <VideoSection
          key={category}
          title={category}
          videos={videos[category]}
          onShowMore={() => handleShowMore(category)}
          onVideoPress={handleVideoPress}
          showDivider={category !== categories[categories.length - 1]}
        />
      ))}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    margin: 24,
    marginRight: 0,
    paddingTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    flex: 1,
  },
});
