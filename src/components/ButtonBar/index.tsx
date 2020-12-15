import React from 'react';
import {View, ViewProps} from 'react-native';
import styles from './styles';

export interface ButtonBarProps extends ViewProps {
  spacing?: 'align-end' | 'spread';
}

export const ButtonBar: React.FC<ButtonBarProps> = ({
  children,
  spacing = 'align-end',
}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...(spacing === 'spread'
          ? {justifyContent: 'space-between'}
          : {justifyContent: 'flex-end'}),
      }}>
      {children}
    </View>
  );
};

export default ButtonBar;
