import React from 'react';
import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './pages/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Entreprise from './pages/Entreprise';
import Ecole from './pages/Ecole';
import Passion from './pages/Passion';
import Competences from './pages/Competences';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="App-content">

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/ecole" element={<Ecole />} />
        <Route path="/passion" element={<Passion />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

    </Router>
  );
};

export default App;