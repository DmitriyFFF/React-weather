import React, { FC } from 'react';
import Moment from 'react-moment';

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { TDayWeather } from '../../utils/types';

import styles from './Day.module.scss';

export const Day: FC<TDayWeather> = ({ weather }) => {

  return (
    <div className={styles.day}>
      <div className={styles.top}>
        <div className={styles.top_container}>
          <div className={styles.temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={styles.current}>Сегодня</div>
        </div>
        {weather.clouds.all >= 0 && weather.clouds.all < 50 ? <GlobalSvgSelector id='day_sun' /> :
        weather.clouds.all >= 50 && weather.clouds.all < 100 ? <GlobalSvgSelector id='mainly_cloudy' /> /*:
        weather.rain ? <GlobalSvgSelector id='rain' />*/ : null}
      </div>
      <div className={styles.bottom}>
        <div className={styles.time}>
          Время: <span>
            <Moment format='HH:mm' interval={1000} />
          </span>
        </div>
        <div className={styles.city}>
          Город: <span>Астрахань</span>
        </div>
      </div>
    </div>
  );
}
