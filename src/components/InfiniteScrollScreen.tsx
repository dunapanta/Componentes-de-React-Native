import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Header} from './Header';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);
  const renderItem = (item: number) => {
    return <Text style={styles.textItem}>{item}</Text>;
  };

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 6; i++) {
      newArray[i] = numbers.length + i;
    }

    setNumbers([...numbers, ...newArray]);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        //Para que el header sea parte del flatlist
        ListHeaderComponent={<Header title="Infinite Scroll" />}
        //Infinite Scroll
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
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
