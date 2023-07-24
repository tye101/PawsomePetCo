import React from 'react';
import './Footer.css'; 
import { useContext } from 'react';
import LanguageComponent from './LanguageComponent';
import { LanguageContext } from './LanguageContext';

const translations = {
  en: {
    languageComponent: {
      phone: 'Phone',
      email: 'Email',
      contact: 'Contact Info',
      openingHours: 'Opening Hours',
      monday: 'Monday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
    anotherComponent: {
      content: 'This content is in English!',
    },
  },
  fr: {
    languageComponent: {
      phone: 'Numéro de Téléphone',
      email: 'Courriel',
      contact: 'Contact Info',
      openingHours: "Heures d'ouverture",
      monday: 'Lundi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche',
    },

  },
};

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const translatedContent = translations[language];
  return (
    <footer>
      <div>
        <h3>{translatedContent.languageComponent.contact}</h3>
        <p>{translatedContent.languageComponent.phone}: (555) 123-4567</p>
        <p>{translatedContent.languageComponent.email}: pawsomepetco@gmail.com</p>
        <p>456 Rosewood Avenue,</p>
        <p>Maple Heights, Cascadeville,</p>
        <p>ON L4X 9Z7, Canada</p>
      </div>
      <div>
        <h3>{translatedContent.languageComponent.openingHours}</h3>
        <p>{translatedContent.languageComponent.monday}-{translatedContent.languageComponent.friday}: 9:00 AM - 6:00 PM</p>
        <p>{translatedContent.languageComponent.saturday}-{translatedContent.languageComponent.sunday}: 11:00 AM - 3:00 PM</p>
      </div>
    </footer>
  );
};

export default Footer;
