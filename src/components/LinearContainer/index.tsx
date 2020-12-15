import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

export interface LinearContainerProps {
  spacing?: 'spread' | 'joined';
  safeArea?: boolean;
}

export const LinearContainer: React.FC<LinearContainerProps> = ({
  children,
  spacing = 'spread',
  safeArea = false,
}) => {
  const getSpacing: ViewStyle =
    spacing === 'spread'
      ? {justifyContent: 'space-evenly'}
      : {
          justifyContent: 'center',
          flex: 1,
          flex: 0.5,
        };

  const Container = (props: ViewProps) =>
    safeArea ? <SafeAreaView {...props} /> : <View {...props} />;

  return (
    <Container
      style={{
        ...styles.container,
        ...getSpacing,
      }}>
      {children}
    </Container>
  );
};

export default LinearContainer;
