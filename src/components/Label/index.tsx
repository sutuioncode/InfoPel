import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import styles from './styles';

export interface LabelProps {
  text: string;
}

export const Label: React.SFC<LabelProps> = ({text = ''}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Label;
