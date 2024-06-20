import React, { FC } from 'react';
import styles from './Cards.module.scss';
import { cards } from '../../utils/constants';
import { Card } from '../Card/Card';
import { TCard } from '../../utils/types';

export const Cards: FC = () => {

  return (
    <div className={styles.cards}>
      {cards.map((item: TCard) => (
        <Card card={item} />
      ))}
    </div>
  );
}
