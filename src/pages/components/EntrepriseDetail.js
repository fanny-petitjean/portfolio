import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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

const EntrepriseDetail = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const entreprise = entreprises[id];

  if (!entreprise) {
    return <p>Entreprise non trouvée.</p>;
  }

  return (
    <div className="entreprise-detail">
      <Card style={{ width: '50%', margin: 'auto' }}>
        <Card.Img variant="top" src={entreprise.image} />
        <Card.Body>
          <Card.Title>{entreprise.name}</Card.Title>
          <Card.Text>{entreprise.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {entreprise.details.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default EntrepriseDetail;
