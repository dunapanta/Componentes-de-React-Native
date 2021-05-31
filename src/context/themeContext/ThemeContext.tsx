import React, {createContext, useReducer} from 'react';
import {themeReducer, ThemeState, ligthTheme} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLigthTheme: () => void;
}

export const ThemeContex = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(themeReducer, ligthTheme);
  const setDarkTheme = () => {
    dispatch({type: 'DARK_THEME'});
    console.log('Set Dark Theme');
  };

  const setLigthTheme = () => {
    dispatch({type: 'LIGTH_THEME'});
    console.log('Set Ligth Theme');
  };

  return (
    <ThemeContex.Provider value={{theme, setDarkTheme, setLigthTheme}}>
      {children}
    </ThemeContex.Provider>
  );
};
