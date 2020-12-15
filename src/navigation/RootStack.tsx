import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParams} from './types';
import HomeScreen from '../screens/HomeScreen';
import StepSelectionScreen from '../screens/StepSelectionScreen';
import StepScreen from '../screens/StepScreen';
import {View} from 'react-native';

const Stack = createStackNavigator<RootStackParams>();

const RootStack = () => (
  <Stack.Navigator
    initialRouteName="StepSelection"
    screenOptions={{
      header: () => <View />,
    }}>
    <Stack.Screen component={HomeScreen} name="Home" />
    <Stack.Screen component={StepSelectionScreen} name="StepSelection" />
    <Stack.Screen component={StepScreen} name="Step" />
  </Stack.Navigator>
);

export default RootStack;
