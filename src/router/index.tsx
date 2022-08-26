import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/HomeScreen';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      <Root.Navigator screenOptions ={{headerShown: false}}>
        <Root.Screen component={BottomTabNav} name="HomeTabs" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;