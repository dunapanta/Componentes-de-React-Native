import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContex} from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContex);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 5,
        borderBottomColor: dividerColor,
      }}></View>
  );
};
