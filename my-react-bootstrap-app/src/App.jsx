import React from 'react';
import ReactDOM from 'react-dom';
import { LanguageProvider } from './LanguageContext';
import LanguageToggle from './LanguageToggle';
import LanguageComponent from './LanguageComponent';
import { LanguageContext } from './LanguageContext';
import Header from './Header'; // Import the Header component
import Services from './Services';
import Sitters from './Sitters';
import Footer from './Footer';
import './Footer.css';

import { Accordion, Card, Button } from 'react-bootstrap';
import './App.css'; // Optional: Add custom styles if needed
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";




const App = () => {

  return (
    <LanguageProvider>
      
      <Header /> 
      <LanguageToggle/>

      <main>
        
        <h1>Pawsome Pet Co.</h1>

        
      </main>
      <Footer/>

    </LanguageProvider>
  );
};

export default App;