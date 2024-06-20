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
