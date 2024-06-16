import React from 'react';

import styles from './Home.module.scss';

export interface Props {
}

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      Home
    </div>
  );
}
