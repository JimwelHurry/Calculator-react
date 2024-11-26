import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ toggleTheme, theme }) => {
  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
