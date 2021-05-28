import React, {useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Header} from './Header';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);
  const renderItem = (item: number) => {
    return (
      <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
        style={{width: '100%', height: 400}}
      />
    );
  };

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 6; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1000);
  };

  return (
    <View style={{flex: 1, backgroundColor: '3ff7733'}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        //Para que el header sea parte del flatlist
        ListHeaderComponent={<Header title="Infinite Scroll" />}
        //Infinite Scroll
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        //Para Loading
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color="#225588" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: '#991180',
    fontSize: 50,
    height: 120,
  },
});
