const express = require('express');
const path = require('path');

const app = express();

// Configurer le moteur de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir les fichiers statiques (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Définir les routes pour chaque page
app.get('/', (req, res) => {
    res.render('accueil');
});
app.get('/entreprise', (req, res) => {
    res.render('entreprise');
});
app.get('/ecole', (req, res) => {
    res.render('ecole');
});
app.get('/passion', (req, res) => {
    res.render('passion');
});
app.get('/competences', (req, res) => {
    res.render('competences');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
