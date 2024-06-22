import React, { FC } from 'react';
import styles from './DayInfo.module.scss';
import cloud from '../../assets/images/cloud.png';
import { DayInfoList } from '../DayInfoList/DayInfoList';

export const DayInfo: FC = () => {
  return (
    <div className={styles.day_info}>
      <DayInfoList />
      <img className={styles.image} src={cloud} alt="облако" />
    </div>
  );
}
