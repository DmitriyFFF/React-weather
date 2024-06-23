import React, { FC } from 'react';

import { DayInfoList } from '../DayInfoList/DayInfoList';
import cloud from '../../assets/images/cloud.png';

import styles from './DayInfo.module.scss';

export const DayInfo: FC = () => {
  return (
    <div className={styles.day_info}>
      <DayInfoList />
      <img className={styles.image} src={cloud} alt="облако" />
    </div>
  );
}
