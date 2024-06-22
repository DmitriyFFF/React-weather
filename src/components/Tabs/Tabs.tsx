import React, { FC } from 'react';
import styles from './Tabs.module.scss';
import { tabs } from '../../utils/constants';

export const Tabs: FC = () => {
  return (
    <div className={styles.tabs}>
      <div className={styles.container}>
        {tabs.map(tab => (
          <div className={styles.tab + ' ' + styles.active} key={tab.value}>{tab.value}</div>
        ))}
      </div>
      <div className={styles.cancel}>Отменить</div>
    </div>
  );
}
