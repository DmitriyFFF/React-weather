import React, { FC } from 'react';
import styles from './DayInfo.module.scss';
import cloud from '../../assets/images/cloud.png';
import { items } from '../../utils/constants';
import { DayInfoItem } from '../DayInfoItem/DayInfoItem';
// import { TItem } from '../../utils/types';

// export interface Props {
// }

// export type TItem = {
//   icon_id: string;
//   name: string;
//   value: string;
// };

export const DayInfo: FC = () => {
  // const items = [{
  //   icon_id: '',
  //   name: '',
  //   value: ''
  // }];

  return (
    <div className={styles.day_info}>
      <ul className={styles.day_info_items}>
        {items.map(item => (
          <DayInfoItem item={item} key={item.icon_id} />
        ))}
      </ul>
      <img className={styles.image} src={cloud} alt="облако" />
    </div>
  );
}
