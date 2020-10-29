import React, {useState, useEffect, useContext} from 'react';
import en from '../locale/en.json';
import fa from '../locale/fa.json';
import * as RNLocalize from 'react-native-localize';

const languageObj = {
  en: en,
  'fa-IR': fa,
  'fa-AF': fa,
};

const LanguageContext = React.createContext();

export const LanguageContextProvider = ({children}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const fallback = {languageTag: selectedLanguage, isRTL: false};
    const {languageTag} =
      RNLocalize.findBestAvailableLanguage(Object.keys(languageObj)) ||
      fallback;
    setSelectedLanguage(languageTag);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        translate: languageObj[selectedLanguage],
        setLanguage: setSelectedLanguage,
        selectedLanguage: selectedLanguage,
      }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslate = () => useContext(LanguageContext);

export function withTranslate(Component) {
  return (props) => {
    const {translate, selectedLanguage, setLanguage} = useContext(
      LanguageContext,
    );

    return (
      <Component
        {...props}
        translate={translate}
        setLanguage={(lang) => setLanguage(lang)}
        selectedLanguage={selectedLanguage}
      />
    );
  };
}
