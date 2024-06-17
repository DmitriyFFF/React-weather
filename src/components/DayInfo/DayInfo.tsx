import React from 'react';
import styles from './DayInfo.module.scss';

export interface Props {
}

export const DayInfo = (props: Props) => {

  return (
    <div className={styles.day_info}>
      <ul className={styles.top}>
        <li className={styles.temp}>20</li>
        <li className={styles.current}>Сегодня</li>_day
      </ul>
      <ul className={styles.bottom}>
        <li className={styles.time}>
          Время: <span>21:34</span>
        </li>
        <li className={styles.city}>
          Город: <span>Астрахань</span>
        </li>
      </ul>
    </div>
  );
}
