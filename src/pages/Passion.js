import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Entreprise.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import passion1 from '../assets/images/cgi.jpg';
import passion2 from '../assets/images/infolien.png';
import { Container, Row, Col } from 'react-bootstrap';

const Passion = () => {
  return (
    <Container className="entreprise">
      <Row className="justify-content-center">
        {/* CGI */}
        <Col xs={12} md={6} lg={4} className="entreprise-box">
          <Link to="/passion/photo" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="clickable-card">
              <Card.Img variant="top" src={passion1} className="card-img-top" />
              <Card.Body>
                <Card.Title>Photographie</Card.Title>
                <Card.Text>Paysages</Card.Text>
              </Card.Body>
              
            </Card>
          </Link>
        </Col>

        {/* Infolien */}
        <Col xs={12} md={6} lg={4} className="entreprise-box">
          <Link to="/passion/dessin" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="clickable-card">
              <Card.Img variant="top" src={passion2} className="card-img-top" />
              <Card.Body>
                <Card.Title>Dessin</Card.Title>
                <Card.Text>Numérique ou Manuel</Card.Text>
              </Card.Body>

            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Passion;
