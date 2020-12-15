import {observer} from 'mobx-react';
import * as React from 'react';
import {
  ButtonBar,
  Label,
  LinearContainer,
  NextButton,
  TextInput,
} from '../components';
import {StepSelectionNavigationProps} from '../navigation/types';
import {useStore} from '../store';
export interface StepSelectionScreenProps
  extends StepSelectionNavigationProps {}

const StepSelectionScreen: React.FC<StepSelectionScreenProps> = observer(
  ({navigation}) => {
    const {
      numberOfSteps,
      numberOfTopics,
      changeNumberOfSteps,
      changeNumberOfTopics,
    } = useStore();
    const navigateToStepScreen = () => {
      navigation.navigate('Step', {step: 0});
    };

    const onChangeNumberOfTopics = (text: string) => {
      const num = parseInt(text);
      if (isNaN(num)) changeNumberOfTopics(null);
      else changeNumberOfTopics(parseInt(num));
    };

    const onChangeNumberOfSteps = (text: string) => {
      const num = parseInt(text);
      if (isNaN(num)) changeNumberOfSteps(null);
      else changeNumberOfSteps(num);
    };

    return (
      <LinearContainer>
        <Label text="Quantos passos para aprender React Native?" />
        <TextInput
          value={numberOfSteps ? numberOfSteps + '' : ''}
          onChangeText={onChangeNumberOfSteps}
        />
        <Label text="Quantos tópicos em cada passo?" />
        <TextInput
          value={numberOfTopics ? numberOfTopics + '' : ''}
          onChangeText={onChangeNumberOfTopics}
        />
        <ButtonBar>
          <NextButton onPress={navigateToStepScreen} />
        </ButtonBar>
      </LinearContainer>
    );
  },
);

export default StepSelectionScreen;
