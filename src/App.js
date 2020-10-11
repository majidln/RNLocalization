/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LanguageContextProvider } from './context/languageContext';
import HomeScreen from './screen/home'

function App() {

  return (
    <LanguageContextProvider>
      <HomeScreen />
    </LanguageContextProvider>
  );
};

export default App;
