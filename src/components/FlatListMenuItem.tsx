import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContex} from '../context/themeContext/ThemeContext';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(menuItem.component)}
      activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Icon
            name={menuItem.icon}
            color={colors.primary}
            size={23}
            style={styles.icon}
          />
          {/* <Text style={{...styles.itemText, color: colors.text}}> */}
          <Text style={styles.itemText}>{menuItem.name}</Text>
        </View>
        <Icon name="chevron-forward-outline" color={colors.primary} size={22} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerInfo: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 12,
    fontSize: 20,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
