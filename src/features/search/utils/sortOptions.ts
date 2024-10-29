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
