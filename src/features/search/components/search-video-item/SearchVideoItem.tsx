import { Video } from "@shared/api";
import { formattedDate } from "@shared/utils";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

type SearchVideoItemProps = {
  video: Video;
};

export const SearchVideoItem = ({ video }: SearchVideoItemProps) => {
  const { title, publishTime } = video.snippet;
  const thumbnailsUrl = video.snippet.thumbnails.default.url;
  const chanelName = video.channelName;

  const onItemPress = () => {};

  return (
    <TouchableRipple onPress={onItemPress} style={styles.container}>
      <>
        <Image source={{ uri: thumbnailsUrl }} style={styles.thumbnail} />
        <Text style={styles.chanelName} numberOfLines={2} ellipsizeMode="tail">
          {chanelName}
        </Text>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.date}>{formattedDate(publishTime)}</Text>
      </>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    borderRadius: 16,
    marginHorizontal: 24,
  },
  input: {
    height: 44,
    fontSize: 16,
  },
  outlineStyle: {
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: "#FFF",
  },
  resultText: {
    fontSize: 12,
    color: "#2B2D42",
    marginBottom: 4,
  },
  thumbnail: {
    height: 200,
    borderRadius: 16,
  },
  chanelName: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 12,
  },
  date: {
    marginTop: 12,
    fontSize: 10,
    color: "#2B2D42",
    textAlign: "right",
  },
});
