// LanguageComponent.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageComponent = () => {
  const { language } = useContext(LanguageContext);

  // Language-specific content
  const content = {
    en: 'Hello, this is in English!',
    fr: 'Bonjour, ceci est en français!',
  };

  return <div>{content[language]}</div>;
};

export default LanguageComponent;
