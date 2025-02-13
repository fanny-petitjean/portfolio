document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');  // Le bouton du menu burger
    const mobileMenu = document.getElementById('mobile-menu');  // Le menu mobile

    // Vérifie si les éléments existent avant d'ajouter l'événement
    if (!menuIcon || !mobileMenu) {
        console.error('Les éléments du menu ne sont pas trouvés !');
        return;
    }

    // Lorsque le bouton burger est cliqué
    menuIcon.addEventListener('click', (event) => {
        console.log('Menu burger cliqué !');

        // Toggle la classe 'show' pour afficher/masquer le menu
        mobileMenu.classList.toggle('show');
    });

    // Fermer le menu lorsque l'on clique en dehors du menu burger et du menu mobile
    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !mobileMenu.contains(event.target)) {
            console.log('Clique en dehors du menu, fermeture du menu');
            mobileMenu.classList.remove('show');  // Ferme le menu si cliqué ailleurs
        }
    });
});
