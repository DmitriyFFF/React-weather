import React, { FC } from "react";
import { TItemProps } from "../../utils/types";
import styles from './DayInfoItem.module.scss';
import { IndicatorSvgSelector } from "../../assets/icons/indicator/IndicatorSvgSelector";

export const DayInfoItem: FC<TItemProps> = ({item}) => {
  const { icon_id, name, value } = item;
  return (
    <ul className={styles.item}>
      <li className={styles.item_icon}>
        <IndicatorSvgSelector id={icon_id} />
      </li>
      <li className={styles.item_name}>{name}</li>
      <li className={styles.item_value}>{value}</li>
    </ul>
  )
}
