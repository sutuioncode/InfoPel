import {ViewStyle, TextStyle} from 'react-native';
import style from '../../theme/style';
export default {
  container: {
    borderColor: style.colors.primary,
    borderWidth: style.spacing.small,
    borderRadius: 255,
    aspectRatio: 1,
    alignSelf: 'center',
    backgroundColor: style.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: style.spacing.large,
  } as ViewStyle,
  text: {
    fontSize: style.textSize.label,
    fontFamily: style.typography,
  } as TextStyle,
};
