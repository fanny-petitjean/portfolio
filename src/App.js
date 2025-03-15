import React from 'react';
import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Entreprise from './pages/Entreprise';
import Presentation from './pages/Presentation';
import Ecole from './pages/Ecole';
import Passion from './pages/Passion';
import Competences from './pages/Competences';
import EntrepriseDetail from './pages/components/EntrepriseDetail';

import PassionDetail from './pages/components/PassionDetail';
import Footer from './pages/Footer';

const App = () => {
  return (
    <div className="App">

    <Router>
      <Header />
      <div className="App-content">

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/entreprise/:id" element={<EntrepriseDetail />} />
        <Route path="/passion/:id" element={<PassionDetail />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/ecole" element={<Ecole />} />
        <Route path="/passion" element={<Passion />} />
        <Route path="/competences" element={<Competences />} />
      </Routes>
      </div>
      <Footer />

    </Router>
    </div>
  );
};

export default App;