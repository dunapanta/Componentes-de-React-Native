import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0.2)).current;
  const position = useRef(new Animated.Value(0)).current;

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

  const startMoving = (initPosition: number, duration: number = 1000) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMoving,
  };
};
