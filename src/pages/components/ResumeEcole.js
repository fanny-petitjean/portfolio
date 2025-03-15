import React from 'react';
import '../../assets/styles/PresentationResume.css';

const ResumeEcole = () => {
    return (
      <div className="presentation-container">
        <div className="presentation-box">
          
          <div className="text-container-school">
            <h3>Dipôme Ingénieur Informatique Et Réseaux (en cours)</h3>
            <h5>Spécialité Développement Logiciel</h5>
            <p className="presentation-text">2022 - 2025 : IMT Mines Alès (30100)</p>
          </div>
          <div className="text-container-school">
            <h3>DUT Informatique</h3>
            <p className="presentation-text">2020 - 2022 : IUT Montpellier - Sète (34000)</p>
          </div>
          <div className="text-container-school">
            <h3>Baccalauréat Scientifique</h3>
            <h5>Mention Très Bien</h5>
            <p className="presentation-text">2020 : Lycée Joseph Vallot, Lodève (34700)</p>
          </div>
        </div>
        
      </div>
    );
};

export default ResumeEcole;
