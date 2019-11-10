import React from 'react';
import { AppContainer } from './app.styles';
import { AppContext, AppContextProvider } from './context';
import Content from './content';

const App = () => (
  <AppContextProvider>
    <AppContainer>
      <AppContext.Consumer>{context => <Content context={context} />}</AppContext.Consumer>
    </AppContainer>
  </AppContextProvider>
);

export default App;
