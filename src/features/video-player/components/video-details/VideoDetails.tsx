import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

type VideoDetailsProps = {
  description: string | undefined;
  views: number | undefined;
  likes: number | undefined;
};

export const VideoDetails = ({
  description,
  views,
  likes,
}: VideoDetailsProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>{t("videoDetails.description")}:</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.boldText}>{t("videoDetails.statistics")}:</Text>
      <View style={styles.cardContainer}>
        <Card style={styles.statCard}>
          <Card.Content style={styles.statCardContent}>
            <Ionicons name="tv-outline" size={20} color="#fff" />
            <Text style={styles.statText}>
              {views} {t("videoDetails.views")}
            </Text>
          </Card.Content>
        </Card>
        <Card style={styles.statCard}>
          <Card.Content style={styles.statCardContent}>
            <Ionicons name="thumbs-up-outline" size={20} color="#fff" />
            <Text style={styles.statText}>
              {likes} {t("videoDetails.likes")}
            </Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  statCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  statCard: {
    backgroundColor: "#2B2D42",
  },
  statText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
  },
});
