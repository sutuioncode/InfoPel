import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
export interface PageNumberProps {
  page: number;
}

export const PageNumber: React.FC<PageNumberProps> = ({page}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isNaN(page) ? 0 : page}</Text>
    </View>
  );
};

export default PageNumber;
