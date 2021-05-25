import React, {useState} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';

import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const PullRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Refresh Terminado');
      setRefreshing(false);
      setData('Agregando Data');
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refresh}
          //Android donde aparece el pull to refresh
          progressViewOffset={5}
          //color de fondo solo Android
          progressBackgroundColor="#337790"
          //colores android
          colors={['#445566', '#994688', '#001177']}
          // solo iOS guando refersco el color de fondo cmbia
          style={{backgroundColor: '#5588D5'}}
          //iOS color del circulito
          tintColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <Header title="Pull to Refresh" />
        {data && <Header title={data} />}
      </View>
    </ScrollView>
  );
};
