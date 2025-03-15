import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="footer-social">
          <a href="https://github.com/fanny-petitjean" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/fanny-petitjean-96910a1b6/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:petitjean.fanny@hotmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* 📄 Bouton pour télécharger le CV */}
        <a href="/documents/CV_Fanny.pdf" download="CV_Fanny.pdf" className="cv-button">
          <FaDownload /> Télécharger mon CV
        </a>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Fanny | Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
