import React from 'react';
import {StatusBar} from 'react-native';
import AppTitle from '../components/AppTitle';
import ButtonBar from '../components/ButtonBar';
import NextButton from '../components/NextButton';
import {HomeNavigationProps} from '../navigation/types';

export interface HomeProps extends HomeNavigationProps {}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const navigateToStepSelection = () => {
    navigation.navigate('StepSelection');
  };

  return (
    <>
      <StatusBar />
      <AppTitle />
      <ButtonBar>
        <NextButton onPress={navigateToStepSelection} />
      </ButtonBar>
    </>
  );
};

export default HomeScreen;
