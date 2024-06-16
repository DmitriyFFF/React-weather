import React from 'react';

import styles from './MonthStatistics.module.scss';

export interface Props {
}

export const MonthStatistics = (props: Props) => {
  return (
    <div className={styles.MonthStatistics}>
      Month Statistics
    </div>
  );
}
