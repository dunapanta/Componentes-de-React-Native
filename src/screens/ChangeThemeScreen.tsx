import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Header} from '../components/Header';
import {ThemeContex} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLigthTheme,
    theme: {colors},
  } = useContext(ThemeContex);

  return (
    <View style={styles.globalMargin}>
      <Header title="Cambiar Tema" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={setLigthTheme}
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Ligth
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
