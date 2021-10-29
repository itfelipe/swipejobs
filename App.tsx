
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Logo from './src/assets/svg/logo.svg'
import RootNavigator from './src/navigators/';
import { ContextProvider } from './src/context/ContextProvider';
import themes from './src/themes/themes';
import { Button } from './src/components';

const App = () => {

 
  return (
    <ContextProvider>
      <ThemeProvider theme={themes}>
          <RootNavigator />
      </ThemeProvider>
    </ContextProvider>
  );
};


export default App;
