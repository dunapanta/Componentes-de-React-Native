import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {useAnimation} from '../hooks/useAnimation';
import {StackScreenProps} from '@react-navigation/stack';

const {width, height} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];
//Usando solo Props
//interface Props extends StackScreenProps<any, any> {}
//{navigation}: Props

export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastSlideRef = useRef(false);

  const {opacity, fadeIn} = useAnimation();

  const navigation = useNavigation();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    );
  };

  const showButton = (index: number) => {
    if (index === items.length - 1) {
      lastSlideRef.current = true;
      fadeIn();
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        /* ref={c => {
          this._carousel = c;
        }} */
        data={items}
        renderItem={({item}: {item: Slide}) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          showButton(index);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 8,
            backgroundColor: '#5856d6',
          }}
        />
        {console.log(activeIndex)}
        {lastSlideRef.current && (
          <Animated.View
            style={{
              opacity,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#5856d6',
                width: 135,
                height: 45,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text
                style={{
                  fontSize: 25,
                  color: 'white',
                }}>
                Entrar
              </Text>
              <Icon name="chevron-forward-outline" size={30} color="white" />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6',
  },
  desc: {
    fontSize: 16,
  },
});
