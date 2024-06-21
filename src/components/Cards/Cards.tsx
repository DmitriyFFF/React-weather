import React, { FC } from 'react';
import styles from './Cards.module.scss';
import { cards } from '../../utils/constants';
import { Card } from '../Card/Card';
import { TCard } from '../../utils/types';
import { Tabs } from '../Tabs/Tabs';

export const Cards: FC = () => {

  return (
    <>
      <Tabs />
      <div className={styles.cards}>
        {cards.map((item: TCard) => (
          <Card card={item} key={item.icon_id} />
        ))}
      </div>
    </>

  );
}
