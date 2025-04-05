import React, { useState, useEffect } from 'react';
import { 
  WiDaySunny, 
  WiMoonWaxingCrescent4 
} from 'react-icons/wi';
import { 
  RiSunFoggyFill, 
  RiMoonClearFill,
  RiSunLine,
  RiMoonFill
} from 'react-icons/ri';
import { generateCssVariables } from '../utils/theme';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }

    // Apply CSS variables
    const cssVariables = generateCssVariables(isDark);
    Object.entries(cssVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="theme-toggle-wrapper">
      <button 
        className={`theme-toggle-btn ${isDark ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Toggle theme"
      >
        <div className="icon-container">
          <div className="icon-wrapper sun">
            {isHovered ? (
              <RiSunFoggyFill className="sun-icon hover" />
            ) : (
              <WiDaySunny className="sun-icon" />
            )}
          </div>
          <div className="icon-wrapper moon">
            {isHovered ? (
              <RiMoonClearFill className="moon-icon hover" />
            ) : (
              <WiMoonWaxingCrescent4 className="moon-icon" />
            )}
          </div>
        </div>
        <div className="toggle-circle">
          {isDark ? (
            <RiMoonFill className="circle-icon moon" />
          ) : (
            <RiSunLine className="circle-icon sun" />
          )}
        </div>
        <div className="toggle-rays"></div>
      </button>
    </div>
  );
};

export default ThemeToggle; 