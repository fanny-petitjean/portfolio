import React from 'react';
import '../assets/styles/Accueil.css';
import ResumeCompetences from './components/ResumeCompetences.js';


const Presentation = () => {
  

  return (
    <div className="accueil">
        <div className="presentation-container">
        <div className="presentation-box">
          
          <div className="text-container">
            <p className="presentation-text">Courte présentation</p>
          </div>
          
        </div>
        <div className="presentation-box">
          
          <div className="text-container">
            <p className="presentation-text">Mes attouts & Valeurs</p>
          </div>
          
        </div>
      
      <div className="presentation-box">
          
          <div className="text-container">
            <p className="presentation-text">lien cv, pinterest, linkedin,...</p>
          </div>
          
        </div>
      </div>
      </div>
      
  );
};

export default Presentation;
