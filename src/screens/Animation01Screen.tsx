import React, {useRef} from 'react';
import {StyleSheet, View, Animated, Button, Easing} from 'react-native';

export const Animation01Screen = () => {
  const opacity = useRef(new Animated.Value(0.2)).current;
  const top = useRef(new Animated.Value(-200)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.timing(top, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 800,
      useNativeDriver: true,
    }).start(() => console.log('Termino')); //End callback se llama cuando la animacion termina

    Animated.timing(top, {
      toValue: -200,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [
            {
              translateY: top,
            },
          ],
        }}
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
