import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {} from 'styled-components/native';
import {StatusBar} from 'react-native';

import {store} from './shared/store';

import {Routes} from './routes';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <Routes />
    </StoreProvider>
  );
};

export default App;
