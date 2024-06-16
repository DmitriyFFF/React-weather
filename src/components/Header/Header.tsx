import React from 'react';
import Select from 'react-select';
import styles from './Header.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

export interface Props {
}

export const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Астрахань' },
    { value: 'city-2', label: 'Санкт-Петербург' },
    { value: 'city-3', label: 'Москва' }
  ]

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      boder: 'none',
      borderRadius: '10px',
      zIndex: 100,
    })
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}><GlobalSvgSelector id='header-logo' /></div>
        <div className={styles.title}>Weather</div>
      </div>
      <div className={styles.container}>
        <div className={styles.theme_icon}>
          <GlobalSvgSelector id='theme' />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}/>
      </div>
    </header>
  );
}
