import React from 'react';

import styles from './Home.module.scss';
import { Day } from '../../components/Day/Day';
import { DayInfo } from '../../components/DayInfo/DayInfo';

export interface Props {
}

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <Day />
      <DayInfo />
    </div>
  );
}
