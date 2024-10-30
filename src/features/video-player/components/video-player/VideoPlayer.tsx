import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Video, { VideoRef } from "react-native-video";

const { width } = Dimensions.get("window");
const ASPECT_RATIO = 16 / 9;

export const VideoPlayer = ({
  onProgress,
}: {
  onProgress: (time: number) => void;
}) => {
  const videoRef = useRef<VideoRef>(null);
  const source = require("../../../../shared/assets/video/broadchurch.mp4");
  const [height, setHeight] = useState<number>(width / ASPECT_RATIO);

  useEffect(() => {
    const updateLayout = () => {
      const newHeight = width / ASPECT_RATIO;
      setHeight(newHeight);
    };

    const subscription = Dimensions.addEventListener("change", updateLayout);

    return () => {
      subscription?.remove();
    };
  }, [width]);

  return (
    <View style={[styles.container, { height }]}>
      <Video
        source={source}
        ref={videoRef}
        onProgress={(progress) => onProgress(progress.currentTime)}
        style={styles.video}
        controls
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
