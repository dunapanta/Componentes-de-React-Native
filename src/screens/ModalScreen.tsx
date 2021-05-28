import React, {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <Header title="Modal Screen" />
      <Button title="Mostrar Modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="slide" visible={isVisible} transparent>
        {/* Background Modal */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* Contenido Modal */}
          <View
            style={{
              backgroundColor: 'white',
              width: 300,
              height: 300,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 8,
            }}>
            <Header title="Título Modal" />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Contenido Modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
