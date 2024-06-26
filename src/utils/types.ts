import { ReactNode } from "react";

export type TItem = {
  icon_id: string;
  name: string;
  value: string;
};

export type TItemProps = {
  item: TItem;
};

export type TCard = {
  day: string;
  date: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
};

export type TCardProps = {
  card: TCard;
};

export type TTabs = {
  value: string;
};

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type TThemeContext = {
  value: Theme;
  changeValue: (theme: Theme) => void;
};

export type TProvider = {
  children: ReactNode;
};


