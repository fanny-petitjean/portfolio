import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const burgerRef = useRef(null); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    const content = document.querySelector('.App-content');
    content.classList.toggle('blur', !menuOpen); 
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target) && !burgerRef.current.contains(e.target)) {
      setMenuOpen(false);

      const content = document.querySelector('.App-content');
      content.classList.remove('blur');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo">Fanny</div>

      {/* Menu principal */}
      <nav className="nav-menu">
        <ul className="nav-list">
          <li><a href="/">Accueil</a></li>
          <li><a href="/presentation">Présentation</a></li>
          <li><a href="/entreprise">Entreprise</a></li>
          <li><a href="/ecole">École</a></li>
          <li><a href="/passion">Passion</a></li>
          <li><a href="/competences">Compétences</a></li>
        </ul>
      </nav>

      {/* Menu burger */}
      <div className="menu-icon" onClick={toggleMenu} ref={burgerRef}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menu mobile */}
      <nav ref={menuRef} className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/presentation">Présentation</a></li>
          <li><a href="/entreprise">Entreprise</a></li>
          <li><a href="/ecole">École</a></li>
          <li><a href="/passion">Passion</a></li>
          <li><a href="/competences">Compétences</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
