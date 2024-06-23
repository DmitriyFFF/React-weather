import React, { FC } from 'react';

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { TCardProps } from '../../utils/types';

import styles from './Card.module.scss';

export const Card: FC<TCardProps> = ({card}) => {
  const { day, date, icon_id, temp_day, temp_night, info } = card;
  return (
    <div className={styles.card}>
      <div className={styles.day}>{day}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.icon}>{
        <GlobalSvgSelector id={icon_id} />}</div>
      <div className={styles.temp_day}>{temp_day}</div>
      <div className={styles.temp_night}>{temp_night}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
}
