/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Splash_Screen from './Component/Splash';
import Home_Screen from './Component/Home';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Search_Screen from './Component/SaerchRendr';

const Stack = createStackNavigator();


const App = () => {
  return (

    <Provider store={store}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}>
          <Stack.Screen
            name="Splash"
            component={Splash_Screen}
          />
          <Stack.Screen name="Home" component={Home_Screen} />
          <Stack.Screen name="Search" component={Search_Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>




  );
}

const styles = StyleSheet.create({});

export default App;
