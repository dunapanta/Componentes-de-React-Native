import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Icon
            name={menuItem.icon}
            color="#902277"
            size={23}
            style={styles.icon}
          />
          <Text style={styles.itemText}>{menuItem.name}</Text>
        </View>
        <Icon name="chevron-forward-outline" color="#902277" size={22} />
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
