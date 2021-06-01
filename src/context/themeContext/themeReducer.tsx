import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'LIGTH_THEME'} | {type: 'DARK_THEME'};

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
  dividerColor: string;
}

export const ligthTheme: ThemeState = {
  currentTheme: 'ligth',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: false,
  colors: {
    primary: '#f57f17',
    background: 'white',
    card: '#334400',
    text: 'black',
    border: '#334490',
    notification: '#3344ff',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: true,
  colors: {
    primary: '#8bc34a',
    background: 'black',
    card: '#334400',
    text: 'white',
    border: '#334490',
    notification: '#3344ff',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'LIGTH_THEME':
      return {
        ...ligthTheme,
      };
    case 'DARK_THEME':
      return {
        ...darkTheme,
      };

    default:
      return state;
  }
};
