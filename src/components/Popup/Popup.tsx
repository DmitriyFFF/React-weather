import React, { FC } from 'react';
import styles from './Popup.module.scss';
import { DayInfoList } from '../DayInfoList/DayInfoList';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

export const Popup:FC = () => {
  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.temp}>20°</div>
          <div className={styles.current}>Сегодня</div>
          <div className={styles.img}>
            <GlobalSvgSelector id='sun' />
          </div>
          <div className={styles.time}>
            Время: <span>21:34</span>
          </div>
          <div className={styles.city}>
            Город: <span>Астрахань</span>
          </div>
        </div>
        <DayInfoList />
        <div className={styles.close}>
          <GlobalSvgSelector id='close' />
        </div>
      </div>
    </>

  );
}
