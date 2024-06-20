import { TCard } from "./types";

export const items = [
  {
    icon_id: 'temp',
    name: 'Температура',
    value: '20° - ощущается как 17°',
  },
  {
    icon_id: 'pressure',
    name: 'Давление',
    value: '765 мм ртутного столба - нормальное',
  },
  {
    icon_id: 'precipitation',
    name: 'Осадки',
    value: 'Без осадков',
  },
  {
    icon_id: 'wind',
    name: 'Ветер',
    value: '3 м/с юго-запад - легкий ветер',
  },
];

export const cards: TCard[] = [
  {
    day: 'Сегодня',
    date: '28 авг',
    icon_id: 'sun',
    temp_day: '+34',
    temp_night: '+28',
    info: 'Облачно',
  },
  {
    day: 'Завтра',
    date: '29 авг',
    icon_id: 'small_rain_sun',
    temp_day: '+34',
    temp_night: '+28',
    info: 'Небольшой дождь и солнце',
  },
  {
    day: 'Ср',
    date: '30 авг',
    icon_id: 'small_rain',
    temp_day: '+34',
    temp_night: '+28',
    info: 'Небольшой дождь',
  },
  {
    day: 'Чт',
    date: '31 авг',
    icon_id: 'mainly_cloudy',
    temp_day: '+34',
    temp_night: '+28',
    info: 'Облачно',
  },
  {
    day: 'Пт',
    date: '1 сен',
    icon_id: 'rain',
    temp_day: '+34',
    temp_night: '+28',
    info: 'Дождь',
  },
  {
    day: 'Сб',
    date: '2 сен',
    icon_id: 'sun',
    temp_day: '+34',
    temp_night: '+28',
    info: 'Облачно',
  },
  {
    day: 'Вс',
    date: '3 сен',
    icon_id: 'sun',
    temp_day: '+34',
    temp_night: '+28',
    info: 'Облачно',
  },
];
