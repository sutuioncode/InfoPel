import {TextStyle, ViewStyle} from 'react-native';
import style from '../../theme/style';

export default {
  container: {
    flex: 1,
    margin: style.spacing.large,
    justifyContent: 'center',
  } as ViewStyle,
  title: {
    fontFamily: style.typography,
    fontSize: 48,
  } as TextStyle,
};
