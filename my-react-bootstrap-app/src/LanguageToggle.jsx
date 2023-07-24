// LanguageToggle.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = () => {
    // Toggle the language between 'en' and 'fr'
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button onClick={handleLanguageToggle}>
      {language === 'en' ? 'Switch to French' : 'Switch to English'}
    </button>
  );
};

export default LanguageToggle;
