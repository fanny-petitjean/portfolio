import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../assets/styles/EntrepriseDetail.css';
import entreprise1 from '../../assets/images/cgi.jpg';
import entreprise2 from '../../assets/images/infolien.png';
import entreprise3 from '../../assets/images/caisseEpargne.png';

const entreprises = {
  cgi: {
    name: "CGI",
    image: entreprise1,
    description: "Développement et maintenance d’API pour un client spécifique.",
    details: ["🔧 Développement API", "⚙️ Maintenance", "📊 Suivi des performances"]
  },
  infolien: {
    name: "Infolien",
    image: entreprise2,
    description: "Développement de solutions logicielles sur mesure.",
    details: ["💻 Développement Front-End", "📂 Gestion des bases de données", "🚀 Optimisation des performances"]
  },
  caisseEpargne: {
    name: "Caisse d'Épargne",
    image: entreprise3,
    description: "Mission sur la transformation digitale et l’intégration de nouvelles technologies.",
    details: ["📱 Digitalisation", "🔍 Analyse de données", "🛠 Outils NoCode"]
  }
};

const PassionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entreprise = entreprises[id];

  if (!entreprise) {
    return <p>Entreprise non trouvée.</p>;
  }

  return (
    <div>
      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/entreprise'); }} className="back-link">
        &lt; Retour aux entreprises
      </a>
      <div className="entreprise-detail">
        <div className="entreprise-header">
          <img 
            src={entreprise.image}
            alt="Présentation" 
            className="presentation-image"
          />
          <h3>{entreprise.name}</h3>
          <p>{entreprise.description}</p>
        </div>

        <hr className="separator" />

        <ul className="entreprise-list">
          {entreprise.details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PassionDetail;
