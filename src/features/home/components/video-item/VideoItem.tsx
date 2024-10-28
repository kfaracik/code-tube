import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Video } from "@shared/api";
import dayjs from "dayjs";

interface VideoItemProps {
  title: Video["snippet"]["title"];
  publishTime: Video["snippet"]["publishTime"];
  thumbnailsUrl: Video["snippet"]["thumbnails"]["default"]["url"];
  onPress: () => void;
}

export const VideoItem = ({
  title,
  thumbnailsUrl,
  publishTime,
  onPress,
}: VideoItemProps) => {
  const formattedDate = dayjs(publishTime).format("DD.MM.YYYY");

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: thumbnailsUrl }} style={styles.thumbnail} />
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
      <Text style={styles.date}>{formattedDate}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 159,
    width: 180,
  },
  thumbnail: {
    width: 180,
    height: 112,
    borderRadius: 16,
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 12,
  },
  date: {
    fontSize: 12,
    color: "#2B2D42",
    textAlign: "right",
  },
});
