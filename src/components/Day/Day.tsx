import React from 'react';
import styles from './Day.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

export interface Props {
}

export const Day = (props: Props) => {

  return (
    <div className={styles.day}>
      <div className={styles.top}>
        <div className={styles.top_container}>
          <div className={styles.temp}>20</div>
          <div className={styles.current}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>
      <div className={styles.bottom}>
        <div className={styles.time}>
          Время: <span>21:34</span>
        </div>
        <div className={styles.city}>
          Город: <span>Астрахань</span>
        </div>
      </div>
    </div>
  );
}
