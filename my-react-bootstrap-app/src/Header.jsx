import React from 'react';
import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    BrowserRouter,
    Routes,
  } from "react-router-dom";
import Services from './Services';
import LanguageComponent from './LanguageComponent';
import { LanguageContext } from './LanguageContext';
import Sitters from './Sitters';

const translations = {
  en: {
    languageComponent: {
      services: 'Services',
      sitters: 'Sitters',
      contact: 'Contact',
      book: 'Book',
      social: 'Social Media',
    },
    anotherComponent: {
      content: 'This content is in English!',
    },
  },
  fr: {
    languageComponent: {
      services: 'Les Services',
      sitters: 'Gardiens',
      contact: 'Contacter',
      book: 'Réservation',
      social: 'Médias Sociaux',
    },

  },
};

const Header = () => {
  const { language } = useContext(LanguageContext);

  const translatedContent = translations[language];
  return (


    <BrowserRouter>
    <Navbar bg="light" expand="lg">

      <Navbar.Brand href="#home">
        <img
          src="/images/logo.webp" // Replace with the path to your logo image
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Pawsome Pet Co.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav" expand="lg">
        <Container className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/Services">{translatedContent.languageComponent.services}</Nav.Link>
            <Nav.Link as={Link} to="/Sitters">{translatedContent.languageComponent.sitters}</Nav.Link>
            <Nav.Link as={Link} to="/">{translatedContent.languageComponent.contact}</Nav.Link>
            <Nav.Link as={Link} to="/">{translatedContent.languageComponent.book}</Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
      
      <div>
        <Routes>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Sitters" element={<Sitters/>}/>
        </Routes>
      </div>

      <Navbar.Brand href="#socials">
        <img
          src="icons.png" 
          alt="Icons"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
        {translatedContent.languageComponent.social}
      </Navbar.Brand>

    </Navbar>
    </BrowserRouter>

  );
};

export default Header;
