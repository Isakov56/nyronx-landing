import React, { createContext, useContext, useState } from 'react';
import { translations } from '../locales/translations.js';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uz'); // Default language is Uzbek ('uz', 'ru', 'en')

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[language] || translations['uz'];
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        // Fallback to Uzbek if missing in selected language
        let fallback = translations['uz'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

