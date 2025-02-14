import React, { useState } from 'react';
import './Header.css'; // Pour inclure ton CSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      {/* Logo */}
      <div className="logo">Fanny</div>

      {/* Menu principal */}
      <nav className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <ul className="nav-list">
          <li><a href="/">Accueil</a></li>
          <li><a href="/entreprise">Entreprise</a></li>
          <li><a href="/ecole">École</a></li>
          <li><a href="/passion">Passion</a></li>
          <li><a href="/competences">Compétences</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Menu Burger */}
      <div className="menu-icon" id="menu-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menu mobile */}
      <nav className={`mobile-menu ${menuOpen ? 'show' : ''}`} id="mobile-menu">
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
