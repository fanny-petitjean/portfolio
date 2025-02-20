import React, { useState } from 'react';
import '../assets/styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Ajouter ou retirer la classe 'blur' sur le contenu principal
    const content = document.querySelector('.App-content');
    content.classList.toggle('blur', !menuOpen);  // Applique le flou si le menu est ouvert
  };

  return (
    <header>
      <div className="logo">Fanny</div>

      {/* Menu principal */}
      <nav className="nav-menu">
        <ul className="nav-list">
          <li><a href="/">Accueil</a></li>
          <li><a href="/entreprise">Entreprise</a></li>
          <li><a href="/ecole">École</a></li>
          <li><a href="/passion">Passion</a></li>
          <li><a href="/competences">Compétences</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Menu burger */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menu mobile */}
      <nav className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/entreprise">Entreprise</a></li>
          <li><a href="/ecole">École</a></li>
          <li><a href="/passion">Passion</a></li>
          <li><a href="/competences">Compétences</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
