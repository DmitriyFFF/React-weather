import React from 'react';
import styles from './Tabs.module.scss';
import { tabs } from '../../utils/constants';

export interface ITabsProps {
}

export const Tabs = (props: ITabsProps) => {
  return (
    <div className={styles.tabs}>
      <div className={styles.container}>
        {tabs.map(tab => (
          <div className={styles.tab} key={tab.value}>{tab.value}</div>
        ))}
      </div>
      <div className={styles.cancel}>Отменить</div>
    </div>
  );
}
