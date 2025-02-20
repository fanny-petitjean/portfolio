import React from 'react';
import '../../assets/styles/Presentation.css';
import photo from '../../assets/images/photo.webp'; // Importation de l'image

const Presentation = () => {
    return (
      <div className="presentation-container">
        <div className="presentation-box">
          <div className="image-container">
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
