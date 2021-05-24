import React from 'react';
import {Alert, Button, View} from 'react-native';
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
    Alert.prompt(
      'Titulo Prompt',
      'Accion',
      (valor: string) => {
        console.log(valor);
      },
      'plain-text',
    );
  };

  return (
    <View style={styles.globalMargin}>
      <Header title="Alertas" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <Button title="Prompt solo iOS" onPress={showPrompt} />
    </View>
  );
};
