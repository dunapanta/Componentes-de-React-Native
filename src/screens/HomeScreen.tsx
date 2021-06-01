import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {Header} from '../components/Header';
import {ItemSeparator} from '../components/ItemSeparator';
import {menuItems} from '../data/menuItems';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        keyExtractor={item => item.name}
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        ListHeaderComponent={() => <Header title="Componentes" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
