import React, {useState} from 'react';
import {View, TextInput as Input} from 'react-native';
import styles from './styles';

export interface TextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  numeric?: boolean;
}

export function TextInput({
  numeric = true,
  value,
  onChangeText,
}: TextInputProps): React.FC<TextInputProps> {
  const [text, setText] = useState(value || '');

  const onChange = (txt: string) => {
    console.log('🚀 ---------------------------------------------------');
    console.log(
      '🚀 ~ file: index.tsx ~ line 19 ~ onChange ~ txt',
      txt,
      onChangeText,
    );
    console.log('🚀 ---------------------------------------------------');
    onChangeText?.call(this, txt);

    setText(txt);
    value = txt;
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.text}
        value={value || text + ''}
        onChangeText={onChange}
        keyboardType={numeric ? 'number-pad' : 'default'}
      />
    </View>
  );
}

export default TextInput;
