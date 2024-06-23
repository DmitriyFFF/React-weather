import React, { FC } from 'react';

import { Day } from '../../components/Day/Day';
import { DayInfo } from '../../components/DayInfo/DayInfo';
import { Cards } from '../../components/Cards/Cards';

import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Day />
        <DayInfo />
      </div>
      <Cards />
    </div>
  );
}
