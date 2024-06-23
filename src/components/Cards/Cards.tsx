import React, { FC } from 'react';

import { Card } from '../Card/Card';
import { Tabs } from '../Tabs/Tabs';
import { cards } from '../../utils/constants';

import styles from './Cards.module.scss';

export const Cards: FC = () => {

  return (
    <>
      <Tabs />
      <div className={styles.cards}>
        {cards.map(item => (
          <Card card={item} key={item.date} />
        ))}
      </div>
    </>

  );
}
