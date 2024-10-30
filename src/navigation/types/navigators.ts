import type {
  HomeScreens,
  AuthScreens,
  SearchScreens,
  BottomTabs,
} from "@navigation/constants";
import { Video } from "@shared/api";

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
  [HomeScreens.VideoPlayer]: { video: Video };
};

export type SearchNavigatorParams = {
  [SearchScreens.SearchVideo]: { query?: string };
  [SearchScreens.VideoPlayer]: { video?: Video };
};
