import React, {useState, useEffect, useContext} from 'react';
import en from '../locale/en.json';
import fa from '../locale/fa.json';
import * as RNLocalize from 'react-native-localize';
import { localize } from 'i18n-js';

const languageObj = {
    en: en,
    'fa-IR': fa,
};

const LanguageContext = React.createContext();

export const LanguageContextProvider = ({children}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    useEffect(() => {
        const fallback = { languageTag: "en", isRTL: false };

        const { languageTag, isRTL } =
            RNLocalize.findBestAvailableLanguage(Object.keys(languageObj)) ||
            fallback;
        
        setSelectedLanguage(languageTag)    
    
    }, []);

    const value = {
        ...languageObj[selectedLanguage],
    };

    console.log('value in context is', value)
    console.log('children is', children)
    return <LanguageContext.Provider value={{language: languageObj[selectedLanguage]}}>{children}</LanguageContext.Provider>
}

export const useTranslate = () => useContext(LanguageContext);

export function withTranslate(Component) {
    return props => {
      const { language } = useContext(LanguageContext);
  
      return (
        <Component
          {...props}
          translate={language}
        />
      );
    };
}
