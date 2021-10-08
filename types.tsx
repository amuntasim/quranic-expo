/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Chapters: undefined;
  Misc: undefined;
  Settings: { reloading: any };
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type CartParamList = {
  CartScreen: undefined;
};

export type AccountParamList = {
  AccountScreen: undefined;
  AccountSettingsScreen: undefined;
  MyOrdersScreen: undefined;
};
export type SignInParamList = {
  SignInScreen: undefined;
};

export type ChaptersParamList = {
  ChaptersScreen: undefined;
  ChapterDetailScreen: undefined;
};

export type MiscParamList = {
  MiscScreen: undefined;
  AssessmentListScreen: undefined;
  QuranicVerbsScreen: undefined;
};

export type SettingsParamList = {
  SettingsScreen: { languageChanged: any, lessonsSourceChanged: any };
  test: any;
};
