import React, { FC } from 'react';
import { items } from '../../utils/constants';
import { DayInfoItem } from '../DayInfoItem/DayInfoItem';
import styles from './DayInfoList.module.scss';

export const DayInfoList: FC = () => {
  return (
    <>
      <ul className={styles.day_info_items}>
        {items.map(item => (
          <DayInfoItem item={item} key={item.icon_id} />
        ))}
      </ul>
    </>
  );
}
