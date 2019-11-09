import React from 'react';
import { AppContainer } from './app.styles';
import { AppContextProvider } from './context';
// eslint-disable-next-line global-require
const logo = require('./logo.svg');

const App = () => (
  <AppContextProvider>
    <AppContainer>Here comes the fun!</AppContainer>
  </AppContextProvider>
);

export default App;
