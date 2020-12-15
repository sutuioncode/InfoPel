import {observer} from 'mobx-react';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  ButtonBar,
  Label,
  LinearContainer,
  NextButton,
  PageNumber,
  TextInput,
} from '../components';
import BackButton from '../components/BackButton';
import {StepNavigationProps} from '../navigation/types';
import {useStore} from '../store';
export interface StepScreenProps extends StepNavigationProps {}

const StepScreen: React.FC<StepScreenProps> = observer(
  ({navigation, route}) => {
    const {stepTopics, numberOfSteps} = useStore();

    const stepNumber = route.params.step;

    const navigateToNextStepScreen = () => {
      navigation.push('Step', {step: stepNumber + 1});
    };

    const isLastPage = numberOfSteps <= stepNumber + 1;

    return (
      <>
        <StatusBar />
        <LinearContainer safeArea={false}>
          <PageNumber page={stepNumber + 1} />
          <LinearContainer spacing="joined" safeArea={true}>
            <Label text={`Passo ${stepNumber + 1}`} />

            <FlatList
              data={stepTopics(stepNumber)}
              keyExtractor={({id}) => id + ''}
              renderItem={({item}) => {
                return <TextInput />;
              }}
            />
          </LinearContainer>
          <ButtonBar spacing="spread">
            <BackButton onPress={navigation.goBack} />
            <NextButton
              disabled={isLastPage}
              large
              onPress={navigateToNextStepScreen}
            />
          </ButtonBar>
        </LinearContainer>
      </>
    );
  },
);

export default StepScreen;
