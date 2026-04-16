// src/navigation/types.ts
export type RootStackParamList = {
  HomeMain: undefined;
  Profile: { userId: string };
  Settings: undefined;
  SearchMain: undefined;
  NotificationsMain: undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  NotificationsTab: undefined;
  ProfileTab: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}