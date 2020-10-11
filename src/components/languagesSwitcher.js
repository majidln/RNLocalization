import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {withTranslate} from './../context/languageContext';

function LanguagesSwitcher({translate, setLanguage, selectedLanguage}) {
  const changeLang = (lang = 'en') => {
    setLanguage(lang);
  };

  return (
    <View style={styles.operationWrapper}>
      <TouchableOpacity
        onPress={() => changeLang('fa-IR')}
        style={[
          styles.button,
          selectedLanguage === 'fa-IR' && styles.selectedButton,
        ]}>
        <Text style={styles.buttonText}>{translate.langs.fa}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeLang('en')}
        style={[
          styles.button,
          selectedLanguage === 'en' && styles.selectedButton,
        ]}>
        <Text style={styles.buttonText}>{translate.langs.en}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  operationWrapper: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedButton: {
    backgroundColor: 'lightgray',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
});

export default withTranslate(LanguagesSwitcher);
