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
} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

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
});
