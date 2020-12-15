import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
export interface AppTitleProps {}

export const AppTitle: React.SFC<AppTitleProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.title}>React Native !</Text>
    </View>
  );
};

export default AppTitle;
