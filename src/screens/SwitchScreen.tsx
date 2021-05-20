import React, {useState} from 'react';
import {Platform, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{marginTop: 100}}>
      <Switch
        trackColor={{false: '#D9D9DB', true: '#4ebaaa'}}
        thumbColor={Platform.OS === 'android' ? '#005b4f' : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
