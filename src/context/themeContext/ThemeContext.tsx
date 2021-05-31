import React, {createContext} from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLigthTheme: () => void;
}

export const ThemeContex = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const theme = {};
  const setDarkTheme = () => {
    console.log('Set Dark Theme');
  };

  const setLigthTheme = () => {
    console.log('Set Ligth Theme');
  };

  return (
    <ThemeContex.Provider value={{theme, setDarkTheme, setLigthTheme}}>
      {children}
    </ThemeContex.Provider>
  );
};
