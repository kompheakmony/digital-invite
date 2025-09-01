import React, { createContext, useContext, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
};

const darkGreenTheme = {
  background: `
    radial-gradient(circle at center, #1a472a 0%, #0d2818 70%, #061311 100%),
    radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 50%),
    radial-gradient(circle at 75px 75px, rgba(255,255,255,0.15) 2%, transparent 50%)
  `,
  text: '#ffffff',
  patternSize: '100px 100px'
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: ${props => props.theme.background};
    background-size: cover, ${props => props.theme.patternSize}, ${props => props.theme.patternSize};
    background-attachment: fixed;
    color: ${props => props.theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const AppThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkGreenTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};