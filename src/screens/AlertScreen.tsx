import React from 'react';
import {Alert, Button, View} from 'react-native';

import prompt from 'react-native-prompt-android';

import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Título Alerta',
      'Mensaje de la Alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {
          text: 'Aceptar',
          onPress: () => console.log('Aceptar'),
        },
        {
          text: 'Aceptar2',
          onPress: () => console.log('Aceptar2'),
        },
      ],
      {
        //android funciona quitar si presiono otra parte de la pantalla
        cancelable: true,
      },
    );
  };
  //Prompt solo iOS
  const showPrompt = () => {
    /* Alert.prompt(
      'Titulo Prompt',
      'Accion',
      (valor: string) => {
        console.log(valor);
      },
      'plain-text',
    ); */
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <Header title="Alertas" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Prompt solo iOS" onPress={showPrompt} />
    </View>
  );
};
