import React, {useRef} from 'react';
import {StyleSheet, View, Animated, Button} from 'react-native';

export const Animation01Screen = () => {
  const opacity = useRef(new Animated.Value(0.2)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 800,
      useNativeDriver: true,
    }).start(() => console.log('Termino')); //End callback se llama cuando la animacion termina
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{...styles.purpleBox, opacity: opacity, marginBottom: 20}}
      />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5656D6',
    width: 150,
    height: 150,
  },
});
