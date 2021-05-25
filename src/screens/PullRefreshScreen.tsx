import React, {useState} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';

import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const PullRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Refresh Terminado');
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }>
      <View style={styles.globalMargin}>
        <Header title="Pull to Refresh" />
      </View>
    </ScrollView>
  );
};
