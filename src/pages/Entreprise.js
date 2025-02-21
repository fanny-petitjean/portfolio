import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Entreprise.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import entreprise1 from '../assets/images/cgi.jpg';
import entreprise2 from '../assets/images/infolien.png';
import entreprise3 from '../assets/images/caisseEpargne.png';
import { Container, Row, Col } from 'react-bootstrap';

const Entreprise = () => {
  return (
    <Container className="entreprise">
      <Row className="justify-content-center">
        {/* CGI */}
        <Col xs={12} md={6} lg={4} className="entreprise-box">
          <Link to="/entreprise/cgi" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="clickable-card">
              <Card.Img variant="top" src={entreprise1} className="card-img-top" />
              <Card.Body>
                <Card.Title>CGI</Card.Title>
                <Card.Text>Développement et maintenance d’API.</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>🔧 Développement API</ListGroup.Item>
                <ListGroup.Item>⚙️ Maintenance</ListGroup.Item>
              </ListGroup>
            </Card>
          </Link>
        </Col>

        {/* Infolien */}
        <Col xs={12} md={6} lg={4} className="entreprise-box">
          <Link to="/entreprise/infolien" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="clickable-card">
              <Card.Img variant="top" src={entreprise2} className="card-img-top" />
              <Card.Body>
                <Card.Title>Infolien</Card.Title>
                <Card.Text>Développement de solutions logicielles.</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>💻 Développement Front-End</ListGroup.Item>
                <ListGroup.Item>📂 Gestion des bases de données</ListGroup.Item>
              </ListGroup>
            </Card>
          </Link>
        </Col>

        {/* Caisse d'Épargne */}
        <Col xs={12} md={6} lg={4} className="entreprise-box">
          <Link to="/entreprise/caisseEpargne" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="clickable-card">
              <Card.Img variant="top" src={entreprise3} className="card-img-top" />
              <Card.Body>
                <Card.Title>Caisse d'Épargne</Card.Title>
                <Card.Text>Transformation digitale et intégration de technologies.</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>📱 Digitalisation</ListGroup.Item>
                <ListGroup.Item>🔍 Analyse de données</ListGroup.Item>
              </ListGroup>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Entreprise;
