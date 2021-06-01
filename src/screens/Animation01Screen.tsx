import React, {useContext, useRef} from 'react';
import {StyleSheet, View, Animated, Button, Easing} from 'react-native';
import {ThemeContex} from '../context/themeContext/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation01Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMoving} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContex);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMoving(-200);
        }}
        color={colors.primary}
      />
      <Button title="FadeOut" onPress={fadeOut} color={colors.primary} />
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
