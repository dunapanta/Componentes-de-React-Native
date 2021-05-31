import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'LIGTH_THEME'} | {type: 'DARK_THEME'};

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
  dividerColor: string;
}

export const ligthTheme: ThemeState = {
  currentTheme: 'ligth',
  dividerColor: 'rgba(0,0,0,0,7)',
  dark: false,
  colors: {
    primary: '#334453',
    background: 'white',
    card: '#334400',
    text: '#334411',
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

    default:
      return state;
  }
};
