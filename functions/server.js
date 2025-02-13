const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

const app = express();

// Configuration EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.get('/', (req, res) => res.render('accueil'));
app.get('/entreprise', (req, res) => res.render('entreprise'));
app.get('/ecole', (req, res) => res.render('ecole'));
app.get('/passion', (req, res) => res.render('passion'));
app.get('/competences', (req, res) => res.render('competences'));
app.get('/contact', (req, res) => res.render('contact'));

// Exporter en tant que fonction serverless
module.exports.handler = serverless(app);
