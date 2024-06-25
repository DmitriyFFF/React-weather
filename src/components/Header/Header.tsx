import React, { FC, useState, useEffect } from 'react';
import Select from 'react-select';

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const [theme, setTheme] = useState('light');

  const options = [
    { value: 'city-1', label: 'Астрахань' },
    { value: 'city-2', label: 'Санкт-Петербург' },
    { value: 'city-3', label: 'Москва' }
  ]

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#fff' : '#000',
    })
  };

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
      'body-background',
      'component-background',
      'card-background',
      'card-shadow',
      'text-color'
    ]

    components.forEach(component => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    })
  }, [theme])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}><GlobalSvgSelector id='header-logo' /></div>
        <div className={styles.title}>Weather</div>
      </div>
      <div className={styles.container}>
        <div className={styles.theme_icon} onClick={changeTheme}>
          <GlobalSvgSelector id='theme' />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}/>
      </div>
    </header>
  );
}
