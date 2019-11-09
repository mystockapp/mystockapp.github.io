import React from 'react';
import { AppContainer, AppLogo, AppHeader, AppLink } from './app.styles';
import { AppContextProvider } from './context';
import { ContainerContent } from './features/sidepage/content';
// eslint-disable-next-line global-require
const logo = require('./logo.svg');

const App = () => (
  <AppContextProvider>
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit &nbsp;
          <code>src/App.jsx</code>
          &nbsp; and save to reload.
        </p>
        <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React
        </AppLink>
        <ContainerContent>My name is John!</ContainerContent>
      </AppHeader>
    </AppContainer>
  </AppContextProvider>
);

export default App;
