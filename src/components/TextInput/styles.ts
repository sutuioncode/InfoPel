import {ViewStyle, TextStyle} from 'react-native';
import style from '../../theme/style';
export default {
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: style.colors.text,
    marginVertical: style.spacing.medium,
  } as ViewStyle,
  text: {fontSize: style.textSize.label, fontWeight: '700'} as TextStyle,
};
