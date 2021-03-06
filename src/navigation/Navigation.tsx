import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import {Animation01Screen} from '../screens/Animation01Screen';
import {Animation02Screen} from '../screens/Animation02Screen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {TextInputScreen} from '../screens/TextInputScreen';
import {PullRefreshScreen} from '../screens/PullRefreshScreen';
import {SectionListScreen} from '../screens/SectionListScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {InfiniteScrollScreen} from '../components/InfiniteScrollScreen';
import {SlidesScreen} from '../components/SlidesScreen';
import {ChangeThemeScreen} from '../screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContex} from '../context/themeContext/ThemeContext';
import {View} from 'react-native';

const Stack = createStackNavigator();

const Navigation = () => {
  const {theme} = useContext(ThemeContex);
  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              //backgroundColor: 'white',
            },
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="Animation01Screen"
            component={Animation01Screen}
          />
          <Stack.Screen
            name="Animation02Screen"
            component={Animation02Screen}
          />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen
            name="PullRefreshScreen"
            component={PullRefreshScreen}
          />
          <Stack.Screen
            name="SectionListScreen"
            component={SectionListScreen}
          />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
          <Stack.Screen
            name="ChangeThemeScreen"
            component={ChangeThemeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigation;
