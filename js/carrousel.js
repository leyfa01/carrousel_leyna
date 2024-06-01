(function () {
    // Conteneur principal
    let carrousel = document.querySelector(".carrousel_WP");
    // Bouton fermer
    let carrousel_fermer = document.querySelector(".carrousel_fermer");
    // Conteneur image
    let carrousel_figure = document.querySelector(".carrousel_figure");
    // Conteneur bouton radio
    let carrousel_radio = document.querySelector(".carrousel_radio");
    // Les 2 flches
    let carrousel_suivant = document.querySelector(".carrousel_suivant");
    let carrousel_precedent = document.querySelector(".carrousel_precedent");
    // Conteneur des images a prendre
    let galerie = document.querySelector('.img_galerie');
    // Les images a prendre de la page
    let images_galerie = galerie.querySelectorAll('img');
    // Index de l'image afficher
    let imageIndexActuel = 0;
    // Tableau des images
    let carrousel_tableau_images = []; 
    
    // On loop a travers toutes les images, et on les ajoute au tableau
    for (let i = 0; i < images_galerie.length; i++) {
        let carrousel_image = document.createElement('img');
        carrousel_image.classList.add('carrousel_image');
        carrousel_image.src = images_galerie[i].src;
        carrousel_figure.appendChild(carrousel_image);
        carrousel_tableau_images.push(carrousel_image);

        
        if (i === 0) {
            
            carrousel_image.style.opacity = '1';
        } else {
            carrousel_image.style.opacity = '0';
        }
        // On donne un bouton radio, une value pareil que l'index de l'imagea
        let bouton_radio = document.createElement('input');
        bouton_radio.type = 'radio';
        bouton_radio.name = 'image_radio';
        bouton_radio.value = i;
        bouton_radio.classList.add('bouton_radio');
        carrousel_radio.appendChild(bouton_radio);
    }

    // Change l'image afficher selon l'index de l'image actuel
    function changerImage() {
        carrousel_tableau_images.forEach((img, index) => {
            img.style.opacity = index === imageIndexActuel ? '1' : '0';
        });
        document.querySelectorAll('.bouton_radio')[imageIndexActuel].checked = true;
    }

    carrousel_fermer.addEventListener("click", function () {
        carrousel_figure.classList.add('carrousel_fermer_animation');
        setTimeout(() => {
            document.body.classList.remove('scrollBloquer');
            carrousel.classList.remove('carrousel_ouvert');
            carrousel_figure.classList.remove('carrousel_fermer_animation');
        }, 300);
    });

    

    let boutons_radio = document.querySelectorAll('input[type="radio"]');
    boutons_radio.forEach   (function (bouton_radio) {
        bouton_radio.addEventListener('change', function () {
            
            imageIndexActuel = parseInt(this.value);
            changerImage();
        });
    }); 

    images_galerie.forEach((img, index) => {
        img.addEventListener('click', function () {
            imageIndexActuel = index;
            carrousel.classList.add('carrousel_ouvert');
            document.body.classList.add('scrollBloquer');
            changerImage();
        });
    });

    carrousel_suivant.addEventListener('click', function () {
        imageIndexActuel = (imageIndexActuel + 1) % carrousel_tableau_images.length;
        changerImage();
    });

    carrousel_precedent.addEventListener('click', function () {
        imageIndexActuel = (imageIndexActuel - 1 + carrousel_tableau_images.length) % carrousel_tableau_images.length;
        changerImage();
    });
    
})();
