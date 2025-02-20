import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/styles/ResumeEntreprise.css';

// Importation des images des expériences
import entreprise1 from '../../assets/images/cgi.jpg';
import entreprise2 from '../../assets/images/infolien.png';
import entreprise3 from '../../assets/images/caisseEpargne.png';

const ResumeEntreprise = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="presentation-container">
      <div className="presentation-box">
        <h2 className="presentation-title">Mes Expériences en Entreprise</h2>
        
        <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect} className="experience-carousel">
          <Carousel.Item>
            <div className="logo-container">
              <img className="logo-image" src={entreprise1} alt="Première entreprise" />
            </div>
            <div className="experience-text">
              <h3>Stage chez Entreprise 1</h3>
              <p>Développement d'API et maintenance des systèmes.</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="logo-container">
              <img className="logo-image" src={entreprise2} alt="Deuxième entreprise" />
            </div>
            <div className="experience-text">
              <h3>Alternance chez Entreprise 2</h3>
              <p>Implémentation d'une architecture microservices.</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="logo-container">
              <img className="logo-image" src={entreprise3} alt="Troisième entreprise" />
            </div>
            <div className="experience-text">
              <h3>CDI chez Entreprise 3</h3>
              <p>Lead Developer sur un projet international.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ResumeEntreprise;
