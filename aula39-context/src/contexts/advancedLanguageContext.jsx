import { createContext, useState, useContext } from 'react';

const AdvancedLanguageContext = createContext();

export const AdvancedLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [region, setRegion] = useState('US');

  const switchLanguage = (lang) => setLanguage(lang);
  const switchRegion = (reg) => setRegion(reg);

  return (
    <AdvancedLanguageContext.Provider value={{ language, region, switchLanguage, switchRegion }}>
      {children}
    </AdvancedLanguageContext.Provider>
  );
};

export const useAdvancedLanguage = () => useContext(AdvancedLanguageContext);
