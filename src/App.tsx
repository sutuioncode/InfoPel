/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {RootModel} from './models';
import RootNavigation from './navigation';
import {RootStoreProvider} from './store';

const App: React.FunctionComponent = () => {
  return (
    <RootStoreProvider value={RootModel.create()}>
      <RootNavigation />
    </RootStoreProvider>
  );
};

export default App;
