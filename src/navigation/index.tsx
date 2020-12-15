import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);
export default RootNavigation;
