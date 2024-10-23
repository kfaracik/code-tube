export enum AuthScreens {
  SignIn = "SignIn",
}

export enum HomeScreens {
  Home = "Home",
}

export enum SearchScreens {
  SearchVideo = "SearchVideo",
}

export const Screens = {
  ...AuthScreens,
  ...HomeScreens,
  ...SearchScreens,
};

export type Screens = typeof Screens;
