import React, { useState } from 'react';
import '../assets/styles/Accueil.css';
import Presentation from './components/Presentation.js';
import ResumeEcole from './components/ResumeEcole.js';
import ResumeEntreprise from './components/ResumeEntreprise.js';
import ResumeCompetences from './components/ResumeCompetences.js';

const Accueil = () => {
  

  return (
    <div className="accueil">
      <Presentation />
      <ResumeEntreprise />
      <ResumeEcole />
      <ResumeCompetences />
    </div>
  );
};

export default Accueil;
