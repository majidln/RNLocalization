/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {LanguageContextProvider} from './context/languageContext';
import HomeScreen from './screen/home'

function App()  {

  return (
    <LanguageContextProvider>
      <HomeScreen />
      
    </LanguageContextProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  text: {
    fontSize: 22
  }
});

export default App;
