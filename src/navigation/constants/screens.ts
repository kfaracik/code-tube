export enum AuthScreens {
  SignIn = "SignIn",
}

export enum HomeScreens {
  Home = "Home",
  Settings = "Settings",
  VideoPlayer = "VideoPlayer",
}

export enum SearchScreens {
  SearchVideo = "SearchVideo",
  VideoPlayer = "VideoPlayer",
}

export const Screens = {
  ...AuthScreens,
  ...HomeScreens,
  ...SearchScreens,
};

export type Screens = typeof Screens;
