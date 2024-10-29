import { Video } from "@shared/api";
import { useTranslation } from "react-i18next";

export enum SortOptions {
  LATEST = "latest",
  OLDEST = "oldest",
  POPULAR = "popular",
}

export const sortOptions = [
  {
    key: SortOptions.LATEST,
    label: () => useTranslation().t("search.latest"),
  },
  {
    key: SortOptions.OLDEST,
    label: () => useTranslation().t("search.oldest"),
  },
  {
    key: SortOptions.POPULAR,
    label: () => useTranslation().t("search.popular"),
  },
];

export const getSortOptions = () =>
  sortOptions.map((option) => ({
    key: option.key,
    label: option.label(),
  }));

export const sortVideosBy = (videos: Video[], option: SortOptions) => {
  const sortedVideos = [...videos];

  switch (option) {
    case SortOptions.LATEST:
      sortedVideos.sort(
        (a, b) =>
          new Date(b.snippet.publishedAt).getTime() -
          new Date(a.snippet.publishedAt).getTime()
      );
      break;

    case SortOptions.OLDEST:
      sortedVideos.sort(
        (a, b) =>
          new Date(a.snippet.publishedAt).getTime() -
          new Date(b.snippet.publishedAt).getTime()
      );
      break;

    case SortOptions.POPULAR:
      sortedVideos.sort((a, b) => b.popularity - a.popularity);
      break;

    default:
      break;
  }

  return sortedVideos;
};
