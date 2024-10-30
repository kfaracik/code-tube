import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import {
  ActivityIndicator,
  Button as TextButton,
  PaperProvider,
} from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import { ScreenContainer, TextInput } from "@shared/components";
import { useTranslation } from "react-i18next";
import { SearchVideoItem, SortModal } from "../components";
import { fetchVideos, Video } from "@shared/api";
import { getSortOptions, SortOptions, sortVideosBy } from "../utils";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SearchNavigatorParams } from "@navigation/types";
import { SearchScreens } from "@navigation/constants";

type SearchVideoScreenRouteProp = RouteProp<
  SearchNavigatorParams,
  SearchScreens.SearchVideo
>;

export const SearchVideoScreen = () => {
  const { t } = useTranslation();
  const route = useRoute<SearchVideoScreenRouteProp>();
  const [query, setQuery] = useState(route.params?.query ?? "");
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState<SortOptions>(
    SortOptions.POPULAR
  );
  const [tempSortOption, setTempSortOption] = useState<SortOptions>(
    SortOptions.POPULAR
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [resultCount, setResultCount] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchVideos(query);
      setVideos(data);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    if (route.params?.query) {
      setQuery(route.params.query);
    }
  }, [route.params?.query]);

  const sortVideos = () => {
    const sortedVideos = sortVideosBy(videos, tempSortOption);
    setVideos(sortedVideos);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSortOption(tempSortOption);
    sortVideos();
  };

  const sortOptions = getSortOptions();

  return (
    <PaperProvider>
      <ScreenContainer style={styles.container}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          resultCount={resultCount}
          style={styles.input}
        />
        <TextButton mode="text" style={styles.sortButton} onPress={openModal}>
          <Text style={styles.text}>
            {t("search.label")}
            <Text style={styles.textBold}>
              {sortOptions.find((opt) => opt.key === sortOption)?.label}
            </Text>
          </Text>
        </TextButton>
        <View style={styles.listWrapper}>
          <FlashList
            data={videos}
            renderItem={({ item }) => <SearchVideoItem video={item} />}
            estimatedItemSize={300}
            keyExtractor={(item) => item.id.videoId}
            ListEmptyComponent={
              loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <Text>{t("common.noResults")}</Text>
              )
            }
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={
              loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <View style={styles.separator} />
              )
            }
          />
        </View>
        <SortModal
          visible={modalVisible}
          onDismiss={closeModal}
          sortOption={tempSortOption}
          onSortConfirm={(option) => setTempSortOption(option)}
        />
      </ScreenContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 0,
  },
  input: {
    marginBottom: 10,
    marginTop: 20,
    marginHorizontal: 24,
  },
  sortButton: {
    alignSelf: "flex-end",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 24,
    marginHorizontal: 24,
    textAlign: "center",
  },
  listWrapper: {
    flex: 1,
  },
  separator: {
    height: 24,
  },
  text: {
    marginTop: 2,
    fontSize: 12,
    color: "#2B2D42",
  },
  textBold: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2B2D42",
  },
});
