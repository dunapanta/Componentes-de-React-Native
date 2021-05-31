import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

//const customTheme: Theme = {
//  dark: true,
// colors: {
//    ...DarkTheme.colors,
//primary: string;
//background: 'grey',
//card: string;
//text: string;
//border: string;
//notification: string; */
// },
//};

const App = () => {
  return (
    <AppContext>
      <Navigation />
    </AppContext>
  );
};

const AppContext = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default App;
