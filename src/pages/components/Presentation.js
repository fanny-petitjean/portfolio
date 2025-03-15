import React from 'react';
import '../../assets/styles/PresentationResume.css';
import photo from '../../assets/images/photo.webp'; // Importation de l'image
import {useNavigate } from 'react-router-dom';

const Presentation = () => {
    const navigate = useNavigate();
  
    return (
      <div className="presentation-container-presentation">
        <div className="presentation-box-presentation">
          <div className="image-container" onClick={(e) => { e.preventDefault(); navigate('/presentation'); }}>
            <img 
              src={photo}
              alt="Présentation" 
              className="presentation-image"
            />
          </div>
          <div className="text-container">
            <p className="presentation-text">Bienvenue dans notre univers ✨</p>
          </div>
        </div>
      </div>
    );
};

export default Presentation;
