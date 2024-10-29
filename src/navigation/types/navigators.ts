import type {
  HomeScreens,
  AuthScreens,
  SearchScreens,
  BottomTabs,
} from "@navigation/constants";

export type BottomTabNavigatorParams = {
  [BottomTabs.Home]: undefined;
  [BottomTabs.Search]: undefined;
};

export type AuthNavigatorParams = {
  [AuthScreens.SignIn]: undefined;
};

export type HomeNavigatorParams = {
  [HomeScreens.Home]: undefined;
  [HomeScreens.Settings]: undefined;
};

export type SearchNavigatorParams = {
  [SearchScreens.SearchVideo]: undefined;
};
