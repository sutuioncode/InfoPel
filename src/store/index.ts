import React from 'react';
import {RootModel} from '../models';

const RootContext = React.createContext(RootModel.create());

export const RootStoreProvider = RootContext.Provider;

export const useStore = () => React.useContext(RootContext);
