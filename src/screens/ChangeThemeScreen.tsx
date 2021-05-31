import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Header} from '../components/Header';
import {ThemeContex} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {setDarkTheme} = useContext(ThemeContex);
  return (
    <View style={styles.globalMargin}>
      <Header title="Cambiar Tema" />
      <TouchableOpacity
        onPress={setDarkTheme}
        activeOpacity={0.7}
        style={{
          backgroundColor: '#5858D6',
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
          Ligth / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
