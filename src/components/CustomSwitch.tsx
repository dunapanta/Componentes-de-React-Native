import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onChange(!isEnabled);
  };
  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#4ebaaa'}}
      thumbColor={Platform.OS === 'android' ? '#005b4f' : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
