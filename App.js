/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>
            Welcome to Localization
          </Text>
        </View>
      </SafeAreaView>
    </>
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
