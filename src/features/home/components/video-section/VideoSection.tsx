import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video } from "@shared/api";
import { VideoItem } from "../video-item";
import { FlashList } from "@shopify/flash-list";
import { Link } from "@shared/components";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Divider } from "react-native-paper";

type VideoSectionProps = {
  title: string;
  videos: Video[];
  onShowMore: () => void;
  onVideoPress: (video: Video) => void;
  showDivider: boolean;
};
export const VideoSection = ({
  title,
  videos,
  onShowMore,
  onVideoPress,
  showDivider = true,
}: VideoSectionProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Link onPress={onShowMore}>{t("home.showMore")}</Link>
      </View>
      <View style={styles.listWrapper}>
        <FlashList
          data={videos}
          horizontal
          estimatedItemSize={159}
          renderItem={({ item }) => (
            <VideoItem
              title={item.snippet.title}
              publishTime={item.snippet.publishTime}
              thumbnailsUrl={item.snippet.thumbnails.default.url}
              onPress={() => onVideoPress(item)}
              key={`${item.id.videoId}-${title}`}
            />
          )}
          ListEmptyComponent={
            <ActivityIndicator size={"large"} style={styles.loader} />
          }
          keyExtractor={(item, index) => `${item.id.videoId}-${index}`}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => <View style={styles.separator} />}
        />
      </View>
      {showDivider && <Divider style={styles.divider} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 24,
    marginLeft: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loader: {
    marginVertical: 20,
  },
  separator: {
    width: 19,
  },
  listWrapper: {
    minHeight: 180,
  },
  divider: {
    height: 2,
    backgroundColor: "#2B2D42",
    marginLeft: -24,
  },
});
