import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {withTranslate} from './../context/languageContext';
import LanguagesSwitcher from './../components/languagesSwitcher';

function Home({translate}) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>{translate.welcome}</Text>
      </View>
      <LanguagesSwitcher />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
  },
});

export default withTranslate(Home);
