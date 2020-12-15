import {ViewStyle, TextStyle} from 'react-native';
import style from '../../theme/style';
export default {
  container: {
    marginHorizontal: style.spacing.medium,
    borderRadius: 5,
    backgroundColor: style.colors.text,
    padding: style.spacing.medium,
  } as ViewStyle,
  text: {
    textAlign: 'center',
    fontSize: 28,
    color: style.colors.primary,
  } as TextStyle,
};
