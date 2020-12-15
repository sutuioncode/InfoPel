import {StackScreenProps} from '@react-navigation/stack';
export type RootStackParams = {
  Home: undefined;
  Step: {step: number};
  StepSelection: undefined;
};

export type StepSelectionNavigationProps = StackScreenProps<
  RootStackParams,
  'StepSelection'
>;
export type StepNavigationProps = StackScreenProps<RootStackParams, 'Step'>;
export type HomeNavigationProps = StackScreenProps<RootStackParams, 'Home'>;
