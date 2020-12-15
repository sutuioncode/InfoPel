import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import styles from './styles';

export interface NextButtonProps extends TouchableOpacityProps {
  large?: boolean;
}

export const NextButton: React.FC<NextButtonProps> = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={{...styles.container, ...(props.large ? {flexGrow: 1} : {})}}>
      <Text style={styles.text}>PRÓXIMO</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
