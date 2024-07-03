import React, { FC, useEffect } from 'react';

import { Day } from '../../components/Day/Day';
import { DayInfo } from '../../components/DayInfo/DayInfo';
import { Cards } from '../../components/Cards/Cards';

import styles from './Home.module.scss';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../services/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../utils/selectors';

export const Home: FC = () => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('astrakhan'));
    console.log(process.env.REACT_APP_API_KEY)
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Day weather={weather}/>
        <DayInfo />
      </div>
      <Cards />
    </div>
  );
}
