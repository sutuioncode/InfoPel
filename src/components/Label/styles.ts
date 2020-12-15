import {TextStyle, ViewStyle} from 'react-native';
import style from '../../theme/style';

export default {
  container: {} as ViewStyle,
  text: {
    fontSize: style.textSize.label,
    fontFamily: style.typography,
  } as TextStyle,
};
