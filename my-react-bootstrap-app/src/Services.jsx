import React from 'react';
import { useContext } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import LanguageComponent from './LanguageComponent';
import { LanguageContext } from './LanguageContext';

const translations = {
  en: {
    languageComponent: {
      boarding: 'Boarding',
      dayCare: 'Day Care',
      houseSitting: 'Contact Info',
      visits: 'Drop-In Visits',
      dogWalking: 'Dog Walking',
      boardingD: "Discover worry-free vacations and guilt-free business trips with pet boarding! Trust your furry friend's care to experienced professionals who'll provide a cozy, safe, and fun home-away-from-home. With daily playtime, cuddles, and attentive care, your pet will have a blast while you're away. Enjoy peace of mind, knowing your beloved companion is in loving hands. Boarding is the ultimate adventure for pets, and the perfect solution for your travel needs!",
      dayCareD: "Unleash the fun with our pet day care extravaganza! Give your furry friend the ultimate playdate experience while you tackle your daily adventures. Our vibrant pet day care facility is a paradise for pets, offering a tail-wagging mix of interactive games, socialization, and cuddles. Your four-legged companion will thrive in a safe and supervised environment, surrounded by other playful pals and our dedicated pet-loving staff. From ball-chasing to belly rubs, each day is packed with joy and excitement. Say goodbye to lonely days and hello to a happy, well-exercised pet that can't wait to greet you with love and wiggles at the end of the day. Welcome to a paws-itively awesome day care where pets come to play, stay, and make furry friends for life!",
      houseSittingD: "Embark on stress-free getaways and work commitments with personalized pet sitting! Leave your precious pet in the care of dedicated, pet-loving sitters who'll pamper them with one-on-one attention and familiar surroundings. From cuddle sessions to playtime and daily walks, your fur baby will experience a tail-wagging staycation. With a reliable pet sitter, your pet will enjoy all the comforts of home while you're away, making every moment apart a joyful one. Trustworthy, convenient, and compassionate – it's the ultimate care solution for your four-legged best friend!",
      visitsD: "Experience pet care made easy with delightful drop-in visits! When life gets busy, our trusted pet caregivers are just a call away. With quick and convenient visits, your furry companion will receive all the attention and care they need. Whether it's a potty break, playtime, or feeding, our dedicated pet sitters will ensure your pet stays happy and content in the comfort of their own home. Say goodbye to pet parent guilt and hello to worry-free days, knowing that your beloved pet is in capable hands. Embrace the flexibility and peace of mind with our paw-some drop-in visits!",
      dogWalkingD: "Unleash the happiness with our tail-tugging dog walking service! Let our experienced and enthusiastic dog walkers take your furry friend on a daily adventure filled with wagging tails and boundless joy. From strolls in the park to playful romps, your canine companion will enjoy the exercise and socialization they crave. Our reliable walkers are dedicated to ensuring your pup gets the love, attention, and fresh air they deserve, all while you tackle your daily to-do's worry-free. With our paw-some dog walking service, you'll come home to a happy, contented pooch, ready to shower you with love!",
    },

  },
  fr: {
    languageComponent: {
      boarding: 'Embarquement',
      dayCare: 'Soins de Jour',
      houseSitting: 'Contact Info',
      visits: 'Visites Libres',
      dogWalking: 'Promenade de Chiens',
      boardingD: "Découvrez des vacances sans souci et des voyages d'affaires sans culpabilité grâce à la pension pour animaux de compagnie ! Confiez la garde de votre ami à quatre pattes à des professionnels expérimentés qui lui offriront un foyer douillet, sûr et amusant. Avec des jeux quotidiens, des câlins et des soins attentifs, votre animal s'amusera comme un fou pendant votre absence. Vous aurez l'esprit tranquille, sachant que votre compagnon bien-aimé est entre de bonnes mains. La pension est l'aventure ultime pour les animaux de compagnie et la solution parfaite pour vos déplacements !",
      dayCareD: "Amusez-vous bien grâce à notre service de garde d'animaux de compagnie ! Offrez à votre ami à fourrure l'expérience ultime d'un rendez-vous ludique pendant que vous vous occupez de vos aventures quotidiennes. Notre centre de jour pour animaux de compagnie est un paradis pour les animaux, offrant un mélange de jeux interactifs, de socialisation et de câlins qui fait frémir la queue. Votre compagnon à quatre pattes s'épanouira dans un environnement sûr et supervisé, entouré d'autres compagnons enjoués et de notre personnel dévoué aux animaux. De la chasse aux balles aux caresses sur le ventre, chaque jour est rempli de joie et d'excitation. Dites adieu aux journées solitaires et bonjour à un animal heureux et bien entraîné qui ne peut attendre de vous saluer avec amour et en se tortillant à la fin de la journée. Bienvenue dans une garderie géniale où les animaux viennent pour jouer, rester et se faire des amis pour la vie !",
      houseSittingD: "Profitez d'escapades et d'engagements professionnels sans stress grâce à un service de garde d'animaux personnalisé ! Confiez votre précieux animal de compagnie à des gardiens dévoués et aimant les animaux, qui le chouchouteront en lui accordant une attention particulière et en le plaçant dans un environnement familier. Des séances de câlins aux jeux et aux promenades quotidiennes, votre bébé à fourrure vivra un séjour inoubliable. Avec un gardien fiable, votre animal bénéficiera de tout le confort de la maison pendant votre absence, ce qui fera de chaque moment passé à l'extérieur un moment de joie. Digne de confiance, pratique et compatissant - c'est la solution de garde ultime pour votre meilleur ami à quatre pattes !",
      visitsD: "Faites l'expérience d'un soin des animaux de compagnie facilité grâce à de charmantes visites sans rendez-vous ! Lorsque la vie devient trépidante, nos soignants de confiance pour animaux de compagnie ne sont qu'à un coup de fil. Grâce à des visites rapides et pratiques, votre compagnon à fourrure recevra toute l'attention et les soins dont il a besoin. Qu'il s'agisse d'une pause pipi, d'une séance de jeu ou d'un repas, nos gardiens dévoués veilleront à ce que votre animal reste heureux et satisfait dans le confort de sa propre maison. Dites adieu à la culpabilité des parents et bonjour aux journées sans souci, sachant que votre animal bien-aimé est entre de bonnes mains. Profitez de la flexibilité et de la tranquillité d'esprit que procurent nos visites sans rendez-vous !",
      dogWalkingD: "Libérez le bonheur grâce à notre service de promenades de chiens qui font frétiller la queue ! Laissez nos promeneurs de chiens expérimentés et enthousiastes emmener votre ami à fourrure dans une aventure quotidienne remplie de queues frétillantes et de joie illimitée. Des promenades dans le parc aux ébats ludiques, votre compagnon canin profitera de l'exercice et de la socialisation dont il a besoin. Nos promeneurs fiables s'assurent que votre chien reçoit l'amour, l'attention et l'air frais qu'il mérite, pendant que vous vous occupez de vos tâches quotidiennes en toute tranquillité. Grâce à notre service de promenades de chiens, vous rentrerez à la maison avec un chien heureux et satisfait, prêt à vous couvrir d'amour !",
    },

  },
};
const Services = () => {
  const { language } = useContext(LanguageContext);

  const translatedContent = translations[language];
  return (

    <div>
      <h1>Services</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>{translatedContent.languageComponent.boarding}</Accordion.Header>
            <Accordion.Body>
            {translatedContent.languageComponent.boardingD}
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>{translatedContent.languageComponent.dayCare}</Accordion.Header>
            <Accordion.Body>
            {translatedContent.languageComponent.dayCareD}
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>{translatedContent.languageComponent.houseSitting}</Accordion.Header>
            <Accordion.Body>
            {translatedContent.languageComponent.houseSittingD}
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>{translatedContent.languageComponent.visits}s</Accordion.Header>
            <Accordion.Body>
            {translatedContent.languageComponent.visitsD}
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>{translatedContent.languageComponent.dogWalking}</Accordion.Header>
            <Accordion.Body>
            {translatedContent.languageComponent.dogWalkingD}
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  



      
    </div>
  );
};

export default Services;
