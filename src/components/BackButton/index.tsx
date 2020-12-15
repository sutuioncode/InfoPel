import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {} from 'react-native-gesture-handler';
import {NextButtonProps} from '..';
import styles from './styles';

export interface BackButtonProps extends NextButtonProps {}

export const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/back.png')}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
