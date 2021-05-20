import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Header} from '../components/Header';
import {CustomSwitch} from '../components/CustomSwitch';

export const SwitchScreen = () => {
  const [state, setstate] = useState({
    isActive: true,
    isHappy: false,
    isAngry: true,
  });

  const {isActive, isAngry, isHappy} = state;

  const onChange = (value: boolean, field: keyof typeof state) => {
    setstate({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <Header title="Switch" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isAngry</Text>
        <CustomSwitch
          isOn={isAngry}
          onChange={value => onChange(value, 'isAngry')}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
