import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribe} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.globalMargin}>
            <Header title="Text Input" />
            <TextInput
              style={stylesTextInput.textInput}
              placeholder="Ingrese Nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={stylesTextInput.textInput}
              placeholder="Ingrese Correo"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />

            <View style={stylesTextInput.switchRow}>
              <Text style={stylesTextInput.switchText}>Subscribirse:</Text>
              <CustomSwitch
                isOn={isSubscribe}
                onChange={value => onChange(value, 'isSubscribe')}
              />
            </View>
            <Header title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={{...stylesTextInput.textInput, marginBottom: 100}}
              placeholder="Ingrese Teléfono"
              onChangeText={value => onChange(value, 'phone')}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const stylesTextInput = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
